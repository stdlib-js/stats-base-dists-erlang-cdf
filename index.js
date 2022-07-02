// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";var r,n="function"==typeof Object.defineProperty?Object.defineProperty:null,e=function(){try{return n({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,u=Object.prototype,i=u.toString,f=u.__defineGetter__,o=u.__defineSetter__,c=u.__lookupGetter__,a=u.__lookupSetter__,l=t,v=function(r,n,e){var t,l,v,y;if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((l="value"in e)&&(c.call(r,n)||a.call(r,n)?(t=r.__proto__,r.__proto__=u,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),v="get"in e,y="set"in e,l&&(v||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return v&&f&&f.call(r,n,e.get),y&&o&&o.call(r,n,e.set),r},y=e()?l:v,s=function(r,n,e){y(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})},p=Math.floor,N=p,b=function(r){return N(r)===r&&r>=0},h=function(r){return r!=r},w=Number.POSITIVE_INFINITY,d=Number.NEGATIVE_INFINITY,m=w,A=d,_=function(r){return r===m||r===A},g=function(r){return Math.abs(r)},U="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),x=Object.prototype.toString,j=x,I=function(r){return j.call(r)},k=Object.prototype.hasOwnProperty,O=function(r,n){return null!=r&&k.call(r,n)},S="function"==typeof Symbol?Symbol.toStringTag:"",T=O,F=S,E=x,H=I,V=function(r){var n,e,t;if(null==r)return E.call(r);e=r[F],n=T(r,F);try{r[F]=void 0}catch(n){return E.call(r)}return t=E.call(r),n?r[F]=e:delete r[F],t},G=U&&"symbol"==typeof Symbol.toStringTag?V:H,P=G,L="function"==typeof Uint32Array,M="function"==typeof Uint32Array?Uint32Array:null,W=function(r){return L&&r instanceof Uint32Array||"[object Uint32Array]"===P(r)},Y=M,q=function(){var r,n;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,4294967296,4294967297]),r=W(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},C="function"==typeof Uint32Array?Uint32Array:void 0,R=function(){throw new Error("not implemented")},z=q()?C:R,B=G,D="function"==typeof Float64Array,J="function"==typeof Float64Array?Float64Array:null,K=function(r){return D&&r instanceof Float64Array||"[object Float64Array]"===B(r)},Q=J,X=function(){var r,n;if("function"!=typeof Q)return!1;try{n=new Q([1,3.14,-3.14,NaN]),r=K(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r},Z="function"==typeof Float64Array?Float64Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=G,er="function"==typeof Uint8Array,tr="function"==typeof Uint8Array?Uint8Array:null,ur=function(r){return er&&r instanceof Uint8Array||"[object Uint8Array]"===nr(r)},ir=tr,fr=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,256,257]),r=ur(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},or="function"==typeof Uint8Array?Uint8Array:void 0,cr=function(){throw new Error("not implemented")},ar=fr()?or:cr,lr=G,vr="function"==typeof Uint16Array,yr="function"==typeof Uint16Array?Uint16Array:null,sr=function(r){return vr&&r instanceof Uint16Array||"[object Uint16Array]"===lr(r)},pr=yr,Nr=function(){var r,n;if("function"!=typeof pr)return!1;try{n=new pr(n=[1,3.14,-3.14,65536,65537]),r=sr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r},br="function"==typeof Uint16Array?Uint16Array:void 0,hr=function(){throw new Error("not implemented")},wr={uint16:Nr()?br:hr,uint8:ar};(r=new wr.uint16(1))[0]=4660;var dr,mr,Ar=52===new wr.uint8(r.buffer)[0],_r=z,gr=!0===Ar?1:0,Ur=new rr(1),xr=new _r(Ur.buffer),jr=function(r){return Ur[0]=r,xr[gr]},Ir=z,kr=!0===Ar?1:0,Or=new rr(1),Sr=new Ir(Or.buffer),Tr=function(r,n){return Or[0]=r,Sr[kr]=n>>>0,Or[0]},Fr=Tr,Er=jr,Hr=Fr,Vr=h,Gr=d,Pr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Lr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Mr=.6931471803691238,Wr=1.9082149292705877e-10,Yr=1048575,qr=function(r){var n,e,t,u,i,f,o,c,a,l,v;return 0===r?Gr:Vr(r)||r<0?NaN:(u=0,(e=Er(r))<1048576&&(u-=54,e=Er(r*=0x40000000000000)),e>=2146435072?r+r:(u+=(e>>20)-1023|0,u+=(o=614244+(e&=Yr)&1048576|0)>>20|0,f=(r=Hr(r,e|1072693248^o))-1,(Yr&2+e)<3?0===f?0===u?0:u*Mr+u*Wr:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Mr-(i-u*Wr-f)):(o=e-398458|0,c=440401-e|0,t=(l=(v=(a=f/(2+f))*a)*v)*Pr(l),i=v*Lr(l)+t,(o|=c)>0?(n=.5*f*f,0===u?f-(n-a*(n+i)):u*Mr-(n-(a*(n+i)+u*Wr)-f)):0===u?f-a*(f-i):u*Mr-(a*(f-i)-u*Wr-f))))},Cr=Math.ceil,Rr=p,zr=Cr,Br=function(r){return r<0?zr(r):Rr(r)},Dr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},Jr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7},Kr=function(r,n){var e,t,u,i;return u=(i=r*r)*i,t=i*Dr(i),t+=u*u*Jr(i),(u=1-(e=.5*i))+(1-u-e+(i*t-r*n))},Qr=-.16666666666666632,Xr=function(r,n){var e,t,u;return e=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),t=u*r,0===n?r+t*(Qr+u*e):r-(u*(.5*n-t*e)-n-t*Qr)},Zr=z,$r=!0===Ar?0:1,rn=new rr(1),nn=new Zr(rn.buffer),en=function(r){return rn[0]=r,nn[$r]};!0===Ar?(dr=1,mr=0):(dr=0,mr=1);var tn,un,fn=z,on={HIGH:dr,LOW:mr},cn=new rr(1),an=new fn(cn.buffer),ln=on.HIGH,vn=on.LOW,yn=function(r,n){return an[ln]=r,an[vn]=n,cn[0]},sn=yn;!0===Ar?(tn=1,un=0):(tn=0,un=1);var pn=z,Nn={HIGH:tn,LOW:un},bn=new rr(1),hn=new pn(bn.buffer),wn=Nn.HIGH,dn=Nn.LOW,mn=function(r,n){return bn[0]=n,r[0]=hn[wn],r[1]=hn[dn],r},An=function(r,n){return 1===arguments.length?mn([0,0],r):mn(r,n)},_n=An,gn=_n,Un=jr,xn=sn,jn=[0,0],In=function(r,n){var e,t;return gn(jn,r),e=jn[0],e&=2147483647,t=Un(n),xn(e|=t&=2147483648,jn[1])},kn=_,On=h,Sn=g,Tn=function(r,n){return On(n)||kn(n)?(r[0]=n,r[1]=0,r):0!==n&&Sn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)},Fn=function(r,n){return 1===arguments.length?Tn([0,0],r):Tn(r,n)},En=jr,Hn=function(r){var n=En(r);return(n=(2146435072&n)>>>20)-1023|0},Vn=w,Gn=d,Pn=h,Ln=_,Mn=In,Wn=Fn,Yn=Hn,qn=_n,Cn=sn,Rn=[0,0],zn=[0,0],Bn=function(r,n){var e,t;return 0===n||0===r||Pn(r)||Ln(r)?r:(Wn(Rn,r),n+=Rn[1],(n+=Yn(r=Rn[0]))<-1074?Mn(0,r):n>1023?r<0?Gn:Vn:(n<=-1023?(n+=52,t=2220446049250313e-31):t=1,qn(zn,r),e=zn[0],e&=2148532223,t*Cn(e|=n+1023<<20,zn[1])))},Dn=Bn,Jn=function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e},Kn=p,Qn=Dn,Xn=function(r){return Jn(0,r)},Zn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],$n=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],re=16777216,ne=5.960464477539063e-8,ee=Xn(20),te=Xn(20),ue=Xn(20),ie=Xn(20);function fe(r,n,e,t,u,i,f,o,c){var a,l,v,y,s,p,N,b,h;for(y=i,h=t[e],b=e,s=0;b>0;s++)l=ne*h|0,ie[s]=h-re*l|0,h=t[b-1]+l,b-=1;if(h=Qn(h,u),h-=8*Kn(.125*h),h-=N=0|h,v=0,u>0?(N+=s=ie[e-1]>>24-u,ie[e-1]-=s<<24-u,v=ie[e-1]>>23-u):0===u?v=ie[e-1]>>23:h>=.5&&(v=2),v>0){for(N+=1,a=0,s=0;s<e;s++)b=ie[s],0===a?0!==b&&(a=1,ie[s]=16777216-b):ie[s]=16777215-b;if(u>0)switch(u){case 1:ie[e-1]&=8388607;break;case 2:ie[e-1]&=4194303}2===v&&(h=1-h,0!==a&&(h-=Qn(1,u)))}if(0===h){for(b=0,s=e-1;s>=i;s--)b|=ie[s];if(0===b){for(p=1;0===ie[i-p];p++);for(s=e+1;s<=e+p;s++){for(c[o+s]=Zn[f+s],l=0,b=0;b<=o;b++)l+=r[b]*c[o+(s-b)];t[s]=l}return fe(r,n,e+=p,t,u,i,f,o,c)}}if(0===h)for(e-=1,u-=24;0===ie[e];)e-=1,u-=24;else(h=Qn(h,-u))>=re?(l=ne*h|0,ie[e]=h-re*l|0,u+=24,ie[e+=1]=l):ie[e]=0|h;for(l=Qn(1,u),s=e;s>=0;s--)t[s]=l*ie[s],l*=ne;for(s=e;s>=0;s--){for(l=0,p=0;p<=y&&p<=e-s;p++)l+=$n[p]*t[s+p];ue[e-s]=l}for(l=0,s=e;s>=0;s--)l+=ue[s];for(n[0]=0===v?l:-l,l=ue[0]-l,s=1;s<=e;s++)l+=ue[s];return n[1]=0===v?l:-l,7&N}var oe=function(r,n,e,t){var u,i,f,o,c,a,l;for((i=(e-3)/24|0)<0&&(i=0),o=e-24*(i+1),a=i-(f=t-1),l=f+4,c=0;c<=l;c++)ee[c]=a<0?0:Zn[a],a+=1;for(c=0;c<=4;c++){for(u=0,a=0;a<=f;a++)u+=r[a]*ee[f+(c-a)];te[c]=u}return fe(r,n,4,te,o,4,i,f,ee)},ce=Math.round,ae=jr,le=jr,ve=en,ye=sn,se=oe,pe=function(r,n,e){var t,u,i,f,o;return i=r-1.5707963267341256*(t=ce(.6366197723675814*r)),f=6077100506506192e-26*t,o=n>>20|0,e[0]=i-f,o-(ae(e[0])>>20&2047)>16&&(f=20222662487959506e-37*t-((u=i)-(i=u-(f=6077100506303966e-26*t))-f),e[0]=i-f,o-(ae(e[0])>>20&2047)>49&&(f=84784276603689e-45*t-((u=i)-(i=u-(f=20222662487111665e-37*t))-f),e[0]=i-f)),e[1]=i-e[0]-f,t},Ne=1.5707963267341256,be=6077100506506192e-26,he=2*be,we=3*be,de=4*be,me=[0,0,0],Ae=[0,0],_e=function(r,n){var e,t,u,i,f,o,c;if((u=2147483647&le(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?pe(r,u,n):u<=1073928572?r>0?(c=r-Ne,n[0]=c-be,n[1]=c-n[0]-be,1):(c=r+Ne,n[0]=c+be,n[1]=c-n[0]+be,-1):r>0?(c=r-2*Ne,n[0]=c-he,n[1]=c-n[0]-he,2):(c=r+2*Ne,n[0]=c+he,n[1]=c-n[0]+he,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?pe(r,u,n):r>0?(c=r-3*Ne,n[0]=c-we,n[1]=c-n[0]-we,3):(c=r+3*Ne,n[0]=c+we,n[1]=c-n[0]+we,-3):1075388923===u?pe(r,u,n):r>0?(c=r-4*Ne,n[0]=c-de,n[1]=c-n[0]-de,4):(c=r+4*Ne,n[0]=c+de,n[1]=c-n[0]+de,-4);if(u<1094263291)return pe(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(e=ve(r),c=ye(u-((t=(u>>20)-1046)<<20|0),e),f=0;f<2;f++)me[f]=0|c,c=16777216*(c-me[f]);for(me[2]=c,i=3;0===me[i-1];)i-=1;return o=se(me,Ae,t,i),r<0?(n[0]=-Ae[0],n[1]=-Ae[1],-o):(n[0]=Ae[0],n[1]=Ae[1],o)},ge=jr,Ue=Kr,xe=Xr,je=_e,Ie=[0,0],ke=jr,Oe=Kr,Se=Xr,Te=_e,Fe=[0,0],Ee=function(r){var n;if(n=ke(r),(n&=2147483647)<=1072243195)return n<1045430272?r:Se(r,0);if(n>=2146435072)return NaN;switch(3&Te(r,Fe)){case 0:return Se(Fe[0],Fe[1]);case 1:return Oe(Fe[0],Fe[1]);case 2:return-Se(Fe[0],Fe[1]);default:return-Oe(Fe[0],Fe[1])}},He=3.141592653589793,Ve=h,Ge=_,Pe=function(r){var n;if(n=ge(r),(n&=2147483647)<=1072243195)return n<1044381696?1:Ue(r,0);if(n>=2146435072)return NaN;switch(3&je(r,Ie)){case 0:return Ue(Ie[0],Ie[1]);case 1:return-xe(Ie[0],Ie[1]);case 2:return-Ue(Ie[0],Ie[1]);default:return xe(Ie[0],Ie[1])}},Le=Ee,Me=g,We=In,Ye=He,qe=h,Ce=_,Re=g,ze=qr,Be=Br,De=function(r){var n,e;return Ve(r)||Ge(r)?NaN:0===(n=Me(e=r%2))||1===n?We(0,e):n<.25?Le(Ye*e):n<.75?We(Pe(Ye*(n=.5-n)),e):n<1.25?(e=We(1,e)-e,Le(Ye*e)):n<1.75?-We(Pe(Ye*(n-=1.5)),e):(e-=We(2,e),Le(Ye*e))},Je=w,Ke=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},Qe=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Xe=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Ze=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},$e=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},rt=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},nt=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},et=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},tt=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},ut=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},it=1.4616321449683622,ft=1.4616321449683622,ot=function(r){var n,e,t,u,i,f,o,c;if(qe(r)||Ce(r))return r;if(0===r)return Je;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-ze(r);if(n){if(r>=4503599627370496)return Je;if(0===(u=De(r)))return Je;e=ze(3.141592653589793/Re(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(c=-ze(r),r>=it-1+.27?(f=1-r,t=0):r>=it-1-.27?(f=r-(ft-1),t=1):(f=r,t=2)):(c=0,r>=it+.27?(f=2-r,t=0):r>=it-.27?(f=r-ft,t=1):(f=r-1,t=2)),t){case 0:c+=f*(.07721566490153287+(o=f*f)*Ke(o))+o*(.3224670334241136+o*Qe(o))-.5*f;break;case 1:c+=(o=f*f)*(.48383612272381005+(i=o*f)*$e(i))-(-3638676997039505e-33-i*(i*rt(i)-.1475877229945939+f*(.06462494023913339+i*nt(i))))-.12148629053584961;break;case 2:c+=-.5*f+f*(f*et(f)-.07721566490153287)/(1+f*tt(f))}else if(r<8)switch(c=.5*(f=r-(t=Be(r)))+f*(f*Ze(f)-.07721566490153287)/(1+f*Xe(f)),o=1,t){case 7:o*=f+6;case 6:o*=f+5;case 5:o*=f+4;case 4:o*=f+3;case 3:c+=ze(o*=f+2)}else c=r<0x400000000000000?(r-.5)*((u=ze(r))-1)+(i=.4189385332046727+(o=1/r)*ut(f=o*o)):r*(ze(r)-1);return n&&(c=e-c),c},ct=p,at=function(r){return ct(r)===r},lt=d,vt=function(r){return 0===r&&1/r===lt},yt=at,st=function(r){return yt(r/2)},pt=function(r){return st(r>0?r-1:r+1)},Nt=Math.sqrt,bt=z,ht=!0===Ar?0:1,wt=new rr(1),dt=new bt(wt.buffer),mt=function(r,n){return wt[0]=r,dt[ht]=n>>>0,wt[0]},At=function(r){return 0|r},_t=pt,gt=In,Ut=d,xt=w,jt=jr,It=g,kt=w,Ot=jr,St=mt,Tt=Fr,Ft=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Et=1048576,Ht=[1,1.5],Vt=[0,.5849624872207642],Gt=[0,1.350039202129749e-8],Pt=mt,Lt=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)},Mt=jr,Wt=Fr,Yt=mt,qt=At,Ct=Dn,Rt=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},zt=2147483647,Bt=1048575,Dt=1048576,Jt=h,Kt=pt,Qt=_,Xt=at,Zt=Nt,$t=g,ru=_n,nu=mt,eu=At,tu=d,uu=w,iu=function(r,n){return n===Ut?xt:n===xt?0:n>0?_t(n)?r:0:_t(n)?gt(xt,r):xt},fu=function(r,n){return(2147483647&jt(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},ou=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:It(r)<1==(n===kt)?0:kt},cu=function(r,n,e){var t,u,i,f,o,c,a,l,v,y,s,p,N,b,h,w,d,m,A,_;return m=0,e<Et&&(m-=53,e=Ot(n*=9007199254740992)),m+=(e>>20)-1023|0,e=1072693248|(A=1048575&e|0),A<=235662?_=0:A<767610?_=1:(_=0,m+=1,e-=Et),t=524288+(e>>1|536870912),o=(d=1/((n=Tt(n,e))+(a=Ht[_])))*((w=n-a)-(f=St(u=w*d,0))*(c=Tt(0,t+=_<<18))-f*(n-(c-a))),h=(i=u*u)*i*Ft(i),c=St(c=3+(i=f*f)+(h+=o*(f+u)),0),N=(s=-7.028461650952758e-9*(v=St(v=(w=f*c)+(d=o*c+(h-(c-3-i))*u),0))+.9617966939259756*(d-(v-w))+Gt[_])-((p=St(p=(y=.9617967009544373*v)+s+(l=Vt[_])+(b=m),0))-b-l-y),r[0]=p,r[1]=N,r},au=function(r,n){var e,t,u,i,f;return e=(f=1.9259629911266175e-8*(u=n-1)-u*u*Lt(u)*1.4426950408889634)-((t=Pt(t=(i=1.4426950216293335*u)+f,0))-i),r[0]=t,r[1]=e,r},lu=function(r,n,e){var t,u,i,f,o,c,a,l,v;return v=((l=r&zt|0)>>20)-1023|0,a=0,l>1071644672&&(u=Wt(0,((a=r+(Dt>>v+1)>>>0)&~(Bt>>(v=((a&zt)>>20)-1023|0)))>>>0),a=(a&Bt|Dt)>>20-v>>>0,r<0&&(a=-a),n-=u),o=(f=.6931471805599453*(e-((u=Yt(u=e+n,0))-n))+-1.904654299957768e-9*u)-((c=(i=.6931471824645996*u)+f)-i),t=c-(u=c*c)*Rt(u),r=Mt(c=1-(c*t/(t-2)-(o+c*o)-c)),r=qt(r),c=(r+=a<<20>>>0)>>20<=0?Ct(c,a):Wt(c,r)},vu=2147483647,yu=1083179008,su=1e300,pu=1e-300,Nu=[0,0],bu=[0,0],hu=function r(n,e){var t,u,i,f,o,c,a,l,v,y,s,p,N,b;if(Jt(n)||Jt(e))return NaN;if(ru(Nu,e),o=Nu[0],0===Nu[1]){if(0===e)return 1;if(1===e)return n;if(-1===e)return 1/n;if(.5===e)return Zt(n);if(-.5===e)return 1/Zt(n);if(2===e)return n*n;if(3===e)return n*n*n;if(4===e)return(n*=n)*n;if(Qt(e))return ou(n,e)}if(ru(Nu,n),f=Nu[0],0===Nu[1]){if(0===f)return iu(n,e);if(1===n)return 1;if(-1===n&&Kt(e))return-1;if(Qt(n))return n===tu?r(-0,-e):e<0?0:uu}if(n<0&&!1===Xt(e))return(n-n)/(n-n);if(i=$t(n),t=f&vu|0,u=o&vu|0,a=o>>>31|0,c=(c=f>>>31|0)&&Kt(e)?-1:1,u>1105199104){if(u>1139802112)return fu(n,e);if(t<1072693247)return 1===a?c*su*su:c*pu*pu;if(t>1072693248)return 0===a?c*su*su:c*pu*pu;s=au(bu,i)}else s=cu(bu,i,t);if(y=(e-(l=nu(e,0)))*s[0]+e*s[1],v=l*s[0],ru(Nu,p=y+v),N=eu(Nu[0]),b=eu(Nu[1]),N>=yu){if(0!=(N-yu|b))return c*su*su;if(y+8008566259537294e-32>p-v)return c*su*su}else if((N&vu)>=1083231232){if(0!=(N-3230714880|b))return c*pu*pu;if(y<=p-v)return c*pu*pu}return c*(p=lu(N,v,y))},wu=hu,du=Dn,mu=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Au=h,_u=Br,gu=d,Uu=w,xu=function(r,n,e){var t,u,i;return i=(t=r-n)-(u=t*t)*mu(u),du(1-(n-t*i/(2-i)-r),e)},ju=1.4426950408889634,Iu=1/(1<<28),ku=function(r){var n;return Au(r)||r===Uu?r:r===gu?0:r>709.782712893384?Uu:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<Iu?1+r:(n=_u(r<0?ju*r-.5:ju*r+.5),xu(r-.6931471803691238*n,1.9082149292705877e-10*n,n))},Ou=wu,Su=ku,Tu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))},Fu=h,Eu=at,Hu=vt,Vu=g,Gu=p,Pu=Ee,Lu=w,Mu=d,Wu=He,Yu=function(r){var n,e,t;return n=1+(n=1/r)*Tu(n),e=Su(r),2.5066282746310007*(e=r>143.01608?(t=Ou(r,.5*r-.25))*(t/e):Ou(r,r-.5)/e)*n},qu=function(r,n){return n/((1+.5772156649015329*r)*r)},Cu=function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)},Ru=function(r){var n,e,t,u;if(Eu(r)&&r<0||r===Mu||Fu(r))return NaN;if(0===r)return Hu(r)?Mu:Lu;if(r>171.61447887182297)return Lu;if(r<-170.5674972726612)return 0;if((e=Vu(r))>33)return r>=0?Yu(r):(n=0==(1&(t=Gu(e)))?-1:1,(u=e-t)>.5&&(u=e-(t+=1)),u=e*Pu(Wu*u),n*Wu/(Vu(u)*Yu(e)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return qu(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return qu(r,u);u/=r,r+=1}return 2===r?u:u*Cu(r-=2)},zu=709.782712893384,Bu=ku,Du=function(r,n){var e,t,u;if(0!==(t=Bu(-n)))for(e=t,u=1;u<r;++u)e/=u,t+=e*=n;return t},Ju=h,Ku=ku,Qu=mt,Xu=w,Zu=d,$u=function(r){return 0===r?-.3250421072470015:r*(r*(-23763016656650163e-21*r-.005770270296489442)-.02848174957559851)-.3250421072470015},ri=function(r){return 0===r?.39791722395915535:.39791722395915535+r*(.0650222499887673+r*(.005081306281875766+r*(.00013249473800432164+-3960228278775368e-21*r)))},ni=function(r){return 0===r?.41485611868374833:.41485611868374833+r*(r*(.31834661990116175+r*(r*(.035478304325618236+-.002166375594868791*r)-.11089469428239668))-.3722078760357013)},ei=function(r){return 0===r?.10642088040084423:.10642088040084423+r*(.540397917702171+r*(.07182865441419627+r*(.12617121980876164+r*(.01363708391202905+.011984499846799107*r))))},ti=function(r){return 0===r?-.6938585727071818:r*(r*(r*(r*(r*(-9.814329344169145*r-81.2874355063066)-184.60509290671104)-162.39666946257347)-62.375332450326006)-10.558626225323291)-.6938585727071818},ui=function(r){return 0===r?19.651271667439257:19.651271667439257+r*(137.65775414351904+r*(434.56587747522923+r*(645.3872717332679+r*(429.00814002756783+r*(108.63500554177944+r*(6.570249770319282+-.0604244152148581*r))))))},ii=function(r){return 0===r?-.799283237680523:r*(r*(r*(r*(-483.5191916086514*r-1025.0951316110772)-637.5664433683896)-160.63638485582192)-17.757954917754752)-.799283237680523},fi=function(r){return 0===r?30.33806074348246:30.33806074348246+r*(325.7925129965739+r*(1536.729586084437+r*(3199.8582195085955+r*(2553.0504064331644+r*(474.52854120695537+-22.44095244658582*r)))))},oi=.8450629115104675,ci=function(r){var n,e,t,u,i,f,o,c;if(Ju(r))return NaN;if(r===Xu)return 0;if(r===Zu)return 2;if(0===r)return 1;if(r<0?(n=!0,e=-r):(n=!1,e=r),e<.84375)return e<13877787807814457e-33?1-r:(f=(u=.12837916709551256+(t=r*r)*$u(t))/(i=1+t*ri(t)),r<.25?1-(r+r*f):(u=r*f,.5-(u+=r-.5)));if(e<1.25)return o=(i=e-1)*ni(i)-.0023621185607526594,c=1+i*ei(i),n?1+oi+o/c:1-oi-o/c;if(e<28){if(i=1/(e*e),e<2.857142857142857)u=i*ti(i)-.009864944034847148,i=1+i*ui(i);else{if(r<-6)return 2;u=i*ii(i)-.0098649429247001,i=1+i*fi(i)}return t=Qu(e,0),u=Ku(-t*t-.5625)*Ku((t-e)*(t+e)+u/i),n?2-u/e:u/e}return n?2:0},ai=ci,li=Nt,vi=ku,yi=function(r,n){var e,t,u,i;if(0!==(u=ai(li(n)))&&r>1){for(e=vi(-n)/li(3.141592653589793*n),e*=n,t=e/=.5,i=2;i<r;++i)e/=i-.5,t+=e*=n;u+=t}return u},si=-708.3964185322641,pi=ku,Ni=wu,bi=qr,hi=zu,wi=si,di=function(r,n){var e;return e=r*bi(n),n>=1?e<hi&&-n>wi?Ni(n,r)*pi(-n):r>=1?Ni(n/pi(n/r),r):pi(e-n):e>wi?Ni(n,r)*pi(-n):n/r<hi?Ni(n/pi(n/r),r):pi(e-n)},mi=function(r,n){var e,t;if((t=r.length)<2||0===n)return 0===t?0:r[0];for(e=r[t-=1]*n+r[t-1],t-=2;t>=0;)e=e*n+r[t],t-=1;return e},Ai=mi,_i=mi;s(_i,"factory",(function(r){var n,e,t,u;if(r.length>500)return function(n){return Ai(r,n)};if(n="return function evalpoly(x){",0===(e=r.length))n+="return 0.0;";else if(1===e)n+="return "+r[0]+";";else{for(n+="if(x===0.0){return "+r[0]+";}",n+="return "+r[0],t=e-1,u=1;u<e;u++)n+="+x*",u<t&&(n+="("),n+=r[u];for(u=0;u<t-1;u++)n+=")";n+=";"}return n+="}",n+="//# sourceURL=evalpoly.factory.js",new Function(n)()}));var gi,Ui=_i,xi=ci,ji=Nt,Ii=ku,ki=qr,Oi=function(r){return 0===r?-.3333333333333333:r*(.08333333333333333+r*(r*(.0011574074074074073+r*(.0003527336860670194+r*(r*(3919263178522438e-20+r*(r*(r*(8.296711340953087e-7+r*(r*(6.707853543401498e-9+r*(1.0261809784240309e-8+r*(9.14769958223679e-10*r-4.382036018453353e-9)))-1.7665952736826078e-7))-185406221071516e-20)-21854485106799924e-22))-.0001787551440329218)))-.014814814814814815))-.3333333333333333},Si=function(r){return 0===r?-.001851851851851852:r*(r*(.0026455026455026454+r*(r*(.00020576131687242798+r*(r*(r*(764916091608111e-20+r*(r*(4.647127802807434e-9+r*(1.378633446915721e-7+r*(1.1951628599778148e-8*r-5.752545603517705e-8)))-16120900894563446e-22))-18098550334489977e-21)-4.018775720164609e-7))-.0009902263374485596))-.003472222222222222)-.001851851851851852},Ti=function(r){return 0===r?.004133597883597883:.004133597883597883+r*(r*(.0007716049382716049+r*(20093878600823047e-22+r*(r*(52923448829120125e-21+r*(r*(3.423578734096138e-8+r*(13721957309062932e-22+r*(1.4280614206064242e-7*r-6.298992138380055e-7)))-12760635188618728e-21))-.00010736653226365161)))-.0026813271604938273)},Fi=function(r){return 0===r?.0006494341563786008:.0006494341563786008+r*(.00022947209362139917+r*(r*(.00026772063206283885+r*(r*(r*(11082654115347302e-21+r*(14230900732435883e-22*r-56749528269915965e-22))-2.396505113867297e-7)-7561801671883977e-20))-.0004691894943952557))},Ei=function(r){return 0===r?-.0008618882909167117:r*(.0007840392217200666+r*(r*(r*(6641498215465122e-20+r*(11375726970678419e-21*r-3968365047179435e-20))-14638452578843418e-22)-.0002990724803031902))-.0008618882909167117},Hi=function(r){return 0===r?-.00033679855336635813:r*(r*(.0002772753244959392+r*(r*(6797780477937208e-20+r*(1.419062920643967e-7+r*(r*(8018470256334202e-21+-2291481176508095e-21*r)-13594048189768693e-21)))-.00019932570516188847))-6972813758365858e-20)-.00033679855336635813},Vi=function(r){return 0===r?.0005313079364639922:.0005313079364639922+r*(r*(.0002708782096718045+r*(7.902353232660328e-7+r*(r*(561168275310625e-19+-18329116582843375e-21*r)-8153969367561969e-20)))-.0005921664373536939)},Gi=function(r){return 0===r?.00034436760689237765:.00034436760689237765+r*(5171790908260592e-20+r*(r*(.0002812695154763237+-.00010976582244684731*r)-.00033493161081142234))},Pi=function(r){return 0===r?-.0006526239185953094:r*(.0008394987206720873+-.000438297098541721*r)-.0006526239185953094},Li=[0,0,0,0,0,0,0,0,0,0],Mi=function(r,n){var e,t,u,i,f;return i=r*(u=-ki(1+(t=(n-r)/r))+t),f=ji(2*u),n<r&&(f=-f),Li[0]=Oi(f),Li[1]=Si(f),Li[2]=Ti(f),Li[3]=Fi(f),Li[4]=Ei(f),Li[5]=Hi(f),Li[6]=Vi(f),Li[7]=Gi(f),Li[8]=Pi(f),Li[9]=-.0005967612901927463,e=Ui(Li,1/r),e*=Ii(-i)/ji(6.283185307179586*r),n<r&&(e=-e),e+=xi(ji(i))/2},Wi=eval,Yi=function(){var r;try{Wi('"use strict"; (function* () {})'),r=!0}catch(n){r=!1}return r},qi=Yi,Ci=2220446049250313e-31,Ri=g,zi=Ci,Bi=1e6,Di=function(r,n){var e,t,u,i,f;if(f={},arguments.length>1&&(f=n),e=f.tolerance||zi,u=f.maxTerms||Bi,i=f.initialValue||0,!0==("function"==typeof r.next)){for(t of r)if(Ri(e*(i+=t))>=Ri(t)||0==--u)break}else do{i+=t=r()}while(Ri(e*i)<Ri(t)&&--u);return i},Ji=g,Ki=Ci,Qi=1e6,Xi=function(r,n){var e,t,u,i,f;f={},arguments.length>1&&(f=n),e=f.tolerance||Ki,u=f.maxTerms||Qi,i=f.initialValue||0;do{i+=t=r()}while(Ji(e*i)<Ji(t)&&--u);return i},Zi=Di,$i=Xi,rf=gi=qi()?Zi:$i,nf=function(r,n){var e=1,t=r,u=n;return function(){var r=e;return e*=u/(t+=1),r}},ef=function(r,n,e){var t;return e=e||0,t=nf(r,n),rf(t,{initialValue:e})},tf=h,uf=jr,ff=Fr,of=w,cf=d,af=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},lf=.6931471803691238,vf=1.9082149292705877e-10,yf=function(r){var n,e,t,u,i,f,o,c,a,l;if(r<-1||tf(r))return NaN;if(-1===r)return cf;if(r===of)return r;if(0===r)return r;if(l=1,(t=r<0?-r:r)<.41421356237309503){if(t<1.862645149230957e-9)return t<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,e=1)}return 0!==l&&(t<9007199254740992?(i=(l=((e=uf(a=1+r))>>20)-1023)>0?1-(a-r):r-(a-1),i/=a):(l=((e=uf(a=r))>>20)-1023,i=0),(e&=1048575)<434334?a=ff(a,1072693248|e):(l+=1,a=ff(a,1071644672|e),e=1048576-e>>2),u=a-1),n=.5*u*u,0===e?0===u?l*lf+(i+=l*vf):l*lf-((c=n*(1-.6666666666666666*u))-(l*vf+i)-u):(c=(o=(f=u/(2+u))*f)*af(o),0===l?u-(n-f*(n+c)):l*lf-(n-(f*(n+c)+(l*vf+i))-u))},sf=w,pf=function(r){return 0===r&&1/r===sf},Nf=h,bf=d,hf=w,wf=function(r,n){var e,t,u,i;if(2===(e=arguments.length))return Nf(r)||Nf(n)?NaN:r===hf||n===hf?hf:r===n&&0===r?pf(r)?r:n:r>n?r:n;for(t=bf,i=0;i<e;i++){if(Nf(u=arguments[i])||u===hf)return u;(u>t||u===t&&0===u&&pf(u))&&(t=u)}return t},df=vt,mf=h,Af=d,_f=w,gf=function(r,n){var e,t,u,i;if(2===(e=arguments.length))return mf(r)||mf(n)?NaN:r===Af||n===Af?Af:r===n&&0===r?df(r)?r:n:r<n?r:n;for(t=_f,i=0;i<e;i++){if(mf(u=arguments[i])||u===Af)return u;(u<t||u===t&&0===u&&df(u))&&(t=u)}return t},Uf=function(r){var n,e;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),e=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),e=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/e)},xf=ot,jf=Ru,If=yf,kf=Nt,Of=g,Sf=ku,Tf=wu,Ff=wf,Ef=gf,Hf=qr,Vf=zu,Gf=si,Pf=10.900511,Lf=function(r,n){var e,t,u,i,f,o,c;return c=(n-r-Pf+.5)/(u=r+Pf-.5),r<1?n<=Gf?Sf(r*Hf(n)-n-xf(r)):Tf(n,r)*Sf(-n)/jf(r):(Of(c*c*r)<=100&&r>150?(e=r*(If(c)-c)+n*(.5-Pf)/u,e=Sf(e)):(i=r*Hf(n/u),Ef(i,f=r-n)<=Gf||Ff(i,f)>=Vf?(t=f/r,Ef(i,f)/2>Gf&&Ff(i,f)/2<Vf?e=(o=Tf(n/u,r/2)*Sf(f/2))*o:Ef(i,f)/4>Gf&&Ff(i,f)/4<Vf&&n>r?(e=(o=Tf(n/u,r/4)*Sf(f/4))*o,e*=e):e=t>Gf&&t<Vf?Tf(n*Sf(t)/u,r):Sf(i+f)):e=Tf(n/u,r)*Sf(f)),e*=kf(u/2.718281828459045)/Uf(r))},Mf=h,Wf=jr,Yf=Fr,qf=w,Cf=d,Rf=function(r){return 0===r?-.03333333333333313:r*(.0015873015872548146+r*(r*(4008217827329362e-21+-2.0109921818362437e-7*r)-793650757867488e-19))-.03333333333333313},zf=.6931471803691238,Bf=1.9082149292705877e-10,Df=1.4426950408889634,Jf=function(r){var n,e,t,u,i,f,o,c,a,l,v,y;if(r===qf||Mf(r))return r;if(r===Cf)return-1;if(0===r)return r;if(r<0?(e=!0,o=-r):(e=!1,o=r),o>=38.816242111356935){if(e)return-1;if(o>=709.782712893384)return qf}if(i=0|Wf(o),o>.34657359027997264)o<1.0397207708399179?e?(t=r+zf,u=-Bf,y=-1):(t=r-zf,u=Bf,y=1):(y=e?Df*r-.5:Df*r+.5,t=r-(l=y|=0)*zf,u=l*Bf),a=t-(r=t-u)-u;else{if(i<1016070144)return r;y=0}return v=(c=r*(n=.5*r))*(((f=1+c*Rf(c))-(l=3-f*n))/(6-r*l)),0===y?r-(r*v-c):(v=r*(v-a)-a,v-=c,-1===y?.5*(r-v)-.5:1===y?r<-.25?-2*(v-(r+.5)):1+2*(r-v):y<=-2||y>56?(t=Wf(o=1-(v-r))+(y<<20)|0,(o=Yf(o,t))-1):(l=1,y<20?o=(l=Yf(l,t=1072693248-(2097152>>y)|0))-(v-r):(o=r-(v+(l=Yf(l,t=1023-y<<20|0))),o+=1),t=Wf(o)+(y<<20)|0,Yf(o,t)))},Kf=h,Qf=g,Xf=Jf,Zf=qr,$f=wu,ro=Br,no=qr,eo=function(r){var n,e;return 0===r?-.01803556856784494:((r<0?-r:r)<=1?(n=r*(.02512664961998968+r*(.049410315156753225+r*(.0172491608709614+r*(r*(r*(0*r-3245886498259485e-20)-.0005410098692152044)-.0002594535632054381))))-.01803556856784494,e=1+r*(1.962029871977952+r*(1.4801966942423133+r*(.5413914320717209+r*(.09885042511280101+r*(.008213096746488934+r*(.00022493629192211576+-2.2335276320861708e-7*r))))))):(n=0+(r=1/r)*(r*(r*(r*(.0172491608709614+r*(.049410315156753225+r*(.02512664961998968+-.01803556856784494*r)))-.0002594535632054381)-.0005410098692152044)-3245886498259485e-20),e=r*(.00022493629192211576+r*(.008213096746488934+r*(.09885042511280101+r*(.5413914320717209+r*(1.4801966942423133+r*(1.962029871977952+1*r))))))-2.2335276320861708e-7),n/e)},to=function(r){var n,e;return 0===r?.04906224540690395:((r<0?-r:r)<=1?(n=.04906224540690395+r*(r*(r*(r*(r*(-.0010034668769627955*r-.024014982064857155)-.1584135863906922)-.4065671242119384)-.4149833583594954)-.09691175301595212),e=1+r*(3.0234982984646304+r*(3.4873958536072385+r*(1.9141558827442668+r*(.5071377386143635+r*(.05770397226904519+.001957681026011072*r)))))):(n=(r=1/r)*(r*(r*(r*(r*(.04906224540690395*r-.09691175301595212)-.4149833583594954)-.4065671242119384)-.1584135863906922)-.024014982064857155)-.0010034668769627955,e=.001957681026011072+r*(.05770397226904519+r*(.5071377386143635+r*(1.9141558827442668+r*(3.4873958536072385+r*(3.0234982984646304+1*r)))))),n/e)},uo=function(r){var n,e;return 0===r?-.029232972183027003:((r<0?-r:r)<=1?(n=r*(.14421626775719232+r*(r*(.05428096940550536+r*(r*(.0004311713426792973+0*r)-.008505359768683364))-.14244039073863127))-.029232972183027003,e=1+r*(r*(.846973248876495+r*(r*(.02558279715597587+r*(-8.271935218912905e-7*r-.0010066679553914337))-.22009515181499575))-1.5016935605448505)):(n=0+(r=1/r)*(.0004311713426792973+r*(r*(.05428096940550536+r*(r*(.14421626775719232+-.029232972183027003*r)-.14244039073863127))-.008505359768683364)),e=r*(r*(.02558279715597587+r*(r*(.846973248876495+r*(1*r-1.5016935605448505))-.22009515181499575))-.0010066679553914337)-8.271935218912905e-7),n/e)},io=Ru,fo=Jf,oo=yf,co=h,ao=function(r,n,e){var t,u,i;if(r<2220446049250313e-31)return-no(r);if(0===n||0===e)return 0;if(u=0,r>2){if(r>=3){do{e-=1,u+=no(r-=1)}while(r>=3);e=r-2}return u+=.15896368026733398*(i=e*(r+1))+i*eo(e)}return r<1&&(u+=-no(r),e=n,n=r,r+=1),u+=r<=1.5?.5281534194946289*(t=n*e)+t*(i=to(n)):.45201730728149414*(i=e*n)+i*uo(-e)},lo=function(r,n){var e;if(Kf(r)||Kf(n))return NaN;if(0===n)return 0;if(0===r)return-1;if(r<0&&n%2==0&&(r=-r),r>0){if((Qf(n*(r-1))<.5||Qf(n)<.2)&&(e=Zf(r)*n)<.5)return Xf(e)}else if(ro(n)!==n)return NaN;return $f(r,n)-1},vo=gi,yo=function(r){return co(r)?NaN:r<0?r<-.5?io(1+r)-1:fo(-oo(r)+ao(r+2,r+1,r)):r<2?fo(ao(r+1,r,r-1)):io(1+r)-1},so=function(r,n){var e,t,u,i;return e=-n,n=-n,t=r+1,u=1,function(){return i=e/t,e*=n,e/=u+=1,t+=1,i}},po=function(r,n,e){var t,u,i,f;return u=((t=yo(r))+1)/r,t-=i=lo(n,r),t/=r,f=so(r,n),t=-(i+=1)*vo(f,{initialValue:((e?u:0)-t)/i}),e&&(t=-t),[t,u]},No=11754943508222875e-54,bo=g,ho=No,wo=Ci,mo=1e6;function Ao(r,n,e){var t,u,i,f,o,c,a;if(f=(a=(t="function"==typeof r.next)?r.next().value:r())[1],i=a[0],0===f&&(f=ho),o=f,c=0,!0===t)do{(a=r.next().value)&&(0===(c=a[1]+a[0]*c)&&(c=ho),0===(o=a[1]+a[0]/o)&&(o=ho),f*=u=o*(c=1/c))}while(bo(u-1)>n&&--e);else do{(a=r())&&(0===(c=a[1]+a[0]*c)&&(c=ho),0===(o=a[1]+a[0]/o)&&(o=ho),f*=u=o*(c=1/c))}while(a&&bo(u-1)>n&&--e);return i/f}function _o(r,n,e){var t,u,i,f,o,c;if(0===(i=(c=(t="function"==typeof r.next)?r.next().value:r())[1])&&(i=ho),f=i,o=0,!0===t)do{(c=r.next().value)&&(0===(o=c[1]+c[0]*o)&&(o=ho),0===(f=c[1]+c[0]/f)&&(f=ho),i*=u=f*(o=1/o))}while(c&&bo(u-1)>n&&--e);else do{(c=r())&&(0===(o=c[1]+c[0]*o)&&(o=ho),0===(f=c[1]+c[0]/f)&&(f=ho),i*=u=f*(o=1/o))}while(c&&bo(u-1)>n&&--e);return i}var go=function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),e=t.maxIter||mo,u=t.tolerance||wo,t.keep?_o(r,u,e):Ao(r,u,e)},Uo=g,xo=Ci,jo=No,Io=1e6;function ko(r,n,e){var t,u,i,f,o,c;o=(c=r())[1],u=c[0],0===o&&(o=jo),i=o,f=0;do{(c=r())&&(0===(f=c[1]+c[0]*f)&&(f=jo),0===(i=c[1]+c[0]/i)&&(i=jo),o*=t=i*(f=1/f))}while(c&&Uo(t-1)>n&&--e);return u/o}function Oo(r,n,e){var t,u,i,f,o;0===(f=(o=r())[1])&&(f=jo),u=f,i=0;do{(o=r())&&(0===(i=o[1]+o[0]*i)&&(i=jo),0===(u=o[1]+o[0]/u)&&(u=jo),f*=t=u*(i=1/i))}while(o&&Uo(t-1)>n&&--e);return f}var So=function(r,n){var e,t,u;return t={},arguments.length>1&&(t=n),u=t.tolerance||xo,e=t.maxIter||Io,t.keep?Oo(r,u,e):ko(r,u,e)},To=go,Fo=So,Eo=qi()?To:Fo,Ho=function(r,n){var e=n-r+1,t=r,u=0;return function(){return[(u+=1)*(t-u),e+=2]}},Vo=ot,Go=p,Po=Ru,Lo=g,Mo=ku,Wo=wu,Yo=qr,qo=17976931348623157e292,Co=zu,Ro=w,zo=Du,Bo=yi,Do=di,Jo=Mi,Ko=ef,Qo=Lf,Xo=po,Zo=function(r,n){var e=Ho(r,n);return 1/(n-r+1+Eo(e))},$o=function r(n,e,t,u){var i,f,o,c,a,l,v,y,s,p,N,b,h;if(n<0||e<=0)return NaN;if(f=void 0===t||t,v=u,y=0,e>=170&&!f)return v&&4*e<n?(y=e*Yo(n)-n,y+=Yo(Zo(e,n))):!v&&e>4*n?(y=e*Yo(n)-n,y+=Yo(Ko(e,n,c=0)/e)):0===(y=r(e,n,!0,v))?v?(y=Yo(y=1+1/(12*e)+1/(288*e*e))-e+(e-.5)*Yo(e),y+=Yo(2.5066282746310007)):(y=e*Yo(n)-n,y+=Yo(Ko(e,n,c=0)/e)):y=Yo(y)+Vo(e),y>Co?Ro:Mo(y);switch(e<30&&e<=n+1&&n<Co?a=!(s=(b=Go(e))===e)&&.5===Lo(b-e):s=a=!1,s&&n>.6?(v=!v,o=0):a&&n>.2?(v=!v,o=1):n<1.4901161193847656e-8&&e>1?o=6:n<.5?o=-.4/Yo(n)<e?2:3:n<1.1?o=.75*n<e?2:3:(l=!1,f&&e>20&&(p=Lo((n-e)/e),e>200?20/e>p*p&&(l=!0):p<.4&&(l=!0)),l?o=5:n-1/(3*n)<e?o=2:(o=4,v=!v)),o){case 0:y=zo(e,n),!1===f&&(y*=Po(e));break;case 1:y=Bo(e,n),!1===f&&(y*=Po(e));break;case 2:0!==(y=f?Qo(e,n):Do(e,n))&&(c=0,i=!1,v&&(c=f?1:Po(e),f||y>=1||qo*y>c?(c/=y,f||e<1||qo/e>c?(c*=-e,i=!0):c=0):c=0)),y*=Ko(e,n,c)/e,i&&(v=!1,y=-y);break;case 3:y=(N=Xo(e,n,v=!v))[0],h=N[1],v=!1,f&&(y/=h);break;case 4:0!==(y=f?Qo(e,n):Do(e,n))&&(y*=Zo(e,n));break;case 5:y=Jo(e,n),n>=e&&(v=!v);break;case 6:y=f?Wo(n,e)/Po(e+1):Wo(n,e)/e,y*=1-e*n/(e+1)}return f&&y>1&&(y=1),v&&(y=(f?1:Po(e))-y),y},rc=$o,nc=rc,ec=h,tc=w,uc=function(r,n,e){return ec(r)||ec(n)||ec(e)||n<0||e<=0?NaN:0===n?r<0?0:1:r<=0?0:r===tc?1:nc(r*e,n)},ic=function(r){return function(){return r}},fc=h,oc=ic,cc=h,ac=function(r,n){return fc(r)||fc(n)?NaN:r<n?0:1};s(ac,"factory",(function(r){return cc(r)?oc(NaN):function(n){return cc(n)?NaN:n<r?0:1}}));var lc=ic,vc=ac.factory,yc=rc,sc=h,pc=w,Nc=uc;s(Nc,"factory",(function(r,n){return sc(r)||sc(n)||r<0||n<=0?lc(NaN):0===r?vc(0):function(e){return e<=0?0:e===pc?1:yc(e*n,r)}}));var bc=Nc;function hc(r,n,e){return b(n)?bc(r,n,e):NaN}return s(hc,"factory",(function(r,n){return b(r)?bc.factory(r,n):ic(NaN)})),hc},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).cdf=n();
//# sourceMappingURL=index.js.map
