var ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},gs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bd=0,gu=1,Md=2;var Ba=1,Ml=2,kr=3,_s=0,yn=1,_i=2,Li=0,Lr=1,qn=2,_u=3,xu=4,Sd=5;var Ls=100,wd=101,Ad=102,Ed=103,Td=104,Cd=200,Rd=201,Id=202,Pd=203,yu=204,vu=205,kd=206,Ld=207,Dd=208,Nd=209,Ud=210,Fd=211,Od=212,Bd=213,zd=214,Bo=0,zo=1,Vo=2,fr=3,Go=4,Ho=5,Wo=6,Xo=7,Sl=0,Vd=1,Gd=2,xi=0,bu=1,Mu=2,Su=3,wu=4,Au=5,Eu=6,za=7;var Tu=300,xs=301,Ds=302,wl=303,Al=304,Va=306,pr=1e3,Ri=1001,Yo=1002,_n=1003,Hd=1004;var Ga=1005;var cn=1006,El=1007;var Di=1008;var Nn=1009,Cu=1010,Ru=1011,Dr=1012,Tl=1013,yi=1014,Qn=1015,vi=1016,Cl=1017,Rl=1018,Nr=1020,Iu=35902,Pu=35899,ku=1021,Lu=1022,ti=1023,Pi=1026,ys=1027,Il=1028,Pl=1029,vs=1030,kl=1031;var Ll=1033,Ha=33776,Wa=33777,Xa=33778,Ya=33779,Dl=35840,Nl=35841,Ul=35842,Fl=35843,Ol=36196,Bl=37492,zl=37496,Vl=37488,Gl=37489,qa=37490,Hl=37491,Wl=37808,Xl=37809,Yl=37810,ql=37811,Kl=37812,Zl=37813,$l=37814,Jl=37815,jl=37816,Ql=37817,tc=37818,ec=37819,nc=37820,ic=37821,sc=36492,rc=36494,ac=36495,oc=36283,lc=36284,Ka=36285,cc=36286;var ra=2300,qo=2301,Fo=2302,su=2303,ru=2400,au=2401,ou=2402;var Wd=3200;var Za=0,Xd=1,bi="",ln="srgb",aa="srgb-linear",oa="linear",Ne="srgb";var Oo=7680;var Yd=519,qd=512,Kd=513,Zd=514,uc=515,$d=516,Jd=517,hc=518,jd=519,Du=35044;var Nu="300 es",hi=2e3,mr=2001;function Wp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Xp(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function la(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Qd(){let i=la("canvas");return i.style.display="block",i}var Fh={},gr=null;function ca(...i){let t="THREE."+i.shift();gr?gr("log",t,...i):console.log(t,...i)}function tf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function oe(...i){i=tf(i);let t="THREE."+i.shift();if(gr)gr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function ce(...i){i=tf(i);let t="THREE."+i.shift();if(gr)gr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Cs(...i){let t=i.join(" ");t in Fh||(Fh[t]=!0,oe(...i))}function ef(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var nf={[Bo]:zo,[Vo]:Wo,[Go]:Xo,[fr]:Ho,[zo]:Bo,[Wo]:Vo,[Xo]:Go,[Ho]:fr},di=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,hr=Math.PI/180,_r=180/Math.PI;function Ii(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[i&255]+Sn[i>>8&255]+Sn[i>>16&255]+Sn[i>>24&255]+"-"+Sn[t&255]+Sn[t>>8&255]+"-"+Sn[t>>16&15|64]+Sn[t>>24&255]+"-"+Sn[e&63|128]+Sn[e>>8&255]+"-"+Sn[e>>16&255]+Sn[e>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function _e(i,t,e){return Math.max(t,Math.min(e,i))}function Uu(i,t){return(i%t+t)%t}function Yp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function qp(i,t,e){return i!==t?(e-i)/(t-i):0}function na(i,t,e){return(1-e)*i+e*t}function Kp(i,t,e,n){return na(i,t,1-Math.exp(-e*n))}function Zp(i,t=1){return t-Math.abs(Uu(i,t*2)-t)}function $p(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Jp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function jp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Qp(i,t){return i+Math.random()*(t-i)}function tm(i){return i*(.5-Math.random())}function em(i){i!==void 0&&(Oh=i);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function nm(i){return i*hr}function im(i){return i*_r}function sm(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function rm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function am(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function om(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),u=a((t+n)/2),d=r((t-n)/2),h=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*u,o*c);break;default:oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ui(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ue(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Fu={DEG2RAD:hr,RAD2DEG:_r,generateUUID:Ii,clamp:_e,euclideanModulo:Uu,mapLinear:Yp,inverseLerp:qp,lerp:na,damp:Kp,pingpong:Zp,smoothstep:$p,smootherstep:Jp,randInt:jp,randFloat:Qp,randFloatSpread:tm,seededRandom:em,degToRad:nm,radToDeg:im,isPowerOfTwo:sm,ceilPowerOfTwo:rm,floorPowerOfTwo:am,setQuaternionFromProperEuler:om,normalize:Ue,denormalize:ui},Hu=class Hu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hu.prototype.isVector2=!0;var it=Hu,Ln=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3],h=r[a+0],f=r[a+1],g=r[a+2],M=r[a+3];if(d!==M||l!==h||c!==f||u!==g){let m=l*h+c*f+u*g+d*M;m<0&&(h=-h,f=-f,g=-g,M=-M,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),S=Math.sin(b);p=Math.sin(p*b)/S,o=Math.sin(o*b)/S,l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+M*o}else{l=l*p+h*o,c=c*p+f*o,u=u*p+g*o,d=d*p+M*o;let b=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=b,c*=b,u*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],h=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+u*d+l*f-c*h,t[e+1]=l*g+u*h+c*d-o*f,t[e+2]=c*g+u*f+o*h-l*d,t[e+3]=u*g-o*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),h=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Wu=class Wu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),u=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Pc.copy(this).projectOnVector(t),this.sub(Pc)}reflect(t){return this.sub(Pc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(_e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Wu.prototype.isVector3=!0;var I=Wu,Pc=new I,Bh=new Ln,Xu=class Xu{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],M=s[0],m=s[3],p=s[6],b=s[1],S=s[4],y=s[7],E=s[2],v=s[5],T=s[8];return r[0]=a*M+o*b+l*E,r[3]=a*m+o*S+l*v,r[6]=a*p+o*y+l*T,r[1]=c*M+u*b+d*E,r[4]=c*m+u*S+d*v,r[7]=c*p+u*y+d*T,r[2]=h*M+f*b+g*E,r[5]=h*m+f*S+g*v,r[8]=h*p+f*y+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=u*a-o*c,h=o*l-u*r,f=c*r-a*l,g=e*d+n*h+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=d*M,t[1]=(s*c-u*n)*M,t[2]=(o*n-s*a)*M,t[3]=h*M,t[4]=(u*e-s*l)*M,t[5]=(s*r-o*e)*M,t[6]=f*M,t[7]=(n*l-c*e)*M,t[8]=(a*e-n*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(kc.makeScale(t,e)),this}rotate(t){return Cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(kc.makeRotation(-t)),this}translate(t,e){return Cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(kc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Xu.prototype.isMatrix3=!0;var fe=Xu,kc=new fe,zh=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vh=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lm(){let i={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Ne&&(s.r=Wi(s.r),s.g=Wi(s.g),s.b=Wi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Ne&&(s.r=dr(s.r),s.g=dr(s.g),s.b=dr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?oa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[aa]:{primaries:t,whitePoint:n,transfer:oa,toXYZ:zh,fromXYZ:Vh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:Ne,toXYZ:zh,fromXYZ:Vh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),i}var Te=lm();function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var qs,Ko=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{qs===void 0&&(qs=la("canvas")),qs.width=t.width,qs.height=t.height;let s=qs.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=qs}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=la("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},cm=0,xr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=Ii(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lc(s[a].image)):r.push(Lc(s[a]))}else r=Lc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ko.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}var um=0,Dc=new I,In=class i extends di{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ri,s=Ri,r=cn,a=Di,o=ti,l=Nn,c=i.DEFAULT_ANISOTROPY,u=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:um++}),this.uuid=Ii(),this.name="",this.source=new xr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Tu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Tu;In.DEFAULT_ANISOTROPY=1;var Yu=class Yu{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],M=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+M)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,E=(p+1)/2,v=(u+h)/4,T=(d+M)/4,_=(g+m)/4;return S>y&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=v/n,r=T/n):y>E?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=v/s,r=_/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=T/r,s=_/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-M)*(d-M)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-M)/b,this.z=(h-u)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=_e(this.x,t.x,e.x),this.y=_e(this.y,t.y,e.y),this.z=_e(this.z,t.z,e.z),this.w=_e(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=_e(this.x,t,e),this.y=_e(this.y,t,e),this.z=_e(this.z,t,e),this.w=_e(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(_e(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yu.prototype.isVector4=!0;var qe=Yu,Zo=class extends di{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new qe(0,0,t,e),this.scissorTest=!1,this.viewport=new qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new In(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:cn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new xr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Dn=class extends Zo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ua=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $o=class extends In{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_n,this.minFilter=_n,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var bl=class bl{constructor(t,e,n,s,r,a,o,l,c,u,d,h,f,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,M,m)}set(t,e,n,s,r,a,o,l,c,u,d,h,f,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ks.setFromMatrixColumn(t,0).length(),r=1/Ks.setFromMatrixColumn(t,1).length(),a=1/Ks.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let h=a*u,f=a*d,g=o*u,M=o*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=h-M*c,e[9]=-o*l,e[2]=M-h*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let h=l*u,f=l*d,g=c*u,M=c*d;e[0]=h+M*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=M+h*o,e[10]=a*l}else if(t.order==="ZXY"){let h=l*u,f=l*d,g=c*u,M=c*d;e[0]=h-M*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=M-h*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let h=a*u,f=a*d,g=o*u,M=o*d;e[0]=l*u,e[4]=g*c-f,e[8]=h*c+M,e[1]=l*d,e[5]=M*c+h,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let h=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=M-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=f*d+g,e[10]=h-M*d}else if(t.order==="XZY"){let h=a*l,f=a*c,g=o*l,M=o*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+M,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=M*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(hm,t,dm)}lookAt(t,e,n){let s=this.elements;return zn.subVectors(t,e),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),es.crossVectors(n,zn),es.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),es.crossVectors(n,zn)),es.normalize(),ao.crossVectors(zn,es),s[0]=es.x,s[4]=ao.x,s[8]=zn.x,s[1]=es.y,s[5]=ao.y,s[9]=zn.y,s[2]=es.z,s[6]=ao.z,s[10]=zn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],M=n[6],m=n[10],p=n[14],b=n[3],S=n[7],y=n[11],E=n[15],v=s[0],T=s[4],_=s[8],A=s[12],P=s[1],k=s[5],N=s[9],z=s[13],L=s[2],F=s[6],X=s[10],$=s[14],ft=s[3],j=s[7],rt=s[11],ut=s[15];return r[0]=a*v+o*P+l*L+c*ft,r[4]=a*T+o*k+l*F+c*j,r[8]=a*_+o*N+l*X+c*rt,r[12]=a*A+o*z+l*$+c*ut,r[1]=u*v+d*P+h*L+f*ft,r[5]=u*T+d*k+h*F+f*j,r[9]=u*_+d*N+h*X+f*rt,r[13]=u*A+d*z+h*$+f*ut,r[2]=g*v+M*P+m*L+p*ft,r[6]=g*T+M*k+m*F+p*j,r[10]=g*_+M*N+m*X+p*rt,r[14]=g*A+M*z+m*$+p*ut,r[3]=b*v+S*P+y*L+E*ft,r[7]=b*T+S*k+y*F+E*j,r[11]=b*_+S*N+y*X+E*rt,r[15]=b*A+S*z+y*$+E*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],M=t[7],m=t[11],p=t[15],b=l*f-c*h,S=o*f-c*d,y=o*h-l*d,E=a*f-c*u,v=a*h-l*u,T=a*d-o*u;return e*(M*b-m*S+p*y)-n*(g*b-m*E+p*v)+s*(g*S-M*E+p*T)-r*(g*y-M*v+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],u=t[10];return e*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],M=t[13],m=t[14],p=t[15],b=e*o-n*a,S=e*l-s*a,y=e*c-r*a,E=n*l-s*o,v=n*c-r*o,T=s*c-r*l,_=u*M-d*g,A=u*m-h*g,P=u*p-f*g,k=d*m-h*M,N=d*p-f*M,z=h*p-f*m,L=b*z-S*N+y*k+E*P-v*A+T*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let F=1/L;return t[0]=(o*z-l*N+c*k)*F,t[1]=(s*N-n*z-r*k)*F,t[2]=(M*T-m*v+p*E)*F,t[3]=(h*v-d*T-f*E)*F,t[4]=(l*P-a*z-c*A)*F,t[5]=(e*z-s*P+r*A)*F,t[6]=(m*y-g*T-p*S)*F,t[7]=(u*T-h*y+f*S)*F,t[8]=(a*N-o*P+c*_)*F,t[9]=(n*P-e*N-r*_)*F,t[10]=(g*v-M*y+p*b)*F,t[11]=(d*y-u*v-f*b)*F,t[12]=(o*A-a*k-l*_)*F,t[13]=(e*k-n*A+s*_)*F,t[14]=(M*S-g*E-m*b)*F,t[15]=(u*E-d*S+h*b)*F,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,u=a+a,d=o+o,h=r*c,f=r*u,g=r*d,M=a*u,m=a*d,p=o*d,b=l*c,S=l*u,y=l*d,E=n.x,v=n.y,T=n.z;return s[0]=(1-(M+p))*E,s[1]=(f+y)*E,s[2]=(g-S)*E,s[3]=0,s[4]=(f-y)*v,s[5]=(1-(h+p))*v,s[6]=(m+b)*v,s[7]=0,s[8]=(g+S)*T,s[9]=(m-b)*T,s[10]=(1-(h+M))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ks.set(s[0],s[1],s[2]).length(),o=Ks.set(s[4],s[5],s[6]).length(),l=Ks.set(s[8],s[9],s[10]).length();r<0&&(a=-a),oi.copy(this);let c=1/a,u=1/o,d=1/l;return oi.elements[0]*=c,oi.elements[1]*=c,oi.elements[2]*=c,oi.elements[4]*=u,oi.elements[5]*=u,oi.elements[6]*=u,oi.elements[8]*=d,oi.elements[9]*=d,oi.elements[10]*=d,e.setFromRotationMatrix(oi),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=hi,l=!1){let c=this.elements,u=2*r/(e-t),d=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s),g,M;if(l)g=r/(a-r),M=a*r/(a-r);else if(o===hi)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===mr)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=hi,l=!1){let c=this.elements,u=2/(e-t),d=2/(n-s),h=-(e+t)/(e-t),f=-(n+s)/(n-s),g,M;if(l)g=1/(a-r),M=a/(a-r);else if(o===hi)g=-2/(a-r),M=-(a+r)/(a-r);else if(o===mr)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};bl.prototype.isMatrix4=!0;var Ie=bl,Ks=new I,oi=new Ie,hm=new I(0,0,0),dm=new I(1,1,1),es=new I,ao=new I,zn=new I,Gh=new Ie,Hh=new Ln,fi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],h=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(_e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(_e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(_e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-_e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hh.setFromEuler(this),this.setFromQuaternion(Hh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},fm=0,Wh=new I,Zs=new Ln,Bi=new Ie,oo=new I,Xr=new I,pm=new I,mm=new Ln,Xh=new I(1,0,0),Yh=new I(0,1,0),qh=new I(0,0,1),Kh={type:"added"},gm={type:"removed"},$s={type:"childadded",child:null},Nc={type:"childremoved",child:null},Ke=class i extends di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new fi,n=new Ln,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new fe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.multiply(Zs),this}rotateOnWorldAxis(t,e){return Zs.setFromAxisAngle(t,e),this.quaternion.premultiply(Zs),this}rotateX(t){return this.rotateOnAxis(Xh,t)}rotateY(t){return this.rotateOnAxis(Yh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Wh.copy(t).applyQuaternion(this.quaternion),this.position.add(Wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Xh,t)}translateY(t){return this.translateOnAxis(Yh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Xr,oo,this.up):Bi.lookAt(oo,Xr,this.up),this.quaternion.setFromRotationMatrix(Bi),s&&(Bi.extractRotation(s.matrixWorld),Zs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Zs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),$s.child=t,this.dispatchEvent($s),$s.child=null):ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(gm),Nc.child=t,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Bi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Bi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),$s.child=t,this.dispatchEvent($s),$s.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,t,pm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,mm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),d=a(t.shapes),h=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ke.DEFAULT_UP=new I(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=class extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},_m={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,n),p=this._getHandJoint(c,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_m)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},lo={h:0,s:0,l:0};function Uc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Qt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=n,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Te.workingColorSpace){if(t=Uu(t,1),e=_e(e,0,1),n=_e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Uc(a,r,t+1/3),this.g=Uc(a,r,t),this.b=Uc(a,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=ln){function n(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=sf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return Te.workingToColorSpace(wn.copy(this),t),Math.round(_e(wn.r*255,0,255))*65536+Math.round(_e(wn.g*255,0,255))*256+Math.round(_e(wn.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(wn.copy(this),e);let n=wn.r,s=wn.g,r=wn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(wn.copy(this),e),t.r=wn.r,t.g=wn.g,t.b=wn.b,t}getStyle(t=ln){Te.workingToColorSpace(wn.copy(this),t);let e=wn.r,n=wn.g,s=wn.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ns),this.setHSL(ns.h+t,ns.s+e,ns.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ns),t.getHSL(lo);let n=na(ns.h,lo.h,e),s=na(ns.s,lo.s,e),r=na(ns.l,lo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wn=new Qt;Qt.NAMES=sf;var Rs=class extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},li=new I,zi=new I,Fc=new I,Vi=new I,Js=new I,js=new I,Zh=new I,Oc=new I,Bc=new I,zc=new I,Vc=new qe,Gc=new qe,Hc=new qe,Ci=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),li.subVectors(t,e),s.cross(li);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){li.subVectors(s,e),zi.subVectors(n,e),Fc.subVectors(t,e);let a=li.dot(li),o=li.dot(zi),l=li.dot(Fc),c=zi.dot(zi),u=zi.dot(Fc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Vi.x),l.addScaledVector(a,Vi.y),l.addScaledVector(o,Vi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Vc.setScalar(0),Gc.setScalar(0),Hc.setScalar(0),Vc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),Hc.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Vc,r.x),a.addScaledVector(Gc,r.y),a.addScaledVector(Hc,r.z),a}static isFrontFacing(t,e,n,s){return li.subVectors(n,e),zi.subVectors(t,e),li.cross(zi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return li.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),li.cross(zi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Js.subVectors(s,n),js.subVectors(r,n),Oc.subVectors(t,n);let l=Js.dot(Oc),c=js.dot(Oc);if(l<=0&&c<=0)return e.copy(n);Bc.subVectors(t,s);let u=Js.dot(Bc),d=js.dot(Bc);if(u>=0&&d<=u)return e.copy(s);let h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(Js,a);zc.subVectors(t,r);let f=Js.dot(zc),g=js.dot(zc);if(g>=0&&f<=g)return e.copy(r);let M=f*c-l*g;if(M<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(js,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return Zh.subVectors(r,s),o=(d-u)/(d-u+(f-g)),e.copy(s).addScaledVector(Zh,o);let p=1/(m+M+h);return a=M*p,o=h*p,e.copy(n).addScaledVector(Js,a).addScaledVector(js,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Pn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(r,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),co.copy(n.boundingBox)),co.applyMatrix4(t.matrixWorld),this.union(co)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),uo.subVectors(this.max,Yr),Qs.subVectors(t.a,Yr),tr.subVectors(t.b,Yr),er.subVectors(t.c,Yr),is.subVectors(tr,Qs),ss.subVectors(er,tr),Ss.subVectors(Qs,er);let e=[0,-is.z,is.y,0,-ss.z,ss.y,0,-Ss.z,Ss.y,is.z,0,-is.x,ss.z,0,-ss.x,Ss.z,0,-Ss.x,-is.y,is.x,0,-ss.y,ss.x,0,-Ss.y,Ss.x,0];return!Wc(e,Qs,tr,er,uo)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,Qs,tr,er,uo))?!1:(ho.crossVectors(is,ss),e=[ho.x,ho.y,ho.z],Wc(e,Qs,tr,er,uo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gi=[new I,new I,new I,new I,new I,new I,new I,new I],ci=new I,co=new Pn,Qs=new I,tr=new I,er=new I,is=new I,ss=new I,Ss=new I,Yr=new I,uo=new I,ho=new I,ws=new I;function Wc(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ws.fromArray(i,r);let o=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=t.dot(ws),c=e.dot(ws),u=n.dot(ws);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var rn=new I,fo=new it,xm=0,An=class extends di{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Du,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)fo.fromBufferAttribute(this,e),fo.applyMatrix3(t),this.setXY(e,fo.x,fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ha=class extends An{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var da=class extends An{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ce=class extends An{constructor(t,e,n){super(new Float32Array(t),e,n)}},ym=new Pn,qr=new I,Xc=new I,Xi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ym.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);let e=qr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(Xc)),this.expandByPoint(qr.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},vm=0,Jn=new Ie,Yc=new Ke,nr=new I,Vn=new Pn,Kr=new Pn,gn=new I,Je=class i extends di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wp(t)?da:ha)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new fe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Yc.lookAt(t),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ce(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Kr.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(Vn.min,Kr.min),Vn.expandByPoint(gn),gn.addVectors(Vn.max,Kr.max),Vn.expandByPoint(gn)):(Vn.expandByPoint(Kr.min),Vn.expandByPoint(Kr.max))}Vn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)gn.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(gn));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)gn.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(t,c),gn.add(nr)),s=Math.max(s,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new An(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new I,l[_]=new I;let c=new I,u=new I,d=new I,h=new it,f=new it,g=new it,M=new I,m=new I;function p(_,A,P){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,A),d.fromBufferAttribute(n,P),h.fromBufferAttribute(r,_),f.fromBufferAttribute(r,A),g.fromBufferAttribute(r,P),u.sub(c),d.sub(c),f.sub(h),g.sub(h);let k=1/(f.x*g.y-g.x*f.y);isFinite(k)&&(M.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(k),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(k),o[_].add(M),o[A].add(M),o[P].add(M),l[_].add(m),l[A].add(m),l[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let _=0,A=b.length;_<A;++_){let P=b[_],k=P.start,N=P.count;for(let z=k,L=k+N;z<L;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let S=new I,y=new I,E=new I,v=new I;function T(_){E.fromBufferAttribute(s,_),v.copy(E);let A=o[_];S.copy(A),S.sub(E.multiplyScalar(E.dot(A))).normalize(),y.crossVectors(v,A);let k=y.dot(l[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,k)}for(let _=0,A=b.length;_<A;++_){let P=b[_],k=P.start,N=P.count;for(let z=k,L=k+N;z<L;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new An(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),M=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(o,l){let c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u),f=0,g=0;for(let M=0,m=l.length;M<m;M++){o.isInterleavedBufferAttribute?f=l[M]*o.data.stride+o.offset:f=l[M]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new An(h,u,d)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){let h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){let f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],d=r[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,u=a.length;c<u;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Du,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Rn=new I,br=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyMatrix4(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.applyNormalMatrix(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Rn.fromBufferAttribute(this,e),Rn.transformDirection(t),this.setXYZ(e,Rn.x,Rn.y,Rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ue(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ue(e,this.array),n=Ue(n,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){ca("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new An(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ca("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},qc=new I,bm=new I,Mm=new fe,Gn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qc.subVectors(n,e).cross(bm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(qc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mm.getNormalMatrix(t),s=this.coplanarPoint(qc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Sm=0,jn=class extends di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sm++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=Lr,this.side=_s,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yu,this.blendDst=vu,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qt(0,0,0),this.blendAlpha=0,this.depthFunc=fr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Oo,this.stencilZFail=Oo,this.stencilZPass=Oo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Gn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Is=class extends jn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ir,Zr=new I,sr=new I,rr=new I,ar=new it,$r=new it,rf=new Ie,po=new I,Jr=new I,mo=new I,$h=new it,Kc=new it,Jh=new it,Mr=class extends Ke{constructor(t=new Is){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new Je;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new fa(e,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new br(n,3,0,!1)),ir.setAttribute("uv",new br(n,2,3,!1))}this.geometry=ir,this.material=t,this.center=new it(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ce('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),sr.setFromMatrixScale(this.matrixWorld),rf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),rr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&sr.multiplyScalar(-rr.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;go(po.set(-.5,-.5,0),rr,a,sr,s,r),go(Jr.set(.5,-.5,0),rr,a,sr,s,r),go(mo.set(.5,.5,0),rr,a,sr,s,r),$h.set(0,0),Kc.set(1,0),Jh.set(1,1);let o=t.ray.intersectTriangle(po,Jr,mo,!1,Zr);if(o===null&&(go(Jr.set(-.5,.5,0),rr,a,sr,s,r),Kc.set(0,1),o=t.ray.intersectTriangle(po,mo,Jr,!1,Zr),o===null))return;let l=t.ray.origin.distanceTo(Zr);l<t.near||l>t.far||e.push({distance:l,point:Zr.clone(),uv:Ci.getInterpolation(Zr,po,Jr,mo,$h,Kc,Jh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function go(i,t,e,n,s,r){ar.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?($r.x=r*ar.x-s*ar.y,$r.y=s*ar.x+r*ar.y):$r.copy(ar),i.copy(t),i.x+=$r.x,i.y+=$r.y,i.applyMatrix4(rf)}var Hi=new I,Zc=new I,_o=new I,xo=new I,as=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hi.copy(this.origin).addScaledVector(this.direction,e),Hi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Zc.copy(t).add(e).multiplyScalar(.5),_o.copy(e).sub(t).normalize(),xo.copy(this.origin).sub(Zc);let r=t.distanceTo(e)*.5,a=-this.direction.dot(_o),o=xo.dot(this.direction),l=-xo.dot(_o),c=xo.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=r*u,d>=0)if(h>=-g)if(h<=g){let M=1/u;d*=M,h*=M,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*r+o)),h=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-r,-l),r),f=h*(h+2*l)+c):(d=Math.max(0,-(a*r+o)),h=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+h*(h+2*l)+c);else h=a>0?-r:r,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Zc).addScaledVector(_o,h),f}intersectSphere(t,e){if(t.radius<0)return null;Hi.subVectors(t.center,this.origin);let n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,S=n.z-a.z,y=Math.abs(l),E=Math.abs(c),v=Math.abs(u),T,_,A,P,k,N,z,L,F,X,$,ft;if(y>=E&&y>=v?(A=l,N=d,F=g,ft=p,l>=0?(T=c,_=u,P=h,k=f,z=M,L=m,X=b,$=S):(T=u,_=c,P=f,k=h,z=m,L=M,X=S,$=b)):E>=v?(A=c,N=h,F=M,ft=b,c>=0?(T=u,_=l,P=f,k=d,z=m,L=g,X=S,$=p):(T=l,_=u,P=d,k=f,z=g,L=m,X=p,$=S)):(A=u,N=f,F=m,ft=S,u>=0?(T=l,_=c,P=d,k=h,z=g,L=M,X=p,$=b):(T=c,_=l,P=h,k=d,z=M,L=g,X=b,$=p)),A===0)return null;let j=T/A,rt=_/A,ut=1/A,Wt=P-j*N,kt=k-rt*N,pe=z-j*F,me=L-rt*F,ae=X-j*ft,tt=$-rt*ft,st=ae*me-tt*pe,xt=Wt*tt-kt*ae,Xt=pe*kt-me*Wt;if(s){if(st<0||xt<0||Xt<0)return null}else if((st<0||xt<0||Xt<0)&&(st>0||xt>0||Xt>0))return null;let It=st+xt+Xt;if(It===0)return null;let te=ut*(st*N+xt*F+Xt*ft);return(It>0?te<0:te>0)?null:this.at(te/It,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends jn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jh=new Ie,As=new as,yo=new Xi,Qh=new I,vo=new I,bo=new I,Mo=new I,$c=new I,So=new I,td=new I,wo=new I,Nt=class extends Ke{constructor(t=new Je,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){So.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],d=r[l];u!==0&&($c.fromBufferAttribute(d,t),a?So.addScaledVector($c,u):So.addScaledVector($c.sub(e),u))}e.add(So)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(r),As.copy(t.ray).recast(t.near),!(yo.containsPoint(As.origin)===!1&&(As.intersectSphere(yo,Qh)===null||As.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(jh.copy(r).invert(),As.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&As.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,As)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,h=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){let m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,E=S;y<E;y+=3){let v=o.getX(y),T=o.getX(y+1),_=o.getX(y+2);s=Ao(this,p,t,n,c,u,d,v,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(o.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let b=o.getX(m),S=o.getX(m+1),y=o.getX(m+2);s=Ao(this,a,t,n,c,u,d,b,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,M=h.length;g<M;g++){let m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,E=S;y<E;y+=3){let v=y,T=y+1,_=y+2;s=Ao(this,p,t,n,c,u,d,v,T,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),M=Math.min(l.count,f.start+f.count);for(let m=g,p=M;m<p;m+=3){let b=m,S=m+1,y=m+2;s=Ao(this,a,t,n,c,u,d,b,S,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function wm(i,t,e,n,s,r,a,o){let l;if(t.side===yn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===_s,o),l===null)return null;wo.copy(o),wo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:i}}function Ao(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vo),i.getVertexPosition(l,bo),i.getVertexPosition(c,Mo);let u=wm(i,t,e,n,vo,bo,Mo,td);if(u){let d=new I;Ci.getBarycoord(td,vo,bo,Mo,d),s&&(u.uv=Ci.getInterpolatedAttribute(s,o,l,c,d,new it)),r&&(u.uv1=Ci.getInterpolatedAttribute(r,o,l,c,d,new it)),a&&(u.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new I,materialIndex:0};Ci.getNormal(vo,bo,Mo,h.normal),u.face=h,u.barycoord=d}return u}var pa=class extends In{constructor(t=null,e=1,n=1,s,r,a,o,l,c=_n,u=_n,d,h){super(null,a,o,l,c,u,s,r,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Sr=class extends An{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},or=new Ie,ed=new Ie,Eo=[],nd=new Pn,Am=new Ie,jr=new Nt,Qr=new Xi,pi=class extends Nt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Sr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Am)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Pn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),nd.copy(t.boundingBox).applyMatrix4(or),this.boundingBox.union(nd)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,or),Qr.copy(t.boundingSphere).applyMatrix4(or),this.boundingSphere.union(Qr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(jr.geometry=this.geometry,jr.material=this.material,jr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qr.copy(this.boundingSphere),Qr.applyMatrix4(n),t.ray.intersectsSphere(Qr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,or),ed.multiplyMatrices(n,or),jr.matrixWorld=ed,jr.raycast(t,Eo);for(let a=0,o=Eo.length;a<o;a++){let l=Eo[a];l.instanceId=r,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Sr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pa(new Float32Array(s*this.count),s,this.count,Il,Qn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Es=new Xi,Em=new it(.5,.5),To=new I,wr=class{constructor(t=new Gn,e=new Gn,n=new Gn,s=new Gn,r=new Gn,a=new Gn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=hi,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],d=r[5],h=r[6],f=r[7],g=r[8],M=r[9],m=r[10],p=r[11],b=r[12],S=r[13],y=r[14],E=r[15];if(s[0].setComponents(c-a,f-u,p-g,E-b).normalize(),s[1].setComponents(c+a,f+u,p+g,E+b).normalize(),s[2].setComponents(c+o,f+d,p+M,E+S).normalize(),s[3].setComponents(c-o,f-d,p-M,E-S).normalize(),n)s[4].setComponents(l,h,m,y).normalize(),s[5].setComponents(c-l,f-h,p-m,E-y).normalize();else if(s[4].setComponents(c-l,f-h,p-m,E-y).normalize(),e===hi)s[5].setComponents(c+l,f+h,p+m,E+y).normalize();else if(e===mr)s[5].setComponents(l,h,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);let e=Em.distanceTo(t.center);return Es.radius=.7071067811865476+e,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(To.x=s.normal.x>0?t.max.x:t.min.x,To.y=s.normal.y>0?t.max.y:t.min.y,To.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(To)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ar=class extends jn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Jo=new I,jo=new I,id=new Ie,ta=new as,Co=new Xi,Jc=new I,sd=new I,Qo=class extends Ke{constructor(t=new Je,e=new Ar){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Jo.fromBufferAttribute(e,s-1),jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Jo.distanceTo(jo);t.setAttribute("lineDistance",new Ce(n,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Co.radius+=r,t.ray.intersectsSphere(Co)===!1)return;id.copy(s).invert(),ta.copy(t.ray).applyMatrix4(id);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=u.getX(M),b=u.getX(M+1),S=Ro(this,t,ta,l,p,b,M);S&&e.push(S)}if(this.isLineLoop){let M=u.getX(g-1),m=u.getX(f),p=Ro(this,t,ta,l,M,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let M=f,m=g-1;M<m;M+=c){let p=Ro(this,t,ta,l,M,M+1,M);p&&e.push(p)}if(this.isLineLoop){let M=Ro(this,t,ta,l,g-1,f,g-1);M&&e.push(M)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ro(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(Jo.fromBufferAttribute(o,s),jo.fromBufferAttribute(o,r),e.distanceSqToSegment(Jo,jo,Jc,sd)>n)return;Jc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jc);if(!(c<t.near||c>t.far))return{distance:c,point:sd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var rd=new I,ad=new I,ma=class extends Qo{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)rd.fromBufferAttribute(e,s),ad.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+rd.distanceTo(ad);t.setAttribute("lineDistance",new Ce(n,1))}else oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ga=class extends In{constructor(t=[],e=xs,n,s,r,a,o,l,c,u){super(t,e,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},os=class extends In{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ls=class extends In{constructor(t,e,n=yi,s,r,a,o=_n,l=_n,c,u=Pi,d=1){if(u!==Pi&&u!==ys)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:d};super(h,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new xr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tl=class extends ls{constructor(t,e=yi,n=xs,s,r,a=_n,o=_n,l,c=Pi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},_a=class extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},xe=class i extends Je{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],d=[],h=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(d,2));function g(M,m,p,b,S,y,E,v,T,_,A){let P=y/T,k=E/_,N=y/2,z=E/2,L=v/2,F=T+1,X=_+1,$=0,ft=0,j=new I;for(let rt=0;rt<X;rt++){let ut=rt*k-z;for(let Wt=0;Wt<F;Wt++){let kt=Wt*P-N;j[M]=kt*b,j[m]=ut*S,j[p]=L,c.push(j.x,j.y,j.z),j[M]=0,j[m]=0,j[p]=v>0?1:-1,u.push(j.x,j.y,j.z),d.push(Wt/T),d.push(1-rt/_),$+=1}}for(let rt=0;rt<_;rt++)for(let ut=0;ut<T;ut++){let Wt=h+ut+F*rt,kt=h+ut+F*(rt+1),pe=h+(ut+1)+F*(rt+1),me=h+(ut+1)+F*rt;l.push(Wt,kt,me),l.push(kt,pe,me),ft+=6}o.addGroup(f,ft,A),f+=ft,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var xa=class i extends Je{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,u=new it;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,h=3;d<=e;d++,h+=3){let f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[h]/t+1)/2,u.y=(a[h+1]/t+1)/2,l.push(u.x,u.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("normal",new Ce(o,3)),this.setAttribute("uv",new Ce(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},an=class i extends Je{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],d=[],h=[],f=[],g=0,M=[],m=n/2,p=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2));function b(){let y=new I,E=new I,v=0,T=(e-t)/n;for(let _=0;_<=r;_++){let A=[],P=_/r,k=P*(e-t)+t;for(let N=0;N<=s;N++){let z=N/s,L=z*l+o,F=Math.sin(L),X=Math.cos(L);E.x=k*F,E.y=-P*n+m,E.z=k*X,d.push(E.x,E.y,E.z),y.set(F,T,X).normalize(),h.push(y.x,y.y,y.z),f.push(z,1-P),A.push(g++)}M.push(A)}for(let _=0;_<s;_++)for(let A=0;A<r;A++){let P=M[A][_],k=M[A+1][_],N=M[A+1][_+1],z=M[A][_+1];(t>0||A!==0)&&(u.push(P,k,z),v+=3),(e>0||A!==r-1)&&(u.push(k,N,z),v+=3)}c.addGroup(p,v,0),p+=v}function S(y){let E=g,v=new it,T=new I,_=0,A=y===!0?t:e,P=y===!0?1:-1;for(let N=1;N<=s;N++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let k=g;for(let N=0;N<=s;N++){let L=N/s*l+o,F=Math.cos(L),X=Math.sin(L);T.x=A*X,T.y=m*P,T.z=A*F,d.push(T.x,T.y,T.z),h.push(0,P,0),v.x=F*.5+.5,v.y=X*.5*P+.5,f.push(v.x,v.y),g++}for(let N=0;N<s;N++){let z=E+N,L=k+N;y===!0?u.push(L,L+1,z):u.push(L+1,L,z),_+=3}c.addGroup(p,_,y===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Io=new I,Po=new I,jc=new I,ko=new Ci,ya=class extends Je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let s=Math.pow(10,4),r=Math.cos(hr*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],d=new Array(3),h={},f=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:M,b:m,c:p}=ko;if(M.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),p.fromBufferAttribute(o,c[2]),ko.getNormal(jc),d[0]=`${Math.round(M.x*s)},${Math.round(M.y*s)},${Math.round(M.z*s)}`,d[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,d[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let b=0;b<3;b++){let S=(b+1)%3,y=d[b],E=d[S],v=ko[u[b]],T=ko[u[S]],_=`${y}_${E}`,A=`${E}_${y}`;A in h&&h[A]?(jc.dot(h[A].normal)<=r&&(f.push(v.x,v.y,v.z),f.push(T.x,T.y,T.z)),h[A]=null):_ in h||(h[_]={index0:c[b],index1:c[S],normal:jc.clone()})}}for(let g in h)if(h[g]){let{index0:M,index1:m}=h[g];Io.fromBufferAttribute(o,M),Po.fromBufferAttribute(o,m),f.push(Io.x,Io.y,Io.z),f.push(Po.x,Po.y,Po.z)}this.setAttribute("position",new Ce(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},Wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],h=n[s+1]-u,f=(a-u)/h;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],a=[],o=new I,l=new Ie;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),d=Math.abs(s[0].y),h=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(_e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(_e(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Er=class extends Wn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,f=c-this.aY;l=h*u-f*d+this.aX,c=h*d+f*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},el=class extends Er{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ou(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,d){let h=(a-r)/c-(o-r)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,f*=u,s(a,o,h,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var od=new I,ld=new I,Qc=new Ou,tu=new Ou,eu=new Ou,Tr=class extends Wn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(ld.subVectors(s[0],s[1]).add(s[0]),c=ld);let d=s[o%r],h=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(od.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=od),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),M=Math.pow(d.distanceToSquared(h),f),m=Math.pow(h.distanceToSquared(u),f);M<1e-4&&(M=1),g<1e-4&&(g=M),m<1e-4&&(m=M),Qc.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,M,m),tu.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,M,m),eu.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,M,m)}else this.curveType==="catmullrom"&&(Qc.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),tu.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),eu.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Qc.calc(l),tu.calc(l),eu.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function cd(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function Tm(i,t){let e=1-i;return e*e*t}function Cm(i,t){return 2*(1-i)*i*t}function Rm(i,t){return i*i*t}function ia(i,t,e,n){return Tm(i,t)+Cm(i,e)+Rm(i,n)}function Im(i,t){let e=1-i;return e*e*e*t}function Pm(i,t){let e=1-i;return 3*e*e*i*t}function km(i,t){return 3*(1-i)*i*i*t}function Lm(i,t){return i*i*i*t}function sa(i,t,e,n,s){return Im(i,t)+Pm(i,e)+km(i,n)+Lm(i,s)}var va=class extends Wn{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sa(t,s.x,r.x,a.x,o.x),sa(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},nl=class extends Wn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(sa(t,s.x,r.x,a.x,o.x),sa(t,s.y,r.y,a.y,o.y),sa(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ba=class extends Wn{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},il=class extends Wn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ma=class extends Wn{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ia(t,s.x,r.x,a.x),ia(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Sa=class extends Wn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(ia(t,s.x,r.x,a.x),ia(t,s.y,r.y,a.y),ia(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wa=class extends Wn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(cd(o,l.x,c.x,u.x,d.x),cd(o,l.y,c.y,u.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},sl=Object.freeze({__proto__:null,ArcCurve:el,CatmullRomCurve3:Tr,CubicBezierCurve:va,CubicBezierCurve3:nl,EllipseCurve:Er,LineCurve:ba,LineCurve3:il,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:Sa,SplineCurve:wa}),rl=class extends Wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new sl[s.type]().fromJSON(s))}return this}},cs=class extends rl{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ba(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new Ma(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new va(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new wa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new Er(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},mi=class extends cs{constructor(t){super(t),this.uuid=Ii(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new cs().fromJSON(s))}return this}};function Dm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=af(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Bm(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let u=o,d=l;for(let h=e;h<s;h+=e){let f=i[h],g=i[h+1];f<o&&(o=f),g<l&&(l=g),f>u&&(u=f),g>d&&(d=g)}c=Math.max(u-o,d-l),c=c!==0?32767/c:0}return Aa(r,a,e,o,l,c,0),a}function af(i,t,e,n,s){let r;if(s===$m(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=ud(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=ud(a/n|0,i[a],i[a+1],r);return r&&Cr(r,r.next)&&(Ta(r),r=r.next),r}function Ps(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Cr(e,e.next)||Ze(e.prev,e,e.next)===0)){if(Ta(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Aa(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Wm(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Um(i,n,s,r):Nm(i)){t.push(l.i,i.i,c.i),Ta(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Fm(Ps(i),t),Aa(i,t,e,n,s,r,2)):a===2&&Om(i,t,e,n,s,r):Aa(Ps(i),t,e,n,s,r,1);break}}}function Nm(i){let t=i.prev,e=i,n=i.next;if(Ze(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,u=Math.min(s,r,a),d=Math.min(o,l,c),h=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=d&&g.y<=f&&ea(s,o,r,l,a,c,g.x,g.y)&&Ze(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Um(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Ze(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,d=r.y,h=a.y,f=Math.min(o,l,c),g=Math.min(u,d,h),M=Math.max(o,l,c),m=Math.max(u,d,h),p=lu(f,g,t,e,n),b=lu(M,m,t,e,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=p&&y&&y.z<=b;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ea(o,u,l,d,c,h,S.x,S.y)&&Ze(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ea(o,u,l,d,c,h,y.x,y.y)&&Ze(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=M&&S.y>=g&&S.y<=m&&S!==s&&S!==a&&ea(o,u,l,d,c,h,S.x,S.y)&&Ze(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=b;){if(y.x>=f&&y.x<=M&&y.y>=g&&y.y<=m&&y!==s&&y!==a&&ea(o,u,l,d,c,h,y.x,y.y)&&Ze(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Fm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Cr(n,s)&&lf(n,e,e.next,s)&&Ea(n,s)&&Ea(s,n)&&(t.push(n.i,e.i,s.i),Ta(e),Ta(e.next),e=i=s),e=e.next}while(e!==i);return Ps(e)}function Om(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&qm(a,o)){let l=cf(a,o);a=Ps(a,a.next),l=Ps(l,l.next),Aa(a,t,e,n,s,r,0),Aa(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Bm(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=af(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Ym(c))}s.sort(zm);for(let r=0;r<s.length;r++)e=Vm(s[r],e);return e}function zm(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function Vm(i,t){let e=Gm(i,t);if(!e)return t;let n=cf(e,i);return Ps(n,n.next),Ps(e,e.next)}function Gm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Cr(i,e))return e;do{if(Cr(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&of(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);Ea(e,i)&&(d<u||d===u&&(e.x>a.x||e.x===a.x&&Hm(a,e)))&&(a=e,u=d)}e=e.next}while(e!==o);return a}function Hm(i,t){return Ze(i.prev,i,t.prev)<0&&Ze(t.next,i,i.next)<0}function Wm(i,t,e,n){let s=i;do s.z===0&&(s.z=lu(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xm(s)}function Xm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function lu(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Ym(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function of(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function ea(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&of(i,t,e,n,s,r,a,o)}function qm(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Km(i,t)&&(Ea(i,t)&&Ea(t,i)&&Zm(i,t)&&(Ze(i.prev,i,t.prev)||Ze(i,t.prev,t))||Cr(i,t)&&Ze(i.prev,i,i.next)>0&&Ze(t.prev,t,t.next)>0)}function Ze(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Cr(i,t){return i.x===t.x&&i.y===t.y}function lf(i,t,e,n){let s=Do(Ze(i,t,e)),r=Do(Ze(i,t,n)),a=Do(Ze(e,n,i)),o=Do(Ze(e,n,t));return!!(s!==r&&a!==o||s===0&&Lo(i,e,t)||r===0&&Lo(i,n,t)||a===0&&Lo(e,i,n)||o===0&&Lo(e,t,n))}function Lo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Do(i){return i>0?1:i<0?-1:0}function Km(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&lf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ea(i,t){return Ze(i.prev,i,i.next)<0?Ze(i,t,i.next)>=0&&Ze(i,i.prev,t)>=0:Ze(i,t,i.prev)<0||Ze(i,i.next,t)<0}function Zm(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function cf(i,t){let e=cu(i.i,i.x,i.y),n=cu(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function ud(i,t,e,n){let s=cu(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ta(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function $m(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var uu=class{static triangulate(t,e,n=2){return Dm(t,e,n)}},Ts=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];hd(t),dd(n,t);let a=t.length;e.forEach(hd);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,dd(n,e[l]);let o=uu.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function hd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function dd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var us=class i extends Je{constructor(t=new mi([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new Ce(s,3)),this.setAttribute("uv",new Ce(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,M=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Jm,S,y=!1,E,v,T,_;if(p){S=p.getSpacedPoints(u),y=!0,h=!1;let G=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(u,G),v=new I,T=new I,_=new I}h||(m=0,f=0,g=0,M=0);let A=o.extractPoints(c),P=A.shape,k=A.holes;if(!Ts.isClockWise(P)){P=P.reverse();for(let G=0,et=k.length;G<et;G++){let q=k[G];Ts.isClockWise(q)&&(k[G]=q.reverse())}}function z(G){let q=10000000000000001e-36,lt=G[0];for(let pt=1;pt<=G.length;pt++){let vt=pt%G.length,Ut=G[vt],Ht=Ut.x-lt.x,Bt=Ut.y-lt.y,D=Ht*Ht+Bt*Bt,ge=Math.max(Math.abs(Ut.x),Math.abs(Ut.y),Math.abs(lt.x),Math.abs(lt.y)),se=q*ge*ge;if(D<=se){G.splice(vt,1),pt--;continue}lt=Ut}}z(P),k.forEach(z);let L=k.length,F=P;for(let G=0;G<L;G++){let et=k[G];P=P.concat(et)}function X(G,et,q){return et||ce("ExtrudeGeometry: vec does not exist"),G.clone().addScaledVector(et,q)}let $=P.length;function ft(G,et,q){let lt,pt,vt,Ut=G.x-et.x,Ht=G.y-et.y,Bt=q.x-G.x,D=q.y-G.y,ge=Ut*Ut+Ht*Ht,se=Ut*D-Ht*Bt;if(Math.abs(se)>Number.EPSILON){let R=Math.sqrt(ge),x=Math.sqrt(Bt*Bt+D*D),V=et.x-Ht/R,W=et.y+Ut/R,Q=q.x-D/x,_t=q.y+Bt/x,yt=((Q-V)*D-(_t-W)*Bt)/(Ut*D-Ht*Bt);lt=V+Ut*yt-G.x,pt=W+Ht*yt-G.y;let nt=lt*lt+pt*pt;if(nt<=2)return new it(lt,pt);vt=Math.sqrt(nt/2)}else{let R=!1;Ut>Number.EPSILON?Bt>Number.EPSILON&&(R=!0):Ut<-Number.EPSILON?Bt<-Number.EPSILON&&(R=!0):Math.sign(Ht)===Math.sign(D)&&(R=!0),R?(lt=-Ht,pt=Ut,vt=Math.sqrt(ge)):(lt=Ut,pt=Ht,vt=Math.sqrt(ge/2))}return new it(lt/vt,pt/vt)}let j=[];for(let G=0,et=F.length,q=et-1,lt=G+1;G<et;G++,q++,lt++)q===et&&(q=0),lt===et&&(lt=0),j[G]=ft(F[G],F[q],F[lt]);let rt=[],ut,Wt=j.concat();for(let G=0,et=L;G<et;G++){let q=k[G];ut=[];for(let lt=0,pt=q.length,vt=pt-1,Ut=lt+1;lt<pt;lt++,vt++,Ut++)vt===pt&&(vt=0),Ut===pt&&(Ut=0),ut[lt]=ft(q[lt],q[vt],q[Ut]);rt.push(ut),Wt=Wt.concat(ut)}let kt;if(m===0)kt=Ts.triangulateShape(F,k);else{let G=[],et=[];for(let q=0;q<m;q++){let lt=q/m,pt=f*Math.cos(lt*Math.PI/2),vt=g*Math.sin(lt*Math.PI/2)+M;for(let Ut=0,Ht=F.length;Ut<Ht;Ut++){let Bt=X(F[Ut],j[Ut],vt);xt(Bt.x,Bt.y,-pt),lt===0&&G.push(Bt)}for(let Ut=0,Ht=L;Ut<Ht;Ut++){let Bt=k[Ut];ut=rt[Ut];let D=[];for(let ge=0,se=Bt.length;ge<se;ge++){let R=X(Bt[ge],ut[ge],vt);xt(R.x,R.y,-pt),lt===0&&D.push(R)}lt===0&&et.push(D)}}kt=Ts.triangulateShape(G,et)}let pe=kt.length,me=g+M;for(let G=0;G<$;G++){let et=h?X(P[G],Wt[G],me):P[G];y?(T.copy(E.normals[0]).multiplyScalar(et.x),v.copy(E.binormals[0]).multiplyScalar(et.y),_.copy(S[0]).add(T).add(v),xt(_.x,_.y,_.z)):xt(et.x,et.y,0)}for(let G=1;G<=u;G++)for(let et=0;et<$;et++){let q=h?X(P[et],Wt[et],me):P[et];y?(T.copy(E.normals[G]).multiplyScalar(q.x),v.copy(E.binormals[G]).multiplyScalar(q.y),_.copy(S[G]).add(T).add(v),xt(_.x,_.y,_.z)):xt(q.x,q.y,d/u*G)}for(let G=m-1;G>=0;G--){let et=G/m,q=f*Math.cos(et*Math.PI/2),lt=g*Math.sin(et*Math.PI/2)+M;for(let pt=0,vt=F.length;pt<vt;pt++){let Ut=X(F[pt],j[pt],lt);xt(Ut.x,Ut.y,d+q)}for(let pt=0,vt=k.length;pt<vt;pt++){let Ut=k[pt];ut=rt[pt];for(let Ht=0,Bt=Ut.length;Ht<Bt;Ht++){let D=X(Ut[Ht],ut[Ht],lt);y?xt(D.x,D.y+S[u-1].y,S[u-1].x+q):xt(D.x,D.y,d+q)}}}ae(),tt();function ae(){let G=s.length/3;if(h){let et=0,q=$*et;for(let lt=0;lt<pe;lt++){let pt=kt[lt];Xt(pt[2]+q,pt[1]+q,pt[0]+q)}et=u+m*2,q=$*et;for(let lt=0;lt<pe;lt++){let pt=kt[lt];Xt(pt[0]+q,pt[1]+q,pt[2]+q)}}else{for(let et=0;et<pe;et++){let q=kt[et];Xt(q[2],q[1],q[0])}for(let et=0;et<pe;et++){let q=kt[et];Xt(q[0]+$*u,q[1]+$*u,q[2]+$*u)}}n.addGroup(G,s.length/3-G,0)}function tt(){let G=s.length/3,et=0;st(F,et),et+=F.length;for(let q=0,lt=k.length;q<lt;q++){let pt=k[q];st(pt,et),et+=pt.length}n.addGroup(G,s.length/3-G,1)}function st(G,et){let q=G.length;for(;--q>=0;){let lt=q,pt=q-1;pt<0&&(pt=G.length-1);for(let vt=0,Ut=u+m*2;vt<Ut;vt++){let Ht=$*vt,Bt=$*(vt+1),D=et+lt+Ht,ge=et+pt+Ht,se=et+pt+Bt,R=et+lt+Bt;It(D,ge,se,R)}}}function xt(G,et,q){l.push(G),l.push(et),l.push(q)}function Xt(G,et,q){te(G),te(et),te(q);let lt=s.length/3,pt=b.generateTopUV(n,s,lt-3,lt-2,lt-1);we(pt[0]),we(pt[1]),we(pt[2])}function It(G,et,q,lt){te(G),te(et),te(lt),te(et),te(q),te(lt);let pt=s.length/3,vt=b.generateSideWallUV(n,s,pt-6,pt-3,pt-2,pt-1);we(vt[0]),we(vt[1]),we(vt[3]),we(vt[1]),we(vt[2]),we(vt[3])}function te(G){s.push(l[G*3+0]),s.push(l[G*3+1]),s.push(l[G*3+2])}function we(G){r.push(G.x),r.push(G.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jm(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new sl[s.type]().fromJSON(s)),new i(n,t.options)}},Jm={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],d=t[n*3+2],h=t[s*3],f=t[s*3+1],g=t[s*3+2],M=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-d),new it(h,1-g),new it(M,1-p)]:[new it(o,1-l),new it(u,1-d),new it(f,1-g),new it(m,1-p)]}};function jm(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ki=class i extends Je{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=_e(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/e,d=new I,h=new it,f=new I,g=new I,M=new I,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,M.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(M.x,M.y,M.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=M.x,f.y+=M.y,f.z+=M.z,f.normalize(),l.push(f.x,f.y,f.z),M.copy(g)}for(let b=0;b<=e;b++){let S=n+b*u*s,y=Math.sin(S),E=Math.cos(S);for(let v=0;v<=t.length-1;v++){d.x=t[v].x*y,d.y=t[v].y,d.z=t[v].x*E,a.push(d.x,d.y,d.z),h.x=b/e,h.y=v/(t.length-1),o.push(h.x,h.y);let T=l[3*v+0]*y,_=l[3*v+1],A=l[3*v+0]*E;c.push(T,_,A)}}for(let b=0;b<e;b++)for(let S=0;S<t.length-1;S++){let y=S+b*t.length,E=y,v=y+t.length,T=y+t.length+1,_=y+1;r.push(E,v,_),r.push(T,_,v)}this.setIndex(r),this.setAttribute("position",new Ce(a,3)),this.setAttribute("uv",new Ce(o,2)),this.setAttribute("normal",new Ce(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var gi=class i extends Je{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=t/o,h=e/l,f=[],g=[],M=[],m=[];for(let p=0;p<u;p++){let b=p*h-a;for(let S=0;S<c;S++){let y=S*d-r;g.push(y,-b,0),M.push(0,0,1),m.push(S/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let S=b+c*p,y=b+c*(p+1),E=b+1+c*(p+1),v=b+1+c*p;f.push(S,y,v),f.push(y,E,v)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(M,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Yi=class i extends Je{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],d=new I,h=new I,f=[],g=[],M=[],m=[];for(let p=0;p<=n;p++){let b=[],S=p/n,y=a+S*o,E=t*Math.cos(y),v=Math.sqrt(t*t-E*E),T=0;p===0&&a===0?T=.5/e:p===n&&l===Math.PI&&(T=-.5/e);for(let _=0;_<=e;_++){let A=_/e,P=s+A*r;d.x=-v*Math.cos(P),d.y=E,d.z=v*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),M.push(h.x,h.y,h.z),m.push(A+T,1-S),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let S=u[p][b+1],y=u[p][b],E=u[p+1][b],v=u[p+1][b+1];(p!==0||a>0)&&f.push(S,y,v),(p!==n-1||l<Math.PI)&&f.push(y,E,v)}this.setIndex(f),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(M,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ca=class i extends Je{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],d=[],h=new I,f=new I,g=new I;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),h.x=t*Math.cos(b),h.y=t*Math.sin(b),g.subVectors(f,h).normalize(),u.push(g.x,g.y,g.z),d.push(p/s),d.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let p=(s+1)*M+m-1,b=(s+1)*(M-1)+m-1,S=(s+1)*(M-1)+m,y=(s+1)*M+m;l.push(p,b,y),l.push(b,S,y)}this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(u,3)),this.setAttribute("uv",new Ce(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};var hs=class i extends Je{constructor(t=new Sa(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new it,u=new I,d=[],h=[],f=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new Ce(d,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(f,2));function M(){for(let S=0;S<e;S++)m(S);m(r===!1?e:0),b(),p()}function m(S){u=t.getPointAt(S/e,u);let y=a.normals[S],E=a.binormals[S];for(let v=0;v<=s;v++){let T=v/s*Math.PI*2,_=Math.sin(T),A=-Math.cos(T);l.x=A*y.x+_*E.x,l.y=A*y.y+_*E.y,l.z=A*y.z+_*E.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=e;S++)for(let y=1;y<=s;y++){let E=(s+1)*(S-1)+(y-1),v=(s+1)*S+(y-1),T=(s+1)*S+y,_=(s+1)*(S-1)+y;g.push(E,v,_),g.push(v,T,_)}}function b(){for(let S=0;S<=e;S++)for(let y=0;y<=s;y++)c.x=S/e,c.y=y/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new sl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ra=class extends jn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Qt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function Ns(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(fd(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(fd(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function En(i){let t={};for(let e=0;e<i.length;e++){let n=Ns(i[e]);for(let s in n)t[s]=n[s]}return t}function fd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Bu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}var uf={clone:Ns,merge:En},tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends jn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=eg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Qm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Qt().setHex(s.value);break;case"v2":this.uniforms[n].value=new it().fromArray(s.value);break;case"v3":this.uniforms[n].value=new I().fromArray(s.value);break;case"v4":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new fe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Ie().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},al=class extends Xn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Re=class extends jn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ia=class extends Re{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Qt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Qt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Qt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Pa=class extends jn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Za,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Sl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},ol=class extends jn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ll=class extends jn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function lr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function nu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ds=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},cl=class extends ds{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ru,endingEnd:ru}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case au:r=t,o=2*e-n;break;case ou:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case au:a=t,l=2*n-e;break;case ou:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),M=g*g,m=M*g,p=-h*m+2*h*M-h*g,b=(1+h)*m+(-1.5-2*h)*M+(-.5+h)*g+1,S=(-1-f)*m+(1.5+f)*M+.5*g,y=f*m-f*M;for(let E=0;E!==o;++E)r[E]=p*a[u+E]+b*a[c+E]+S*a[l+E]+y*a[d+E];return r}},ul=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(s-e),d=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*d+a[l+h]*u;return r}},hl=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},dl=class extends ds{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(s-e),M=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*M+a[l+m]*g;return r}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let M=a[c+g],m=a[l+g],p=f*h+g*2,b=d[p],S=d[p+1],y=t*h+g*2,E=u[y],v=u[y+1],T=ig(n,e,b,E,s);r[g]=hf(T,M,S,v,m)}return r}};function hf(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function ng(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function ig(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=hf(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=ng(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Yn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lr(e,this.TimeBufferType),this.values=lr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lr(t.times,Array),values:lr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),nu(t.settings)&&(n.settings={inTangents:lr(t.settings.inTangents,Array),outTangents:lr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new cl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new dl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case qo:e=this.InterpolantFactoryMethodLinear;break;case Fo:e=this.InterpolantFactoryMethodSmooth;break;case su:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return oe("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return qo;case this.InterpolantFactoryMethodSmooth:return Fo;case this.InterpolantFactoryMethodBezier:return su}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;nu(this.settings)&&(pd(this.settings.inTangents,t),pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ce("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(ce("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){ce("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ce("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Xp(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ce("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Fo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let M=e[d+g];if(M!==e[h+g]||M!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,nu(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function pd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}Yn.prototype.ValueTypeName="";Yn.prototype.TimeBufferType=Float32Array;Yn.prototype.ValueBufferType=Float32Array;Yn.prototype.DefaultInterpolation=qo;var fs=class extends Yn{constructor(t,e,n){super(t,e,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=ra;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var fl=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};fl.prototype.ValueTypeName="color";var pl=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};pl.prototype.ValueTypeName="number";var ml=class extends ds{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let u=c+o;c!==u;c+=4)Ln.slerpFlat(r,0,a,c-o,a,c,l);return r}},ka=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}};ka.prototype.ValueTypeName="quaternion";ka.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends Yn{constructor(t,e,n){super(t,e,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=ra;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var gl=class extends Yn{constructor(t,e,n,s){super(t,e,n,s)}};gl.prototype.ValueTypeName="vector";var _l=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){let d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},df=new _l,xl=class{constructor(t){this.manager=t!==void 0?t:df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};xl.DEFAULT_MATERIAL_NAME="__DEFAULT";var Rr=class extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},La=class extends Rr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},iu=new Ie,md=new I,gd=new I,Da=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wr,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;md.setFromMatrixPosition(t.matrixWorld),e.position.copy(md),gd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){iu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(iu,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===mr||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(iu)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},No=new I,Uo=new Ln,Ti=new I,Na=class extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(No,Uo,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,Ti.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(No,Uo,Ti),Ti.x===1&&Ti.y===1&&Ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(No,Uo,Ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},rs=new I,_d=new it,xd=new it,xn=class extends Na{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(rs.x,rs.y).multiplyScalar(-t/rs.z),rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rs.x,rs.y).multiplyScalar(-t/rs.z)}getViewSize(t,e){return this.getViewBounds(t,_d,xd),e.subVectors(xd,_d)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var hu=class extends Da{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},ks=class extends Rr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new hu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Ir=class extends Na{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},du=class extends Da{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ua=class extends Rr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new du}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var cr=-90,ur=1,yl=class extends Ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(cr,ur,t,e);s.layers=this.layers,this.add(s);let r=new xn(cr,ur,t,e);r.layers=this.layers,this.add(r);let a=new xn(cr,ur,t,e);a.layers=this.layers,this.add(a);let o=new xn(cr,ur,t,e);o.layers=this.layers,this.add(o);let l=new xn(cr,ur,t,e);l.layers=this.layers,this.add(l);let c=new xn(cr,ur,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===hi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===mr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=M,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},vl=class extends xn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var zu="\\[\\]\\.:\\/",sg=new RegExp("["+zu+"]","g"),Vu="[^"+zu+"]",rg="[^"+zu.replace("\\.","")+"]",ag=/((?:WC+[\/:])*)/.source.replace("WC",Vu),og=/(WCOD+)?/.source.replace("WCOD",rg),lg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vu),cg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vu),ug=new RegExp("^"+ag+og+lg+cg+"$"),hg=["material","materials","bones","map"],fu=class{constructor(t,e,n){let s=n||Xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Xe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sg,"")}static parseTrackName(t){let e=ug.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);hg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ce("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ce("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ce("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ce("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){ce("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){ce("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ce("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ce("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Xe.Composite=fu;Xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Xe.prototype.GetterByBindingType=[Xe.prototype._getValue_direct,Xe.prototype._getValue_array,Xe.prototype._getValue_arrayElement,Xe.prototype._getValue_toArray];Xe.prototype.SetterByBindingTypeAndVersioning=[[Xe.prototype._setValue_direct,Xe.prototype._setValue_direct_setNeedsUpdate,Xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_array,Xe.prototype._setValue_array_setNeedsUpdate,Xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_arrayElement,Xe.prototype._setValue_arrayElement_setNeedsUpdate,Xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Xe.prototype._setValue_fromArray,Xe.prototype._setValue_fromArray_setNeedsUpdate,Xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var jv=new Float32Array(1);var yd=new Ie,Fa=class{constructor(t,e,n=0,s=1/0){this.ray=new as(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):ce("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return yd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yd),this}intersectObject(t,e=!0,n=[]){return pu(t,this,n,e),n.sort(vd),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)pu(t[s],this,n,e);return n.sort(vd),n}};function vd(i,t){return i.distance-t.distance}function pu(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)pu(r[a],t,e,!0)}}var Pr=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=_e(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(_e(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var qu=class qu{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};qu.prototype.isMatrix2=!0;var mu=qu;var Oa=class extends di{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Gu(i,t,e,n){let s=dg(n);switch(e){case ku:return i*t;case Il:return i*t/s.components*s.byteLength;case Pl:return i*t/s.components*s.byteLength;case vs:return i*t*2/s.components*s.byteLength;case kl:return i*t*2/s.components*s.byteLength;case Lu:return i*t*3/s.components*s.byteLength;case ti:return i*t*4/s.components*s.byteLength;case Ll:return i*t*4/s.components*s.byteLength;case Ha:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xa:case Ya:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Fl:return Math.max(i,16)*Math.max(t,8)/4;case Dl:case Ul:return Math.max(i,8)*Math.max(t,8)/2;case Ol:case Bl:case Vl:case Gl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zl:case qa:case Hl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $l:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case jl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case tc:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ec:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case nc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ic:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case sc:case rc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*16;case oc:case lc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ka:case cc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Nn:case Cu:return{byteLength:1,components:1};case Dr:case Ru:case vi:return{byteLength:2,components:1};case Cl:case Rl:return{byteLength:2,components:4};case yi:case Tl:case Qn:return{byteLength:4,components:1};case Iu:case Pu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Df(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function _g(i){let t=new WeakMap;function e(o,l){let c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],M=d[f];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++h,d[h]=M)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let M=d[f];i.bufferSubData(c,M.start*u.BYTES_PER_ELEMENT,u,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var xg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
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
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
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
#endif`,Ag=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
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
#endif`,Tg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ig=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pg=`#ifdef USE_IRIDESCENCE
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
#endif`,kg=`#ifdef USE_BUMPMAP
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
#endif`,Lg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vg=`#define PI 3.141592653589793
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
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hg=`vec3 transformedNormal = objectNormal;
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
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
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
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,u0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m0=`PhysicalMaterial material;
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
#endif`,g0=`uniform sampler2D dfgLUT;
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
}`,_0=`
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
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
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,b0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,A0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,T0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,C0=`#if defined( USE_POINTS_UV )
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
#endif`,R0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,L0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,V0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,q0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i_=`float getShadowMask() {
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
}`,s_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o_=`#ifdef USE_SKINNING
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
#endif`,l_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,u_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,h_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d_=`#ifdef USE_TRANSMISSION
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
#endif`,f_=`#ifdef USE_TRANSMISSION
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,__=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
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
}`,v_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,S_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w_=`#include <common>
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
}`,A_=`#if DEPTH_PACKING == 3200
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
}`,E_=`#define DISTANCE
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
}`,T_=`#define DISTANCE
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
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I_=`uniform float scale;
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
}`,P_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,L_=`uniform vec3 diffuse;
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
}`,D_=`#define LAMBERT
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
}`,N_=`#define LAMBERT
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
}`,U_=`#define MATCAP
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
}`,F_=`#define MATCAP
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
}`,O_=`#define NORMAL
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
}`,B_=`#define NORMAL
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
}`,z_=`#define PHONG
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
}`,V_=`#define PHONG
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
}`,G_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,W_=`#define TOON
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
}`,X_=`#define TOON
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
}`,Y_=`uniform float size;
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
}`,q_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,Z_=`uniform vec3 color;
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
}`,$_=`uniform float rotation;
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
}`,J_=`uniform vec3 diffuse;
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
}`,ve={alphahash_fragment:xg,alphahash_pars_fragment:yg,alphamap_fragment:vg,alphamap_pars_fragment:bg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:wg,aomap_pars_fragment:Ag,batching_pars_vertex:Eg,batching_vertex:Tg,begin_vertex:Cg,beginnormal_vertex:Rg,bsdfs:Ig,iridescence_fragment:Pg,bumpmap_pars_fragment:kg,clipping_planes_fragment:Lg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Ug,color_fragment:Fg,color_pars_fragment:Og,color_pars_vertex:Bg,color_vertex:zg,common:Vg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:Yg,emissivemap_pars_fragment:qg,colorspace_fragment:Kg,colorspace_pars_fragment:Zg,envmap_fragment:$g,envmap_common_pars_fragment:Jg,envmap_pars_fragment:jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:u0,envmap_vertex:t0,fog_vertex:e0,fog_pars_vertex:n0,fog_fragment:i0,fog_pars_fragment:s0,gradientmap_pars_fragment:r0,lightmap_pars_fragment:a0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:l0,lights_pars_begin:c0,lights_toon_fragment:h0,lights_toon_pars_fragment:d0,lights_phong_fragment:f0,lights_phong_pars_fragment:p0,lights_physical_fragment:m0,lights_physical_pars_fragment:g0,lights_fragment_begin:_0,lights_fragment_maps:x0,lights_fragment_end:y0,lightprobes_pars_fragment:v0,logdepthbuf_fragment:b0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:S0,logdepthbuf_vertex:w0,map_fragment:A0,map_pars_fragment:E0,map_particle_fragment:T0,map_particle_pars_fragment:C0,metalnessmap_fragment:R0,metalnessmap_pars_fragment:I0,morphinstance_vertex:P0,morphcolor_vertex:k0,morphnormal_vertex:L0,morphtarget_pars_vertex:D0,morphtarget_vertex:N0,normal_fragment_begin:U0,normal_fragment_maps:F0,normal_pars_fragment:O0,normal_pars_vertex:B0,normal_vertex:z0,normalmap_pars_fragment:V0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:Y0,packing:q0,premultiplied_alpha_fragment:K0,project_vertex:Z0,dithering_fragment:$0,dithering_pars_fragment:J0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:t_,shadowmap_pars_vertex:e_,shadowmap_vertex:n_,shadowmask_pars_fragment:i_,skinbase_vertex:s_,skinning_pars_vertex:r_,skinning_vertex:a_,skinnormal_vertex:o_,specularmap_fragment:l_,specularmap_pars_fragment:c_,tonemapping_fragment:u_,tonemapping_pars_fragment:h_,transmission_fragment:d_,transmission_pars_fragment:f_,uv_pars_fragment:p_,uv_pars_vertex:m_,uv_vertex:g_,worldpos_vertex:__,background_vert:x_,background_frag:y_,backgroundCube_vert:v_,backgroundCube_frag:b_,cube_vert:M_,cube_frag:S_,depth_vert:w_,depth_frag:A_,distance_vert:E_,distance_frag:T_,equirect_vert:C_,equirect_frag:R_,linedashed_vert:I_,linedashed_frag:P_,meshbasic_vert:k_,meshbasic_frag:L_,meshlambert_vert:D_,meshlambert_frag:N_,meshmatcap_vert:U_,meshmatcap_frag:F_,meshnormal_vert:O_,meshnormal_frag:B_,meshphong_vert:z_,meshphong_frag:V_,meshphysical_vert:G_,meshphysical_frag:H_,meshtoon_vert:W_,meshtoon_frag:X_,points_vert:Y_,points_frag:q_,shadow_vert:K_,shadow_frag:Z_,sprite_vert:$_,sprite_frag:J_},Dt={common:{diffuse:{value:new Qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new Qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Qt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Ui={basic:{uniforms:En([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:ve.meshbasic_vert,fragmentShader:ve.meshbasic_frag},lambert:{uniforms:En([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)},envMapIntensity:{value:1}}]),vertexShader:ve.meshlambert_vert,fragmentShader:ve.meshlambert_frag},phong:{uniforms:En([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)},specular:{value:new Qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ve.meshphong_vert,fragmentShader:ve.meshphong_frag},standard:{uniforms:En([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag},toon:{uniforms:En([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Qt(0)}}]),vertexShader:ve.meshtoon_vert,fragmentShader:ve.meshtoon_frag},matcap:{uniforms:En([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:ve.meshmatcap_vert,fragmentShader:ve.meshmatcap_frag},points:{uniforms:En([Dt.points,Dt.fog]),vertexShader:ve.points_vert,fragmentShader:ve.points_frag},dashed:{uniforms:En([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ve.linedashed_vert,fragmentShader:ve.linedashed_frag},depth:{uniforms:En([Dt.common,Dt.displacementmap]),vertexShader:ve.depth_vert,fragmentShader:ve.depth_frag},normal:{uniforms:En([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:ve.meshnormal_vert,fragmentShader:ve.meshnormal_frag},sprite:{uniforms:En([Dt.sprite,Dt.fog]),vertexShader:ve.sprite_vert,fragmentShader:ve.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ve.background_vert,fragmentShader:ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:ve.backgroundCube_vert,fragmentShader:ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ve.cube_vert,fragmentShader:ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ve.equirect_vert,fragmentShader:ve.equirect_frag},distance:{uniforms:En([Dt.common,Dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ve.distance_vert,fragmentShader:ve.distance_frag},shadow:{uniforms:En([Dt.lights,Dt.fog,{color:{value:new Qt(0)},opacity:{value:1}}]),vertexShader:ve.shadow_vert,fragmentShader:ve.shadow_frag}};Ui.physical={uniforms:En([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Qt(0)},specularColor:{value:new Qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:ve.meshphysical_vert,fragmentShader:ve.meshphysical_frag};var dc={r:0,b:0,g:0},j_=new Ie,Nf=new fe;Nf.set(-1,0,0,0,1,0,0,0,1);function Q_(i,t,e,n,s,r){let a=new Qt(0),o=s===!0?0:1,l,c,u=null,d=0,h=null;function f(b){let S=b.isScene===!0?b.background:null;if(S&&S.isTexture){let y=b.backgroundBlurriness>0;S=t.get(S,y)}return S}function g(b){let S=!1,y=f(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),S=!0);let E=i.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,S){let y=f(S);y&&(y.isCubeTexture||y.mapping===Va)?(c===void 0&&(c=new Nt(new xe(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:Ns(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,v,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j_.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Nf),c.material.toneMapped=Te.getTransfer(y.colorSpace)!==Ne,(u!==y||d!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Nt(new gi(2,2),new Xn({name:"BackgroundMaterial",uniforms:Ns(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:_s,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Te.getTransfer(y.colorSpace)!==Ne,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,S){b.getRGB(dc,Bu(i)),e.buffers.color.setClear(dc.r,dc.g,dc.b,S,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:M,dispose:p}}function tx(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,a=!1;function o(k,N,z,L,F){let X=!1,$=d(k,L,z,N);r!==$&&(r=$,c(r.object)),X=f(k,L,z,F),X&&g(k,L,z,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,y(k,N,z,L),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return i.createVertexArray()}function c(k){return i.bindVertexArray(k)}function u(k){return i.deleteVertexArray(k)}function d(k,N,z,L){let F=L.wireframe===!0,X=n[N.id];X===void 0&&(X={},n[N.id]=X);let $=k.isInstancedMesh===!0?k.id:0,ft=X[$];ft===void 0&&(ft={},X[$]=ft);let j=ft[z.id];j===void 0&&(j={},ft[z.id]=j);let rt=j[F];return rt===void 0&&(rt=h(l()),j[F]=rt),rt}function h(k){let N=[],z=[],L=[];for(let F=0;F<e;F++)N[F]=0,z[F]=0,L[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:z,attributeDivisors:L,object:k,attributes:{},index:null}}function f(k,N,z,L){let F=r.attributes,X=N.attributes,$=0,ft=z.getAttributes();for(let j in ft)if(ft[j].location>=0){let ut=F[j],Wt=X[j];if(Wt===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(Wt=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(Wt=k.instanceColor)),ut===void 0||ut.attribute!==Wt||Wt&&ut.data!==Wt.data)return!0;$++}return r.attributesNum!==$||r.index!==L}function g(k,N,z,L){let F={},X=N.attributes,$=0,ft=z.getAttributes();for(let j in ft)if(ft[j].location>=0){let ut=X[j];ut===void 0&&(j==="instanceMatrix"&&k.instanceMatrix&&(ut=k.instanceMatrix),j==="instanceColor"&&k.instanceColor&&(ut=k.instanceColor));let Wt={};Wt.attribute=ut,ut&&ut.data&&(Wt.data=ut.data),F[j]=Wt,$++}r.attributes=F,r.attributesNum=$,r.index=L}function M(){let k=r.newAttributes;for(let N=0,z=k.length;N<z;N++)k[N]=0}function m(k){p(k,0)}function p(k,N){let z=r.newAttributes,L=r.enabledAttributes,F=r.attributeDivisors;z[k]=1,L[k]===0&&(i.enableVertexAttribArray(k),L[k]=1),F[k]!==N&&(i.vertexAttribDivisor(k,N),F[k]=N)}function b(){let k=r.newAttributes,N=r.enabledAttributes;for(let z=0,L=N.length;z<L;z++)N[z]!==k[z]&&(i.disableVertexAttribArray(z),N[z]=0)}function S(k,N,z,L,F,X,$){$===!0?i.vertexAttribIPointer(k,N,z,F,X):i.vertexAttribPointer(k,N,z,L,F,X)}function y(k,N,z,L){M();let F=L.attributes,X=z.getAttributes(),$=N.defaultAttributeValues;for(let ft in X){let j=X[ft];if(j.location>=0){let rt=F[ft];if(rt===void 0&&(ft==="instanceMatrix"&&k.instanceMatrix&&(rt=k.instanceMatrix),ft==="instanceColor"&&k.instanceColor&&(rt=k.instanceColor)),rt!==void 0){let ut=rt.normalized,Wt=rt.itemSize,kt=t.get(rt);if(kt===void 0)continue;let pe=kt.buffer,me=kt.type,ae=kt.bytesPerElement,tt=me===i.INT||me===i.UNSIGNED_INT||rt.gpuType===Tl;if(rt.isInterleavedBufferAttribute){let st=rt.data,xt=st.stride,Xt=rt.offset;if(st.isInstancedInterleavedBuffer){for(let It=0;It<j.locationSize;It++)p(j.location+It,st.meshPerAttribute);k.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let It=0;It<j.locationSize;It++)m(j.location+It);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let It=0;It<j.locationSize;It++)S(j.location+It,Wt/j.locationSize,me,ut,xt*ae,(Xt+Wt/j.locationSize*It)*ae,tt)}else{if(rt.isInstancedBufferAttribute){for(let st=0;st<j.locationSize;st++)p(j.location+st,rt.meshPerAttribute);k.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let st=0;st<j.locationSize;st++)m(j.location+st);i.bindBuffer(i.ARRAY_BUFFER,pe);for(let st=0;st<j.locationSize;st++)S(j.location+st,Wt/j.locationSize,me,ut,Wt*ae,Wt/j.locationSize*st*ae,tt)}}else if($!==void 0){let ut=$[ft];if(ut!==void 0)switch(ut.length){case 2:i.vertexAttrib2fv(j.location,ut);break;case 3:i.vertexAttrib3fv(j.location,ut);break;case 4:i.vertexAttrib4fv(j.location,ut);break;default:i.vertexAttrib1fv(j.location,ut)}}}}b()}function E(){A();for(let k in n){let N=n[k];for(let z in N){let L=N[z];for(let F in L){let X=L[F];for(let $ in X)u(X[$].object),delete X[$];delete L[F]}}delete n[k]}}function v(k){if(n[k.id]===void 0)return;let N=n[k.id];for(let z in N){let L=N[z];for(let F in L){let X=L[F];for(let $ in X)u(X[$].object),delete X[$];delete L[F]}}delete n[k.id]}function T(k){for(let N in n){let z=n[N];for(let L in z){let F=z[L];if(F[k.id]===void 0)continue;let X=F[k.id];for(let $ in X)u(X[$].object),delete X[$];delete F[k.id]}}}function _(k){for(let N in n){let z=n[N],L=k.isInstancedMesh===!0?k.id:0,F=z[L];if(F!==void 0){for(let X in F){let $=F[X];for(let ft in $)u($[ft].object),delete $[ft];delete F[X]}delete z[L],Object.keys(z).length===0&&delete n[N]}}}function A(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:A,resetDefaultState:P,dispose:E,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:T,initAttributes:M,enableAttribute:m,disableUnusedAttributes:b}}function ex(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let f=0;f<u;f++)h+=c[f];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nx(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==ti&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let _=T===vi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Nn&&T!==Qn&&!_&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:y,maxSamples:E,samples:v}}function ix(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Gn,o=new fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||s;return s=h,n=d.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,M=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let b=r?0:n,S=b*4,y=p.clippingState||null;l.value=y,y=u(g,h,S,f);for(let E=0;E!==S;++E)y[E]=e[E];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let M=d!==null?d.length:0,m=null;if(M!==0){if(m=l.value,g!==!0||m===null){let p=f+M*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=f;S!==M;++S,y+=4)a.copy(d[S]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var Fr=4,sx=6,rx=20,ax=256,$a=new Ir,ff=new Qt,Ku=null,Zu=0,$u=0,Ju=!1,ox=new I,Us=new I,Br=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=ox}=r;Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ku,Zu,$u),this._renderer.xr.enabled=Ju,t.scissorTest=!1,Ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xs||t.mapping===Ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ku=this._renderer.getRenderTarget(),Zu=this._renderer.getActiveCubeFace(),$u=this._renderer.getActiveMipmapLevel(),Ju=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:vi,format:ti,colorSpace:aa,depthBuffer:!1},s=pf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=lx(r)),this._blurMaterial=ux(r,t,e),this._ggxMaterial=cx(r,t,e)}return s}_compileMaterial(t){let e=new Nt(new Je,t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,s,r){let l=new xn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(ff),d.toneMapping=xi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Nt(new xe,new Hn({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(ff),p=!0);for(let S=0;S<6;S++){let y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[S],r.y,r.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[S]));let E=this._cubeSize;Ur(s,y*E,S>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(M,l),d.render(t,l)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===xs||t.mapping===Ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Ur(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=c*1.25,f=d*h,{_lodMax:g}=this,M=this._sizeLods[n],m=3*M*(n>g-Fr?n-g+Fr:0),p=4*(this._cubeSize-M);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,Ur(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(o,$a),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Ur(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(o,$a)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],d=3*u*(s>this._lodMax-Fr?s-this._lodMax+Fr:0),h=4*(this._cubeSize-u);Ur(e,d,h,3*u,2*u),a.setRenderTarget(e),a.render(l,$a)}};function lx(i){let t=[],e=[],n=i,s=i-Fr+1+sx;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,h=6,f=3,g=new Float32Array(f*h*d),M=new Float32Array(f*h*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,S=p>2?0:-1,y=[b,S,0,b+2/3,S,0,b+2/3,S+1,0,b,S,0,b+2/3,S+1,0,b,S+1,0];g.set(y,f*h*p);for(let E=0;E<h;E++){let v=u[E*2]*2-1,T=u[E*2+1]*2-1;p===0?Us.set(1,T,v):p===1?Us.set(-v,1,-T):p===2?Us.set(-v,T,1):p===3?Us.set(-1,T,-v):p===4?Us.set(-v,-1,T):Us.set(v,T,-1),Us.toArray(M,(p*h+E)*f)}}let m=new Je;m.setAttribute("position",new An(g,f)),m.setAttribute("outputDirection",new An(M,f)),e.push(new Nt(m,null)),n>Fr&&n--}return{lodMeshes:e,sizeLods:t}}function pf(i,t,e){let n=new Dn(i,t,e);return n.texture.mapping=Va,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function cx(i,t,e){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function ux(i,t,e){return new Xn({name:"SphericalGaussianBlur",defines:{SAMPLES:rx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function mf(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gc(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function gf(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function gc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var pc=class extends Dn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ga(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xe(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Li});r.uniforms.tEquirect.value=e;let a=new Nt(s,r),o=e.minFilter;return e.minFilter===Di&&(e.minFilter=cn),new yl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function hx(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,f=!1){return h==null?null:f?a(h):r(h)}function r(h){if(h&&h.isTexture){let f=h.mapping;if(f===wl||f===Al)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let M=new pc(g.height);return M.fromEquirectangularTexture(i,h),t.set(h,M),h.addEventListener("dispose",c),o(M.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===wl||f===Al,M=f===xs||f===Ds;if(g||M){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Br(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Br(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,f){return f===wl?h.mapping=xs:f===Al&&(h.mapping=Ds),h}function l(h){let f=0,g=6;for(let M=0;M<g;M++)h[M]!==void 0&&f++;return f===g}function c(h){let f=h.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener("dispose",u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function dx(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Cs("WebGLRenderer: "+n+" extension not supported."),s}}}function fx(i,t,e,n){let s={},r=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let f=r.get(h);f&&(t.remove(f),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,e.memory.geometries++),h}function l(d){let h=d.attributes;for(let f in h)t.update(h[f],i.ARRAY_BUFFER)}function c(d){let h=[],f=d.index,g=d.attributes.position,M=0;if(g===void 0)return;if(f!==null){let b=f.array;M=f.version;for(let S=0,y=b.length;S<y;S+=3){let E=b[S+0],v=b[S+1],T=b[S+2];h.push(E,v,v,T,T,E)}}else{let b=g.array;M=g.version;for(let S=0,y=b.length/3-1;S<y;S+=3){let E=S+0,v=S+1,T=S+2;h.push(E,v,v,T,T,E)}}let m=new(g.count>=65535?da:ha)(h,1);m.version=M;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function u(d){let h=r.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function px(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,h){i.drawElements(n,h,r,d*a),e.update(h,n,1)}function c(d,h,f){f!==0&&(i.drawElementsInstanced(n,h,r,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,d,0,f);let M=0;for(let m=0;m<f;m++)M+=h[m];e.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function mx(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:ce("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function gx(i,t,e){let n=new WeakMap,s=new qe;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let A=function(){T.dispose(),n.delete(o),o.removeEventListener("dispose",A)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),M===!0&&(S=3);let y=o.attributes.position.count*S,E=1;y>t.maxTextureSize&&(E=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let v=new Float32Array(y*E*4*d),T=new ua(v,y,E,d);T.type=Qn,T.needsUpdate=!0;let _=S*4;for(let P=0;P<d;P++){let k=m[P],N=p[P],z=b[P],L=y*E*4*P;for(let F=0;F<k.count;F++){let X=F*_;f===!0&&(s.fromBufferAttribute(k,F),v[L+X+0]=s.x,v[L+X+1]=s.y,v[L+X+2]=s.z,v[L+X+3]=0),g===!0&&(s.fromBufferAttribute(N,F),v[L+X+4]=s.x,v[L+X+5]=s.y,v[L+X+6]=s.z,v[L+X+7]=0),M===!0&&(s.fromBufferAttribute(z,F),v[L+X+8]=s.x,v[L+X+9]=s.y,v[L+X+10]=s.z,v[L+X+11]=z.itemSize===4?s.w:1)}}h={count:d,texture:T,size:new it(y,E)},n.set(o,h),o.addEventListener("dispose",A)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let M=0;M<c.length;M++)f+=c[M];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function _x(i,t,e,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,d=c.geometry,h=t.get(c,d);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var xx={[bu]:"LINEAR_TONE_MAPPING",[Mu]:"REINHARD_TONE_MAPPING",[Su]:"CINEON_TONE_MAPPING",[wu]:"ACES_FILMIC_TONE_MAPPING",[Eu]:"AGX_TONE_MAPPING",[za]:"NEUTRAL_TONE_MAPPING",[Au]:"CUSTOM_TONE_MAPPING"};function yx(i,t,e,n,s,r){let a=new Dn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Je;c.setAttribute("position",new Ce([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ce([0,2,0,0,2,0],2));let u=new al({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new Nt(c,u),h=new Ir(-1,1,1,-1,0,1),f=null,g=null,M=!1,m,p=null,b=[],S=!1;this.setSize=function(y,E){a.setSize(y,E),o!==null&&o.setSize(y,E),l!==null&&l.setSize(y,E);for(let v=0;v<b.length;v++){let T=b[v];T.setSize&&T.setSize(y,E)}},this.setEffects=function(y){b=y,S=b.length>0&&b[0].isRenderPass===!0;let E=a.width,v=a.height;b.length>0&&o===null&&(o=new Dn(E,v,{type:vi,depthBuffer:!1,stencilBuffer:!1}),l=new Dn(E,v,{type:vi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let _=b[T];_.setSize&&_.setSize(E,v)}},this.begin=function(y,E){if(M||y.toneMapping===xi&&b.length===0)return!1;if(p=E,E!==null){let v=E.width,T=E.height;(a.width!==v||a.height!==T)&&this.setSize(v,T)}return S===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=xi,!0},this.hasRenderPass=function(){return S},this.end=function(y,E){y.toneMapping=m,M=!0;let v=a,T=o;for(let _=0;_<b.length;_++){let A=b[_];A.enabled!==!1&&(A.render(y,T,v,E),A.needsSwap!==!1&&(v=T,T=T===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},Te.getTransfer(f)===Ne&&(u.defines.SRGB_TRANSFER="");let _=xx[g];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(p),y.render(d,h),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Uf=new In,th=new ls(1,1),Ff=new ua,Of=new $o,Bf=new ga,_f=[],xf=[],yf=new Float32Array(16),vf=new Float32Array(9),bf=new Float32Array(4);function zr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=_f[s];if(r===void 0&&(r=new Float32Array(s),_f[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function un(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function hn(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function _c(i,t){let e=xf[t];e===void 0&&(e=new Int32Array(t),xf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2fv(this.addr,t),hn(e,t)}}function Mx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;i.uniform3fv(this.addr,t),hn(e,t)}}function Sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4fv(this.addr,t),hn(e,t)}}function wx(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),hn(e,t)}else{if(un(e,n))return;bf.set(n),i.uniformMatrix2fv(this.addr,!1,bf),hn(e,n)}}function Ax(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),hn(e,t)}else{if(un(e,n))return;vf.set(n),i.uniformMatrix3fv(this.addr,!1,vf),hn(e,n)}}function Ex(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),hn(e,t)}else{if(un(e,n))return;yf.set(n),i.uniformMatrix4fv(this.addr,!1,yf),hn(e,n)}}function Tx(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Cx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2iv(this.addr,t),hn(e,t)}}function Rx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3iv(this.addr,t),hn(e,t)}}function Ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4iv(this.addr,t),hn(e,t)}}function Px(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function kx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;i.uniform2uiv(this.addr,t),hn(e,t)}}function Lx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;i.uniform3uiv(this.addr,t),hn(e,t)}}function Dx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;i.uniform4uiv(this.addr,t),hn(e,t)}}function Nx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=e.isReversedDepthBuffer()?hc:uc,r=th):r=Uf,e.setTexture2D(t||r,s)}function Ux(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Of,s)}function Fx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Bf,s)}function Ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ff,s)}function Bx(i){switch(i){case 5126:return vx;case 35664:return bx;case 35665:return Mx;case 35666:return Sx;case 35674:return wx;case 35675:return Ax;case 35676:return Ex;case 5124:case 35670:return Tx;case 35667:case 35671:return Cx;case 35668:case 35672:return Rx;case 35669:case 35673:return Ix;case 5125:return Px;case 36294:return kx;case 36295:return Lx;case 36296:return Dx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Fx;case 36289:case 36303:case 36311:case 36292:return Ox}}function zx(i,t){i.uniform1fv(this.addr,t)}function Vx(i,t){let e=zr(t,this.size,2);i.uniform2fv(this.addr,e)}function Gx(i,t){let e=zr(t,this.size,3);i.uniform3fv(this.addr,e)}function Hx(i,t){let e=zr(t,this.size,4);i.uniform4fv(this.addr,e)}function Wx(i,t){let e=zr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Xx(i,t){let e=zr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Yx(i,t){let e=zr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function qx(i,t){i.uniform1iv(this.addr,t)}function Kx(i,t){i.uniform2iv(this.addr,t)}function Zx(i,t){i.uniform3iv(this.addr,t)}function $x(i,t){i.uniform4iv(this.addr,t)}function Jx(i,t){i.uniform1uiv(this.addr,t)}function jx(i,t){i.uniform2uiv(this.addr,t)}function Qx(i,t){i.uniform3uiv(this.addr,t)}function ty(i,t){i.uniform4uiv(this.addr,t)}function ey(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=th:a=Uf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function ny(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Of,r[a])}function iy(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Bf,r[a])}function sy(i,t,e){let n=this.cache,s=t.length,r=_c(e,s);un(n,r)||(i.uniform1iv(this.addr,r),hn(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ff,r[a])}function ry(i){switch(i){case 5126:return zx;case 35664:return Vx;case 35665:return Gx;case 35666:return Hx;case 35674:return Wx;case 35675:return Xx;case 35676:return Yx;case 5124:case 35670:return qx;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return $x;case 5125:return Jx;case 36294:return jx;case 36295:return Qx;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ey;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return sy}}var eh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bx(e.type)}},nh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ry(e.type)}},ih=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},ju=/(\w+)(\])?(\[|\.)?/g;function Mf(i,t){i.seq.push(t),i.map[t.id]=t}function ay(i,t,e){let n=i.name,s=n.length;for(ju.lastIndex=0;;){let r=ju.exec(n),a=ju.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Mf(e,c===void 0?new eh(o,i,t):new nh(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new ih(o),Mf(e,d)),e=d}}}var Or=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);ay(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Sf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var oy=37297,ly=0;function cy(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var wf=new fe;function uy(i){Te._getMatrix(wf,Te.workingColorSpace,i);let t=`mat3( ${wf.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case Ne:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Af(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+cy(i.getShaderSource(t),o)}else return r}function hy(i,t){let e=uy(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var dy={[bu]:"Linear",[Mu]:"Reinhard",[Su]:"Cineon",[wu]:"ACESFilmic",[Eu]:"AgX",[za]:"Neutral",[Au]:"Custom"};function fy(i,t){let e=dy[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new I;function py(){Te.getLuminanceCoefficients(fc);let i=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function my(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function gy(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function _y(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function ja(i){return i!==""}function Ef(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var xy=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(xy,vy)}var yy=new Map;function vy(i,t){let e=ve[t];if(e===void 0){let n=yy.get(t);if(n!==void 0)e=ve[n],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return sh(e)}var by=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cf(i){return i.replace(by,My)}function My(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Sy={[Ba]:"SHADOWMAP_TYPE_PCF",[kr]:"SHADOWMAP_TYPE_VSM"};function wy(i){return Sy[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ay={[xs]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[Va]:"ENVMAP_TYPE_CUBE_UV"};function Ey(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Ay[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Ty={[Ds]:"ENVMAP_MODE_REFRACTION"};function Cy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ty[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ry={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[Vd]:"ENVMAP_BLENDING_MIX",[Gd]:"ENVMAP_BLENDING_ADD"};function Iy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ry[i.combine]||"ENVMAP_BLENDING_NONE"}function Py(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ky(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=wy(e),c=Ey(e),u=Cy(e),d=Iy(e),h=Py(e),f=my(e),g=gy(r),M=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[Rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==xi?"#define TONE_MAPPING":"",e.toneMapping!==xi?ve.tonemapping_pars_fragment:"",e.toneMapping!==xi?fy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ve.colorspace_pars_fragment,hy("linearToOutputTexel",e.outputColorSpace),py(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ja).join(`
`)),a=sh(a),a=Ef(a,e),a=Tf(a,e),o=sh(o),o=Ef(o,e),o=Tf(o,e),a=Cf(a),o=Cf(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=b+m+a,y=b+p+o,E=Sf(s,s.VERTEX_SHADER,S),v=Sf(s,s.FRAGMENT_SHADER,y);s.attachShader(M,E),s.attachShader(M,v),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function T(k){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(M)||"",z=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(v)||"",F=N.trim(),X=z.trim(),$=L.trim(),ft=!0,j=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(ft=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,M,E,v);else{let rt=Af(s,E,"vertex"),ut=Af(s,v,"fragment");ce("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+F+`
`+rt+`
`+ut)}else F!==""?oe("WebGLProgram: Program Info Log:",F):(X===""||$==="")&&(j=!1);j&&(k.diagnostics={runnable:ft,programLog:F,vertexShader:{log:X,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(E),s.deleteShader(v),_=new Or(s,M),A=_y(s,M)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let A;this.getAttributes=function(){return A===void 0&&T(this),A};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(M,oy)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ly++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=E,this.fragmentShader=v,this}var Ly=0,rh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ah(t),e.set(t,n)),n}},ah=class{constructor(t){this.id=Ly++,this.code=t,this.usedTimes=0}};function Dy(i){return i===vs||i===qa||i===Ka}function Ny(i,t,e,n,s,r){let a=new yr,o=new rh,l=new Set,c=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function M(_,A,P,k,N,z){let L=k.fog,F=N.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?k.environment:null,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ft=t.get(_.envMap||X,$),j=ft&&ft.mapping===Va?ft.image.height:null,rt=f[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&oe("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let ut=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Wt=ut!==void 0?ut.length:0,kt=0;F.morphAttributes.position!==void 0&&(kt=1),F.morphAttributes.normal!==void 0&&(kt=2),F.morphAttributes.color!==void 0&&(kt=3);let pe,me,ae,tt;if(rt){let Le=Ui[rt];pe=Le.vertexShader,me=Le.fragmentShader}else{pe=_.vertexShader,me=_.fragmentShader;let Le=o.getVertexShaderStage(_),K=o.getFragmentShaderStage(_);o.update(_,Le,K),ae=Le.id,tt=K.id}let st=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Xt=N.isInstancedMesh===!0,It=N.isBatchedMesh===!0,te=!!_.map,we=!!_.matcap,G=!!ft,et=!!_.aoMap,q=!!_.lightMap,lt=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,vt=!!_.displacementMap,Ut=!!_.emissiveMap,Ht=!!_.metalnessMap,Bt=!!_.roughnessMap,D=_.anisotropy>0,ge=_.clearcoat>0,se=_.dispersion>0,R=_.retroreflectivity>0,x=_.iridescence>0,V=_.sheen>0,W=_.transmission>0,Q=D&&!!_.anisotropyMap,_t=ge&&!!_.clearcoatMap,yt=ge&&!!_.clearcoatNormalMap,nt=ge&&!!_.clearcoatRoughnessMap,ht=x&&!!_.iridescenceMap,St=x&&!!_.iridescenceThicknessMap,Yt=V&&!!_.sheenColorMap,bt=V&&!!_.sheenRoughnessMap,wt=!!_.specularMap,$t=!!_.specularColorMap,ee=!!_.specularIntensityMap,le=W&&!!_.transmissionMap,B=W&&!!_.thicknessMap,Mt=!!_.gradientMap,at=!!_.alphaMap,At=_.alphaTest>0,Et=!!_.alphaHash,dt=!!_.extensions,Zt=xi;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Zt=i.toneMapping);let Gt={shaderID:rt,shaderType:_.type,shaderName:_.name,vertexShader:pe,fragmentShader:me,defines:_.defines,customVertexShaderID:ae,customFragmentShaderID:tt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:It,batchingColor:It&&N._colorsTexture!==null,instancing:Xt,instancingColor:Xt&&N.instanceColor!==null,instancingMorph:Xt&&N.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:te,matcap:we,envMap:G,envMapMode:G&&ft.mapping,envMapCubeUVHeight:j,aoMap:et,lightMap:q,bumpMap:lt,normalMap:pt,displacementMap:vt,emissiveMap:Ut,normalMapObjectSpace:pt&&_.normalMapType===Xd,normalMapTangentSpace:pt&&_.normalMapType===Za,packedNormalMap:pt&&_.normalMapType===Za&&Dy(_.normalMap.format),metalnessMap:Ht,roughnessMap:Bt,anisotropy:D,anisotropyMap:Q,clearcoat:ge,clearcoatMap:_t,clearcoatNormalMap:yt,clearcoatRoughnessMap:nt,dispersion:se,retroreflection:R,iridescence:x,iridescenceMap:ht,iridescenceThicknessMap:St,sheen:V,sheenColorMap:Yt,sheenRoughnessMap:bt,specularMap:wt,specularColorMap:$t,specularIntensityMap:ee,transmission:W,transmissionMap:le,thicknessMap:B,gradientMap:Mt,opaque:_.transparent===!1&&_.blending===Lr&&_.alphaToCoverage===!1,alphaMap:at,alphaTest:At,alphaHash:Et,combine:_.combine,mapUv:te&&g(_.map.channel),aoMapUv:et&&g(_.aoMap.channel),lightMapUv:q&&g(_.lightMap.channel),bumpMapUv:lt&&g(_.bumpMap.channel),normalMapUv:pt&&g(_.normalMap.channel),displacementMapUv:vt&&g(_.displacementMap.channel),emissiveMapUv:Ut&&g(_.emissiveMap.channel),metalnessMapUv:Ht&&g(_.metalnessMap.channel),roughnessMapUv:Bt&&g(_.roughnessMap.channel),anisotropyMapUv:Q&&g(_.anisotropyMap.channel),clearcoatMapUv:_t&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:yt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:St&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:bt&&g(_.sheenRoughnessMap.channel),specularMapUv:wt&&g(_.specularMap.channel),specularColorMapUv:$t&&g(_.specularColorMap.channel),specularIntensityMapUv:ee&&g(_.specularIntensityMap.channel),transmissionMapUv:le&&g(_.transmissionMap.channel),thicknessMapUv:B&&g(_.thicknessMap.channel),alphaMapUv:at&&g(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(pt||D),vertexNormals:!!F.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(te||at),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||F.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:F.attributes.position!==void 0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Wt,morphTextureStride:kt,numSunLights:A.sun.length,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numSunLightShadows:A.sunShadowMap.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Zt,decodeVideoTexture:te&&_.map.isVideoTexture===!0&&Te.getTransfer(_.map.colorSpace)===Ne,decodeVideoTextureEmissive:Ut&&_.emissiveMap.isVideoTexture===!0&&Te.getTransfer(_.emissiveMap.colorSpace)===Ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===_i,flipSided:_.side===yn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:dt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&_.extensions.multiDraw===!0||It)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Gt.vertexUv1s=l.has(1),Gt.vertexUv2s=l.has(2),Gt.vertexUv3s=l.has(3),l.clear(),Gt}function m(_){let A=[];if(_.shaderID?A.push(_.shaderID):(A.push(_.customVertexShaderID),A.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)A.push(P),A.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(A,_),b(A,_),A.push(i.outputColorSpace)),A.push(_.customProgramCacheKey),A.join()}function p(_,A){_.push(A.precision),_.push(A.outputColorSpace),_.push(A.envMapMode),_.push(A.envMapCubeUVHeight),_.push(A.mapUv),_.push(A.alphaMapUv),_.push(A.lightMapUv),_.push(A.aoMapUv),_.push(A.bumpMapUv),_.push(A.normalMapUv),_.push(A.displacementMapUv),_.push(A.emissiveMapUv),_.push(A.metalnessMapUv),_.push(A.roughnessMapUv),_.push(A.anisotropyMapUv),_.push(A.clearcoatMapUv),_.push(A.clearcoatNormalMapUv),_.push(A.clearcoatRoughnessMapUv),_.push(A.iridescenceMapUv),_.push(A.iridescenceThicknessMapUv),_.push(A.sheenColorMapUv),_.push(A.sheenRoughnessMapUv),_.push(A.specularMapUv),_.push(A.specularColorMapUv),_.push(A.specularIntensityMapUv),_.push(A.transmissionMapUv),_.push(A.thicknessMapUv),_.push(A.combine),_.push(A.fogExp2),_.push(A.sizeAttenuation),_.push(A.morphTargetsCount),_.push(A.morphAttributeCount),_.push(A.numSunLights),_.push(A.numDirLights),_.push(A.numPointLights),_.push(A.numSpotLights),_.push(A.numSpotLightMaps),_.push(A.numHemiLights),_.push(A.numRectAreaLights),_.push(A.numSunLightShadows),_.push(A.numDirLightShadows),_.push(A.numPointLightShadows),_.push(A.numSpotLightShadows),_.push(A.numSpotLightShadowsWithMaps),_.push(A.numLightProbes),_.push(A.shadowMapType),_.push(A.toneMapping),_.push(A.numClippingPlanes),_.push(A.numClipIntersection),_.push(A.depthPacking)}function b(_,A){a.disableAll(),A.instancing&&a.enable(0),A.instancingColor&&a.enable(1),A.instancingMorph&&a.enable(2),A.matcap&&a.enable(3),A.envMap&&a.enable(4),A.normalMapObjectSpace&&a.enable(5),A.normalMapTangentSpace&&a.enable(6),A.clearcoat&&a.enable(7),A.iridescence&&a.enable(8),A.alphaTest&&a.enable(9),A.vertexColors&&a.enable(10),A.vertexAlphas&&a.enable(11),A.vertexUv1s&&a.enable(12),A.vertexUv2s&&a.enable(13),A.vertexUv3s&&a.enable(14),A.vertexTangents&&a.enable(15),A.anisotropy&&a.enable(16),A.alphaHash&&a.enable(17),A.batching&&a.enable(18),A.dispersion&&a.enable(19),A.retroreflection&&a.enable(24),A.batchingColor&&a.enable(20),A.gradientMap&&a.enable(21),A.packedNormalMap&&a.enable(22),A.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.reversedDepthBuffer&&a.enable(4),A.skinning&&a.enable(5),A.morphTargets&&a.enable(6),A.morphNormals&&a.enable(7),A.morphColors&&a.enable(8),A.premultipliedAlpha&&a.enable(9),A.shadowMapEnabled&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),A.decodeVideoTextureEmissive&&a.enable(20),A.alphaToCoverage&&a.enable(21),A.numLightProbeGrids>0&&a.enable(22),A.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let A=f[_.type],P;if(A){let k=Ui[A];P=uf.clone(k.uniforms)}else P=_.uniforms;return P}function y(_,A){let P=u.get(A);return P!==void 0?++P.usedTimes:(P=new ky(i,A,_,s),c.push(P),u.set(A,P)),P}function E(_){if(--_.usedTimes===0){let A=c.indexOf(_);c[A]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function T(){o.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:S,acquireProgram:y,releaseProgram:E,releaseShaderCache:v,programs:c,dispose:T}}function Uy(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Fy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function If(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,M,m,p){let b=i[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:M,renderOrder:h.renderOrder,z:m,group:p},i[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=a(h),b.groupOrder=M,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function l(h,f,g,M,m,p,b){b.reversedDepth===!0&&(m=-m);let S=o(h,f,g,M,m,p);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):e.push(S)}function c(h,f,g,M,m,p){let b=o(h,f,g,M,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function u(h,f){e.length>1&&e.sort(h||Fy),n.length>1&&n.sort(f||If),s.length>1&&s.sort(f||If)}function d(){for(let h=t,f=i.length;h<f;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:u}}function Oy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Pf,i.set(n,[a])):s>=r.length?(a=new Pf,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function By(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new Qt};break;case"SpotLight":e={position:new I,direction:new I,color:new Qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Qt,groundColor:new Qt};break;case"RectAreaLight":e={color:new Qt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function zy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vy=0;function Gy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hy(i){let t=new By,e=zy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let s=new I,r=new Ie,a=new Ie;function o(c){let u=0,d=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let f=0,g=0,M=0,m=0,p=0,b=0,S=0,y=0,E=0,v=0,T=0,_=0,A=0,P=0;c.sort(Gy);for(let N=0,z=c.length;N<z;N++){let L=c[N],F=L.color,X=L.intensity,$=L.distance,ft=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===vs?ft=L.shadow.map.texture:ft=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*X,d+=F.g*X,h+=F.b*X;else if(L.isLightProbe){for(let j=0;j<9;j++)n.probe[j].addScaledVector(L.sh.coefficients[j],X);P++}else if(L.isSunLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,ut=e.get(L);ut.shadowIntensity=rt.intensity,ut.shadowBias=rt.bias,ut.shadowNormalBias=rt.normalBias,ut.shadowRadius=rt.radius,ut.shadowMapSize.copy(rt.mapSize).multiply(rt.getFrameExtents()),n.sunShadow[g]=ut,n.sunShadowMap[g]=ft;let Wt=rt.getViewportCount();for(let kt=0;kt<Wt;kt++)n.sunShadowMatrix[M+kt]=rt.getMatrix(kt),n.sunShadowCascade[M+kt]=rt._cascadeData[kt];M+=Wt,g++}n.sun[f]=j,f++}else if(L.isDirectionalLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let rt=L.shadow,ut=e.get(L);ut.shadowIntensity=rt.intensity,ut.shadowBias=rt.bias,ut.shadowNormalBias=rt.normalBias,ut.shadowRadius=rt.radius,ut.shadowMapSize=rt.mapSize,n.directionalShadow[m]=ut,n.directionalShadowMap[m]=ft,n.directionalShadowMatrix[m]=L.shadow.matrix,E++}n.directional[m]=j,m++}else if(L.isSpotLight){let j=t.get(L);j.position.setFromMatrixPosition(L.matrixWorld),j.color.copy(F).multiplyScalar(X),j.distance=$,j.coneCos=Math.cos(L.angle),j.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),j.decay=L.decay,n.spot[b]=j;let rt=L.shadow;if(L.map&&(n.spotLightMap[_]=L.map,_++,rt.updateMatrices(L),L.castShadow&&A++),n.spotLightMatrix[b]=rt.matrix,L.castShadow){let ut=e.get(L);ut.shadowIntensity=rt.intensity,ut.shadowBias=rt.bias,ut.shadowNormalBias=rt.normalBias,ut.shadowRadius=rt.radius,ut.shadowMapSize=rt.mapSize,n.spotShadow[b]=ut,n.spotShadowMap[b]=ft,T++}b++}else if(L.isRectAreaLight){let j=t.get(L);j.color.copy(F).multiplyScalar(X),j.halfWidth.set(L.width*.5,0,0),j.halfHeight.set(0,L.height*.5,0),n.rectArea[S]=j,S++}else if(L.isPointLight){let j=t.get(L);if(j.color.copy(L.color).multiplyScalar(L.intensity),j.distance=L.distance,j.decay=L.decay,L.castShadow){let rt=L.shadow,ut=e.get(L);ut.shadowIntensity=rt.intensity,ut.shadowBias=rt.bias,ut.shadowNormalBias=rt.normalBias,ut.shadowRadius=rt.radius,ut.shadowMapSize=rt.mapSize,ut.shadowCameraNear=rt.camera.near,ut.shadowCameraFar=rt.camera.far,n.pointShadow[p]=ut,n.pointShadowMap[p]=ft,n.pointShadowMatrix[p]=L.shadow.matrix,v++}n.point[p]=j,p++}else if(L.isHemisphereLight){let j=t.get(L);j.skyColor.copy(L.color).multiplyScalar(X),j.groundColor.copy(L.groundColor).multiplyScalar(X),n.hemi[y]=j,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let k=n.hash;(k.sunLength!==f||k.directionalLength!==m||k.pointLength!==p||k.spotLength!==b||k.rectAreaLength!==S||k.hemiLength!==y||k.numSunShadows!==g||k.numDirectionalShadows!==E||k.numPointShadows!==v||k.numSpotShadows!==T||k.numSpotMaps!==_||k.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=S,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.directionalShadowMatrix.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+_-A,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=P,k.sunLength=f,k.directionalLength=m,k.pointLength=p,k.spotLength=b,k.rectAreaLength=S,k.hemiLength=y,k.numSunShadows=g,k.numDirectionalShadows=E,k.numPointShadows=v,k.numSpotShadows=T,k.numSpotMaps=_,k.numLightProbes=P,n.version=Vy++)}function l(c,u){let d=0,h=0,f=0,g=0,M=0,m=0,p=u.matrixWorldInverse;for(let b=0,S=c.length;b<S;b++){let y=c[b];if(y.isSunLight){let E=n.sun[d];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let E=n.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),h++}else if(y.isSpotLight){let E=n.spot[g];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let E=n.rectArea[M];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let E=n.point[f];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let E=n.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:n}}function kf(i){let t=new Hy(i),e=[],n=[],s=[];function r(h){d.camera=h,e.length=0,n.length=0,s.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Wy(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new kf(i),t.set(s,[o])):r>=a.length?(o=new kf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yy=`uniform sampler2D shadow_pass;
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
}`,qy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Ky=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],Lf=new Ie,Ja=new I,Qu=new I;function Zy(i,t,e){let n=new wr,s=new it,r=new it,a=new qe,o=new ol,l=new ll,c={},u=e.maxTextureSize,d={[_s]:yn,[yn]:_s,[_i]:_i},h=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:Xy,fragmentShader:Yy}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new Je;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Nt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ba;let p=this.type;this.render=function(v,T,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Ml&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ba);let A=i.getRenderTarget(),P=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),N=i.state;N.setBlending(Li),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let z=p!==this.type;z&&T.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(F=>F.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,F=v.length;L<F;L++){let X=v[L],$=X.shadow;if($===void 0){oe("WebGLShadowMap:",X,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ft=$.getFrameExtents();s.multiply(ft),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,$.mapSize.y=r.y));let j=i.state.buffers.depth.getReversed();if($.camera._reversedDepth=j,$.map===null||z===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===kr){if(X.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Dn(s.x,s.y,{format:vs,type:vi,minFilter:cn,magFilter:cn,generateMipmaps:!1}),$.map.texture.name=X.name+".shadowMap",$.map.depthTexture=new ls(s.x,s.y,Qn),$.map.depthTexture.name=X.name+".shadowMapDepth",$.map.depthTexture.format=Pi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n}else X.isPointLight?($.map=new pc(s.x),$.map.depthTexture=new tl(s.x,yi)):($.map=new Dn(s.x,s.y),$.map.depthTexture=new ls(s.x,s.y,yi)),$.map.depthTexture.name=X.name+".shadowMap",$.map.depthTexture.format=Pi,this.type===Ba?($.map.depthTexture.compareFunction=j?hc:uc,$.map.depthTexture.minFilter=cn,$.map.depthTexture.magFilter=cn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=_n,$.map.depthTexture.magFilter=_n);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let rt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();X.isPointLight!==!0&&$.updateMatrices(X,_);for(let ut=0;ut<rt;ut++){let Wt=$.getCamera(ut);if(X.isPointLight){let kt=$.camera,pe=$.matrix,me=X.distance||kt.far;me!==kt.far&&(kt.far=me,kt.updateProjectionMatrix()),Ja.setFromMatrixPosition(X.matrixWorld),kt.position.copy(Ja),Qu.copy(kt.position),Qu.add(qy[ut]),kt.up.copy(Ky[ut]),kt.lookAt(Qu),kt.updateMatrixWorld(),pe.makeTranslation(-Ja.x,-Ja.y,-Ja.z),Lf.multiplyMatrices(kt.projectionMatrix,kt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Lf,kt.coordinateSystem,kt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)i.setRenderTarget($.map,ut),i.clear();else{ut===0&&(i.setRenderTarget($.map),i.clear());let kt=$.getViewport(ut);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),N.viewport(a)}n=$.getFrustum(ut),y(T,_,Wt,X,this.type)}$.isPointLightShadow!==!0&&this.type===kr&&b($,_),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(A,P,k)};function b(v,T){let _=t.update(M);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null?v.mapPass=new Dn(s.x,s.y,{format:vs,type:vi}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),h.uniforms.shadow_pass.value=v.map.depthTexture,h.uniforms.resolution.value.set(v.map.width,v.map.height),h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(T,null,_,h,M,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(T,null,_,f,M,null)}function S(v,T,_,A){let P=null,k=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(k!==void 0)P=k;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let N=P.uuid,z=T.uuid,L=c[N];L===void 0&&(L={},c[N]=L);let F=L[z];F===void 0&&(F=P.clone(),L[z]=F,T.addEventListener("dispose",E)),P=F}if(P.visible=T.visible,P.wireframe=T.wireframe,A===kr?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:d[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=i.properties.get(P);N.light=_}return P}function y(v,T,_,A,P){if(v.visible===!1)return;if(v.layers.test(T.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&P===kr)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);let z=t.update(v),L=v.material;if(Array.isArray(L)){let F=z.groups;for(let X=0,$=F.length;X<$;X++){let ft=F[X],j=L[ft.materialIndex];if(j&&j.visible){let rt=S(v,j,A,P);v.onBeforeShadow(i,v,T,_,z,rt,ft),i.renderBufferDirect(_,null,z,rt,v,ft),v.onAfterShadow(i,v,T,_,z,rt,ft)}}}else if(L.visible){let F=S(v,L,A,P);v.onBeforeShadow(i,v,T,_,z,F,null),i.renderBufferDirect(_,null,z,F,v,null),v.onAfterShadow(i,v,T,_,z,F,null)}}let N=v.children;for(let z=0,L=N.length;z<L;z++)y(N[z],T,_,A,P)}function E(v){v.target.removeEventListener("dispose",E);for(let _ in c){let A=c[_],P=v.target.uuid;P in A&&(A[P].dispose(),delete A[P])}}}function $y(i,t){function e(){let B=!1,Mt=new qe,at=null,At=new qe(0,0,0,0);return{setMask:function(Et){at!==Et&&!B&&(i.colorMask(Et,Et,Et,Et),at=Et)},setLocked:function(Et){B=Et},setClear:function(Et,dt,Zt,Gt,Le){Le===!0&&(Et*=Gt,dt*=Gt,Zt*=Gt),Mt.set(Et,dt,Zt,Gt),At.equals(Mt)===!1&&(i.clearColor(Et,dt,Zt,Gt),At.copy(Mt))},reset:function(){B=!1,at=null,At.set(-1,0,0,0)}}}function n(){let B=!1,Mt=!1,at=null,At=null,Et=null;return{setReversed:function(dt){if(Mt!==dt){let Zt=t.get("EXT_clip_control");dt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Mt=dt;let Gt=Et;Et=null,this.setClear(Gt)}},getReversed:function(){return Mt},setTest:function(dt){dt?st(i.DEPTH_TEST):xt(i.DEPTH_TEST)},setMask:function(dt){at!==dt&&!B&&(i.depthMask(dt),at=dt)},setFunc:function(dt){if(Mt&&(dt=nf[dt]),At!==dt){switch(dt){case Bo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Vo:i.depthFunc(i.LESS);break;case fr:i.depthFunc(i.LEQUAL);break;case Go:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Wo:i.depthFunc(i.GREATER);break;case Xo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=dt}},setLocked:function(dt){B=dt},setClear:function(dt){Et!==dt&&(Et=dt,Mt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){B=!1,at=null,At=null,Et=null,Mt=!1}}}function s(){let B=!1,Mt=null,at=null,At=null,Et=null,dt=null,Zt=null,Gt=null,Le=null;return{setTest:function(K){B||(K?st(i.STENCIL_TEST):xt(i.STENCIL_TEST))},setMask:function(K){Mt!==K&&!B&&(i.stencilMask(K),Mt=K)},setFunc:function(K,gt,Tt){(at!==K||At!==gt||Et!==Tt)&&(i.stencilFunc(K,gt,Tt),at=K,At=gt,Et=Tt)},setOp:function(K,gt,Tt){(dt!==K||Zt!==gt||Gt!==Tt)&&(i.stencilOp(K,gt,Tt),dt=K,Zt=gt,Gt=Tt)},setLocked:function(K){B=K},setClear:function(K){Le!==K&&(i.clearStencil(K),Le=K)},reset:function(){B=!1,Mt=null,at=null,At=null,Et=null,dt=null,Zt=null,Gt=null,Le=null}}}let r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],M=null,m=!1,p=null,b=null,S=null,y=null,E=null,v=null,T=null,_=new Qt(0,0,0),A=0,P=!1,k=null,N=null,z=null,L=null,F=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ft=0,j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(ft=parseFloat(/^WebGL (\d)/.exec(j)[1]),$=ft>=1):j.indexOf("OpenGL ES")!==-1&&(ft=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),$=ft>=2);let rt=null,ut={},Wt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),pe=new qe().fromArray(Wt),me=new qe().fromArray(kt);function ae(B,Mt,at,At){let Et=new Uint8Array(4),dt=i.createTexture();i.bindTexture(B,dt),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<at;Zt++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(Mt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return dt}let tt={};tt[i.TEXTURE_2D]=ae(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=ae(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=ae(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=ae(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(fr),lt(!1),pt(gu),st(i.CULL_FACE),et(Li);function st(B){u[B]!==!0&&(i.enable(B),u[B]=!0)}function xt(B){u[B]!==!1&&(i.disable(B),u[B]=!1)}function Xt(B,Mt){return h[B]!==Mt?(i.bindFramebuffer(B,Mt),h[B]=Mt,B===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),B===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function It(B,Mt){let at=g,At=!1;if(B){at=f.get(Mt),at===void 0&&(at=[],f.set(Mt,at));let Et=B.textures;if(at.length!==Et.length||at[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Zt=Et.length;dt<Zt;dt++)at[dt]=i.COLOR_ATTACHMENT0+dt;at.length=Et.length,At=!0}}else at[0]!==i.BACK&&(at[0]=i.BACK,At=!0);At&&i.drawBuffers(at)}function te(B){return M!==B?(i.useProgram(B),M=B,!0):!1}let we={[Ls]:i.FUNC_ADD,[wd]:i.FUNC_SUBTRACT,[Ad]:i.FUNC_REVERSE_SUBTRACT};we[Ed]=i.MIN,we[Td]=i.MAX;let G={[Cd]:i.ZERO,[Rd]:i.ONE,[Id]:i.SRC_COLOR,[yu]:i.SRC_ALPHA,[Ud]:i.SRC_ALPHA_SATURATE,[Dd]:i.DST_COLOR,[kd]:i.DST_ALPHA,[Pd]:i.ONE_MINUS_SRC_COLOR,[vu]:i.ONE_MINUS_SRC_ALPHA,[Nd]:i.ONE_MINUS_DST_COLOR,[Ld]:i.ONE_MINUS_DST_ALPHA,[Fd]:i.CONSTANT_COLOR,[Od]:i.ONE_MINUS_CONSTANT_COLOR,[Bd]:i.CONSTANT_ALPHA,[zd]:i.ONE_MINUS_CONSTANT_ALPHA};function et(B,Mt,at,At,Et,dt,Zt,Gt,Le,K){if(B===Li){m===!0&&(xt(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),B!==Sd){if(B!==p||K!==P){if((b!==Ls||E!==Ls)&&(i.blendEquation(i.FUNC_ADD),b=Ls,E=Ls),K)switch(B){case Lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFunc(i.ONE,i.ONE);break;case _u:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case xu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:ce("WebGLState: Invalid blending: ",B);break}else switch(B){case Lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case _u:ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xu:ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ce("WebGLState: Invalid blending: ",B);break}S=null,y=null,v=null,T=null,_.set(0,0,0),A=0,p=B,P=K}return}Et=Et||Mt,dt=dt||at,Zt=Zt||At,(Mt!==b||Et!==E)&&(i.blendEquationSeparate(we[Mt],we[Et]),b=Mt,E=Et),(at!==S||At!==y||dt!==v||Zt!==T)&&(i.blendFuncSeparate(G[at],G[At],G[dt],G[Zt]),S=at,y=At,v=dt,T=Zt),(Gt.equals(_)===!1||Le!==A)&&(i.blendColor(Gt.r,Gt.g,Gt.b,Le),_.copy(Gt),A=Le),p=B,P=!1}function q(B,Mt){B.side===_i?xt(i.CULL_FACE):st(i.CULL_FACE);let at=B.side===yn;Mt&&(at=!at),lt(at),B.blending===Lr&&B.transparent===!1?et(Li):et(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let At=B.stencilWrite;o.setTest(At),At&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ut(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):xt(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(B){k!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),k=B)}function pt(B){B!==bd?(st(i.CULL_FACE),B!==N&&(B===gu?i.cullFace(i.BACK):B===Md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xt(i.CULL_FACE),N=B}function vt(B){B!==z&&($&&i.lineWidth(B),z=B)}function Ut(B,Mt,at){B?(st(i.POLYGON_OFFSET_FILL),(L!==Mt||F!==at)&&(L=Mt,F=at,a.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,at))):xt(i.POLYGON_OFFSET_FILL)}function Ht(B){B?st(i.SCISSOR_TEST):xt(i.SCISSOR_TEST)}function Bt(B){B===void 0&&(B=i.TEXTURE0+X-1),rt!==B&&(i.activeTexture(B),rt=B)}function D(B,Mt,at){at===void 0&&(rt===null?at=i.TEXTURE0+X-1:at=rt);let At=ut[at];At===void 0&&(At={type:void 0,texture:void 0},ut[at]=At),(At.type!==B||At.texture!==Mt)&&(rt!==at&&(i.activeTexture(at),rt=at),i.bindTexture(B,Mt||tt[B]),At.type=B,At.texture=Mt)}function ge(){let B=ut[rt];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function se(){try{i.compressedTexImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function x(){try{i.texSubImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function V(){try{i.texSubImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function Q(){try{i.compressedTexSubImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function _t(){try{i.texStorage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function yt(){try{i.texStorage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function nt(){try{i.texImage2D(...arguments)}catch(B){ce("WebGLState:",B)}}function ht(){try{i.texImage3D(...arguments)}catch(B){ce("WebGLState:",B)}}function St(B){return d[B]!==void 0?d[B]:i.getParameter(B)}function Yt(B,Mt){d[B]!==Mt&&(i.pixelStorei(B,Mt),d[B]=Mt)}function bt(B){pe.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),pe.copy(B))}function wt(B){me.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),me.copy(B))}function $t(B,Mt){let at=c.get(Mt);at===void 0&&(at=new WeakMap,c.set(Mt,at));let At=at.get(B);At===void 0&&(At=i.getUniformBlockIndex(Mt,B.name),at.set(B,At))}function ee(B,Mt){let At=c.get(Mt).get(B);l.get(Mt)!==At&&(i.uniformBlockBinding(Mt,At,B.__bindingPointIndex),l.set(Mt,At))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},d={},rt=null,ut={},h={},f=new WeakMap,g=[],M=null,m=!1,p=null,b=null,S=null,y=null,E=null,v=null,T=null,_=new Qt(0,0,0),A=0,P=!1,k=null,N=null,z=null,L=null,F=null,pe.set(0,0,i.canvas.width,i.canvas.height),me.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:xt,bindFramebuffer:Xt,drawBuffers:It,useProgram:te,setBlending:et,setMaterial:q,setFlipSided:lt,setCullFace:pt,setLineWidth:vt,setPolygonOffset:Ut,setScissorTest:Ht,activeTexture:Bt,bindTexture:D,unbindTexture:ge,compressedTexImage2D:se,compressedTexImage3D:R,texImage2D:nt,texImage3D:ht,pixelStorei:Yt,getParameter:St,updateUBOMapping:$t,uniformBlockBinding:ee,texStorage2D:_t,texStorage3D:yt,texSubImage2D:x,texSubImage3D:V,compressedTexSubImage2D:W,compressedTexSubImage3D:Q,scissor:bt,viewport:wt,reset:le}}function Jy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,x){return g?new OffscreenCanvas(R,x):la("canvas")}function m(R,x,V){let W=1,Q=se(R);if((Q.width>V||Q.height>V)&&(W=V/Math.max(Q.width,Q.height)),W<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let _t=Math.floor(W*Q.width),yt=Math.floor(W*Q.height);h===void 0&&(h=M(_t,yt));let nt=x?M(_t,yt):h;return nt.width=_t,nt.height=yt,nt.getContext("2d").drawImage(R,0,0,_t,yt),oe("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+_t+"x"+yt+")."),nt}else return"data"in R&&oe("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,x,V,W,Q,_t=!1){if(R!==null){if(i[R]!==void 0)return i[R];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let yt;W&&(yt=t.get("EXT_texture_norm16"),yt||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let nt=x;if(x===i.RED&&(V===i.FLOAT&&(nt=i.R32F),V===i.HALF_FLOAT&&(nt=i.R16F),V===i.UNSIGNED_BYTE&&(nt=i.R8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.R16_EXT),V===i.SHORT&&yt&&(nt=yt.R16_SNORM_EXT)),x===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.R8UI),V===i.UNSIGNED_SHORT&&(nt=i.R16UI),V===i.UNSIGNED_INT&&(nt=i.R32UI),V===i.BYTE&&(nt=i.R8I),V===i.SHORT&&(nt=i.R16I),V===i.INT&&(nt=i.R32I)),x===i.RG&&(V===i.FLOAT&&(nt=i.RG32F),V===i.HALF_FLOAT&&(nt=i.RG16F),V===i.UNSIGNED_BYTE&&(nt=i.RG8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RG16_EXT),V===i.SHORT&&yt&&(nt=yt.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RG8UI),V===i.UNSIGNED_SHORT&&(nt=i.RG16UI),V===i.UNSIGNED_INT&&(nt=i.RG32UI),V===i.BYTE&&(nt=i.RG8I),V===i.SHORT&&(nt=i.RG16I),V===i.INT&&(nt=i.RG32I)),x===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGB16UI),V===i.UNSIGNED_INT&&(nt=i.RGB32UI),V===i.BYTE&&(nt=i.RGB8I),V===i.SHORT&&(nt=i.RGB16I),V===i.INT&&(nt=i.RGB32I)),x===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(nt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(nt=i.RGBA16UI),V===i.UNSIGNED_INT&&(nt=i.RGBA32UI),V===i.BYTE&&(nt=i.RGBA8I),V===i.SHORT&&(nt=i.RGBA16I),V===i.INT&&(nt=i.RGBA32I)),x===i.RGB&&(V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGB16_EXT),V===i.SHORT&&yt&&(nt=yt.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(nt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(nt=i.R11F_G11F_B10F)),x===i.RGBA){let ht=_t?oa:Te.getTransfer(Q);V===i.FLOAT&&(nt=i.RGBA32F),V===i.HALF_FLOAT&&(nt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(nt=ht===Ne?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&yt&&(nt=yt.RGBA16_EXT),V===i.SHORT&&yt&&(nt=yt.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(nt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(nt=i.RGB5_A1)}return(nt===i.R16F||nt===i.R32F||nt===i.RG16F||nt===i.RG32F||nt===i.RGBA16F||nt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function E(R,x){let V;return R?x===null||x===yi||x===Nr?V=i.DEPTH24_STENCIL8:x===Qn?V=i.DEPTH32F_STENCIL8:x===Dr&&(V=i.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===yi||x===Nr?V=i.DEPTH_COMPONENT24:x===Qn?V=i.DEPTH_COMPONENT32F:x===Dr&&(V=i.DEPTH_COMPONENT16),V}function v(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==cn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function T(R){let x=R.target;x.removeEventListener("dispose",T),A(x),x.isVideoTexture&&u.delete(x),x.isHTMLTexture&&d.delete(x)}function _(R){let x=R.target;x.removeEventListener("dispose",_),k(x)}function A(R){let x=n.get(R);if(x.__webglInit===void 0)return;let V=R.source,W=f.get(V);if(W){let Q=W[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(R),Object.keys(W).length===0&&f.delete(V)}n.remove(R)}function P(R){let x=n.get(R);i.deleteTexture(x.__webglTexture);let V=R.source,W=f.get(V);delete W[x.__cacheKey],a.memory.textures--}function k(R){let x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let Q=0;Q<x.__webglFramebuffer[W].length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[W][Q]);else i.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)i.deleteFramebuffer(x.__webglFramebuffer[W]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let V=R.textures;for(let W=0,Q=V.length;W<Q;W++){let _t=n.get(V[W]);_t.__webglTexture&&(i.deleteTexture(_t.__webglTexture),a.memory.textures--),n.remove(V[W])}n.remove(R)}let N=0;function z(){N=0}function L(){return N}function F(R){N=R}function X(){let R=N;return R>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),N+=1,R}function $(R){let x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function ft(R,x){let V=n.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let W=R.image;if(W===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{xt(V,R,x);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+x)}function j(R,x){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){xt(V,R,x);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+x)}function rt(R,x){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){xt(V,R,x);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+x)}function ut(R,x){let V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Xt(V,R,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+x)}let Wt={[pr]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},kt={[_n]:i.NEAREST,[Hd]:i.NEAREST_MIPMAP_NEAREST,[Ga]:i.NEAREST_MIPMAP_LINEAR,[cn]:i.LINEAR,[El]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},pe={[qd]:i.NEVER,[jd]:i.ALWAYS,[Kd]:i.LESS,[uc]:i.LEQUAL,[Zd]:i.EQUAL,[hc]:i.GEQUAL,[$d]:i.GREATER,[Jd]:i.NOTEQUAL};function me(R,x){if(x.type===Qn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===cn||x.magFilter===El||x.magFilter===Ga||x.magFilter===Di||x.minFilter===cn||x.minFilter===El||x.minFilter===Ga||x.minFilter===Di)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,Wt[x.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,Wt[x.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,Wt[x.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,kt[x.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,kt[x.minFilter]),x.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pe[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===_n||x.minFilter!==Ga&&x.minFilter!==Di||x.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function ae(R,x){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",T));let W=x.source,Q=f.get(W);Q===void 0&&(Q={},f.set(W,Q));let _t=$(x);if(_t!==R.__cacheKey){Q[_t]===void 0&&(Q[_t]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),Q[_t].usedTimes++;let yt=Q[R.__cacheKey];yt!==void 0&&(Q[R.__cacheKey].usedTimes--,yt.usedTimes===0&&P(x)),R.__cacheKey=_t,R.__webglTexture=Q[_t].texture}return V}function tt(R,x,V){return Math.floor(Math.floor(R/V)/x)}function st(R,x,V,W){let _t=R.updateRanges;if(_t.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,V,W,x.data);else{_t.sort((Yt,bt)=>Yt.start-bt.start);let yt=0;for(let Yt=1;Yt<_t.length;Yt++){let bt=_t[yt],wt=_t[Yt],$t=bt.start+bt.count,ee=tt(wt.start,x.width,4),le=tt(bt.start,x.width,4);wt.start<=$t+1&&ee===le&&tt(wt.start+wt.count-1,x.width,4)===ee?bt.count=Math.max(bt.count,wt.start+wt.count-bt.start):(++yt,_t[yt]=wt)}_t.length=yt+1;let nt=e.getParameter(i.UNPACK_ROW_LENGTH),ht=e.getParameter(i.UNPACK_SKIP_PIXELS),St=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let Yt=0,bt=_t.length;Yt<bt;Yt++){let wt=_t[Yt],$t=Math.floor(wt.start/4),ee=Math.ceil(wt.count/4),le=$t%x.width,B=Math.floor($t/x.width),Mt=ee,at=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,le),e.pixelStorei(i.UNPACK_SKIP_ROWS,B),e.texSubImage2D(i.TEXTURE_2D,0,le,B,Mt,at,V,W,x.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,nt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),e.pixelStorei(i.UNPACK_SKIP_ROWS,St)}}function xt(R,x,V){let W=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=i.TEXTURE_3D);let Q=ae(R,x),_t=x.source;e.bindTexture(W,R.__webglTexture,i.TEXTURE0+V);let yt=n.get(_t);if(_t.version!==yt.__version||Q===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let at=Te.getPrimaries(Te.workingColorSpace),At=x.colorSpace===bi?null:Te.getPrimaries(x.colorSpace),Et=x.colorSpace===bi||at===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et)}e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let ht=m(x.image,!1,s.maxTextureSize);ht=ge(x,ht);let St=r.convert(x.format,x.colorSpace),Yt=r.convert(x.type),bt=y(x.internalFormat,St,Yt,x.normalized,x.colorSpace,x.isVideoTexture);me(W,x);let wt,$t=x.mipmaps,ee=x.isVideoTexture!==!0,le=yt.__version===void 0||Q===!0,B=_t.dataReady,Mt=v(x,ht);if(x.isDepthTexture)bt=E(x.format===ys,x.type),le&&(ee?e.texStorage2D(i.TEXTURE_2D,1,bt,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,bt,ht.width,ht.height,0,St,Yt,null));else if(x.isDataTexture)if($t.length>0){ee&&le&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,$t[0].width,$t[0].height);for(let at=0,At=$t.length;at<At;at++)wt=$t[at],ee?B&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,St,Yt,wt.data):e.texImage2D(i.TEXTURE_2D,at,bt,wt.width,wt.height,0,St,Yt,wt.data);x.generateMipmaps=!1}else ee?(le&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,ht.width,ht.height),B&&st(x,ht,St,Yt)):e.texImage2D(i.TEXTURE_2D,0,bt,ht.width,ht.height,0,St,Yt,ht.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ee&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,$t[0].width,$t[0].height,ht.depth);for(let at=0,At=$t.length;at<At;at++)if(wt=$t[at],x.format!==ti)if(St!==null)if(ee){if(B)if(x.layerUpdates.size>0){let Et=Gu(wt.width,wt.height,x.format,x.type);for(let dt of x.layerUpdates){let Zt=wt.data.subarray(dt*Et/wt.data.BYTES_PER_ELEMENT,(dt+1)*Et/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,dt,wt.width,wt.height,1,St,Zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,ht.depth,St,wt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,at,bt,wt.width,wt.height,ht.depth,0,wt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?B&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,at,0,0,0,wt.width,wt.height,ht.depth,St,Yt,wt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,at,bt,wt.width,wt.height,ht.depth,0,St,Yt,wt.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ee&&le&&e.texStorage2D(i.TEXTURE_2D,Mt,bt,$t[0].width,$t[0].height);for(let at=0,At=$t.length;at<At;at++)wt=$t[at],x.format!==ti?St!==null?ee?B&&e.compressedTexSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,St,wt.data):e.compressedTexImage2D(i.TEXTURE_2D,at,bt,wt.width,wt.height,0,wt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?B&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,wt.width,wt.height,St,Yt,wt.data):e.texImage2D(i.TEXTURE_2D,at,bt,wt.width,wt.height,0,St,Yt,wt.data)}else if(x.isDataArrayTexture)if(ee){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,bt,ht.width,ht.height,ht.depth),B)if(x.layerUpdates.size>0){let at=Gu(ht.width,ht.height,x.format,x.type);for(let At of x.layerUpdates){let Et=ht.data.subarray(At*at/ht.data.BYTES_PER_ELEMENT,(At+1)*at/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,At,ht.width,ht.height,1,St,Yt,Et)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,St,Yt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,bt,ht.width,ht.height,ht.depth,0,St,Yt,ht.data);else if(x.isData3DTexture)ee?(le&&e.texStorage3D(i.TEXTURE_3D,Mt,bt,ht.width,ht.height,ht.depth),B&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,St,Yt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,bt,ht.width,ht.height,ht.depth,0,St,Yt,ht.data);else if(x.isFramebufferTexture){if(le)if(ee)e.texStorage2D(i.TEXTURE_2D,Mt,bt,ht.width,ht.height);else{let at=ht.width,At=ht.height;for(let Et=0;Et<Mt;Et++)e.texImage2D(i.TEXTURE_2D,Et,bt,at,At,0,St,Yt,null),at>>=1,At>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let at=i.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),ht.parentNode!==at){at.appendChild(ht),d.add(x),at.onpaint=At=>{let Et=At.changedElements;for(let dt of d)Et.includes(dt.image)&&(dt.needsUpdate=!0)},at.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ht);else{let Et=i.RGBA,dt=i.RGBA,Zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Et,dt,Zt,ht)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if($t.length>0){if(ee&&le){let at=se($t[0]);e.texStorage2D(i.TEXTURE_2D,Mt,bt,at.width,at.height)}for(let at=0,At=$t.length;at<At;at++)wt=$t[at],ee?B&&e.texSubImage2D(i.TEXTURE_2D,at,0,0,St,Yt,wt):e.texImage2D(i.TEXTURE_2D,at,bt,St,Yt,wt);x.generateMipmaps=!1}else if(ee){if(le){let at=se(ht);e.texStorage2D(i.TEXTURE_2D,Mt,bt,at.width,at.height)}B&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Yt,ht)}else e.texImage2D(i.TEXTURE_2D,0,bt,St,Yt,ht);p(x)&&b(W),yt.__version=_t.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Xt(R,x,V){if(x.image.length!==6)return;let W=ae(R,x),Q=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let _t=n.get(Q);if(Q.version!==_t.__version||W===!0){e.activeTexture(i.TEXTURE0+V);let yt=Te.getPrimaries(Te.workingColorSpace),nt=x.colorSpace===bi?null:Te.getPrimaries(x.colorSpace),ht=x.colorSpace===bi||yt===nt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let St=x.isCompressedTexture||x.image[0].isCompressedTexture,Yt=x.image[0]&&x.image[0].isDataTexture,bt=[];for(let dt=0;dt<6;dt++)!St&&!Yt?bt[dt]=m(x.image[dt],!0,s.maxCubemapSize):bt[dt]=Yt?x.image[dt].image:x.image[dt],bt[dt]=ge(x,bt[dt]);let wt=bt[0],$t=r.convert(x.format,x.colorSpace),ee=r.convert(x.type),le=y(x.internalFormat,$t,ee,x.normalized,x.colorSpace),B=x.isVideoTexture!==!0,Mt=_t.__version===void 0||W===!0,at=Q.dataReady,At=v(x,wt);me(i.TEXTURE_CUBE_MAP,x);let Et;if(St){B&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,le,wt.width,wt.height);for(let dt=0;dt<6;dt++){Et=bt[dt].mipmaps;for(let Zt=0;Zt<Et.length;Zt++){let Gt=Et[Zt];x.format!==ti?$t!==null?B?at&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,0,0,Gt.width,Gt.height,$t,Gt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,le,Gt.width,Gt.height,0,Gt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,0,0,Gt.width,Gt.height,$t,ee,Gt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt,le,Gt.width,Gt.height,0,$t,ee,Gt.data)}}}else{if(Et=x.mipmaps,B&&Mt){Et.length>0&&At++;let dt=se(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,le,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Yt){B?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,bt[dt].width,bt[dt].height,$t,ee,bt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,le,bt[dt].width,bt[dt].height,0,$t,ee,bt[dt].data);for(let Zt=0;Zt<Et.length;Zt++){let Le=Et[Zt].image[dt].image;B?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,0,0,Le.width,Le.height,$t,ee,Le.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,le,Le.width,Le.height,0,$t,ee,Le.data)}}else{B?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,$t,ee,bt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,le,$t,ee,bt[dt]);for(let Zt=0;Zt<Et.length;Zt++){let Gt=Et[Zt];B?at&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,0,0,$t,ee,Gt.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Zt+1,le,$t,ee,Gt.image[dt])}}}p(x)&&b(i.TEXTURE_CUBE_MAP),_t.__version=Q.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function It(R,x,V,W,Q,_t){let yt=r.convert(V.format,V.colorSpace),nt=r.convert(V.type),ht=y(V.internalFormat,yt,nt,V.normalized,V.colorSpace),St=n.get(x),Yt=n.get(V);if(Yt.__renderTarget=x,!St.__hasExternalTextures){let bt=Math.max(1,x.width>>_t),wt=Math.max(1,x.height>>_t);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,_t,ht,bt,wt,x.depth,0,yt,nt,null):e.texImage2D(Q,_t,ht,bt,wt,0,yt,nt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,Q,Yt.__webglTexture,0,Ht(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,Q,Yt.__webglTexture,_t),e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(R,x,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),x.depthBuffer){let W=x.depthTexture,Q=W&&W.isDepthTexture?W.type:null,_t=E(x.stencilBuffer,Q),yt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(x),_t,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(x),_t,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,_t,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,R)}else{let W=x.textures;for(let Q=0;Q<W.length;Q++){let _t=W[Q],yt=r.convert(_t.format,_t.colorSpace),nt=r.convert(_t.type),ht=y(_t.internalFormat,yt,nt,_t.normalized,_t.colorSpace);Bt(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ht(x),ht,x.width,x.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht(x),ht,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,ht,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function we(R,x,V){let W=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(x.depthTexture);if(Q.__renderTarget=x,(!Q.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,x.depthTexture.addEventListener("dispose",T)),Q.__webglTexture===void 0){Q.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),me(i.TEXTURE_CUBE_MAP,x.depthTexture);let St=r.convert(x.depthTexture.format),Yt=r.convert(x.depthTexture.type),bt;x.depthTexture.format===Pi?bt=i.DEPTH_COMPONENT24:x.depthTexture.format===ys&&(bt=i.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,bt,x.width,x.height,0,St,Yt,null)}}else ft(x.depthTexture,0);let _t=Q.__webglTexture,yt=Ht(x),nt=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,ht=x.depthTexture.format===ys?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Pi)Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,nt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ht,nt,_t,0);else if(x.depthTexture.format===ys)Bt(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,nt,_t,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ht,nt,_t,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function G(R){let x=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){let W=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",Q)};W.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=W}if(R.depthTexture&&!x.__autoAllocateDepthBuffer)if(V)for(let W=0;W<6;W++)we(x.__webglFramebuffer[W],R,W);else{let W=R.texture.mipmaps;W&&W.length>0?we(x.__webglFramebuffer[0],R,0):we(x.__webglFramebuffer,R,0)}else if(V){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=i.createRenderbuffer(),te(x.__webglDepthbuffer[W],R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=x.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,_t)}}else{let W=R.texture.mipmaps;if(W&&W.length>0?e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),te(x.__webglDepthbuffer,R,!1);else{let Q=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,_t),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,_t)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function et(R,x,V){let W=n.get(R);x!==void 0&&It(W.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&G(R)}function q(R){let x=R.texture,V=n.get(R),W=n.get(x);R.addEventListener("dispose",_);let Q=R.textures,_t=R.isWebGLCubeRenderTarget===!0,yt=Q.length>1;if(yt||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=x.version,a.memory.textures++),_t){V.__webglFramebuffer=[];for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[nt]=[];for(let ht=0;ht<x.mipmaps.length;ht++)V.__webglFramebuffer[nt][ht]=i.createFramebuffer()}else V.__webglFramebuffer[nt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let nt=0;nt<x.mipmaps.length;nt++)V.__webglFramebuffer[nt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(yt)for(let nt=0,ht=Q.length;nt<ht;nt++){let St=n.get(Q[nt]);St.__webglTexture===void 0&&(St.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Bt(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let nt=0;nt<Q.length;nt++){let ht=Q[nt];V.__webglColorRenderbuffer[nt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[nt]);let St=r.convert(ht.format,ht.colorSpace),Yt=r.convert(ht.type),bt=y(ht.internalFormat,St,Yt,ht.normalized,ht.colorSpace,R.isXRRenderTarget===!0),wt=Ht(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,wt,bt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+nt,i.RENDERBUFFER,V.__webglColorRenderbuffer[nt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),te(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_t){e.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),me(i.TEXTURE_CUBE_MAP,x);for(let nt=0;nt<6;nt++)if(x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)It(V.__webglFramebuffer[nt][ht],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,ht);else It(V.__webglFramebuffer[nt],R,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0);p(x)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let nt=0,ht=Q.length;nt<ht;nt++){let St=Q[nt],Yt=n.get(St),bt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(bt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(bt,Yt.__webglTexture),me(bt,St),It(V.__webglFramebuffer,R,St,i.COLOR_ATTACHMENT0+nt,bt,0),p(St)&&b(bt)}e.unbindTexture()}else{let nt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(nt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(nt,W.__webglTexture),me(nt,x),x.mipmaps&&x.mipmaps.length>0)for(let ht=0;ht<x.mipmaps.length;ht++)It(V.__webglFramebuffer[ht],R,x,i.COLOR_ATTACHMENT0,nt,ht);else It(V.__webglFramebuffer,R,x,i.COLOR_ATTACHMENT0,nt,0);p(x)&&b(nt),e.unbindTexture()}R.depthBuffer&&G(R)}function lt(R){let x=R.textures;for(let V=0,W=x.length;V<W;V++){let Q=x[V];if(p(Q)){let _t=S(R),yt=n.get(Q).__webglTexture;e.bindTexture(_t,yt),b(_t),e.unbindTexture()}}}let pt=[],vt=[];function Ut(R){if(R.samples>0){if(Bt(R)===!1){let x=R.textures,V=R.width,W=R.height,Q=i.COLOR_BUFFER_BIT,_t=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(R),nt=x.length>1;if(nt)for(let St=0;St<x.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let ht=R.texture.mipmaps;ht&&ht.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<x.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),nt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Yt=n.get(x[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,V,W,0,0,V,W,Q,i.NEAREST),l===!0&&(pt.length=0,vt.length=0,pt.push(i.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(pt.push(_t),vt.push(_t),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,vt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),nt)for(let St=0;St<x.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);let Yt=n.get(x[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let x=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Ht(R){return Math.min(s.maxSamples,R.samples)}function Bt(R){let x=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function D(R){let x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function ge(R,x){let V=R.colorSpace,W=R.format,Q=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==aa&&V!==bi&&(Te.getTransfer(V)===Ne?(W!==ti||Q!==Nn)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ce("WebGLTextures: Unsupported texture color space:",V)),x}function se(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=z,this.getTextureUnits=L,this.setTextureUnits=F,this.setTexture2D=ft,this.setTexture2DArray=j,this.setTexture3D=rt,this.setTextureCube=ut,this.rebindTextures=et,this.setupRenderTarget=q,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=It,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jy(i,t){function e(n,s=bi){let r,a=Te.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Cl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Iu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cu)return i.BYTE;if(n===Ru)return i.SHORT;if(n===Dr)return i.UNSIGNED_SHORT;if(n===Tl)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Qn)return i.FLOAT;if(n===vi)return i.HALF_FLOAT;if(n===ku)return i.ALPHA;if(n===Lu)return i.RGB;if(n===ti)return i.RGBA;if(n===Pi)return i.DEPTH_COMPONENT;if(n===ys)return i.DEPTH_STENCIL;if(n===Il)return i.RED;if(n===Pl)return i.RED_INTEGER;if(n===vs)return i.RG;if(n===kl)return i.RG_INTEGER;if(n===Ll)return i.RGBA_INTEGER;if(n===Ha||n===Wa||n===Xa||n===Ya)if(a===Ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ha)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ha)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Nl||n===Ul||n===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ol||n===Bl||n===zl||n===Vl||n===Gl||n===qa||n===Hl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ol||n===Bl)return a===Ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===zl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Vl)return r.COMPRESSED_R11_EAC;if(n===Gl)return r.COMPRESSED_SIGNED_R11_EAC;if(n===qa)return r.COMPRESSED_RG11_EAC;if(n===Hl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wl||n===Xl||n===Yl||n===ql||n===Kl||n===Zl||n===$l||n===Jl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ql)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Zl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Jl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===jl)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ql)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===tc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ec)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nc)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ic)return a===Ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===sc||n===rc||n===ac)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===sc)return a===Ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===rc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oc||n===lc||n===Ka||n===cc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ka)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Nr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tv=`
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

}`,oh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new _a(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Xn({vertexShader:Qy,fragmentShader:tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Nt(new gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lh=class extends di{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null,M=typeof XRWebGLBinding<"u",m=new oh,p={},b=e.getContextAttributes(),S=null,y=null,E=[],v=[],T=new it,_=null,A=null,P=new xn;P.viewport=new qe;let k=new xn;k.viewport=new qe;let N=[P,k],z=new vl,L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let st=E[tt];return st===void 0&&(st=new vr,E[tt]=st),st.getTargetRaySpace()},this.getControllerGrip=function(tt){let st=E[tt];return st===void 0&&(st=new vr,E[tt]=st),st.getGripSpace()},this.getHand=function(tt){let st=E[tt];return st===void 0&&(st=new vr,E[tt]=st),st.getHandSpace()};function X(tt){let st=v.indexOf(tt.inputSource);if(st===-1)return;let xt=E[st];xt!==void 0&&(xt.update(tt.inputSource,tt.frame,c||a),xt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function $(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ft);for(let tt=0;tt<E.length;tt++){let st=v[tt];st!==null&&(v[tt]=null,E[tt].disconnect(st))}L=null,F=null,m.reset();for(let tt in p)delete p[tt];if(t.setRenderTarget(S),f=null,h=null,d=null,s=null,y=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(T.width,T.height,!1),A!==null){let tt=A.camera;tt.fov=A.fov,tt.zoom=A.zoom,tt.updateProjectionMatrix(),A=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&M&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(S=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ft),b.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(T),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Xt=null,It=null;b.depth&&(It=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,xt=b.stencil?ys:Pi,Xt=b.stencil?Nr:yi);let te={colorFormat:e.RGBA8,depthFormat:It,scaleFactor:r};d=this.getBinding(),h=d.createProjectionLayer(te),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Dn(h.textureWidth,h.textureHeight,{format:ti,type:Nn,depthTexture:new ls(h.textureWidth,h.textureHeight,Xt,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let xt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,xt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Dn(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ft(tt){for(let st=0;st<tt.removed.length;st++){let xt=tt.removed[st],Xt=v.indexOf(xt);Xt>=0&&(v[Xt]=null,E[Xt].disconnect(xt))}for(let st=0;st<tt.added.length;st++){let xt=tt.added[st],Xt=v.indexOf(xt);if(Xt===-1){for(let te=0;te<E.length;te++)if(te>=v.length){v.push(xt),Xt=te;break}else if(v[te]===null){v[te]=xt,Xt=te;break}if(Xt===-1)break}let It=E[Xt];It&&It.connect(xt)}}let j=new I,rt=new I;function ut(tt,st,xt){j.setFromMatrixPosition(st.matrixWorld),rt.setFromMatrixPosition(xt.matrixWorld);let Xt=j.distanceTo(rt),It=st.projectionMatrix.elements,te=xt.projectionMatrix.elements,we=It[14]/(It[10]-1),G=It[14]/(It[10]+1),et=(It[9]+1)/It[5],q=(It[9]-1)/It[5],lt=(It[8]-1)/It[0],pt=(te[8]+1)/te[0],vt=we*lt,Ut=we*pt,Ht=Xt/(-lt+pt),Bt=Ht*-lt;if(st.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Bt),tt.translateZ(Ht),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),It[10]===-1)tt.projectionMatrix.copy(st.projectionMatrix),tt.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let D=we+Ht,ge=G+Ht,se=vt-Bt,R=Ut+(Xt-Bt),x=et*G/ge*D,V=q*G/ge*D;tt.projectionMatrix.makePerspective(se,R,x,V,D,ge),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Wt(tt,st){st===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(st.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let st=tt.near,xt=tt.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(xt=m.depthFar)),z.near=k.near=P.near=st,z.far=k.far=P.far=xt,(L!==z.near||F!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),L=z.near,F=z.far),z.layers.mask=tt.layers.mask|6,P.layers.mask=z.layers.mask&-5,k.layers.mask=z.layers.mask&-3;let Xt=tt.parent,It=z.cameras;Wt(z,Xt);for(let te=0;te<It.length;te++)Wt(It[te],Xt);It.length===2?ut(z,P,k):z.projectionMatrix.copy(P.projectionMatrix),A===null&&tt.isPerspectiveCamera&&(A={camera:tt,fov:tt.fov,zoom:tt.zoom}),kt(tt,z,Xt)};function kt(tt,st,xt){xt===null?tt.matrix.copy(st.matrixWorld):(tt.matrix.copy(xt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(st.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(st.projectionMatrix),tt.projectionMatrixInverse.copy(st.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=_r*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(tt){l=tt,h!==null&&(h.fixedFoveation=tt),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=tt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(tt){return p[tt]};let pe=null;function me(tt,st){if(u=st.getViewerPose(c||a),g=st,u!==null){let xt=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Xt=!1;xt.length!==z.cameras.length&&(z.cameras.length=0,Xt=!0);for(let G=0;G<xt.length;G++){let et=xt[G],q=null;if(f!==null)q=f.getViewport(et);else{let pt=d.getViewSubImage(h,et);q=pt.viewport,G===0&&(t.setRenderTargetTextures(y,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(y))}let lt=N[G];lt===void 0&&(lt=new xn,lt.layers.enable(G),lt.viewport=new qe,N[G]=lt),lt.matrix.fromArray(et.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(et.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(q.x,q.y,q.width,q.height),G===0&&(z.matrix.copy(lt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Xt===!0&&z.cameras.push(lt)}let It=s.enabledFeatures;if(It&&It.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){d=n.getBinding();let G=d.getDepthInformation(xt[0]);G&&G.isValid&&G.texture&&m.init(G,s.renderState)}if(It&&It.includes("camera-access")&&M){t.state.unbindTexture(),d=n.getBinding();for(let G=0;G<xt.length;G++){let et=xt[G].camera;if(et){let q=p[et];q||(q=new _a,p[et]=q);let lt=d.getCameraImage(et);q.sourceTexture=lt}}}}for(let xt=0;xt<E.length;xt++){let Xt=v[xt],It=E[xt];Xt!==null&&It!==void 0&&It.update(Xt,st,c||a)}pe&&pe(tt,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let ae=new Df;ae.setAnimationLoop(me),this.setAnimationLoop=function(tt){pe=tt},this.dispose=function(){}}},ev=new Ie,zf=new fe;zf.set(-1,0,0,0,1,0,0,0,1);function nv(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===yn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===yn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),S=b.envMap,y=b.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(ev.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(zf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===yn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function iv(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,E){let v=E.program;n.uniformBlockBinding(y,v)}function c(y,E){let v=s[y.id];v===void 0&&(m(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",b));let T=E.program;n.updateUBOMapping(y,T);let _=t.render.frame;r[y.id]!==_&&(h(y),r[y.id]=_)}function u(y){let E=d();y.__bindingPointIndex=E;let v=i.createBuffer(),T=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,v),v}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let E=s[y.id],v=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let _=0,A=v.length;_<A;_++){let P=v[_];if(Array.isArray(P))for(let k=0,N=P.length;k<N;k++)f(P[k],_,k,T);else f(P,_,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,E,v,T){if(M(y,E,v,T)===!0){let _=y.__offset,A=y.value;if(Array.isArray(A)){let P=0;for(let k=0;k<A.length;k++){let N=A[k],z=p(N);g(N,y.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(A,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function g(y,E,v){typeof y=="number"||typeof y=="boolean"?E[0]=y:y.isMatrix3?(E[0]=y.elements[0],E[1]=y.elements[1],E[2]=y.elements[2],E[3]=0,E[4]=y.elements[3],E[5]=y.elements[4],E[6]=y.elements[5],E[7]=0,E[8]=y.elements[6],E[9]=y.elements[7],E[10]=y.elements[8],E[11]=0):ArrayBuffer.isView(y)?E.set(new y.constructor(y.buffer,y.byteOffset,E.length)):y.toArray(E,v)}function M(y,E,v,T){let _=y.value,A=E+"_"+v;if(T[A]===void 0)return typeof _=="number"||typeof _=="boolean"?T[A]=_:ArrayBuffer.isView(_)?T[A]=_.slice():T[A]=_.clone(),!0;{let P=T[A];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return T[A]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(y){let E=y.uniforms,v=0,T=16;for(let A=0,P=E.length;A<P;A++){let k=Array.isArray(E[A])?E[A]:[E[A]];for(let N=0,z=k.length;N<z;N++){let L=k[N],F=Array.isArray(L.value)?L.value:[L.value];for(let X=0,$=F.length;X<$;X++){let ft=F[X],j=p(ft),rt=v%T,ut=rt%j.boundary,Wt=rt+ut;v+=ut,Wt!==0&&T-Wt<j.storage&&(v+=T-Wt),L.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=j.storage}}}let _=v%T;return _>0&&(v+=T-_),y.__size=v,y.__cache={},this}function p(y){let E={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(E.boundary=4,E.storage=4):y.isVector2?(E.boundary=8,E.storage=8):y.isVector3||y.isColor?(E.boundary=16,E.storage=12):y.isVector4?(E.boundary=16,E.storage=16):y.isMatrix3?(E.boundary=48,E.storage=48):y.isMatrix4?(E.boundary=64,E.storage=64):y.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(E.boundary=16,E.storage=y.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",y),E}function b(y){let E=y.target;E.removeEventListener("dispose",b);let v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function S(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:S}}var sv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ni=null;function rv(){return Ni===null&&(Ni=new pa(sv,16,16,vs,vi),Ni.name="DFG_LUT",Ni.minFilter=cn,Ni.magFilter=cn,Ni.wrapS=Ri,Ni.wrapT=Ri,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}var mc=class{constructor(t={}){let{canvas:e=Qd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Nn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let M=f,m=new Set([Ll,kl,Pl]),p=new Set([Nn,yi,Dr,Nr,Cl,Rl]),b=new Uint32Array(4),S=new Int32Array(4),y=new I,E=null,v=null,T=[],_=[],A=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,k=!1,N=null,z=null,L=null,F=null;this._outputColorSpace=ln;let X=0,$=0,ft=null,j=-1,rt=null,ut=new qe,Wt=new qe,kt=null,pe=new Qt(0),me=0,ae=e.width,tt=e.height,st=1,xt=null,Xt=null,It=new qe(0,0,ae,tt),te=new qe(0,0,ae,tt),we=!1,G=new wr,et=!1,q=!1,lt=new Ie,pt=new I,vt=new qe,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ht=!1;function Bt(){return ft===null?st:1}let D=n;function ge(w,O){return e.getContext(w,O)}let se,R,x,V,W,Q,_t,yt,nt,ht,St,Yt,bt,wt,$t,ee,le,B,Mt,at,At,Et,dt;try{let w={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Le,!1),e.addEventListener("webglcontextrestored",K,!1),e.addEventListener("webglcontextcreationerror",gt,!1),D===null){let O="webgl2";if(D=ge(O,w),D===null)throw ge(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(w){throw e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),ce("WebGLRenderer: "+w.message),w}function Zt(){se=new dx(D),se.init(),At=new jy(D,se),R=new nx(D,se,t,At),x=new $y(D,se),R.reversedDepthBuffer&&h&&x.buffers.depth.setReversed(!0),z=D.createFramebuffer(),L=D.createFramebuffer(),F=D.createFramebuffer(),V=new mx(D),W=new Uy,Q=new Jy(D,se,x,W,R,At,V),_t=new hx(P),yt=new _g(D),Et=new tx(D,yt),nt=new fx(D,yt,V,Et),ht=new _x(D,nt,yt,Et,V),B=new gx(D,R,Q),$t=new ix(W),St=new Ny(P,_t,se,R,Et,$t),Yt=new nv(P,W),bt=new Oy,wt=new Wy(se),le=new Q_(P,_t,x,ht,g,l),ee=new Zy(P,ht,R),dt=new iv(D,V,R,x),Mt=new ex(D,se,V),at=new px(D,se,V),V.programs=St.programs,P.capabilities=R,P.extensions=se,P.properties=W,P.renderLists=bt,P.shadowMap=ee,P.state=x,P.info=V}M!==Nn&&(A=new yx(M,e.width,e.height,o,s,r));let Gt=new lh(P,D);this.xr=Gt,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(w){w!==void 0&&(st=w,this.setSize(ae,tt,!1))},this.getSize=function(w){return w.set(ae,tt)},this.setSize=function(w,O,J=!0){if(Gt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=w,tt=O,e.width=Math.floor(w*st),e.height=Math.floor(O*st),J===!0&&(e.style.width=w+"px",e.style.height=O+"px"),A!==null&&A.setSize(e.width,e.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(ae*st,tt*st).floor()},this.setDrawingBufferSize=function(w,O,J){ae=w,tt=O,st=J,e.width=Math.floor(w*J),e.height=Math.floor(O*J),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(M===Nn){ce("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(ut)},this.getViewport=function(w){return w.copy(It)},this.setViewport=function(w,O,J,Z){w.isVector4?It.set(w.x,w.y,w.z,w.w):It.set(w,O,J,Z),x.viewport(ut.copy(It).multiplyScalar(st).round())},this.getScissor=function(w){return w.copy(te)},this.setScissor=function(w,O,J,Z){w.isVector4?te.set(w.x,w.y,w.z,w.w):te.set(w,O,J,Z),x.scissor(Wt.copy(te).multiplyScalar(st).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(w){x.setScissorTest(we=w)},this.setOpaqueSort=function(w){xt=w},this.setTransparentSort=function(w){Xt=w},this.getClearColor=function(w){return w.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,J=!0){let Z=0;if(w){let H=!1;if(ft!==null){let Rt=ft.texture.format;H=m.has(Rt)}if(H){let Rt=ft.texture.type,Vt=p.has(Rt),Pt=le.getClearColor(),qt=le.getClearAlpha(),ie=Pt.r,ye=Pt.g,Ee=Pt.b;Vt?(b[0]=ie,b[1]=ye,b[2]=Ee,b[3]=qt,D.clearBufferuiv(D.COLOR,0,b)):(S[0]=ie,S[1]=ye,S[2]=Ee,S[3]=qt,D.clearBufferiv(D.COLOR,0,S))}else Z|=D.COLOR_BUFFER_BIT}O&&(Z|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(Z|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&D.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),N=w},this.dispose=function(){e.removeEventListener("webglcontextlost",Le,!1),e.removeEventListener("webglcontextrestored",K,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),le.dispose(),bt.dispose(),wt.dispose(),W.dispose(),_t.dispose(),ht.dispose(),Et.dispose(),dt.dispose(),St.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",he),Gt.removeEventListener("sessionend",be),Oe.stop()};function Le(w){w.preventDefault(),ca("WebGLRenderer: Context Lost."),k=!0}function K(){ca("WebGLRenderer: Context Restored."),k=!1;let w=V.autoReset,O=ee.enabled,J=ee.autoUpdate,Z=ee.needsUpdate,H=ee.type;Zt(),V.autoReset=w,ee.enabled=O,ee.autoUpdate=J,ee.needsUpdate=Z,ee.type=H}function gt(w){ce("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Tt(w){let O=w.target;O.removeEventListener("dispose",Tt),ne(O)}function ne(w){Jt(w),W.remove(w)}function Jt(w){let O=W.get(w).programs;O!==void 0&&(O.forEach(function(J){St.releaseProgram(J)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,J,Z,H,Rt){O===null&&(O=Ut);let Vt=H.isMesh&&H.matrixWorld.determinantAffine()<0,Pt=tn(w,O,J,Z,H);x.setMaterial(Z,Vt);let qt=J.index,ie=1;if(Z.wireframe===!0){if(qt=nt.getWireframeAttribute(J),qt===void 0)return;ie=2}let ye=J.drawRange,Ee=J.attributes.position,jt=ye.start*ie,De=(ye.start+ye.count)*ie;Rt!==null&&(jt=Math.max(jt,Rt.start*ie),De=Math.min(De,(Rt.start+Rt.count)*ie)),qt!==null?(jt=Math.max(jt,0),De=Math.min(De,qt.count)):Ee!=null&&(jt=Math.max(jt,0),De=Math.min(De,Ee.count));let sn=De-jt;if(sn<0||sn===1/0)return;Et.setup(H,Z,Pt,J,qt);let We,ze=Mt;if(qt!==null&&(We=yt.get(qt),ze=at,ze.setIndex(We)),H.isMesh)Z.wireframe===!0?(x.setLineWidth(Z.wireframeLinewidth*Bt()),ze.setMode(D.LINES)):ze.setMode(D.TRIANGLES);else if(H.isLine){let Mn=Z.linewidth;Mn===void 0&&(Mn=1),x.setLineWidth(Mn*Bt()),H.isLineSegments?ze.setMode(D.LINES):H.isLineLoop?ze.setMode(D.LINE_LOOP):ze.setMode(D.LINE_STRIP)}else H.isPoints?ze.setMode(D.POINTS):H.isSprite&&ze.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(se.get("WEBGL_multi_draw"))ze.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Mn=H._multiDrawStarts,Kt=H._multiDrawCounts,Cn=H._multiDrawCount,ke=qt?yt.get(qt).bytesPerElement:1,$n=W.get(Z).currentProgram.getUniforms();for(let Ei=0;Ei<Cn;Ei++)$n.setValue(D,"_gl_DrawID",Ei),ze.render(Mn[Ei]/ke,Kt[Ei])}else if(H.isInstancedMesh)ze.renderInstances(jt,sn,H.count);else if(J.isInstancedBufferGeometry){let Mn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Kt=Math.min(J.instanceCount,Mn);ze.renderInstances(jt,sn,Kt)}else ze.render(jt,sn)};function de(w,O,J,Z){N!==null&&w.isNodeMaterial&&N.setObject(Z,w),et===!0&&$t.setState(w,J,!1),w.transparent===!0&&w.side===_i&&w.forceSinglePass===!1?(w.side=yn,w.needsUpdate=!0,ot(w,O,Z),w.side=_s,w.needsUpdate=!0,ot(w,O,Z),w.side=_i):ot(w,O,Z)}this.compile=function(w,O,J=null){J===null&&(J=w),N!==null&&N.renderStart(w,O,J),v=wt.get(J),v.init(O),_.push(v),J.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),w!==J&&w.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(v.pushLight(H),H.castShadow&&v.pushShadow(H))}),v.setupLights(),N!==null&&N.updateLights(v.state.lightsArray),q=this.localClippingEnabled,et=$t.init(this.clippingPlanes,q),et===!0&&$t.setGlobalState(this.clippingPlanes,O),N!==null&&ee.render(v.state.shadowsArray,J,O);let Z=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let Rt=H.material;if(Rt)if(Array.isArray(Rt))for(let Vt=0;Vt<Rt.length;Vt++){let Pt=Rt[Vt];de(Pt,J,O,H),Z.add(Pt)}else de(Rt,J,O,H),Z.add(Rt)}),v=_.pop(),N!==null&&N.renderEnd(),Z},this.compileAsync=function(w,O,J=null){let Z=this.compile(w,O,J);return new Promise(H=>{function Rt(){if(Z.forEach(function(Vt){let qt=W.get(Vt).currentProgram;(qt===void 0||qt.isReady())&&Z.delete(Vt)}),Z.size===0){H(w);return}setTimeout(Rt,10)}se.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Ft=null;function Ae(w){Ft&&Ft(w)}function he(){Oe.stop()}function be(){Oe.start()}let Oe=new Df;Oe.setAnimationLoop(Ae),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(w){Ft=w,Gt.setAnimationLoop(w),w===null?Oe.stop():Oe.start()},Gt.addEventListener("sessionstart",he),Gt.addEventListener("sessionend",be),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;N!==null&&N.renderStart(w,O);let J=Gt.enabled===!0&&Gt.isPresenting===!0,Z=A!==null&&(ft===null||J)&&A.begin(P,ft);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(O),O=Gt.getCamera()),w.isScene===!0&&w.onBeforeRender(P,w,O,ft),v=wt.get(w,_.length),v.init(O),v.state.textureUnits=Q.getTextureUnits(),_.push(v),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(lt,hi,O.reversedDepth),q=this.localClippingEnabled,et=$t.init(this.clippingPlanes,q),E=bt.get(w,T.length),E.init(),T.push(E),Gt.enabled===!0&&Gt.isPresenting===!0){let Vt=P.xr.getDepthSensingMesh();Vt!==null&&C(Vt,O,-1/0,P.sortObjects)}C(w,O,0,P.sortObjects),E.finish(),N!==null&&N.updateLights(v.state.lightsArray),P.sortObjects===!0&&E.sort(xt,Xt),Ht=Gt.enabled===!1||Gt.isPresenting===!1||Gt.hasDepthSensing()===!1,Ht&&le.addToRenderList(E,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),et===!0&&$t.beginShadows();let H=v.state.shadowsArray;if(ee.render(H,w,O),et===!0&&$t.endShadows(),(Z&&A.hasRenderPass())===!1){let Vt=E.opaque,Pt=E.transmissive;if(v.setupLights(),O.isArrayCamera){let qt=O.cameras;if(Pt.length>0)for(let ie=0,ye=qt.length;ie<ye;ie++){let Ee=qt[ie];Y(Vt,Pt,w,Ee)}Ht&&le.render(w);for(let ie=0,ye=qt.length;ie<ye;ie++){let Ee=qt[ie];U(E,w,Ee,Ee.viewport)}}else Pt.length>0&&Y(Vt,Pt,w,O),Ht&&le.render(w),U(E,w,O)}ft!==null&&$===0&&(Q.updateMultisampleRenderTarget(ft),Q.updateRenderTargetMipmap(ft)),Z&&A.end(P),w.isScene===!0&&w.onAfterRender(P,w,O),Et.resetDefaultState(),j=-1,rt=null,_.pop(),_.length>0?(v=_[_.length-1],Q.setTextureUnits(v.state.textureUnits),et===!0&&$t.setGlobalState(P.clippingPlanes,v.state.camera)):v=null,T.pop(),T.length>0?E=T[T.length-1]:E=null,N!==null&&N.renderEnd()};function C(w,O,J,Z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)J=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLightProbeGrid)v.pushLightProbeGrid(w);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(G)){Z&&vt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(lt);let Vt=ht.update(w),Pt=w.material;Pt.visible&&E.push(w,Vt,Pt,J,vt.z,null,O)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(G))){let Vt=ht.update(w),Pt=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),vt.copy(w.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),vt.copy(Vt.boundingSphere.center)),vt.applyMatrix4(w.matrixWorld).applyMatrix4(lt)),Array.isArray(Pt)){let qt=Vt.groups;for(let ie=0,ye=qt.length;ie<ye;ie++){let Ee=qt[ie],jt=Pt[Ee.materialIndex];jt&&jt.visible&&E.push(w,Vt,jt,J,vt.z,Ee,O)}}else Pt.visible&&E.push(w,Vt,Pt,J,vt.z,null,O)}}let Rt=w.children;for(let Vt=0,Pt=Rt.length;Vt<Pt;Vt++)C(Rt[Vt],O,J,Z)}function U(w,O,J,Z){let{opaque:H,transmissive:Rt,transparent:Vt}=w;v.setupLightsView(J),et===!0&&$t.setGlobalState(P.clippingPlanes,J),Z&&x.viewport(ut.copy(Z)),H.length>0&&ct(H,O,J),Rt.length>0&&ct(Rt,O,J),Vt.length>0&&ct(Vt,O,J),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Y(w,O,J,Z){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[Z.id]===void 0){let jt=se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[Z.id]=new Dn(1,1,{generateMipmaps:!0,type:jt?vi:Nn,minFilter:Di,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let Rt=v.state.transmissionRenderTarget[Z.id],Vt=Z.viewport||ut;Rt.setSize(Vt.z*P.transmissionResolutionScale,Vt.w*P.transmissionResolutionScale);let Pt=P.getRenderTarget(),qt=P.getActiveCubeFace(),ie=P.getActiveMipmapLevel();P.setRenderTarget(Rt),P.getClearColor(pe),me=P.getClearAlpha(),me<1&&P.setClearColor(16777215,.5),P.clear(),Ht&&le.render(J);let ye=P.toneMapping;P.toneMapping=xi;let Ee=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),v.setupLightsView(Z),et===!0&&$t.setGlobalState(P.clippingPlanes,Z),ct(w,J,Z),Q.updateMultisampleRenderTarget(Rt),Q.updateRenderTargetMipmap(Rt),se.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let De=0,sn=O.length;De<sn;De++){let We=O[De],{object:ze,geometry:Mn,material:Kt,group:Cn}=We;if(Kt.side===_i&&ze.layers.test(Z.layers)){let ke=Kt.side;Kt.side=yn,Kt.needsUpdate=!0,mt(ze,J,Z,Mn,Kt,Cn),Kt.side=ke,Kt.needsUpdate=!0,jt=!0}}jt===!0&&(Q.updateMultisampleRenderTarget(Rt),Q.updateRenderTargetMipmap(Rt))}P.setRenderTarget(Pt,qt,ie),P.setClearColor(pe,me),Ee!==void 0&&(Z.viewport=Ee),P.toneMapping=ye}function ct(w,O,J){let Z=O.isScene===!0?O.overrideMaterial:null;for(let H=0,Rt=w.length;H<Rt;H++){let Vt=w[H],{object:Pt,geometry:qt,group:ie}=Vt,ye=Vt.material;ye.allowOverride===!0&&Z!==null&&(ye=Z),Pt.layers.test(J.layers)&&mt(Pt,O,J,qt,ye,ie)}}function mt(w,O,J,Z,H,Rt){N!==null&&H.isNodeMaterial&&N.setObject(w,H),w.onBeforeRender(P,O,J,Z,H,Rt),w.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(P,O,J,Z,w,Rt),H.transparent===!0&&H.side===_i&&H.forceSinglePass===!1?(H.side=yn,H.needsUpdate=!0,P.renderBufferDirect(J,O,Z,H,w,Rt),H.side=_s,H.needsUpdate=!0,P.renderBufferDirect(J,O,Z,H,w,Rt),H.side=_i):P.renderBufferDirect(J,O,Z,H,w,Rt),w.onAfterRender(P,O,J,Z,H,Rt)}function ot(w,O,J){O.isScene!==!0&&(O=Ut);let Z=W.get(w),H=v.state.lights,Rt=v.state.shadowsArray,Vt=H.state.version,Pt=St.getParameters(w,H.state,Rt,O,J,v.state.lightProbeGridArray),qt=St.getProgramCacheKey(Pt),ie=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;let ye=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=_t.get(w.envMap||Z.environment,ye),Z.envMapRotation=Z.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,ie===void 0&&(w.addEventListener("dispose",Tt),ie=new Map,Z.programs=ie);let Ee=ie.get(qt);if(Ee!==void 0){if(Z.currentProgram===Ee&&Z.lightsStateVersion===Vt)return Me(w,Pt),Ee}else Pt.uniforms=St.getUniforms(w),N!==null&&w.isNodeMaterial&&N.build(w,J,Pt),w.onBeforeCompile(Pt,P),Ee=St.acquireProgram(Pt,qt),ie.set(qt,Ee),Z.uniforms=Pt.uniforms;let jt=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(jt.clippingPlanes=$t.uniform),Me(w,Pt),Z.needsLights=Ge(w),Z.lightsStateVersion=Vt,Z.needsLights&&(jt.ambientLightColor.value=H.state.ambient,jt.lightProbe.value=H.state.probe,jt.sunLights.value=H.state.sun,jt.sunLightShadows.value=H.state.sunShadow,jt.directionalLights.value=H.state.directional,jt.directionalLightShadows.value=H.state.directionalShadow,jt.spotLights.value=H.state.spot,jt.spotLightShadows.value=H.state.spotShadow,jt.rectAreaLights.value=H.state.rectArea,jt.ltc_1.value=H.state.rectAreaLTC1,jt.ltc_2.value=H.state.rectAreaLTC2,jt.pointLights.value=H.state.point,jt.pointLightShadows.value=H.state.pointShadow,jt.hemisphereLights.value=H.state.hemi,jt.sunShadowMatrix.value=H.state.sunShadowMatrix,jt.sunShadowCascade.value=H.state.sunShadowCascade,jt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,jt.spotLightMatrix.value=H.state.spotLightMatrix,jt.spotLightMap.value=H.state.spotLightMap,jt.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.lightProbeGrid=v.state.lightProbeGridArray.length>0,Z.currentProgram=Ee,Z.uniformsList=null,Ee}function Ot(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Or.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Me(w,O){let J=W.get(w);J.outputColorSpace=O.outputColorSpace,J.batching=O.batching,J.batchingColor=O.batchingColor,J.instancing=O.instancing,J.instancingColor=O.instancingColor,J.instancingMorph=O.instancingMorph,J.skinning=O.skinning,J.morphTargets=O.morphTargets,J.morphNormals=O.morphNormals,J.morphColors=O.morphColors,J.morphTargetsCount=O.morphTargetsCount,J.numClippingPlanes=O.numClippingPlanes,J.numIntersection=O.numClipIntersection,J.vertexAlphas=O.vertexAlphas,J.vertexTangents=O.vertexTangents,J.toneMapping=O.toneMapping}function Se(w,O){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(O.matrixWorld);for(let J=0,Z=w.length;J<Z;J++){let H=w[J];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function tn(w,O,J,Z,H){O.isScene!==!0&&(O=Ut),Q.resetTextureUnits();let Rt=O.fog,Vt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,Pt=ft===null?P.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Te.workingColorSpace,qt=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,ie=_t.get(Z.envMap||Vt,qt),ye=Z.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ee=!!J.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),jt=!!J.morphAttributes.position,De=!!J.morphAttributes.normal,sn=!!J.morphAttributes.color,We=xi;Z.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(We=P.toneMapping);let ze=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Mn=ze!==void 0?ze.length:0,Kt=W.get(Z),Cn=v.state.lights;if(et===!0&&(q===!0||w!==rt)){let He=w===rt&&Z.id===j;$t.setState(Z,w,He)}let ke=!1;Z.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==Cn.state.version||Kt.outputColorSpace!==Pt||H.isBatchedMesh&&Kt.batching===!1||!H.isBatchedMesh&&Kt.batching===!0||H.isBatchedMesh&&Kt.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&Kt.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&Kt.instancing===!1||!H.isInstancedMesh&&Kt.instancing===!0||H.isSkinnedMesh&&Kt.skinning===!1||!H.isSkinnedMesh&&Kt.skinning===!0||H.isInstancedMesh&&Kt.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Kt.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Kt.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Kt.instancingMorph===!1&&H.morphTexture!==null||Kt.envMap!==ie||Z.fog===!0&&Kt.fog!==Rt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==$t.numPlanes||Kt.numIntersection!==$t.numIntersection)||Kt.vertexAlphas!==ye||Kt.vertexTangents!==Ee||Kt.morphTargets!==jt||Kt.morphNormals!==De||Kt.morphColors!==sn||Kt.toneMapping!==We||Kt.morphTargetsCount!==Mn||!!Kt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(ke=!0):(ke=!0,Kt.__version=Z.version);let $n=Kt.currentProgram;ke===!0&&($n=ot(Z,O,H),N&&Z.isNodeMaterial&&N.onUpdateProgram(Z,$n,Kt));let Ei=!1,ji=!1,Xs=!1,Be=$n.getUniforms(),en=Kt.uniforms;if(x.useProgram($n.program)&&(Ei=!0,ji=!0,Xs=!0),Z.id!==j&&(j=Z.id,ji=!0),Kt.needsLights){let He=Se(v.state.lightProbeGridArray,H);Kt.lightProbeGrid!==He&&(Kt.lightProbeGrid=He,ji=!0)}if(Ei||rt!==w){x.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Be.setValue(D,"projectionMatrix",w.projectionMatrix),Be.setValue(D,"viewMatrix",w.matrixWorldInverse);let ts=Be.map.cameraPosition;ts!==void 0&&ts.setValue(D,pt.setFromMatrixPosition(w.matrixWorld)),R.logarithmicDepthBuffer&&Be.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&Be.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),rt!==w&&(rt=w,ji=!0,Xs=!0)}if(Kt.needsLights&&(Cn.state.sunShadowMap.length>0&&Be.setValue(D,"sunShadowMap",Cn.state.sunShadowMap,Q),Cn.state.directionalShadowMap.length>0&&Be.setValue(D,"directionalShadowMap",Cn.state.directionalShadowMap,Q),Cn.state.spotShadowMap.length>0&&Be.setValue(D,"spotShadowMap",Cn.state.spotShadowMap,Q),Cn.state.pointShadowMap.length>0&&Be.setValue(D,"pointShadowMap",Cn.state.pointShadowMap,Q)),H.isSkinnedMesh){Be.setOptional(D,H,"bindMatrix"),Be.setOptional(D,H,"bindMatrixInverse");let He=H.skeleton;He&&(He.boneTexture===null&&He.computeBoneTexture(),Be.setValue(D,"boneTexture",He.boneTexture,Q))}H.isBatchedMesh&&(Be.setOptional(D,H,"batchingTexture"),Be.setValue(D,"batchingTexture",H._matricesTexture,Q),Be.setOptional(D,H,"batchingIdTexture"),Be.setValue(D,"batchingIdTexture",H._indirectTexture,Q),Be.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&Be.setValue(D,"batchingColorTexture",H._colorsTexture,Q));let Qi=J.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&B.update(H,J,$n),(ji||Kt.receiveShadow!==H.receiveShadow)&&(Kt.receiveShadow=H.receiveShadow,Be.setValue(D,"receiveShadow",H.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(en.envMapIntensity.value=O.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=rv()),ji){if(Be.setValue(D,"toneMappingExposure",P.toneMappingExposure),Kt.needsLights&&mn(en,Xs),Rt&&Z.fog===!0&&Yt.refreshFogUniforms(en,Rt),Yt.refreshMaterialUniforms(en,Z,st,tt,v.state.transmissionRenderTarget[w.id]),Kt.needsLights&&Kt.lightProbeGrid){let He=Kt.lightProbeGrid;en.probesSH.value=He.texture,en.probesMin.value.copy(He.boundingBox.min),en.probesMax.value.copy(He.boundingBox.max),en.probesResolution.value.copy(He.resolution)}Or.upload(D,Ot(Kt),en,Q)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Or.upload(D,Ot(Kt),en,Q),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&Be.setValue(D,"center",H.center),Be.setValue(D,"modelViewMatrix",H.modelViewMatrix),Be.setValue(D,"normalMatrix",H.normalMatrix),Be.setValue(D,"modelMatrix",H.matrixWorld),Z.uniformsGroups!==void 0){let He=Z.uniformsGroups;for(let ts=0,Ys=He.length;ts<Ys;ts++){let Uh=He[ts];dt.update(Uh,$n),dt.bind(Uh,$n)}}return $n}function mn(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function Ge(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ft},this.setRenderTargetTextures=function(w,O,J){let Z=W.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=O,W.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:J,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let J=W.get(w);J.__webglFramebuffer=O,J.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,J=0){ft=w,X=O,$=J;let Z=null,H=!1,Rt=!1;if(w){let Pt=W.get(w);if(Pt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(D.FRAMEBUFFER,Pt.__webglFramebuffer),ut.copy(w.viewport),Wt.copy(w.scissor),kt=w.scissorTest,x.viewport(ut),x.scissor(Wt),x.setScissorTest(kt),j=-1;return}else if(Pt.__webglFramebuffer===void 0)Q.setupRenderTarget(w);else if(Pt.__hasExternalTextures)Q.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ye=w.depthTexture;if(Pt.__boundDepthTexture!==ye){if(ye!==null&&W.has(ye)&&(w.width!==ye.image.width||w.height!==ye.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(w)}}let qt=w.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Rt=!0);let ie=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ie[O])?Z=ie[O][J]:Z=ie[O],H=!0):w.samples>0&&Q.useMultisampledRTT(w)===!1?Z=W.get(w).__webglMultisampledFramebuffer:Array.isArray(ie)?Z=ie[J]:Z=ie,ut.copy(w.viewport),Wt.copy(w.scissor),kt=w.scissorTest}else ut.copy(It).multiplyScalar(st).floor(),Wt.copy(te).multiplyScalar(st).floor(),kt=we;if(J!==0&&(Z=z),x.bindFramebuffer(D.FRAMEBUFFER,Z)&&x.drawBuffers(w,Z),x.viewport(ut),x.scissor(Wt),x.setScissorTest(kt),H){let Pt=W.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pt.__webglTexture,J)}else if(Rt){let Pt=O;for(let qt=0;qt<w.textures.length;qt++){let ie=W.get(w.textures[qt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+qt,ie.__webglTexture,J,Pt)}}else if(w!==null&&J!==0){let Pt=W.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Pt.__webglTexture,J)}j=-1};function bn(w){let O=W.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=R.textureFormatReadable(w.format),O.__typeReadable=R.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,J,Z,H,Rt,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget)){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qt=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(qt=qt[Vt]),qt){x.bindFramebuffer(D.FRAMEBUFFER,qt);try{let ie=w.textures[Pt],ye=ie.format,Ee=ie.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt);let jt=bn(ie);if(jt.__formatReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(jt.__typeReadable===!1){ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Z&&J>=0&&J<=w.height-H&&D.readPixels(O,J,Z,H,At.convert(ye),At.convert(Ee),Rt)}finally{let ie=ft!==null?W.get(ft).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(w,O,J,Z,H,Rt,Vt,Pt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qt=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Vt!==void 0&&(qt=qt[Vt]),qt)if(O>=0&&O<=w.width-Z&&J>=0&&J<=w.height-H){x.bindFramebuffer(D.FRAMEBUFFER,qt);let ie=w.textures[Pt],ye=ie.format,Ee=ie.type;w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Pt);let jt=bn(ie);if(jt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(jt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let De=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.bufferData(D.PIXEL_PACK_BUFFER,Rt.byteLength,D.STREAM_READ),D.readPixels(O,J,Z,H,At.convert(ye),At.convert(Ee),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let sn=ft!==null?W.get(ft).__webglFramebuffer:null;x.bindFramebuffer(D.FRAMEBUFFER,sn);let We=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ef(D,We,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,De),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Rt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(De),D.deleteSync(We),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,J=0){let Z=Math.pow(2,-J),H=Math.floor(w.image.width*Z),Rt=Math.floor(w.image.height*Z),Vt=O!==null?O.x:0,Pt=O!==null?O.y:0;Q.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,J,0,0,Vt,Pt,H,Rt),x.unbindTexture()},this.copyTextureToTexture=function(w,O,J=null,Z=null,H=0,Rt=0){let Vt,Pt,qt,ie,ye,Ee,jt,De,sn,We=w.isCompressedTexture?w.mipmaps[Rt]:w.image;if(J!==null)Vt=J.max.x-J.min.x,Pt=J.max.y-J.min.y,qt=J.isBox3?J.max.z-J.min.z:1,ie=J.min.x,ye=J.min.y,Ee=J.isBox3?J.min.z:0;else{let en=Math.pow(2,-H);Vt=Math.floor(We.width*en),Pt=Math.floor(We.height*en),w.isDataArrayTexture?qt=We.depth:w.isData3DTexture?qt=Math.floor(We.depth*en):qt=1,ie=0,ye=0,Ee=0}Z!==null?(jt=Z.x,De=Z.y,sn=Z.z):(jt=0,De=0,sn=0);let ze=At.convert(O.format),Mn=At.convert(O.type),Kt;O.isData3DTexture?(Q.setTexture3D(O,0),Kt=D.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Q.setTexture2DArray(O,0),Kt=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(O,0),Kt=D.TEXTURE_2D),x.activeTexture(D.TEXTURE0),x.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,O.flipY),x.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),x.pixelStorei(D.UNPACK_ALIGNMENT,O.unpackAlignment);let Cn=x.getParameter(D.UNPACK_ROW_LENGTH),ke=x.getParameter(D.UNPACK_IMAGE_HEIGHT),$n=x.getParameter(D.UNPACK_SKIP_PIXELS),Ei=x.getParameter(D.UNPACK_SKIP_ROWS),ji=x.getParameter(D.UNPACK_SKIP_IMAGES);x.pixelStorei(D.UNPACK_ROW_LENGTH,We.width),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,We.height),x.pixelStorei(D.UNPACK_SKIP_PIXELS,ie),x.pixelStorei(D.UNPACK_SKIP_ROWS,ye),x.pixelStorei(D.UNPACK_SKIP_IMAGES,Ee);let Xs=w.isDataArrayTexture||w.isData3DTexture,Be=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let en=W.get(w),Qi=W.get(O),He=W.get(en.__renderTarget),ts=W.get(Qi.__renderTarget);x.bindFramebuffer(D.READ_FRAMEBUFFER,He.__webglFramebuffer),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,ts.__webglFramebuffer);for(let Ys=0;Ys<qt;Ys++)Xs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(w).__webglTexture,H,Ee+Ys),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(O).__webglTexture,Rt,sn+Ys)),D.blitFramebuffer(ie,ye,Vt,Pt,jt,De,Vt,Pt,D.DEPTH_BUFFER_BIT,D.NEAREST);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||W.has(w)){let en=W.get(w),Qi=W.get(O);x.bindFramebuffer(D.READ_FRAMEBUFFER,L),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,F);for(let He=0;He<qt;He++)Xs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,H,Ee+He):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,H),Be?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Qi.__webglTexture,Rt,sn+He):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Qi.__webglTexture,Rt),H!==0?D.blitFramebuffer(ie,ye,Vt,Pt,jt,De,Vt,Pt,D.COLOR_BUFFER_BIT,D.NEAREST):Be?D.copyTexSubImage3D(Kt,Rt,jt,De,sn+He,ie,ye,Vt,Pt):D.copyTexSubImage2D(Kt,Rt,jt,De,ie,ye,Vt,Pt);x.bindFramebuffer(D.READ_FRAMEBUFFER,null),x.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Be?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Kt,Rt,jt,De,sn,Vt,Pt,qt,ze,Mn,We.data):O.isCompressedArrayTexture?D.compressedTexSubImage3D(Kt,Rt,jt,De,sn,Vt,Pt,qt,ze,We.data):D.texSubImage3D(Kt,Rt,jt,De,sn,Vt,Pt,qt,ze,Mn,We):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Rt,jt,De,Vt,Pt,ze,Mn,We.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Rt,jt,De,We.width,We.height,ze,We.data):D.texSubImage2D(D.TEXTURE_2D,Rt,jt,De,Vt,Pt,ze,Mn,We);x.pixelStorei(D.UNPACK_ROW_LENGTH,Cn),x.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ke),x.pixelStorei(D.UNPACK_SKIP_PIXELS,$n),x.pixelStorei(D.UNPACK_SKIP_ROWS,Ei),x.pixelStorei(D.UNPACK_SKIP_IMAGES,ji),Rt===0&&O.generateMipmaps&&D.generateMipmap(Kt),x.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&Q.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Q.setTextureCube(w,0):w.isData3DTexture?Q.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Q.setTexture2DArray(w,0):Q.setTexture2D(w,0),x.unbindTexture()},this.resetState=function(){X=0,$=0,ft=null,x.reset(),Et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}};var Vf={type:"change"},uh={type:"start"},Hf={type:"end"},xc=new as,Gf=new Gn,av=Math.cos(70*Fu.DEG2RAD),dn=new I,Un=2*Math.PI,Fe={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ch=1e-6,yc=class extends Oa{constructor(t,e=null){super(t,e),this.state=Fe.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ms.ROTATE,MIDDLE:ms.DOLLY,RIGHT:ms.PAN},this.touches={ONE:gs.ROTATE,TWO:gs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new Ln,this._lastTargetPosition=new I,this._quat=new Ln().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pr,this._sphericalDelta=new Pr,this._scale=1,this._panOffset=new I,this._rotateStart=new it,this._rotateEnd=new it,this._rotateDelta=new it,this._panStart=new it,this._panEnd=new it,this._panDelta=new it,this._dollyStart=new it,this._dollyEnd=new it,this._dollyDelta=new it,this._dollyDirection=new I,this._mouse=new it,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lv.bind(this),this._onPointerDown=ov.bind(this),this._onPointerUp=cv.bind(this),this._onContextMenu=gv.bind(this),this._onMouseWheel=dv.bind(this),this._onKeyDown=fv.bind(this),this._onTouchStart=pv.bind(this),this._onTouchMove=mv.bind(this),this._onMouseDown=uv.bind(this),this._onMouseMove=hv.bind(this),this._interceptControlDown=_v.bind(this),this._interceptControlUp=xv.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Fe.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Vf),this.update(),this.state=Fe.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;dn.copy(e).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Fe.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),e.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=dn.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new I(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new I(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(xc.origin.copy(this.object.position),xc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(xc.direction))<av?this.object.lookAt(this.target):(Gf.setFromNormalAndCoplanarPoint(this.object.up,this.target),xc.intersectPlane(Gf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ch||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ch||this._lastTargetPosition.distanceToSquared(this.target)>ch?(this.dispatchEvent(Vf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Un/60*this.autoRotateSpeed*t:Un/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){dn.setFromMatrixColumn(e,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,e){this.screenSpacePanning===!0?dn.setFromMatrixColumn(e,1):(dn.setFromMatrixColumn(e,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;dn.copy(s).sub(this.target);let r=dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/e.clientHeight),this._rotateUp(Un*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new it,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ov(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function lv(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cv(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Hf),this.state=Fe.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function uv(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Fe.DOLLY;break;case ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}break;case ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Fe.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Fe.PAN}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(uh)}function hv(i){switch(this.state){case Fe.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Fe.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Fe.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function dv(i){this.enabled===!1||this.enableZoom===!1||this.state!==Fe.NONE||(i.preventDefault(),this.dispatchEvent(uh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Hf))}function fv(i){this.enabled!==!1&&this._handleKeyDown(i)}function pv(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case gs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Fe.TOUCH_ROTATE;break;case gs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Fe.TOUCH_PAN;break;default:this.state=Fe.NONE}break;case 2:switch(this.touches.TWO){case gs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Fe.TOUCH_DOLLY_PAN;break;case gs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Fe.TOUCH_DOLLY_ROTATE;break;default:this.state=Fe.NONE}break;default:this.state=Fe.NONE}this.state!==Fe.NONE&&this.dispatchEvent(uh)}function mv(i){switch(this._trackPointer(i),this.state){case Fe.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Fe.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Fe.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Fe.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Fe.NONE}}function gv(i){this.enabled!==!1&&i.preventDefault()}function _v(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function xv(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var vc=class extends Rs{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new xe;t.deleteAttribute("uv");let e=new Re({side:yn}),n=new Re,s=new ks(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Nt(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new pi(t,n,6),o=new Ke;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new Nt(t,Vr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Nt(t,Vr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Nt(t,Vr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let d=new Nt(t,Vr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let h=new Nt(t,Vr(20));h.position.set(3.235,11.486,-12.541),h.scale.set(2.5,2,.1),this.add(h);let f=new Nt(t,Vr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Vr(i){return new Pa({color:0,emissive:16777215,emissiveIntensity:i})}var yv=42e5,hh=[1,.8,.65,.5],Wf=()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches||document.documentElement.hasAttribute("data-e-hareketsiz"),vv=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2;function Xf(i,{arkaPlan:t="#e9e5f1",olay:e=()=>{},guvenliAlan:n=null}={}){let s=window.devicePixelRatio||1,r;try{r=new mc({canvas:i,antialias:!0,alpha:!1,stencil:!1,powerPreference:"high-performance"})}catch{return null}r.outputColorSpace=ln,r.toneMapping=za,r.toneMappingExposure=1,r.shadowMap.enabled=!0,r.shadowMap.type=Ml,r.shadowMap.autoUpdate=!1,r.setClearColor(new Qt(t),1);let a=new Rs,o=new Br(r);a.environment=o.fromScene(new vc,.04).texture,a.environmentIntensity=.85,o.dispose();let l=new xn(32,1,4,1500);l.position.set(0,160,150),a.add(new La(16777215,13616860,.35));let c=new Ua(16777215,2.4);c.position.set(-55,150,85),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),Object.assign(c.shadow.camera,{left:-115,right:115,top:115,bottom:-115,near:20,far:420}),c.shadow.bias=-4e-4,c.shadow.normalBias=.25,a.add(c);let u=new Nt(new gi(900,900),new Ra({opacity:.2}));u.rotation.x=-Math.PI/2,u.receiveShadow=!0,a.add(u);let d=new yc(l,i);d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz"),d.dampingFactor=.14,d.rotateSpeed=.75,d.zoomSpeed=.9,d.panSpeed=.8,d.screenSpacePanning=!0,d.minDistance=9,d.maxDistance=1200,d.minPolarAngle=.06,d.maxPolarAngle=1.32,d.zoomToCursor=!0,d.cursor.set(0,6,-3),d.maxTargetRadius=85,d.target.set(0,4,0);function h(){let K=l.position.distanceTo(d.target),gt=Math.min(4,Math.max(.4,K*.04));Math.abs(gt-l.near)>gt*.08&&(l.near=gt,l.far=Math.max(900,K*6),l.updateProjectionMatrix())}let f=0,g=0,M=!1,m=!0,p=new Set,b=new Set,S=[],y=new Set,E=1,v=0,T=0,_=0,A=0,P=[],k=0,N=0,z=0;function L(){!f&&!g&&(f=requestAnimationFrame($))}function F(){!f&&!g&&(g=setTimeout(()=>{g=0,L()},33))}function X(K){Math.abs(K-T)<.01||(T=K,r.setPixelRatio(K),r.setSize(i.clientWidth||1,i.clientHeight||1,!1))}function $(K){f=0;let gt=d.update();for(let Jt of y){let de=Math.min(1,(K-(Jt.bas??=K))/Jt.sure);Jt.adim(vv(de)),Jt.golge&&(m=!0),de>=1?(y.delete(Jt),Jt.bitti?.()):gt=!0}for(let Jt of p)Jt(K)&&(gt=!0);let Tt=!1;for(let Jt of b)Jt(K,A?Math.min(100,K-A):33)&&(Tt=!0);A=Tt?K:0;let ne=gt||Tt;clearTimeout(z),h(),X(E*hh[v]),m&&(r.shadowMap.needsUpdate=!0,m=!1),r.render(a,l),Yt(),gt?ft(K):(_=0,P=[]),gt?L():Tt&&F(),!ne&&v>0&&(z=setTimeout(()=>{X(E),r.render(a,l),Yt()},300))}function ft(K){_&&P.push(K-_),_=K;let gt=P.length,Tt=P.reduce((de,Ft)=>de+Ft,0),ne=gt>=6&&gt<24&&Tt>=450&&[...P].sort((de,Ft)=>de-Ft)[gt>>1]>50;if(gt<24&&!ne)return;let Jt=Tt/gt;P=[],!(K-N<(ne?300:500))&&(Jt>26&&v<hh.length-1?(v++,k=0,N=K,e("kalite",v)):Jt<19&&v>0&&++k>=3&&(v--,k=0,N=K))}function j(){let K=i.clientWidth||1,gt=i.clientHeight||1;E=Math.max(.5,Math.min(s,2,Math.sqrt(yv/(K*gt)))),T=0,X(E*hh[v]),l.aspect=K/gt,pe();for(let Tt of S)Tt.w=0;se=0,R=null,!M&&ae&&q(ae,!0),L()}let rt=0,ut=0;new ResizeObserver(()=>{clearTimeout(rt);let K=performance.now();if(document.documentElement.dataset.suruklenen&&K-ut>125){ut=K,j();return}rt=setTimeout(()=>{ut=performance.now(),j()},110)}).observe(i),window.addEventListener("bote-erisim",()=>{d.enableDamping=!document.documentElement.hasAttribute("data-e-hareketsiz");for(let K of S)K.w=0;L()});let kt=0;function pe(){let K=i.clientWidth||1,gt=i.clientHeight||1;kt>0?l.setViewOffset(K,gt,0,Math.min(kt,gt*.9)/2,K,gt):l.clearViewOffset(),l.updateProjectionMatrix()}function me(K,gt=!1){kt=Math.max(0,K||0),R=null,pe(),!M&&ae?q(ae,gt):L()}d.addEventListener("change",L),d.addEventListener("start",()=>{M=!0,e("kamera-elle")});let ae=null,tt=new I(0,1,0),st=new I,xt=new I,Xt=new I,It=new I,te=new I,we=K=>K.isBox3?K:new Pn(new I(K[0],K[1],K[2]),new I(K[3],K[4],K[5]));function G(K,gt){let Tt=n?.()||{},ne=Math.min(kt,gt*.9),Jt=Tt.sol??16,de=K-(Tt.sag??16),Ft=Tt.ust??16,Ae=gt-Math.max(Tt.alt??16,ne+12);if(de-Jt<80){let he=K/2;Jt=he-40,de=he+40}if(Ae-Ft<80){let he=(Math.max(0,Ft)+Math.max(Ft+80,Ae))/2;Ft=he-40,Ae=he+40}return{x0:Jt,y0:Ft,x1:de,y1:Ae,engel:Tt.engel||[]}}function et(K,gt){let Tt=i.clientWidth||1,ne=i.clientHeight||1,Jt=we(K),de=new I(...gt).normalize();st.crossVectors(tt,de).normalize(),xt.crossVectors(de,st),Xt.copy(de).negate();let Ft=R=G(Tt,ne),Ae=Math.tan(l.fov*Math.PI/360),he=Ae*(Tt/ne),be=Math.min(kt,ne*.9)/ne,Oe=(Ft.x0/Tt*2-1)*he,C=(Ft.x1/Tt*2-1)*he,U=(1-Ft.y0/ne*2-be)*Ae,Y=(1-Ft.y1/ne*2-be)*Ae;Jt.getCenter(It);let ct=[],mt=[],ot=[];for(let Ge=0;Ge<8;Ge++)te.set(Ge&1?Jt.max.x:Jt.min.x,Ge&2?Jt.max.y:Jt.min.y,Ge&4?Jt.max.z:Jt.min.z).sub(It),ct.push(te.dot(st)),mt.push(te.dot(xt)),ot.push(te.dot(Xt));let Ot=0;for(let Ge=0;Ge<8;Ge++){Ot=Math.max(Ot,2-ot[Ge]);for(let bn=0;bn<8;bn++)Ot=Math.max(Ot,(ct[Ge]-ct[bn]-C*ot[Ge]+Oe*ot[bn])/(C-Oe),(mt[Ge]-mt[bn]-U*ot[Ge]+Y*ot[bn])/(U-Y))}Ot=Math.min(d.maxDistance,Math.max(d.minDistance,Ot));let Me=(Ge,bn,w)=>{let O=-1/0,J=1/0;for(let H=0;H<8;H++)O=Math.max(O,Ge[H]-w*(ot[H]+Ot)),J=Math.min(J,Ge[H]-bn*(ot[H]+Ot));if(!(J>O))return(O+J)/2;let Z=H=>{let Rt=-1/0,Vt=1/0;for(let Pt=0;Pt<8;Pt++){let qt=(Ge[Pt]-H)/(ot[Pt]+Ot);qt>Rt&&(Rt=qt),qt<Vt&&(Vt=qt)}return w-Rt-(Vt-bn)};for(let H=0;H<32;H++){let Rt=(O+J)/2;Z(Rt)>0?J=Rt:O=Rt}return(O+J)/2},Se=Me(ct,Oe,C),tn=Me(mt,Y,U),mn=It.clone().addScaledVector(st,Se).addScaledVector(xt,tn);return{merkez:mn,konum:mn.clone().addScaledVector(de,Ot)}}function q(K,gt=!1){ae=K,M=!1;let{merkez:Tt,konum:ne}=et(K.kutu,K.yon);if(gt||Wf())return l.position.copy(ne),d.target.copy(Tt),d.update(),L(),Promise.resolve();let Jt=l.position.clone(),de=d.target.clone();return d.enabled=!1,pt(650,Ft=>{l.position.lerpVectors(Jt,ne,Ft),d.target.lerpVectors(de,Tt,Ft),l.lookAt(d.target)}).then(()=>{d.enabled=!0,d.update()})}function lt(){if(!ae)return null;l.updateMatrixWorld();let K=i.clientWidth||1,gt=i.clientHeight||1,Tt=we(ae.kutu),ne=1/0,Jt=-1/0,de=1/0,Ft=-1/0;for(let Ae=0;Ae<8;Ae++){te.set(Ae&1?Tt.max.x:Tt.min.x,Ae&2?Tt.max.y:Tt.min.y,Ae&4?Tt.max.z:Tt.min.z).project(l);let he=(te.x+1)/2*K,be=(1-te.y)/2*gt;ne=Math.min(ne,he),Jt=Math.max(Jt,he),de=Math.min(de,be),Ft=Math.max(Ft,be)}return{kutu:{x0:ne,y0:de,x1:Jt,y1:Ft},guvenli:G(K,gt),w:K,h:gt}}function pt(K,gt,Tt=!1){return Wf()?(gt(1),Tt&&(m=!0),L(),Promise.resolve()):new Promise(ne=>{y.add({sure:K,adim:gt,bitti:ne,golge:Tt}),L()})}let vt=i.parentElement.querySelector(".etiketler"),Ut=i.parentElement.querySelector(".isaretler")||vt,Ht="http://www.w3.org/2000/svg",Bt=document.createElementNS(Ht,"svg");Bt.setAttribute("class","cizgiler"),Bt.setAttribute("aria-hidden","true"),vt.appendChild(Bt);let D=[],ge=[],se=0,R=null,x=new I,V=new I,W=new I,Q=K=>{for(let gt=K;gt;gt=gt.parent)if(!gt.visible)return!1;return!0};function _t(K){for(let gt of S)gt.el.remove(),gt.cizgi.remove(),gt.nokt.remove();S.length=0;for(let{nokta:gt,metin:Tt,tur:ne}of K){let Jt=document.createElement("div");Jt.className="etiket"+(ne?` etiket-${ne}`:""),Jt.textContent=Tt,vt.appendChild(Jt);let de=document.createElementNS(Ht,"line"),Ft=document.createElementNS(Ht,"circle");Ft.setAttribute("r","4.5"),Bt.append(de,Ft),S.push({el:Jt,nokta:gt,cizgi:de,nokt:Ft,w:0,h:0})}L()}function yt(K){for(let gt of D)gt.el.remove();D.length=0;for(let gt of K)gt.el.hidden=!0,Ut.appendChild(gt.el),D.push({...gt,acik:!1});ge=D.map((gt,Tt)=>[gt,Tt]).sort((gt,Tt)=>(Tt[0].oncelik??1)-(gt[0].oncelik??1)||gt[1]-Tt[1]).map(([gt])=>gt),se=0,R=null,L()}function nt(K,gt){for(let Tt=D.length-1;Tt>=0;Tt--){let ne=D[Tt].el;if(ne.hidden)continue;let Jt=ne.getBoundingClientRect(),de=Jt.width/2;if(de&&Math.hypot(K-Jt.left-de,gt-Jt.top-Jt.height/2)<=de+2)return ne}return null}function ht(K,gt){if(!D.length)return;se||(se=parseFloat(getComputedStyle(Ut).getPropertyValue("--isaret"))||44);let Tt=R||(R=G(K,gt)),ne=se+4,Jt=[],de=document.activeElement,Ft=Math.tan(l.fov*Math.PI/360),Ae=D.some(he=>he.el===de)?[...ge].sort((he,be)=>(be.el===de)-(he.el===de)):ge;for(let he of Ae){let be=!1,Oe=0,C=0;(!he.nesne||Q(he.nesne))&&(he.nesne?V.copy(he.yerel).applyMatrix4(he.nesne.matrixWorld):V.copy(he.nokta),W.copy(V).applyMatrix4(l.matrixWorldInverse),W.z<-l.near&&(x.copy(V).project(l),Oe=(x.x+1)/2*K,C=(1-x.y)/2*gt,be=Oe>=Tt.x0&&Oe<=Tt.x1&&C>=Tt.y0&&C<=Tt.y1&&!Tt.engel.some(U=>Oe>U.x0-ne/2&&Oe<U.x1+ne/2&&C>U.y0-ne/2&&C<U.y1+ne/2),be&&he.adim&&(be=he.adim*gt/(2*-W.z*Ft)>=se),be&&he.el!==de&&(be=!Jt.some(U=>Math.abs(U.x-Oe)<ne&&Math.abs(U.y-C)<ne)))),be&&(Jt.push({x:Oe,y:C}),he.el.style.transform=`translate3d(${Math.round(Oe)}px,${Math.round(C)}px,0)`),he.acik!==be&&(he.acik=be,he.el.hidden=!be)}}let St=(K,gt,Tt)=>(x.copy(K).project(l),{x:(x.x+1)/2*gt,y:(1-x.y)/2*Tt,gor:x.z<1&&Math.abs(x.x)<1.05&&Math.abs(x.y)<1.05});function Yt(){let K=i.clientWidth,gt=i.clientHeight;if(ht(K,gt),!S.length)return;Bt.setAttribute("width",K),Bt.setAttribute("height",gt);let Tt=[],ne=8,Jt=30,de=S.map(Ft=>({e:Ft,p:St(Ft.nokta,K,gt)})).sort((Ft,Ae)=>Ae.p.y-Ft.p.y);for(let{e:Ft,p:Ae}of de){Ft.w||(Ft.w=Ft.el.offsetWidth,Ft.h=Ft.el.offsetHeight);let he=Math.min(Math.max(Ae.x-Ft.w/2,6),K-Ft.w-6),be=Ae.y-Jt-Ft.h,Oe=!1;for(let U=0;U<6;U++){let Y=Tt.find(ct=>he<ct.x+ct.w+ne&&he+Ft.w+ne>ct.x&&be<ct.y+ct.h+ne&&be+Ft.h+ne>ct.y);if(!Y)break;if(be=Y.y-Ft.h-ne,be<4){be=Ae.y+Jt,Oe=!0,he=Math.min(Math.max(Y.x+Y.w+ne,6),K-Ft.w-6);break}}Tt.push({x:he,y:be,w:Ft.w,h:Ft.h});let C=Ae.gor?"1":"0";Ft.el.style.opacity=C,Ft.cizgi.style.opacity=C,Ft.nokt.style.opacity=C,Ft.el.style.transform=`translate3d(${Math.round(he)}px,${Math.round(be)}px,0)`,Ft.cizgi.setAttribute("x1",Ae.x.toFixed(1)),Ft.cizgi.setAttribute("y1",Ae.y.toFixed(1)),Ft.cizgi.setAttribute("x2",(he+Ft.w/2).toFixed(1)),Ft.cizgi.setAttribute("y2",(Oe?be:be+Ft.h).toFixed(1)),Ft.nokt.setAttribute("cx",Ae.x.toFixed(1)),Ft.nokt.setAttribute("cy",Ae.y.toFixed(1))}}let bt=new Fa,wt=new it,$t=[],ee=new Set,le=new I,B=new I,Mt=new I,at=K=>!K.isMesh||K.isInstancedMesh||K===u||!Q(K)?!1:(Array.isArray(K.material)?K.material:[K.material]).some(Tt=>Tt&&Tt.visible!==!1&&Tt.blending!==qn&&!(Tt.transparent&&Tt.opacity<.2));function At(K,gt,Tt=1){wt.set(K,gt),bt.setFromCamera(wt,l);let ne=bt.intersectObjects(a.children,!0).find(C=>at(C.object)),Jt=ne?ne.point:null,de=ne?ne.distance:1/0,Ft=i.clientHeight||1,Ae=Math.tan(l.fov*Math.PI/360),he=null,be=1/0,Oe=1/0;for(let C of $t){let U=C.userData;if(U.etkin===!1||!Q(C))continue;let Y=!1;if(Jt&&U.yari){le.copy(Jt),C.worldToLocal(le),B.setFromMatrixScale(C.matrixWorld);let[ot,Ot,Me]=U.yari,Se=.25;Y=Math.abs(le.x)<=ot+Se/B.x&&Math.abs(le.y)<=Ot+Se/B.y&&Math.abs(le.z)<=Me+Se/B.z}if(!Y&&U.ince&&C.isMesh){let ot=bt.intersectObject(C,!1)[0];Y=!!ot&&ot.distance<=de+.5}if(!Y||(Mt.setFromMatrixPosition(C.matrixWorld),U.minPx&&U.minAdim&&(W.copy(Mt).applyMatrix4(l.matrixWorldInverse),U.minAdim*Ft/(2*Math.max(.01,-W.z)*Ae)<U.minPx*Tt)))continue;let ct=U.hacim??1/0,mt=Jt?Mt.distanceToSquared(Jt):0;(ct<be*.99||ct<=be*1.01&&mt<Oe)&&(he=C,be=ct,Oe=mt)}return{vekil:he,nokta:Jt?Jt.clone():he?new I().setFromMatrixPosition(he.matrixWorld):null}}let Et=new Set,dt=null,Zt=!1;i.addEventListener("pointerdown",K=>{if(Et.add(K.pointerId),Et.size>1){Zt=!0,dt=null;return}dt=Zt?null:{x:K.clientX,y:K.clientY,t:performance.now(),id:K.pointerId}}),i.addEventListener("pointerup",K=>{let gt=dt;if(Et.delete(K.pointerId),Et.size||(Zt=!1),!gt||gt.id!==K.pointerId||(dt=null,Math.hypot(K.clientX-gt.x,K.clientY-gt.y)>9||performance.now()-gt.t>600))return;let Tt=D.length?nt(K.clientX,K.clientY):null;if(Tt){Tt.click();return}let ne=i.getBoundingClientRect(),Jt=K.pointerType==="touch"?document.documentElement.dataset.mod==="tahta"?1.5:2.5:1,de=At((K.clientX-ne.left)/ne.width*2-1,-((K.clientY-ne.top)/ne.height)*2+1,Jt);for(let Ft of ee)Ft(de.vekil?de.vekil.userData:null,de.nokta,de.vekil)}),i.addEventListener("pointercancel",K=>{Et.delete(K.pointerId),Et.size||(Zt=!1),dt=null});let Gt=null,Le=K=>{K!==Gt&&(Gt?.classList.remove("ustunde"),K?.classList.add("ustunde"),Gt=K,i.style.cursor=K?"pointer":"")};return i.addEventListener("pointermove",K=>{K.pointerType==="mouse"&&!K.buttons&&Le(D.length?nt(K.clientX,K.clientY):null)}),i.addEventListener("pointerleave",()=>Le(null)),i.addEventListener("contextmenu",K=>K.preventDefault()),i.addEventListener("webglcontextlost",K=>{K.preventDefault(),e("baglam-kaybi")}),i.addEventListener("webglcontextrestored",()=>{e("baglam-geri"),m=!0,L()}),j(),{renderer:r,scene:a,camera:l,controls:d,hedefler:$t,iste:L,kameraGit:q,tween:pt,etiketKoy:_t,isaretKoy:yt,gorunurAlan:me,golgeYenile:()=>{m=!0,L()},kareGuncelleyici:K=>(p.add(K),L(),()=>p.delete(K)),yavasGuncelleyici:K=>(b.add(K),L(),()=>b.delete(K)),dokunmaDinle:K=>ee.add(K),sec:At,kadrajOlc:lt,guvenliYenile:()=>{R=null,se=0,L()},yakinlas:K=>{let gt=l.position.clone().sub(d.target),Tt=Math.min(d.maxDistance,Math.max(d.minDistance,gt.length()*K)),ne=l.position.clone(),Jt=d.target.clone().addScaledVector(gt.normalize(),Tt);return M=!0,pt(260,de=>l.position.lerpVectors(ne,Jt,de))},arkaPlan:K=>{r.setClearColor(new Qt(K),1),L()},sonHedef:()=>ae,kalite:()=>({kademe:v,piksel:Math.round(T*100)/100,tam:Math.round(E*100)/100})}}function kn(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Je,c=0;for(let u=0;u<i.length;++u){let d=i[u],h=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),h++}if(h!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,u),c+=f}}if(e){let u=0,d=[];for(let h=0;h<i.length;++h){let f=i[h].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+u);u+=i[h].attributes.position.count}l.setIndex(d)}for(let u in r){let d=Yf(r[u]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,d)}for(let u in a){let d=a[u][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<d;++h){let f=[];for(let M=0;M<a[u].length;++M)f.push(a[u][M][h]);let g=Yf(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}}return l}function Yf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let u=i[c];if(t===void 0&&(t=u.array.constructor),t!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=u.itemSize),e!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=u.gpuType),s!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.count*e}let a=new t(r),o=new An(a,e,n),l=0;for(let c=0;c<i.length;++c){let u=i[c];if(u.isInterleavedBufferAttribute){let d=l/e;for(let h=0,f=u.count;h<f;h++)for(let g=0;g<e;g++){let M=u.getComponent(h,g);o.setComponent(h+d,g,M)}}else a.set(u.array,l);l+=u.count*e}return s!==void 0&&(o.gpuType=s),o}var Qa=new I;function ei(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;Qa.copy(t),Qa[n]=0,Qa.normalize();let c=.5*a/(a+o),u=1-Qa.angleTo(i)/l;return Math.sign(Qa[e])===1?u*c:o/(a+o)+c+c*(1-u)}var Fn=class i extends xe{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new I,c=new I,u=new I(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,h=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,M=new I,m=.5/a;for(let p=0,b=0;p<d.length;p+=3,b+=2)switch(l.fromArray(d,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),d[p+0]=u.x*Math.sign(l.x)+c.x*r,d[p+1]=u.y*Math.sign(l.y)+c.y*r,d[p+2]=u.z*Math.sign(l.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/g)){case 0:M.set(1,0,0),f[b+0]=ei(M,c,"z","y",r,n),f[b+1]=1-ei(M,c,"y","z",r,e);break;case 1:M.set(-1,0,0),f[b+0]=1-ei(M,c,"z","y",r,n),f[b+1]=1-ei(M,c,"y","z",r,e);break;case 2:M.set(0,1,0),f[b+0]=1-ei(M,c,"x","z",r,t),f[b+1]=ei(M,c,"z","x",r,n);break;case 3:M.set(0,-1,0),f[b+0]=1-ei(M,c,"x","z",r,t),f[b+1]=1-ei(M,c,"z","x",r,n);break;case 4:M.set(0,0,1),f[b+0]=1-ei(M,c,"x","y",r,t),f[b+1]=1-ei(M,c,"y","x",r,e);break;case 5:M.set(0,0,-1),f[b+0]=ei(M,c,"x","y",r,t),f[b+1]=1-ei(M,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};var bc={x:45.2,z:21.6,a:6,arduinoZ:28,unoX:57.4,unoZ:21.9};function qf(i,t,e){let{x:n,z:s,a:r}=bc;i.save(),i.strokeStyle=e,i.fillStyle=e,i.lineCap="round",i.lineJoin="round",i.lineWidth=1.05*t,i.beginPath();for(let u=0;u<=160;u++){let d=u/160*Math.PI*2,h=n+r*Math.cos(d),f=s+r*.62*Math.sin(2*d)*.92;u?i.lineTo(h*t,f*t):i.moveTo(h*t,f*t)}i.closePath(),i.stroke();let a=r*.2,o=.8*t,l=n-r*.52,c=n+r*.52;i.lineWidth=o,i.lineCap="butt",i.beginPath(),i.moveTo((l-a)*t,s*t),i.lineTo((l+a)*t,s*t),i.stroke(),i.beginPath(),i.moveTo((c-a)*t,s*t),i.lineTo((c+a)*t,s*t),i.moveTo(c*t,(s-a)*t),i.lineTo(c*t,(s+a)*t),i.stroke(),i.textAlign="center",i.textBaseline="middle",i.save(),i.translate(n*t,bc.arduinoZ*t),i.scale(.92,1),i.font=`800 ${2.5*t}px "Arial Black", "Arial", Helvetica, sans-serif`,i.fillText("ARDUINO",0,0),i.restore(),i.save(),i.translate(bc.unoX*t,bc.unoZ*t),i.scale(.9,1),i.font=`800 ${4.6*t}px "Arial Black", "Arial", Helvetica, sans-serif`,i.fillText("UNO",0,0),i.restore(),i.restore()}function Sc(i){return()=>{i|=0,i=i+1831565813|0;let t=Math.imul(i^i>>>15,1|i);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function ni(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d",{willReadFrequently:!1})]}var ph={sade:{pcb:2048,pcbN:0,bb:1536,bbN:0,aniz:8},dusuk:{pcb:1536,pcbN:0,bb:1536,bbN:0,aniz:4},orta:{pcb:2048,pcbN:1024,bb:2048,bbN:1024,aniz:8},yuksek:{pcb:4096,pcbN:2048,bb:3072,bbN:1536,aniz:16}};function Mc(i,t,e,n,s,r){let a=Sc(n),o=Math.max(2,Math.round(t/s)),l=Math.max(2,Math.round(e/s)),[c,u]=ni(o,l),d=u.createImageData(o,l);for(let h=0;h<o*l;h++){let f=a()<.5?0:255;d.data[h*4]=d.data[h*4+1]=d.data[h*4+2]=f,d.data[h*4+3]=Math.round(a()*255*r)}u.putImageData(d,0,0),i.save(),i.imageSmoothingEnabled=!0,i.drawImage(c,0,0,t,e),i.restore()}function mh(i,t){let e=i.width,n=i.height,s=i.getContext("2d").getImageData(0,0,e,n).data,[r,a]=ni(e,n),o=a.createImageData(e,n),l=o.data,c=(u,d)=>s[(Math.min(n-1,Math.max(0,d))*e+Math.min(e-1,Math.max(0,u)))*4];for(let u=0;u<n;u++)for(let d=0;d<e;d++){let h=(c(d-1,u)-c(d+1,u))*t/255,f=(c(d,u+1)-c(d,u-1))*t/255,g=1,M=Math.hypot(h,f,g);h/=M,f/=M,g/=M;let m=(u*e+d)*4;l[m]=(h*.5+.5)*255,l[m+1]=(f*.5+.5)*255,l[m+2]=(g*.5+.5)*255,l[m+3]=255}return a.putImageData(o,0,0),r}function Fi(i,t,e,n=!1){let s=new os(i);return s.colorSpace=t?ln:bi,s.minFilter=Di,s.magFilter=cn,s.anisotropy=e,n&&(s.wrapS=s.wrapT=pr),s}var dh={albedo:{maske:"#0d7783",iz:"#3fb0bb",ped:"#cfd3d8",altin:"#d9b04f",delik:"#101214",ipek:"#f2f7f7",izAlfa:.32},orm:{maske:"rgb(255,117,0)",iz:"rgb(255,105,0)",ped:"rgb(255,77,255)",altin:"rgb(255,70,255)",delik:"rgb(255,200,0)",ipek:"rgb(255,158,0)",izAlfa:1},yuk:{maske:"rgb(128,128,128)",iz:"rgb(150,150,150)",ped:"rgb(112,112,112)",altin:"rgb(110,110,110)",delik:"rgb(60,60,60)",ipek:"rgb(146,146,146)",izAlfa:1}},Jf=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],bv=[{k:[10.5,24.5,9.5,22.5],n:18},{k:[12,30,22.5,30.5],n:8},{k:[3,17,1.5,14],n:8},{k:[2,22,41,52],n:14},{k:[24,64,29,33],n:10},{k:[24,64,41.5,48],n:10},{k:[20,66,5,9.5],n:10}],Mv=[[20.07,45.47,1.27,3.81],[46.99,67.31,1.27,3.81],[25.15,45.47,49.53,52.07],[48.01,63.25,49.53,52.07],[-6.35,9.65,9.24,21.24],[-1.8,12.2,40.4,49.4],[25.75,63.25,32.2,41.4],[17.5,22.5,15,20],[15.75,26.25,24.8,29.2],[11.75,18.25,43.1,49.25],[9.85,16.15,28.35,34.65],[16.35,22.65,34.35,40.65],[4.4,10.4,2.2,8.2],[62.33,67.41,22.86,30.48],[27,30,9.6,16.4],[60,63,9.6,11.6],[37,53.5,16.5,29.6],[53.5,61.5,18.5,25.5],[30,62,9.4,11.8],[24,47,40.6,43.4],[47,64,40.6,43.4]];function jf(i=1){let t=[],e=(n,s,r,a,o)=>Mv.some(([l,c,u,d])=>s+o>l&&n-o<c&&a+o>u&&r-o<d)||Jf.some(([l,c])=>Math.hypot((n+s)/2-l,(r+a)/2-c)<3.6)||t.some(l=>s+.4>l.x-l.w/2&&n-.4<l.x+l.w/2&&a+.4>l.z-l.d/2&&r-.4<l.z+l.d/2);return bv.forEach((n,s)=>{let r=Sc(6221056+s),a=Math.round(n.n*i),o=0;for(let l=0;l<400&&o<a;l++){let c=r()<.62?"direnc":"kond",u=c==="direnc"?1.6:2,d=c==="direnc"?.8:1.25,h=r()<.5,f=h?u:d,g=h?d:u,M=Math.round((n.k[0]+r()*(n.k[1]-n.k[0]))/.8)*.8,m=Math.round((n.k[2]+r()*(n.k[3]-n.k[2]))/.8)*.8;M-f/2<n.k[0]||M+f/2>n.k[1]||m-g/2<n.k[2]||m+g/2>n.k[3]||e(M-f/2,M+f/2,m-g/2,m+g/2,.6)||(t.push({x:M,z:m,w:f,d:g,yatay:h,tur:c,ad:`${c==="direnc"?"R":"C"}${t.length+1}`}),o++)}}),t}function fh(i,t,e,n,{smd:s,logo:r,sus:a}){let o=t/nn.w;i.fillStyle=n.maske,i.fillRect(0,0,t,e),i.save(),i.globalAlpha=n.izAlfa,i.strokeStyle=n.iz,i.lineWidth=.25*o,i.lineCap="round",i.lineJoin="round";let l=p=>{i.beginPath(),p.forEach(([b,S],y)=>y?i.lineTo(b*o,S*o):i.moveTo(b*o,S*o)),i.stroke()};for(let p=0;p<14;p++){let b=31.5+p*2.54>46?33+p*2.54:31.5+p*2.54,S=7+p%4*.8;l([[b,4.6],[b,S],[b-2.2,S+2.2],[b-2.2,30.5]])}for(let p=0;p<6;p++){let b=49.3+p*2.54;l([[b,48.4],[b,45.2-p*.3],[b-2.4,42.8-p*.3],[b-2.4,41.6]])}l([[10.5,13.5],[16,13.5],[18.5,16]]),l([[10.5,17.6],[15,17.6],[17.8,20.4],[21,20.4]]),l([[8,44],[13,44],[15.5,46.5]]),l([[36.5,48.4],[36.5,45.5],[33,42],[16,42]]),l([[39,48.4],[39,45.4],[29,45.4]]),l([[23,17.5],[26,17.5],[28.5,20],[28.5,30.5]]),l([[24.5,27],[27,27],[29.5,29.5]]),l([[3,30],[8,30],[10.5,27.5],[10.5,22]]),l([[57,28.5],[60,28.5],[62.4,26.1]]),i.restore(),i.fillStyle=n.ped;for(let p of s){let b=p.yatay?p.w*.3:p.w*1.08,S=p.yatay?p.d*1.08:p.d*.3;for(let y of[-1,1]){let E=p.x+(p.yatay?y*(p.w/2-b/2+.1):0),v=p.z+(p.yatay?0:y*(p.d/2-S/2+.1));i.fillRect((E-b/2)*o,(v-S/2)*o,b*o,S*o)}}for(let[p,b]of Jf)i.fillStyle=n.altin,i.beginPath(),i.arc(p*o,b*o,2.8*o,0,Math.PI*2),i.fill(),i.fillStyle=n.delik,i.beginPath(),i.arc(p*o,b*o,1.6*o,0,Math.PI*2),i.fill();let c=n.ipek;i.strokeStyle=c,i.fillStyle=c,i.lineWidth=.2*o;let u=(p,b,S,y)=>i.strokeRect(p*o,b*o,(S-p)*o,(y-b)*o);u(20,1.2,45.5,3.9),u(47,1.2,67.3,3.9),u(25.1,49.5,45.5,52.1),u(48,49.5,63.3,52.1);let d='"Arial Narrow", "Roboto Condensed", "Liberation Sans Narrow", Arial, Helvetica, sans-serif',h=(p,b,S,y,{don:E=0,hiza:v="center",kalin:T=700,dar:_=.84}={})=>{i.save(),i.translate(b*o,S*o),i.rotate(E),i.scale(_,1),i.font=`${T} ${y*o}px ${d}`,i.textAlign=v,i.textBaseline="middle",i.fillText(p,0,0),i.restore()},f=-Math.PI/2,g={SCL:"SCL",SDA:"SDA",AREF:"AREF","GND-D":"GND",13:"13",12:"12",11:"~11",10:"~10",9:"~9",8:"8",7:"7",6:"~6",5:"~5",4:"4",3:"~3",2:"2",1:"TX\u21921",0:"RX\u21900"};for(let[p,b]of Object.entries(g))h(b,Oi[p],4.4,1.25,{don:f,hiza:"right"});h("DIGITAL (PWM~)",46,10.6,1.5);let M={IOREF:"IOREF",RESET:"RESET","3.3V":"3.3V","5V":"5V",GND1:"GND",GND2:"GND",VIN:"Vin"};for(let[p,b]of Object.entries(M))h(b,bs[p],48.3,1.2,{don:f,hiza:"left"});for(let[p,b]of Object.entries(Ms))h(p,b,48.3,1.25,{don:f,hiza:"left"});h("POWER",35.3,42,1.5),h("ANALOG IN",55.6,42,1.5),h("L",26.6,10.6,1.2),h("TX",25.9,13.3,1),h("RX",25.9,15.4,1),h("ON",64.4,10.6,1.2),h("RESET",7.4,10.3,1.1),h("ICSP",64.9,21.9,1.1);let m=(p,b,S)=>{i.beginPath(),i.arc(p*o,b*o,S*o,0,Math.PI*2),i.fill()};m(62,24.1,.35),m(25.4,34.6,.35);for(let[p,b]of[[13,31.5],[19.5,37.5]])i.beginPath(),i.arc(p*o,b*o,3.5*o,0,Math.PI*2),i.stroke(),h("+",p+3.9,b-2.4,1.3);if(i.strokeRect((44.5-18.9)*o,(36.8-4.75)*o,37.8*o,9.5*o),a){h("C1",9.2,31.5,.8,{kalin:600}),h("C2",23.2,37.5,.8,{kalin:600}),h("Y1",21,29.9,.8,{kalin:600}),h("U1",44.5,43.6,.8,{kalin:600}),h("U3",20,21.2,.8,{kalin:600}),h("X1",5.2,38.6,.8,{kalin:600});for(let p of s.slice(0,26))p.x>4&&p.x<64&&h(p.ad,p.x,p.z+(p.yatay?1.15:1.55),.62,{kalin:600})}r&&qf(i,o,c)}function Qf(i,{smd:t,logo:e}){let n=ph[i],s=n.pcb,r=Math.round(s*nn.d/nn.w),[a,o]=ni(s,r);fh(o,s,r,dh.albedo,{smd:t,logo:e,sus:!0}),i!=="sade"&&(Mc(o,s,r,45223,s/110,.05),Mc(o,s,r,45224,s/420,.04));let l={albedo:Fi(a,!0,n.aniz)};if(n.pcbN){let c=n.pcbN,u=Math.round(c*nn.d/nn.w),[d,h]=ni(c,u);fh(h,c,u,dh.yuk,{smd:t,logo:e,sus:!0}),l.normal=Fi(mh(d,i==="yuksek"?2.2:1.6),!1,n.aniz);let[f,g]=ni(c,u);fh(g,c,u,dh.orm,{smd:t,logo:e,sus:!0}),l.orm=Fi(f,!1,n.aniz)}return l}var Kf={albedo:{govde:"#f1eee6",kanal:"#d9d4c9",kanalCizgi:"#c9c3b7",halka:"#dcd7cb",halkaKoyu:"#c7c1b4",delik:"#232327",kirmizi:"#d23b3b",mavi:"#2f62c9",yazi:"#8a8478"},yuk:{govde:"rgb(128,128,128)",kanal:"rgb(96,96,96)",kanalCizgi:"rgb(88,88,88)",halka:"rgb(104,104,104)",halkaKoyu:"rgb(92,92,92)",delik:"rgb(24,24,24)",kirmizi:"rgb(128,128,128)",mavi:"rgb(128,128,128)",yazi:"rgb(122,122,122)"}},Zf=i=>Ct.x-36.83+(i-1)*Kn;function $f(i,t,e,n){let s=t/Ct.w,r=c=>(c-Ct.x+Ct.w/2)*s,a=c=>(c+Ct.d/2)*s;i.fillStyle=n.govde,i.fillRect(0,0,t,e),i.fillStyle=n.kanal,i.fillRect(0,a(-1.5),t,3*s),i.fillStyle=n.kanalCizgi,i.fillRect(0,a(-1.5),t,.25*s),i.fillRect(0,a(1.25),t,.25*s);let o=(c,u)=>{let d=r(c),h=a(u),f=1.55*s,g=1*s;i.fillStyle=n.halkaKoyu,i.fillRect(d-f/2,h-f/2,f,f),i.fillStyle=n.halka,i.fillRect(d-f/2+.22*s,h-f/2+.22*s,f-.22*s,f-.22*s),i.fillStyle=n.delik,i.fillRect(d-g/2,h-g/2,g,g)};for(let c=1;c<=30;c++)for(let u of Object.values(Fs))o(Zf(c)-Ct.x,u);for(let c of Object.values(On))for(let u of Os)o(Zf(u)-Ct.x,c);for(let c of[1,-1])i.fillStyle=n.kirmizi,i.fillRect(r(-37),a(c*23.6)-.3*s,r(37)-r(-37),.6*s),i.fillStyle=n.mavi,i.fillRect(r(-37),a(c*16.9)-.3*s,r(37)-r(-37),.6*s);let l='"Arial Narrow", "Roboto Condensed", Arial, Helvetica, sans-serif';i.textAlign="center",i.textBaseline="middle",i.font=`700 ${2.1*s}px ${l}`;for(let c of[1,-1])for(let u of[-39.4,39.4])i.fillStyle=n.kirmizi,i.fillText("+",r(u),a(c*On["yakin+"])),i.fillStyle=n.mavi,i.fillText("\u2212",r(u),a(c*On["yakin-"]));i.fillStyle=n.yazi,i.font=`700 ${1.45*s}px ${l}`;for(let[c,u]of Object.entries(Fs))for(let d of[-39.3,39.3])i.fillText(c,r(d),a(u));for(let c of[1,5,10,15,20,25,30])for(let u of[1,-1])i.fillText(String(c),r(-36.83+(c-1)*Kn),a(u*15.45))}function tp(i){let t=ph[i],e=t.bb,n=Math.round(e*Ct.d/Ct.w),[s,r]=ni(e,n);$f(r,e,n,Kf.albedo),Mc(r,e,n,47873,e/90,.035);let a={albedo:Fi(s,!0,t.aniz)};if(t.bbN){let o=t.bbN,l=Math.round(o*Ct.d/Ct.w),[c,u]=ni(o,l);$f(u,o,l,Kf.yuk),a.normal=Fi(mh(c,2.4),!1,t.aniz)}return a}function Sv(i){let[t,e]=ni(1024,216);return e.fillStyle="#17171a",e.fillRect(0,0,1024,216),Mc(e,1024,216,3103,6,.06),e.fillStyle="#0b0b0d",e.beginPath(),e.arc(0,108,30,-Math.PI/2,Math.PI/2),e.fill(),e.strokeStyle="#26262b",e.lineWidth=3,e.beginPath(),e.arc(70,170,16,0,Math.PI*2),e.stroke(),e.fillStyle="#9ea2a9",e.textAlign="center",e.textBaseline="middle",e.save(),e.translate(540,84),e.scale(.9,1),e.font='700 64px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("ATMEGA328P-PU",0,0),e.restore(),e.save(),e.translate(540,150),e.scale(.9,1),e.font='600 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillStyle="#80848b",e.fillText("AVR",0,0),e.restore(),Fi(t,!0,i)}function wv(i){let[t,e]=ni(256,96);return e.fillStyle="#c9ccd2",e.fillRect(0,0,256,96),e.fillStyle="#2a2a2e",e.textAlign="center",e.textBaseline="middle",e.font='700 40px "Arial Narrow", Arial, Helvetica, sans-serif',e.fillText("16.000",128,50),Fi(t,!0,i)}function Av(i){let[t,e]=ni(256,64);e.fillStyle="#1c1d22",e.fillRect(0,0,256,64),e.fillStyle="#b9bdc4",e.fillRect(150,0,56,64),e.fillStyle="#1c1d22";for(let n of[12,30,48])e.fillRect(166,n-2,24,5);return Fi(t,!0,i)}function gh(i,t,e,n){let[r,a]=ni(16,512);a.fillStyle="#d8c69c",a.fillRect(0,0,16,512);let o=Sc(3358);for(let c=0;c<90;c++)a.fillStyle=o()<.5?"rgba(120,90,40,0.06)":"rgba(255,255,255,0.06)",a.fillRect(0,o()*512,16,2+o()*6);let l=4.6*24/256;return i.forEach((c,u)=>{let h=(1-(t[u]+e/2)/e)*512;a.fillStyle=_h[c],a.fillRect(0,h-l/e*512/2,16,l/e*512)}),Fi(r,!0,n)}function Ev(){let[i,t]=ni(128,128),e=Sc(3868);t.fillStyle="rgb(128,128,128)",t.fillRect(0,0,128,128);for(let s=0;s<260;s++){let r=110+Math.round(e()*36);t.fillStyle=`rgb(${r},${r},${r})`,t.fillRect(0,Math.floor(e()*128),128,1)}let n=Fi(mh(i,.8),!1,4,!0);return n.repeat.set(2,2),n}function wc(i,t){let e=ph[i],n=Math.min(e.aniz,t||1),s=i==="dusuk"||i==="sade",r=new Map,a=[],o=g=>(g&&a.push(g),g),l=g=>new Re(g),c={baslikPlastik:()=>l({color:1973794,roughness:.55}),baslikIc:()=>l({color:526346,roughness:.9}),metalCelik:()=>l({color:13619928,metalness:1,roughness:.32}),metalFirca:()=>l({color:13093584,metalness:1,roughness:.38,normalMap:s?null:o(Ev()),normalScale:new it(.35,.35)}),kalay:()=>l({color:12896462,metalness:1,roughness:.3}),altin:()=>l({color:14266447,metalness:1,roughness:.28}),kapAlu:()=>l({map:o(Av(n)),metalness:.55,roughness:.42}),kapUst:()=>l({color:12041154,metalness:.9,roughness:.35}),cipGovde:()=>l({color:1513242,roughness:.62}),cipUst:()=>l({map:o(Sv(n)),roughness:.62}),kristal:()=>l({map:o(wv(n)),metalness:.95,roughness:.3}),kristalYan:()=>l({color:13225170,metalness:.95,roughness:.3}),resetTaban:()=>l({color:1710622,roughness:.55}),resetDugme:()=>l({color:14207392,roughness:.5}),ayak:()=>l({color:3487034,roughness:.85}),pcbKenar:()=>l({color:10723188,roughness:.7}),jak:()=>l({color:1579035,roughness:.5}),koyu:()=>l({color:657932,roughness:.95}),smdDirenc:()=>l({color:1776413,roughness:.5}),smdKond:()=>l({color:11045722,roughness:.55}),bbYan:()=>l({color:15526111,roughness:.62}),klips:()=>l({color:12094026,metalness:1,roughness:.38}),dupont:()=>l({color:2763312,roughness:.55}),butonKapak:()=>l({color:14172995,roughness:.42})};function u(g){if(!r.has(g)){let M=c[g];if(!M)throw new Error("bilinmeyen malzeme "+g);r.set(g,M())}return r.get(g)}function d(g){let M={color:new Qt(g).lerp(new Qt(16777215),.35),emissive:new Qt(g),emissiveIntensity:0,roughness:.16,metalness:0,transparent:!s,opacity:s?1:.8,depthWrite:!0};return f(i==="yuksek"?new Ia({...M,clearcoat:1,clearcoatRoughness:.08}):l(M))}let h=[],f=g=>(h.push(g),g);return{duzey:i,aniz:n,mat:u,ledKubbe:d,kayit:o,kayitMat:f,ek:g=>(i==="sade"?{smd:!0}:{smd:!0,soket:i!=="dusuk",ledIc:i!=="dusuk"})[g]??!1,dispose(){for(let g of r.values())g.dispose();for(let g of h)g.dispose();for(let g of a)g.dispose()},birak(g){let M=new Set(r.values()),m=new Set;for(let b of M)for(let S of Object.values(b))S?.isTexture&&m.add(S);let p=(b,S)=>{let y=b.indexOf(S);y>=0&&b.splice(y,1)};g.traverse(b=>{b.geometry?.dispose();for(let S of[].concat(b.material||[]))if(!M.has(S)){for(let y of Object.values(S))y?.isTexture&&!m.has(y)&&(y.dispose(),p(a,y));S.dispose(),p(h,S)}})}}}var Tv="uyumlu",Cv={uyumlu:[[0,0],[66.38,0],[67.9,1.52],[67.9,14.3],[68.58,14.98],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],gercek:[[0,0],[64.52,0],[66.04,1.52],[66.04,12.95],[68.58,15.49],[68.58,48.26],[66.04,50.8],[66.04,53.34],[0,53.34]],dikdortgen:[[0,0],[68.58,0],[68.58,53.34],[0,53.34]]},xh=[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]],fn=(i,t,e,n,s,r)=>{let a=new xe(i,t,e);return a.translate(n,s,r),a},Gr=(i,t,e,n,s,r,a)=>{let o=new Fn(i,t,e,2,n);return o.translate(s,r,a),o},yh=(i,t,e,n,s,r=16,a=i)=>{let o=new an(a,i,t,r);return o.translate(e,n,s),o},Rv=i=>i.index?i.toNonIndexed():i;function pn(i,t,e=!0){let n=new Nt(kn(i.map(Rv),!1),t);return n.castShadow=n.receiveShadow=e,n}function vh(i,t,e,n=16){let s=new us(i,{depth:t,bevelEnabled:!1,curveSegments:n});return s.rotateX(Math.PI/2),s.translate(0,e,0),s}var Iv=(i,t,e,n=24)=>{let s=new cs;return s.absarc(i,t,e,0,Math.PI*2,!0),s.curves.length&&(s.autoClose=!0),s};function Ac(i,{logo:t=!0}={}){let e=new Ye;e.name="kart-fiziksel";let n=i.duzey,s=n!=="dusuk",r={sade:16,dusuk:16,orta:24,yuksek:32}[n],a=i.ek("smd")?jf(n==="yuksek"?1.45:1):[],o=Qf(n,{smd:a,logo:t});for(let G of Object.values(o))i.kayit(G);let l=nn.x-nn.w/2,c=nn.z-nn.d/2,u=new mi(Cv[Tv].map(([G,et])=>new it(G,et)));for(let[G,et]of xh)u.holes.push(Iv(G,et,1.6,r));let d=vh(u,1.6,0,r),h=d.attributes.position,f=d.attributes.uv;for(let G=0;G<h.count;G++)f.setXY(G,h.getX(G)/nn.w,1-h.getZ(G)/nn.d);d.translate(l,zt,c);let g=new Re({map:o.albedo,roughness:o.orm?1:.45,metalness:o.orm?1:0});o.normal&&(g.normalMap=o.normal,g.normalScale=new it(n==="yuksek"?.8:.6,n==="yuksek"?.8:.6)),o.orm&&(g.roughnessMap=o.orm,g.metalnessMap=o.orm),i.kayitMat(g);let M=new Nt(d,[g,i.mat("pcbKenar")]);M.castShadow=M.receiveShadow=!0,e.add(M);let m=[];for(let[G,et]of xh){let q=Pe(G,et,zt-.8),lt=new an(1.6,1.6,1.6,r,1,!0);lt.translate(q.x,q.y,q.z),m.push(lt)}e.add(pn(m,i.mat("altin"))),e.add(pn(xh.map(([G,et])=>{let q=Pe(G,et,1.2);return yh(1.6,2.4,q.x,q.y,q.z,14)}),i.mat("ayak")));let p=[],b=[],S=[],y=(G,et,q)=>{let lt=G.map(x=>et[x]),pt=Math.min(...lt)-1.27,vt=Math.max(...lt)+1.27,Ut=q-1.27,Ht=q+1.27,Bt=7.1,D=Pe((pt+vt)/2,q,zt+Bt/2);p.push(Gr(vt-pt,Bt,2.54,.25,D.x,D.y,D.z));let ge=Pe((pt+vt)/2,q,zt+Bt+.02);b.push(fn(vt-pt-.5,.04,2,ge.x,ge.y,ge.z));let se=new mi([new it(pt,Ut),new it(vt,Ut),new it(vt,Ht),new it(pt,Ht)]);for(let x of lt){let W=new cs([new it(x-.53,q-.53),new it(x-.53,q+.53),new it(x+.53,q+.53),new it(x+.53,q-.53)]);if(se.holes.push(W),s){let Q=Pe(x,q,zt+Bt+.25);S.push(fn(.42,.4,.22,Q.x,Q.y,Q.z-.3))}}let R=vh(se,1.4,Bs,4);R.translate(l,0,c),p.push(R)};y(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],Oi,Hr),y(["7","6","5","4","3","2","1","0"],Oi,Hr),y(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],bs,qi),y(["A0","A1","A2","A3","A4","A5"],Ms,qi);let E=[],v=Pe(64.87,26.67,zt+1.25);p.push(Gr(5.08,2.5,7.62,.2,v.x,v.y,v.z));for(let G of[63.6,66.14])for(let et of[24.13,26.67,29.21]){let q=Pe(G,et,zt+5.25);E.push(fn(.64,5.5,.64,q.x,q.y,q.z));let lt=new an(.06,.45,.5,4);lt.rotateY(Math.PI/4),lt.translate(q.x,zt+8.25,q.z),E.push(lt)}let T=[],_=[],A=[];v=Pe(1.65,15.24,zt+5.45),T.push(Gr(16,10.9,12,.5,v.x,v.y,v.z));let P=new mi([new it(-4.2,-3.9),new it(4.2,-3.9),new it(4.2,2.6),new it(3,3.9),new it(-3,3.9),new it(-4.2,2.6)]),k=new us(P,{depth:.3,bevelEnabled:!1});k.rotateY(-Math.PI/2),v=Pe(-6.36,15.24,zt+5.45),k.translate(v.x+.25,v.y,v.z),_.push(k);let N=new xe(.14,3,5.2);v=Pe(-6.42,15.24,zt+5),N.translate(v.x,v.y,v.z);for(let G of[-6.2,6.2]){let et=Pe(4.5,15.24+G,zt-.4);T.push(fn(1.2,1.4,.3,et.x,et.y,et.z))}v=Pe(5.2,44.9,zt+5.5),A.push(Gr(14,11,9,.8,v.x,v.y,v.z));let z=new Ca(3.2,.32,8,28);z.rotateY(Math.PI/2),v=Pe(-1.84,44.9,zt+5.8),z.translate(v.x,v.y,v.z),A.push(z);let L=new xa(3.15,28);L.rotateY(-Math.PI/2),L.translate(v.x-.03,v.y,v.z),_.push(L);let F=new an(1,1,1.2,16);F.rotateZ(Math.PI/2),F.translate(v.x+.4,v.y,v.z),T.push(F);let X=[],$=[],ft=[[0,0],[3.1,0],[3.12,1],[2.95,1.2],[3.12,1.4],[3.15,4.9],[3.05,5.35],[2.85,5.5],[0,5.5]].map(([G,et])=>new it(G,et)),j=[];for(let[G,et]of[[13,31.5],[19.5,37.5]]){let q=Pe(G,et,zt),lt=new ki(ft,s?32:20);lt.rotateY(Math.PI*.8),lt.translate(q.x,q.y+.35,q.z),j.push(lt);let pt=new an(2.75,2.75,.06,28);pt.translate(q.x,q.y+5.87,q.z),X.push(pt);for(let vt of[0,Math.PI/2]){let Ut=new xe(4.2,.1,.32);Ut.rotateY(vt+.3),Ut.translate(q.x,q.y+5.9,q.z),_.push(Ut)}$.push(fn(6.3,.35,6.3,q.x,q.y+.175,q.z))}v=Pe(21,27,zt);let rt=new mi;rt.absarc(-3.05,0,2.2,Math.PI/2,Math.PI*1.5,!1),rt.absarc(3.05,0,2.2,-Math.PI/2,Math.PI/2,!1);let ut=vh(rt,3.4,3.5,12);ut.translate(v.x,v.y,v.z);let Wt=new gi(6,2.25);if(Wt.rotateX(-Math.PI/2),Wt.translate(v.x,v.y+3.54,v.z),_.push(fn(9.6,.15,3.6,v.x,v.y+.075,v.z)),v=Pe(44.5,36.8,zt+1.3),p.push(Gr(37.5,2.6,9.2,.3,v.x,v.y,v.z)),s)for(let G=0;G<14;G++)for(let et of[-1,1]){let q=Pe(27.99+G*2.54,36.8+et*4.35,zt+2.62);_.push(fn(1,.04,.5,q.x,q.y,q.z))}let kt=[];for(let G=0;G<14;G++)for(let et of[-1,1]){let q=27.99+G*2.54,lt=Pe(q,36.8+et*3.95,zt+4.1);kt.push(fn(.5,.3,.6,lt.x,lt.y,lt.z));let pt=Pe(q,36.8+et*4.15,zt+3.3);kt.push(fn(.5,1.6,.26,pt.x,pt.y,pt.z));let vt=Pe(q,36.8+et*4.15,zt+2.62);kt.push(fn(.28,.4,.26,vt.x,vt.y,vt.z))}let pe=i.mat("cipGovde"),me=i.mat("cipUst"),ae=new Nt(new Fn(35.56,3.3,7.4,2,.3),[pe,pe,me,pe,pe,pe]);ae.position.copy(Pe(44.5,36.8,zt+2.6+1.65)),ae.castShadow=ae.receiveShadow=!0,e.add(ae);let tt=[],st=[];v=Pe(20,17.5,zt+.45),tt.push(fn(5,.9,5,v.x,v.y,v.z));for(let[G,et,q,lt]of[[-2.6,0,.25,4.2],[2.6,0,.25,4.2],[0,-2.6,4.2,.25],[0,2.6,4.2,.25]])st.push(fn(q,.2,lt,v.x+G,zt+.1,v.z+et));v=Pe(15,47.5,zt+.8),tt.push(fn(6.5,1.6,3.5,v.x,v.y,v.z));for(let G of[-2.3,0,2.3])st.push(fn(.7,.3,1.4,v.x+G,zt+.15,v.z+2.2));v=Pe(15,44.6,zt+.2),st.push(fn(3.2,.3,3,v.x,v.y,v.z)),v=Pe(7.4,5.2,zt+1.6);let xt=[Gr(6,3.2,6,.45,v.x,v.y,v.z)];T.push(fn(6.1,.3,6.1,v.x,zt+3.35,v.z));for(let G of[-2.4,2.4])for(let et of[-2.4,2.4])_.push(yh(.32,.06,v.x+G,zt+3.53,v.z+et,10));for(let G of[-3.3,3.3])for(let et of[-2.25,2.25])T.push(fn(.5,1.6,.7,v.x+G,zt+.8,v.z+et));let Xt=new Nt(yh(1.7,1.3,v.x,zt+4.1,v.z,24),i.mat("resetDugme"));if(Xt.castShadow=Xt.receiveShadow=!0,e.add(pn(p,i.mat("baslikPlastik")),pn(b,i.mat("baslikIc")),pn(E,i.mat("altin")),pn(T,i.mat("metalFirca")),pn(_,i.mat("koyu")),pn(A,i.mat("jak")),pn(j,i.mat("kapAlu")),pn(X,i.mat("kapUst")),pn($,i.mat("baslikPlastik")),pn([ut],i.mat("kristalYan")),pn([Wt],i.mat("kristal"),!1),pn(kt,i.mat("metalCelik")),pn(tt,pe),pn(st,i.mat("kalay")),pn(xt,i.mat("resetTaban")),pn([N],i.mat("baslikPlastik")),Xt),S.length&&e.add(pn(S,i.mat("altin"),!1)),a.length){let G=new xe(1,1,1),et=new xe(1,1,1),q=new Re({color:16777215,roughness:.5});i.kayitMat(q);let lt=new pi(G,q,a.length),pt=new pi(et,i.mat("kalay"),a.length*2),vt=new Ke,Ut=new Qt(1776413),Ht=new Qt(11045722);a.forEach((Bt,D)=>{let ge=Bt.tur==="direnc"?.45:.7,se=Pe(Bt.x,Bt.z,zt+ge/2),R=Bt.yatay?Bt.w:Bt.d,x=Bt.yatay?Bt.d:Bt.w,V=R*.18;vt.position.copy(se),vt.rotation.set(0,Bt.yatay?0:Math.PI/2,0),vt.scale.set(R-2*V+.02,ge,x),vt.updateMatrix(),lt.setMatrixAt(D,vt.matrix),lt.setColorAt(D,Bt.tur==="direnc"?Ut:Ht);for(let W of[-1,1])vt.position.set(se.x+(Bt.yatay?W*(R/2-V/2):0),se.y,se.z+(Bt.yatay?0:W*(R/2-V/2))),vt.scale.set(V,ge+.02,x+.02),vt.updateMatrix(),pt.setMatrixAt(D*2+(W>0?1:0),vt.matrix)}),e.add(lt,pt)}let It=(G,et,q)=>{let lt=new Re({color:new Qt(q).multiplyScalar(.55),emissive:q,emissiveIntensity:0,roughness:.25,transparent:!1});i.kayitMat(lt);let pt=Pe(G,et,zt+.25),vt=new Nt(new xe(1,.5,.8),lt);vt.position.copy(pt),e.add(vt);let Ut=new Nt(kn([fn(.32,.42,.82,pt.x-.66,pt.y-.04,pt.z),fn(.32,.42,.82,pt.x+.66,pt.y-.04,pt.z)]),i.mat("kalay"));return e.add(Ut),Ht=>{lt.emissiveIntensity=Ht?1.1:0,lt.color.set(Ht?q:new Qt(q).multiplyScalar(.55))}},te=It(28.5,10.6,16754470),we=It(61.5,10.6,4448378);return It(28.5,13.3,16766287),It(28.5,15.4,16766287),{grup:e,kanca:{ledL:te,ledOn:we}}}var nn={x:0,z:32,w:68.58,d:53.34},Ct={x:0,z:-38,w:82.5,d:54.5,h:8.5},zt=4,Bs=zt+8.5,je=Ct.h,Kn=2.54,Pv=i=>nn.x-nn.w/2+i,kv=i=>nn.z-nn.d/2+i,Pe=(i,t,e=zt)=>new I(Pv(i),e,kv(t)),Oi={SCL:21.336,SDA:23.876,AREF:26.416,"GND-D":28.956,13:31.496,12:34.036,11:36.576,10:39.116,9:41.656,8:44.196,7:48.26,6:50.8,5:53.34,4:55.88,3:58.42,2:60.96,1:63.5,0:66.04},bs={NC:26.416,IOREF:28.956,RESET:31.496,"3.3V":34.036,"5V":36.576,GND1:39.116,GND2:41.656,VIN:44.196},Ms={A0:49.276,A1:51.816,A2:54.356,A3:56.896,A4:59.436,A5:61.976},Hr=2.54,qi=50.8;function Mi(i){let t=String(i);if(t in Oi)return Pe(Oi[t],Hr,Bs);if(t in bs)return Pe(bs[t],qi,Bs);if(t in Ms)return Pe(Ms[t],qi,Bs);throw new Error("bilinmeyen pin "+i)}var ip=["3","5","6","9","10","11"];function Lv(i){let t=String(i);return t==="13"?"pin-13":t==="0"||t==="1"?"pin-rx-tx":ip.includes(t)?"pin-pwm":/^\d+$/.test(t)?"pin-dijital":t.startsWith("GND")?"pin-gnd":{"5V":"pin-5v","3.3V":"pin-3v3",VIN:"pin-vin",AREF:"pin-aref",IOREF:"pin-ioref",RESET:"pin-reset",SDA:"pin-sda-scl",SCL:"pin-sda-scl"}[t]||(/^A\d$/.test(t)?"pin-analog":null)}function ep(i){let t=String(i);return t==="0"?"0. pin (RX)":t==="1"?"1. pin (TX)":ip.includes(t)?`${t}. pin (~${t})`:/^\d+$/.test(t)?`${t}. pin`:t.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[t]||t}function zs(i,t,e,n,s=0,r=0,a=0){let o=new Ke;return o.position.set(s,r,a),o.userData={...i,yari:[t/2,e/2,n/2],hacim:i.hacim??t*e*n},o.updateMatrixWorld(),o}var Fs={a:13.97,b:11.43,c:8.89,d:6.35,e:3.81,f:-3.81,g:-6.35,h:-8.89,i:-11.43,j:-13.97},vn=i=>Ct.x-36.83+(i-1)*Kn,Qe=(i,t,e=je)=>new I(vn(i),e,Ct.z+Fs[t]),On={"yakin-":19.05,"yakin+":21.59,"uzak-":-19.05,"uzak+":-21.59},Os=[2,3,4,5,6,8,9,10,11,12,14,15,16,17,18,20,21,22,23,24,26,27,28,29,30];function ii(i,t,e,n=je){let s=Os.reduce((r,a)=>Math.abs(a-e)<Math.abs(r-e)?a:r,Os[0]);return new I(vn(s),n,Ct.z+On[i+t])}function bh(i,t,e,n,s,r){let a=new xe(i,t,e);return a.translate(n,s,r),a}function to(i){i.traverse(t=>{if(t.isMesh&&!t.isInstancedMesh){let e=!t.material.isMeshBasicMaterial&&t.material.visible!==!1;t.castShadow=e,t.receiveShadow=e}})}function np(i,t){let e=new Nt(kn(i.map(n=>n.index?n.toNonIndexed():n),!1),t);return e.matrixAutoUpdate=!1,e}function Sh(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}var wh=1;function sp(i){let t=new os(i);return t.colorSpace=ln,t.anisotropy=wh,t}var Mh=(()=>{let i=null;return()=>{if(i)return i;let[t,e]=Sh(64,64),n=e.createRadialGradient(32,32,0,32,32,32);return n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.25,"rgba(255,255,255,0.55)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),i=new os(t),i}})(),on={};function Vs(){return on.hazir||Object.assign(on,{hazir:!0,pcbKenar:new Re({color:679785,roughness:.45}),siyah:new Re({color:2500140,roughness:.55}),koyu:new Hn({color:789519}),metal:new Re({color:14014686,metalness:1,roughness:.28}),altin:new Re({color:14858588,metalness:1,roughness:.32}),cip:new Re({color:1776416,roughness:.72}),ayak:new Re({color:3816e3,roughness:.9}),bbYan:new Re({color:15657955,roughness:.78}),bbDelik:new Hn({color:3421242}),serit:new Re({color:13225170,metalness:.9,roughness:.35}),vurgu:new Hn({color:8146431,transparent:!0,opacity:.11,depthWrite:!1}),vurguCizgi:new Ar({color:6962672}),secim:new Hn({color:1483594,transparent:!0,opacity:.85,depthWrite:!1}),gorunmez:new Hn({visible:!1})}),on}function rp(i){Vs();let t=new Ye;t.name="kart";let e=Ac(wc("sade",wh),{logo:!0});e.grup.traverse(b=>{b.isInstancedMesh&&(b.userData.park=!0)}),t.add(e.grup);let n=(b,S)=>{let y=b.map(E=>S[E]);return{x1:Math.min(...y)-1.27,x2:Math.max(...y)+1.27}},s=n(["SCL","SDA","AREF","GND-D","13","12","11","10","9","8"],Oi),r=n(["7","6","5","4","3","2","1","0"],Oi),a=n(["NC","IOREF","RESET","3.3V","5V","GND1","GND2","VIN"],bs),o=n(["A0","A1","A2","A3","A4","A5"],Ms),l=(b,S,y,E)=>{let v=new Mr(new Is({map:Mh(),color:y,blending:qn,depthWrite:!1,transparent:!0}));return v.scale.set(6,6,1),v.position.copy(Pe(b,S,zt+1.1)),v.visible=!1,t.add(v),T=>{E(T),v.visible=T}},c=l(28.5,10.6,16754470,e.kanca.ledL),u=l(61.5,10.6,4448378,e.kanca.ledOn),d=(b,S,y,E,v,T)=>{let _=Pe(b,S,y);return[_.x,_.y,_.z,E,v,T]},h={kart:[nn.x,7,nn.z,nn.w,14,nn.d],usb:d(1.65,15.24,zt+5.45,17,11.6,12.8),"guc-girisi":d(5.2,44.9,zt+5.5,15,11.8,9.8),mikrodenetleyici:d(44.5,36.8,zt+3,38.5,6.2,10.2),"dijital-pinler":d((s.x1+r.x2)/2,Hr,zt+4.3,r.x2-s.x1+1.2,9.4,3.6),"analog-pinler":d((o.x1+o.x2)/2,qi,zt+4.3,o.x2-o.x1+1.2,9.4,3.6),"guc-pinleri":d((a.x1+a.x2)/2,qi,zt+4.3,a.x2-a.x1+1.2,9.4,3.6),reset:d(7.4,5.2,zt+2.4,7,5,7)},f=[],g=(b,S)=>{let[y,E,v,T,_,A]=S,P=zs({parca:b.kesif,...b},T,_,A,y,E,v);f.push(P),i.push(P)};g({kesif:"kart",parca:"kart"},h.kart);for(let b of["usb","guc-girisi","mikrodenetleyici","dijital-pinler","analog-pinler","guc-pinleri","reset"])g({kesif:b},h[b]);g({kesif:"usb-cipi"},d(20,17.5,zt+1.1,7,2.6,7)),g({kesif:"kristal"},d(21,27,zt+1.9,11.5,4.2,5.4)),g({kesif:"regulator"},d(15,46.2,zt+1.1,7.4,2.6,6.8));for(let[b,S]of[[13,31.5],[19.5,37.5]])g({kesif:"kondansator"},d(b,S,zt+2.9,7.2,6.2,7.2));g({kesif:"icsp"},d(64.87,26.67,zt+4.4,6.4,9.2,9)),g({kesif:"led-l"},d(27.6,10.6,zt+.8,4.6,1.8,2.3)),g({kesif:"led-txrx"},d(27.3,14.35,zt+.8,4.8,1.8,4.4)),g({kesif:"led-on"},d(62.9,10.6,zt+.8,5.4,1.8,2.3));for(let[b,S]of[[13.97,50.8],[15.24,2.54],[66.04,45.72],[66.04,17.78]])g({kesif:"montaj-deligi"},d(b,S,zt+.3,4.4,1.6,4.4));let M=[];for(let[b,S]of[[Oi,Hr],[bs,qi],[Ms,qi]])for(let[y,E]of Object.entries(b)){let v=Lv(y);if(!v)continue;let T=Bs+1.2-zt;g({kesif:v,parca:"pin",pin:y,ozel:ep(y),minAdim:Kn,minPx:12},d(E,S,zt+T/2,2.5,T,2.6)),M.push({ad:y,kesif:v,ozel:ep(y),nokta:Pe(E,S,Bs+.6)})}let m=(b,S,y)=>Pe(b,S,y),p=[{id:"usb",nokta:m(1.65,15.24,zt+12)},{id:"guc-girisi",nokta:m(5.2,44.9,zt+12.2)},{id:"mikrodenetleyici",nokta:m(44.5,36.8,zt+6.6)},{id:"usb-cipi",nokta:m(20,17.5,zt+1.6)},{id:"kristal",nokta:m(21,27,zt+4.3)},{id:"regulator",nokta:m(15,46.5,zt+2.4)},{id:"kondansator",nokta:m(13,31.5,zt+6.2)},{id:"reset",nokta:m(7.4,5.2,zt+5.4)},{id:"icsp",nokta:m(64.87,26.67,zt+9.4)},{id:"led-l",nokta:m(28.5,10.6,zt+1)},{id:"led-txrx",nokta:m(28.5,14.35,zt+1)},{id:"led-on",nokta:m(61.5,10.6,zt+1)},{id:"dijital-pinler",nokta:m(46,10.6,zt+.8)},{id:"analog-pinler",nokta:m(55.6,42,zt+.8)},{id:"guc-pinleri",nokta:m(35.3,42,zt+.8)},{id:"montaj-deligi",nokta:m(66.04,17.78,zt+.8)}];return{grup:t,alanlar:h,ledL:c,ledOn:u,vekiller:f,pinler:M,kesifNoktalari:p}}function Dv(){let t=Math.round(2048*Ct.d/Ct.w),e=2048/Ct.w,[n,s]=Sh(2048,t),r=o=>(o+Ct.w/2)*e,a=o=>(o+Ct.d/2)*e;s.fillStyle="#f4f2ec",s.fillRect(0,0,2048,t),s.fillStyle="#dcd8cf",s.fillRect(0,a(-1.5),2048,3*e),s.fillStyle="#cfcac0",s.fillRect(0,a(-.35),2048,.7*e);for(let o of[1,-1])s.fillStyle="#d23b3b",s.fillRect(r(-37),a(o*23.6)-.3*e,r(37)-r(-37),.6*e),s.fillStyle="#2f62c9",s.fillRect(r(-37),a(o*16.9)-.3*e,r(37)-r(-37),.6*e);s.font=`700 ${2.1*e}px "DejaVu Sans", Arial, sans-serif`,s.textAlign="center",s.textBaseline="middle";for(let o of[1,-1])for(let l of[-39.4,39.4])s.fillStyle="#d23b3b",s.fillText("+",r(l),a(o*On["yakin+"])),s.fillStyle="#2f62c9",s.fillText("\u2212",r(l),a(o*On["yakin-"]));s.fillStyle="#8a8478",s.font=`600 ${1.45*e}px "DejaVu Sans", Arial, sans-serif`;for(let[o,l]of Object.entries(Fs))for(let c of[-39.3,39.3])s.fillText(o,r(c),a(l));for(let o of[1,5,10,15,20,25,30])for(let l of[1,-1])s.fillText(String(o),r(-36.83+(o-1)*Kn),a(l*15.45));return sp(n)}function ap(i){Vs();let t=new Ye;t.name="breadboard";let e=new Re({map:Dv(),roughness:.78}),n=on.bbYan.clone(),s=[n,n,e,n,n,n],r=new Nt(new Fn(Ct.w,Ct.h,Ct.d,3,1.1),s);r.position.set(Ct.x,Ct.h/2,Ct.z),t.add(r);let a=[],o=v=>a.push(bh(1.15,.04,1.15,v.x,je+.02,v.z));for(let v=1;v<=30;v++)for(let T of Object.keys(Fs))o(Qe(v,T));for(let v of Object.keys(On))for(let T of Os)o(new I(vn(T),0,Ct.z+On[v]));t.add(np(a,on.bbDelik));let l=[];for(let v=1;v<=30;v++)for(let T of[1,-1])l.push(bh(1.5,1.1,11.4,vn(v),je-2.3,Ct.z+T*8.89));for(let v of Object.values(On))l.push(bh(vn(30)-vn(2)+1.6,1.1,1.5,Ct.x,je-2.3,Ct.z+v));let c=np(l,on.serit);c.visible=!1,t.add(c),to(t);let u=new xe(1.7,.06,1.7),d=new pi(u,on.secim,25);d.count=0,d.frustumCulled=!1,t.add(d);let h=new Ie;function f(v){d.count=v.length,v.forEach((T,_)=>{h.makeTranslation(T.x,je+.06,T.z),d.setMatrixAt(_,h)}),d.instanceMatrix.needsUpdate=!0}function g(v){let T=v.x-Ct.x,_=v.z-Ct.z,A=Math.round((T+36.83)/Kn)+1,P=null,k=1.6;for(let[N,z]of Object.entries(Fs)){let L=Math.hypot(T-(-36.83+(A-1)*Kn),_-z);A>=1&&A<=30&&L<k&&(k=L,P={tur:"sutun",sutun:A,satir:N})}for(let[N,z]of Object.entries(On))Math.abs(_-z)<1.3&&Os.some(L=>Math.abs(T-(-36.83+(L-1)*Kn))<1.3)&&(P={tur:"ray",ray:N});if(!P)return null;if(P.tur==="sutun"){let N="abcde".includes(P.satir)?"abcde":"fghij";return{...P,delikler:[...N].map(z=>Qe(P.sutun,z)),ad:`${P.sutun}. s\xFCtun, ${N[0]}-${N[4]} sat\u0131rlar\u0131`}}return{...P,delikler:Os.map(N=>new I(vn(N),0,Ct.z+On[P.ray])),ad:P.ray.endsWith("+")?"Art\u0131 (+) ray\u0131":"Eksi (\u2212) ray\u0131"}}let M={breadboard:[Ct.x,Ct.h/2,Ct.z,Ct.w,Ct.h+1,Ct.d],"bb-yakin-raylar":[Ct.x,je,Ct.z+20.32,76,1.4,5.6],"bb-satirlar":[Ct.x,je,Ct.z,77,1.4,31],"bb-kanal":[Ct.x,je,Ct.z,80,1.2,3.2]},m=[],p=(v,T,_,A,P,k,N)=>{let z=zs({parca:v.kesif,bb:!0,...v},T,_,A,P,k,N);m.push(z),i.push(z)},b=je-.1,S=.8;p({kesif:"breadboard"},Ct.w,Ct.h+1,Ct.d,Ct.x,Ct.h/2,Ct.z);for(let v=1;v<=30;v++)for(let[T,_]of[[1,"a-e"],[-1,"f-j"]])p({kesif:"serit",ozel:`${v}. s\xFCtun, ${_} sat\u0131rlar\u0131`,minAdim:Kn,minPx:12},2.5,S,12.7,vn(v),b,Ct.z+T*8.89);for(let v of[1,-1]){let T=v>0?"karta yak\u0131n taraf":"uzak taraf";p({kesif:"arti-ray",ozel:T,minAdim:Kn,minPx:8},81.2,S,4.08,Ct.x,b,Ct.z+v*22.36),p({kesif:"eksi-ray",ozel:T,minAdim:Kn,minPx:8},81.2,S,4.02,Ct.x,b,Ct.z+v*18.31),p({kesif:"koordinat",ozel:"s\xFCtun numaralar\u0131",minAdim:1.06,minPx:6},76.2,S,1.06,Ct.x,b,Ct.z+v*15.77),p({kesif:"koordinat",ozel:"sat\u0131r harfleri",minAdim:Kn,minPx:8},2.4,S,30.5,Ct.x+v*39.3,b,Ct.z)}p({kesif:"orta-kanal"},76.2,S,5,Ct.x,b,Ct.z);let y=(v,T,_=je+1)=>new I(v,_,T),E=[{id:"breadboard",nokta:y(vn(6),Ct.z-8.89)},{id:"serit",nokta:y(vn(20),Ct.z-8.89),ozel:"20. s\xFCtun, f-j sat\u0131rlar\u0131"},{id:"orta-kanal",nokta:y(vn(27),Ct.z,je+.6)},{id:"koordinat",nokta:y(Ct.x-39.3,Ct.z+8.89)},{id:"arti-ray",nokta:y(vn(28),Ct.z+21.59),ozel:"karta yak\u0131n taraf"},{id:"eksi-ray",nokta:y(vn(4),Ct.z+19.05),ozel:"karta yak\u0131n taraf"}];return{grup:t,alanlar:M,grupBul:g,grupGoster:f,vekiller:m,kesifNoktalari:E,rontgen(v){c.visible=v;for(let T of new Set(s))T.transparent=v,T.opacity=v?.3:1,T.depthWrite=!v,T.needsUpdate=!0;r.castShadow=!v}}}function op(i,t){Vs();let[e,n,s,r,a,o]=t,l=new Ye,c=new xe(r+1.2,a+1.2,o+1.2),u=new Nt(c,on.vurgu);u.renderOrder=2;let d=new ma(new ya(c),on.vurguCizgi);return l.add(u,d),l.position.set(e,n,s),i.add(l),l}var Ec={kirmizi:15022389,sari:16498733,yesil:3126084};function lp(i="kirmizi"){Vs();let t=new Qt(Ec[i]),e=t.clone().lerp(new Qt(3813430),.45),n=new Ye;n.name="led";let s=[[0,0],[2.95,0],[2.95,1],[2.5,1],[2.5,5.6]];for(let b=1;b<=8;b++){let S=b/8*(Math.PI/2);s.push([2.5*Math.cos(S),5.6+2.5*Math.sin(S)])}let r=new Re({color:e,emissive:t,emissiveIntensity:0,roughness:.14,metalness:0}),a=new Nt(new ki(s.map(([b,S])=>new it(b,S)),20),r),o=4.2;a.position.y=o,n.add(a);let l=new Nt(new xe(.5,1,.5),on.metal),c=new Nt(new xe(.5,1,.5),on.metal);l.position.x=-1.27,c.position.x=1.27;let u=(b,S)=>{let y=new Nt(new xe(2.2,1,2.2),on.gorunmez);return y.position.x=b,y.userData={kesif:S,ince:!0,yari:[1.1,.5,1.1],hacim:60},y},d=u(-1.27,"anot"),h=u(1.27,"katot"),f=b=>{let S=22+(o+5-22)*b,y=17+(o+5-17)*b;l.scale.y=S,l.position.y=o-S/2,c.scale.y=y,c.position.y=o-y/2,d.scale.y=S,d.position.y=l.position.y,h.scale.y=y,h.position.y=c.position.y};f(1),n.add(l,c,d,h);let g=zs({kesif:"led"},6.6,8.8,6.6,0,o+4.1,0);n.add(g);let M=new Mr(new Is({map:Mh(),color:t,blending:qn,depthWrite:!1,transparent:!0}));M.scale.set(20,20,1),M.position.y=o+5.5,M.visible=!1,n.add(M);let m=new Nt(new gi(30,30),new Hn({map:Mh(),color:t,blending:qn,depthWrite:!1,transparent:!0,opacity:.6}));m.rotation.x=-Math.PI/2,m.position.y=.12,m.visible=!1,n.add(m);let p=new ks(t,0,42,2);return p.position.y=o+6,n.add(p),to(n),n.userData={ac(b){let S=typeof b=="number"?b:b?1:0;n.userData.yanik=S>0,r.emissiveIntensity=1.05*S,r.color.copy(e).lerp(t,S),M.visible=m.visible=S>.02,M.material.opacity=Math.min(1,S*1.15),m.material.opacity=.6*S,p.intensity=380*S},bacak:f,tepe:new I(0,o+8.2,0),havuz:m,vekiller:[g,d,h],kesifYerleri:b=>[["led",new I(0,o+11.2,0)],["anot",new I(-1.27,b<.5?o-15:o-2,0)],["katot",new I(1.27,b<.5?o-6:o-2,0)]]},n}var _h={siyah:"#1d1d1d",kahve:"#7a4a24",kirmizi:"#d32f2f",turuncu:"#f57c00",altin:"#c9a33a"};function cp(i,t){Vs();let e=new Ye;e.name="direnc";let[n,s]=Sh(8,256);s.fillStyle="#d8c69c",s.fillRect(0,0,8,256);let r=[.18,.33,.48,.8];i.forEach((h,f)=>{s.fillStyle=_h[h],s.fillRect(0,(1-r[f])*256-12,8,24)});let a=new an(1.1,1.1,4.6,16);a.rotateZ(Math.PI/2);let o=new Nt(a,new Re({map:sp(n),roughness:.55})),l=new Re({color:14206620,roughness:.55}),c=3.4;o.position.y=c,e.add(o);for(let h of[-1,1]){let f=new Nt(new Yi(1.32,14,10),l);f.scale.set(.75,1,1),f.position.set(h*2.45,c,0),e.add(f);let g=new Nt(new xe(t/2-2.9,.5,.5),on.metal);g.position.set(h*((t/2+2.9)/2),c,0);let M=new Nt(new xe(.5,c+7,.5),on.metal);M.position.set(h*t/2,(c-7)/2,0),e.add(g,M)}to(e);let u=zs({kesif:"direnc"},t+1.4,c+9,3.2,0,(c+1.8-7.2)/2,0),d=zs({kesif:"renk-bantlari"},3.6,2.8,2.8,0,c,0);return e.add(u,d),e.userData={tepe:new I(0,c+1.4,0),uclar:[new I(-t/2,0,0),new I(t/2,0,0)],H:c,vekiller:[u,d],kesifYerleri:()=>[["direnc",new I(t/2-1.2,c+2.6,0)],["renk-bantlari",new I(-.6,c+2.2,0)]]},e}function up(i,t,e){i.position.set((t.x+e.x)/2,je,(t.z+e.z)/2),i.rotation.set(0,-Math.atan2(e.z-t.z,e.x-t.x),0)}function hp(){Vs();let i=new Ye;i.name="buton";let t=new Nt(new Fn(6,3.4,6,2,.45),on.siyah);t.position.y=1.7;let e=new Nt(new xe(6.2,.3,6.2),on.metal);e.position.y=3.55;let n=new Nt(new an(1.8,1.8,1.7,24),new Re({color:14172995,roughness:.42}));n.position.y=4.55,i.add(t,e,n);for(let r of[-2.54,2.54])for(let a of[-3.81,3.81]){let o=new Nt(new xe(.6,7,.35),on.metal);o.position.set(r,-3.2,a),i.add(o)}to(i);let s=zs({kesif:"buton"},7.6,12.9,8.4,0,-.45,0);return i.add(s),i.userData={bas(r){n.position.y=r?3.95:4.55},tepe:new I(0,5.6,0),vekiller:[s],kesifYerleri:()=>[["buton",new I(0,8.6,0)]]},i}var Ah={turuncu:16088064,siyah:2829104,kirmizi:13840175,sari:15909376,yesil:3054920,mavi:1994713,mor:8280002};function dp(i,t,e){Vs();let n=new Ye;n.name="kablo";let s=Ah[e]??e,r=(b,S)=>b.clone().add(new I(0,S,0)),a=r(i,6.2),o=r(t,6.2),l=a.distanceTo(o),c=new I((a.x+o.x)/2,Math.max(a.y,o.y)+7+l*.16,(a.z+o.z)/2),u=new Tr([a,r(a,4),c,r(o,4),o],!1,"centripetal"),d=56,h=6,f=new Nt(new hs(u,d,.62,h,!1),new Re({color:s,roughness:.45}));n.add(f);let g=[];for(let b of[i,t]){let S=new Nt(new Fn(2.5,6,2.5,2,.3),new Re({color:2763312,roughness:.5}));S.position.copy(b).add(new I(0,3.1,0));let y=new Nt(new xe(.6,6,.6),on.metal);y.position.copy(b).add(new I(0,-2.9,0)),n.add(S,y),g.push(S,y)}to(n);let M=new Nt(new hs(u,24,1.9,6,!1),on.gorunmez);M.userData={kesif:"kablo",ince:!0,hacim:120},n.add(M);let m=[M];for(let b of[i,t]){let S=zs({kesif:"kablo"},3.4,6.6,3.4,b.x,b.y+3.1,b.z);n.add(S),m.push(S)}let p=f.geometry.index.count;return n.userData={egri:u,vekiller:m,kesifYerleri:()=>[["kablo",u.getPoint(.5)]],buyut(b){f.geometry.setDrawRange(0,Math.floor(b*d)*h*6),g[2].visible=g[3].visible=b>=1,b>=1&&f.geometry.setDrawRange(0,p)},yol:u.getSpacedPoints(40)},n}function fp(i,t,e=30){let n=[0];for(let u=1;u<t.length;u++)n.push(n[u-1]+t[u].distanceTo(t[u-1]));let s=n[n.length-1],r=new pi(new Yi(.85,8,6),new Hn({color:16764723}),e);r.frustumCulled=!1,r.renderOrder=3,i.add(r);let a=new Ie,o=new I,l=0,c=()=>{for(let u=0;u<e;u++){let d=(l+u*s/e)%s,h=1;for(;h<n.length-1&&n[h]<d;)h++;let f=(d-n[h-1])/Math.max(1e-6,n[h]-n[h-1]);o.lerpVectors(t[h-1],t[h],Math.min(1,Math.max(0,f))),r.setMatrixAt(u,a.makeTranslation(o.x,o.y,o.z))}r.instanceMatrix.needsUpdate=!0};return c(),{nesne:r,ilerlet(u,d=28){l=(l+u/1e3*d)%s,c()},gorunur(u){r.visible=u},sil(){i.remove(r),r.geometry.dispose(),r.material.dispose()}}}function pp(i){wh=Math.max(1,Math.min(8,i))}var no=["kirmizi","kirmizi","kahve","altin"],gp=["kahve","siyah","turuncu","altin"],Eh=26,Th={kirmizi:"K\u0131rm\u0131z\u0131",sari:"Sar\u0131",yesil:"Ye\u015Fil",turuncu:"Turuncu",siyah:"Siyah",mavi:"Mavi",mor:"Mor",kahve:"Kahverengi",altin:"Alt\u0131n"},mp={[no.join()]:"220 \u03A9 diren\xE7",[gp.join()]:"10 k\u03A9 diren\xE7"};function Nv(i,t,e,n={}){for(let s of i.nesne.userData.vekiller||[])s.userData.parca=t,n[s.userData.kesif]&&(s.userData.ozel=n[s.userData.kesif]),e.push(s)}function Tc(i,t,e="e"){let n=lp(i);n.userData.renk=i;let s=Qe(t,e),r=Qe(t+1,e),a=new I((s.x+r.x)/2,je,s.z);n.position.copy(a);let o={led:`${Th[i]} LED`,anot:"uzun bacak",katot:"k\u0131sa bacak"};return{nesne:n,tur:"led",kavram:"led",anotSutun:t,satir:e,ozel:o,pozlar:{takili:a,havada:a.clone().add(new I(0,Eh,0))}}}function eo(i,t,e,n="direnc"){let s=cp(i,t.distanceTo(e));s.userData.bantlar=i,up(s,t,e);let r=s.position.clone(),a={direnc:mp[i.join()],"renk-bantlari":`${i.map(o=>Th[o].toLocaleLowerCase("tr")).join(", ")}: ${mp[i.join()].replace(" diren\xE7","")}`};return{nesne:s,tur:"direnc",kavram:n,a:t,b:e,ozel:a,pozlar:{takili:r,havada:r.clone().add(new I(0,Eh*.75,0))}}}function Ki(i,t,e,n=""){return{nesne:dp(i,t,e),tur:"kablo",kavram:"kablo",bas:i,son:t,ozel:{kablo:`${Th[e]} kablo${n?`, ${n}`:""}`}}}function _p(i,t){let e={};if((i==="led"||i==="buton")&&(e.led1=Tc("kirmizi",15),e.r1=eo(no,Qe(16,"c"),ii("yakin","-",16)),e.k13=Ki(Mi(13),Qe(15,"a"),"turuncu","13. pin ile 15a deli\u011Fi aras\u0131nda"),e.kgnd=Ki(Mi("GND-D"),ii("yakin","-",14),"siyah","GND pini ile eksi (\u2212) ray\u0131 aras\u0131nda")),i==="buton"){let n=hp(),s=new I((Qe(20,"e").x+Qe(22,"e").x)/2,je,Ct.z);n.position.copy(s),e.buton={nesne:n,tur:"buton",kavram:"buton",pozlar:{takili:s,havada:s.clone().add(new I(0,Eh,0))}},e.r2=eo(gp,Qe(22,"c"),ii("yakin","-",22)),e.k5v=Ki(Mi("5V"),ii("yakin","+",24),"kirmizi","5V pini ile art\u0131 (+) ray\u0131 aras\u0131nda"),e.kplus=Ki(ii("yakin","+",20),Qe(20,"a"),"kirmizi","art\u0131 (+) ray\u0131 ile 20a deli\u011Fi aras\u0131nda"),e.k2=Ki(Mi(2),Qe(22,"d"),"sari","2. pin ile 22d deli\u011Fi aras\u0131nda")}i==="trafik"&&(e.ledK=Tc("kirmizi",8),e.ledS=Tc("sari",15),e.ledY=Tc("yesil",22),e.rK=eo(no,Qe(9,"c"),ii("yakin","-",9)),e.rS=eo(no,Qe(16,"c"),ii("yakin","-",16)),e.rY=eo(no,Qe(23,"c"),ii("yakin","-",23)),e.kK=Ki(Mi(10),Qe(8,"a"),"kirmizi","10. pin ile 8a deli\u011Fi aras\u0131nda"),e.kS=Ki(Mi(9),Qe(15,"a"),"sari","9. pin ile 15a deli\u011Fi aras\u0131nda"),e.kY=Ki(Mi(8),Qe(22,"a"),"yesil","8. pin ile 22a deli\u011Fi aras\u0131nda"),e.kgnd=Ki(Mi("GND-D"),ii("yakin","-",14),"siyah","GND pini ile eksi (\u2212) ray\u0131 aras\u0131nda"));for(let[n,s]of Object.entries(e))Nv(s,n,t,s.ozel);return e}function xp(i,t,e,n){let s=je+.8,r=je+6.2,a=je+e.nesne.userData.H,o=[i.bas.clone().setY(i.bas.y+.4),...i.nesne.userData.yol],l=Qe(t.anotSutun,t.satir,s),c=Qe(t.anotSutun+1,t.satir,s);return o.push(i.son.clone().setY(s),l,l.clone().setY(r),c.clone().setY(r),c),o.push(e.a.clone().setY(s),e.a.clone().setY(a),e.b.clone().setY(a),e.b.clone().setY(s),n.son.clone().setY(s)),o.push(...[...n.nesne.userData.yol].reverse(),n.bas.clone().setY(n.bas.y+.4)),o}var Uv=[.1,.84,.54],Ch={genel:{kutu:[-41.3,0,-65.3,41.3,15,58.7],yon:Uv},kart:{kutu:[-40.7,0,5.3,34.3,15,58.7],yon:[.08,.86,.5]},usb:{kutu:[-41.2,3.5,13,-22,15.3,28],yon:[-.78,.48,.42]},"guc-girisi":{kutu:[-37,3.5,44,-20,15.5,57],yon:[-.7,.5,.52]},cip:{kutu:[-10,3.5,35.5,30.5,10.5,48.5],yon:[.05,.86,.5]},dijital:{kutu:[-15,3.6,4,33.8,13,15],yon:[.04,.72,.69]},analog:{kutu:[12.5,3.6,49,30.2,13,58.7],yon:[.08,.7,.71]},guc:{kutu:[-10.5,3.6,49,12.5,13,58.7],yon:[0,.62,.78]},bb:{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[.06,.86,.5]},"bb-ust":{kutu:[-41.3,0,-65.3,41.3,8.6,-10.7],yon:[0,.96,.27]},raylar:{kutu:[-41.3,0,-34,41.3,8.6,-10.7],yon:[.04,.8,.6]},devre:{kutu:[-14,0,-44,22,22,-14],yon:[.12,.8,.58]},"devre-genis":{kutu:[-41.3,0,-65.3,41.3,22,12],yon:[.07,.9,.43],kablolar:!0},"buton-yakin":{kutu:[5,0,-46,23,18,-16],yon:[.15,.72,.67]},trafik:{kutu:[-26,0,-44,26,22,-14],yon:[.05,.78,.62]}},io=["led1","r1","k13","kgnd"],Gs=["led1","r1","k13","kgnd","buton","r2","k5v","kplus","k2"],Hs=["ledK","ledS","ledY","rK","rS","rY","kK","kS","kY","kgnd"],yp={"arduino-ve-breadboard":{no:1,devre:null,adimlar:{merak:{kamera:"genel"},arduino:{kamera:"kart",vurgu:["kart"],dokun:!0},usb:{kamera:"usb",vurgu:["usb"],etiket:[["alan:usb","USB giri\u015Fi"]]},"guc-girisi":{kamera:"guc-girisi",vurgu:["guc-girisi"],etiket:[["alan:guc-girisi","G\xFC\xE7 giri\u015Fi"]]},mikrodenetleyici:{kamera:"cip",vurgu:["mikrodenetleyici"],etiket:[["alan:mikrodenetleyici","Mikrodenetleyici"]]},"dijital-pinler":{kamera:"dijital",vurgu:["dijital-pinler"],etiket:[["pin:13","13"],["pin:0","0"],["pin:3","~3"]]},"analog-pinler":{kamera:"analog",vurgu:["analog-pinler"],etiket:[["pin:A0","A0"],["pin:A5","A5"]]},"guc-pinleri":{kamera:"guc",vurgu:["guc-pinleri"],etiket:[["pin:5V","5V","arti"],["pin:3.3V","3,3V","arti"],["pin:GND1","GND","eksi"]]},breadboard:{kamera:"bb",vurgu:["breadboard"]},"breadboard-baglanti":{kamera:"bb-ust",kontrol:["delik","rontgen"]},raylar:{kamera:"raylar",vurgu:["bb-yakin-raylar"],kontrol:["delik","rontgen"],etiket:[["ray:yakin+","Art\u0131 (+) ray\u0131","arti"],["ray:yakin-","Eksi (\u2212) ray\u0131","eksi"]]},ozet:{kamera:"genel",dokun:!0}}},"arduino-led-yakma":{no:2,devre:"led",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"devre",parca:["led1","r1"],poz:{led1:"havada",r1:"havada"},etiket:[["parca:led1","LED"],["parca:r1","220 \u03A9 diren\xE7"]]},led:{kamera:{parca:"led1",poz:"havada",yon:[.18,.22,.96],pay:3},parca:["led1"],poz:{led1:"havada"},etiket:[["led1:anot","Anot (+): uzun bacak","arti"],["led1:katot","Katot (\u2212): k\u0131sa bacak","eksi"]]},direnc:{kamera:{parca:"r1",poz:"havada",yon:[.6,.55,.58],pay:2.5},parca:["r1"],poz:{r1:"havada"},etiket:[["parca:r1","K\u0131rm\u0131z\u0131, k\u0131rm\u0131z\u0131, kahverengi: 220 \u03A9"]]},"kurulum-led":{kamera:"devre",parca:["led1"],etiket:[["delik:15:e","15"],["delik:16:e","16"]]},"kurulum-direnc":{kamera:"devre",parca:["led1","r1"],etiket:[["ray:yakin-","Eksi (\u2212) ray\u0131","eksi"]]},"kurulum-kablo":{kamera:"devre-genis",parca:io,etiket:[["pin:13","13. pin"],["pin:GND-D","GND","eksi"]]},kod:{kamera:"devre-genis",parca:io,kod:!0},calistir:{kamera:"devre-genis",parca:io,program:"blink",kontrol:["akim","hiz"],kod:!0},"tahmin-ters":{kamera:"devre",parca:io,program:"blink",kontrol:["ters"]},ozet:{kamera:"devre-genis",parca:io,program:"blink"}}},"arduino-buton-led":{no:3,devre:"buton",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"devre",parca:["buton","r2","led1","r1"],poz:{buton:"havada",r2:"havada",led1:"havada",r1:"havada"},etiket:[["parca:buton","Buton"],["parca:r2","10 k\u03A9"],["parca:r1","220 \u03A9"]]},buton:{kamera:{parca:"buton",poz:"havada",yon:[.3,.55,.78],pay:2.5},parca:["buton"],poz:{buton:"havada"},kontrol:["buton"]},"giris-cikis":{kamera:"devre-genis",parca:Gs,etiket:[["pin:2","2: giri\u015F"],["pin:13","13: \xE7\u0131k\u0131\u015F"]]},kurulum:{kamera:"devre-genis",parca:Gs,etiket:[["pin:5V","5V","arti"],["pin:GND-D","GND","eksi"],["parca:buton","Buton"]]},"pull-down":{kamera:"buton-yakin",parca:Gs,etiket:[["parca:r2","10 k\u03A9"]]},kod:{kamera:"devre-genis",parca:Gs,kod:!0},dene:{kamera:"devre",parca:Gs,program:"buton",kontrol:["buton","akim"],kod:!0},tahmin:{kamera:"devre",parca:Gs,program:"buton",kontrol:["buton","direnc-cikar"]},ozet:{kamera:"devre-genis",parca:Gs,program:"buton",kontrol:["buton"]}}},"arduino-trafik-isigi":{no:4,devre:"trafik",adimlar:{merak:{kamera:"genel"},malzemeler:{kamera:"trafik",parca:["ledK","ledS","ledY","rK","rS","rY"],poz:{ledK:"havada",ledS:"havada",ledY:"havada",rK:"havada",rS:"havada",rY:"havada"}},sira:{kamera:"trafik",parca:["ledK","ledS","ledY"],program:"trafik"},kurulum:{kamera:"devre-genis",parca:Hs,etiket:[["pin:10","10"],["pin:9","9"],["pin:8","8"]]},kod:{kamera:"devre-genis",parca:Hs,kod:!0},calistir:{kamera:"devre-genis",parca:Hs,program:"trafik",kontrol:["akim","sure"],kod:!0},algoritma:{kamera:"trafik",parca:Hs,program:"trafik",kod:!0},tahmin:{kamera:"trafik",parca:Hs,program:"trafik",kontrol:["delaysiz"]},ileri:{kamera:"devre-genis",parca:Hs,program:"trafik"},ozet:{kamera:"devre-genis",parca:Hs,program:"trafik"}}}};var ro={guc:{ad:"G\xFC\xE7",renk:"#d32f2f",ikon:"zap"},islem:{ad:"\u0130\u015Flem",renk:"#7c4dff",ikon:"cpu"},pin:{ad:"Pinler",renk:"#1e6fd9",ikon:"plug"},isik:{ad:"I\u015F\u0131klar",renk:"#e0a100",ikon:"lightbulb",koyu:!0},breadboard:{ad:"Breadboard",renk:"#2e9d48",ikon:"grid-3x3"},parca:{ad:"Par\xE7alar",renk:"#f57c00",ikon:"component",koyu:!0},kontrol:{ad:"Kontrol",renk:"#6b7280",ikon:"rotate-ccw"}},si=3,Zi=2,$i=1,Zn=0,so={kart:{kat:null,ad:"Arduino UNO kart\u0131",kavram:"arduino",oncelik:si,kisa:"Mikrodenetleyiciyi ve onu kullanmay\u0131 kolayla\u015Ft\u0131ran giri\u015Fleri, pinleri ta\u015F\u0131yan geli\u015Ftirme kart\u0131."},usb:{kat:"guc",ad:"USB giri\u015Fi",oncelik:si,kisa:"Kart bilgisayara buradan ba\u011Flan\u0131r: kod bu kabloyla y\xFCklenir, kart da bu kablodan elektrik alabilir."},"guc-girisi":{kat:"guc",ad:"G\xFC\xE7 giri\u015Fi",oncelik:si,kisa:"Pil ya da adapt\xF6r buraya tak\u0131l\u0131r; b\xF6ylece kart bilgisayar olmadan da \xE7al\u0131\u015F\u0131r."},regulator:{kat:"guc",ad:"Voltaj reg\xFClat\xF6r\xFC",oncelik:Zi,kisa:"G\xFC\xE7 giri\u015Finden gelen daha y\xFCksek gerilimi kart\u0131n kulland\u0131\u011F\u0131 5 volta d\xFC\u015F\xFCr\xFCr ve sabit tutar."},kondansator:{kat:"guc",ad:"Kondansat\xF6r",oncelik:Zi,kisa:"Elektri\u011Fi k\u0131sa s\xFCre depolay\u0131p geri verir; gerilimdeki ani dalgalanmalar\u0131 yumu\u015Fatarak kart\u0131n kararl\u0131 \xE7al\u0131\u015Fmas\u0131na yard\u0131m eder."},"guc-pinleri":{kat:"guc",ad:"G\xFC\xE7 pinleri",kavram:"gerilim",oncelik:si,kisa:"Devredeki par\xE7alara elektrik veren pinler: 5V, 3,3V, GND ve Vin."},mikrodenetleyici:{kat:"islem",ad:"Mikrodenetleyici",oncelik:si,kisa:"Kart\u0131n beyni: y\xFCklenen kodu sat\u0131r sat\u0131r \xE7al\u0131\u015Ft\u0131r\u0131r, pinleri okur ve y\xF6netir."},"usb-cipi":{kat:"islem",ad:"USB \xE7ipi",oncelik:Zi,kisa:"Bilgisayardan USB ile gelen veriyi mikrodenetleyicinin anlayaca\u011F\u0131 seri veriye \xE7evirir."},kristal:{kat:"islem",ad:"Kristal (16 MHz)",oncelik:Zi,kisa:"Kart\u0131n saati gibidir: saniyede 16 milyon kez titre\u015Ferek i\u015Flemlerin s\u0131rayla yap\u0131laca\u011F\u0131 d\xFCzenli bir ritim verir."},"dijital-pinler":{kat:"pin",ad:"Dijital pinler",kavram:"dijital",oncelik:si,kisa:"0 ile 13 aras\u0131 numaral\u0131 pinler. Her biri a\xE7\u0131k (HIGH) ya da kapal\u0131 (LOW) olur; LED yakmak, buton okumak i\xE7in kullan\u0131l\u0131r."},"analog-pinler":{kat:"pin",ad:"Analog giri\u015F pinleri",kavram:"analog",oncelik:si,kisa:"A0 ile A5 aras\u0131 pinler. A\xE7\u0131k ya da kapal\u0131n\u0131n yan\u0131nda aradaki de\u011Ferleri de \xF6l\xE7er; \u0131\u015F\u0131k ve s\u0131cakl\u0131k alg\u0131lay\u0131c\u0131lar\u0131 burada okunur."},icsp:{kat:"pin",ad:"ICSP pinleri",oncelik:Zi,kisa:"Mikrodenetleyiciye USB olmadan, \xF6zel bir programlay\u0131c\u0131yla do\u011Frudan kod y\xFCklemek i\xE7in kullan\u0131lan alt\u0131 pinlik ba\u015Fl\u0131k."},"led-l":{kat:"isik",ad:"L \u0131\u015F\u0131\u011F\u0131",oncelik:$i,kisa:"13. pine ba\u011Fl\u0131 k\xFC\xE7\xFCk \u0131\u015F\u0131k. 13. pine HIGH verilince yanar; ek par\xE7a takmadan kodu denemeye yarar."},"led-on":{kat:"isik",ad:"ON \u0131\u015F\u0131\u011F\u0131",oncelik:$i,kisa:"Karta elektrik gelince yanar. Yanm\u0131yorsa kart g\xFC\xE7 alm\u0131yordur."},"led-txrx":{kat:"isik",ad:"TX ve RX \u0131\u015F\u0131klar\u0131",oncelik:$i,kisa:"Kart bilgisayarla veri al\u0131\u015Fveri\u015Fi yaparken yan\u0131p s\xF6ner: TX veri g\xF6nderirken, RX veri al\u0131rken yanar."},reset:{kat:"kontrol",ad:"Reset d\xFC\u011Fmesi",oncelik:si,kisa:"Bas\u0131nca kart y\xFCkl\xFC kodu en ba\u015Ftan \xE7al\u0131\u015Ft\u0131r\u0131r. Kod silinmez."},"montaj-deligi":{kat:"kontrol",ad:"Montaj deli\u011Fi",oncelik:$i,kisa:"Kart\u0131 vidayla bir kutuya ya da tabana sabitlemek i\xE7in a\xE7\u0131lm\u0131\u015F delik."},"pin-dijital":{kat:"pin",ad:"Dijital pin",kavram:"dijital",oncelik:Zn,kisa:"HIGH (5 volt) ya da LOW (0 volt) de\u011Ferini verir veya okur."},"pin-pwm":{kat:"pin",ad:"PWM pini (~)",kavram:"pwm",oncelik:Zn,kisa:"Yan\u0131nda ~ i\u015Fareti olan pin. \xC7ok h\u0131zl\u0131 a\xE7\u0131l\u0131p kapanarak LED'i yar\u0131 parlakl\u0131kta yakmak gibi ara de\u011Ferler \xFCretebilir."},"pin-rx-tx":{kat:"pin",ad:"RX ve TX pinleri",oncelik:Zn,kisa:"Seri haberle\u015Fme pinleri: 0 (RX) veri al\u0131r, 1 (TX) veri g\xF6nderir. Kod y\xFCklenirken de kullan\u0131ld\u0131klar\u0131 i\xE7in devrede bo\u015F b\u0131rak\u0131lmalar\u0131 \xF6nerilir."},"pin-13":{kat:"pin",ad:"13. pin",oncelik:Zn,kisa:"Karttaki L \u0131\u015F\u0131\u011F\u0131na ba\u011Fl\u0131d\u0131r: 13. pine HIGH verilince hem buraya ba\u011Fl\u0131 LED hem L \u0131\u015F\u0131\u011F\u0131 yanar."},"pin-gnd":{kat:"pin",ad:"GND pini",kavram:"gnd",oncelik:Zn,kisa:"Toprak, yani eksi u\xE7. Ak\u0131m devreyi dola\u015F\u0131p buradan karta d\xF6ner; devrenin 0 volt noktas\u0131d\u0131r."},"pin-5v":{kat:"guc",ad:"5V pini",oncelik:Zn,kisa:"Devredeki par\xE7alara 5 volt verir."},"pin-3v3":{kat:"guc",ad:"3,3V pini",oncelik:Zn,kisa:"Daha d\xFC\u015F\xFCk gerilimle \xE7al\u0131\u015Fan par\xE7alara 3,3 volt verir."},"pin-vin":{kat:"guc",ad:"Vin pini",oncelik:Zn,kisa:"G\xFC\xE7 giri\u015Fine tak\u0131lan adapt\xF6r\xFCn gerilimine bu pinden ula\u015F\u0131l\u0131r; karta bu pinden de g\xFC\xE7 verilebilir."},"pin-aref":{kat:"pin",ad:"AREF pini",oncelik:Zn,kisa:"Analog \xF6l\xE7\xFCmlerde kar\u015F\u0131la\u015Ft\u0131rma i\xE7in kullan\u0131lan ba\u015Fvuru (referans) gerilimi bu pine verilebilir."},"pin-ioref":{kat:"pin",ad:"IOREF pini",oncelik:Zn,kisa:"Kart\u0131n pinlerinin hangi gerilimle \xE7al\u0131\u015Ft\u0131\u011F\u0131n\u0131 (UNO'da 5 volt) \xFCst\xFCne tak\u0131lan ek kartlara bildirir."},"pin-reset":{kat:"pin",ad:"RESET pini",oncelik:Zn,kisa:"Bu pin GND'ye ba\u011Flan\u0131rsa kart, reset d\xFC\u011Fmesine bas\u0131lm\u0131\u015F gibi kodu ba\u015Ftan ba\u015Flat\u0131r."},"pin-sda-scl":{kat:"pin",ad:"SDA ve SCL pinleri",oncelik:Zn,kisa:"I2C haberle\u015Fmesinde kullan\u0131l\u0131r: SDA veriyi, SCL saat sinyalini ta\u015F\u0131r. UNO'da A4 ve A5 ile ayn\u0131 hatlara ba\u011Fl\u0131d\u0131r."},"pin-analog":{kat:"pin",ad:"Analog giri\u015F pini",kavram:"analog",oncelik:Zn,kisa:"0 ile 5 volt aras\u0131ndaki gerilimi \xF6l\xE7er ve 0 ile 1023 aras\u0131nda bir say\u0131ya \xE7evirir."},breadboard:{kat:"breadboard",ad:"Breadboard",oncelik:si,kisa:"Lehim yapmadan devre kurmaya yarayan delikli tahta; deliklerin bir k\u0131sm\u0131 i\xE7eriden birbirine ba\u011Fl\u0131d\u0131r."},serit:{kat:"breadboard",ad:"\u015Eerit (5'li delik grubu)",oncelik:$i,kisa:"Ayn\u0131 s\xFCtundaki be\u015F delik i\xE7eriden bir metal \u015Feritle ba\u011Fl\u0131d\u0131r; bu deliklere tak\u0131lan bacaklar birbirine ba\u011Flanm\u0131\u015F olur."},"arti-ray":{kat:"breadboard",ad:"Art\u0131 (+) ray\u0131",oncelik:Zi,kisa:"K\u0131rm\u0131z\u0131 \xE7izgi boyunca uzanan s\u0131ra boydan boya ba\u011Fl\u0131d\u0131r; genellikle 5V buraya ba\u011Flan\u0131r."},"eksi-ray":{kat:"breadboard",ad:"Eksi (\u2212) ray\u0131",oncelik:Zi,kisa:"Mavi \xE7izgi boyunca uzanan s\u0131ra boydan boya ba\u011Fl\u0131d\u0131r; genellikle GND buraya ba\u011Flan\u0131r."},"orta-kanal":{kat:"breadboard",ad:"Orta kanal",oncelik:Zi,kisa:"Breadboard'u iki yar\u0131ya ay\u0131r\u0131r: iki yar\u0131daki delikler birbirine ba\u011Fl\u0131 de\u011Fildir. Buton gibi par\xE7alar bu kanal\u0131n \xFCst\xFCne tak\u0131l\u0131r."},koordinat:{kat:"breadboard",ad:"Koordinatlar",oncelik:$i,kisa:"Harfler sat\u0131rlar\u0131 (a-j), say\u0131lar s\xFCtunlar\u0131 (1-30) g\xF6sterir. 15e gibi bir adres, deli\u011Fin yerini tam s\xF6yler."},led:{kat:"isik",ad:"LED",oncelik:si,kisa:"Elektrik do\u011Fru y\xF6nde ge\xE7ince \u0131\u015F\u0131k veren par\xE7a."},anot:{kat:"parca",ad:"Anot (+)",oncelik:$i,kisa:"LED'in uzun baca\u011F\u0131; art\u0131 uca ba\u011Flan\u0131r."},katot:{kat:"parca",ad:"Katot (\u2212)",oncelik:$i,kisa:"LED'in k\u0131sa baca\u011F\u0131; eksi uca (GND) ba\u011Flan\u0131r."},direnc:{kat:"parca",ad:"Diren\xE7",oncelik:si,kisa:"Ak\u0131m\u0131 s\u0131n\u0131rlar; LED'i fazla ak\u0131mdan korur."},"renk-bantlari":{kat:"parca",ad:"Renk bantlar\u0131",oncelik:$i,kisa:"Direncin de\u011Feri renklerle yaz\u0131l\u0131r: ilk iki bant rakamlar\u0131, \xFC\xE7\xFCnc\xFCs\xFC eklenecek s\u0131f\u0131r say\u0131s\u0131n\u0131, sonuncusu hata pay\u0131n\u0131 g\xF6sterir."},buton:{kat:"parca",ad:"Buton",oncelik:si,kisa:"Bas\u0131l\u0131nca iki ucunu birbirine ba\u011Flar, b\u0131rak\u0131nca ay\u0131r\u0131r."},kablo:{kat:"parca",ad:"Atlama kablosu",oncelik:Zi,kisa:"Ucundaki i\u011Fnelerle karttaki pinleri breadboard'daki deliklere ba\u011Flar; elektrik kablonun i\xE7inden ge\xE7er."}},Rh=i=>ro[so[i]?.kat]?so[i].kat:null;var vp="(max-width: 560px), (max-width: 820px) and (max-height: 500px), (max-device-width: 599px), (max-device-height: 599px)";var Ih=document.documentElement,kh="bote-3d-gorunum",bp=(i,t)=>{try{localStorage.setItem(i,t)}catch{}},Fv=i=>{try{return localStorage.getItem(i)}catch{return null}},Ph=i=>{let t=document.querySelector("#duyuru");t&&(t.textContent=i)},Mp=["sanal","fiziksel"];function Sp(){let i=new URLSearchParams(location.search).get("gorunum");return Mp.includes(i)?i:Fv(kh)==="fiziksel"?"fiziksel":"sanal"}var Ov=[".gorunum-gecis{display:inline-flex;flex:none;align-items:stretch;border:1px solid var(--line);border-radius:12px;background:var(--surface);overflow:hidden}",".gorunum-gecis button{display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:var(--btn);min-width:var(--btn);padding:0 13px;border:0;border-radius:0;background:transparent;color:var(--muted);font-weight:700;white-space:nowrap;cursor:pointer;touch-action:manipulation;user-select:none}",".gorunum-gecis button+button{border-left:1px solid var(--line)}",".gorunum-gecis button[aria-pressed=true]{background:var(--violet-soft);color:var(--violet);box-shadow:inset 0 -3px 0 var(--violet)}",".gorunum-gecis button[aria-busy=true]{cursor:progress}",".gorunum-gecis button:focus-visible{outline-offset:-4px}","@media (hover:hover) and (pointer:fine){.gorunum-gecis button:not([aria-pressed=true]):hover{background:var(--raised);color:var(--ink)}}","@media (max-width:900px){.gorunum-gecis .gg-yazi{display:none}.gorunum-gecis button{padding:0}}",":root[data-mod=tahta] .gorunum-gecis button[aria-pressed=false]{display:none}",":root[data-mod=tahta] .gorunum-gecis button{border-left:0}",".gorunum-gecis .gg-degis{display:none;width:.95em;height:.95em;opacity:.7}",":root[data-mod=tahta] .gorunum-gecis .gg-degis{display:inline-block}",":root[data-mod=tahta] .gorunum-gecis.gg-mesgul button{cursor:progress;opacity:.75}"].join(`
`),wp='<svg class="ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">',Bv={sanal:'<path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>',fiziksel:'<path d="M12 20v2"/><path d="M12 2v2"/><path d="M17 20v2"/><path d="M17 2v2"/><path d="M2 12h2"/><path d="M2 17h2"/><path d="M2 7h2"/><path d="M20 12h2"/><path d="M20 17h2"/><path d="M20 7h2"/><path d="M7 20v2"/><path d="M7 2v2"/><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/>'},zv=wp.replace('class="ico"','class="ico gg-degis"')+'<path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>';function Ap(i){let t="sanal",e="sanal",n=document.createElement("style");n.textContent=Ov,document.head.appendChild(n);let s=document.createElement("div");s.className="gorunum-gecis",s.setAttribute("role","group"),s.setAttribute("aria-label","G\xF6r\xFCn\xFCm");for(let[c,u,d]of[["sanal","Sanal","Sanal g\xF6r\xFCn\xFCm: sade 3D \xE7izim"],["fiziksel","Fiziksel","Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi"]]){let h=document.createElement("button");h.type="button",h.dataset.gorunumSec=c,h.title=d,h.setAttribute("aria-label",`${u} g\xF6r\xFCn\xFCm`),h.setAttribute("aria-pressed",String(c==="sanal")),h.innerHTML=`${wp}${Bv[c]}</svg><span class="gg-yazi">${u}</span>${zv}`,s.append(h)}let r=document.querySelector("#gorunum-yuva");r?r.append(s):document.querySelector(".ust-sag")?.prepend(s);let a=[...s.querySelectorAll("button")],o=()=>{for(let c of a)c.setAttribute("aria-pressed",String(c.dataset.gorunumSec===t))};async function l(c,{kaydet:u=!0,sessiz:d=!1}={}){if(!Mp.includes(c))return;if(e=c,c===t){o();return}let h=a.find(g=>g.dataset.gorunumSec===c);h?.setAttribute("aria-busy","true"),s.classList.add("gg-mesgul"),c==="fiziksel"&&!d&&Ph("Fiziksel g\xF6r\xFCn\xFCm haz\u0131rlan\u0131yor");let f=!0;try{await i(c)}catch(g){f=!1,console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131",g)}if(h?.removeAttribute("aria-busy"),s.classList.toggle("gg-mesgul",!!s.querySelector("[aria-busy=true]")),e===c){if(!f){t="sanal",bp(kh,"sanal"),o(),Ph("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor");return}if(t=c,Ih.dataset.gorunumKip=c,o(),d||Ph(c==="fiziksel"?"Fiziksel g\xF6r\xFCn\xFCm: ger\xE7ek kart ve set gibi":"Sanal g\xF6r\xFCn\xFCm"),document.dispatchEvent(new CustomEvent("3d:gorunum",{detail:{ad:c}})),u){bp(kh,c);let g=new URL(location.href);c==="fiziksel"?g.searchParams.set("gorunum","fiziksel"):g.searchParams.delete("gorunum"),history.replaceState(null,"",g)}}}return s.addEventListener("click",c=>{let u=c.target.closest("[data-gorunum-sec]");if(!u)return;if(Ih.dataset.mod==="tahta"||a.some(h=>!h.getClientRects().length)){s.querySelector("[aria-busy=true]")||l(t==="sanal"?"fiziksel":"sanal");return}l(u.dataset.gorunumSec)}),Ih.dataset.gorunumKip="sanal",{ayarla:l,simdiki:()=>t,gecis:s,onIsit:c=>{for(let u of["pointerenter","focusin"])a[1].addEventListener(u,c,{once:!0})}}}var Ep=(i,t,e,n,s,r)=>{let a=new xe(i,t,e);return a.translate(n,s,r),a};function Tp(i){let t=new Ye;t.name="breadboard-fiziksel";let e=tp(i.duzey);for(let c of Object.values(e))i.kayit(c);let n=new Re({map:e.albedo,roughness:.58});e.normal&&(n.normalMap=e.normal,n.normalScale=new it(.9,.9));let s=new Re({color:15526111,roughness:.62});i.kayitMat(n),i.kayitMat(s);let r=[s,s,n,s,s,s],a=new Nt(new Fn(Ct.w,Ct.h,Ct.d,3,1.1),r);a.position.set(Ct.x,Ct.h/2,Ct.z),a.castShadow=a.receiveShadow=!0,t.add(a);let o=[];for(let c=1;c<=30;c++)for(let u of[1,-1])o.push(Ep(1.5,1.1,11.4,vn(c),je-2.3,Ct.z+u*8.89));for(let c of Object.values(On))o.push(Ep(vn(30)-vn(2)+1.6,1.1,1.5,Ct.x,je-2.3,Ct.z+c));let l=new Nt(kn(o.map(c=>c.toNonIndexed())),i.mat("klips"));return l.visible=!1,t.add(l),{grup:t,kanca:{rontgen(c){l.visible=c;for(let u of[n,s])u.transparent=c,u.opacity=c?.3:1,u.depthWrite=!c,u.needsUpdate=!0;a.castShadow=!c}}}}var Tn=(i,t=!0)=>(i.castShadow=i.receiveShadow=t,i),Bn=i=>i.index?i.toNonIndexed():i;function Vv(i,t){let e=new Ye;e.name="led-fiziksel";let n=new Qt(Ec[t.userData.renkAdi??t.userData.renk]??Ec.kirmizi),s=4.2,r=i.ledKubbe(n),a=r.color.clone(),o=[[0,1],[2.5,1],[2.5,5.6]];for(let m=1;m<=12;m++){let p=m/12*(Math.PI/2);o.push([2.5*Math.cos(p),5.6+2.5*Math.sin(p)])}let l=new ki(o.map(([m,p])=>new it(m,p)),i.duzey==="yuksek"?40:32),c=Math.acos(2.55/2.95),u=new mi;u.absarc(0,0,2.95,c,Math.PI*2-c,!1),u.lineTo(2.55,2.95*Math.sin(c));let d=new us(u,{depth:1,bevelEnabled:!1,curveSegments:28});d.rotateX(Math.PI/2),d.translate(0,1,0);let h=new Nt(kn([Bn(l),Bn(d)]),r);if(h.position.y=s,h.renderOrder=-1,h.castShadow=!1,h.receiveShadow=!1,e.add(h),i.ek("ledIc")){let m=kn([Bn((()=>{let p=new xe(1.5,3.4,.45);return p.translate(.95,s+1.7,0),p})()),Bn((()=>{let p=new xe(.5,2.9,.45);return p.translate(-1.27,s+1.45,0),p})()),Bn((()=>{let p=new xe(2,.12,.12);return p.translate(-.2,s+3.5,0),p})())]);e.add(Tn(new Nt(m,i.mat("metalCelik")),!1))}let f=()=>{},g=t.userData.bacakYari??1.27;if(g>1.28){let p=[],b=(S,y,E,v)=>{let T=new xe(S,y,.5);T.translate(E,v,0),p.push(Bn(T))};for(let S of[-1,1]){let y=S*1.27,E=S*g;b(.5,s-1.3,y,(s+1.3)/2),b(Math.abs(E-y)+.5,.5,(y+E)/2,1.3),b(.5,1.3+5,E,(1.3-5)/2)}e.add(Tn(new Nt(kn(p),i.mat("kalay"))))}else{let m=Tn(new Nt(new xe(.5,1,.5),i.mat("kalay"))),p=Tn(new Nt(new xe(.5,1,.5),i.mat("kalay")));m.position.x=-1.27,p.position.x=1.27,e.add(m,p),f=b=>{let S=22+(s+5-22)*b,y=17+(s+5-17)*b;m.scale.y=S,m.position.y=s-S/2,p.scale.y=y,p.position.y=s-y/2},f(1)}return{grup:e,kanca:{ac:m=>{let p=typeof m=="number"?m:m?1:0;r.color.copy(a).lerp(n,p),r.emissiveIntensity=1.05*p,r.transparent&&(r.opacity=.8+.15*p)},bacak:f}}}function Cp(i,t=6.88,e=46){let n=[];for(let s=0;s<e;s++){let r=-t/2+s/(e-1)*t,a=Math.abs(r),o=1.3*Math.sqrt(Math.max(0,1-((a-2.45)/.99)**2)),l=s===0||s===e-1?0:Math.max(a<2.45?1.02:0,o);n.push(new it(l,r))}return new ki(n,i.duzey==="dusuk"?16:24)}function Gv(i,t){let e=new Ye;e.name="direnc-fiziksel";let n=t.userData,s=n.H??3.4,r=n.uclar?n.uclar[1].x-n.uclar[0].x:10,a=n.bantlar||["kirmizi","kirmizi","kahve","altin"],o=6.88,l=Cp(i,o);l.rotateZ(-Math.PI/2);let c=[.18,.33,.48,.8].map(f=>2.3-4.6*f),u=new Re({map:i.kayit(gh(a,c,o,i.aniz)),roughness:.45});i.kayitMat(u);let d=Tn(new Nt(l,u));d.position.y=s,e.add(d);let h=[];for(let f of[-1,1]){let g=r/2-2.9;if(g>.05){let p=new an(.27,.27,g,10);p.rotateZ(Math.PI/2),p.translate(f*((r/2+2.9)/2),s,0),h.push(Bn(p))}let M=new an(.27,.27,s+7,10);M.translate(f*r/2,(s-7)/2,0),h.push(Bn(M));let m=new Yi(.27,10,8);m.translate(f*r/2,s,0),h.push(Bn(m))}return e.add(Tn(new Nt(kn(h),i.mat("kalay")))),{grup:e,kanca:{}}}function Hv(i,t){let e=new Ye;e.name="direnc-fiziksel";let n=t.userData,s=n.aralik,r=-s/2,a=1.5,o=4.6,l=n.H,c=6.88,u=n.bantlar||["kirmizi","kirmizi","kahve","altin"],d=[.18,.33,.48,.8].map(b=>o*b-o/2),h=new Re({map:i.kayit(gh(u,d,c,i.aniz)),roughness:.45});i.kayitMat(h);let f=Tn(new Nt(Cp(i,c),h));f.position.set(r,a+o/2,0),e.add(f);let g=[],M=(b,S,y)=>{let E=new an(.27,.27,y-S,10);E.translate(b,(S+y)/2,0),g.push(Bn(E))},m=(b,S)=>{let y=new Yi(.27,10,8);y.translate(b,S,0),g.push(Bn(y))};M(r,-5,a+.4),M(r,a+o-.4,l);let p=new an(.27,.27,s,10);return p.rotateZ(Math.PI/2),p.translate(0,l,0),g.push(Bn(p)),m(r,l),m(-r,l),M(-r,-5,l),e.add(Tn(new Nt(kn(g),i.mat("kalay")))),{grup:e,kanca:{}}}function Wv(i){let t=new Ye;t.name="buton-fiziksel";let e=Tn(new Nt(new Fn(6,3.4,6,2,.45),i.mat("resetTaban")));e.position.y=1.7;let n=Tn(new Nt(new xe(6.2,.3,6.2),i.mat("metalFirca")));n.position.y=3.55;let s=Tn(new Nt(new an(1.65,1.8,1.7,28),i.mat("butonKapak")));s.position.y=4.55,t.add(e,n,s);let r=[];for(let o of[-2.54,2.54])for(let l of[-3.81,3.81]){let c=new xe(.6,7,.35);c.translate(o,-3.2,l),r.push(Bn(c))}let a=[];for(let o of[-2.5,2.5])for(let l of[-2.5,2.5]){let c=new an(.3,.3,.06,10);c.translate(o,3.73,l),a.push(Bn(c))}return t.add(Tn(new Nt(kn(r),i.mat("kalay"))),new Nt(kn(a),i.mat("koyu"))),{grup:t,kanca:{bas(o){s.position.y=o?3.95:4.55}}}}function Xv(i,t){let e=new Ye;e.name="kablo-fiziksel";let n=t.userData,s=n.egri;if(!s)return null;let r=t.children.find(m=>m.isMesh&&m.geometry?.type==="TubeGeometry"&&m.material.visible!==!1),a=r?r.material.color.getHex():Ah.turuncu,o=56,l={dusuk:6,orta:8,yuksek:10}[i.duzey],c=new Re({color:a,roughness:.36});i.kayitMat(c);let u=Tn(new Nt(new hs(s,o,.62,l,!1),c));e.add(u);let d=u.geometry.index.count,h=s.points[0],f=s.points[s.points.length-1],g=[];for(let m of[h,f]){let p=new I(m.x,m.y-6.2,m.z),b=Tn(new Nt(new Fn(2.5,5.6,2.5,2,.25),i.mat("dupont")));b.position.set(p.x,p.y+2.9,p.z);let S=Tn(new Nt(new an(.72,1.12,.8,14),i.mat("dupont")));S.position.set(p.x,p.y+6.05,p.z);let y=Tn(new Nt(new xe(.62,5.6,.62),i.mat("kalay")));y.position.set(p.x,p.y-2.7,p.z),e.add(b,S,y),g.push([b,S,y])}return{grup:e,kanca:{buyut:m=>{u.geometry.setDrawRange(0,Math.floor(m*o)*l*6);for(let p of g[1])p.visible=m>=1;m>=1&&u.geometry.setDrawRange(0,d)}}}}function Cc(i,t,e){return t==="led"?Vv(i,e):t==="direnc"?e.userData.dik?Hv(i,e):Gv(i,e):t==="buton"?Wv(i,e):t==="kablo"?Xv(i,e):null}var Yv=!0,Rp=2,qv={yuksek:{env:1,hemi:.28,gunes:2.1,zemin:.26},orta:{env:.95,hemi:.3,gunes:2.2,zemin:.24},dusuk:{env:.85,hemi:.35,gunes:2.4,zemin:.2}},Ip=Symbol("gercekci"),Kv=i=>{try{return localStorage.getItem(i)}catch{return null}},Lh=["dusuk","orta","yuksek"];function Rc(i,t,e){let n=i?.[t];if(typeof n!="function"||n[Ip])return;let s=function(...r){let a=n.apply(this,r);return e(...r),a};s[Ip]=!0,i[t]=s}function Zv(i,t){let e=new URLSearchParams(location.search).get("fizduzey");if(Lh.includes(e))return{duzey:e,neden:["adres"]};let n=2,s=[],r=(d,h)=>{d<n&&(n=d,s.push(h))},a=Lh.indexOf(Kv("bote-3d-fizduzey"));a>=0&&r(a,"kayit");let o="";try{let d=i.getContext(),h=d.getExtension("WEBGL_debug_renderer_info");o=h?String(d.getParameter(h.UNMASKED_RENDERER_WEBGL)):""}catch{}let l=/nvidia|geforce|rtx|gtx|radeon rx|radeon pro|apple (m\d|gpu)|adreno.*(6[4-9]\d|[7-9]\d\d)|mali-g[789]|intel.*(arc|iris xe)/i.test(o);/swiftshader|llvmpipe|softpipe|software|basic render/i.test(o)&&r(0,"yazilim"),/intel.*(hd|uhd) graphics|gma|radeon (r[2-5]|hd)|mali-(4|t)|adreno.*[2-5]\d\d|vivante|powervr/i.test(o)&&r(1,"zayif");let c=i.capabilities.maxTextureSize||4096;c<4096?r(0,"doku-siniri"):c<8192&&r(1,"doku-siniri");let u=navigator.deviceMemory;return u&&u<=2?r(0,"bellek"):u&&u<=4&&r(1,"bellek"),(navigator.hardwareConcurrency||8)<=2&&r(1,"cekirdek"),innerWidth*innerHeight*(devicePixelRatio||1)**2>=6e6&&!l&&r(0,"4k"),(/iP(hone|ad|od)/.test(navigator.userAgent)||/Mac/.test(navigator.platform)&&navigator.maxTouchPoints>1)&&r(1,"ios"),o||r(1,"cizici-gizli"),t.kalite().kademe>0&&r(Math.max(0,n-1),"kademe"),n===2&&!(l&&c>=16384&&(!u||u>=8))&&r(1,"yuksek-sarti"),{duzey:Lh[n],neden:s,cizici:o}}function Pp({S:i,kart:t,bb:e,parcalar:n,ornekler:s=null}){let r={kart:{},bb:{},parca:{}},a={duzey:null,neden:[],gorunum:"sanal",hazir:!1,istatistik:{}},o=null,l=null,c=null,u=[],d=new Map,h=new Set,f=(_,A,P)=>{let k=_?.kanca?.[A];k&&k(P)};Rc(t,"ledL",_=>{r.kart.ledL=_,o&&f(o.kart,"ledL",_)}),Rc(t,"ledOn",_=>{r.kart.ledOn=_,o&&f(o.kart,"ledOn",_)}),Rc(e,"rontgen",_=>{r.bb.rontgen=_,o&&f(o.bb,"rontgen",_)});function g(_,A){let P=r.parca[_]={};for(let k of["ac","bacak","bas","buyut"])Rc(A.nesne.userData,k,N=>{P[k]=N,o&&n[_]===A&&f(o.parca[_],k,N)})}for(let[_,A]of Object.entries(n))g(_,A);let M=(_,A)=>_.traverse(P=>{if(!P.isMesh||P.isInstancedMesh&&!P.userData.park)return;let k=P.material;!Array.isArray(k)&&(k.visible===!1||k.blending===qn)||A.push({o:P,mask:P.layers.mask})}),m=_=>_.traverse(A=>{if(A.isMesh)for(let P of[].concat(A.material))for(let k of Object.values(P||{}))k?.isTexture&&i.renderer.initTexture(k)});function p(){if(o)return o;let _=performance.now(),A=Zv(i.renderer,i),P=wc(A.duzey,i.renderer.capabilities.getMaxAnisotropy()),k=F=>(F&&(F.grup.visible=!1),F),N;try{N={sag:P,kart:k(Ac(P,{logo:Yv})),bb:k(Tp(P)),parca:{},gruplar:[]};for(let[F,X]of Object.entries(n)){let $=k(Cc(P,X.tur,X.nesne));$&&(N.parca[F]=$)}}catch(F){try{P.dispose()}catch{}throw F}let z=[];M(t.grup,z),M(e.grup,z);for(let[F,X]of Object.entries(n)){let $=[];M(X.nesne,$),d.set(F,$),z.push(...$)}h.clear(),t.grup.add(N.kart.grup),e.grup.add(N.bb.grup),N.gruplar.push(N.kart.grup,N.bb.grup);for(let[F,X]of Object.entries(N.parca))n[F].nesne.add(X.grup),N.gruplar.push(X.grup);u.push(...z),a.duzey=A.duzey,a.neden=A.neden,o=N,"ledL"in r.kart&&f(N.kart,"ledL",r.kart.ledL),"ledOn"in r.kart&&f(N.kart,"ledOn",r.kart.ledOn),"rontgen"in r.bb&&f(N.bb,"rontgen",r.bb.rontgen);for(let[F,X]of Object.entries(r.parca))for(let[$,ft]of Object.entries(X))f(N.parca[F],$,ft);c={},i.scene.traverse(F=>{F.isHemisphereLight?c.hemi=F:F.isDirectionalLight?c.gunes=F:F.isMesh&&F.material?.isShadowMaterial&&(c.zemin=F)});let L=0;for(let F of N.gruplar)F.traverse(X=>{X.isMesh&&X.geometry&&(L+=(X.geometry.index?X.geometry.index.count:X.geometry.attributes.position.count)/3*(X.isInstancedMesh?X.count:1))});a.istatistik={kurmaMs:Math.round(performance.now()-_),ucgen:Math.round(L),park:u.length};try{i.renderer.compile(i.scene,i.camera);for(let F of N.gruplar)m(F)}catch(F){console.warn("Fiziksel \u0131s\u0131nma atland\u0131",F)}if(s)try{for(let F of s())try{let X=Cc(P,F.tur,F.nesne);X&&(i.renderer.compile(X.grup,i.camera,i.scene),m(X.grup),X.grup.traverse($=>$.geometry?.dispose()))}finally{F.at?.()}}catch(F){console.warn("Fiziksel par\xE7a \u0131s\u0131nmas\u0131 atland\u0131",F)}return a.hazir=!0,new URLSearchParams(location.search).has("olcum")&&console.info("Fiziksel g\xF6r\xFCn\xFCm",a),N}function b(_){h.delete(_);let A=n[_];if(!A||!o||o.parca[_])return;let P=null;try{P=Cc(o.sag,A.tur,A.nesne)}catch(z){console.warn("Fiziksel par\xE7a kurulamad\u0131",_,z);return}if(!P)return;let k=a.gorunum==="fiziksel",N=[];if(M(A.nesne,N),d.set(_,N),u.push(...N),k)for(let{o:z}of N)z.layers.set(Rp);P.grup.visible=k,A.nesne.add(P.grup),o.gruplar.push(P.grup),o.parca[_]=P;for(let[z,L]of Object.entries(r.parca[_]||{}))f(P,z,L);try{i.renderer.compile(P.grup,i.camera,i.scene),m(P.grup)}catch{}}function S(_,A){n[_]&&y(_),n[_]=A,g(_,A),o&&(a.gorunum==="fiziksel"?(b(_),i.iste()):h.add(_))}function y(_){if(!n[_])return;delete n[_],delete r.parca[_],h.delete(_);let A=d.get(_);if(A){d.delete(_);let N=new Set(A);for(let{o:z,mask:L}of A)z.layers.mask=L;for(let z=u.length-1;z>=0;z--)N.has(u[z])&&u.splice(z,1)}let P=o?.parca[_];if(!P)return;delete o.parca[_],P.grup.removeFromParent();let k=o.gruplar.indexOf(P.grup);k>=0&&o.gruplar.splice(k,1),o.sag.birak(P.grup)}function E(_){if(!c)return;l||(l={env:i.scene.environmentIntensity,hemi:c.hemi?.intensity,gunes:c.gunes?.intensity,zemin:c.zemin?.material.opacity});let A=_?qv[a.duzey]:l;i.scene.environmentIntensity=A.env,c.hemi&&(c.hemi.intensity=A.hemi),c.gunes&&(c.gunes.intensity=A.gunes),c.zemin&&(c.zemin.material.opacity=A.zemin)}function v(_){let A=_==="fiziksel";if(A){p();for(let P of[...h])b(P)}if(o){for(let{o:P,mask:k}of u)A?P.layers.set(Rp):P.layers.mask=k;for(let P of o.gruplar)P.visible=A;E(A),a.gorunum=_,i.golgeYenile(),i.iste()}}let T=Ap(async _=>{_==="fiziksel"&&!o&&await new Promise(A=>setTimeout(A,30)),v(_)});if(Sp()==="fiziksel")try{v("fiziksel"),T.ayarla("fiziksel",{kaydet:!1,sessiz:!0})}catch(_){console.warn("Fiziksel g\xF6r\xFCn\xFCm a\xE7\u0131lamad\u0131, Sanal g\xF6r\xFCn\xFCmde devam ediliyor",_),T.ayarla("sanal",{kaydet:!0,sessiz:!0})}return{durum:()=>({...a,deriParca:o?Object.keys(o.parca).length:0,park:u.length}),gorunum:_=>T.ayarla(_),kipUygula:v,parcaEkle:S,parcaCikar:y}}function kp(i){if(!i)return;let t=()=>{i.classList.toggle("ayar-acik",!!i.querySelector(".ayarlar:not([hidden])")),i.classList.toggle("erisim-acik",!!i.querySelector(".erisim-panel:not([hidden])"))};t(),new MutationObserver(t).observe(i,{subtree:!0,childList:!0,attributes:!0,attributeFilter:["hidden"]})}function Lp(i){if(!(!i||typeof ResizeObserver>"u")){try{if(CSS.supports("container-type","inline-size"))return}catch{}new ResizeObserver(t=>{let e=t[0].contentRect.width;i.classList.toggle("dar-640",e<=640),i.classList.toggle("dar-380",e<=380)}).observe(i)}}function Dp(i,t){if(!i)return;let e=document;if(!(e.fullscreenEnabled||e.webkitFullscreenEnabled)){i.hidden=!0;return}i.addEventListener("click",()=>{e.fullscreenElement||e.webkitFullscreenElement?(e.exitFullscreen?e.exitFullscreen():e.webkitExitFullscreen?.())?.catch?.(()=>{}):t.requestFullscreen?t.requestFullscreen().catch(()=>{}):t.webkitRequestFullscreen?.()})}var re=document.documentElement,Lt=(i,t=document)=>t.querySelector(i),$e=(i,t=document)=>[...t.querySelectorAll(i)],ai=(i,t)=>{try{localStorage.setItem(i,t)}catch{}},wi=i=>{try{return localStorage.getItem(i)}catch{return null}},Ai=i=>{let t=Lt("#duyuru");t&&(t.textContent=i)},Np=Lt("#ders-veri"),Ji=Np?JSON.parse(Np.textContent):null;re.dataset.js="1";var ue=null,Si=null,ri=null,Ve={},Wr=null,Op=null,Up=["5","6","7","8"];function Bp(i,t=!0){re.dataset.sinif=i,re.dataset.sinifSecili="1",t&&ai("bote-3d-sinif",i);let e=new URL(location.href);e.searchParams.set("sinif",i),history.replaceState(null,"",e);for(let n of $e("[data-sinif-yaz]"))n.textContent=`${i}. s\u0131n\u0131f`;for(let n of $e("a[data-ders-baglanti]")){let s=new URL(n.href,location.href);s.searchParams.set("sinif",i),n.href=s.pathname+s.search}for(let n of $e("[data-sinif-sec]"))n.setAttribute("aria-pressed",String(n.dataset.sinifSec===i));Wr&&Op?.()}var Ws=Lt("#sinif-penceresi"),Fp=new URLSearchParams(location.search).get("sinif");if(Up.includes(Fp))Bp(Fp);else{let i=wi("bote-3d-sinif");if(Up.includes(i)){re.dataset.sinif=i,re.dataset.sinifSecili="1";for(let t of $e("[data-sinif-yaz]"))t.textContent=`${i}. s\u0131n\u0131f`;for(let t of $e("[data-sinif-sec]"))t.setAttribute("aria-pressed",String(t.dataset.sinifSec===i))}Ws&&Ji&&Ws.showModal?.()}document.addEventListener("click",i=>{let t=i.target.closest("[data-sinif-sec]");t&&(Bp(t.dataset.sinifSec),Ws?.open&&(Ws.close(),Lt(".adim.etkin h2")?.focus({preventScroll:!0})),Ji?Ai(`${t.dataset.sinifSec}. s\u0131n\u0131f anlat\u0131m\u0131 se\xE7ildi`):$v())});function $v(){let i=Lt("#dersler");if(!i)return;let t=i.getBoundingClientRect();(t.top<0||t.top>window.innerHeight*.55)&&i.scrollIntoView({behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"start"}),Ai(`${re.dataset.sinif}. s\u0131n\u0131f se\xE7ildi. \u015Eimdi dersi se\xE7in.`)}Lt("#sinif-dugme")?.addEventListener("click",()=>Ws?.showModal?.());var zp=new URLSearchParams(location.search).get("mod")||wi("bote-3d-mod")||(Math.max(screen.width,screen.height)>=1600&&navigator.maxTouchPoints>0?"tahta":"normal"),Vp=window.matchMedia(vp),Gp=zp;function Dh(i,t){Gp=i,re.dataset.mod=i==="tahta"&&Vp.matches?"normal":i,Lt("#tahta-dugme")?.setAttribute("aria-pressed",String(re.dataset.mod==="tahta")),t&&(ai("bote-3d-mod",i),ue?.guvenliYenile())}Dh(zp,!1);Vp.addEventListener?.("change",()=>{let i=re.dataset.mod;Dh(Gp,!1),re.dataset.mod!==i&&ue?.guvenliYenile()});Lt("#tahta-dugme")?.addEventListener("click",()=>Dh(re.dataset.mod==="tahta"?"normal":"tahta",!0));var Hp=()=>re.dataset.theme==="dark"?"#17121f":"#e9e5f1";Lt("#tema-dugme")?.addEventListener("click",()=>{let i=re.dataset.theme!=="dark";i?re.dataset.theme="dark":delete re.dataset.theme,ai("bote-theme",i?"dark":"light"),ue?.arkaPlan(Hp())});Dp(Lt("#tam-ekran"),re);var Ic=Lt("#ogretmen-dugme");function Nh(i){re.dataset.ek=i?"acik":"",Ic?.setAttribute("aria-expanded",String(i)),i&&Lt("#ogretmen")?.focus()}Ic?.addEventListener("click",()=>Nh(re.dataset.ek!=="acik"));Lt("#ogretmen-kapat")?.addEventListener("click",()=>{Nh(!1),Ic?.focus()});document.addEventListener("keydown",i=>{i.key==="Escape"&&re.dataset.ek==="acik"&&!Ws?.open&&(Nh(!1),Ic?.focus())});document.addEventListener("click",i=>{let t=i.target.closest("[data-secenek]");if(!t)return;let e=t.closest(".soru");if(!e||e.dataset.cevaplandi)return;e.dataset.cevaplandi="1";let n=t.hasAttribute("data-dogru");t.classList.add(n?"dogru":"yanlis"),e.querySelector("[data-dogru]")?.classList.add("dogru");let s=e.querySelector(".aciklama");s&&(s.hidden=!1);let r=e.closest(".sinav"),a=$e(".soru[data-cevaplandi]",r),o=a.filter(c=>c.querySelector(".dogru[data-dogru]")&&!c.querySelector(".yanlis")),l=Lt(".sinav-sonuc",r);l&&a.length===$e(".soru",r).length&&(l.textContent=`${a.length} sorudan ${o.length} do\u011Fru.`),Ai(n?"Do\u011Fru cevap":"Yanl\u0131\u015F cevap; do\u011Fru se\xE7enek i\u015Faretlendi")});Ji&&Jv();function Jv(){let i=yp[Ji.slug],t=$e(".adim"),e=0,n={bekleme:1e3,ters:!1,akim:!1,basili:!1,direncCikti:!1,sureCarpan:1,delaysiz:!1},s=null,r=null,a=null,o=null,l=null,c=[],u={};function d(C,U=!1){e=Math.max(0,Math.min(t.length-1,C)),t.forEach((ot,Ot)=>ot.classList.toggle("etkin",Ot===e));let Y=t[e];Lt("#adim-sayac").textContent=`${e+1} / ${t.length}`,Lt("#ilerleme").style.width=`${(e+1)/t.length*100}%`,Lt("#geri").disabled=e===0,Lt("#ileri").disabled=e===t.length-1;let ct=Lt("h2",Y).textContent;for(let[ot,Ot]of[["#mini-sayac",`${e+1}/${t.length}`],["#mini-baslik",ct],["#kisa-baslik",ct]]){let Me=Lt(ot);Me&&(Me.textContent=Ot)}for(let[ot,Ot]of[["#mini-geri",e===0],["#mini-ileri",e===t.length-1]]){let Me=Lt(ot);Me&&(Me.disabled=Ot)}let mt=new URL(location.href);mt.hash=Y.id,history.replaceState(null,"",mt),Lt(".kart-govde")?.scrollTo(0,0),U||Ai(`Ad\u0131m ${e+1}: ${Lt("h2",Y).textContent}`),be(),ue&&yt(Y.dataset.id)}Lt("#geri").addEventListener("click",()=>d(e-1)),Lt("#ileri").addEventListener("click",()=>d(e+1)),document.addEventListener("keydown",C=>{C.target.closest("input, textarea, select")||Ws?.open||C.altKey||C.ctrlKey||C.metaKey||(["ArrowRight","PageDown"].includes(C.key)&&(C.preventDefault(),d(e+1)),["ArrowLeft","PageUp"].includes(C.key)&&(C.preventDefault(),d(e-1)))});let h=null,f=(C,U)=>{for(;C&&C!==U;C=C.parentElement)if(C.scrollWidth>C.clientWidth+1&&/auto|scroll/.test(getComputedStyle(C).overflowX))return!0;return!1};Lt(".kart-alani").addEventListener("touchstart",C=>{let U=C.touches[0];h=C.touches.length===1&&!C.target.closest?.("input, select, textarea, .ayarlar, .erisim-panel")&&!f(C.target,C.currentTarget)?{x:U.clientX,y:U.clientY}:null},{passive:!0}),Lt(".kart-alani").addEventListener("touchend",C=>{if(!h)return;let U=C.changedTouches[0],Y=U.clientX-h.x,ct=U.clientY-h.y;h=null,Math.abs(Y)>70&&Math.abs(ct)<40&&d(e+(Y<0?1:-1))},{passive:!0});let g=Lt(".ders"),M=Lt(".kart-alani"),m=Lt(".panel-kenar"),p=Lt("#panel-dugme");kp(M),Lp(Lt(".sahne-arac"));let b=window.matchMedia("(orientation: portrait), (max-width: 820px)");function S(C,U=!0){re.dataset.panel=C?"acik":"kapali",p?.setAttribute("aria-expanded",String(C)),p?.setAttribute("aria-label",C?"Anlat\u0131m panelini kapat":"Anlat\u0131m panelini a\xE7"),M.inert=!C&&!b.matches,U&&(ai("bote-3d-panel",C?"acik":"kapali"),Ai(C?"Anlat\u0131m paneli a\xE7\u0131ld\u0131":"Anlat\u0131m paneli kapand\u0131; ad\u0131mlar alttaki \xE7ubuktan ge\xE7ilir"))}S(wi("bote-3d-panel")!=="kapali",!1),p?.addEventListener("click",()=>S(re.dataset.panel!=="acik")),Lt("#mini-ac")?.addEventListener("click",()=>S(!0)),Lt("#mini-geri")?.addEventListener("click",()=>d(e-1)),Lt("#mini-ileri")?.addEventListener("click",()=>d(e+1));let y=C=>{C?g.style.setProperty("--panel-w",`${Math.round(C)}px`):g.style.removeProperty("--panel-w")},E=C=>Math.max(300,Math.min(g.clientWidth*.62,C));y(Number(wi("bote-3d-panel-w"))||0);let v=()=>ai("bote-3d-panel-w",String(parseInt(g.style.getPropertyValue("--panel-w"),10)||"")),T=null,_=110;m?.addEventListener("pointerdown",C=>{C.target.closest("#panel-dugme")||re.dataset.panel!=="acik"||b.matches||(m.setPointerCapture(C.pointerId),T={x:C.clientX,w:M.getBoundingClientRect().width,once:g.style.getPropertyValue("--panel-w")},re.dataset.suruklenen="1")}),m?.addEventListener("pointermove",C=>{if(!T)return;let U=C.clientX-T.x,Y=T.w+(re.dataset.panelYan==="sol"?U:-U);Y<E(0)-_?re.dataset.kapanacak="1":delete re.dataset.kapanacak,y(E(Y))});let A=C=>{if(!T)return;let U=T;if(T=null,delete re.dataset.suruklenen,re.dataset.kapanacak&&(delete re.dataset.kapanacak,U.once?g.style.setProperty("--panel-w",U.once):g.style.removeProperty("--panel-w"),C?.type==="pointerup")){S(!1);return}v()};m?.addEventListener("pointerup",A),m?.addEventListener("pointercancel",A),m?.addEventListener("dblclick",C=>{C.target.closest("#panel-dugme")||(y(0),ai("bote-3d-panel-w",""))}),m?.addEventListener("keydown",C=>{if(C.target!==m||!["ArrowLeft","ArrowRight"].includes(C.key))return;C.preventDefault(),C.stopPropagation();let U=C.key==="ArrowLeft"==(re.dataset.panelYan!=="sol");y(E(M.getBoundingClientRect().width+(U?40:-40))),v()});function P(C,U){re.dataset.panelYan=C;for(let Y of $e("[data-yan]"))Y.setAttribute("aria-pressed",String(Y.dataset.yan===C));U&&ai("bote-3d-panel-yan",C)}P(wi("bote-3d-panel-yan")==="sol"?"sol":"sag",!1);let k=Lt("#ayarlar"),N=Lt("#ayar-dugme"),z=Lt("#ayar-perde");function L(C,U=!1){k&&(k.hidden=!C,z&&(z.hidden=!C),N.setAttribute("aria-expanded",String(C)),C?(kt(),[...k.querySelectorAll("input, button")].find(Y=>Y.id!=="ayar-kapat"&&Y.offsetParent!==null)?.focus()):U&&N.focus())}N?.addEventListener("click",C=>{C.stopPropagation(),L(k.hidden)}),Lt("#ayar-kapat")?.addEventListener("click",()=>L(!1,!0)),document.addEventListener("click",C=>{k&&!k.hidden&&!C.target.closest("#ayarlar, #ayar-dugme")&&L(!1)}),document.addEventListener("keydown",C=>{C.key==="Escape"&&k&&!k.hidden&&L(!1,!0)});let F=Lt("#panel-genislik"),X=Lt("#genislik-deger"),$={dar:"Dar",orta:"Orta",genis:"Geni\u015F"},ft={dar:0,orta:50,genis:100};function j(){let C=window.innerWidth,U=(Y,ct,mt)=>E(Math.max(Y,Math.min(ct*C,mt)));return re.dataset.mod==="tahta"?{dar:U(380,.29,1100),orta:U(440,.37,1500),genis:U(560,.5,1900)}:{dar:U(290,.26,440),orta:U(330,.34,560),genis:U(420,.46,900)}}function rt(C){let U=j();return C<=50?U.dar+(U.orta-U.dar)*C/50:U.orta+(U.genis-U.orta)*(C-50)/50}function ut(C){let U=j();return C<=U.orta?U.orta>U.dar?Math.max(0,(C-U.dar)/(U.orta-U.dar)*50):0:U.genis>U.orta?Math.min(100,50+(C-U.orta)/(U.genis-U.orta)*50):100}function Wt(){if(!F)return;let C=Number(F.value),U=rt(C),Y=Object.keys(ft).find(mt=>Math.abs(ft[mt]-C)<=3)||"",ct=Math.round(U/Math.max(1,g.clientWidth)*100);X&&(X.textContent=Y?`${$[Y]} \xB7 %${ct}`:`%${ct}`),F.setAttribute("aria-valuetext",`${Y?`${$[Y]}, `:""}ekran\u0131n y\xFCzde ${ct} kadar\u0131`),F.style.setProperty("--dolu",`${C}%`);for(let mt of $e("[data-panel-boyut]:not(html)"))mt.setAttribute("aria-pressed",String(mt.dataset.panelBoyut===Y))}function kt(){F&&(F.value=String(Math.round(ut(M.getBoundingClientRect().width||j().orta))),Wt())}let pe=()=>{re.dataset.suruklenen&&!T&&!q&&delete re.dataset.suruklenen};F?.addEventListener("pointerdown",()=>{re.dataset.suruklenen="1"}),F?.addEventListener("pointerup",pe),F?.addEventListener("input",()=>{re.dataset.suruklenen="1",y(rt(Number(F.value))),Wt()}),F?.addEventListener("change",()=>{pe(),v()});function me(C,U){re.dataset.panelBoyut=C,U&&(y(0),ai("bote-3d-panel-w",""),ai("bote-3d-panel-boyut",C)),F&&(F.value=String(ft[C]),Wt())}me(["dar","orta","genis"].includes(wi("bote-3d-panel-boyut"))?wi("bote-3d-panel-boyut"):"orta",!1);let ae=[.9,1,1.15,1.3,1.5],tt=Math.max(0,ae.indexOf(Number(wi("bote-3d-yazi"))||1));function st(C,U){tt=Math.max(0,Math.min(ae.length-1,C)),re.style.setProperty("--yazi",String(ae[tt]));let Y=Lt("#yazi-deger");Y&&(Y.textContent=`%${Math.round(ae[tt]*100)}`),U&&ai("bote-3d-yazi",String(ae[tt]))}st(tt,!1),document.addEventListener("click",C=>{let U=C.target.closest("[data-panel-boyut]:not(html), [data-yazi], [data-yan]");U&&(U.dataset.panelBoyut&&me(U.dataset.panelBoyut,!0),U.dataset.yazi&&st(tt+Number(U.dataset.yazi),!0),U.dataset.yan&&P(U.dataset.yan,!0))});let xt=Lt("#tahmin-ayar");xt&&(xt.checked=wi("bote-3d-tahmin")!=="hayir",xt.addEventListener("change",()=>ai("bote-3d-tahmin",xt.checked?"evet":"hayir")));let Xt={kisa:()=>{let C=Lt(".tutamac"),U=Lt(".kart-ust"),Y=Lt(".kart-alt"),ct=!!(Y&&U&&Y.offsetTop<U.offsetTop+U.offsetHeight);return(C?.offsetHeight||0)+Math.max(U?.offsetHeight||0,ct?Y.offsetHeight:0)+(ct?0:Y?.offsetHeight||0)+2},yarim:()=>g.clientHeight*.5,tam:()=>g.clientHeight*.92},It=88,te=()=>Xt.yarim()-Xt.kisa()+2>=It,we=C=>C==="yarim"&&!te()?"kisa":C,G=["kisa","yarim","tam"].includes(wi("bote-3d-sayfa"))?wi("bote-3d-sayfa"):"yarim";function et(C,U=!0,Y=!1){if(!b.matches){delete re.dataset.sayfa,g.style.removeProperty("--sayfa-h"),ue?.gorunurAlan(0,!0),S(re.dataset.panel!=="kapali",!1);return}G=C;let ct=we(C);re.dataset.sayfa=ct,M.inert=!1;let mt=Math.round(Xt[ct]());Y&&(re.dataset.suruklenen="1"),g.style.setProperty("--sayfa-h",`${mt}px`),Y&&requestAnimationFrame(()=>delete re.dataset.suruklenen),ue?.gorunurAlan(mt,Y),U&&ai("bote-3d-sayfa",C)}let q=null;for(let C of[Lt(".tutamac"),Lt(".kart-ust")].filter(Boolean)){C.addEventListener("pointerdown",Y=>{if(!b.matches||Y.target.closest("button"))return;C.setPointerCapture(Y.pointerId);let ct=performance.now();q={y:Y.clientY,h:M.getBoundingClientRect().height,sonY:Y.clientY,sonT:ct,hiz:0},re.dataset.suruklenen="1"}),C.addEventListener("pointermove",Y=>{if(!q)return;let ct=performance.now(),mt=Math.max(Xt.kisa(),Math.min(Xt.tam(),q.h+(q.y-Y.clientY)));g.style.setProperty("--sayfa-h",`${Math.round(mt)}px`),q.hiz=(q.sonY-Y.clientY)/Math.max(1,ct-q.sonT),q.sonY=Y.clientY,q.sonT=ct});let U=Y=>{if(!q)return;let ct=q;q=null,delete re.dataset.suruklenen;let mt=M.getBoundingClientRect().height,ot=Math.abs(Y.clientY-ct.y)>6,Ot=te(),Me=Ot?"yarim":"tam",Se;ot?ct.hiz>.45?Se=mt<Xt.yarim()?Me:"tam":ct.hiz<-.45?Se=Ot&&mt>Xt.yarim()?"yarim":"kisa":Se=(Ot?["kisa","yarim","tam"]:["kisa","tam"]).sort((tn,mn)=>Math.abs(Xt[tn]()-mt)-Math.abs(Xt[mn]()-mt))[0]:Se=re.dataset.sayfa==="kisa"?Me:"kisa",et(Se),Ai({kisa:"Kartlar k\xFC\xE7\xFCld\xFC",yarim:"Kartlar yar\u0131m ekran",tam:"Kartlar tam ekran"}[Se])};C.addEventListener("pointerup",U),C.addEventListener("pointercancel",U)}let lt=()=>et(G,!1,!0);b.addEventListener?.("change",lt);let pt=0;window.addEventListener("resize",()=>{clearTimeout(pt),pt=setTimeout(()=>{b.matches&&et(G,!1,!0)},120)}),et(G,!1,!0),window.addEventListener("hashchange",()=>{let C=t.findIndex(U=>`#${U.id}`===location.hash);C>=0&&C!==e&&d(C)});let vt=t.findIndex(C=>`#${C.id}`===location.hash);d(vt>0?vt:0,!0),document.addEventListener("click",C=>{let U=C.target.closest("[data-eylem]");if(!U||!ue)return;let Y=U.dataset.eylem,ct=ot=>U.setAttribute("aria-pressed",String(ot));if(Y==="akim"&&(dt(!n.akim),ct(n.akim)),Y==="hiz"){n.bekleme=Number(U.dataset.deger);for(let ot of $e('[data-eylem="hiz"]',U.parentElement))ot.setAttribute("aria-pressed",String(ot===U));l==="blink"&&ee("blink")}if(Y==="sure"){n.sureCarpan=Number(U.dataset.deger);for(let ot of $e('[data-eylem="sure"]',U.parentElement))ot.setAttribute("aria-pressed",String(ot===U));l==="trafik"&&ee("trafik")}if(Y==="ters"&&(n.ters=!n.ters,ct(n.ters),Ve.led1.nesne.rotation.y=n.ters?Math.PI:0,ue.golgeYenile(),ue.etiketKoy(n.ters?[{nokta:_t("parca:led1"),metin:"Uzun bacak art\u0131k 16. s\xFCtunda"}]:[]),ee(l)),Y==="rontgen"){let ot=U.getAttribute("aria-pressed")!=="true";ct(ot),ri.rontgen(ot),ue.iste(),Ai(ot?"R\xF6ntgen a\xE7\u0131k: i\xE7teki metal \u015Feritler g\xF6r\xFCn\xFCyor":"R\xF6ntgen kapal\u0131")}Y==="direnc-cikar"&&(n.direncCikti=!n.direncCikti,ct(n.direncCikti),Ve.r2.nesne.visible=!n.direncCikti,ue.golgeYenile(),B()),Y==="delaysiz"&&(n.delaysiz=!n.delaysiz,ct(n.delaysiz),ee("trafik"));let mt=C.target.closest("[data-gorunum]");mt&&Q(mt.dataset.gorunum)});let Ut=C=>{l!=="buton"&&!n.butonDene||(n.basili=C,B())};document.addEventListener("pointerdown",C=>{let U=C.target.closest('[data-eylem="buton"]');U&&(U.setPointerCapture?.(C.pointerId),Ut(!0))});for(let C of["pointerup","pointercancel","lostpointercapture"])document.addEventListener(C,U=>{U.target.closest?.('[data-eylem="buton"]')&&n.basili&&Ut(!1)});document.addEventListener("keydown",C=>{(C.key===" "||C.key==="Enter")&&C.target.closest?.('[data-eylem="buton"]')&&!C.repeat&&(C.preventDefault(),Ut(!0))}),document.addEventListener("keyup",C=>{(C.key===" "||C.key==="Enter")&&C.target.closest?.('[data-eylem="buton"]')&&Ut(!1)}),$e(".gorunum button").forEach(C=>C.addEventListener("click",()=>Q(C.dataset.gorunum))),Lt("#yakinlas")?.addEventListener("click",()=>ue?.yakinlas(.8)),Lt("#uzaklas")?.addEventListener("click",()=>ue?.yakinlas(1.25));let Ht=Lt(".sahne-alani");requestAnimationFrame(()=>setTimeout(Bt,20));function Bt(){if(ue=Xf(Lt("#sahne"),{arkaPlan:Hp(),olay:ge,guvenliAlan:D}),!ue){re.dataset.webgl="yok";return}pp(ue.renderer.capabilities.getMaxAnisotropy()),Si=rp(ue.hedefler),ue.scene.add(Si.grup),ri=ap(ue.hedefler),ue.scene.add(ri.grup),Ve=i.devre?_p(i.devre,ue.hedefler):{};for(let U of Object.values(Ve))U.nesne.visible=!1,ue.scene.add(U.nesne),U.kutular=R(U);ue.dokunmaDinle(Jt);let C=Pp({S:ue,kart:Si,bb:ri,parcalar:Ve,html:re});b.matches&&ue.gorunurAlan(Math.round(Xt[we(G)]()),!0),yt(t[e].dataset.id,!0),requestAnimationFrame(()=>Ht.classList.add("hazir")),new URLSearchParams(location.search).has("olcum")&&(Oe(),window.__3d={S:ue,kart:Si,bb:ri,parcalar:Ve,adimaGit:d,kameraBul:V,gorunumSec:Q,adim:()=>t[e].dataset.id,gercekci:C})}function D(){let C=Lt("#sahne").getBoundingClientRect(),U=re.dataset.mod==="tahta"?24:14,Y=U,ct=U,mt=$e(".ipucu",Ht).find(Se=>Se.offsetParent!==null);mt&&(Y=Math.max(Y,mt.getBoundingClientRect().bottom-C.top+8));let ot=Lt(".sahne-arac",Ht);ot&&getComputedStyle(ot).opacity!=="0"&&(ct=Math.max(ct,C.bottom-ot.getBoundingClientRect().top+8));let Ot=[],Me=Lt("#lejant");if(Me&&Me.offsetParent!==null){let Se=Me.getBoundingClientRect();Ot.push({x0:Se.left-C.left,y0:Se.top-C.top,x1:Se.right-C.left,y1:Se.bottom-C.top})}return{ust:Y,alt:ct,sol:U,sag:U,engel:Ot}}function ge(C){C==="baglam-kaybi"&&Ht.classList.add("baglam-kaybi"),C==="baglam-geri"&&Ht.classList.remove("baglam-kaybi")}Lt("#yeniden-yukle")?.addEventListener("click",()=>location.reload());let se=new Ie;function R(C){let U=C.nesne,Y={};for(let[ct,mt]of C.pozlar?[["takili",1],["havada",0]]:[["takili",1]]){U.userData.bacak?.(mt);let ot=new Pn;for(let Ot of U.children)!Ot.isMesh||!Ot.material||Ot.material.visible===!1||Ot.material.blending===qn||(Ot.updateMatrix(),Ot.geometry.boundingBox||Ot.geometry.computeBoundingBox(),ot.union(Ot.geometry.boundingBox.clone().applyMatrix4(Ot.matrix)));Y[ct]=ot}return U.userData.bacak?.(1),Y}function x(C,U="takili"){let Y=C.nesne,ct=C.pozlar?.[U]||C.pozlar?.takili||Y.position;return(C.kutular[U]||C.kutular.takili).clone().applyMatrix4(se.compose(ct,Y.quaternion,Y.scale))}function V(C,U={}){if(typeof C!="string"){let mt=Ve[C.parca];return{kutu:x(mt,C.poz||"takili").expandByScalar(C.pay??3),yon:C.yon}}let Y=Ch[C]||Ch.genel,ct=new Pn(new I(Y.kutu[0],Y.kutu[1],Y.kutu[2]),new I(Y.kutu[3],Y.kutu[4],Y.kutu[5]));for(let mt of U.parca||[]){let ot=Ve[mt];if(!ot)continue;let Ot=U.poz&&U.poz[mt]||"takili";(ot.tur==="kablo"?Y.kablolar:Ot!=="takili")&&ct.union(x(ot,Ot))}return{kutu:ct,yon:Y.yon}}let W={ustten:[0,.995,.1],onden:[0,.27,.96],yandan:[.96,.3,.06]};function Q(C){let U=i.adimlar[t[e].dataset.id]||{},Y=V(U.kamera||"genel",U);ue.kameraGit(W[C]?{...Y,yon:W[C]}:Y);for(let ct of $e(".gorunum button"))ct.setAttribute("aria-pressed",String(ct.dataset.gorunum===C))}function _t(C){let[U,Y,ct]=C.split(":");if(U==="alan"){let Ot=Si.alanlar[Y]||ri.alanlar[Y];return new I(Ot[0],Ot[1]+Ot[4]/2+1.5,Ot[2])}if(U==="pin")return Mi(Y).add(new I(0,2.4,0));if(U==="delik")return Qe(Number(Y),ct).add(new I(0,1,0));if(U==="ray")return ii(Y.slice(0,-1),Y.slice(-1),Y.endsWith("+")?4:28).add(new I(0,1,0));if(U==="parca"){let Ot=Ve[Y],Me=(i.adimlar[t[e].dataset.id]?.poz||{})[Y]||"takili";return(Ot.pozlar?Ot.pozlar[Me].clone():Ot.nesne.position.clone()).add(Ot.nesne.userData.tepe||new I(0,6,0))}let mt=Ve[U],ot=(i.adimlar[t[e].dataset.id]?.poz||{})[U]||"takili";return mt.pozlar[ot].clone().add(new I(Y==="anot"?-1.27:1.27,Y==="anot"?-16.6:-11.6,0))}function yt(C,U=!1){let Y=i.adimlar[C]||{};wt(),dt(!1),Object.assign(n,{ters:!1,basili:!1,direncCikti:!1,delaysiz:!1,bekleme:1e3,sureCarpan:1});for(let mt of $e("[data-eylem]"))mt.setAttribute("aria-pressed",String(["1000","1"].includes(mt.dataset.deger)));for(let mt of $e(".gorunum button"))mt.setAttribute("aria-pressed",String(mt.dataset.gorunum==="egik"));Ve.led1&&(Ve.led1.nesne.rotation.y=0),ri.rontgen(!1),ri.grupGoster([]),$t(),Si.ledOn(!!Y.program);let ct=new Set(Y.parca||[]);for(let[mt,ot]of Object.entries(Ve)){if(!ct.has(mt)){ot.nesne.visible=!1,ot.kutu&&(ot.kutu.userData.etkin=!1);continue}if(ot.kutu&&(ot.kutu.userData.etkin=!0),ot.tur==="kablo"){ot.nesne.visible||(ot.nesne.visible=!0,ot.nesne.userData.buyut(U?1:0),U||ue.tween(700,tn=>ot.nesne.userData.buyut(tn),!0));continue}let Ot=Y.poz&&Y.poz[mt]||"takili",Me=ot.pozlar[Ot],Se=Ot==="takili"?1:0;if(ot.nesne.visible||(ot.nesne.visible=!0,ot.nesne.position.copy(Me).add(new I(0,U?0:14,0)),ot.tk=Se,ot.nesne.userData.bacak?.(Se)),!ot.nesne.position.equals(Me)){let tn=ot.nesne.position.clone(),mn=ot.tk??Se;ot.tk=Se,ue.tween(650,Ge=>{ot.nesne.position.lerpVectors(tn,Me,Ge),ot.nesne.userData.bacak?.(mn+(Se-mn)*Ge)},!0)}}Ve.r2&&ct.has("r2")&&(Ve.r2.nesne.visible=!0),ue.golgeYenile();for(let mt of c)ue.scene.remove(mt);c=(Y.vurgu||[]).map(mt=>op(ue.scene,Si.alanlar[mt]||ri.alanlar[mt])),ue.etiketKoy((Y.etiket||[]).map(([mt,ot,Ot])=>({nokta:_t(mt),metin:ot,tur:Ot}))),Ht.dataset.ipucu=(Y.kontrol||[]).includes("delik")?"delik":Y.dokun?"dokun":"",ue.kameraGit(V(Y.kamera||"genel",Y),U),l=null,Y.program&&ee(Y.program),re.dataset.kesif==="acik"&&Tt(),ue.iste()}let nt=Ji.kod||[];function ht(){let C=nt.findIndex(ct=>ct.startsWith("void loop")),U=[],Y=[];for(let ct=C+1;ct<nt.length;ct++)nt[ct].trim()&&Y.push(ct+1),nt[ct].includes("delay(")&&(U.push(Y),Y=[]);return U}let St=ht();function Yt(C){for(let U of $e(".kod-satir.calisiyor"))U.classList.remove("calisiyor");for(let U of C||[])for(let Y of $e(`.adim.etkin .kod-satir[data-no="${U}"]`))Y.classList.add("calisiyor")}function bt(C,U=0){return nt.findIndex((ct,mt)=>mt>=U&&ct.includes(C))+1}function wt(){clearTimeout(s),s=null,clearTimeout(r),r=null,Yt([])}function $t(){for(let C of Object.values(Ve))C.tur==="led"&&C.nesne.userData.ac(!1);Si.ledL(!1);for(let C of Object.values(u))C.yanik=!1}function ee(C){if(wt(),l=C,C==="blink"){let U=Y=>{le(Y),Yt(St[Y?0:1]),s=setTimeout(()=>U(!Y),n.bekleme)};U(!0)}C==="buton"&&B(),C==="trafik"&&at(0)}function le(C){Si.ledL(C);let U=C&&!n.ters;Ve.led1?.nesne.userData.ac(U),Et("led1",U),ue.iste()}function B(){if(!Ve.buton)return;Ve.buton.nesne.userData.bas(n.basili),clearTimeout(r),r=null;let C=bt("digitalRead"),U=bt("HIGH",C),Y=bt("else"),ct=bt("LOW",Y-1);if(n.direncCikti&&!n.basili){let mt=()=>{let ot=Math.random()<.5;le(ot),Yt(ot?[C,U]:[C,Y,ct]),r=setTimeout(mt,90+Math.random()*380)};mt()}else le(n.basili),Yt(n.basili?[C,U]:[C,Y,ct]);ue.iste()}let Mt={kirmizi:"ledK",sari:"ledS",yesil:"ledY"};function at(C){let U=Ji.trafikSirasi?.length?Ji.trafikSirasi:[{isiklar:["kirmizi"],sure:3e3},{isiklar:["yesil"],sure:3e3},{isiklar:["sari"],sure:1e3}];if(n.delaysiz){for(let[ct,mt]of Object.entries(Mt))Ve[mt].nesne.userData.ac(.35),Et(mt,!0);Yt(St.flat()),ue.iste();return}let Y=U[C%U.length];for(let[ct,mt]of Object.entries(Mt)){let ot=Y.isiklar.includes(ct);Ve[mt].nesne.userData.ac(ot),Et(mt,ot)}Yt(St[C%U.length]),ue.iste(),s=setTimeout(()=>at(C+1),Y.sure*n.sureCarpan)}function At(){if(Object.keys(u).length)return;let C=(U,Y,ct,mt)=>{u[U]={akim:fp(ue.scene,xp(Ve[Y],Ve[ct],Ve[mt],Ve.kgnd)),yanik:!1}};(i.devre==="led"||i.devre==="buton")&&C("led1","k13","led1","r1"),i.devre==="trafik"&&(C("ledK","kK","ledK","rK"),C("ledS","kS","ledS","rS"),C("ledY","kY","ledY","rY"))}function Et(C,U){let Y=u[C];Y&&(Y.yanik=U,Y.akim.gorunur(n.akim&&U))}function dt(C){n.akim=C,clearTimeout(o),C?(At(),(i.devre==="led"||i.devre==="buton")&&(u.led1.yanik=Ve.led1.nesne.userData.yanik??u.led1.yanik),a??=ue.yavasGuncelleyici((U,Y)=>{if(!n.akim)return!1;let ct=!1;for(let mt of Object.values(u))mt.yanik&&(mt.akim.ilerlet(Y),ct=!0);return ct}),o=setTimeout(()=>{dt(!1);for(let U of $e('[data-eylem="akim"]'))U.setAttribute("aria-pressed","false")},45e3)):a&&(a(),a=null);for(let U of Object.values(u))U.akim.gorunur(C&&U.yanik);ue?.iste()}let Zt=Lt("#kesif-sablon"),Gt=Lt("#lejant");Gt&&window.matchMedia("(min-width: 700px) and (min-height: 600px)").matches&&(Gt.open=!0),Gt?.addEventListener("toggle",()=>ue?.guvenliYenile());let Le=(C,U)=>{let Y=Zt?.content.querySelector(`[data-kat="${U}"] svg`);C&&Y&&C.replaceChildren(Y.cloneNode(!0))},K=C=>/^\d+$/.test(C)?["3","5","6","9","10","11"].includes(C)?`~${C}`:C:C.startsWith("GND")?"GND":{"3.3V":"3,3V",VIN:"Vin"}[C]||C;function gt(C,U,Y,ct){let mt=Rh(C);if(!mt)return null;let ot=document.createElement("button");ot.type="button",ot.className=ct?"kesif-isaret pin-isaret":"kesif-isaret",ot.dataset.kat=mt,ot.dataset.id=C;let Ot=document.createElement("span");Ot.className="ki-daire",Le(Ot,mt);let Me=document.createElement("span");return Me.className="ki-no",Me.textContent=ct||String(U),Me.setAttribute("aria-hidden","true"),ot.append(Ot,Me),ot.setAttribute("aria-label",ct?`${Y}, ${ro[mt].ad} grubu`:`${U}. ke\u015Fif noktas\u0131, ${ro[mt].ad} grubu`),ot.addEventListener("click",Se=>{Se.stopPropagation();for(let tn of $e(".kesif-isaret[aria-current]"))tn.removeAttribute("aria-current");ot.setAttribute("aria-current","true"),he(C,xt?xt.checked:!0,Y)}),{el:ot,kat:mt}}function Tt(){if(!ue)return;let C=i.adimlar[t[e].dataset.id]||{},U=[],Y=new Set,ct=0,mt=(ot,Ot,Me,Se,tn=0)=>{let mn=gt(ot,ct+1,Me,Se);mn&&(Se||ct++,Y.add(mn.kat),U.push({el:mn.el,oncelik:so[ot].oncelik,adim:tn,...Ot}))};for(let ot of Si.kesifNoktalari)mt(ot.id,{nokta:ot.nokta},ot.ozel);for(let ot of ri.kesifNoktalari)mt(ot.id,{nokta:ot.nokta},ot.ozel);for(let[ot,Ot]of Object.entries(Ve)){if(!(C.parca||[]).includes(ot))continue;let Me=((C.poz||{})[ot]||"takili")==="takili"?1:0;for(let[Se,tn]of Ot.nesne.userData.kesifYerleri?.(Me)||[])mt(Se,{nesne:Ot.nesne,yerel:tn},Ot.ozel?.[Se])}for(let ot of Si.pinler)mt(ot.kesif,{nokta:ot.nokta},ot.ozel,K(ot.ad),2.54);ue.isaretKoy(U);for(let ot of $e("li[data-kat]",Gt||document.createElement("i")))ot.hidden=!Y.has(ot.dataset.kat)}let ne=Lt("#kesif-dugme");ne?.addEventListener("click",()=>{let C=re.dataset.kesif!=="acik";re.dataset.kesif=C?"acik":"",ne.setAttribute("aria-pressed",String(C)),ue?.guvenliYenile(),C?(Tt(),Ai("Ke\u015Fif modu a\xE7\u0131k: i\u015Faretli par\xE7alara dokun. \u0130\u015Faretin rengi ve simgesi par\xE7an\u0131n grubunu g\xF6sterir.")):(ue?.isaretKoy([]),be(),Ai("Ke\u015Fif modu kapand\u0131"))});function Jt(C,U){if(!C){be();return}let Y=i.adimlar[t[e].dataset.id]||{};if(C.bb&&U&&(Y.kontrol||[]).includes("delik")){let ct=ri.grupBul(U);if(ct){ri.grupGoster(ct.delikler),ue.etiketKoy([{nokta:ct.delikler[0].clone().add(new I(0,1.5,0)),metin:`${ct.ad}: ba\u011Fl\u0131`,tur:"yesil"}]),Ai(`${ct.ad} birbirine ba\u011Fl\u0131`),ue.iste();return}}if(C.parca==="buton"&&l==="buton"){n.basili=!0,B(),setTimeout(()=>{n.basili=!1,B()},700);return}C.kesif&&he(C.kesif,re.dataset.kesif==="acik"&&(xt?xt.checked:!0),C.ozel)}function de(C){let U=Ji.kavramlar||{},Y=Ji.kesifIcerik||{},ct=so[C];return U[C]?{...U[C],ad:ct?.ad||U[C].ad}:Y[C]?{...Y[C],ad:Y[C].ad||ct?.ad||C}:ct?.kavram&&U[ct.kavram]?{...U[ct.kavram],ad:ct.ad}:ct?{ad:ct.ad,yalin:ct.kisa}:null}let Ft=!1,Ae="";function he(C,U=!1,Y=""){let ct=Lt("#bilgi"),mt=C?de(C):null;if(!ct||!mt)return;let ot=re.dataset.sinif||"6",Ot=C!==Wr||ct.hidden;U!=="koru"&&(Ft=!!U,Ae=Y||"");let Me=Lt("#kesif-soru"),Se=Lt("#bilgi-cevap");Me&&(Me.hidden=!Ft),Se&&(Se.hidden=Ft);let tn=Rh(C),mn=Lt("#bilgi-kat");mn&&(mn.hidden=!tn,tn&&(mn.dataset.kat=tn,Lt("#bilgi-kat-ad").textContent=ro[tn].ad,Le(Lt(".ki-daire",mn),tn))),Lt("#bilgi-baslik").textContent=mt.ad;let Ge=Lt("#bilgi-ozel");if(Ge&&(Ge.textContent=Ae,Ge.hidden=!Ae||Ae===mt.ad),mt.yalin?(Lt("#bilgi-teknik").textContent=mt.yalin,Lt("#bilgi-sosyal").textContent="",ct.classList.add("yalin")):(Lt("#bilgi-teknik").innerHTML=mt.teknik?.[ot]||mt.teknik?.["6"]||"",Lt("#bilgi-sosyal").innerHTML=mt.sosyal?.[ot]||"",ct.classList.toggle("yalin",!mt.sosyal?.[ot])),Ot){let bn=Lt("#bilgi-gorsel");if(bn){bn.hidden=!0;let w=Lt("img",bn);w&&(w.removeAttribute("src"),w.alt="")}}Wr=C,ct.hidden=!1,b.matches&&G==="tam"&&et("yarim"),Ai(Ft?"Sence bu nedir? Cevab\u0131 g\xF6r d\xFC\u011Fmesine bas":[mt.ad,Ae].filter(Boolean).join(", ")),Ot&&document.dispatchEvent(new CustomEvent("3d:bilgi",{detail:{id:C}}))}Op=()=>he(Wr,"koru"),document.addEventListener("3d:kesif-ac",C=>{let U=C.detail?.id;U&&he(U,xt?xt.checked:!0,C.detail.ozel)}),Lt("#kesif-gor")?.addEventListener("click",()=>{Ft=!1,he(Wr,"koru"),Lt("#bilgi-baslik")?.focus?.()});function be(){let C=Lt("#bilgi");C&&(C.hidden=!0),Wr=null;for(let U of $e(".kesif-isaret[aria-current]"))U.removeAttribute("aria-current")}Lt("#bilgi-kapat")?.addEventListener("click",be);function Oe(){let C=document.createElement("div");C.className="olcum",Ht.appendChild(C);let U=0,Y=performance.now(),ct=Y,mt=0;ue.kareGuncelleyici(ot=>(U++,mt=Math.max(mt,ot-ct),ct=ot,!1)),setInterval(()=>{let ot=performance.now(),Ot=ue.kalite();C.textContent=`${Math.round(U*1e3/(ot-Y))} kare/sn \xB7 en uzun ${Math.round(mt)} ms \xB7 \xF6l\xE7ek ${Ot.piksel} (tam ${Ot.tam}, kademe ${Ot.kademe})`,U=0,Y=ot,mt=0},1e3)}}
