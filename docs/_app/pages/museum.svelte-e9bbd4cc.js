import{S as Q,i as W,s as $,k as L,e as P,t as v,U as ee,d,m as M,c as j,a as q,h as w,b as E,g as O,J as p,o as Y,p as R,q as N,L as z,v as te,n as C,X as F,j as A,Y as le,Z as J,_ as se,K as B,$ as K}from"../chunks/vendor-e23481e1.js";import{b as T}from"../chunks/paths-4b3c6e7e.js";import{c as S,d as ae,a as re}from"../chunks/eth-d54c303d.js";function X(u,s,e){const n=u.slice();return n[4]=s[e],n}function ne(u){let s,e,n,i=u[1],a=[];for(let t=0;t<i.length;t+=1)a[t]=Z(X(u,i,t));const r=t=>Y(a[t],1,1,()=>{a[t]=null});return{c(){s=P("div"),e=P("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){s=j(t,"DIV",{class:!0});var o=q(s);e=j(o,"DIV",{class:!0});var l=q(e);for(let c=0;c<a.length;c+=1)a[c].l(l);l.forEach(d),o.forEach(d),this.h()},h(){E(e,"class","flex w-full"),E(s,"class","flex w-full")},m(t,o){O(t,s,o),p(s,e);for(let l=0;l<a.length;l+=1)a[l].m(e,null);n=!0},p(t,o){if(o&6){i=t[1];let l;for(l=0;l<i.length;l+=1){const c=X(t,i,l);a[l]?(a[l].p(c,o),N(a[l],1)):(a[l]=Z(c),a[l].c(),N(a[l],1),a[l].m(e,null))}for(C(),l=i.length;l<a.length;l+=1)r(l);R()}},i(t){if(!n){for(let o=0;o<i.length;o+=1)N(a[o]);n=!0}},o(t){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)Y(a[o]);n=!1},d(t){t&&d(s),se(a,t)}}}function oe(u){let s;return{c(){s=v("Loading art... plase wait")},l(e){s=w(e,"Loading art... plase wait")},m(e,n){O(e,s,n)},p:B,i:B,o:B,d(e){e&&d(s)}}}function ie(u){let s=u[4].owner.slice(0,4)+"",e,n,i=u[4].owner.slice(-4)+"",a;return{c(){e=v(s),n=v("..."),a=v(i)},l(r){e=w(r,s),n=w(r,"..."),a=w(r,i)},m(r,t){O(r,e,t),O(r,n,t),O(r,a,t)},p(r,t){t&2&&s!==(s=r[4].owner.slice(0,4)+"")&&A(e,s),t&2&&i!==(i=r[4].owner.slice(-4)+"")&&A(a,i)},d(r){r&&d(e),r&&d(n),r&&d(a)}}}function ce(u){let s;return{c(){s=v("YOU")},l(e){s=w(e,"YOU")},m(e,n){O(e,s,n)},p:B,d(e){e&&d(s)}}}function Z(u){let s,e,n,i=u[4].tokenId+"",a,r,t,o,l,c,k,D,b=u[4].tokenId+"",x,f,g,_,y;function V(m,h){return m[4].owner==m[2]?ce:ie}let U=V(u),I=U(u);return{c(){s=P("div"),e=P("h1"),n=v("Perpetual #"),a=v(i),r=L(),t=P("img"),c=L(),k=P("h2"),D=v("#"),x=v(b),f=v(`
							lend by 
							`),I.c(),g=L(),this.h()},l(m){s=j(m,"DIV",{class:!0});var h=q(s);e=j(h,"H1",{class:!0});var G=q(e);n=w(G,"Perpetual #"),a=w(G,i),G.forEach(d),r=M(h),t=j(h,"IMG",{src:!0,class:!0,alt:!0}),c=M(h),k=j(h,"H2",{class:!0});var H=q(k);D=w(H,"#"),x=w(H,b),f=w(H,`
							lend by 
							`),I.l(H),H.forEach(d),g=M(h),h.forEach(d),this.h()},h(){E(e,"class","pb-4 italic text-2xl font-semibold text-gray-700 capitalize"),F(t.src,o=""+(T+"/tokens/"+u[4].tokenId+".jpeg"))||E(t,"src",o),E(t,"class","rounded"),E(t,"alt",l="Perpetual #"+u[4].tokenId),E(k,"class","text-xl py-2 px-4 mt-2"),E(s,"class","w-1/3 p-10 text-center")},m(m,h){O(m,s,h),p(s,e),p(e,n),p(e,a),p(s,r),p(s,t),p(s,c),p(s,k),p(k,D),p(k,x),p(k,f),I.m(k,null),p(s,g),y=!0},p(m,h){(!y||h&2)&&i!==(i=m[4].tokenId+"")&&A(a,i),(!y||h&2&&!F(t.src,o=""+(T+"/tokens/"+m[4].tokenId+".jpeg")))&&E(t,"src",o),(!y||h&2&&l!==(l="Perpetual #"+m[4].tokenId))&&E(t,"alt",l),(!y||h&2)&&b!==(b=m[4].tokenId+"")&&A(x,b),U===(U=V(m))&&I?I.p(m,h):(I.d(1),I=U(m),I&&(I.c(),I.m(k,null)))},i(m){y||(m&&le(()=>{_||(_=J(s,K,{},!0)),_.run(1)}),y=!0)},o(m){m&&(_||(_=J(s,K,{},!1)),_.run(0)),y=!1},d(m){m&&d(s),I.d(),m&&_&&_.end()}}}function ue(u){let s,e,n,i,a,r,t,o,l,c,k;const D=[oe,ne],b=[];function x(f,g){return f[0]?0:1}return l=x(u),c=b[l]=D[l](u),{c(){s=L(),e=P("div"),n=P("h1"),i=v("Art showing in museum"),a=L(),r=P("p"),t=v("lorem ipsum factum, lorem ipsum factum lorem ipsum factum, lorem ipsum factum"),o=L(),c.c(),this.h()},l(f){ee('[data-svelte="svelte-17t9318"]',document.head).forEach(d),s=M(f),e=j(f,"DIV",{class:!0});var _=q(e);n=j(_,"H1",{});var y=q(n);i=w(y,"Art showing in museum"),y.forEach(d),a=M(_),r=j(_,"P",{});var V=q(r);t=w(V,"lorem ipsum factum, lorem ipsum factum lorem ipsum factum, lorem ipsum factum"),V.forEach(d),o=M(_),c.l(_),_.forEach(d),this.h()},h(){document.title="Museum",E(e,"class","container px-6 py-16 mx-auto text-center")},m(f,g){O(f,s,g),O(f,e,g),p(e,n),p(n,i),p(e,a),p(e,r),p(r,t),p(e,o),b[l].m(e,null),k=!0},p(f,[g]){let _=l;l=x(f),l===_?b[l].p(f,g):(C(),Y(b[_],1,1,()=>{b[_]=null}),R(),c=b[l],c?c.p(f,g):(c=b[l]=D[l](f),c.c()),N(c,1),c.m(e,null))},i(f){k||(N(c),k=!0)},o(f){Y(c),k=!1},d(f){f&&d(s),f&&d(e),b[l].d()}}}function fe(u,s,e){let n,i;z(u,ae,t=>e(3,n=t)),z(u,re,t=>e(2,i=t));let a=!0,r=[];return te(async()=>{await n;const t=await S.perpetual.balanceOf(S.museum.address),o=[];for(let l=0;l<t;l++)o.push(S.perpetual.tokenOfOwnerByIndex(S.museum.address,String(l)));e(1,r=await Promise.all(o)),e(1,r=r.map(l=>l.toNumber())),e(1,r=await Promise.all(r.map(async l=>{const c=await S.museum.collateralNFTOwner(l);return{tokenId:l,owner:c}}))),e(0,a=!1)}),[a,r,i]}class pe extends Q{constructor(s){super();W(this,s,fe,ue,$,{})}}export{pe as default};
