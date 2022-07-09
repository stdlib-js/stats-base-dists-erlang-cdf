// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,e=Object.prototype,t=e.toString,u=e.__defineGetter__,i=e.__defineSetter__,f=e.__lookupGetter__,o=e.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===t.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===t.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(f.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&i&&i.call(r,n,a.set),r};function c(r,n,e){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var v=Math.floor;function l(r){return v(r)===r&&r>=0}function y(r){return r!=r}var s=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function N(r){return r===s||r===p}function w(r){return Math.abs(r)}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var h=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;var m="function"==typeof Symbol?Symbol.toStringTag:"";var A=b&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,u,i;if(null==r)return h.call(r);e=r[m],i=m,n=null!=(u=r)&&d.call(u,i);try{r[m]=void 0}catch(n){return h.call(r)}return t=h.call(r),n?r[m]=e:delete r[m],t}:function(r){return h.call(r)},_="function"==typeof Uint32Array;var g="function"==typeof Uint32Array?Uint32Array:null;var U,x="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var r,n,e;if("function"!=typeof g)return!1;try{n=new g(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(_&&e instanceof Uint32Array||"[object Uint32Array]"===A(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?x:function(){throw new Error("not implemented")};var j=U,I="function"==typeof Float64Array;var k="function"==typeof Float64Array?Float64Array:null;var O,S="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,e;if("function"!=typeof k)return!1;try{n=new k([1,3.14,-3.14,NaN]),e=n,r=(I&&e instanceof Float64Array||"[object Float64Array]"===A(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var F=O,E="function"==typeof Uint8Array;var T="function"==typeof Uint8Array?Uint8Array:null;var H,V="function"==typeof Uint8Array?Uint8Array:void 0;H=function(){var r,n,e;if("function"!=typeof T)return!1;try{n=new T(n=[1,3.14,-3.14,256,257]),e=n,r=(E&&e instanceof Uint8Array||"[object Uint8Array]"===A(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var G=H,P="function"==typeof Uint16Array;var L="function"==typeof Uint16Array?Uint16Array:null;var M,W="function"==typeof Uint16Array?Uint16Array:void 0;M=function(){var r,n,e;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),e=n,r=(P&&e instanceof Uint16Array||"[object Uint16Array]"===A(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?W:function(){throw new Error("not implemented")};var Y,q={uint16:M,uint8:G};(Y=new q.uint16(1))[0]=4660;var C=52===new q.uint8(Y.buffer)[0],R=!0===C?1:0,z=new F(1),B=new j(z.buffer);function D(r){return z[0]=r,B[R]}var J=!0===C?1:0,K=new F(1),Q=new j(K.buffer);function X(r,n){return K[0]=r,Q[J]=n>>>0,K[0]}var Z=.6931471803691238,$=1.9082149292705877e-10;function rr(r){var n,e,t,u,i,f,o,a,c,v,l,s;return 0===r?p:y(r)||r<0?NaN:(i=0,(e=D(r))<1048576&&(i-=54,e=D(r*=0x40000000000000)),e>=2146435072?r+r:(i+=(e>>20)-1023|0,i+=(a=(e&=1048575)+614244&1048576|0)>>20|0,o=(r=X(r,e|1072693248^a))-1,(1048575&2+e)<3?0===o?0===i?0:i*Z+i*$:(f=o*o*(.5-.3333333333333333*o),0===i?o-f:i*Z-(f-i*$-o)):(a=e-398458|0,c=440401-e|0,u=(l=(s=(v=o/(2+o))*v)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),f=t+u,(a|=c)>0?(n=.5*o*o,0===i?o-(n-v*(n+f)):i*Z-(n-(v*(n+f)+i*$)-o)):0===i?o-v*(o-f):i*Z-(v*(o-f)-i*$-o))))}var nr=Math.ceil;function er(r){return r<0?nr(r):v(r)}function tr(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(i),t+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))}var ur=-.16666666666666632;function ir(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(ur+u*e):r-(u*(.5*n-t*e)-n-t*ur)}var fr,or,ar=!0===C?0:1,cr=new F(1),vr=new j(cr.buffer);!0===C?(fr=1,or=0):(fr=0,or=1);var lr={HIGH:fr,LOW:or},yr=new F(1),sr=new j(yr.buffer),pr=lr.HIGH,Nr=lr.LOW;function wr(r,n){return sr[pr]=r,sr[Nr]=n,yr[0]}var br,hr;!0===C?(br=1,hr=0):(br=0,hr=1);var dr={HIGH:br,LOW:hr},mr=new F(1),Ar=new j(mr.buffer),_r=dr.HIGH,gr=dr.LOW;function Ur(r,n){return mr[0]=n,r[0]=Ar[_r],r[1]=Ar[gr],r}function xr(r,n){return 1===arguments.length?Ur([0,0],r):Ur(r,n)}var jr=[0,0];function Ir(r,n){var e,t;return xr(jr,r),e=jr[0],e&=2147483647,t=D(n),wr(e|=t&=2147483648,jr[1])}function kr(r,n){return y(n)||N(n)?(r[0]=n,r[1]=0,r):0!==n&&w(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)}var Or=[0,0],Sr=[0,0];function Fr(r,n){var e,t;return 0===n||0===r||y(r)||N(r)?r:(function(r,n){1===arguments.length?kr([0,0],r):kr(r,n)}(Or,r),n+=Or[1],n+=function(r){var n=D(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Or[0]),n<-1074?Ir(0,r):n>1023?r<0?p:s:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,xr(Sr,r),e=Sr[0],e&=2148532223,t*wr(e|=n+1023<<20,Sr[1])))}function Er(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var Tr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Hr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Vr=5.960464477539063e-8,Gr=Er(20),Pr=Er(20),Lr=Er(20),Mr=Er(20);function Wr(r,n,e,t,u,i,f,o,a){var c,l,y,s,p,N,w,b,h;for(s=i,h=t[e],b=e,p=0;b>0;p++)l=Vr*h|0,Mr[p]=h-16777216*l|0,h=t[b-1]+l,b-=1;if(h=Fr(h,u),h-=8*v(.125*h),h-=w=0|h,y=0,u>0?(w+=p=Mr[e-1]>>24-u,Mr[e-1]-=p<<24-u,y=Mr[e-1]>>23-u):0===u?y=Mr[e-1]>>23:h>=.5&&(y=2),y>0){for(w+=1,c=0,p=0;p<e;p++)b=Mr[p],0===c?0!==b&&(c=1,Mr[p]=16777216-b):Mr[p]=16777215-b;if(u>0)switch(u){case 1:Mr[e-1]&=8388607;break;case 2:Mr[e-1]&=4194303}2===y&&(h=1-h,0!==c&&(h-=Fr(1,u)))}if(0===h){for(b=0,p=e-1;p>=i;p--)b|=Mr[p];if(0===b){for(N=1;0===Mr[i-N];N++);for(p=e+1;p<=e+N;p++){for(a[o+p]=Tr[f+p],l=0,b=0;b<=o;b++)l+=r[b]*a[o+(p-b)];t[p]=l}return Wr(r,n,e+=N,t,u,i,f,o,a)}}if(0===h)for(e-=1,u-=24;0===Mr[e];)e-=1,u-=24;else(h=Fr(h,-u))>=16777216?(l=Vr*h|0,Mr[e]=h-16777216*l|0,u+=24,Mr[e+=1]=l):Mr[e]=0|h;for(l=Fr(1,u),p=e;p>=0;p--)t[p]=l*Mr[p],l*=Vr;for(p=e;p>=0;p--){for(l=0,N=0;N<=s&&N<=e-p;N++)l+=Hr[N]*t[p+N];Lr[e-p]=l}for(l=0,p=e;p>=0;p--)l+=Lr[p];for(n[0]=0===y?l:-l,l=Lr[0]-l,p=1;p<=e;p++)l+=Lr[p];return n[1]=0===y?l:-l,7&w}function Yr(r,n,e,t){var u,i,f,o,a,c,v;for(4,(i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),c=i-(f=t-1),v=f+4,a=0;a<=v;a++)Gr[a]=c<0?0:Tr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=f;c++)u+=r[c]*Gr[f+(a-c)];Pr[a]=u}return 4,Wr(r,n,4,Pr,o,4,i,f,Gr)}var qr=Math.round;function Cr(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=qr(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(D(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(D(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t}var Rr=1.5707963267341256,zr=6077100506506192e-26,Br=2*zr,Dr=4*zr,Jr=[0,0,0],Kr=[0,0];function Qr(r,n){var e,t,u,i,f,o,a;if((u=2147483647&D(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Cr(r,u,n):u<=1073928572?r>0?(a=r-Rr,n[0]=a-zr,n[1]=a-n[0]-zr,1):(a=r+Rr,n[0]=a+zr,n[1]=a-n[0]+zr,-1):r>0?(a=r-2*Rr,n[0]=a-Br,n[1]=a-n[0]-Br,2):(a=r+2*Rr,n[0]=a+Br,n[1]=a-n[0]+Br,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Cr(r,u,n):r>0?(a=r-3*Rr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Rr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?Cr(r,u,n):r>0?(a=r-4*Rr,n[0]=a-Dr,n[1]=a-n[0]-Dr,4):(a=r+4*Rr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-4);if(u<1094263291)return Cr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return cr[0]=r,vr[ar]}(r),a=wr(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)Jr[f]=0|a,a=16777216*(a-Jr[f]);for(Jr[2]=a,i=3;0===Jr[i-1];)i-=1;return o=Yr(Jr,Kr,t,i),r<0?(n[0]=-Kr[0],n[1]=-Kr[1],-o):(n[0]=Kr[0],n[1]=Kr[1],o)}var Xr=[0,0];function Zr(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1044381696?1:tr(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Xr)){case 0:return tr(Xr[0],Xr[1]);case 1:return-ir(Xr[0],Xr[1]);case 2:return-tr(Xr[0],Xr[1]);default:return ir(Xr[0],Xr[1])}}var $r=[0,0];function rn(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ir(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,$r)){case 0:return ir($r[0],$r[1]);case 1:return tr($r[0],$r[1]);case 2:return-ir($r[0],$r[1]);default:return-tr($r[0],$r[1])}}var nn=3.141592653589793;var en=1.4616321449683622,tn=1.4616321449683622;function un(r){var n,e,t,u,i,f,o,a,c,v,l,p,b;if(y(r)||N(r))return r;if(0===r)return s;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-rr(r);if(n){if(r>=4503599627370496)return s;if(c=function(r){var n,e;return y(r)||N(r)?NaN:0===(n=w(e=r%2))||1===n?Ir(0,e):n<.25?rn(nn*e):n<.75?Ir(Zr(nn*(n=.5-n)),e):n<1.25?(e=Ir(1,e)-e,rn(nn*e)):n<1.75?-Ir(Zr(nn*(n-=1.5)),e):(e-=Ir(2,e),rn(nn*e))}(r),0===c)return s;e=rr(nn/w(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(b=-rr(r),r>=en-1+.27?(l=1-r,t=0):r>=en-1-.27?(l=r-(tn-1),t=1):(l=r,t=2)):(b=0,r>=en+.27?(l=2-r,t=0):r>=en-.27?(l=r-tn,t=1):(l=r-1,t=2)),t){case 0:f=.07721566490153287+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),i=p*(.3224670334241136+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),b+=(o=l*f+i)-.5*l;break;case 1:f=.48383612272381005+(v=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(v),i=v*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(v)-.1475877229945939,u=.06462494023913339+v*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(v),b+=-.12148629053584961+(o=p*f-(-3638676997039505e-33-v*(i+l*u)));break;case 2:f=l*(l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)-.07721566490153287),i=1+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),b+=-.5*l+f/i}else if(r<8)switch(o=(l=r-(t=er(r)))*(l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)-.07721566490153287),a=1+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),b=.5*l+o/a,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:b+=rr(p*=l+2)}else r<0x400000000000000?(c=rr(r),v=.4189385332046727+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),b=(r-.5)*(c-1)+v):b=r*(rr(r)-1);return n&&(b=e-b),b}function fn(r){return v(r)===r}function on(r){return 0===r&&1/r===p}function an(r){return fn(r/2)}function cn(r){return an(r>0?r-1:r+1)}var vn=Math.sqrt,ln=!0===C?0:1,yn=new F(1),sn=new j(yn.buffer);function pn(r,n){return yn[0]=r,sn[ln]=n>>>0,yn[0]}function Nn(r){return 0|r}var wn=[1,1.5],bn=[0,.5849624872207642],hn=[0,1.350039202129749e-8];var dn=1e300,mn=[0,0],An=[0,0];function _n(r,n){var e,t,u,i,f,o,a,c,v,l,b,h,d,m;if(y(r)||y(n))return NaN;if(xr(mn,n),f=mn[0],0===mn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return vn(r);if(-.5===n)return 1/vn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(N(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:w(r)<1==(n===s)?0:s}(r,n)}if(xr(mn,r),i=mn[0],0===mn[1]){if(0===i)return function(r,n){return n===p?s:n===s?0:n>0?cn(n)?r:0:cn(n)?Ir(s,r):s}(r,n);if(1===r)return 1;if(-1===r&&cn(n))return-1;if(N(r))return r===p?_n(-0,-n):n<0?0:s}if(r<0&&!1===fn(n))return(r-r)/(r-r);if(u=w(r),e=2147483647&i|0,t=2147483647&f|0,a=f>>>31|0,o=(o=i>>>31|0)&&cn(n)?-1:1,t>1105199104){if(t>1139802112)return function(r,n){return(2147483647&D(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(e<1072693247)return 1===a?o*dn*dn:1e-300*o*1e-300;if(e>1072693248)return 0===a?o*dn*dn:1e-300*o*1e-300;b=function(r,n){var e,t,u,i,f,o;return e=(f=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((t=pn(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r}(An,u)}else b=function(r,n,e){var t,u,i,f,o,a,c,v,l,y,s,p,N,w,b,h,d,m,A,_,g;return m=0,e<1048576&&(m-=53,e=D(n*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,e-=1048576),f=pn(u=(h=(n=X(n,e))-(c=wn[_]))*(d=1/(n+c)),0),t=524288+(e>>1|536870912),a=X(0,t+=_<<18),b=(i=u*u)*i*(0===(g=i)?.5999999999999946:.5999999999999946+g*(.4285714285785502+g*(.33333332981837743+g*(.272728123808534+g*(.23066074577556175+.20697501780033842*g))))),a=pn(a=3+(i=f*f)+(b+=(o=d*(h-f*a-f*(n-(a-c))))*(f+u)),0),N=(s=-7.028461650952758e-9*(l=pn(l=(h=f*a)+(d=o*a+(b-(a-3-i))*u),0))+.9617966939259756*(d-(l-h))+hn[_])-((p=pn(p=(y=.9617967009544373*l)+s+(v=bn[_])+(w=m),0))-w-v-y),r[0]=p,r[1]=N,r}(An,u,e);if(l=(n-(c=pn(n,0)))*b[0]+n*b[1],v=c*b[0],xr(mn,h=l+v),d=Nn(mn[0]),m=Nn(mn[1]),d>=1083179008){if(0!=(d-1083179008|m))return o*dn*dn;if(l+8008566259537294e-32>h-v)return o*dn*dn}else if((2147483647&d)>=1083231232){if(0!=(d-3230714880|m))return 1e-300*o*1e-300;if(l<=h-v)return 1e-300*o*1e-300}return h=function(r,n,e){var t,u,i,f,o,a,c,v,l,y,s;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(t=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=i=X(0,t)),r=Nn(r=D(c=1-((c=(f=.6931471824645996*(i=pn(i=e+n,0)))+(o=.6931471805599453*(e-(i-n))+-1.904654299957768e-9*i))*(u=c-(i=c*c)*(0===(s=i)?.16666666666666602:.16666666666666602+s*(s*(6613756321437934e-20+s*(4.1381367970572385e-8*s-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-f))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Fr(c,v):X(c,r)}(d,v,l),o*h}function gn(r){var n;return y(r)||r===s?r:r===p?0:r>709.782712893384?s:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,e){var t,u,i,f;return Fr(1-(n-(t=r-n)*(i=t-(u=t*t)*(0===(f=u)?.16666666666666602:.16666666666666602+f*(f*(6613756321437934e-20+f*(4.1381367970572385e-8*f-16533902205465252e-22))-.0027777777777015593)))/(2-i)-r),e)}(r-.6931471803691238*(n=er(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function Un(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=gn(r),2.5066282746310007*(e=r>143.01608?(t=_n(r,.5*r-.25))*(t/e):_n(r,r-.5)/e)*n}function xn(r,n){return n/((1+.5772156649015329*r)*r)}function jn(r){var n,e,t,u;if(fn(r)&&r<0||r===p||y(r))return NaN;if(0===r)return on(r)?p:s;if(r>171.61447887182297)return s;if(r<-170.5674972726612)return 0;if((e=w(r))>33)return r>=0?Un(r):(n=0==(1&(t=v(e)))?-1:1,(u=e-t)>.5&&(u=e-(t+=1)),u=e*rn(nn*u),n*nn/(w(u)*Un(e)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return xn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return xn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}var In=17976931348623157e292;var kn=.8450629115104675;function On(r){var n,e,t,u,i,f,o,a;if(y(r))return NaN;if(r===s)return 0;if(r===p)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(u=.12837916709551256+(t=r*r)*function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015}(t),i=1+t*function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))}(t),f=u/i,r<.25?1-(r+r*f):(u=r*f,.5-(u+=r-.5)));if(e<1.25)return o=(i=e-1)*function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)}(i)-.0023621185607526594,a=1+i*function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))}(i),n?1+kn+o/a:1-kn-o/a;if(e<28){if(i=1/(e*e),e<2.857142857142857)u=i*function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818}(i)-.009864944034847148,i=1+i*function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))}(i);else{if(r<-6)return 2;u=i*function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523}(i)-.0098649429247001,i=1+i*function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))}(i)}return u=gn(-(t=pn(e,0))*t-.5625)*gn((t-e)*(t+e)+u/i),n?2-u/e:u/e}return n?2:0}function Sn(r,n){var e;return e=r*rr(n),n>=1?e<709.782712893384&&-n>-708.3964185322641?_n(n,r)*gn(-n):r>=1?_n(n/gn(n/r),r):gn(e-n):e>-708.3964185322641?_n(n,r)*gn(-n):n/r<709.782712893384?_n(n/gn(n/r),r):gn(e-n)}function Fn(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e}c(Fn,"factory",(function(r){var n,e,t,u;if(r.length>500)return function(n){return Fn(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var En=[0,0,0,0,0,0,0,0,0,0];var Tn=eval;function Hn(){var r;try{Tn('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r}var Vn=2220446049250313e-31;var Gn=Hn()?function(r,n){var e,t,u,i,f;if(f={},arguments.length>1&&(f=n),e=f.tolerance||Vn,u=f.maxTerms||1e6,i=f.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(w(e*(i+=t))>=w(t)||0==--u)break}else do{i+=t=r()}while(w(e*i)<w(t)&&--u);return i}:function(r,n){var e,t,u,i,f;f={},arguments.length>1&&(f=n),e=f.tolerance||Vn,u=f.maxTerms||1e6,i=f.initialValue||0;do{i+=t=r()}while(w(e*i)<w(t)&&--u);return i};function Pn(r,n,e){var t;return e=e||0,t=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}}(r,n),Gn(t,{initialValue:e})}var Ln=.6931471803691238,Mn=1.9082149292705877e-10;function Wn(r){var n,e,t,u,i,f,o,a,c,v;if(r<-1||y(r))return NaN;if(-1===r)return p;if(r===s)return r;if(0===r)return r;if(v=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,e=1)}return 0!==v&&(t<9007199254740992?(i=(v=((e=D(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),i/=c):(v=((e=D(c=r))>>20)-1023,i=0),(e&=1048575)<434334?c=X(c,1072693248|e):(v+=1,c=X(c,1071644672|e),e=1048576-e>>2),u=c-1),n=.5*u*u,0===e?0===u?v*Ln+(i+=v*Mn):v*Ln-((a=n*(1-.6666666666666666*u))-(v*Mn+i)-u):(a=(o=(f=u/(2+u))*f)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===v?u-(n-f*(n+a)):v*Ln-(n-(f*(n+a)+(v*Mn+i))-u))}function Yn(r){return 0===r&&1/r===s}function qn(r,n){var e,t,u,i;if(2===(e=arguments.length))return y(r)||y(n)?NaN:r===s||n===s?s:r===n&&0===r?Yn(r)?r:n:r>n?r:n;for(t=p,i=0;i<e;i++){if(y(u=arguments[i])||u===s)return u;(u>t||u===t&&0===u&&Yn(u))&&(t=u)}return t}function Cn(r,n){var e,t,u,i;if(2===(e=arguments.length))return y(r)||y(n)?NaN:r===p||n===p?p:r===n&&0===r?on(r)?r:n:r<n?r:n;for(t=s,i=0;i<e;i++){if(y(u=arguments[i])||u===p)return u;(u<t||u===t&&0===u&&on(u))&&(t=u)}return t}function Rn(r,n){var e,t,u,i,f,o,a,c,v,l;return a=(n-r-10.900511+.5)/(u=r+10.900511-.5),r<1?n<=-708.3964185322641?gn(r*rr(n)-n-un(r)):_n(n,r)*gn(-n)/jn(r):(w(a*a*r)<=100&&r>150?e=gn(e=r*(Wn(a)-a)+-10.400511*n/u):Cn(i=r*rr(n/u),f=r-n)<=-708.3964185322641||qn(i,f)>=709.782712893384?(t=f/r,Cn(i,f)/2>-708.3964185322641&&qn(i,f)/2<709.782712893384?e=(o=_n(n/u,r/2)*gn(f/2))*o:Cn(i,f)/4>-708.3964185322641&&qn(i,f)/4<709.782712893384&&n>r?(e=(o=_n(n/u,r/4)*gn(f/4))*o,e*=e):e=t>-708.3964185322641&&t<709.782712893384?_n(n*gn(t)/u,r):gn(i+f)):e=_n(n/u,r)*gn(f),e*=vn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(v=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(v=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),v/l)))}var zn=.6931471803691238,Bn=1.9082149292705877e-10;function Dn(r){var n,e,t,u,i,f,o,a,c,v,l,N;if(r===s||y(r))return r;if(r===p)return-1;if(0===r)return r;if(r<0?(e=!0,o=-r):(e=!1,o=r),o>=38.816242111356935){if(e)return-1;if(o>=709.782712893384)return s}if(i=0|D(o),o>.34657359027997264)o<1.0397207708399179?e?(t=r+zn,u=-Bn,N=-1):(t=r-zn,u=Bn,N=1):(N=e?1.4426950408889634*r-.5:1.4426950408889634*r+.5,t=r-(v=N|=0)*zn,u=v*Bn),c=t-(r=t-u)-u;else{if(i<1016070144)return r;N=0}return f=1+(a=r*(n=.5*r))*function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313}(a),l=a*((f-(v=3-f*n))/(6-r*v)),0===N?r-(r*l-a):(l=r*(l-c)-c,l-=a,-1===N?.5*(r-l)-.5:1===N?r<-.25?-2*(l-(r+.5)):1+2*(r-l):N<=-2||N>56?(o=X(o=1-(l-r),t=D(o)+(N<<20)|0))-1:(v=1,N<20?o=(v=X(v,t=1072693248-(2097152>>N)|0))-(l-r):(o=r-(l+(v=X(v,t=1023-N<<20|0))),o+=1),X(o,t=D(o)+(N<<20)|0)))}function Jn(r,n,e){var t,u,i,f,o,a,c;if(r<Vn)return-rr(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=rr(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*(f=0===(o=e)?-.01803556856784494:((o<0?-o:o)<=1?(a=o*(.02512664961998968+o*(.049410315156753225+o*(.0172491608709614+o*(o*(o*(0*o-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,c=1+o*(1.962029871977952+o*(1.4801966942423133+o*(.5413914320717209+o*(.09885042511280101+o*(.008213096746488934+o*(.00022493629192211576+-2.2335276320861708e-7*o))))))):(a=0+(o=1/o)*(o*(o*(o*(.0172491608709614+o*(.049410315156753225+o*(.02512664961998968+-.01803556856784494*o)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),c=o*(.00022493629192211576+o*(.008213096746488934+o*(.09885042511280101+o*(.5413914320717209+o*(1.4801966942423133+o*(1.962029871977952+1*o))))))-2.2335276320861708e-7),a/c))}return r<1&&(u+=-rr(r),e=n,n=r,r+=1),r<=1.5?(i=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)}(n),u+=.5281534194946289*(t=n*e)+t*i):(i=e*n,f=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)}(-e),u+=.45201730728149414*i+i*f)}function Kn(r,n,e){var t,u,i,f;return t=function(r){return y(r)?NaN:r<0?r<-.5?jn(1+r)-1:Dn(-Wn(r)+Jn(r+2,r+1,r)):r<2?Dn(Jn(r+1,r,r-1)):jn(1+r)-1}(r),u=(t+1)/r,i=function(r,n){var e;if(y(r)||y(n))return NaN;if(0===n)return 0;if(0===r)return-1;if(r<0&&n%2==0&&(r=-r),r>0){if((w(n*(r-1))<.5||w(n)<.2)&&(e=rr(r)*n)<.5)return Dn(e)}else if(er(n)!==n)return NaN;return _n(r,n)-1}(n,r),t-=i,t/=r,f=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}}(r,n),t=-(i+=1)*Gn(f,{initialValue:((e?u:0)-t)/i}),e&&(t=-t),[t,u]}function Qn(r,n,e){var t,u,i,f,o,a,c;if(f=(c=(t="function"==typeof r.next)?r.next().value:r())[1],i=c[0],0===f&&(f=11754943508222875e-54),o=f,a=0,!0===t)do{(c=r.next().value)&&(0===(a=c[1]+c[0]*a)&&(a=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),f*=u=o*(a=1/a))}while(w(u-1)>n&&--e);else do{(c=r())&&(0===(a=c[1]+c[0]*a)&&(a=11754943508222875e-54),0===(o=c[1]+c[0]/o)&&(o=11754943508222875e-54),f*=u=o*(a=1/a))}while(c&&w(u-1)>n&&--e);return i/f}function Xn(r,n,e){var t,u,i,f,o,a;if(0===(i=(a=(t="function"==typeof r.next)?r.next().value:r())[1])&&(i=11754943508222875e-54),f=i,o=0,!0===t)do{(a=r.next().value)&&(0===(o=a[1]+a[0]*o)&&(o=11754943508222875e-54),0===(f=a[1]+a[0]/f)&&(f=11754943508222875e-54),i*=u=f*(o=1/o))}while(a&&w(u-1)>n&&--e);else do{(a=r())&&(0===(o=a[1]+a[0]*o)&&(o=11754943508222875e-54),0===(f=a[1]+a[0]/f)&&(f=11754943508222875e-54),i*=u=f*(o=1/o))}while(a&&w(u-1)>n&&--e);return i}function Zn(r,n,e){var t,u,i,f,o,a;o=(a=r())[1],u=a[0],0===o&&(o=11754943508222875e-54),i=o,f=0;do{(a=r())&&(0===(f=a[1]+a[0]*f)&&(f=11754943508222875e-54),0===(i=a[1]+a[0]/i)&&(i=11754943508222875e-54),o*=t=i*(f=1/f))}while(a&&w(t-1)>n&&--e);return u/o}function $n(r,n,e){var t,u,i,f,o;0===(f=(o=r())[1])&&(f=11754943508222875e-54),u=f,i=0;do{(o=r())&&(0===(i=o[1]+o[0]*i)&&(i=11754943508222875e-54),0===(u=o[1]+o[0]/u)&&(u=11754943508222875e-54),f*=t=u*(i=1/i))}while(o&&w(t-1)>n&&--e);return f}var re=Hn()?function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||1e6,u=t.tolerance||Vn,t.keep?Xn(r,u,e):Qn(r,u,e)}:function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||Vn,e=t.maxIter||1e6,t.keep?$n(r,u,e):Zn(r,u,e)};function ne(r,n){var e=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}}(r,n);return 1/(n-r+1+re(e))}function ee(r,n,e,t){var u,i,f,o,a,c,l,y,p,N,b,h,d;if(r<0||n<=0)return NaN;if(i=void 0===e||e,l=t,y=0,n>=170&&!i)return l&&4*n<r?(y=n*rr(r)-r,y+=rr(ne(n,r))):!l&&n>4*r?(y=n*rr(r)-r,y+=rr(Pn(n,r,o=0)/n)):0===(y=ee(n,r,!0,l))?l?(y=rr(y=1+1/(12*n)+1/(288*n*n))-n+(n-.5)*rr(n),y+=rr(2.5066282746310007)):(y=n*rr(r)-r,y+=rr(Pn(n,r,o=0)/n)):y=rr(y)+un(n),y>709.782712893384?s:gn(y);switch(n<30&&n<=r+1&&r<709.782712893384?a=!(p=(h=v(n))===n)&&.5===w(h-n):p=a=!1,p&&r>.6?(l=!l,f=0):a&&r>.2?(l=!l,f=1):r<1.4901161193847656e-8&&n>1?f=6:r<.5?f=-.4/rr(r)<n?2:3:r<1.1?f=.75*r<n?2:3:(c=!1,i&&n>20&&(N=w((r-n)/n),n>200?20/n>N*N&&(c=!0):N<.4&&(c=!0)),c?f=5:r-1/(3*r)<n?f=2:(f=4,l=!l)),f){case 0:y=function(r,n){var e,t,u;if(0!==(t=gn(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t}(n,r),!1===i&&(y*=jn(n));break;case 1:y=function(r,n){var e,t,u,i;if(0!==(u=On(vn(n)))&&r>1){for(e=gn(-n)/vn(nn*n),e*=n,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u}(n,r),!1===i&&(y*=jn(n));break;case 2:0!==(y=i?Rn(n,r):Sn(n,r))&&(o=0,u=!1,l&&(o=i?1:jn(n),i||y>=1||In*y>o?(o/=y,i||n<1||In/n>o?(o*=-n,u=!0):o=0):o=0)),y*=Pn(n,r,o)/n,u&&(l=!1,y=-y);break;case 3:y=(b=Kn(n,r,l=!l))[0],d=b[1],l=!1,i&&(y/=d);break;case 4:0!==(y=i?Rn(n,r):Sn(n,r))&&(y*=ne(n,r));break;case 5:y=function(r,n){var e,t,u,i,f;return i=r*(u=-rr(1+(t=(n-r)/r))+t),f=vn(2*u),n<r&&(f=-f),En[0]=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333}(f),En[1]=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852}(f),En[2]=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)}(f),En[3]=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))}(f),En[4]=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117}(f),En[5]=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813}(f),En[6]=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)}(f),En[7]=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))}(f),En[8]=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094}(f),En[9]=-.0005967612901927463,e=Fn(En,1/r),e*=gn(-i)/vn(6.283185307179586*r),n<r&&(e=-e),e+On(vn(i))/2}(n,r),r>=n&&(l=!l);break;case 6:y=i?_n(r,n)/jn(n+1):_n(r,n)/n,y*=1-n*r/(n+1)}return i&&y>1&&(y=1),l&&(y=(i?1:jn(n))-y),y}function te(r,n,e){return y(r)||y(n)||y(e)||n<0||e<=0?NaN:0===n?r<0?0:1:r<=0?0:r===s?1:ee(r*e,n)}function ue(r){return function(){return r}}function ie(r){return y(r)?ue(NaN):function(n){if(y(n))return NaN;return n<r?0:1}}function fe(r,n){return y(r)||y(n)||r<0||n<=0?ue(NaN):0===r?ie(0):function(e){if(e<=0)return 0;if(e===s)return 1;return ee(e*n,r)}}function oe(r,n,e){return l(n)?te(r,n,e):NaN}function ae(r,n){return l(r)?fe(r,n):ue(NaN)}c((function(r,n){return y(r)||y(n)?NaN:r<n?0:1}),"factory",ie),c(te,"factory",fe),c(oe,"factory",ae);export{oe as default,ae as factory};
//# sourceMappingURL=mod.js.map