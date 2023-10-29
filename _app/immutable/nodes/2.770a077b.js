import{s as Ye,n as te,f as $e}from"../chunks/scheduler.63274e7e.js";import{S as Fe,i as Ze,g as m,s as q,m as Ie,h as p,j as T,c as I,n as De,f as E,k as c,a as be,x as r,o as He,y as F,d as j,b as ae,t as B,z as oe,r as ie,u as ce,v as fe,w as ue,p as re}from"../chunks/index.22826ed8.js";function G(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function Me(o){let t,s;return{c(){t=m("img"),this.h()},l(l){t=p(l,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){c(t,"alt",""),$e(t.src,s="images/"+o[0].image)||c(t,"src",s),c(t,"class","svelte-ngnsny")},m(l,i){be(l,t,i)},p(l,i){i&1&&!$e(t.src,s="images/"+l[0].image)&&c(t,"src",s)},d(l){l&&E(t)}}}function Te(o){let t,s;return{c(){t=m("video"),this.h()},l(l){t=p(l,"VIDEO",{src:!0,class:!0}),T(t).forEach(E),this.h()},h(){t.autoplay=!0,t.muted=!0,t.loop=!0,$e(t.src,s="videos/"+o[0].video)||c(t,"src",s),c(t,"class","svelte-ngnsny")},m(l,i){be(l,t,i)},p(l,i){i&1&&!$e(t.src,s="videos/"+l[0].video)&&c(t,"src",s)},d(l){l&&E(t)}}}function Xe(o){let t,s,l,i,D,A=o[0].title+"",S,P,L,f=o[0].publication+"",y,le,z,H=o[0].date+"",V,M,u=o[0].image&&o[0].image!==""&&Me(o),w=o[0].video&&Te(o);return{c(){t=m("div"),s=m("a"),u&&u.c(),l=q(),w&&w.c(),i=q(),D=m("h4"),S=Ie(A),P=q(),L=m("div"),y=Ie(f),le=q(),z=m("div"),V=Ie(H),this.h()},l($){t=p($,"DIV",{class:!0});var x=T(t);s=p(x,"A",{href:!0,class:!0});var C=T(s);u&&u.l(C),l=I(C),w&&w.l(C),i=I(C),D=p(C,"H4",{class:!0});var O=T(D);S=De(O,A),O.forEach(E),P=I(C),L=p(C,"DIV",{class:!0});var se=T(L);y=De(se,f),se.forEach(E),le=I(C),z=p(C,"DIV",{class:!0});var ne=T(z);V=De(ne,H),ne.forEach(E),C.forEach(E),x.forEach(E),this.h()},h(){c(D,"class","svelte-ngnsny"),c(L,"class","publication svelte-ngnsny"),c(z,"class","date svelte-ngnsny"),c(s,"href",M=o[0].link),c(s,"class","svelte-ngnsny"),c(t,"class","project svelte-ngnsny")},m($,x){be($,t,x),r(t,s),u&&u.m(s,null),r(s,l),w&&w.m(s,null),r(s,i),r(s,D),r(D,S),r(s,P),r(s,L),r(L,y),r(s,le),r(s,z),r(z,V)},p($,[x]){$[0].image&&$[0].image!==""?u?u.p($,x):(u=Me($),u.c(),u.m(s,l)):u&&(u.d(1),u=null),$[0].video?w?w.p($,x):(w=Te($),w.c(),w.m(s,i)):w&&(w.d(1),w=null),x&1&&A!==(A=$[0].title+"")&&He(S,A),x&1&&f!==(f=$[0].publication+"")&&He(y,f),x&1&&H!==(H=$[0].date+"")&&He(V,H),x&1&&M!==(M=$[0].link)&&c(s,"href",M)},i:te,o:te,d($){$&&E(t),u&&u.d(),w&&w.d()}}}function et(o,t,s){let{project:l}=t;return o.$$set=i=>{"project"in i&&s(0,l=i.project)},[l]}class he extends Fe{constructor(t){super(),Ze(this,t,et,Xe,Ye,{project:0})}}function Pe(o,t,s){const l=o.slice();return l[7]=t[s],l}function ye(o,t,s){const l=o.slice();return l[7]=t[s],l}function Le(o,t,s){const l=o.slice();return l[7]=t[s],l}function Ae(o,t,s){const l=o.slice();return l[7]=t[s],l}function Se(o,t,s){const l=o.slice();return l[7]=t[s],l}function ze(o){let t,s;return t=new he({props:{project:o[7]}}),{c(){ie(t.$$.fragment)},l(l){ce(t.$$.fragment,l)},m(l,i){fe(t,l,i),s=!0},p:te,i(l){s||(j(t.$$.fragment,l),s=!0)},o(l){B(t.$$.fragment,l),s=!1},d(l){ue(t,l)}}}function Oe(o){let t,s;return t=new he({props:{project:o[7]}}),{c(){ie(t.$$.fragment)},l(l){ce(t.$$.fragment,l)},m(l,i){fe(t,l,i),s=!0},p:te,i(l){s||(j(t.$$.fragment,l),s=!0)},o(l){B(t.$$.fragment,l),s=!1},d(l){ue(t,l)}}}function Ge(o){let t,s;return t=new he({props:{project:o[7]}}),{c(){ie(t.$$.fragment)},l(l){ce(t.$$.fragment,l)},m(l,i){fe(t,l,i),s=!0},p:te,i(l){s||(j(t.$$.fragment,l),s=!0)},o(l){B(t.$$.fragment,l),s=!1},d(l){ue(t,l)}}}function Ne(o){let t,s;return t=new he({props:{project:o[7]}}),{c(){ie(t.$$.fragment)},l(l){ce(t.$$.fragment,l)},m(l,i){fe(t,l,i),s=!0},p:te,i(l){s||(j(t.$$.fragment,l),s=!0)},o(l){B(t.$$.fragment,l),s=!1},d(l){ue(t,l)}}}function We(o){let t,s;return t=new he({props:{project:o[7]}}),{c(){ie(t.$$.fragment)},l(l){ce(t.$$.fragment,l)},m(l,i){fe(t,l,i),s=!0},p:te,i(l){s||(j(t.$$.fragment,l),s=!0)},o(l){B(t.$$.fragment,l),s=!1},d(l){ue(t,l)}}}function tt(o){let t,s,l="Christine Y. Zhang",i,D,A='I am an <a href="https://www.nytimes.com/by/christine-zhang">editing resident</a> on the New York Times graphics desk. Before that, I was a data and graphics journalist at the Financial Times, Baltimore Sun and Los Angeles Times, and a research analyst at the Brookings Institution.',S,P,L='<a href="czhang_resume_2023.pdf">My résumé</a>',f,y,le="Some of my work:",z,H,V,M,u,w="Data and graphics",$,x,C,O,se="Words",ne,Ce,N,Z,Ve="Editing",je,we,W,J,xe="Opinion",ke,Ee,Y,K,Be="Others",qe,_e,Q=G(o[0]),h=[];for(let n=0;n<Q.length;n+=1)h[n]=ze(Se(o,Q,n));const Je=n=>B(h[n],1,1,()=>{h[n]=null});let R=G(o[1]),_=[];for(let n=0;n<R.length;n+=1)_[n]=Oe(Ae(o,R,n));const Ke=n=>B(_[n],1,1,()=>{_[n]=null});let U=G(o[2]),g=[];for(let n=0;n<U.length;n+=1)g[n]=Ge(Le(o,U,n));const Qe=n=>B(g[n],1,1,()=>{g[n]=null});let X=G(o[3]),d=[];for(let n=0;n<X.length;n+=1)d[n]=Ne(ye(o,X,n));const Re=n=>B(d[n],1,1,()=>{d[n]=null});let ee=G(o[4]),v=[];for(let n=0;n<ee.length;n+=1)v[n]=We(Pe(o,ee,n));const Ue=n=>B(v[n],1,1,()=>{v[n]=null});return{c(){t=m("main"),s=m("h1"),s.textContent=l,i=q(),D=m("p"),D.innerHTML=A,S=q(),P=m("p"),P.innerHTML=L,f=q(),y=m("p"),y.textContent=le,z=q(),H=m("div"),V=m("div"),M=m("div"),u=m("h2"),u.textContent=w,$=q();for(let n=0;n<h.length;n+=1)h[n].c();x=q(),C=m("div"),O=m("h2"),O.textContent=se,ne=q();for(let n=0;n<_.length;n+=1)_[n].c();Ce=q(),N=m("div"),Z=m("h2"),Z.textContent=Ve,je=q();for(let n=0;n<g.length;n+=1)g[n].c();we=q(),W=m("div"),J=m("h2"),J.textContent=xe,ke=q();for(let n=0;n<d.length;n+=1)d[n].c();Ee=q(),Y=m("div"),K=m("h2"),K.textContent=Be,qe=q();for(let n=0;n<v.length;n+=1)v[n].c();this.h()},l(n){t=p(n,"MAIN",{class:!0});var a=T(t);s=p(a,"H1",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-d9gm3q"&&(s.textContent=l),i=I(a),D=p(a,"P",{class:!0,"data-svelte-h":!0}),F(D)!=="svelte-5dqx64"&&(D.innerHTML=A),S=I(a),P=p(a,"P",{class:!0,"data-svelte-h":!0}),F(P)!=="svelte-h8n6th"&&(P.innerHTML=L),f=I(a),y=p(a,"P",{class:!0,"data-svelte-h":!0}),F(y)!=="svelte-8gwh3s"&&(y.textContent=le),z=I(a),H=p(a,"DIV",{class:!0});var e=T(H);V=p(e,"DIV",{class:!0});var b=T(V);M=p(b,"DIV",{class:!0});var ge=T(M);u=p(ge,"H2",{class:!0,"data-svelte-h":!0}),F(u)!=="svelte-ydq13w"&&(u.textContent=w),$=I(ge);for(let k=0;k<h.length;k+=1)h[k].l(ge);ge.forEach(E),x=I(b),C=p(b,"DIV",{class:!0});var de=T(C);O=p(de,"H2",{class:!0,"data-svelte-h":!0}),F(O)!=="svelte-1qos2dx"&&(O.textContent=se),ne=I(de);for(let k=0;k<_.length;k+=1)_[k].l(de);de.forEach(E),Ce=I(b),N=p(b,"DIV",{class:!0});var ve=T(N);Z=p(ve,"H2",{class:!0,"data-svelte-h":!0}),F(Z)!=="svelte-1it62pe"&&(Z.textContent=Ve),je=I(ve);for(let k=0;k<g.length;k+=1)g[k].l(ve);ve.forEach(E),b.forEach(E),we=I(e),W=p(e,"DIV",{class:!0});var me=T(W);J=p(me,"H2",{class:!0,"data-svelte-h":!0}),F(J)!=="svelte-3k327o"&&(J.textContent=xe),ke=I(me);for(let k=0;k<d.length;k+=1)d[k].l(me);me.forEach(E),Ee=I(e),Y=p(e,"DIV",{class:!0});var pe=T(Y);K=p(pe,"H2",{class:!0,"data-svelte-h":!0}),F(K)!=="svelte-1et276p"&&(K.textContent=Be),qe=I(pe);for(let k=0;k<v.length;k+=1)v[k].l(pe);pe.forEach(E),e.forEach(E),a.forEach(E),this.h()},h(){c(s,"class","svelte-1uqbl05"),c(D,"class","svelte-1uqbl05"),c(P,"class","svelte-1uqbl05"),c(y,"class","svelte-1uqbl05"),c(u,"class","svelte-1uqbl05"),c(M,"class","subsection"),c(O,"class","svelte-1uqbl05"),c(C,"class","subsection"),c(Z,"class","svelte-1uqbl05"),c(N,"class","subsection"),c(V,"class","section news"),c(J,"class","svelte-1uqbl05"),c(W,"class","section opinion"),c(K,"class","svelte-1uqbl05"),c(Y,"class","section others"),c(H,"class","projects"),c(t,"class","svelte-1uqbl05")},m(n,a){be(n,t,a),r(t,s),r(t,i),r(t,D),r(t,S),r(t,P),r(t,f),r(t,y),r(t,z),r(t,H),r(H,V),r(V,M),r(M,u),r(M,$);for(let e=0;e<h.length;e+=1)h[e]&&h[e].m(M,null);r(V,x),r(V,C),r(C,O),r(C,ne);for(let e=0;e<_.length;e+=1)_[e]&&_[e].m(C,null);r(V,Ce),r(V,N),r(N,Z),r(N,je);for(let e=0;e<g.length;e+=1)g[e]&&g[e].m(N,null);r(H,we),r(H,W),r(W,J),r(W,ke);for(let e=0;e<d.length;e+=1)d[e]&&d[e].m(W,null);r(H,Ee),r(H,Y),r(Y,K),r(Y,qe);for(let e=0;e<v.length;e+=1)v[e]&&v[e].m(Y,null);_e=!0},p(n,[a]){if(a&1){Q=G(n[0]);let e;for(e=0;e<Q.length;e+=1){const b=Se(n,Q,e);h[e]?(h[e].p(b,a),j(h[e],1)):(h[e]=ze(b),h[e].c(),j(h[e],1),h[e].m(M,null))}for(re(),e=Q.length;e<h.length;e+=1)Je(e);ae()}if(a&2){R=G(n[1]);let e;for(e=0;e<R.length;e+=1){const b=Ae(n,R,e);_[e]?(_[e].p(b,a),j(_[e],1)):(_[e]=Oe(b),_[e].c(),j(_[e],1),_[e].m(C,null))}for(re(),e=R.length;e<_.length;e+=1)Ke(e);ae()}if(a&4){U=G(n[2]);let e;for(e=0;e<U.length;e+=1){const b=Le(n,U,e);g[e]?(g[e].p(b,a),j(g[e],1)):(g[e]=Ge(b),g[e].c(),j(g[e],1),g[e].m(N,null))}for(re(),e=U.length;e<g.length;e+=1)Qe(e);ae()}if(a&8){X=G(n[3]);let e;for(e=0;e<X.length;e+=1){const b=ye(n,X,e);d[e]?(d[e].p(b,a),j(d[e],1)):(d[e]=Ne(b),d[e].c(),j(d[e],1),d[e].m(W,null))}for(re(),e=X.length;e<d.length;e+=1)Re(e);ae()}if(a&16){ee=G(n[4]);let e;for(e=0;e<ee.length;e+=1){const b=Pe(n,ee,e);v[e]?(v[e].p(b,a),j(v[e],1)):(v[e]=We(b),v[e].c(),j(v[e],1),v[e].m(Y,null))}for(re(),e=ee.length;e<v.length;e+=1)Ue(e);ae()}},i(n){if(!_e){for(let a=0;a<Q.length;a+=1)j(h[a]);for(let a=0;a<R.length;a+=1)j(_[a]);for(let a=0;a<U.length;a+=1)j(g[a]);for(let a=0;a<X.length;a+=1)j(d[a]);for(let a=0;a<ee.length;a+=1)j(v[a]);_e=!0}},o(n){h=h.filter(Boolean);for(let a=0;a<h.length;a+=1)B(h[a]);_=_.filter(Boolean);for(let a=0;a<_.length;a+=1)B(_[a]);g=g.filter(Boolean);for(let a=0;a<g.length;a+=1)B(g[a]);d=d.filter(Boolean);for(let a=0;a<d.length;a+=1)B(d[a]);v=v.filter(Boolean);for(let a=0;a<v.length;a+=1)B(v[a]);_e=!1},d(n){n&&E(t),oe(h,n),oe(_,n),oe(g,n),oe(d,n),oe(v,n)}}}function lt(o,t,s){let{data:l}=t;const i=l.projects.filter(f=>f.section==="news"),D=i.filter(f=>f.subsection==="data and graphics"),A=i.filter(f=>f.subsection==="words"),S=i.filter(f=>f.subsection==="editing"),P=l.projects.filter(f=>f.section==="opinion"),L=l.projects.filter(f=>f.section==="other");return o.$$set=f=>{"data"in f&&s(5,l=f.data)},[D,A,S,P,L,l]}class at extends Fe{constructor(t){super(),Ze(this,t,lt,tt,Ye,{data:5})}}export{at as component};
