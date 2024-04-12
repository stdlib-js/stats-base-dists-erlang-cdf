// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function n(r){return"number"==typeof r}function t(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function i(r,e,n){var i=!1,u=e-r.length;return u<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+t(u):t(u)+r,i&&(r="-"+r)),r}var u=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function o(r){var e,t,o;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,o=parseInt(t,10),!isFinite(o)){if(!n(t))throw new Error("invalid integer. Value: "+t);o=0}return o<0&&("u"===r.specifier||10!==e)&&(o=4294967295+o+1),o<0?(t=(-o).toString(e),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=o.toString(e),o||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===a.call(r.specifier)?a.call(t):u.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,v=/e\+(\d)$/,p=/e-(\d)$/,y=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,d=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var e,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((e=r.precision)>0&&(e-=1),t=i.toExponential(e)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,d,"e"),t=l.call(t,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,v,"e+0$1"),t=l.call(t,p,"e-0$1"),r.alternate&&(t=l.call(t,y,"$1."),t=l.call(t,g,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function N(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}var m=String.fromCharCode,A=isNaN,x=Array.isArray;function k(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function _(r){var e,n,t,u,a,f,c,s,l,v,p,y,g;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(e=void 0!==t.precision,!(t=k(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,l=0;l<n.length;l++)switch(u=n.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+u)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,A(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,A(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=o(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!A(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=A(a)?String(t.arg):m(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(v=t.arg,p=t.width,y=t.padRight,g=void 0,(g=p-v.length)<0?v:v=y?v+N(g):N(g)+v)),f+=t.arg||"",c+=1}return f}var E=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function U(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function I(r){var e,n,t,i;for(n=[],i=0,t=E.exec(r);t;)(e=r.slice(i,E.lastIndex-t[0].length)).length&&n.push(e),n.push(U(t)),i=E.lastIndex,t=E.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function S(r){var e,n;if("string"!=typeof r)throw new TypeError(S("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[I(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return _.apply(null,e)}var F=Object.prototype,V=F.toString,j=F.__defineGetter__,T=F.__defineSetter__,O=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,n){var t,i,u,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(S("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===V.call(n))throw new TypeError(S("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(O.call(r,e)||$.call(r,e)?(t=r.__proto__,r.__proto__=F,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),u="get"in n,a="set"in n,i&&(u||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&j&&j.call(r,e,n.get),a&&T&&T.call(r,e,n.set),r};function H(r,e,n){G(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var L=Math.floor;function W(r){return L(r)===r&&r>=0}function C(r){return r!=r}var P=Number.POSITIVE_INFINITY,R=Number.NEGATIVE_INFINITY;function M(r){return r===P||r===R}function Z(r){return Math.abs(r)}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Y=Object.prototype.toString;var q=Object.prototype.hasOwnProperty;var z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"";var D=X&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,u;if(null==r)return Y.call(r);n=r[B],u=B,e=null!=(i=r)&&q.call(i,u);try{r[B]=void 0}catch(e){return Y.call(r)}return t=Y.call(r),e?r[B]=n:delete r[B],t}:function(r){return Y.call(r)},J="function"==typeof Uint32Array;var K="function"==typeof Uint32Array?Uint32Array:null;var Q,rr="function"==typeof Uint32Array?Uint32Array:void 0;Q=function(){var r,e,n;if("function"!=typeof K)return!1;try{e=new K(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(J&&n instanceof Uint32Array||"[object Uint32Array]"===D(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?rr:function(){throw new Error("not implemented")};var er=Q,nr="function"==typeof Float64Array;var tr="function"==typeof Float64Array?Float64Array:null;var ir,ur="function"==typeof Float64Array?Float64Array:void 0;ir=function(){var r,e,n;if("function"!=typeof tr)return!1;try{e=new tr([1,3.14,-3.14,NaN]),n=e,r=(nr&&n instanceof Float64Array||"[object Float64Array]"===D(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var ar=ir,or="function"==typeof Uint8Array;var fr="function"==typeof Uint8Array?Uint8Array:null;var cr,sr="function"==typeof Uint8Array?Uint8Array:void 0;cr=function(){var r,e,n;if("function"!=typeof fr)return!1;try{e=new fr(e=[1,3.14,-3.14,256,257]),n=e,r=(or&&n instanceof Uint8Array||"[object Uint8Array]"===D(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var lr=cr,vr="function"==typeof Uint16Array;var pr="function"==typeof Uint16Array?Uint16Array:null;var yr,gr="function"==typeof Uint16Array?Uint16Array:void 0;yr=function(){var r,e,n;if("function"!=typeof pr)return!1;try{e=new pr(e=[1,3.14,-3.14,65536,65537]),n=e,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===D(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr,dr={uint16:yr,uint8:lr};(hr=new dr.uint16(1))[0]=4660;var wr=52===new dr.uint8(hr.buffer)[0],br=!0===wr?1:0,Nr=new ar(1),mr=new er(Nr.buffer);function Ar(r){return Nr[0]=r,mr[br]}var xr=!0===wr?1:0,kr=new ar(1),_r=new er(kr.buffer);function Er(r,e){return kr[0]=r,_r[xr]=e>>>0,kr[0]}var Ur=1023;var Ir=.6931471803691238,Sr=1.9082149292705877e-10,Fr=0x40000000000000,Vr=.3333333333333333,jr=1048575,Tr=2146435072,Or=1048576,$r=1072693248;function Gr(r){var e,n,t,i,u,a,o,f,c,s,l,v;return 0===r?R:C(r)||r<0?NaN:(u=0,(n=Ar(r))<Or&&(u-=54,n=Ar(r*=Fr)),n>=Tr?r+r:(u+=(n>>20)-Ur|0,u+=(f=(n&=jr)+614244&1048576|0)>>20|0,o=(r=Er(r,n|f^$r))-1,(jr&2+n)<3?0===o?0===u?0:u*Ir+u*Sr:(a=o*o*(.5-Vr*o),0===u?o-a:u*Ir-(a-u*Sr-o)):(f=n-398458|0,c=440401-n|0,i=(l=(v=(s=o/(2+o))*s)*v)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=v*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),a=t+i,(f|=c)>0?(e=.5*o*o,0===u?o-(e-s*(e+a)):u*Ir-(e-(s*(e+a)+u*Sr)-o)):0===u?o-s*(o-a):u*Ir-(s*(o-a)-u*Sr-o))))}var Hr=Math.ceil;function Lr(r){return r<0?Hr(r):L(r)}function Wr(r,e){var n,t,i,u;return i=(u=r*r)*u,t=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(i=1-(n=.5*u))+(1-i-n+(u*t-r*e))}var Cr=-.16666666666666632,Pr=.00833333333332249,Rr=-.0001984126982985795,Mr=27557313707070068e-22,Zr=-2.5050760253406863e-8,Xr=1.58969099521155e-10;function Yr(r,e){var n,t,i;return n=Pr+(i=r*r)*(Rr+i*Mr)+i*(i*i)*(Zr+i*Xr),t=i*r,0===e?r+t*(Cr+i*n):r-(i*(.5*e-t*n)-e-t*Cr)}var qr,zr,Br=2147483647,Dr=2146435072,Jr=1048575,Kr=!0===wr?0:1,Qr=new ar(1),re=new er(Qr.buffer);!0===wr?(qr=1,zr=0):(qr=0,zr=1);var ee={HIGH:qr,LOW:zr},ne=new ar(1),te=new er(ne.buffer),ie=ee.HIGH,ue=ee.LOW;function ae(r,e){return te[ie]=r,te[ue]=e,ne[0]}var oe,fe,ce=1023,se=-1023,le=-1074,ve=2147483648;!0===wr?(oe=1,fe=0):(oe=0,fe=1);var pe={HIGH:oe,LOW:fe},ye=new ar(1),ge=new er(ye.buffer),he=pe.HIGH,de=pe.LOW;function we(r,e,n,t){return ye[0]=r,e[t]=ge[he],e[t+n]=ge[de],e}function be(r){return we(r,[0,0],1,0)}H(be,"assign",we);var Ne=[0,0];function me(r,e){var n,t;return be.assign(r,Ne,1,0),n=Ne[0],n&=Br,t=Ar(e),ae(n|=t&=ve,Ne[1])}var Ae=22250738585072014e-324,xe=4503599627370496;function ke(r,e,n,t){return C(r)||M(r)?(e[t]=r,e[t+n]=0,e):0!==r&&Z(r)<Ae?(e[t]=r*xe,e[t+n]=-52,e):(e[t]=r,e[t+n]=0,e)}H((function(r){return ke(r,[0,0],1,0)}),"assign",ke);var _e=2220446049250313e-31,Ee=2148532223,Ue=[0,0],Ie=[0,0];function Se(r,e){var n,t;return 0===e||0===r||C(r)||M(r)?r:(ke(r,Ue,1,0),r=Ue[0],e+=Ue[1],e+=function(r){var e=Ar(r);return(e=(e&Dr)>>>20)-Ur|0}(r),e<le?me(0,r):e>ce?r<0?R:P:(e<=se?(e+=52,t=_e):t=1,be.assign(r,Ie,1,0),n=Ie[0],n&=Ee,t*ae(n|=e+Ur<<20,Ie[1])))}function Fe(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var Ve=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],je=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Te=16777216,Oe=5.960464477539063e-8,$e=Fe(20),Ge=Fe(20),He=Fe(20),Le=Fe(20);function We(r,e,n,t,i,u,a,o,f){var c,s,l,v,p,y,g,h,d;for(v=u,d=t[n],h=n,p=0;h>0;p++)s=Oe*d|0,Le[p]=d-Te*s|0,d=t[h-1]+s,h-=1;if(d=Se(d,i),d-=8*L(.125*d),d-=g=0|d,l=0,i>0?(g+=p=Le[n-1]>>24-i,Le[n-1]-=p<<24-i,l=Le[n-1]>>23-i):0===i?l=Le[n-1]>>23:d>=.5&&(l=2),l>0){for(g+=1,c=0,p=0;p<n;p++)h=Le[p],0===c?0!==h&&(c=1,Le[p]=16777216-h):Le[p]=16777215-h;if(i>0)switch(i){case 1:Le[n-1]&=8388607;break;case 2:Le[n-1]&=4194303}2===l&&(d=1-d,0!==c&&(d-=Se(1,i)))}if(0===d){for(h=0,p=n-1;p>=u;p--)h|=Le[p];if(0===h){for(y=1;0===Le[u-y];y++);for(p=n+1;p<=n+y;p++){for(f[o+p]=Ve[a+p],s=0,h=0;h<=o;h++)s+=r[h]*f[o+(p-h)];t[p]=s}return We(r,e,n+=y,t,i,u,a,o,f)}}if(0===d)for(n-=1,i-=24;0===Le[n];)n-=1,i-=24;else(d=Se(d,-i))>=Te?(s=Oe*d|0,Le[n]=d-Te*s|0,i+=24,Le[n+=1]=s):Le[n]=0|d;for(s=Se(1,i),p=n;p>=0;p--)t[p]=s*Le[p],s*=Oe;for(p=n;p>=0;p--){for(s=0,y=0;y<=v&&y<=n-p;y++)s+=je[y]*t[p+y];He[n-p]=s}for(s=0,p=n;p>=0;p--)s+=He[p];for(e[0]=0===l?s:-s,s=He[0]-s,p=1;p<=n;p++)s+=He[p];return e[1]=0===l?s:-s,7&g}function Ce(r,e,n,t){var i,u,a,o,f,c,s;for(4,(u=(n-3)/24|0)<0&&(u=0),o=n-24*(u+1),c=u-(a=t-1),s=a+4,f=0;f<=s;f++)$e[f]=c<0?0:Ve[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=a;c++)i+=r[c]*$e[a+(f-c)];Ge[f]=i}return 4,We(r,e,4,Ge,o,4,u,a,$e)}var Pe=Math.round,Re=.6366197723675814,Me=1.5707963267341256,Ze=6077100506506192e-26,Xe=6077100506303966e-26,Ye=20222662487959506e-37,qe=20222662487111665e-37,ze=84784276603689e-45,Be=2047;function De(r,e,n){var t,i,u,a,o;return u=r-(t=Pe(r*Re))*Me,a=t*Ze,o=e>>20|0,n[0]=u-a,o-(Ar(n[0])>>20&Be)>16&&(a=t*Ye-((i=u)-(u=i-(a=t*Xe))-a),n[0]=u-a,o-(Ar(n[0])>>20&Be)>49&&(a=t*ze-((i=u)-(u=i-(a=t*qe))-a),n[0]=u-a)),n[1]=u-n[0]-a,t}var Je=0,Ke=16777216,Qe=1.5707963267341256,rn=6077100506506192e-26,en=2*rn,nn=3*rn,tn=4*rn,un=598523,an=1072243195,on=1073928572,fn=1074752122,cn=1074977148,sn=1075183036,ln=1075388923,vn=1075594811,pn=1094263291,yn=[0,0,0],gn=[0,0];function hn(r,e){var n,t,i,u,a,o,f;if((i=Ar(r)&Br|0)<=an)return e[0]=r,e[1]=0,0;if(i<=fn)return(i&Jr)===un?De(r,i,e):i<=on?r>0?(f=r-Qe,e[0]=f-rn,e[1]=f-e[0]-rn,1):(f=r+Qe,e[0]=f+rn,e[1]=f-e[0]+rn,-1):r>0?(f=r-2*Qe,e[0]=f-en,e[1]=f-e[0]-en,2):(f=r+2*Qe,e[0]=f+en,e[1]=f-e[0]+en,-2);if(i<=vn)return i<=sn?i===cn?De(r,i,e):r>0?(f=r-3*Qe,e[0]=f-nn,e[1]=f-e[0]-nn,3):(f=r+3*Qe,e[0]=f+nn,e[1]=f-e[0]+nn,-3):i===ln?De(r,i,e):r>0?(f=r-4*Qe,e[0]=f-tn,e[1]=f-e[0]-tn,4):(f=r+4*Qe,e[0]=f+tn,e[1]=f-e[0]+tn,-4);if(i<pn)return De(r,i,e);if(i>=Dr)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return Qr[0]=r,re[Kr]}(r),f=ae(i-((t=(i>>20)-1046)<<20|0),n),a=0;a<2;a++)yn[a]=0|f,f=(f-yn[a])*Ke;for(yn[2]=f,u=3;yn[u-1]===Je;)u-=1;return o=Ce(yn,gn,t,u),r<0?(e[0]=-gn[0],e[1]=-gn[1],-o):(e[0]=gn[0],e[1]=gn[1],o)}var dn=[0,0],wn=2147483647,bn=1072243195,Nn=1044381696,mn=2146435072;function An(r){var e;if(e=Ar(r),(e&=wn)<=bn)return e<Nn?1:Wr(r,0);if(e>=mn)return NaN;switch(3&hn(r,dn)){case 0:return Wr(dn[0],dn[1]);case 1:return-Yr(dn[0],dn[1]);case 2:return-Wr(dn[0],dn[1]);default:return Yr(dn[0],dn[1])}}var xn=1072243195,kn=1045430272,_n=[0,0];function En(r){var e;if(e=Ar(r),(e&=Br)<=xn)return e<kn?r:Yr(r,0);if(e>=Dr)return NaN;switch(3&hn(r,_n)){case 0:return Yr(_n[0],_n[1]);case 1:return Wr(_n[0],_n[1]);case 2:return-Yr(_n[0],_n[1]);default:return-Wr(_n[0],_n[1])}}var Un=3.141592653589793;var In=.07721566490153287,Sn=.3224670334241136,Fn=1,Vn=-.07721566490153287,jn=.48383612272381005,Tn=-.1475877229945939,On=.06462494023913339,$n=-.07721566490153287,Gn=1,Hn=.4189385332046727,Ln=1.4616321449683622,Wn=4503599627370496,Cn=0x400000000000000,Pn=8470329472543003e-37,Rn=1.4616321449683622,Mn=-.12148629053584961,Zn=-3638676997039505e-33;function Xn(r){var e,n,t,i,u,a,o,f,c,s,l,v,p;if(C(r)||M(r))return r;if(0===r)return P;if(r<0?(e=!0,r=-r):e=!1,r<Pn)return-Gr(r);if(e){if(r>=Wn)return P;if(c=function(r){var e,n;return C(r)||M(r)?NaN:0===(e=Z(n=r%2))||1===e?me(0,n):e<.25?En(Un*n):e<.75?me(An(Un*(e=.5-e)),n):e<1.25?(n=me(1,n)-n,En(Un*n)):e<1.75?-me(An(Un*(e-=1.5)),n):(n-=me(2,n),En(Un*n))}(r),0===c)return P;n=Gr(Un/Z(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(p=-Gr(r),r>=Ln-1+.27?(l=1-r,t=0):r>=Ln-1-.27?(l=r-(Rn-1),t=1):(l=r,t=2)):(p=0,r>=Ln+.27?(l=2-r,t=0):r>=Ln-.27?(l=r-Rn,t=1):(l=r-1,t=2)),t){case 0:a=In+(v=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(v),u=v*(Sn+v*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(v)),p+=(o=l*a+u)-.5*l;break;case 1:a=jn+(s=(v=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),u=Tn+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=On+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),p+=Mn+(o=v*a-(Zn-s*(u+l*i)));break;case 2:a=l*($n+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),u=Gn+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),p+=-.5*l+a/u}else if(r<8)switch(o=(l=r-(t=Lr(r)))*(Vn+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=Fn+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),p=.5*l+o/f,v=1,t){case 7:v*=l+6;case 6:v*=l+5;case 5:v*=l+4;case 4:v*=l+3;case 3:p+=Gr(v*=l+2)}else r<Cn?(c=Gr(r),s=Hn+(v=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=v*v),p=(r-.5)*(c-1)+s):p=r*(Gr(r)-1);return e&&(p=n-p),p}function Yn(r){return L(r)===r}function qn(r){return 0===r&&1/r===R}var zn=2.5066282746310007;function Bn(r){return Yn(r/2)}function Dn(r){return Bn(r>0?r-1:r+1)}var Jn=Math.sqrt,Kn=!0===wr?0:1,Qn=new ar(1),rt=new er(Qn.buffer);function et(r,e){return Qn[0]=r,rt[Kn]=e>>>0,Qn[0]}function nt(r){return 0|r}var tt=1072693247,it=1e300,ut=1e-300;var at=1048575,ot=1048576,ft=1072693248,ct=536870912,st=524288,lt=20,vt=9007199254740992,pt=.9617966939259756,yt=.9617967009544373,gt=-7.028461650952758e-9,ht=[1,1.5],dt=[0,.5849624872207642],wt=[0,1.350039202129749e-8];var bt=1.4426950408889634,Nt=1.4426950216293335,mt=1.9259629911266175e-8;var At=.6931471805599453;var xt=1048576,kt=1071644672,_t=20,Et=.6931471824645996,Ut=-1.904654299957768e-9;var It=1072693247,St=1105199104,Ft=1139802112,Vt=1083179008,jt=1072693248,Tt=1083231232,Ot=3230714880,$t=31,Gt=1e300,Ht=1e-300,Lt=8008566259537294e-32,Wt=[0,0],Ct=[0,0];function Pt(r,e){var n,t,i,u,a,o,f,c,s,l,v,p,y,g;if(C(r)||C(e))return NaN;if(be.assign(e,Wt,1,0),a=Wt[0],0===Wt[1]){if(0===e)return 1;if(1===e)return r;if(-1===e)return 1/r;if(.5===e)return Jn(r);if(-.5===e)return 1/Jn(r);if(2===e)return r*r;if(3===e)return r*r*r;if(4===e)return(r*=r)*r;if(M(e))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:Z(r)<1==(e===P)?0:P}(r,e)}if(be.assign(r,Wt,1,0),u=Wt[0],0===Wt[1]){if(0===u)return function(r,e){return e===R?P:e===P?0:e>0?Dn(e)?r:0:Dn(e)?me(P,r):P}(r,e);if(1===r)return 1;if(-1===r&&Dn(e))return-1;if(M(r))return r===R?Pt(-0,-e):e<0?0:P}if(r<0&&!1===Yn(e))return(r-r)/(r-r);if(i=Z(r),n=u&Br|0,t=a&Br|0,f=a>>>$t|0,o=(o=u>>>$t|0)&&Dn(e)?-1:1,t>St){if(t>Ft)return function(r,e){return(Ar(r)&Br)<=tt?e<0?it*it:ut*ut:e>0?it*it:ut*ut}(r,e);if(n<It)return 1===f?o*Gt*Gt:o*Ht*Ht;if(n>jt)return 0===f?o*Gt*Gt:o*Ht*Ht;v=function(r,e){var n,t,i,u,a,o,f;return u=(i=e-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),n=(o=i*mt-u*bt)-((t=et(t=(a=Nt*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ct,i)}else v=function(r,e,n){var t,i,u,a,o,f,c,s,l,v,p,y,g,h,d,w,b,N,m,A,x;return N=0,n<ot&&(N-=53,n=Ar(e*=vt)),N+=(n>>lt)-Ur|0,n=(m=n&at|0)|ft|0,m<=235662?A=0:m<767610?A=1:(A=0,N+=1,n-=ot),a=et(i=(w=(e=Er(e,n))-(c=ht[A]))*(b=1/(e+c)),0),t=(n>>1|ct)+st,f=Er(0,t+=A<<18),d=(u=i*i)*u*(0===(x=u)?.5999999999999946:.5999999999999946+x*(.4285714285785502+x*(.33333332981837743+x*(.272728123808534+x*(.23066074577556175+.20697501780033842*x))))),f=et(f=3+(u=a*a)+(d+=(o=b*(w-a*f-a*(e-(f-c))))*(a+i)),0),l=et(l=(w=a*f)+(b=o*f+(d-(f-3-u))*i),0),v=yt*l,g=(p=gt*l+(b-(l-w))*pt+wt[A])-((y=et(y=v+p+(s=dt[A])+(h=N),0))-h-s-v),r[0]=y,r[1]=g,r}(Ct,i,n);if(p=(l=(e-(c=et(e,0)))*v[0]+e*v[1])+(s=c*v[0]),be.assign(p,Wt,1,0),y=nt(Wt[0]),g=nt(Wt[1]),y>=Vt){if(0!=(y-Vt|g))return o*Gt*Gt;if(l+Lt>p-s)return o*Gt*Gt}else if((y&Br)>=Tt){if(0!=(y-Ot|g))return o*Ht*Ht;if(l<=p-s)return o*Ht*Ht}return p=function(r,e,n){var t,i,u,a,o,f,c,s,l,v;return l=((s=r&Br|0)>>_t)-Ur|0,c=0,s>kt&&(i=Er(0,((c=r+(xt>>l+1)>>>0)&~(Jr>>(l=((c&Br)>>_t)-Ur|0)))>>>0),c=(c&Jr|xt)>>_t-l>>>0,r<0&&(c=-c),e-=i),r=nt(r=Ar(f=1-((f=(u=(i=et(i=n+e,0))*Et)+(a=(n-(i-e))*At+i*Ut))*(t=f-(i=f*f)*(0===(v=i)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((o=a-(f-u))+f*o)-f))),(r+=c<<_t>>>0)>>_t<=0?Se(f,c):Er(f,r)}(y,s,l),o*p}var Rt=.6931471803691238,Mt=1.9082149292705877e-10,Zt=1.4426950408889634,Xt=709.782712893384,Yt=-745.1332191019411,qt=1/(1<<28),zt=-qt;function Bt(r){var e;return C(r)||r===P?r:r===R?0:r>Xt?P:r<Yt?0:r>zt&&r<qt?1+r:function(r,e,n){var t,i,u,a;return Se(1-(e-(t=r-e)*(u=t-(i=t*t)*(0===(a=i)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-(e=Lr(r<0?Zt*r-.5:Zt*r+.5))*Rt,e*Mt,e)}var Dt=143.01608;function Jt(r){var e,n,t;return e=1+(e=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(e),n=Bt(r),n=r>Dt?(t=Pt(r,.5*r-.25))*(t/n):Pt(r,r-.5)/n,zn*n*e}var Kt=.5772156649015329;function Qt(r,e){return e/((1+Kt*r)*r)}function ri(r){var e,n,t,i;if(Yn(r)&&r<0||r===R||C(r))return NaN;if(0===r)return qn(r)?R:P;if(r>171.61447887182297)return P;if(r<-170.5674972726612)return 0;if((n=Z(r))>33)return r>=0?Jt(r):(e=0==(1&(t=L(n)))?-1:1,(i=n-t)>.5&&(i=n-(t+=1)),i=n*En(Un*i),e*Un/(Z(i)*Jt(n)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Qt(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Qt(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var e,n;return 0===r?1:((r<0?-r:r)<=1?(e=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),n=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(e=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),n=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),e/n)}(r-=2)}var ei=1.4901161193847656e-8,ni=17976931348623157e292,ti=709.782712893384;var ii=1e-300,ui=13877787807814457e-33,ai=.8450629115104675,oi=.12837916709551256,fi=1,ci=-.0023621185607526594,si=1,li=-.009864944034847148,vi=1,pi=-.0098649429247001,yi=1;function gi(r){var e,n,t,i,u,a,o,f;if(C(r))return NaN;if(r===P)return 0;if(r===R)return 2;if(0===r)return 1;if(r<0?(e=!0,n=-r):(e=!1,n=r),n<.84375)return n<ui?1-r:(i=oi+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),u=fi+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),a=i/u,r<.25?1-(r+r*a):(i=r*a,.5-(i+=r-.5)));if(n<1.25)return o=ci+(u=n-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(u),f=si+u*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(u),e?1+ai+o/f:1-ai-o/f;if(n<28){if(u=1/(n*n),n<2.857142857142857)i=li+u*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(u),u=vi+u*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(u);else{if(r<-6)return 2-ii;i=pi+u*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(u),u=yi+u*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(u)}return i=Bt(-(t=et(n,0))*t-.5625)*Bt((t-n)*(t+n)+i/u),e?2-i/n:i/n}return e?2-ii:ii*ii}var hi=-708.3964185322641;function di(r,e){var n;return n=r*Gr(e),e>=1?n<ti&&-e>hi?Pt(e,r)*Bt(-e):r>=1?Pt(e/Bt(e/r),r):Bt(n-e):n>hi?Pt(e,r)*Bt(-e):e/r<ti?Pt(e/Bt(e/r),r):Bt(n-e)}function wi(r,e){var n,t;if((t=r.length)<2||0===e)return 0===t?0:r[0];for(n=r[t-=1]*e+r[t-1],t-=2;t>=0;)n=n*e+r[t],t-=1;return n}var bi=Function;H(wi,"factory",(function(r){var e,n,t,i;if(r.length>500)return function(e){return wi(r,e)};if(e="return function evalpoly(x){",0===(n=r.length))e+="return 0.0;";else if(1===n)e+="return "+r[0]+";";else{for(e+="if(x===0.0){return "+r[0]+";}",e+="return "+r[0],t=n-1,i=1;i<n;i++)e+="+x*",i<t&&(e+="("),e+=r[i];for(i=0;i<t-1;i++)e+=")";e+=";"}return e+="}",new bi(e+="//# sourceURL=evalpoly.factory.js")()}));var Ni=2220446049250313e-31,mi=eval;function Ai(){var r;try{mi('"use strict"; (function* () {})'),r=!0}catch(e){r=!1}return r}var xi=Ai()?function(r,e){var n,t,i,u,a;if(a={},arguments.length>1&&(a=e),n=a.tolerance||Ni,i=a.maxTerms||1e6,u=a.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(Z(n*(u+=t))>=Z(t)||0==--i)break}else do{u+=t=r()}while(Z(n*u)<Z(t)&&--i);return u}:function(r,e){var n,t,i,u,a;a={},arguments.length>1&&(a=e),n=a.tolerance||Ni,i=a.maxTerms||1e6,u=a.initialValue||0;do{u+=t=r()}while(Z(n*u)<Z(t)&&--i);return u};var ki=6.283185307179586;var _i=[0,0,0,0,0,0,0,0,0,0];function Ei(r,e){var n,t,i,u;return t=-function(r){var e,n;return r<=-1?NaN:(n=Z(r))>.95?Gr(1+r)-r:n<Ni?-r*r/2:(e={initialValue:-r},xi(function(r){var e=-r,n=-1,t=0;return function(){return(n*=e)/(t+=1)}}(r),e))}((e-r)/r),i=r*t,u=Jn(2*t),e<r&&(u=-u),_i[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(u),_i[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(u),_i[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(u),_i[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(u),_i[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(u),_i[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(u),_i[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(u),_i[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(u),_i[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(u),_i[9]=-.0005967612901927463,n=wi(_i,1/r),n*=Bt(-i)/Jn(ki*r),e<r&&(n=-n),n+=gi(Jn(i))/2}function Ui(r,e,n){var t;return n=n||0,t=function(r,e){var n=1,t=r,i=e;return function(){var r=n;return n*=i/(t+=1),r}}(r,e),xi(t,{initialValue:n})}var Ii=.6931471803691238,Si=1.9082149292705877e-10,Fi=.41421356237309503,Vi=-.2928932188134525,ji=1.862645149230957e-9,Ti=5551115123125783e-32,Oi=9007199254740992,$i=.6666666666666666;function Gi(r){var e,n,t,i,u,a,o,f,c,s;if(r<-1||C(r))return NaN;if(-1===r)return R;if(r===P)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<Fi){if(t<ji)return t<Ti?r:r-r*r*.5;r>Vi&&(s=0,i=r,n=1)}return 0!==s&&(t<Oi?(u=(s=((n=Ar(c=1+r))>>20)-Ur)>0?1-(c-r):r-(c-1),u/=c):(s=((n=Ar(c=r))>>20)-Ur,u=0),(n&=1048575)<434334?c=Er(c,1072693248|n):(s+=1,c=Er(c,1071644672|n),n=1048576-n>>2),i=c-1),e=.5*i*i,0===n?0===i?s*Ii+(u+=s*Si):s*Ii-((f=e*(1-$i*i))-(s*Si+u)-i):(f=(o=(a=i/(2+i))*a)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===s?i-(e-a*(e+f)):s*Ii-(e-(a*(e+f)+(s*Si+u))-i))}function Hi(r,e){return C(r)||C(e)?NaN:r===P||e===P?P:r===e&&0===r?function(r){return 0===r&&1/r===P}(r)?r:e:r>e?r:e}function Li(r,e){return C(r)||C(e)?NaN:r===R||e===R?R:r===e&&0===r?qn(r)?r:e:r<e?r:e}var Wi=10.900511,Ci=2.718281828459045;function Pi(r,e){var n,t,i,u,a,o,f,c,s,l;return f=(e-r-Wi+.5)/(i=r+Wi-.5),r<1?e<=hi?Bt(r*Gr(e)-e-Xn(r)):Pt(e,r)*Bt(-e)/ri(r):(Z(f*f*r)<=100&&r>150?n=Bt(n=r*(Gi(f)-f)+e*(.5-Wi)/i):Li(u=r*Gr(e/i),a=r-e)<=hi||Hi(u,a)>=ti?(t=a/r,Li(u,a)/2>hi&&Hi(u,a)/2<ti?n=(o=Pt(e/i,r/2)*Bt(a/2))*o:Li(u,a)/4>hi&&Hi(u,a)/4<ti&&e>r?(n=(o=Pt(e/i,r/4)*Bt(a/4))*o,n*=n):n=t>hi&&t<ti?Pt(e*Bt(t)/i,r):Bt(u+a)):n=Pt(e/i,r)*Bt(a),n*=Jn(i/Ci)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(s=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(s=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),s/l)))}var Ri=.34657359027997264;var Mi=709.782712893384,Zi=.6931471803691238,Xi=1.9082149292705877e-10,Yi=1.4426950408889634,qi=38.816242111356935,zi=1.0397207708399179;function Bi(r){var e,n,t,i,u,a,o,f,c,s,l,v,p;if(r===P||C(r))return r;if(r===R)return-1;if(0===r)return r;if(r<0?(t=!0,f=-r):(t=!1,f=r),f>=qi){if(t)return-1;if(f>=Mi)return P}if(a=0|Ar(f),f>Ri)f<zi?t?(i=r+Zi,u=-Xi,p=-1):(i=r-Zi,u=Xi,p=1):(p=t?Yi*r-.5:Yi*r+.5,i=r-(l=p|=0)*Zi,u=l*Xi),s=i-(r=i-u)-u;else{if(a<1016070144)return r;p=0}return o=1+(c=r*(e=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(c),v=c*((o-(l=3-o*e))/(6-r*l)),0===p?r-(r*v-c):(n=ae(Ur+p<<20,0),v=r*(v-s)-s,v-=c,-1===p?.5*(r-v)-.5:1===p?r<-.25?-2*(v-(r+.5)):1+2*(r-v):p<=-2||p>56?(f=1-(v-r),1024===p?f=Er(f,i=Ar(f)+(p<<20)|0):f*=n,f-1):(l=1,p<20?f=(l=Er(l,i=1072693248-(2097152>>p)|0))-(v-r):(f=r-(v+(l=Er(l,i=Ur-p<<20|0))),f+=1),f*=n))}var Di=.15896368026733398,Ji=.5281534194946289,Ki=.45201730728149414;function Qi(r,e,n){var t,i,u,a,o,f,c;if(r<Ni)return-Gr(r);if(0===e||0===n)return 0;if(i=0,r>2){if(r>=3){do{n-=1,i+=Gr(r-=1)}while(r>=3);n=r-2}return a=0===(o=n)?-.01803556856784494:((o<0?-o:o)<=1?(f=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(f=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),f/c),i+=(u=n*(r+1))*Di+u*a}return r<1&&(i+=-Gr(r),n=e,e=r,r+=1),r<=1.5?(u=function(r){var e,n;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(e=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),n=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(e=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,n=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),e/n)}(e),i+=(t=e*n)*Ji+t*u):(u=n*e,a=function(r){var e,n;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(e=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,n=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(e=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),n=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),e/n)}(-n),i+=u*Ki+u*a)}function ru(r,e,n){var t,i,u,a;return t=function(r){return C(r)?NaN:r<0?r<-.5?ri(1+r)-1:Bi(-Gi(r)+Qi(r+2,r+1,r)):r<2?Bi(Qi(r+1,r,r-1)):ri(1+r)-1}(r),i=(t+1)/r,u=function(r,e){var n;if(C(r)||C(e))return NaN;if(0===e)return 0;if(0===r)return-1;if(r<0&&e%2==0&&(r=-r),r>0){if((Z(e*(r-1))<.5||Z(e)<.2)&&(n=Gr(r)*e)<.5)return Bi(n)}else if(Lr(e)!==e)return NaN;return Pt(r,e)-1}(e,r),t-=u,t/=r,a=function(r,e){var n,t,i,u;return n=-e,e=-e,t=r+1,i=1,function(){return u=n/t,n*=e,n/=i+=1,t+=1,u}}(r,e),t=-(u+=1)*xi(a,{initialValue:((n?i:0)-t)/u}),n&&(t=-t),[t,i]}var eu=11754943508222875e-54;var nu=Ai()?function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),n=t.maxIter||1e6,i=t.tolerance||Ni,t.keep?function(r,e,n){var t,i,u,a,o,f;if(0===(u=(f=(t="function"==typeof r.next)?r.next().value:r())[1])&&(u=eu),a=u,o=0,!0===t)do{(f=r.next().value)&&(0===(o=f[1]+f[0]*o)&&(o=eu),0===(a=f[1]+f[0]/a)&&(a=eu),u*=i=a*(o=1/o))}while(f&&Z(i-1)>e&&--n);else do{(f=r())&&(0===(o=f[1]+f[0]*o)&&(o=eu),0===(a=f[1]+f[0]/a)&&(a=eu),u*=i=a*(o=1/o))}while(f&&Z(i-1)>e&&--n);return u}(r,i,n):function(r,e,n){var t,i,u,a,o,f,c;if(a=(c=(t="function"==typeof r.next)?r.next().value:r())[1],u=c[0],0===a&&(a=eu),o=a,f=0,!0===t)do{(c=r.next().value)&&(0===(f=c[1]+c[0]*f)&&(f=eu),0===(o=c[1]+c[0]/o)&&(o=eu),a*=i=o*(f=1/f))}while(Z(i-1)>e&&--n);else do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=eu),0===(o=c[1]+c[0]/o)&&(o=eu),a*=i=o*(f=1/f))}while(c&&Z(i-1)>e&&--n);return u/a}(r,i,n)}:function(r,e){var n,t,i;return t={},arguments.length>1&&(t=e),i=t.tolerance||Ni,n=t.maxIter||1e6,t.keep?function(r,e,n){var t,i,u,a,o;0===(a=(o=r())[1])&&(a=eu),i=a,u=0;do{(o=r())&&(0===(u=o[1]+o[0]*u)&&(u=eu),0===(i=o[1]+o[0]/i)&&(i=eu),a*=t=i*(u=1/u))}while(o&&Z(t-1)>e&&--n);return a}(r,i,n):function(r,e,n){var t,i,u,a,o,f;o=(f=r())[1],i=f[0],0===o&&(o=eu),u=o,a=0;do{(f=r())&&(0===(a=f[1]+f[0]*a)&&(a=eu),0===(u=f[1]+f[0]/u)&&(u=eu),o*=t=u*(a=1/a))}while(f&&Z(t-1)>e&&--n);return i/o}(r,i,n)};function tu(r,e){var n=function(r,e){var n=e-r+1,t=r,i=0;return function(){return[(i+=1)*(t-i),n+=2]}}(r,e);return 1/(e-r+1+nu(n))}var iu=170;function uu(r,e,n,t){var i,u,a,o,f,c,s,l,v,p,y,g,h;if(r<0||e<=0)return NaN;if(u=void 0===n||n,s=t,l=0,e>=iu&&!u)return s&&4*e<r?(l=e*Gr(r)-r,l+=Gr(tu(e,r))):!s&&e>4*r?(l=e*Gr(r)-r,l+=Gr(Ui(e,r,o=0)/e)):0===(l=uu(e,r,!0,s))?s?(l=Gr(l=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*Gr(e),l+=Gr(zn)):(l=e*Gr(r)-r,l+=Gr(Ui(e,r,o=0)/e)):l=Gr(l)+Xn(e),l>ti?P:Bt(l);switch(e<30&&e<=r+1&&r<ti?f=!(v=(g=L(e))===e)&&.5===Z(g-e):v=f=!1,v&&r>.6?(s=!s,a=0):f&&r>.2?(s=!s,a=1):r<ei&&e>1?a=6:r<.5?a=-.4/Gr(r)<e?2:3:r<1.1?a=.75*r<e?2:3:(c=!1,u&&e>20&&(p=Z((r-e)/e),e>200?20/e>p*p&&(c=!0):p<.4&&(c=!0)),c?a=5:r-1/(3*r)<e?a=2:(a=4,s=!s)),a){case 0:l=function(r,e){var n,t,i;if(0!==(t=Bt(-e)))for(n=t,i=1;i<r;++i)n/=i,t+=n*=e;return t}(e,r),!1===u&&(l*=ri(e));break;case 1:l=function(r,e){var n,t,i,u;if(0!==(i=gi(Jn(e)))&&r>1){for(n=Bt(-e)/Jn(Un*e),n*=e,t=n/=.5,u=2;u<r;++u)n/=u-.5,t+=n*=e;i+=t}return i}(e,r),!1===u&&(l*=ri(e));break;case 2:0!==(l=u?Pi(e,r):di(e,r))&&(o=0,i=!1,s&&(o=u?1:ri(e),u||l>=1||ni*l>o?(o/=l,u||e<1||ni/e>o?(o*=-e,i=!0):o=0):o=0)),l*=Ui(e,r,o)/e,i&&(s=!1,l=-l);break;case 3:l=(y=ru(e,r,s=!s))[0],h=y[1],s=!1,u&&(l/=h);break;case 4:0!==(l=u?Pi(e,r):di(e,r))&&(l*=tu(e,r));break;case 5:l=Ei(e,r),r>=e&&(s=!s);break;case 6:l=u?Pt(r,e)/ri(e+1):Pt(r,e)/e,l*=1-e*r/(e+1)}return u&&l>1&&(l=1),s&&(l=(u?1:ri(e))-l),l}function au(r,e,n){return C(r)||C(e)||C(n)||e<0||n<=0?NaN:0===e?r<0?0:1:r<=0?0:r===P?1:uu(r*n,e)}function ou(r){return function(){return r}}function fu(r){return C(r)?ou(NaN):function(e){if(C(e))return NaN;return e<r?0:1}}function cu(r,e){return C(r)||C(e)||r<0||e<=0?ou(NaN):0===r?fu(0):function(n){if(n<=0)return 0;if(n===P)return 1;return uu(n*e,r)}}function su(r,e,n){return W(e)?au(r,e,n):NaN}function lu(r,e){return W(r)?cu(r,e):ou(NaN)}H((function(r,e){return C(r)||C(e)?NaN:r<e?0:1}),"factory",fu),H(au,"factory",cu),H(su,"factory",lu);export{su as default,lu as factory};
//# sourceMappingURL=mod.js.map
