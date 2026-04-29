import{cC as ut,fv as xo,fw as bo,fx as Pe,e as So,fC as yo,fD as wo,fE as se,fy as Bt,iu as No,fz as Ke,F as tt,eY as $e,fH as Co,cO as vo,e3 as G,cS as de,fr as K,fF as ft,ft as oe,iv as jt,iw as St,fK as To,ix as It,dM as Mo,g9 as Ro,iy as ue,da as Fo,ga as Do,fN as Qt,cR as Xe,g6 as Ye,gH as lt,db as Ze,gx as Qe,dD as Je,dF as tn,dG as en,dH as nn,gP as sn,dL as on,gR as an,gS as rn,dS as cn,dY as ln,e5 as dn,e8 as un,fL as be,e9 as Vo,g8 as pn,eQ as Eo,e2 as Mt,fM as Jt,eg as Ao,df as mt,ds as wt,fR as Nt,dW as zt,iz as Oo,iA as Wo,iB as Po,iC as $o,iD as zo,cE as Ho,bB as Lo,E as Bo,es as fn,hP as pt,ex as hn,f_ as Go,f$ as qo,iE as _o,eB as jo,eC as Uo,fZ as Ko,iF as Xo,iG as Yo,iH as Zo,iI as Qo,iJ as Jo,iK as ta,iL as ea,iM as na,iN as ze,iO as sa,iP as oa,iQ as aa,eH as mn,eJ as gn,hj as In,iR as ra,eL as kn,iS as Xt,fJ as ia,dA as xn,dQ as ca,ef as la,ek as bn,ej as Sn,el as da,fO as ua,d7 as pa,fU as fa,cP as yn,cQ as wn,cU as ha,fV as ma,fS as Ht,fW as ga,cV as Ia,cW as ka,cX as Nn,cY as Cn,c_ as vn,cZ as Tn,c$ as Mn,d6 as xa,du as Se,fX as te,cF as ye,d4 as ba,fY as pe,d3 as Sa,d5 as ya,dI as wa,d8 as Na,g0 as Rn,g1 as Fn,g2 as Dn,g3 as Ca,g4 as va,g5 as Ta,g7 as Ma,dc as Vn,dd as Ra,gc as Fa,de as Da,gd as Va,gb as Ie,dg as Ea,ge as we,gf as Ut,gg as Aa,dk as Oa,dm as Wa,gh as Ne,dl as Pa,gi as $a,dp as En,dq as An,gj as za,gk as Ha,iT as La,dK as On,dr as Ba,gl as Ga,gm as qa,dt as _a,gn as ja,go as Ua,gp as Ka,dx as Xa,gq as Ce,dy as He,t as Lt,iU as Wn,dz as Le,hC as Ya,eM as Za,gr as Qa,gs as Ja,gt as tr,gu as er,gv as nr,gw as sr,dB as or,dC as Pn,gD as ar,gC as rr,gB as ir,gA as cr,gz as lr,gy as dr,dE as ur,eh as $n,iV as zn,iW as pr,iX as fr,iY as hr,iZ as mr,i_ as gr,i$ as Ir,gE as kr,gF as xr,gG as br,gI as Sr,gK as yr,gL as wr,gM as Nr,gN as Cr,dJ as vr,gO as Tr,gQ as Mr,dN as Hn,dO as Ln,dP as Bn,gT as Rr,dR as Gn,gU as qn,gV as _n,gW as jn,dV as Fr,dU as Dr,dX as Vr,e0 as Er,d_ as Ar,dZ as Or,d$ as Wr,gX as Pr,e1 as $r,e4 as zr,e6 as Hr,e7 as Un,eD as Lr,gY as Br,fj as Gr,gZ as qr,g_ as _r,g$ as jr,h0 as Ur,h1 as Kr,h2 as Xr,ea as Yr,eT as Zr,eb as Qr,ec as Jr,h3 as ti,ed as ei,ee as Kn,h4 as ni,h5 as si,h6 as oi,h7 as ai,ei as Xn,em as ri,en as ii,eo as ci,ep as li,eq as di,h8 as ui,h9 as pi,er as Yn,ha as fi,hb as ve,hc as hi,et as mi,eu as Zn,ew as gi,ev as Ii,ey as Qn,ez as Jn,eA as ts,eE as es,eF as ki,hd as xi,he as bi,hf as Si,hg as yi,hh as wi,eG as Ni,hi as Ci,eI as vi,eK as ns,hk as Ti,hl as Mi,hm as Ri,hn as Fi,ho as Di,hp as Vi,eN as ss,eO as os,hq as Ei,eP as Ai,hr as Oi,hs as Wi,j0 as Te,ht as Pi,eR as $i,eS as zi,hw as Hi}from"./index-Bu8nVTIZ.js";import"./index-DNMKKjB7.js";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function q(a,s){Array.isArray(a)||(a=[a]),a.forEach(t=>{t!=null&&ut(t.dtype!=="complex64",()=>`${s} does not support complex64 tensors in the CPU backend.`)})}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Li=Co;class fe extends xo{nextDataId(){return fe.nextDataId++}constructor(){super(),this.blockSize=48,this.firstUse=!0,this.data=new bo(this,Pe())}write(s,t,n){this.firstUse&&(this.firstUse=!1,So().get("IS_NODE")&&yo(`
============================
Hi, looks like you are running TensorFlow.js in Node.js. To speed things up dramatically, install our node backend, visit https://github.com/tensorflow/tfjs-node for more details. 
============================`));const e={id:this.nextDataId()};return this.data.set(e,{values:s,dtype:n,refCount:1}),e}makeTensorInfo(s,t,n){let e;if(t==="string"&&n!=null&&n.length>0&&wo(n[0])){const o=n.map(i=>se(i));e=this.write(o,s,t)}else e=this.write(n,s,t);return{dataId:e,shape:s,dtype:t}}refCount(s){return this.data.has(s)?this.data.get(s).refCount:0}incRef(s){const t=this.data.get(s);t.refCount++}decRef(s){if(this.data.has(s)){const t=this.data.get(s);t.refCount--}}move(s,t,n,e,o){this.data.set(s,{values:t,dtype:e,refCount:o})}numDataIds(){return this.data.numDataIds()}async read(s){return this.readSync(s)}readSync(s){const{dtype:t,complexTensorInfos:n}=this.data.get(s);if(t==="complex64"){const e=this.readSync(n.real.dataId),o=this.readSync(n.imag.dataId);return Bt(e,o)}return No(this.data.get(s).values,t)}bufferSync(s){const t=this.readSync(s.dataId);if(s.dtype==="string")try{const n=t.map(e=>Ke(e));return tt(s.shape,s.dtype,n)}catch{throw new Error("Failed to decode encoded string bytes into utf-8")}return tt(s.shape,s.dtype,t)}makeOutput(s,t,n){return Pe().makeTensorFromTensorInfo(this.makeTensorInfo(t,n,s),this)}disposeData(s,t=!1){if(this.data.has(s)){if(this.data.get(s).refCount--,!t&&this.data.get(s).refCount>0)return!1;const{complexTensorInfos:n}=this.data.get(s);n!=null&&(this.disposeData(n.real.dataId,!0),this.disposeData(n.imag.dataId,!0)),this.data.delete(s)}return!0}disposeIntermediateTensorInfo(s){this.disposeData(s.dataId)}async time(s){const t=$e();return s(),{kernelMs:$e()-t}}memory(){return{unreliable:!0,reasons:["The reported memory is an upper bound. Due to automatic garbage collection, the true allocated memory may be less."]}}where(s){q([s],"where");const t=this.readSync(s.dataId);return Li(s.shape,t)}dispose(){}floatPrecision(){return 32}epsilon(){return super.epsilon()}}fe.nextDataId=0;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function as(a){const s=new Float32Array(a.length);for(let t=0;t<a.length;++t)s[t]=Math.abs(a[t]);return s}const Bi=a=>{const{x:s}=a.inputs,t=a.backend;q(s,"abs");let n=new Float32Array(G(s.shape));const e=t.data.get(s.dataId).values;return n=as(e),t.makeOutput(n,s.shape,s.dtype)},Gi={kernelName:vo,backendName:"cpu",kernelFunc:Bi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function it(a){return(s,t,n,e,o)=>{const i=de(s,t),c=i.length,r=K(i),l=G(i),d=ft(o,l),u=s.length,p=t.length,f=K(s),m=K(t),I=oe(s,i),h=oe(t,i);if(I.length+h.length===0)for(let g=0;g<d.length;++g)d[g]=a(n[g%n.length],e[g%e.length]);else for(let g=0;g<d.length;++g){const k=jt(g,c,r),b=k.slice(-u);I.forEach(w=>b[w]=0);const x=St(b,u,f),S=k.slice(-p);h.forEach(w=>S[w]=0);const y=St(S,p,m);d[g]=a(n[x],e[y])}return[d,i]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function gt(a){const{inputs:s,backend:t}=a,{real:n,imag:e}=s,o=t.data.get(n.dataId).values,i=t.data.get(e.dataId).values,c=t.makeTensorInfo(n.shape,"complex64"),r=t.data.get(c.dataId);return r.complexTensorInfos={real:t.makeTensorInfo(n.shape,"float32",o),imag:t.makeTensorInfo(e.shape,"float32",i)},c}const qi={kernelName:To,backendName:"cpu",kernelFunc:gt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ae(a,s,t="float32"){if(t==="complex64"){const e=ae(a,s,"float32"),o=ae(a,s,"float32");return gt({inputs:{real:e,imag:o},backend:a})}const n=It(G(s),t);return a.makeTensorInfo(s,t,n)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yt(a){const{inputs:s,backend:t}=a,{x:n}=s;return t.incRef(n.dataId),{dataId:n.dataId,shape:n.shape,dtype:n.dtype}}const _i={kernelName:Mo,backendName:"cpu",kernelFunc:yt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pt(a){const{inputs:s,backend:t}=a,{input:n}=s,e=t.data.get(n.dataId).complexTensorInfos.real,o=t.data.get(e.dataId).values;return t.makeTensorInfo(e.shape,e.dtype,o)}const ji={kernelName:Ro,backendName:"cpu",kernelFunc:Pt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rs(a,s,t,n){if(n==="int32"){const e=Int32Array.from(a);return[s,"int32",e]}if(n==="bool"){const e=ue([0],t),[o,i]=it((c,r)=>c!==r?1:0)(s,[],a,e,"bool");return[i,"bool",o]}throw new Error(`Error in Cast: failed to cast ${t} to ${n}`)}function Et(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{dtype:o}=n;if(o==="complex64"){if(e.dtype==="complex64")return yt({inputs:{x:e},backend:t});const d=ae(t,e.shape,e.dtype),u=Et({inputs:{x:e},backend:t,attrs:{dtype:"float32"}}),p=gt({inputs:{real:u,imag:d},backend:t});return t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(u),p}if(e.dtype==="complex64"){const d=Pt({inputs:{input:e},backend:t}),u=Et({inputs:{x:d},backend:t,attrs:{dtype:o}});return t.disposeIntermediateTensorInfo(d),u}if(!Do(e.dtype,o)){const d=yt({inputs:{x:e},backend:t});return{dataId:d.dataId,shape:d.shape,dtype:o}}const i=t.data.get(e.dataId).values,[c,r,l]=rs(i,e.shape,e.dtype,o);return t.makeTensorInfo(c,r,l)}const Ui={kernelName:Fo,backendName:"cpu",kernelFunc:Et};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ct(a,s,t,n){return t==null?({inputs:e,backend:o})=>{const{a:i,b:c}=e,r=o;q([i,c],a);const l=r.data.get(i.dataId).values,d=r.data.get(c.dataId).values,u=i.dtype==="string"?Qt(l):l,p=i.dtype==="string"?Qt(d):d,f=n||i.dtype,[m,I]=s(i.shape,c.shape,u,p,f);return r.makeTensorInfo(I,f,m)}:({inputs:e,backend:o})=>{const{a:i,b:c}=e,r=o;if(i.dtype==="complex64"||c.dtype==="complex64"){const l=Et({inputs:{x:i},backend:r,attrs:{dtype:"complex64"}}),d=r.data.get(l.dataId),u=d.complexTensorInfos.real,p=d.complexTensorInfos.imag,f=r.data.get(u.dataId).values,m=r.data.get(p.dataId).values,I=Et({inputs:{x:c},backend:r,attrs:{dtype:"complex64"}}),h=r.data.get(I.dataId),g=h.complexTensorInfos.real,k=h.complexTensorInfos.imag,b=r.data.get(g.dataId).values,x=r.data.get(k.dataId).values,[S,y,w]=t(i.shape,c.shape,f,m,b,x),N=r.makeTensorInfo(w,"float32",S),R=r.makeTensorInfo(w,"float32",y),F=gt({inputs:{real:N,imag:R},backend:r});return r.disposeIntermediateTensorInfo(l),r.disposeIntermediateTensorInfo(I),r.disposeIntermediateTensorInfo(N),r.disposeIntermediateTensorInfo(R),F}else{const l=r.data.get(i.dataId).values,d=r.data.get(c.dataId).values,u=n||i.dtype,[p,f]=s(i.shape,c.shape,l,d,u);return r.makeTensorInfo(f,u,p)}}}function Me(a){return(s,t,n,e,o,i)=>{const c=de(s,t),r=G(c),l=c.length,d=K(c),u=ft("float32",r),p=ft("float32",r),f=oe(s,c),m=oe(t,c),I=Bt(n,e),h=Bt(o,i),g=s.length,k=K(s),b=t.length,x=K(t);if(f.length+m.length===0)for(let S=0;S<u.length;S++){const y=S%I.length,w=S%h.length,N=a(I[y*2],I[y*2+1],h[w*2],h[w*2+1]);u[S]=N.real,p[S]=N.imag}else for(let S=0;S<u.length;S++){const y=jt(S,l,d),w=y.slice(-g);f.forEach(O=>w[O]=0);const N=St(w,g,k),R=y.slice(-b);m.forEach(O=>R[O]=0);const F=St(R,b,x),E=a(I[N*2],I[N*2+1],h[F*2],h[F*2+1]);u[S]=E.real,p[S]=E.imag}return[u,p,c]}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const is=it((a,s)=>a+s),Ki=Me((a,s,t,n)=>({real:a+t,imag:s+n})),Gt=ct(Xe,is,Ki),Xi={kernelName:Xe,backendName:"cpu",kernelFunc:Gt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Re(a,s,t,n,e){const o=G(n),i=It(e,t);for(let c=0;c<a.length;c++){const r=a[c];if(r<0)throw new Error("Input x must be non-negative!");r>=e||(o>0?i[r]+=s[c]:i[r]+=1)}return i}function cs(a,s,t,n=!1){const e=a.shape[0],o=a.shape[1],i=tt([e,t],s.dtype);for(let c=0;c<e;c++)for(let r=0;r<o;r++){const l=a.get(c,r);if(l<0)throw new Error("Input x must be non-negative!");l>=t||(n?i.set(1,c,l):s.size>0?i.set(i.get(c,l)+s.get(c,r),c,l):i.set(i.get(c,l)+1,c,l))}return i}/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ls=it((a,s)=>a&s),Yi=ct(Ye,ls),Zi={kernelName:Ye,backendName:"cpu",kernelFunc:Yi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ct(a){return(s,t,n)=>{const e=lt(t,s.length);for(let o=0;o<s.length;++o)e[o]=a(s[o],n);return e}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Q(a,s,t){const n=Ct(s);return At(a,n,t)}function At(a,s,t){return({inputs:n,attrs:e,backend:o})=>{const{x:i}=n;q(i,a);const c=o,r=c.data.get(i.dataId).values;let l;if(i.dtype==="string"){if(!Array.isArray(r))throw new Error("String tensor's value was not an instance of Array");l=Qt(r)}else l=r;const d=t||i.dtype,u=s(l,d,e);return c.makeTensorInfo(i.shape,d,u)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ds=Ct(a=>Math.ceil(a)),Qi=At(Ze,ds),Ji={kernelName:Ze,backendName:"cpu",kernelFunc:Qi};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function us(a,s,t,n){const e=lt(t,G(s));if(n&&t!=="string"){let o=0;a.forEach(i=>{const c=G(i.shape);e.set(i.vals,o),o+=c})}else{let o=0;a.forEach(i=>{const c=t==="string"?Qt(i.vals):i.vals;let r=0;for(let l=0;l<i.shape[0];++l){const d=l*s[1]+o;for(let u=0;u<i.shape[1];++u)e[d+u]=c[r++]}o+=i.shape[1]})}return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ps=it((a,s)=>a===s?1:0),fs=ct(Qe,ps,null,"bool"),tc={kernelName:Qe,backendName:"cpu",kernelFunc:fs};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hs=Ct(a=>Math.exp(a)),ms=At(Je,hs,"float32"),ec={kernelName:Je,backendName:"cpu",kernelFunc:ms};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gs=Ct(a=>Math.expm1(a)),nc=At(tn,gs),sc={kernelName:tn,backendName:"cpu",kernelFunc:nc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Is=Ct(a=>Math.floor(a)),oc=At(en,Is),ac={kernelName:en,backendName:"cpu",kernelFunc:oc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ks=it((a,s)=>Math.floor(a/s)),rc=ct(nn,ks,null,"int32"),ic={kernelName:nn,backendName:"cpu",kernelFunc:rc};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xs(a,s,t,n,e,o,i,c,r){const l=tt([n,o],t);for(let d=0;d<n;d++){const u=[];let p=0;for(let f=0;f<e;f++){const m=a[d*e+f];p+=m*i[f],u.push(m)}if(p<0||p>=r/o)throw new Error(`Invalid indices: ${u} does not index into ${c}`);for(let f=0;f<o;f++)l.values[d*o+f]=s.get(...s.indexToLoc(p*o+f))}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bs(a,s,t){const n=tt(t,a.dtype);for(let e=0;e<n.size;++e){const i=n.indexToLoc(e).slice(),c=i[0],r=i[2],l=s.locToIndex([c,r]);i[2]=s.values[l];const d=a.locToIndex(i);0<=d&&d<a.values.length&&(n.values[e]=a.values[d])}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ss=it((a,s)=>a>s?1:0),cc=ct(sn,Ss,null,"bool"),lc={kernelName:sn,backendName:"cpu",kernelFunc:cc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ys=it((a,s)=>a>=s?1:0),dc=ct(on,ys,null,"bool"),uc={kernelName:on,backendName:"cpu",kernelFunc:dc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ws=it((a,s)=>a<s?1:0),pc=ct(an,ws,null,"bool"),fc={kernelName:an,backendName:"cpu",kernelFunc:pc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ns=it((a,s)=>a<=s?1:0),hc=ct(rn,Ns,null,"bool"),mc={kernelName:rn,backendName:"cpu",kernelFunc:hc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cs(a,s,t){const n=(s-a)/(t-1),e=It(t,"float32");e[0]=a;for(let o=1;o<e.length;o++)e[o]=e[o-1]+n;return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const vs=Ct(a=>Math.log(a)),gc=At(cn,vs),Ic={kernelName:cn,backendName:"cpu",kernelFunc:gc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ts(a,s,t,n){const e=ft(n,G(t));for(let o=0;o<e.length;++o){const i=o*s;let c=a[i];for(let r=0;r<s;++r){const l=a[i+r];(Number.isNaN(l)||l>c)&&(c=l)}e[o]=c}return e}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ms=it((a,s)=>Math.max(a,s)),kc=ct(ln,Ms),xc={kernelName:ln,backendName:"cpu",kernelFunc:kc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rs=it((a,s)=>Math.min(a,s)),bc=ct(dn,Rs),Sc={kernelName:dn,backendName:"cpu",kernelFunc:bc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Fe=it((a,s)=>a*s),yc=Me((a,s,t,n)=>({real:a*t-s*n,imag:a*n+s*t})),he=ct(un,Fe,yc),wc={kernelName:un,backendName:"cpu",kernelFunc:he};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fs(a,s,t){const n=be(-1,t);return Fe([],s,n,a,t)}function Nc(a){const{inputs:s,backend:t}=a,{x:n}=s;q(n,"neg");const e=t.data.get(n.dataId).values,[o,i]=Fs(e,n.shape,n.dtype);return t.makeTensorInfo(i,n.dtype,o)}const Cc={kernelName:Vo,backendName:"cpu",kernelFunc:Nc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ds=it((a,s)=>a!==s?1:0),vc=ct(pn,Ds,null,"bool"),Tc={kernelName:pn,backendName:"cpu",kernelFunc:vc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function De(a,s,t,n,e){const o=s.length,i=G(s),c=K(s),r=K(e),l=ft(t,G(e));for(let d=0;d<i;++d){const u=jt(d,o,c),p=new Array(u.length);for(let m=0;m<p.length;m++)p[m]=u[n[m]];const f=St(p,o,r);l[f]=a[d]}return l}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ht(a){const{inputs:s,attrs:t,backend:n}=a,{x:e}=s,{perm:o}=t;q(e,"transpose");const i=e.shape.length,c=new Array(i);for(let u=0;u<c.length;u++)c[u]=e.shape[o[u]];const r=n.data.get(e.dataId).values,l=De(r,e.shape,e.dtype,o,c);return{dataId:n.write(l,c,e.dtype),shape:c,dtype:e.dtype}}const Mc={kernelName:Eo,backendName:"cpu",kernelFunc:ht};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vs(a,s,t,n){const[e,o]=Mt(a,n),i=Jt(s,"int32"),c=It(G(e),i),r=G(o);for(let l=0;l<c.length;++l){const d=l*r;let u=1;for(let p=0;p<r;++p)u*=t[d+p];c[l]=u}return{outVals:c,outShape:e,outDtype:i}}function Rc(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:i}=n;q(e,"prod");const c=e.shape.length,r=mt(o,e.shape),l=wt(r,c);let d=r,u=e;const p=[];l!=null&&(u=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),p.push(u),d=Nt(d.length,c));const f=t.data.get(u.dataId).values,{outVals:m,outShape:I,outDtype:h}=Vs(u.shape,u.dtype,f,d);let g=I;return i&&(g=zt(I,r)),p.forEach(k=>t.disposeIntermediateTensorInfo(k)),t.makeTensorInfo(g,h,m)}const Fc={kernelName:Ao,backendName:"cpu",kernelFunc:Rc};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dc(a,s,t){a.forEach((n,e)=>{if(n<0||n>=t){const o=jt(e,s.length,K(s)).join(",");throw new Error(`indices[${o}] = ${n} is not in [0, ${t})`)}})}function Vc(a,s){for(let t=0;t<a.length;++t){const n=a[t],e=t===a.length-1?s:a[t+1].length;if(n.length===0)throw new Error("Ragged splits may not be empty");if(n[0]<0)throw new Error("Ragged splits must be non-negative");if(n[n.length-1]>e)throw new Error("Ragged splits must not point past values");for(let o=1;o<n.length;++o)if(n[o-1]>n[o])throw new Error("Ragged splits must be sorted in ascending order")}}function Ec(a,s,t,n){const e=[];let o=0;const i=s.length-1+t.length,c=new Array(i).fill(null).map(()=>[0]);Vc(t,n);let r=1;for(let l=0;l<s.length-1;++l){r*=s[l];const d=s[l+1];for(let u=1;u<r+1;++u)c[l].push(u*d)}for(let l=0;l<a.length;++l){let d=a[l],u=a[l]+1;for(let p=0;p<t.length;++p){const f=t[p],m=p+s.length-1;if(m>=0){const I=c[m],h=I[I.length-1]-f[d];for(let g=d;g<u;++g)c[m].push(f[g+1]+h)}d=f[d],u=f[u]}u!==d&&(e.push([d,u]),o+=u-d)}return{outSplits:c,valueSlices:e,numValues:o}}function Ac(a){const s=[];for(let t=0;t<a.length;++t){const n=a[t].length,e=lt("int32",n);s.push(e),a[t].forEach((o,i)=>e[i]=o)}return s}function Be(a,s){const t=a.slice(0,s);for(;t.length<s;)t.push(1);for(let n=s;n<a.length;n++)t[s-1]*=a[n];return t}function Oc(a,s,t,n,e,o){const i=Be(s,2)[1],c=Be(o,2)[1];let r=0;for(const l of t)for(let d=l[0];d<l[1];++d){for(let u=0;u<n;++u)e[r*c+u]=a[d*i+u];++r}}function Wc(a,s,t,n,e){const o=s.slice();o[0]=e;const i=lt(t,G(o)),c=a.length,r=c===0?0:c/s[0];return Oc(a,s,n,r,i,o),[i,o]}function Es(a,s,t,n,e,o,i,c){if(a.length===0)throw new Error("paramsNestedSplits must be non empty");if(s[0].length===0)throw new Error("Split tensors must not be scalars");const r=s[0][0]-1;if(Dc(o,i,r),n.length===0)throw new Error("params.rank must be nonzero");const l=n[0],{outSplits:d,valueSlices:u,numValues:p}=Ec(o,i,a,l),f=Ac(d),m=Wc(t,n,e,u,p);return[f,m[0],m[1]]}/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ge=2147483647;function As(a,s,t,n,e,o,i){if(s.length>1)throw new Error("starts must be a scalar or vector");if(e.length>1)throw new Error("limits must be a scalar or vector");if(i.length>1)throw new Error("deltas must be a scalar or vector");const c=s.length===0,r=e.length===0,l=i.length===0,d=[];c||d.push(s[0]),r||d.push(e[0]),l||d.push(i[0]);for(let h=1;h<d.length;++h)if(d[h]!==d[h-1])throw new Error("starts, limits, and deltas must have the same shape");const u=d.length===0?1:d[0],p=lt("int32",u+1);p[0]=0;for(let h=0;h<u;++h){const g=c?a[0]:a[h],k=r?n[0]:n[h],b=l?o[0]:o[h];if(b===0)throw new Error("Requires delta != 0");let x;if(b>0&&k<g||b<0&&k>g)x=0;else if(x=Math.ceil(Math.abs((k-g)/b)),x>Ge)throw new Error(`Requires ((limit - start) / delta) <= ${Ge}`);p[h+1]=p[h]+x}const f=p[u],m=lt(t,f);let I=0;for(let h=0;h<u;++h){const g=p[h+1]-p[h];let k=c?a[0]:a[h];const b=l?o[0]:o[h];for(let x=0;x<g;++x)m[I++]=k,k+=b}return[p,m]}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var xt=Po;class re{constructor(s,t,n,e,o,i,c,r,l,d){this.shape=s,this.shapeShape=t,this.values=n,this.valuesShape=e,this.valuesDType=o,this.defaultValue=i,this.defaultValueShape=c,this.rowPartitionValues=r,this.rowPartitionValuesShapes=l,this.rowPartitionTypes=Oo(d),this.raggedRank=Wo(this.rowPartitionTypes)}getRowPartitionTypeByDimension(s){return this.rowPartitionTypes[0]===xt.FIRST_DIM_SIZE?this.rowPartitionTypes[s+1]:this.rowPartitionTypes[s]}getRowPartitionTensor(s){return this.rowPartitionTypes[0]===xt.FIRST_DIM_SIZE?this.rowPartitionValues[s+1]:this.rowPartitionValues[s]}getMaxWidth(s){const t=this.getRowPartitionTensor(s-1);switch(this.getRowPartitionTypeByDimension(s-1)){case xt.VALUE_ROWIDS:return re.getMaxWidthValueRowID(t);case xt.ROW_SPLITS:return re.getMaxWidthRowSplit(t);default:throw new Error(`Cannot handle partition type ${xt[this.getRowPartitionTypeByDimension(s-1)]}`)}}static getMaxWidthRowSplit(s){const t=s.length;if(t===0||t===1)return 0;let n=0;for(let e=0;e<t-1;++e){const o=s[e+1]-s[e];o>n&&(n=o)}return n}static getMaxWidthValueRowID(s){const t=s.length;if(t===0)return 0;let n=0,e=s[0],o=0;for(let i=1;i<t;++i){const c=s[i];c!==e&&(e=c,o=Math.max(i-n,o),n=i)}return Math.max(t-n,o)}tensorShapeFromTensor(s,t,n=!0){if(t.length===0){if(s[0]===-1)return[];throw new Error("The only valid scalar shape tensor is the fully unknown shape specified as -1.")}return _e(s,n)}calculateOutputSize(s){const t=this.valuesShape,n=this.defaultValueShape;$o(n,t);const e=this.tensorShapeFromTensor(this.shape,this.shapeShape),i=zo(this.raggedRank,e,t);i[0]<0&&(i[0]=s);for(let c=1;c<=this.raggedRank;++c)i[c]<0&&(i[c]=this.getMaxWidth(c));return i}calculateFirstParentOutputIndex(s,t,n){const e=Math.min(s,n),o=[];let i=0;for(let c=0;c<e;++c,i+=t)o.push(i);for(let c=e;c<s;++c)o.push(-1);return ut(o.length===s,()=>"Final length of result must be equal to firstDimension."),o}calculateOutputIndexRowSplit(s,t,n,e){const o=s.length,i=[];for(let c=0;c<o-1;++c){const r=s[c+1]-s[c];let l=Math.min(e,r),d=t[c];d===-1&&(l=0);for(let u=0;u<l;++u)i.push(d),d+=n;for(let u=0;u<r-l;++u)i.push(-1)}if(o>0&&i.length!==s[o-1])throw new Error("Invalid row split size.");return i}calculateOutputIndexValueRowID(s,t,n,e){const o=s.length,i=[];if(o===0)return[];let c=0,r=s[0];if(r>=t.length)throw new Error(`Got currentValueRowId=${r}, which is not less than ${t.length}`);let l=t[r];i.push(l);for(let d=1;d<o;++d){const u=s[d];if(u===r)l>=0&&(++c,c<e?l+=n:l=-1);else{if(c=0,r=u,u>=t.length)throw new Error(`Got nextValueRowId=${u} which is not less than ${t.length}`);l=t[u]}i.push(l)}if(i.length!==s.length)throw new Error("Invalid row ids.");return i}calculateOutputIndex(s,t,n,e){const o=this.getRowPartitionTensor(s),i=this.getRowPartitionTypeByDimension(s);switch(i){case xt.VALUE_ROWIDS:return this.calculateOutputIndexValueRowID(o,t,n,e);case xt.ROW_SPLITS:if(o.length-1>t.length)throw new Error(`Row partition size is greater than output size: ${o.length-1} > ${t.length}`);return this.calculateOutputIndexRowSplit(o,t,n,e);default:throw new Error(`Unsupported partition type: ${xt[i]}`)}}getFirstDimensionSize(){const s=this.rowPartitionValues[0];if(this.rowPartitionTypes.length===0)throw new Error("No row_partition_types given.");const t=this.rowPartitionTypes[0];switch(t){case xt.FIRST_DIM_SIZE:return s[0];case xt.VALUE_ROWIDS:throw new Error("Cannot handle VALUE_ROWIDS in first dimension.");case xt.ROW_SPLITS:return this.rowPartitionValuesShapes[0][0]-1;default:throw new Error(`Cannot handle type ${xt[t]}`)}}compute(){if(this.rowPartitionValues[0].length<=0)throw new Error("Invalid first partition input. Tensor requires at least one element.");const t=this.getFirstDimensionSize(),n=this.calculateOutputSize(t),e=new Array(this.raggedRank+1);e[e.length-1]=1;for(let r=e.length-2;r>=0;--r)e[r]=e[r+1]*n[r+1];const o=_e(n,!1),i=lt(this.valuesDType,G(o));if(e[0]*n[0]>0){let r=this.calculateFirstParentOutputIndex(t,e[0],n[0]);for(let l=1;l<=this.raggedRank;++l)r=this.calculateOutputIndex(l-1,r,e[l],n[l]);this.setOutput(this.raggedRank,r,i,o)}return[o,i]}setOutput(s,t,n,e){if(n.length===0)return;const o=this.values,i=n;let c=e.slice();c=c.slice(s+1);const r=G(c),l=t.length;let d=this.defaultValue;if(d.length!==r&&d.length!==1){const m=this.defaultValueShape;Ho(()=>{const I=Lo(d,m);d=Bo(I,c).dataSync()})}let u=0,p=0,f=0;for(let m=0;m<=l;++m){let I=m<l?t[m]:-1;if(I===f){++f;continue}if(p<f){const h=o.subarray(u*r),g=i.subarray(p*r),k=(f-p)*r;qe(g,h,k)}if(m>=l){const h=n.length;I=Math.floor(h/r)}if(I>f)if(this.defaultValue.length===1)i.subarray(f*r,I*r).fill(this.defaultValue[0]),f=I;else for(;I>f;){const h=i.slice(f*r);qe(h,d,r),++f}I<0?(u=m+1,p=f):(u=m,p=f,f=p+1)}}}function qe(a,s,t){for(let n=0;n<t;n++)a[n]=s[n]}function _e(a,s){const t=[];for(let n of a){if(n<0){if(!s)throw new Error(`Dimension ${n} must be >= 0`);if(n<-1)throw new Error(`Dimension ${n} must be >= -1`);n=-1}t.push(n)}return t}function Os(a,s,t,n,e,o,i,c,r,l){return new re(a,s,t,n,e,o,i,c,r,l).compute()}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ws(a,s,t,n){const e=a===s,o=a<s&&t<0,i=s<a&&t>1;if(e||o||i)return It(0,n);const c=Math.abs(Math.ceil((s-a)/t)),r=It(c,n);s<a&&t===1&&(t=-1),r[0]=a;for(let l=1;l<r.length;l++)r[l]=r[l-1]+t;return r}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ps=Ct(a=>1/Math.sqrt(a)),Pc=At(fn,Ps),$c={kernelName:fn,backendName:"cpu",kernelFunc:Pc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Wt(a,s,t,n,e,o,i,c,r,l){const d=[n/e,e],u=a.values,p=s.values;if(n===0)return tt(t,s.dtype);const f=r instanceof pt?r:tt(d,s.dtype);typeof r=="string"||typeof r=="number"?f.values.fill(r):typeof r=="boolean"&&f.values.fill(+r);for(let m=0;m<o;m++){const I=[];let h=0;for(let g=0;g<i;g++){const k=u[m*i+g];I.push(k),h+=k*c[g]}if(h<0||h>=n/e)throw new Error(`Invalid indices: ${I} does not index into ${t}`);for(let g=0;g<e;g++)l?f.values[h*e+g]+=p[m*e+g]:f.values[h*e+g]=s.rank===0?p[0]:p[m*e+g]}return f}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const zc=Ct(a=>1/(1+Math.exp(-a))),$s=Q(hn,a=>1/(1+Math.exp(-a))),Hc={kernelName:hn,backendName:"cpu",kernelFunc:$s};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zs(a,s,t,n,e){const o=Go(n,s,t),i=G(t),c=K(n);if(o){const u=qo(s,c);return e==="string"?a.slice(u,u+i):a.subarray(u,u+i)}const r=e==="string"?Qt(a):a,l=tt(n,e,r),d=tt(t,e);for(let u=0;u<d.size;++u){const p=d.indexToLoc(u),f=p.map((m,I)=>m+s[I]);d.set(l.get(...f),...p)}return e==="string"?_o(d.values):d.values}function $t(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{begin:o,size:i}=n;q(e,"slice");const[c,r]=Uo(e,o,i);Ko(e,c,r);const l=t.data.get(e.dataId).values,d=zs(l,c,r,e.shape,e.dtype);return t.makeTensorInfo(r,e.dtype,d)}const Lc={kernelName:jo,backendName:"cpu",kernelFunc:$t};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hs(a,s,t,n,e,o,i){const c=s[0],r=o[0],l=new Array(r),d=new Array(c),u=s[1];if(r===0){if(c!==0)throw new Error(Xo(c));const h=lt(t,0),g=lt(e,0);return[h,[0,u],g,l,d]}let p=!0,f=0;const m=new Array(r).fill(0);for(let h=0;h<c;++h){const g=a[h*u];if(g<0)throw new Error(Yo(h,g));if(g>=r)throw new Error(Zo(h,g,r));++m[g],p=p&&g>=f,f=g}let I=!0;for(let h=0;h<r;++h){const g=m[h]===0;l[h]=g,I=I&&!g,m[h]=Math.max(m[h],1),h>0&&(m[h]+=m[h-1])}if(I&&p){const h=a,g=n;for(let k=0;k<c;++k)d[k]=k;return[h,[c,u],g,l,d]}else{const h=m[r-1],g=lt(t,h*u),k=lt(e,h),b=new Array(r).fill(0);for(let x=0;x<c;++x){const S=a[x*u],y=b[S],w=(S===0?0:m[S-1])+y;b[S]++;for(let N=0;N<u;++N)g[w*u+N]=a[x*u+N];k[w]=n[x],d[x]=w}for(let x=0;x<r;++x)if(b[x]===0){const y=x===0?0:m[x-1];g[y*u+0]=x;for(let w=1;w<u;++w)g[y*u+w]=0;k[y]=i}return[g,[h,u],k,l,d]}}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ls(a,s,t,n,e){const o=G(n),i=s[0],c=e.length,r=[];let l=1,d=-1;for(let h=0;h<c;++h){const g=e[h];if(g===-1){if(d!==-1)throw new Error(Qo(d,h));d=h,r.push(1)}else{if(g<0)throw new Error(Jo(h,g));l*=g,r.push(g)}}if(d!==-1){if(l<=0)throw new Error(ta());const h=Math.trunc(o/l);if(l*h!==o)throw new Error(ea(n,r));r[d]=h}if(G(r)!==o)throw new Error(na(n,r));const p=n.length,f=[];if(p>0){f[p-1]=1;for(let h=p-2;h>=0;--h)f[h]=f[h+1]*n[h+1]}const m=[];if(c>0){m[c-1]=1;for(let h=c-2;h>=0;--h)m[h]=m[h+1]*r[h+1]}const I=lt(t,i*c);for(let h=0;h<i;++h){let g=0;for(let k=0;k<p;++k)g+=a[h*p+k]*f[k];for(let k=0;k<c;++k)I[h*c+k]=Math.trunc(g/m[k]),g%=m[k]}return[I,[i,c],r]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ve(a,s,t,n,e,o=!1,i=0){const c=n.length,r=[s[0],a.length/s[0]],l=r[1],u=c>0?e[c-1]+1:0;if(u<0)throw new Error(ze());const p=s.slice();p[0]=u;const f=p.reduce((b,x)=>b*x,1),m=lt(t,f);if(c===0)return u>0&&m.fill(i),[m,p];if(u<=0)throw new Error(ze());let I=0,h=1,g=0,k=e[I];for(;;){let b=0;if(h<c){if(b=e[h],k===b){++h;continue}if(k>=b)throw new Error(sa())}if(k<0||k>=u)throw new Error(oa(k,u));k>g&&m.fill(i,g*l,k*l);for(let x=I;x<h;++x){const S=n[x];if(S<0||S>=r[0])throw new Error(aa(x,n[x],r[0]));for(let y=0;y<l;y++)m[k*l+y]+=a[S*l+y]}if(o)for(let x=0;x<l;x++)m[k*l+x]/=h-I;if(I=h,++h,g=k+1,k=b,h>c)break}return g<u&&m.fill(i,g*l,u*l),[m,p]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bc=Ct(a=>Math.sqrt(a)),Gc=Q(mn,a=>Math.sqrt(a)),qc={kernelName:mn,backendName:"cpu",kernelFunc:Gc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Bs=it((a,s)=>{const t=a-s;return t*t}),_c=ct(gn,Bs),jc={kernelName:gn,backendName:"cpu",kernelFunc:_c};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Gs=Ct((a,s)=>{const{pattern:t,replaceGlobal:n,rewrite:e}=s;return a.replace(new RegExp(t,n?"g":""),e)}),Uc=At(In,Gs),Kc={kernelName:In,backendName:"cpu",kernelFunc:Uc};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qs(a,s,t,n){const e=tt(a,s.dtype);for(let o=0;o<e.size;o++){const i=e.indexToLoc(o),c=new Array(i.length);for(let r=0;r<c.length;r++)c[r]=i[r]*t[r]+n[r];e.set(s.get(...c),...i)}return e}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class Xc{constructor(s,t,n,e,o,i){this.separator=se(s),this.nGramWidths=t,this.leftPad=se(n),this.rightPad=se(e),this.padWidth=o,this.preserveShort=i}getPadWidth(s){return Math.min(this.padWidth<0?s-1:this.padWidth,s-1)}getNumNGrams(s,t){const n=this.getPadWidth(t);return Math.max(0,s+2*n-t+1)}createNGrams(s,t,n,e,o,i){for(let c=0;c<o;++c){const r=this.getPadWidth(i),l=Math.max(0,r-c),d=Math.max(0,r-(o-(c+1))),u=i-(l+d),p=t+(l>0?0:c-r);let f=0;f+=l*this.leftPad.length;for(let k=0;k<u;++k)f+=s[p+k].length;f+=d*this.rightPad.length;const m=l+d+u-1;f+=m*this.separator.length,n[e+c]=new Uint8Array(f);const I=n[e+c];let h=0;const g=k=>k.forEach(b=>I[h++]=b);for(let k=0;k<l;++k)g(this.leftPad),g(this.separator);for(let k=0;k<u-1;++k)g(s[p+k]),g(this.separator);if(u>0){g(s[p+u-1]);for(let k=0;k<d;++k)g(this.separator),g(this.rightPad)}else{for(let k=0;k<d-1;++k)g(this.rightPad),g(this.separator);g(this.rightPad)}}}compute(s,t){const n=s.length,e=t.length;if(e>0){let r=t[0];if(r!==0)throw new Error(`First split value must be 0, got ${r}`);for(let l=1;l<e;++l){let d=t[l]>=r;if(d=d&&t[l]<=n,!d)throw new Error(`Invalid split value ${t[l]}, must be in [${r}, ${n}]`);r=t[l]}if(r!==n)throw new Error(`Last split value must be data size. Expected ${n}, got ${r}`)}const o=e-1,i=lt("int32",e);if(n===0||e===0){const r=new Array(n);for(let l=0;l<=o;++l)i[l]=0;return[r,i]}i[0]=0;for(let r=1;r<=o;++r){const l=t[r]-t[r-1];let d=0;this.nGramWidths.forEach(u=>{d+=this.getNumNGrams(l,u)}),this.preserveShort&&l>0&&d===0&&(d=1),i[r]=i[r-1]+d}const c=new Array(i[o]);for(let r=0;r<o;++r){const l=t[r];let d=i[r];if(this.nGramWidths.forEach(u=>{const p=t[r+1]-t[r],f=this.getNumNGrams(p,u);this.createNGrams(s,l,c,d,f,u),d+=f}),this.preserveShort&&d===i[r]){const u=t[r+1]-t[r];if(u===0)continue;const p=u+2*this.padWidth;this.createNGrams(s,l,c,d,1,p)}}return[c,i]}}function _s(a,s,t,n,e,o,i,c){return new Xc(t,n,e,o,i,c).compute(a,s)}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yc(a,s,t,n){if(!a.length)return;if(s.length===0){for(let o=0;o<a.length;++o)n.push(a.subarray(o,o+1));return}if(s.length===1){const o=s[0];let i=a.indexOf(o);for(;i!==-1;){const c=a.subarray(0,i);(!t||c.length!==0)&&n.push(c),a=a.subarray(i+1),i=a.indexOf(o)}(!t||a.length!==0)&&n.push(a);return}let e=0;for(let o=0;o<a.length+1;o++)if(o===a.length||s.indexOf(a[o])!==-1){const i=a.subarray(e,o);(!t||i.length!==0)&&n.push(i),e=o+1}}function js(a,s,t){const n=a.length,e=[];let o=0,i=0;const c=new Array(n);for(let p=0;p<n;++p){const f=e.length;Yc(a[p],s,t,e);const m=e.length-f;c[p]=m,o+=m,i=Math.max(i,m)}const r=lt("int32",o*2),l=new Array(o),d=[n,i];let u=0;for(let p=0;p<n;++p)for(let f=0;f<c[p];++f)r[u*2]=p,r[u*2+1]=f,l[u]=e[u],++u;return[r,l,d]}/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Us(a,s){const t=lt("int32",a.length);for(let n=0;n<a.length;++n)t[n]=ra(a[n]).modulo(s).getLowBitsUnsigned();return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ks=it((a,s)=>a-s),Zc=Me((a,s,t,n)=>({real:a-t,imag:s-n})),Ee=ct(kn,Ks,Zc),Qc={kernelName:kn,backendName:"cpu",kernelFunc:Ee};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xs(a,s){const t=new Array(a.rank);for(let e=0;e<t.length;e++)t[e]=a.shape[e]*s[e];const n=tt(t,a.dtype);for(let e=0;e<n.values.length;++e){const o=n.indexToLoc(e),i=new Array(a.rank);for(let r=0;r<i.length;r++)i[r]=o[r]%a.shape[r];const c=a.locToIndex(i);n.values[e]=a.values[c]}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Yt=(a,s)=>{const t=s.value-a.value;return t===0?a.index-s.index:t};function Ys(a,s,t=0,n=a.length-1){for(;n>t;){if(n-t>600){const c=n-t+1,r=s-t+1,l=Math.log(c),d=.5*Math.exp(2*l/3),u=.5*Math.sqrt(l*d*(c-d)/c)*Math.sign(r-c/2),p=Math.max(t,Math.floor(s-r*d/c+u)),f=Math.min(n,Math.floor(s+(c-r)*d/c+u));Ys(a,s,p,f)}const e=a[s];let o=t,i=n;for(Xt(a,t,s),Yt(a[n],e)>0&&Xt(a,t,n);o<i;){for(Xt(a,o,i),o++,i--;Yt(a[o],e)<0;)o=o+1;for(;Yt(a[i],e)>0;)i=i-1}Yt(a[t],e)===0?Xt(a,t,i):(i=i+1,Xt(a,i,n)),i<=s&&(t=i+1),s<=i&&(n=i-1)}}function Zs(a,s,t,n,e){const o=s[s.length-1],[i,c]=[a.length/o,o],r=ft(t,i*n),l=ft("int32",i*n);for(let u=0;u<i;u++){const p=u*c,f=a.subarray(p,p+c);let m=new Array(f.length);f.forEach((k,b)=>m[b]={value:k,index:b}),n<m.length&&(Ys(m,n),m=m.slice(0,n)),e&&m.sort(Yt);const I=u*n,h=r.subarray(I,I+n),g=l.subarray(I,I+n);for(let k=0;k<n;k++)h[k]=m[k].value,g[k]=m[k].index}const d=s.slice();return d[d.length-1]=n,[tt(d,t,r),tt(d,"int32",l)]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qs(a,s,t,n){const e=mt(s,t)[0],o=[1,t[0],1];for(let m=0;m<e;m++)o[0]*=t[m];o[1]=t[e];for(let m=e+1;m<t.length;m++)o[2]*=t[m];const i=new Map,c=new Int32Array(t[e]),r=new pt(o,n,a),l=[],d=o[0]===1&&o[2]===1;for(let m=0;m<t[e];m++){let I;if(d)I=a[m].toString();else{const g=[];for(let k=0;k<o[0];k++)for(let b=0;b<o[2];b++)g.push(r.get(k,m,b));I=g.join(",")}const h=i.get(I);if(h!=null)c[m]=h;else{const g=i.size;i.set(I,g),c[m]=g,l.push(m)}}const u=o.slice();u[1]=i.size;const p=new pt(u,n);l.forEach((m,I)=>{for(let h=0;h<o[0];h++)for(let g=0;g<o[2];g++)p.set(r.get(h,m,g),h,I,g)});const f=t.slice();return f[e]=u[1],{outputValues:p.values,outputShape:f,indices:c}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const kh=Object.freeze(Object.defineProperty({__proto__:null,addImpl:is,bincountImpl:Re,bincountReduceImpl:cs,bitwiseAndImpl:ls,castImpl:rs,ceilImpl:ds,concatImpl:us,equalImpl:ps,expImpl:hs,expm1Impl:gs,floorDivImpl:ks,floorImpl:Is,gatherNdImpl:xs,gatherV2Impl:bs,greaterEqualImpl:ys,greaterImpl:Ss,lessEqualImpl:Ns,lessImpl:ws,linSpaceImpl:Cs,logImpl:vs,maxImpl:Ts,maximumImpl:Ms,minimumImpl:Rs,multiplyImpl:Fe,negImpl:Fs,notEqualImpl:Ds,prodImpl:Vs,raggedGatherImpl:Es,raggedRangeImpl:As,raggedTensorToTensorImpl:Os,rangeImpl:Ws,rsqrtImpl:Ps,scatterImpl:Wt,sigmoidImpl:zc,simpleAbsImpl:as,sliceImpl:zs,sparseFillEmptyRowsImpl:Hs,sparseReshapeImpl:Ls,sparseSegmentReductionImpl:Ve,sqrtImpl:Bc,squaredDifferenceImpl:Bs,staticRegexReplaceImpl:Gs,stridedSliceImpl:qs,stringNGramsImpl:_s,stringSplitImpl:js,stringToHashBucketFastImpl:Us,subImpl:Ks,tileImpl:Xs,topKImpl:Zs,transposeImpl:De,uniqueImpl:Qs},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const xh="4.22.0";/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */ia("cpu",()=>new fe,1);/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Js=Q(xn,a=>a>=0?a:Math.exp(a)-1),Jc={kernelName:xn,backendName:"cpu",kernelFunc:Js};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function to(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{alpha:o}=n;q([e],"leakyRelu");const i=G(e.shape),c=t.data.get(e.dataId).values,r=ft("float32",i);for(let l=0;l<c.length;l++)r[l]=c[l]<0?o*c[l]:c[l];return t.makeTensorInfo(e.shape,"float32",r)}const tl={kernelName:ca,backendName:"cpu",kernelFunc:to};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const el=it((a,s)=>a<0?s*a:a);function eo(a){const{inputs:s,backend:t}=a,{x:n,alpha:e}=s;q([n,e],"prelu");const o=t.data.get(n.dataId).values,i=t.data.get(e.dataId).values,[c,r]=el(n.shape,e.shape,o,i,"float32");return t.makeTensorInfo(r,"float32",c)}const nl={kernelName:la,backendName:"cpu",kernelFunc:eo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const no=Q(bn,a=>Math.max(0,a)),sl={kernelName:bn,backendName:"cpu",kernelFunc:no};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const so=Q(Sn,a=>Math.min(Math.max(0,a),6)),ol={kernelName:Sn,backendName:"cpu",kernelFunc:so};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ie(a,s,t,n,e){if(t==="linear")return yt({inputs:{x:s},backend:a});if(t==="relu")return no({inputs:{x:s},backend:a});if(t==="elu")return Js({inputs:{x:s},backend:a});if(t==="relu6")return so({inputs:{x:s},backend:a});if(t==="prelu")return eo({inputs:{x:s,alpha:n},backend:a});if(t==="leakyrelu")return to({inputs:{x:s},backend:a,attrs:{alpha:e}});if(t==="sigmoid")return $s({inputs:{x:s},backend:a});throw new Error(`Activation ${t} has not been implemented for the CPU backend.`)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function st(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{shape:o}=n,i=G(e.shape),c=ua(o,i),r=G(c);ut(i===r,()=>`The new shape (${c}) has ${r} elements and the old shape (${e.shape}) has ${i} elements. The new shape and old shape must have the same number of elements.`),t.incRef(e.dataId);const l=t.data.get(e.dataId);if(l.complexTensorInfos!=null){const d=l.complexTensorInfos.real,u=l.complexTensorInfos.imag;d.shape=c,u.shape=c}return{dataId:e.dataId,shape:c,dtype:e.dtype}}const al={kernelName:da,backendName:"cpu",kernelFunc:st};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oo(a){const{inputs:s,backend:t,attrs:n}=a,{a:e,b:o}=s,{transposeA:i,transposeB:c}=n;q([e,o],"matMul");const r=e.shape.length,l=o.shape.length,d=i?e.shape[r-2]:e.shape[r-1],u=c?o.shape[l-1]:o.shape[l-2],p=i?e.shape[r-1]:e.shape[r-2],f=c?o.shape[l-2]:o.shape[l-1],m=e.shape.slice(0,-2),I=o.shape.slice(0,-2),h=G(m),g=G(I),b=de(e.shape.slice(0,-2),o.shape.slice(0,-2)).concat([p,f]);ut(d===u,()=>`Error in matMul: inner shapes (${d}) and (${u}) of Tensors with shapes ${e.shape} and ${o.shape} and transposeA=${i} and transposeB=${c} must match.`);const x=i?[h,d,p]:[h,p,d],S=c?[g,f,u]:[g,u,f],y=st({inputs:{x:e},backend:t,attrs:{shape:x}}),w=st({inputs:{x:o},backend:t,attrs:{shape:S}}),N=i?y.shape[1]:y.shape[2],R=i?y.shape[2]:y.shape[1],F=c?w.shape[1]:w.shape[2],E=Math.max(h,g),O=t.data.get(y.dataId).values,C=t.data.get(w.dataId).values,D=K(y.shape),v=K(w.shape),[T,A,M]=i?[D[0],1,D[1]]:[D[0],D[1],1],[V,P,W]=c?[1,v[1],v[0]]:[v[1],1,v[0]],H=R*F,$=tt([E,R,F],y.dtype),L=$.values,z=t.blockSize;for(let B=0;B<E;B++){const _=B%h,U=B%g;for(let j=0;j<R;j+=z){const X=Math.min(j+z,R);for(let Y=0;Y<F;Y+=z){const Z=Math.min(Y+z,F);for(let et=0;et<N;et+=z){const rt=Math.min(et+z,N);for(let nt=j;nt<X;nt++)for(let J=Y;J<Z;J++){let at=0;for(let ot=et;ot<rt;ot++){const vt=O[_*T+nt*A+ot*M],dt=C[ot*V+J*P+U*W];at+=vt*dt}L[B*H+(nt*F+J)]+=at}}}}}return t.disposeIntermediateTensorInfo(y),t.disposeIntermediateTensorInfo(w),t.makeTensorInfo(b,$.dtype,$.values)}const rl={kernelName:pa,backendName:"cpu",kernelFunc:oo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function il(a){const{inputs:s,backend:t,attrs:n}=a,{a:e,b:o,bias:i,preluActivationWeights:c}=s,{transposeA:r,transposeB:l,activation:d,leakyreluAlpha:u}=n;let p,f,m;const I=[];p=oo({inputs:{a:e,b:o},attrs:{transposeA:r,transposeB:l},backend:t}),i&&(f=Gt({inputs:{a:p,b:i},backend:t}),I.push(p),p=f),d&&(m=ie(t,p,d,c,u),I.push(p),p=m);for(const g of I)t.disposeIntermediateTensorInfo(g);return p}const cl={kernelName:fa,backendName:"cpu",kernelFunc:il};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ll=Q(yn,a=>Math.acos(a)),dl={kernelName:yn,backendName:"cpu",kernelFunc:ll};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ul=Q(wn,a=>Math.acosh(a)),pl={kernelName:wn,backendName:"cpu",kernelFunc:ul};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fl(a){const{inputs:s,backend:t}=a,n=s;q(s,"addN");const e=n.map(c=>t.data.get(c.dataId).values),o=tt(n[0].shape,n[0].dtype),i=o.values;for(let c=0;c<n.length;c++){const r=e[c];for(let l=0;l<i.length;l++)i[l]+=r[l]}return t.makeTensorInfo(o.shape,o.dtype,o.values)}const hl={kernelName:ha,backendName:"cpu",kernelFunc:fl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ml(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:i}=n;q(e,"all");const c=mt(o,e.shape);let r=c;const l=wt(r,e.shape.length);let d=e;l!=null&&(d=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),r=Nt(r.length,e.shape.length)),Ht("all",r,d.shape.length);const[u,p]=Mt(d.shape,r),f=G(p),m=It(G(u),d.dtype),I=t.data.get(d.dataId).values;for(let g=0;g<m.length;++g){const k=g*f;let b=I[k];for(let x=0;x<f;++x){const S=I[k+x];b=b&&S}m[g]=b}l!=null&&t.disposeIntermediateTensorInfo(d);const h=t.makeTensorInfo(u,d.dtype,m);if(i){const g=zt(u,c),k=st({inputs:{x:h},backend:t,attrs:{shape:g}});return t.disposeIntermediateTensorInfo(h),k}return h}const gl={kernelName:ma,backendName:"cpu",kernelFunc:ml};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Il(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:i}=n;q(e,"any");const c=mt(o,e.shape);let r=c;const l=wt(r,e.shape.length);let d=e;l!=null&&(d=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),r=Nt(r.length,e.shape.length)),Ht("any",r,d.shape.length);const[u,p]=Mt(d.shape,r),f=G(p),m=It(G(u),d.dtype),I=t.data.get(d.dataId).values;for(let g=0;g<m.length;++g){const k=g*f;let b=I[k];for(let x=0;x<f;++x){const S=I[k+x];b=b||S}m[g]=b}l!=null&&t.disposeIntermediateTensorInfo(d);const h=t.makeTensorInfo(u,d.dtype,m);if(i){const g=zt(u,c),k=st({inputs:{x:h},backend:t,attrs:{shape:g}});return t.disposeIntermediateTensorInfo(h),k}return h}const kl={kernelName:ga,backendName:"cpu",kernelFunc:Il};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o}=n;q(e,"argMax");let i=mt(o,e.shape);const c=wt(i,e.shape.length);let r=e;const l=[];c!=null&&(r=ht({inputs:{x:e},backend:t,attrs:{perm:c}}),l.push(r),i=Nt(i.length,r.shape.length)),i=[i[0]],Ht("argMax",i,r.shape.length);const[d,u]=Mt(r.shape,i),p=G(d),f=It(p,"int32"),m=G(u),I=t.data.get(r.dataId).values;for(let h=0;h<f.length;++h){const g=h*m;let k=I[g],b=0;for(let x=0;x<m;++x){const S=I[g+x];S>k&&(k=S,b=x)}f[h]=b}return l.forEach(h=>t.disposeIntermediateTensorInfo(h)),t.makeTensorInfo(d,"int32",f)}const bl={kernelName:Ia,backendName:"cpu",kernelFunc:xl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Sl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o}=n;q(e,"argMin");let i=mt(o,e.shape);const c=wt(i,e.shape.length);let r=e;const l=[];c!=null&&(r=ht({inputs:{x:e},backend:t,attrs:{perm:c}}),l.push(r),i=Nt(i.length,r.shape.length)),i=[i[0]],Ht("argMin",i,r.shape.length);const[d,u]=Mt(r.shape,i),p=G(d),f=It(p,"int32"),m=G(u),I=t.data.get(r.dataId).values;for(let h=0;h<f.length;++h){const g=h*m;let k=I[g],b=0;for(let x=0;x<m;++x){const S=I[g+x];S<k&&(k=S,b=x)}f[h]=b}return l.forEach(h=>t.disposeIntermediateTensorInfo(h)),t.makeTensorInfo(d,"int32",f)}const yl={kernelName:ka,backendName:"cpu",kernelFunc:Sl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wl=Q(Nn,a=>Math.asin(a)),Nl={kernelName:Nn,backendName:"cpu",kernelFunc:wl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cl=Q(Cn,a=>Math.asinh(a)),vl={kernelName:Cn,backendName:"cpu",kernelFunc:Cl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tl=Q(vn,a=>Math.atan(a)),Ml={kernelName:vn,backendName:"cpu",kernelFunc:Tl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Rl=it((a,s)=>Math.atan2(a,s)),Fl=ct(Tn,Rl),Dl={kernelName:Tn,backendName:"cpu",kernelFunc:Fl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vl=Q(Mn,a=>Math.atanh(a)),El={kernelName:Mn,backendName:"cpu",kernelFunc:Vl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ae(a,s,t,n,e,o){const i=e.strideHeight,c=e.strideWidth,r=e.dilationHeight,l=e.dilationWidth,d=e.effectiveFilterHeight,u=e.effectiveFilterWidth,p=e.padInfo.top,f=e.padInfo.left,m=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,I=tt(e.outShape,t),h=I.values,g=e.outShape[1]*e.outShape[2]*e.outShape[3],k=e.outShape[2]*e.outShape[3],b=e.outShape[3];for(let x=0;x<e.batchSize;++x){const S=x*g,y=x*n[0];for(let w=0;w<e.inChannels;++w)for(let N=0;N<e.outHeight;++N){const R=N*i-p,F=Math.max(0,R),E=Math.min(e.inHeight,d+R),O=S+N*k;for(let C=0;C<e.outWidth;++C){const D=C*c-f,v=Math.max(0,D),T=Math.min(e.inWidth,u+D);let A=m,M=0,V=0;for(let W=F;W<E;W+=r){const H=y+W*n[1];for(let $=v;$<T;$+=l){const L=H+$*n[2],z=a[L+w];o==="max"&&z>A?A=z:o==="avg"&&(M+=z,V++)}if(isNaN(A))break}const P=O+C*b+w;h[P]=o==="avg"?M/V:A}}}return I}function ao(a,s,t,n,e=!1,o=!1){const i=tt(n.outShape,"int32"),c=n.strideHeight,r=n.strideWidth,l=n.dilationHeight,d=n.dilationWidth,u=n.effectiveFilterHeight,p=n.effectiveFilterWidth,f=n.padInfo.top,m=n.padInfo.left,I=tt(s,t,a);for(let h=0;h<n.batchSize;++h)for(let g=0;g<n.inChannels;++g)for(let k=0;k<n.outHeight;++k){const b=k*c-f;let x=b;for(;x<0;)x+=l;const S=Math.min(n.inHeight,u+b);for(let y=0;y<n.outWidth;++y){const w=y*r-m;let N=w;for(;N<0;)N+=d;const R=Math.min(n.inWidth,p+w);let F=Number.NEGATIVE_INFINITY,E=-1;for(let O=x;O<S;O+=l){const C=O-b;for(let D=N;D<R;D+=d){const v=D-w,T=I.get(h,O,D,g);T>F&&(F=T,e?E=o?((h*n.inHeight+O)*n.inWidth+D)*n.inChannels+g:(O*n.inWidth+D)*n.inChannels+g:E=C*p+v)}}i.set(E,h,k,y,g)}}return i}function ro(a,s,t,n,e,o){const i=e.strideDepth,c=e.strideHeight,r=e.strideWidth,l=e.dilationDepth,d=e.dilationHeight,u=e.dilationWidth,p=e.effectiveFilterDepth,f=e.effectiveFilterHeight,m=e.effectiveFilterWidth,I=e.padInfo.front,h=e.padInfo.top,g=e.padInfo.left,k=o==="max"?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY,b=tt(e.outShape,t),x=b.values,S=e.outShape[1]*e.outShape[2]*e.outShape[3]*e.outShape[4],y=e.outShape[2]*e.outShape[3]*e.outShape[4],w=e.outShape[3]*e.outShape[4],N=e.outShape[4];for(let R=0;R<e.batchSize;++R){const F=R*S,E=R*n[0];for(let O=0;O<e.inChannels;++O)for(let C=0;C<e.outDepth;++C){const D=C*i-I;let v=D;for(;v<0;)v+=l;const T=Math.min(e.inDepth,p+D),A=F+C*y;for(let M=0;M<e.outHeight;++M){const V=M*c-h;let P=V;for(;P<0;)P+=d;const W=Math.min(e.inHeight,f+V),H=A+M*w;for(let $=0;$<e.outWidth;++$){const L=$*r-g;let z=L;for(;z<0;)z+=u;const B=Math.min(e.inWidth,m+L),_=H+$*N;let U=k,j=0,X=0;for(let Z=v;Z<T;Z+=l){const et=E+Z*n[1];for(let rt=P;rt<W;rt+=d){const nt=et+rt*n[2];for(let J=z;J<B;J+=u){const at=nt+J*n[3],ot=a[at+O];if(o==="max"&&ot>U?U=ot:o==="avg"&&(j+=ot,X++),isNaN(U))break}if(isNaN(U))break}if(isNaN(U))break}const Y=_+O;x[Y]=o==="avg"?j/Math.max(X,1):U}}}}return b}function Al(a,s){const t=tt(s.outShape,"int32"),n=s.strideDepth,e=s.strideHeight,o=s.strideWidth,i=s.dilationDepth,c=s.dilationHeight,r=s.dilationWidth,l=s.effectiveFilterDepth,d=s.effectiveFilterHeight,u=s.effectiveFilterWidth,p=s.padInfo.front,f=s.padInfo.top,m=s.padInfo.left;for(let I=0;I<s.batchSize;++I)for(let h=0;h<s.inChannels;++h)for(let g=0;g<s.outDepth;++g){const k=g*n-p;let b=k;for(;b<0;)b+=i;const x=Math.min(s.inDepth,l+k);for(let S=0;S<s.outHeight;++S){const y=S*e-f;let w=y;for(;w<0;)w+=c;const N=Math.min(s.inHeight,d+y);for(let R=0;R<s.outWidth;++R){const F=R*o-m;let E=F;for(;E<0;)E+=r;const O=Math.min(s.inWidth,u+F);let C=Number.NEGATIVE_INFINITY,D=-1;for(let v=b;v<x;v+=i){const T=v-k;for(let A=w;A<N;A+=c){const M=A-y;for(let V=E;V<O;V+=r){const P=V-F,W=a.get(I,v,A,V,h);W>=C&&(C=W,D=T*d*u+M*d+P)}}}t.set(D,I,g,S,R,h)}}}return t}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ol(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s;q(e,"avgPool");const{filterSize:o,strides:i,pad:c,dimRoundingMode:r}=n,l=1;ut(Se(i,l),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const d=te(e.shape,o,i,l,c,r);let u;if(d.filterWidth===1&&d.filterHeight===1&&ye(d.inShape,d.outShape))u=yt({inputs:{x:e},backend:t});else{const p=t.data.get(e.dataId).values,f=K(e.shape),m=Ae(p,e.shape,e.dtype,f,d,"avg");u=t.makeTensorInfo(d.outShape,e.dtype,m.values)}return u}const Wl={kernelName:xa,backendName:"cpu",kernelFunc:Ol};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{filterSize:o,strides:i,pad:c,dimRoundingMode:r,dataFormat:l}=n;q(e,"avgPool3d");const d=pe(e.shape,o,i,1,c,r,l),u=t.data.get(e.dataId).values,p=ro(u,e.shape,e.dtype,K(e.shape),d,"avg");return t.makeTensorInfo(p.shape,"float32",p.values)}const $l={kernelName:ba,backendName:"cpu",kernelFunc:Pl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zl(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o}=s,{filterSize:i,strides:c,pad:r,dimRoundingMode:l}=n;q([e,o],"avgPool3DGrad");const d=pe(o.shape,i,c,1,r,l),u=d.strideDepth,p=d.strideHeight,f=d.strideWidth,m=d.filterDepth,I=d.filterHeight,h=d.filterWidth,g=d.dilationDepth,k=d.dilationHeight,b=d.dilationWidth,x=d.effectiveFilterDepth,S=d.effectiveFilterHeight,y=d.effectiveFilterWidth,w=x-1-d.padInfo.front,N=y-1-d.padInfo.left,R=S-1-d.padInfo.top,F=tt(o.shape,"float32"),E=1/(m*I*h),O=t.bufferSync(e);for(let C=0;C<d.batchSize;++C)for(let D=0;D<d.inChannels;++D)for(let v=0;v<d.inDepth;++v)for(let T=0;T<d.inHeight;++T)for(let A=0;A<d.inWidth;++A){const M=v-w,V=T-R,P=A-N;let W=0;for(let H=0;H<x;H+=g){const $=(M+H)/u;if(!($<0||$>=d.outDepth||Math.floor($)!==$))for(let L=0;L<S;L+=k){const z=(V+L)/p;if(!(z<0||z>=d.outHeight||Math.floor(z)!==z))for(let B=0;B<y;B+=b){const _=(P+B)/f;if(_<0||_>=d.outWidth||Math.floor(_)!==_)continue;const U=O.get(C,$,z,_,D);W+=U}}}F.set(W*E,C,v,T,A,D)}return t.makeTensorInfo(F.shape,F.dtype,F.values)}const Hl={kernelName:Sa,backendName:"cpu",kernelFunc:zl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ll(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o}=s,i=o;q([e,o],"avgPoolGrad");const{filterSize:c,strides:r,pad:l}=n,d=te(i.shape,c,r,1,l),u=d.strideHeight,p=d.strideWidth,f=d.filterHeight,m=d.filterWidth,I=d.dilationHeight,h=d.dilationWidth,g=d.effectiveFilterHeight,k=d.effectiveFilterWidth,b=k-1-d.padInfo.left,x=g-1-d.padInfo.top,S=tt(i.shape,"float32"),y=1/(f*m),w=t.data.get(e.dataId).values,N=tt(e.shape,"float32",w);for(let R=0;R<d.batchSize;++R)for(let F=0;F<d.inChannels;++F)for(let E=0;E<d.inHeight;++E)for(let O=0;O<d.inWidth;++O){const C=E-x,D=O-b;let v=0;for(let T=0;T<g;T+=I){const A=(C+T)/u;if(!(A<0||A>=d.outHeight||Math.floor(A)!==A))for(let M=0;M<k;M+=h){const V=(D+M)/p;if(V<0||V>=d.outWidth||Math.floor(V)!==V)continue;const P=N.get(R,A,V,F);v+=P}}S.set(v*y,R,E,O,F)}return t.makeTensorInfo(S.shape,S.dtype,S.values)}const Bl={kernelName:ya,backendName:"cpu",kernelFunc:Ll};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gl(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,scale:o,offset:i,mean:c,variance:r}=s;ut(c.shape.length===r.shape.length,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),ut(i==null||c.shape.length===i.shape.length,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),ut(o==null||c.shape.length===o.shape.length,()=>"Batch normalization gradient requires mean and scale to have equal ranks."),q([e,c,r,o,i],"batchNorm");let{varianceEpsilon:l}=n;l==null&&(l=.001);const d=t.data.get(e.dataId).values,u=t.data.get(c.dataId).values,p=t.data.get(r.dataId).values,f=o?t.data.get(o.dataId).values:new Float32Array([1]),m=i?t.data.get(i.dataId).values:new Float32Array([0]),I=new Float32Array(d.length),h=m.length,g=f.length,k=p.length,b=u.length;let x=0,S=0,y=0,w=0;for(let N=0;N<d.length;++N)I[N]=m[x++]+(d[N]-u[S++])*f[y++]/Math.sqrt(p[w++]+l),x>=h&&(x=0),S>=b&&(S=0),y>=g&&(y=0),w>=k&&(w=0);return t.makeTensorInfo(e.shape,e.dtype,I)}const ql={kernelName:wa,backendName:"cpu",kernelFunc:Gl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _l(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{blockShape:o,crops:i}=n;q([e],"batchToSpaceND");const c=o.reduce((g,k)=>g*k),r=Rn(e.shape,o,c),l=Fn(r.length,o.length),d=Dn(e.shape,o,c),u=Ca(i,o.length),p=va(d,i,o.length),f=st({inputs:{x:e},backend:t,attrs:{shape:r}}),m=ht({inputs:{x:f},backend:t,attrs:{perm:l}}),I=st({inputs:{x:m},backend:t,attrs:{shape:d}}),h=$t({inputs:{x:I},backend:t,attrs:{begin:u,size:p}});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(I),h}const jl={kernelName:Na,backendName:"cpu",kernelFunc:_l};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ul(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,weights:o}=s,{size:i}=n,c=t.data.get(e.dataId).values,r=t.data.get(o.dataId).values,l=Re(c,r,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,l)}const Kl={kernelName:Ta,backendName:"cpu",kernelFunc:Ul};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xl(a){const{inputs:s,backend:t}=a,{s0:n,s1:e}=s,o=t.data.get(n.dataId).values,i=t.data.get(e.dataId).values,c=de(Array.from(o),Array.from(i));return t.makeTensorInfo([c.length],"int32",Int32Array.from(c))}const Yl={kernelName:Ma,backendName:"cpu",kernelFunc:Xl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zl=Q(Vn,(a,s)=>{const t=s;return a>t.clipValueMax?t.clipValueMax:a<t.clipValueMin?t.clipValueMin:a}),Ql={kernelName:Vn,backendName:"cpu",kernelFunc:Zl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Jl=a=>{const{x:s}=a.inputs,t=a.backend,n=new Float32Array(G(s.shape)),e=t.data.get(s.dataId),o=e.complexTensorInfos.real,i=e.complexTensorInfos.imag,c=t.data.get(o.dataId).values,r=t.data.get(i.dataId).values;for(let l=0;l<c.length;l++){const d=c[l],u=r[l];n[l]=Math.hypot(d,u)}return t.makeOutput(n,s.shape,"float32")},td={kernelName:Ra,backendName:"cpu",kernelFunc:Jl};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qt(a){const{inputs:s,backend:t}=a,{input:n}=s,e=t.data.get(n.dataId).complexTensorInfos.imag,o=t.data.get(e.dataId).values;return t.makeTensorInfo(e.shape,e.dtype,o)}const ed={kernelName:Fa,backendName:"cpu",kernelFunc:qt};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function _t(a){const{inputs:s,backend:t,attrs:n}=a,{axis:e}=n,o=mt(e,s[0].shape)[0],i=s.map(I=>I.shape);Va(i,o);let c=Ie(s.map(I=>I.shape),o);if(G(c)===0)return t.makeTensorInfo(c,s[0].dtype,[]);const r=s.filter(I=>G(I.shape)>0);if(r.length===1)return yt({inputs:{x:r[0]},backend:t});if(r[0].dtype==="complex64"){const I=r.map(x=>Pt({inputs:{input:x},backend:t})),h=r.map(x=>qt({inputs:{input:x},backend:t})),g=_t({inputs:I,backend:t,attrs:{axis:o}}),k=_t({inputs:h,backend:t,attrs:{axis:o}}),b=gt({inputs:{real:g,imag:k},backend:t});return I.forEach(x=>t.disposeIntermediateTensorInfo(x)),h.forEach(x=>t.disposeIntermediateTensorInfo(x)),t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(k),b}const l=r.map(I=>{const g=[-1,G(I.shape.slice(o))];return st({inputs:{x:I},backend:t,attrs:{shape:g}})}),d=l.map(I=>({vals:t.data.get(I.dataId).values,shape:I.shape}));c=Ie(l.map(I=>I.shape),1);const u=l[0].shape[0]===1,p=us(d,c,s[0].dtype,u),f=Ie(r.map(I=>I.shape),o),m=t.makeTensorInfo(f,s[0].dtype,p);return l.forEach(I=>t.disposeIntermediateTensorInfo(I)),m}const nd={kernelName:Da,backendName:"cpu",kernelFunc:_t};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function io(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o}=s,{strides:i,pad:c,dataFormat:r,dilations:l,dimRoundingMode:d}=n;q([e,o],"conv2d");const u=we(r),p=Ut(e.shape,o.shape,i,l,c,d,!1,u),f=p.filterHeight,m=p.filterWidth,I=p.dilationHeight,h=p.dilationWidth,g=p.padInfo.left,k=p.padInfo.top,b=p.dataFormat==="channelsLast",x=new pt(p.outShape,e.dtype),S=K(e.shape),y=K(o.shape),w=S[0],N=b?S[1]:S[2],R=b?S[2]:1,F=b?1:S[1],E=x.strides[0],O=b?x.strides[1]:x.strides[2],C=b?x.strides[2]:1,D=b?1:x.strides[1],v=t.data.get(e.dataId).values,T=t.data.get(o.dataId).values,A=x.values;for(let M=0;M<p.batchSize;++M){const V=M*w,P=M*E;for(let W=0;W<p.outHeight;++W){const H=P+W*O,$=W*p.strideHeight-k;for(let L=0;L<f;++L){const z=$+L*I;if(z<0||z>=p.inHeight)continue;const B=L*y[0],_=V+z*N;for(let U=0;U<p.outWidth;++U){const j=H+U*C,X=U*p.strideWidth-g;for(let Y=0;Y<m;++Y){const Z=X+Y*h;if(Z<0||Z>=p.inWidth)continue;const et=B+Y*y[1],rt=_+Z*R;let nt=et;for(let J=0;J<p.inChannels;++J){const at=v[rt+J*F];for(let ot=0;ot<p.outChannels;++ot)A[j+ot*D]+=at*T[nt+ot];nt+=p.outChannels}}}}}}return t.makeTensorInfo(x.shape,x.dtype,A)}const sd={kernelName:Ea,backendName:"cpu",kernelFunc:io};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function od(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,dy:o}=s,{strides:i,pad:c,dataFormat:r,dimRoundingMode:l,filterShape:d}=n;q([e,o],"conv2dBackpropFilter");const u=we(r),p=Ut(e.shape,d,i,1,c,l,!1,u),{strideHeight:f,strideWidth:m,filterHeight:I,filterWidth:h}=p,g=p.dataFormat==="channelsLast",k=new pt(p.filterShape,"float32"),b=p.padInfo.left,x=p.padInfo.top,S=t.data.get(e.dataId).values,y=t.data.get(o.dataId).values,w=new pt(e.shape,e.dtype,S),N=new pt(o.shape,o.dtype,y);for(let R=0;R<I;++R){const F=Math.max(0,Math.ceil((x-R)/f)),E=Math.min(p.outHeight,(p.inHeight+x-R)/f);for(let O=0;O<h;++O){const C=Math.max(0,Math.ceil((b-O)/m)),D=Math.min(p.outWidth,(p.inWidth+b-O)/m);for(let v=0;v<p.inChannels;++v)for(let T=0;T<p.outChannels;++T){let A=0;for(let M=0;M<p.batchSize;++M)for(let V=F;V<E;++V){const P=R+V*f-x;for(let W=C;W<D;++W){const H=O+W*m-b;g?A+=w.get(M,P,H,v)*N.get(M,V,W,T):A+=w.get(M,v,P,H)*N.get(M,T,V,W)}}k.set(A,R,O,v,T)}}}return t.makeTensorInfo(k.shape,k.dtype,k.values)}const ad={kernelName:Aa,backendName:"cpu",kernelFunc:od};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rd(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,filter:o}=s,{inputShape:i,strides:c,pad:r,dataFormat:l,dimRoundingMode:d}=n;q([e,o],"conv2dBackpropInput");const u=K(o.shape),p=K(e.shape);let f=we(l);const m=Ut(i,o.shape,c,1,r,d,!1,f),I=new pt(m.inShape,"float32"),h=I.values,g=t.data.get(e.dataId).values,k=t.data.get(o.dataId).values,[b,x,S]=u,{batchSize:y,filterHeight:w,filterWidth:N,inChannels:R,inHeight:F,inWidth:E,outChannels:O,outHeight:C,outWidth:D,strideHeight:v,strideWidth:T}=m;f=m.dataFormat;const A=w-1-m.padInfo.top,M=N-1-m.padInfo.left,V=f==="channelsLast",P=I.strides[0],W=V?I.strides[1]:I.strides[2],H=V?I.strides[2]:1,$=V?1:I.strides[1],L=p[0],z=V?p[1]:p[2],B=V?p[2]:1,_=V?1:p[1];for(let U=0;U<y;++U)for(let j=0;j<R;++j)for(let X=0;X<F;++X){const Y=X-A,Z=Math.max(0,Math.ceil(Y/v)),et=Math.min(C,(w+Y)/v);for(let rt=0;rt<E;++rt){const nt=rt-M,J=Math.max(0,Math.ceil(nt/T)),at=Math.min(D,(N+nt)/T);let ot=0;for(let dt=Z;dt<et;++dt){const Rt=dt*v-Y;for(let kt=J;kt<at;++kt){const Ot=kt*T-nt,bt=L*U+z*dt+B*kt,Tt=b*(w-1-Rt)+x*(N-1-Ot)+S*j;for(let Ft=0;Ft<O;++Ft){const Dt=g[bt+_*Ft],Vt=k[Tt+Ft];ot+=Dt*Vt}}}const vt=P*U+W*X+H*rt+$*j;h[vt]=ot}}return t.makeTensorInfo(I.shape,I.dtype,I.values)}const id={kernelName:Oa,backendName:"cpu",kernelFunc:rd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o}=s,{strides:i,pad:c,dilations:r}=n;q([e,o],"conv3d");const l=Ne(e.shape,o.shape,i,r,c),{filterDepth:d,filterHeight:u,filterWidth:p,dilationDepth:f,dilationHeight:m,dilationWidth:I,padInfo:h}=l,g=h.front,k=h.left,b=h.top,x=new pt(l.outShape,e.dtype),S=t.data.get(e.dataId).values,y=t.data.get(o.dataId).values,w=x.values,N=K(e.shape),R=K(o.shape);for(let F=0;F<l.batchSize;++F){const E=F*N[0],O=F*x.strides[0];for(let C=0;C<l.outDepth;++C){const D=O+C*x.strides[1],v=C*l.strideDepth-g;for(let T=0;T<d;++T){const A=v+T*f;if(A<0||A>=l.inDepth)continue;const M=T*R[0],V=E+A*N[1];for(let P=0;P<l.outHeight;++P){const W=D+P*x.strides[2],H=P*l.strideHeight-b;for(let $=0;$<u;++$){const L=H+$*m;if(L<0||L>=l.inHeight)continue;const z=M+$*R[1],B=V+L*N[2];for(let _=0;_<l.outWidth;++_){const U=W+_*l.outChannels,j=_*l.strideWidth-k;for(let X=0;X<p;++X){const Y=j+X*I;if(Y<0||Y>=l.inWidth)continue;const Z=z+X*R[2],et=B+Y*l.inChannels;let rt=Z;for(let nt=0;nt<l.inChannels;++nt){const J=S[et+nt];for(let at=0;at<l.outChannels;++at)w[U+at]+=J*y[rt+at];rt+=l.outChannels}}}}}}}}return t.makeTensorInfo(x.shape,x.dtype,x.values)}const ld={kernelName:Wa,backendName:"cpu",kernelFunc:cd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function dd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,dy:o}=s,{strides:i,pad:c,filterShape:r}=n;q([e,o],"conv3dBackpropFilterV2");const l=K(e.shape),d=K(o.shape),u=Ne(e.shape,r,i,1,c),p=u.strideDepth,f=u.strideHeight,m=u.strideWidth,I=u.filterDepth,h=u.filterHeight,g=u.filterWidth,k=new pt(u.filterShape,"float32"),b=k.values,[x,S,y,w]=k.strides,N=t.data.get(o.dataId).values,[R,F,E,O]=d,C=t.data.get(e.dataId).values,[D,v,T,A]=l,M=u.padInfo.front,V=u.padInfo.left,P=u.padInfo.top;for(let W=0;W<I;++W){const H=Math.max(0,Math.ceil((M-W)/p)),$=Math.min(u.outDepth,(u.inDepth+M-W)/p),L=W*x;for(let z=0;z<h;++z){const B=Math.max(0,Math.ceil((P-z)/f)),_=Math.min(u.outHeight,(u.inHeight+P-z)/f),U=z*S+L;for(let j=0;j<g;++j){const X=Math.max(0,Math.ceil((V-j)/m)),Y=Math.min(u.outWidth,(u.inWidth+V-j)/m),Z=j*y+U;for(let et=0;et<u.inChannels;++et){const rt=et*w+Z;for(let nt=0;nt<u.outChannels;++nt){let J=0;for(let at=0;at<u.batchSize;++at){const ot=at*D,vt=at*R;for(let dt=H;dt<$;++dt){const kt=(W+dt*p-M)*v+ot,Ot=dt*F+vt;for(let bt=B;bt<_;++bt){const Ft=(z+bt*f-P)*T+kt,Dt=bt*E+Ot;for(let Vt=X;Vt<Y;++Vt){const me=(j+Vt*m-V)*A+Ft,ge=Vt*O+Dt;J+=C[me+et]*N[ge+nt]}}}}b[rt+nt]=J}}}}}return t.makeTensorInfo(k.shape,k.dtype,k.values)}const ud={kernelName:Pa,backendName:"cpu",kernelFunc:dd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function pd(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,filter:o}=s,{pad:i,strides:c,inputShape:r}=n;q([e],"conv3dBackpropInputV2");const l=K(e.shape),d=K(o.shape),u=Ne(r,o.shape,c,1,i),p=new pt(u.inShape,"float32"),f=p.values,[m,I,h,g]=p.strides,k=t.data.get(e.dataId).values,[b,x,S,y]=l,w=t.data.get(o.dataId).values,[N,R,F,E]=d,{batchSize:O,filterDepth:C,filterHeight:D,filterWidth:v,inChannels:T,inDepth:A,inHeight:M,inWidth:V,outChannels:P,outDepth:W,outHeight:H,outWidth:$,strideDepth:L,strideHeight:z,strideWidth:B}=u,_=C-1-u.padInfo.front,U=D-1-u.padInfo.top,j=v-1-u.padInfo.left;for(let X=0;X<O;++X)for(let Y=0;Y<T;++Y)for(let Z=0;Z<A;++Z){const et=Z-_,rt=Math.max(0,Math.ceil(et/L)),nt=Math.min(W,(C+et)/L);for(let J=0;J<M;++J){const at=J-U,ot=Math.max(0,Math.ceil(at/z)),vt=Math.min(H,(D+at)/z);for(let dt=0;dt<V;++dt){const Rt=dt-j,kt=Math.max(0,Math.ceil(Rt/B)),Ot=Math.min($,(v+Rt)/B);let bt=0;for(let Tt=rt;Tt<nt;++Tt){const Ft=Tt*L-et;for(let Dt=ot;Dt<vt;++Dt){const Vt=Dt*z-at;for(let Kt=kt;Kt<Ot;++Kt){const me=Kt*B-Rt,ge=b*X+x*Tt+S*Dt+y*Kt,go=N*(C-1-Ft)+R*(D-1-Vt)+F*(v-1-me)+E*Y;for(let ne=0;ne<P;++ne){const Io=k[ge+ne],ko=w[go+ne];bt+=Io*ko}}}}f[m*X+I*Z+h*J+g*dt+Y]=bt}}}return t.makeTensorInfo(p.shape,p.dtype,p.values)}const fd={kernelName:$a,backendName:"cpu",kernelFunc:pd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const hd=Q(En,a=>Math.cos(a)),md={kernelName:En,backendName:"cpu",kernelFunc:hd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gd=Q(An,a=>Math.cosh(a)),Id={kernelName:An,backendName:"cpu",kernelFunc:gd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function kd(a){const{inputs:s,backend:t,attrs:n}=a,{image:e,boxes:o,boxInd:i}=s,{cropSize:c,method:r,extrapolationValue:l}=n,[d,u,p,f]=e.shape,m=o.shape[0],[I,h]=c,g=tt([m,I,h,f],"float32"),k=t.data.get(o.dataId).values,b=t.data.get(i.dataId).values,x=t.data.get(e.dataId).values,S=K(e.shape),y=K(g.shape);for(let w=0;w<m;w++){const N=w*4,R=k[N],F=k[N+1],E=k[N+2],O=k[N+3],C=b[w];if(C>=d)continue;const D=I>1?(E-R)*(u-1)/(I-1):0,v=h>1?(O-F)*(p-1)/(h-1):0;for(let T=0;T<I;T++){const A=I>1?R*(u-1)+T*D:.5*(R+E)*(u-1);if(A<0||A>u-1){for(let M=0;M<h;M++)for(let V=0;V<f;V++){const P=V+M*y[2]+T*y[1]+w*y[0];g.values[P]=l}continue}if(r==="bilinear"){const M=Math.floor(A),V=Math.ceil(A),P=A-M;for(let W=0;W<h;W++){const H=h>1?F*(p-1)+W*v:.5*(F+O)*(p-1);if(H<0||H>p-1){for(let B=0;B<f;B++){const _=B+W*y[2]+T*y[1]+w*y[0];g.values[_]=l}continue}const $=Math.floor(H),L=Math.ceil(H),z=H-$;for(let B=0;B<f;B++){let _=B+$*S[2]+M*S[1]+C*S[0];const U=x[_];_=B+L*S[2]+M*S[1]+C*S[0];const j=x[_];_=B+$*S[2]+V*S[1]+C*S[0];const X=x[_];_=B+L*S[2]+V*S[1]+C*S[0];const Y=x[_],Z=U+(j-U)*z,et=X+(Y-X)*z;_=B+W*y[2]+T*y[1]+w*y[0],g.values[_]=Z+(et-Z)*P}}}else for(let M=0;M<h;++M){const V=h>1?F*(p-1)+M*v:.5*(F+O)*(p-1);if(V<0||V>p-1){for(let H=0;H<f;H++){const $=H+M*y[2]+T*y[1]+w*y[0];g.values[$]=l}continue}const P=Math.round(V),W=Math.round(A);for(let H=0;H<f;H++){const $=H+P*S[2]+W*S[1]+C*S[0],L=H+M*y[2]+T*y[1]+w*y[0];g.values[L]=x[$]}}}}return t.makeTensorInfo(g.shape,g.dtype,g.values)}const xd={kernelName:za,backendName:"cpu",kernelFunc:kd};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,exclusive:i,reverse:c}=n;q(e,"cumprod");const r=wt([o],e.shape.length);let l=e;r!=null&&(l=ht({inputs:{x:e},backend:t,attrs:{perm:r}}));const d=Nt(1,e.shape.length)[0];if(d!==l.shape.length-1)throw new Error(`backend.cumprod in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${d}`);const u=Jt(l.dtype,"int32"),p=La(G(l.shape),u),f=t.data.get(l.dataId).values,m=l.shape[l.shape.length-1],I=c?(g,k)=>g+m-k-1:(g,k)=>g+k;for(let g=0;g<f.length;g+=m)for(let k=0;k<m;k++){const b=I(g,k);if(k===0)p[b]=i?1:f[b];else{const x=I(g,k-1);p[b]=i?f[x]*p[x]:f[b]*p[x]}}const h=t.makeTensorInfo(l.shape,u,p);if(r!=null){const g=On(r),k=ht({inputs:{x:h},backend:t,attrs:{perm:g}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(l),k}return h}const Sd={kernelName:Ha,backendName:"cpu",kernelFunc:bd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,exclusive:i,reverse:c}=n;q(e,"cumsum");const r=wt([o],e.shape.length);let l=e;r!=null&&(l=ht({inputs:{x:e},backend:t,attrs:{perm:r}}));const d=Nt(1,e.shape.length)[0];if(d!==l.shape.length-1)throw new Error(`backend.cumsum in CPU expects an inner-most axis=${l.shape.length-1} but got axis=${d}`);const u=Jt(l.dtype,"int32"),p=It(G(l.shape),u),f=t.data.get(l.dataId).values,m=l.shape[l.shape.length-1],I=c?(g,k)=>g+m-k-1:(g,k)=>g+k;for(let g=0;g<f.length;g+=m)for(let k=0;k<m;k++){const b=I(g,k);if(k===0)p[b]=i?0:f[b];else{const x=I(g,k-1);p[b]=i?f[x]+p[x]:f[b]+p[x]}}const h=t.makeTensorInfo(l.shape,u,p);if(r!=null){const g=On(r),k=ht({inputs:{x:h},backend:t,attrs:{perm:g}});return t.disposeIntermediateTensorInfo(h),t.disposeIntermediateTensorInfo(l),k}return h}const wd={kernelName:Ba,backendName:"cpu",kernelFunc:yd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,weights:o}=s,{size:i,binaryOutput:c}=n;if(e.shape.length===1){const r=t.data.get(e.dataId).values,l=t.data.get(o.dataId).values,d=Re(r,l,o.dtype,o.shape,i);return t.makeTensorInfo([i],o.dtype,d)}else if(e.shape.length===2){const r=t.bufferSync(e),l=t.bufferSync(o),d=cs(r,l,i,c);return t.makeTensorInfo(d.shape,o.dtype,d.values)}throw new Error(`Error in denseBincount: input must be at most rank 2, but got rank${e.shape.length}.`)}const Cd={kernelName:Ga,backendName:"cpu",kernelFunc:Nd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{blockSize:o,dataFormat:i}=n;ut(i==="NHWC",()=>`Only NHWC dataFormat supported on CPU for depthToSpace. Got ${i}`);const c=e.shape[0],r=e.shape[1],l=e.shape[2],d=e.shape[3],u=r*o,p=l*o,f=d/(o*o),m=t.data.get(e.dataId).values,I=new Float32Array(c*u*p*f);let h=0;for(let g=0;g<c;++g)for(let k=0;k<u;++k){const b=Math.floor(k/o),x=k%o;for(let S=0;S<p;++S){const y=Math.floor(S/o),w=S%o,N=(x*o+w)*f;for(let R=0;R<f;++R){const E=R+N+d*(y+l*(b+r*g));I[h++]=m[E]}}}return t.makeTensorInfo([c,u,p,f],e.dtype,I)}const Td={kernelName:qa,backendName:"cpu",kernelFunc:vd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function co(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o}=s,{strides:i,pad:c,dilations:r,dimRoundingMode:l}=n;q([e,o],"depthwiseConv2DNative");const d=K(e.shape),u=K(o.shape);let p=r;p==null&&(p=[1,1]),ut(Se(i,p),()=>`Error in depthwiseConv2d: Either strides or dilations must be 1. Got strides ${i} and dilations '${p}'`);const f=Ut(e.shape,o.shape,i,p,c,l,!0),{filterHeight:m,filterWidth:I,dilationHeight:h,dilationWidth:g,padInfo:k}=f,b=k.left,x=k.top,S=f.outChannels/f.inChannels,y=new pt(f.outShape,e.dtype),w=t.data.get(e.dataId).values,N=t.data.get(o.dataId).values,R=y.values;for(let F=0;F<f.batchSize;++F){const E=F*d[0],O=F*y.strides[0];for(let C=0;C<f.outHeight;++C){const D=O+C*y.strides[1],v=C*f.strideHeight-x;for(let T=0;T<m;++T){const A=v+T*h;if(A<0||A>=f.inHeight)continue;const M=T*u[0],V=E+A*d[1];for(let P=0;P<f.outWidth;++P){const W=D+P*y.strides[2],H=P*f.strideWidth-b;for(let $=0;$<I;++$){const L=H+$*g;if(L<0||L>=f.inWidth)continue;const z=M+$*u[1],B=V+L*f.inChannels;let _=W,U=z;for(let j=0;j<f.inChannels;++j){const X=w[B+j];for(let Y=0;Y<S;++Y)R[_+Y]+=X*N[U+Y];_+=S,U+=S}}}}}}return t.makeTensorInfo(y.shape,y.dtype,y.values)}const Md={kernelName:_a,backendName:"cpu",kernelFunc:co};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Rd(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,dy:o}=s,{strides:i,dilations:c,pad:r,dimRoundingMode:l,filterShape:d}=n;q([e,o],"depthwiseConv2dNativeBackpropFilter");const u=Ut(e.shape,d,i,c,r,l,!0),{strideHeight:p,strideWidth:f,filterHeight:m,filterWidth:I}=u,h=new pt(u.filterShape,"float32"),g=u.padInfo.left,k=u.padInfo.top,b=u.outChannels/u.inChannels,x=t.data.get(e.dataId).values,S=new pt(e.shape,e.dtype,x),y=t.data.get(o.dataId).values,w=new pt(o.shape,o.dtype,y);for(let N=0;N<m;++N){const R=Math.max(0,Math.ceil((k-N)/p)),F=Math.min(u.outHeight,(u.inHeight+k-N)/p);for(let E=0;E<I;++E){const O=Math.max(0,Math.ceil((g-E)/f)),C=Math.min(u.outWidth,(u.inWidth+g-E)/f);for(let D=0;D<u.outChannels;++D){const v=Math.trunc(D/b),T=D%b;let A=0;for(let M=0;M<u.batchSize;++M)for(let V=R;V<F;++V){const P=N+V*p-k;for(let W=O;W<C;++W){const H=E+W*f-g;A+=S.get(M,P,H,v)*w.get(M,V,W,D)}}h.set(A,N,E,v,T)}}}return t.makeTensorInfo(h.shape,h.dtype,h.values)}const Fd={kernelName:ja,backendName:"cpu",kernelFunc:Rd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Dd(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,filter:o}=s,{strides:i,dilations:c,pad:r,dimRoundingMode:l,inputShape:d}=n;q([e,o],"depthwiseConv2DNativeBackpropInput");const u=K(e.shape),p=K(o.shape),f=Ut(d,o.shape,i,c,r,l,!0),m=new pt(f.inShape,"float32"),I=m.values,[h,g,k]=m.strides,b=t.data.get(e.dataId).values,[x,S,y]=u,w=t.data.get(o.dataId).values,[N,R,F]=p,{batchSize:E,filterHeight:O,filterWidth:C,inChannels:D,inHeight:v,inWidth:T,outChannels:A,outHeight:M,outWidth:V,strideHeight:P,strideWidth:W}=f,H=O-1-f.padInfo.top,$=C-1-f.padInfo.left,L=A/D;for(let z=0;z<E;++z)for(let B=0;B<D;++B)for(let _=0;_<v;++_){const U=_-H,j=Math.max(0,Math.ceil(U/P)),X=Math.min(M,(O+U)/P);for(let Y=0;Y<T;++Y){const Z=Y-$,et=Math.max(0,Math.ceil(Z/W)),rt=Math.min(V,(C+Z)/W);let nt=0;for(let J=j;J<X;++J){const at=J*P-U;for(let ot=et;ot<rt;++ot){const vt=ot*W-Z,dt=x*z+S*J+y*ot,Rt=N*(O-1-at)+R*(C-1-vt)+F*B;for(let kt=0;kt<L;++kt){const Ot=B*L+kt,bt=b[dt+Ot],Tt=w[Rt+kt];nt+=bt*Tt}}}I[h*z+g*_+k*Y+B]=nt}}return t.makeTensorInfo(m.shape,m.dtype,m.values)}const Vd={kernelName:Ua,backendName:"cpu",kernelFunc:Dd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ed(a){const{inputs:s,backend:t}=a,{x:n}=s,e=G(n.shape),o=t.data.get(n.dataId).values,i=tt([e,e],n.dtype),c=i.values;for(let l=0;l<o.length;l++)c[l*e+l]=o[l];const r=[...n.shape,...n.shape];return t.makeTensorInfo(r,i.dtype,i.values)}const Ad={kernelName:Ka,backendName:"cpu",kernelFunc:Ed};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Od={kernelName:Xa,backendName:"cpu",kernelFunc:({inputs:a,backend:s,attrs:t})=>{const{x:n,filter:e}=a,{strides:o,pad:i,dilations:c}=t,r=s,l=r.data.get(n.dataId).values,d=n.shape.length,u=r.data.get(e.dataId).values,p=e.shape.length,{batchSize:f,inHeight:m,inWidth:I,inChannels:h,outHeight:g,outWidth:k,padInfo:b,strideHeight:x,strideWidth:S,filterHeight:y,filterWidth:w,dilationHeight:N,dilationWidth:R,outShape:F}=Ce(n.shape,e.shape,o,i,"NHWC",c),E=G(F),O=F.length,C=lt(n.dtype,E);for(let v=0;v<f;++v)for(let T=0;T<g;++T){const A=T*x-b.top;for(let M=0;M<k;++M){const V=M*S-b.left;for(let P=0;P<h;++P){let W=Number.MIN_SAFE_INTEGER;for(let $=0;$<y;++$){const L=A+$*N;if(L>=0&&L<m)for(let z=0;z<w;++z){const B=V+z*R;if(B>=0&&B<I){const _=St([v,L,B,P],d,K(n.shape)),U=St([$,z,P],p,K(e.shape)),j=l[_]+u[U];j>W&&(W=j)}}}const H=St([v,T,M,P],O,K(F));C[H]=W}}}return{dataId:r.write(ue(C,n.dtype),F,n.dtype),shape:F,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wd={kernelName:He,backendName:"cpu",kernelFunc:({inputs:a,backend:s,attrs:t})=>{const{x:n,filter:e,dy:o}=a,{strides:i,pad:c,dilations:r}=t,l=s,d=Lt(n.shape,l.data.get(n.dataId).values),u=Lt(e.shape,l.data.get(e.dataId).values),{batchSize:p,inHeight:f,inWidth:m,inChannels:I,outHeight:h,outWidth:g,padInfo:k,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:y,dilationHeight:w,dilationWidth:N,outShape:R}=Ce(n.shape,e.shape,i,c,"NHWC",r);ut(o.rank===R.length,()=>`Error in ${He}, dy must have the same rank as output ${R.length}, but got ${o.rank}`);const F=Lt(R,l.data.get(o.dataId).values),E=Wn(e.shape,e.dtype);for(let C=0;C<p;++C)for(let D=0;D<h;++D){const v=D*b-k.top;for(let T=0;T<g;++T){const A=T*x-k.left;for(let M=0;M<I;++M){let V=Number.MIN_SAFE_INTEGER,P=0,W=0;for(let H=0;H<S;++H){const $=v+H*w;if($>=0&&$<f)for(let L=0;L<y;++L){const z=A+L*N;if(z>=0&&z<m){const B=d[C][$][z][M]+u[H][L][M];B>V&&(V=B,P=H,W=L)}}}E[P][W][M]+=F[C][D][T][M]}}}return{dataId:l.write(ue(E,n.dtype),e.shape,e.dtype),shape:e.shape,dtype:e.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Pd={kernelName:Le,backendName:"cpu",kernelFunc:({inputs:a,backend:s,attrs:t})=>{const{x:n,filter:e,dy:o}=a,{strides:i,pad:c,dilations:r}=t,l=s,d=Lt(n.shape,l.data.get(n.dataId).values),u=Lt(e.shape,l.data.get(e.dataId).values),{batchSize:p,inHeight:f,inWidth:m,inChannels:I,outHeight:h,outWidth:g,padInfo:k,strideHeight:b,strideWidth:x,filterHeight:S,filterWidth:y,dilationHeight:w,dilationWidth:N,outShape:R}=Ce(n.shape,e.shape,i,c,"NHWC",r);ut(o.rank===R.length,()=>`Error in ${Le}, dy must have the same rank as output ${R.length}, but got ${o.rank}`);const F=Lt(R,l.data.get(o.dataId).values),E=Wn(n.shape,n.dtype);for(let C=0;C<p;++C)for(let D=0;D<h;++D){const v=D*b-k.top;for(let T=0;T<g;++T){const A=T*x-k.left;for(let M=0;M<I;++M){let V=Number.MIN_SAFE_INTEGER,P=v<0?0:v,W=A<0?0:A;for(let H=0;H<S;++H){const $=v+H*w;if($>=0&&$<f)for(let L=0;L<y;++L){const z=A+L*N;if(z>=0&&z<m){const B=d[C][$][z][M]+u[H][L][M];B>V&&(V=B,P=$,W=z)}}}E[C][P][W][M]+=F[C][D][T][M]}}}return{dataId:l.write(ue(E,n.dtype),n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $d(a){const{inputs:s,backend:t,attrs:n}=a,{image:e}=s,{canvas:o,options:i}=n,{contextOptions:c,imageOptions:r}=i||{},l=(r==null?void 0:r.alpha)||1,d=(c==null?void 0:c.contextType)||"2d";if(d!=="2d")throw new Error(`Context type ${c.contextType} is not supported by the CPU backend.`);const u=o.getContext(d,(c==null?void 0:c.contextAttributes)||{});if(u==null)throw new Error(`Could not get the context with ${d} type.`);const[p,f]=e.shape.slice(0,2),m=e.shape.length===2?1:e.shape[2],I=t.data.get(e.dataId).values,h=e.dtype==="float32"?255:1,g=new Uint8ClampedArray(f*p*4);for(let b=0;b<p*f;++b){const x=[0,0,0,255*l];for(let y=0;y<m;y++){const w=I[b*m+y];if(e.dtype==="float32"){if(w<0||w>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${w}.`)}else if(e.dtype==="int32"&&(w<0||w>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${w}.`);m===1?(x[0]=w*h,x[1]=w*h,x[2]=w*h):x[y]=w*h}const S=b*4;g[S+0]=Math.round(x[0]),g[S+1]=Math.round(x[1]),g[S+2]=Math.round(x[2]),g[S+3]=Math.round(x[3])}o.width=f,o.height=p;const k=new ImageData(g,f,p);return u.putImageData(k,0,0),e}const zd={kernelName:Ya,backendName:"cpu",kernelFunc:$d};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ee(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:i}=n;q(e,"sum");let c;e.dtype==="bool"?c=Et({inputs:{x:e},backend:t,attrs:{dtype:"int32"}}):c=yt({inputs:{x:e},backend:t});const r=c.shape.length,l=mt(o,c.shape),d=wt(l,r);let u=l,p=c;d!=null&&(p=ht({inputs:{x:c},backend:t,attrs:{perm:d}}),u=Nt(u.length,r)),Ht("sum",u,p.shape.length);const[f,m]=Mt(p.shape,u),I=Jt(p.dtype,"int32");let h=ae(t,f,I);const g=G(m),k=t.data.get(h.dataId).values,b=t.data.get(p.dataId).values;for(let x=0;x<k.length;++x){const S=x*g;let y=0;for(let w=0;w<g;++w)y+=b[S+w];k[x]=y}if(i){const x=zt(h.shape,l),S=h;h=st({inputs:{x:h},backend:t,attrs:{shape:x}}),t.disposeIntermediateTensorInfo(S)}return t.disposeIntermediateTensorInfo(c),d!=null&&t.disposeIntermediateTensorInfo(p),h}const Hd={kernelName:Za,backendName:"cpu",kernelFunc:ee};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ld(a){const{inputs:s,backend:t,attrs:n}=a,{equation:e}=n,o=s,{allDims:i,summedDims:c,idDims:r}=Ja(e,o.length);tr(i.length,r,o);const{path:l,steps:d}=er(c,r),u=d.length;let p=null,f=i.length;const m=[];for(let I=0;I<u;++I){for(const h of d[I]){const{permutationIndices:g,expandDims:k}=nr(f,r[h]);let b;sr(g)?b=o[h]:(b=ht({inputs:{x:o[h]},backend:t,attrs:{perm:g}}),m.push(b));const x=b.shape.slice();for(let S=0;S<k.length;++S)x.splice(k[S],0,1);ye(b.shape,x)||(b=st({inputs:{x:b},backend:t,attrs:{shape:x}}),m.push(b)),p===null?p=b:(p=he({inputs:{a:b,b:p},backend:t}),m.push(p))}I<u-1&&(l[I]>=0&&(p=ee({inputs:{x:p},backend:t,attrs:{axis:l[I]-(i.length-f),keepDims:!1}}),m.push(p)),f--)}for(const I of m)I!==p&&t.disposeIntermediateTensorInfo(I);return p}const Bd={kernelName:Qa,backendName:"cpu",kernelFunc:Ld};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gd(a){const{inputs:s,backend:t}=a,{dy:n,y:e}=s;q([n,e],"eluGrad");const o=new Float32Array(G(e.shape)),i=t.data.get(e.dataId).values,c=t.data.get(n.dataId).values;for(let r=0;r<i.length;++r){const l=i[r];l>=0?o[r]=c[r]:o[r]=c[r]*(l+1)}return t.makeTensorInfo(e.shape,"float32",o)}const qd={kernelName:or,backendName:"cpu",kernelFunc:Gd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _d=dr,jd=lr,Ud=cr,Kd=ir,Xd=rr,Yd=ar,Zd=Q(Pn,a=>{const s=Math.sign(a),t=Math.abs(a),n=1/(1+_d*t);return s*(1-((((Yd*n+Xd)*n+Kd)*n+Ud)*n+jd)*n*Math.exp(-t*t))}),Qd={kernelName:Pn,backendName:"cpu",kernelFunc:Zd};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ce(a){const{inputs:s,backend:t,attrs:n}=a,{input:e}=s,{dim:o}=n,i=e.shape.length,c=e.shape.slice();let r=o;return o<0&&(ut(-(i+1)<=o,()=>`Axis must be in the interval [${-(i+1)}, ${i}]`),r=i+o+1),c.splice(r,0,1),st({inputs:{x:e},backend:t,attrs:{shape:c}})}const Jd={kernelName:ur,backendName:"cpu",kernelFunc:ce};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const tu=it((a,s)=>a/s),Oe=ct($n,tu),ke={kernelName:$n,backendName:"cpu",kernelFunc:Oe};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lo(a,s,t){const n=a.shape,e=n[0],o=n[1],i=t.data.get(a.dataId),c=i.complexTensorInfos.real,r=i.complexTensorInfos.imag,l=[e,o],d=G(l),u=ft("float32",d),p=ft("float32",d);for(let h=0;h<e;h++){const g=$t({inputs:{x:c},backend:t,attrs:{begin:[h,0],size:[1,o]}}),k=$t({inputs:{x:r},backend:t,attrs:{begin:[h,0],size:[1,o]}}),b=gt({inputs:{real:g,imag:k},backend:t}),{real:x,imag:S}=eu(b,s,t),y=Bt(x,S);for(let w=0;w<o;w++){const N=zn(y,w);u[h*o+w]=N.real,p[h*o+w]=N.imag}t.disposeIntermediateTensorInfo(g),t.disposeIntermediateTensorInfo(k),t.disposeIntermediateTensorInfo(b)}const f=t.makeTensorInfo(l,"float32",u),m=t.makeTensorInfo(l,"float32",p),I=gt({inputs:{real:f,imag:m},backend:t});return t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),I}function eu(a,s,t){const n=G(a.shape),e=t.data.get(a.dataId),o=t.data.get(e.complexTensorInfos.real.dataId).values,i=t.data.get(e.complexTensorInfos.imag.dataId).values;if(nu(n)){const c=xe(o,i,n,s,t),r=[a.shape[0],a.shape[1]];if(s){const l=t.makeTensorInfo(r,"float32",c.real),d=t.makeTensorInfo(r,"float32",c.imag),u=t.makeTensorInfo([],"float32",be(n,"float32")),p=yt({inputs:{x:u},backend:t}),f=ke.kernelFunc({inputs:{a:l,b:u},backend:t}),m=ke.kernelFunc({inputs:{a:d,b:p},backend:t}),I=t.data.get(f.dataId).values,h=t.data.get(m.dataId).values;return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(d),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),{real:I,imag:h}}return c}else{const c=Bt(o,i),r=su(c,n,s);return pr(r)}}function nu(a){return(a&a-1)===0}function xe(a,s,t,n,e){if(t===1)return{real:a,imag:s};const o=Bt(a,s),i=t/2,c=fr(o),r=c.real,l=c.imag,d=[r.length],u=e.makeTensorInfo(d,"float32",r),p=e.makeTensorInfo(d,"float32",l),f=gt({inputs:{real:u,imag:p},backend:e}),m=hr(o),I=m.real,h=m.imag,g=[I.length],k=e.makeTensorInfo(g,"float32",I),b=e.makeTensorInfo(g,"float32",h),x=gt({inputs:{real:k,imag:b},backend:e}),S=xe(r,l,i,n,e),y=S.real,w=S.imag,N=[y.length],R=e.makeTensorInfo(N,"float32",y),F=e.makeTensorInfo(N,"float32",w),E=gt({inputs:{real:R,imag:F},backend:e}),O=xe(I,h,i,n,e),C=O.real,D=O.imag,v=[C.length],T=e.makeTensorInfo(v,"float32",C),A=e.makeTensorInfo(v,"float32",D),M=gt({inputs:{real:T,imag:A},backend:e}),V=mr(t,n),P=[V.real.length],W=e.makeTensorInfo(P,"float32",V.real),H=e.makeTensorInfo(P,"float32",V.imag),$=gt({inputs:{real:W,imag:H},backend:e}),L=he({inputs:{a:$,b:M},backend:e}),z=Gt({inputs:{a:E,b:L},backend:e}),B=Ee({inputs:{a:E,b:L},backend:e}),_=Pt({inputs:{input:z},backend:e}),U=Pt({inputs:{input:B},backend:e}),j=qt({inputs:{input:z},backend:e}),X=qt({inputs:{input:B},backend:e}),Y=_t({inputs:[_,U],backend:e,attrs:{axis:0}}),Z=_t({inputs:[j,X],backend:e,attrs:{axis:0}}),et=e.data.get(Y.dataId).values,rt=e.data.get(Z.dataId).values;return e.disposeIntermediateTensorInfo(u),e.disposeIntermediateTensorInfo(p),e.disposeIntermediateTensorInfo(f),e.disposeIntermediateTensorInfo(k),e.disposeIntermediateTensorInfo(b),e.disposeIntermediateTensorInfo(x),e.disposeIntermediateTensorInfo(R),e.disposeIntermediateTensorInfo(F),e.disposeIntermediateTensorInfo(E),e.disposeIntermediateTensorInfo(T),e.disposeIntermediateTensorInfo(A),e.disposeIntermediateTensorInfo(M),e.disposeIntermediateTensorInfo(W),e.disposeIntermediateTensorInfo(H),e.disposeIntermediateTensorInfo($),e.disposeIntermediateTensorInfo(L),e.disposeIntermediateTensorInfo(z),e.disposeIntermediateTensorInfo(B),e.disposeIntermediateTensorInfo(_),e.disposeIntermediateTensorInfo(j),e.disposeIntermediateTensorInfo(U),e.disposeIntermediateTensorInfo(X),e.disposeIntermediateTensorInfo(Y),e.disposeIntermediateTensorInfo(Z),{real:et,imag:rt}}function su(a,s,t){const n=new Float32Array(s*2);for(let e=0;e<s;e++){let o=0,i=0;for(let c=0;c<s;c++){const r=Ir(e*c,s,t),l=zn(a,c);o+=l.real*r.real-l.imag*r.imag,i+=l.real*r.imag+l.imag*r.real}t&&(o/=s,i/=s),gr(n,o,i,e)}return n}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ou(a){const{inputs:s,backend:t}=a,{input:n}=s,e=G(n.shape),o=n.shape[n.shape.length-1],i=e/o,c=st({inputs:{x:n},backend:t,attrs:{shape:[i,o]}}),r=lo(c,!1,t),l=st({inputs:{x:r},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(r),l}const au={kernelName:kr,backendName:"cpu",kernelFunc:ou};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function We(a){const{backend:s,attrs:t}=a,{shape:n,value:e,dtype:o}=t,i=o||br(e),c=lt(i,G(n));return iu(c,e,i),s.makeTensorInfo(n,i,c)}const ru={kernelName:xr,backendName:"cpu",kernelFunc:We};function iu(a,s,t){a.fill(s)}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const cu={kernelName:Sr,backendName:"cpu",kernelFunc:({inputs:a,attrs:s,backend:t})=>{const{image:n}=a,e=t,o=ft(n.dtype,G(n.shape)),[i,c,r,l]=n.shape,d=e.data.get(n.dataId).values;for(let p=0;p<i;p++){const f=p*r*c*l;for(let m=0;m<c;m++){const I=m*(r*l);for(let h=0;h<r;h++){const g=h*l;for(let k=0;k<l;k++){const b=Math.round(r-h-1),x=f+I+g+k;let S=d[x];if(b>=0&&b<r){const y=b*l,w=f+I+y+k;S=d[w]}o[x]=S}}}}return{dataId:e.write(o,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o,bias:i,preluActivationWeights:c}=s,{strides:r,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p,activation:f,leakyreluAlpha:m}=n;let I=io({inputs:{x:e,filter:o},backend:t,attrs:{strides:r,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p}});if(i){const h=I;if(d==="NCHW"&&i.shape.length===1&&i.shape[0]!==1){const g=st({inputs:{x:i},backend:t,attrs:{shape:[i.shape[0],1,1]}});I=Gt({inputs:{a:I,b:g},backend:t}),t.disposeIntermediateTensorInfo(g)}else I=Gt({inputs:{a:I,b:i},backend:t});t.disposeIntermediateTensorInfo(h)}if(f){const h=I;if(d==="NCHW"&&f==="prelu"&&c.shape.length===1&&c.shape[0]!==1){const g=st({inputs:{x:c},backend:t,attrs:{shape:[c.shape[0],1,1]}});I=ie(t,I,f,g,m),t.disposeIntermediateTensorInfo(g)}else I=ie(t,I,f,c,m);t.disposeIntermediateTensorInfo(h)}return I}const du={kernelName:yr,backendName:"cpu",kernelFunc:lu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,filter:o,bias:i,preluActivationWeights:c}=s,{strides:r,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p,activation:f,leakyreluAlpha:m}=n;let I=co({inputs:{x:e,filter:o},backend:t,attrs:{strides:r,pad:l,dataFormat:d,dilations:u,dimRoundingMode:p}});if(i){const h=I;I=Gt({inputs:{a:I,b:i},backend:t}),t.disposeIntermediateTensorInfo(h)}if(f){const h=I;I=ie(t,I,f,c,m),t.disposeIntermediateTensorInfo(h)}return I}const pu={kernelName:wr,backendName:"cpu",kernelFunc:uu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fu(a){const{inputs:s,backend:t}=a,{params:n,indices:e}=s,o=G(n.shape),i=e.shape,c=i[i.length-1],[r,l,d,u]=Cr(n,e);if(l===0)return t.makeTensorInfo(r,n.dtype,[]);const p=t.data.get(e.dataId).values,f=t.bufferSync(n),m=xs(p,f,n.dtype,l,c,d,u,n.shape,o);return t.makeTensorInfo(r,n.dtype,m.values)}const hu={kernelName:Nr,backendName:"cpu",kernelFunc:fu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function mu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,indices:o}=s,{axis:i,batchDims:c}=n;q([e,o],"gatherV2");const r=mt(i,e.shape)[0],l=t.data.get(o.dataId).values,d=e.shape[r];for(let x=0;x<l.length;++x){const S=l[x];ut(S<=d-1&&S>=0,()=>`GatherV2: the index value ${S} is not in [0, ${d-1}]`)}let u=c;c==null&&(u=0);const p=G(o.shape),f=Tr(e,o,r,u),m=st({inputs:{x:e},backend:t,attrs:{shape:[f.batchSize,f.outerSize,f.dimSize,f.sliceSize]}}),I=st({inputs:{x:o},backend:t,attrs:{shape:[f.batchSize,p/f.batchSize]}}),h=[f.batchSize,f.outerSize,p/f.batchSize,f.sliceSize],g=t.bufferSync(I),k=t.bufferSync(m),b=bs(k,g,h);return t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(I),t.makeTensorInfo(f.outputShape,b.dtype,b.values)}const gu={kernelName:vr,backendName:"cpu",kernelFunc:mu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Iu(a){const{inputs:s,backend:t}=a,{input:n}=s,e=G(n.shape),o=n.shape[n.shape.length-1],i=e/o,c=st({inputs:{x:n},backend:t,attrs:{shape:[i,o]}}),r=lo(c,!0,t),l=st({inputs:{x:r},backend:t,attrs:{shape:n.shape}});return t.disposeIntermediateTensorInfo(c),t.disposeIntermediateTensorInfo(r),l}const ku={kernelName:Mr,backendName:"cpu",kernelFunc:Iu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const xu=Q(Hn,a=>Number.isFinite(a)?1:0,"bool"),bu={kernelName:Hn,backendName:"cpu",kernelFunc:xu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Su=Q(Ln,a=>Math.abs(a)===1/0?1:0,"bool"),yu={kernelName:Ln,backendName:"cpu",kernelFunc:Su};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const wu=Q(Bn,a=>Number.isNaN(a)?1:0,"bool"),Nu={kernelName:Bn,backendName:"cpu",kernelFunc:wu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Cu(a){const{backend:s,attrs:t}=a,{start:n,stop:e,num:o}=t,i=Cs(n,e,o);return s.makeTensorInfo([i.length],"float32",i)}const vu={kernelName:Rr,backendName:"cpu",kernelFunc:Cu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Tu=Q(Gn,a=>Math.log1p(a)),Mu={kernelName:Gn,backendName:"cpu",kernelFunc:Tu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Ru=it((a,s)=>a&&s),Fu=ct(qn,Ru,null,"bool"),Du={kernelName:qn,backendName:"cpu",kernelFunc:Fu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Vu=Q(_n,a=>a?0:1,"bool"),Eu={kernelName:_n,backendName:"cpu",kernelFunc:Vu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Au=it((a,s)=>a||s),Ou=ct(jn,Au,null,"bool"),Wu={kernelName:jn,backendName:"cpu",kernelFunc:Ou};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{depthRadius:o,bias:i,alpha:c,beta:r}=n;q(e,"LRN");const l=e.shape[3],d=l-1,u=t.data.get(e.dataId).values,p=G(e.shape),f=new Float32Array(p);function m(I){const h=I%l;let g=I-h+Math.max(0,h-o);const k=I-h+Math.min(h+o,d);let b=0;for(;g<=k;g++){const x=u[g];b+=x*x}return b}for(let I=0;I<p;I++){const h=m(I),g=u[I]*Math.pow(i+c*h,-r);f[I]=g}return t.makeTensorInfo(e.shape,e.dtype,f)}const $u={kernelName:Fr,backendName:"cpu",kernelFunc:Pu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,y:o,dy:i}=s,{depthRadius:c,bias:r,alpha:l,beta:d}=n;q(i,"LRNGrad");const u=G(i.shape),p=i.shape[3],f=t.data.get(i.dataId).values,m=t.data.get(e.dataId).values,I=t.data.get(o.dataId).values,h=new Float32Array(u),g=u;for(let k=0;k<g;k++){const b=k%p,x=k-b+Math.max(0,b-c),S=k-b+Math.min(p,b+c+1);let y=0;for(let w=x;w<S;w++)y+=Math.pow(m[w],2);y=l*y+r;for(let w=x;w<S;w++){let N=-2*l*d*m[w]*I[k]/y;k===w&&(N+=Math.pow(y,-d)),N*=f[k],h[w]+=N}}return t.makeTensorInfo(i.shape,e.dtype,h)}const Hu={kernelName:Dr,backendName:"cpu",kernelFunc:zu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uo(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{reductionIndices:o,keepDims:i}=n,c=t;let r=e.shape;const l=r.length,d=mt(o,r);let u=d;const p=wt(u,l);let f=c.data.get(e.dataId).values;if(p!=null){const x=new Array(l);for(let S=0;S<x.length;S++)x[S]=r[p[S]];f=De(f,r,e.dtype,p,x),u=Nt(u.length,l),r=x}q(e,"max"),Ht("max",u,l);const[m,I]=Mt(r,u),h=G(I),g=Ts(f,h,m,e.dtype),k=c.write(g,m,e.dtype);let b=m;return i&&(b=zt(m,d)),{dataId:k,shape:b,dtype:e.dtype}}const Lu={kernelName:Vr,backendName:"cpu",kernelFunc:uo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s;q(e,"maxPool");const{filterSize:o,strides:i,pad:c,dimRoundingMode:r}=n,l=1;ut(Se(i,l),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${i} and dilations '${l}'`);const d=te(e.shape,o,i,l,c,r);let u;if(d.filterWidth===1&&d.filterHeight===1&&ye(d.inShape,d.outShape))u=yt({inputs:{x:e},backend:t});else{const p=t.data.get(e.dataId).values,f=K(e.shape),m=Ae(p,e.shape,e.dtype,f,d,"max");u=t.makeTensorInfo(d.outShape,e.dtype,m.values)}return u}const Gu={kernelName:Er,backendName:"cpu",kernelFunc:Bu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{filterSize:o,strides:i,pad:c,dimRoundingMode:r,dataFormat:l}=n;q(e,"maxPool3d");const d=pe(e.shape,o,i,1,c,r,l),u=t.data.get(e.dataId).values,p=ro(u,e.shape,e.dtype,K(e.shape),d,"max");return t.makeTensorInfo(p.shape,"float32",p.values)}const _u={kernelName:Ar,backendName:"cpu",kernelFunc:qu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ju(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o}=s,{filterSize:i,strides:c,pad:r,dimRoundingMode:l}=n;q([e,o],"maxPool3DGrad");const d=pe(o.shape,i,c,1,r,l),u=t.bufferSync(o),p=Al(u,d),f=d.strideDepth,m=d.strideHeight,I=d.strideWidth,h=d.dilationDepth,g=d.dilationHeight,k=d.dilationWidth,b=d.effectiveFilterDepth,x=d.effectiveFilterHeight,S=d.effectiveFilterWidth,y=b-1-d.padInfo.front,w=S-1-d.padInfo.left,N=x-1-d.padInfo.top,R=tt(o.shape,"float32"),F=t.bufferSync(e);for(let E=0;E<d.batchSize;++E)for(let O=0;O<d.inChannels;++O)for(let C=0;C<d.inDepth;++C)for(let D=0;D<d.inHeight;++D)for(let v=0;v<d.inWidth;++v){const T=C-y,A=D-N,M=v-w;let V=0;for(let P=0;P<b;P+=h){const W=(T+P)/f;if(!(W<0||W>=d.outDepth||Math.floor(W)!==W))for(let H=0;H<x;H+=g){const $=(A+H)/m;if(!($<0||$>=d.outHeight||Math.floor($)!==$))for(let L=0;L<S;L+=k){const z=(M+L)/I;if(z<0||z>=d.outWidth||Math.floor(z)!==z)continue;const B=b*x*S-1-p.get(E,W,$,z,O),_=P*x*S+H*S+L,U=B===_?1:0;if(U===0)continue;const j=F.get(E,W,$,z,O);V+=j*U}}}R.set(V,E,C,D,v,O)}return t.makeTensorInfo(R.shape,R.dtype,R.values)}const Uu={kernelName:Or,backendName:"cpu",kernelFunc:ju};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ku(a){const{inputs:s,backend:t,attrs:n}=a,{dy:e,input:o,output:i}=s,c=o;q([o,i],"maxPoolGrad");const{filterSize:r,strides:l,pad:d,dimRoundingMode:u}=n,p=te(c.shape,r,l,1,d,u),f=t.data.get(c.dataId).values,m=tt(p.outShape,c.dtype,ao(f,c.shape,c.dtype,p).values),I=p.strideHeight,h=p.strideWidth,g=p.dilationHeight,k=p.dilationWidth,b=p.effectiveFilterHeight,x=p.effectiveFilterWidth,S=x-1-p.padInfo.left,y=b-1-p.padInfo.top,w=tt(c.shape,"float32"),N=t.data.get(e.dataId).values,R=tt(e.shape,"float32",N);for(let F=0;F<p.batchSize;++F)for(let E=0;E<p.inChannels;++E)for(let O=0;O<p.inHeight;++O)for(let C=0;C<p.inWidth;++C){const D=O-y,v=C-S;let T=0;for(let A=0;A<b;A+=g){const M=(D+A)/I;if(!(M<0||M>=p.outHeight||Math.floor(M)!==M))for(let V=0;V<x;V+=k){const P=(v+V)/h;if(P<0||P>=p.outWidth||Math.floor(P)!==P)continue;const W=b*x-1-m.get(F,M,P,E),H=A*x+V,$=W===H?1:0;if($===0)continue;const L=R.get(F,M,P,E);T+=L*$}}w.set(T,F,O,C,E)}return t.makeTensorInfo(w.shape,w.dtype,w.values)}const Xu={kernelName:Wr,backendName:"cpu",kernelFunc:Ku};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Yu(a,s,t,n,e){const o=K(s),i=Ae(a,s,t,o,e,"max"),c=ao(a,s,t,e,!0,n);return[i.values,c.values]}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Zu={kernelName:Pr,backendName:"cpu",kernelFunc:({inputs:a,attrs:s,backend:t})=>{const{x:n}=a,{filterSize:e,strides:o,pad:i,includeBatchInIndex:c}=s,r=t;q(n,"MaxPoolWithArgmax");const l=r.data.get(n.dataId).values,d=te(n.shape,e,o,[1,1],i),[u,p]=Yu(l,n.shape,n.dtype,c,d),f=r.write(u,d.outShape,n.dtype),m=r.write(p,d.outShape,n.dtype);return[{dataId:f,shape:d.outShape,dtype:n.dtype},{dataId:m,shape:d.outShape,dtype:"int32"}]}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Qu(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:i}=n,c=mt(o,e.shape),l=Mt(e.shape,c)[1],d=G(l),u=[],p=t.makeTensorInfo([],"float32",new Float32Array([d]));u.push(p);const f=Et({inputs:{x:e},backend:t,attrs:{dtype:"float32"}});u.push(f);const m=Oe({inputs:{a:f,b:p},backend:t});u.push(m);const I=ee({inputs:{x:m},backend:t,attrs:{axis:o,keepDims:i}});return u.forEach(h=>t.disposeIntermediateTensorInfo(h)),I}const Ju={kernelName:$r,backendName:"cpu",kernelFunc:Qu};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function tp(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{axis:o,keepDims:i}=n;q(e,"min");const c=mt(o,e.shape);let r=c;const l=wt(r,e.shape.length);let d=e;l!=null&&(d=ht({inputs:{x:e},backend:t,attrs:{perm:l}}),r=Nt(r.length,e.shape.length)),Ht("min",r,d.shape.length);const[u,p]=Mt(d.shape,r),f=G(p),m=It(G(u),d.dtype),I=t.data.get(d.dataId).values;for(let g=0;g<m.length;++g){const k=g*f;let b=I[k];for(let x=0;x<f;++x){const S=I[k+x];(Number.isNaN(S)||S<b)&&(b=S)}m[g]=b}l!=null&&t.disposeIntermediateTensorInfo(d);const h=t.makeTensorInfo(u,d.dtype,m);if(i){const g=zt(u,c),k=st({inputs:{x:h},backend:t,attrs:{shape:g}});return t.disposeIntermediateTensorInfo(h),k}return h}const ep={kernelName:zr,backendName:"cpu",kernelFunc:tp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{paddings:o,mode:i}=n;q(e,"mirrorPad");const c=o.map((b,x)=>b[0]+e.shape[x]+b[1]),r=o.map(b=>b[0]),l=o.map((b,x)=>b[0]+e.shape[x]),d=i==="reflect"?0:1,u=t.data.get(e.dataId).values,p=e.shape.length,f=K(e.shape),m=G(c),I=c.length,h=K(c),g=ft(e.dtype,m);for(let b=0;b<m;b++){let x=jt(b,I,h);for(let y=0;y<I;y++)x[y]<r[y]?x[y]=r[y]*2-x[y]-d:x[y]>=l[y]&&(x[y]=(l[y]-1)*2-x[y]+d);x=x.map((y,w)=>y-r[w]);const S=St(x,p,f);g[b]=u[S]}return{dataId:t.write(g,c,e.dtype),shape:c,dtype:e.dtype}}const sp={kernelName:Hr,backendName:"cpu",kernelFunc:np};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const op=it((a,s)=>{const t=a%s;return a<0&&s<0||a>=0&&s>=0?t:(t+s)%s}),ap=ct(Un,op),rp={kernelName:Un,backendName:"cpu",kernelFunc:ap};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function po(a){const{inputs:s,backend:t,attrs:n}=a,{logits:e}=s,{dim:o}=n,i=e.shape.length;let c=o;if(c===-1&&(c=i-1),c!==i-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${i} and dim was ${c}`);const r=mt([c],e.shape),l=uo({inputs:{x:e},backend:t,attrs:{reductionIndices:r,keepDims:!1}}),d=zt(l.shape,r),u=st({inputs:{x:l},backend:t,attrs:{shape:d}}),p=Ee({inputs:{a:e,b:u},backend:t}),f=ms({inputs:{x:p},backend:t}),m=ee({inputs:{x:f},backend:t,attrs:{axis:r,keepDims:!1}}),I=st({inputs:{x:m},backend:t,attrs:{shape:d}}),h=Oe({inputs:{a:f,b:I},backend:t});return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(u),t.disposeIntermediateTensorInfo(p),t.disposeIntermediateTensorInfo(f),t.disposeIntermediateTensorInfo(m),t.disposeIntermediateTensorInfo(I),h}const ip={kernelName:Lr,backendName:"cpu",kernelFunc:po};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cp(a){const{inputs:s,backend:t,attrs:n}=a,{logits:e}=s,{numSamples:o,seed:i,normalized:c}=n;q(e,"multinomial");const r=c?e:po({inputs:{logits:e},backend:t,attrs:{dim:-1}}),l=r.shape[0],d=r.shape[1],u=t.data.get(r.dataId).values,p=[l,o],f=It(G(p),"int32");for(let m=0;m<l;++m){const I=m*d,h=new Float32Array(d-1);h[0]=u[I];for(let b=1;b<h.length;++b)h[b]=h[b-1]+u[I+b];const g=Gr.alea(i.toString()),k=m*o;for(let b=0;b<o;++b){const x=g();f[k+b]=h.length;for(let S=0;S<h.length;S++)if(x<h[S]){f[k+b]=S;break}}}return c||t.disposeIntermediateTensorInfo(r),t.makeTensorInfo(p,"int32",f)}const lp={kernelName:Br,backendName:"cpu",kernelFunc:cp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const dp=_r;function up(a){const{inputs:s,backend:t,attrs:n}=a,{boxes:e,scores:o}=s,{maxOutputSize:i,iouThreshold:c,scoreThreshold:r}=n;q(e,"NonMaxSuppression");const l=t.data.get(e.dataId).values,d=t.data.get(o.dataId).values,{selectedIndices:u}=dp(l,d,i,c,r);return t.makeTensorInfo([u.length],"int32",new Int32Array(u))}const pp={kernelName:qr,backendName:"cpu",kernelFunc:up};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fp=Ur;function hp(a){const{inputs:s,backend:t,attrs:n}=a,{boxes:e,scores:o}=s,{maxOutputSize:i,iouThreshold:c,scoreThreshold:r,padToMaxOutputSize:l}=n;q(e,"NonMaxSuppressionPadded");const d=t.data.get(e.dataId).values,u=t.data.get(o.dataId).values,{selectedIndices:p,validOutputs:f}=fp(d,u,i,c,r,l);return[t.makeTensorInfo([p.length],"int32",new Int32Array(p)),t.makeTensorInfo([],"int32",new Int32Array([f]))]}const mp={kernelName:jr,backendName:"cpu",kernelFunc:hp};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const gp=Xr;function Ip(a){const{inputs:s,backend:t,attrs:n}=a,{boxes:e,scores:o}=s,{maxOutputSize:i,iouThreshold:c,scoreThreshold:r,softNmsSigma:l}=n;q(e,"NonMaxSuppressionWithScore");const d=t.data.get(e.dataId).values,u=t.data.get(o.dataId).values,p=i,f=c,m=r,I=l,{selectedIndices:h,selectedScores:g}=gp(d,u,p,f,m,I);return[t.makeTensorInfo([h.length],"int32",new Int32Array(h)),t.makeTensorInfo([g.length],"float32",new Float32Array(g))]}const kp={kernelName:Kr,backendName:"cpu",kernelFunc:Ip};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function xp(a){const{inputs:s,backend:t,attrs:n}=a,{indices:e}=s,{dtype:o,depth:i,onValue:c,offValue:r}=n;q(e,"oneHot");const l=G(e.shape),d=new Float32Array(l*i);d.fill(r);const u=t.data.get(e.dataId).values;for(let p=0;p<l;++p)u[p]>=0&&u[p]<i&&(d[p*i+u[p]]=c);return t.makeTensorInfo([...e.shape,i],o,d)}const bp={kernelName:Yr,backendName:"cpu",kernelFunc:xp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function le(a){const{inputs:s,backend:t}=a,{x:n}=s;if(n.dtype==="string")throw new Error("zerosLike is not supported for string tensors");if(n.dtype==="complex64"){const e=Pt({inputs:{input:n},backend:t}),o=le({inputs:{x:e},backend:t}),i=qt({inputs:{input:n},backend:t}),c=le({inputs:{x:i},backend:t}),r=gt({inputs:{real:o,imag:c},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(c),r}else return We({backend:t,attrs:{shape:n.shape,value:0,dtype:n.dtype}})}const Sp={kernelName:Zr,backendName:"cpu",kernelFunc:le};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fo(a){const{inputs:s,backend:t}=a,{x:n}=s;if(n.dtype==="string")throw new Error("onesLike is not supported for string tensors");if(n.dtype==="complex64"){const e=Pt({inputs:{input:n},backend:t}),o=fo({inputs:{x:e},backend:t}),i=qt({inputs:{input:n},backend:t}),c=le({inputs:{x:i},backend:t}),r=gt({inputs:{real:o,imag:c},backend:t});return t.disposeIntermediateTensorInfo(e),t.disposeIntermediateTensorInfo(o),t.disposeIntermediateTensorInfo(i),t.disposeIntermediateTensorInfo(c),r}else return We({backend:t,attrs:{shape:n.shape,value:1,dtype:n.dtype}})}const yp={kernelName:Qr,backendName:"cpu",kernelFunc:fo};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ho(a){const{inputs:s,backend:t,attrs:n}=a,{axis:e}=n;if(s.length===1)return ce({inputs:{input:s[0]},backend:t,attrs:{dim:e}});const o=s[0].shape,i=s[0].dtype;s.forEach(d=>{ti(o,d.shape,"All tensors passed to stack must have matching shapes"),ut(i===d.dtype,()=>"All tensors passed to stack must have matching dtypes")});const c=[],r=s.map(d=>{const u=ce({inputs:{input:d},backend:t,attrs:{dim:e}});return c.push(u),u}),l=_t({inputs:r,backend:t,attrs:{axis:e}});return c.forEach(d=>t.disposeIntermediateTensorInfo(d)),l}const wp={kernelName:Jr,backendName:"cpu",kernelFunc:ho};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Np(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{paddings:o,constantValue:i}=n;q(e,"pad");const c=o.map((k,b)=>k[0]+e.shape[b]+k[1]),r=o.map(k=>k[0]),l=t.data.get(e.dataId).values,d=G(e.shape),u=e.shape.length,p=K(e.shape),f=G(c),m=c.length,I=K(c),h=ft(e.dtype,f);i!==0&&h.fill(i);for(let k=0;k<d;k++){const x=jt(k,u,p).map((y,w)=>y+r[w]),S=St(x,m,I);h[S]=l[k]}return{dataId:t.write(h,c,e.dtype),shape:c,dtype:e.dtype}}const mo={kernelName:ei,backendName:"cpu",kernelFunc:Np};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Cp=it((a,s)=>Math.pow(a,s)),vp=ct(Kn,Cp),Tp={kernelName:Kn,backendName:"cpu",kernelFunc:vp};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mp(a){const{inputs:s,backend:t,attrs:n}=a,{paramsNestedSplits:e,paramsDenseValues:o,indices:i}=s,{outputRaggedRank:c}=n,r=e.map(g=>t.data.get(g.dataId).values),l=e.map(g=>g.shape),d=t.data.get(o.dataId).values,u=t.data.get(i.dataId).values,[p,f,m]=Es(r,l,d,o.shape,o.dtype,u,i.shape),I=p.map(g=>t.makeTensorInfo([g.length],"int32",g)),h=t.makeTensorInfo(m,o.dtype,f);return I.concat([h])}const Rp={kernelName:ni,backendName:"cpu",kernelFunc:Mp};/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Fp(a){const{inputs:s,backend:t}=a,{starts:n,limits:e,deltas:o}=s,i=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,r=t.data.get(o.dataId).values,[l,d]=As(i,n.shape,n.dtype,c,e.shape,r,o.shape),u=t.makeTensorInfo([l.length],"int32",l),p=t.makeTensorInfo([d.length],n.dtype,d);return[u,p]}const Dp={kernelName:si,backendName:"cpu",kernelFunc:Fp};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vp(a){const{inputs:s,backend:t,attrs:n}=a,{shape:e,values:o,defaultValue:i,rowPartitionTensors:c}=s,{rowPartitionTypes:r}=n,l=t.data.get(e.dataId).values,d=t.data.get(o.dataId).values,u=t.data.get(i.dataId).values,p=c.map(h=>t.data.get(h.dataId).values),f=c.map(h=>h.shape),[m,I]=Os(l,e.shape,d,o.shape,o.dtype,u,i.shape,p,f,r);return t.makeTensorInfo(m,o.dtype,I)}const Ep={kernelName:oi,backendName:"cpu",kernelFunc:Vp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ap(a){const{backend:s,attrs:t}=a,{start:n,stop:e,dtype:o,step:i}=t,c=Ws(n,e,i,o);return s.makeTensorInfo([c.length],o,c)}const Op={kernelName:ai,backendName:"cpu",kernelFunc:Ap};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Wp=Q(Xn,a=>1/a),Pp={kernelName:Xn,backendName:"cpu",kernelFunc:Wp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function $p(a){const{inputs:s,backend:t,attrs:n}=a,{images:e}=s,{alignCorners:o,halfPixelCenters:i,size:c}=n;q(e,"resizeBilinear");const r=K(e.shape),[l,d]=c,[u,p,f,m]=e.shape,I=t.data.get(e.dataId).values,h=new Float32Array(G([u,l,d,m])),g=[o&&l>1?p-1:p,o&&d>1?f-1:f],k=[o&&l>1?l-1:l,o&&d>1?d-1:d];let b=0;const x=g[0]/k[0],S=g[1]/k[1];for(let y=0;y<u;y++)for(let w=0;w<l;w++){let N;i?N=x*(w+.5)-.5:N=x*w;const R=Math.max(0,Math.floor(N)),F=N-R,E=Math.min(p-1,Math.ceil(N)),O=y*r[0]+R*r[1],C=y*r[0]+E*r[1];for(let D=0;D<d;D++){let v;i?v=S*(D+.5)-.5:v=S*D;const T=Math.max(0,Math.floor(v)),A=v-T,M=Math.min(f-1,Math.ceil(v)),V=O+T*r[2],P=C+T*r[2],W=O+M*r[2],H=C+M*r[2];for(let $=0;$<m;$++){const L=I[V+$],z=I[P+$],B=I[W+$],_=I[H+$],U=L+(B-L)*A,j=z+(_-z)*A,X=U+(j-U)*F;h[b++]=X}}}return t.makeTensorInfo([u,l,d,m],"float32",h)}const zp={kernelName:ri,backendName:"cpu",kernelFunc:$p};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Hp(a){const{inputs:s,backend:t,attrs:n}=a,{images:e,dy:o}=s,{alignCorners:i}=n;q([o,e],"resizeBilinearGrad");const c=K(e.shape),[r,l,d,u]=e.shape,[,p,f]=o.shape,m=new Float32Array(r*l*d*u),I=[i&&p>1?l-1:l,i&&f>1?d-1:d],h=[i&&p>1?p-1:p,i&&f>1?f-1:f],g=I[0]/h[0],k=I[1]/h[1],b=t.data.get(o.dataId).values;let x=0;for(let S=0;S<r;S++){const y=S*c[0];for(let w=0;w<p;w++){const N=w*g,R=Math.floor(N),F=Math.min(Math.ceil(N),l-1),E=y+R*c[1],O=y+F*c[1],C=N-R,D=1-C;for(let v=0;v<f;v++){const T=v*k,A=Math.floor(T),M=Math.min(Math.ceil(T),d-1),V=T-A,P=1-V,W=E+A*c[2],H=E+M*c[2],$=O+A*c[2],L=O+M*c[2],z=D*P,B=D*V,_=C*P,U=C*V;for(let j=0;j<u;j++){const X=b[x++];m[W+j]+=X*z,m[H+j]+=X*B,m[$+j]+=X*_,m[L+j]+=X*U}}}}return t.makeTensorInfo([r,d,l,u],"float32",m)}const Lp={kernelName:ii,backendName:"cpu",kernelFunc:Hp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Bp(a){const{inputs:s,backend:t,attrs:n}=a,{images:e}=s,{alignCorners:o,halfPixelCenters:i,size:c}=n;q(e,"resizeNearestNeighbor");const r=K(e.shape),[l,d]=c,[u,p,f,m]=e.shape,I=t.data.get(e.dataId).values,h=new Float32Array(u*l*d*m),g=[o&&l>1?p-1:p,o&&d>1?f-1:f],k=[o&&l>1?l-1:l,o&&d>1?d-1:d],b=g[0]/k[0],x=g[1]/k[1];let S=0;for(let y=0;y<u;y++){const w=y*r[0];for(let N=0;N<l;N++){const R=i?b*(N+.5):b*N;let F=Math.min(p-1,o?Math.round(R):Math.floor(R));i&&(F=Math.max(0,F));const E=w+F*r[1];for(let O=0;O<d;O++){const C=i?x*(O+.5):x*O;let D=Math.min(f-1,o?Math.round(C):Math.floor(C));i&&(D=Math.max(0,D));const v=E+D*r[2];for(let T=0;T<m;T++){const A=I[v+T];h[S++]=A}}}}return t.makeTensorInfo([u,l,d,m],e.dtype,h)}const Gp={kernelName:ci,backendName:"cpu",kernelFunc:Bp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function qp(a){const{inputs:s,backend:t,attrs:n}=a,{images:e,dy:o}=s,{alignCorners:i}=n;q([o,e],"resizeNearestNeighborGrad");const c=K(e.shape),r=K(o.shape),[l,d,u,p]=e.shape,[,f,m]=o.shape,I=new Float32Array(l*d*u*p),h=t.data.get(o.dataId).values,g=[i&&f>1?d-1:d,i&&m>1?u-1:u],k=[i&&f>1?f-1:f,i&&m>1?m-1:m],b=g[0]/k[0],x=g[1]/k[1],S=1/b,y=1/x,w=Math.ceil(S)*2+2,N=Math.ceil(y)*2+2;for(let R=0;R<l;R++){const F=R*c[0];for(let E=0;E<d;E++){const O=F+E*c[1],C=Math.floor(E*S),D=Math.floor(C-w/2);for(let v=0;v<u;v++){const T=O+v*c[2],A=Math.floor(v*y),M=Math.floor(A-N/2);for(let V=0;V<p;V++){let P=0;for(let W=0;W<w;W++){const H=W+D;if(H<0||H>=f)continue;const $=F+H*r[1],L=H*b,z=Math.min(d-1,i?Math.round(L):Math.floor(L));if(E===z)for(let B=0;B<N;B++){const _=B+M;if(_<0||_>=m)continue;const U=$+_*r[2],j=_*x,X=Math.min(u-1,i?Math.round(j):Math.floor(j));v===X&&(P+=h[U+V])}}I[T+V]=P}}}}return t.makeTensorInfo(e.shape,e.dtype,I)}const _p={kernelName:li,backendName:"cpu",kernelFunc:qp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function jp(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{dims:o}=n;q(e,"reverse");const i=e.shape.length,c=mt(o,e.shape);if(i===0)return yt({inputs:{x:e},backend:t});const r=new pt(e.shape,e.dtype),l=t.bufferSync(e);for(let d=0;d<r.size;d++){const u=r.indexToLoc(d),p=u.slice();c.forEach(f=>p[f]=e.shape[f]-1-p[f]),r.set(l.get(...p),...u)}return t.makeTensorInfo(r.shape,r.dtype,r.values)}const Up={kernelName:di,backendName:"cpu",kernelFunc:jp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Kp={kernelName:ui,backendName:"cpu",kernelFunc:({inputs:a,attrs:s,backend:t})=>{const{image:n}=a,{radians:e,fillValue:o,center:i}=s,c=t,r=ft(n.dtype,G(n.shape)),[l,d,u,p]=n.shape,[f,m]=pi(i,d,u),I=255,h=Math.sin(e),g=Math.cos(e),k=c.data.get(n.dataId).values;for(let x=0;x<l;x++){const S=x*u*d*p;for(let y=0;y<d;y++){const w=y*(u*p);for(let N=0;N<u;N++){const R=N*p;for(let F=0;F<p;F++){const E=[l,y,N,F],O=E[2],C=E[1];let D=(O-f)*g-(C-m)*h,v=(O-f)*h+(C-m)*g;D=Math.round(D+f),v=Math.round(v+m);let T=o;if(typeof o!="number"&&(F===3?T=I:T=o[F]),D>=0&&D<u&&v>=0&&v<d){const M=v*(u*p),V=D*p,P=S+M+V+F;T=k[P]}const A=S+w+R+F;r[A]=T}}}}return{dataId:c.write(r,n.shape,n.dtype),shape:n.shape,dtype:n.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Xp=Q(Yn,a=>{const s=Math.floor(a);return a-s<.5?Math.floor(a):a-s>.5?Math.ceil(a):s%2===0?s:s+1}),Yp={kernelName:Yn,backendName:"cpu",kernelFunc:Xp};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zp(a){const{inputs:s,backend:t,attrs:n}=a,{indices:e,updates:o}=s,{shape:i}=n,{sliceRank:c,numUpdates:r,sliceSize:l,strides:d,outputSize:u}=ve(o,e,i),p=!0,f=t.bufferSync(e),m=t.bufferSync(o),I=Wt(f,m,i,u,l,r,c,d,0,p);return t.makeTensorInfo(i,I.dtype,I.values)}const Qp={kernelName:fi,backendName:"cpu",kernelFunc:Zp};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jp(a,s){let t=0,n=a.length,e=0;for(;t<n;)e=Math.floor((t+n)/2),a[e]<s?t=e+1:n=e;return n}function tf(a,s){let t=0,n=a.length,e=0;for(;t<n;)e=Math.floor((t+n)/2),a[e]<=s?t=e+1:n=e;return n}function ef(a,s,t,n,e,o){const i=lt("int32",t*e);for(let c=0;c<t;++c){const r=a.slice(c*n,(c+1)*n),l=c*e;for(let d=0;d<e;++d)i[l+d]=o==="left"?Jp(r,s[d+l]):tf(r,s[d+l])}return i}/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nf(a){const{inputs:s,backend:t,attrs:n}=a,{sortedSequence:e,values:o}=s,{side:i}=n,c=t.data.get(e.dataId).values,r=t.data.get(o.dataId).values,l=ef(c,r,e.shape[0],e.shape[1],o.shape[1],i);return t.makeTensorInfo(o.shape,"int32",l)}const sf={kernelName:hi,backendName:"cpu",kernelFunc:nf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function of(a){const{inputs:s,backend:t}=a,{condition:n,t:e,e:o}=s;q([n,e,o],"select");const i=n.shape.length,c=t.data.get(n.dataId).values,r=t.data.get(e.dataId).values,l=t.data.get(o.dataId).values,d=Jt(e.dtype,o.dtype),u=It(G(e.shape),d);let p=0;const f=i===0||i>1||e.shape.length===1?1:G(e.shape.slice(1));for(let m=0;m<c.length;m++)for(let I=0;I<f;I++)c[m]===1?u[p++]=r[m]:u[p++]=l[m];return t.makeTensorInfo(e.shape,d,u)}const af={kernelName:mi,backendName:"cpu",kernelFunc:of};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const rf=Ii,cf=gi,lf=Q(Zn,a=>a>=0?cf*a:rf*(Math.exp(a)-1)),df={kernelName:Zn,backendName:"cpu",kernelFunc:lf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const uf=Q(Qn,a=>a<0?-1:a>0?1:0),pf={kernelName:Qn,backendName:"cpu",kernelFunc:uf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const ff=Q(Jn,a=>Math.sin(a)),hf={kernelName:Jn,backendName:"cpu",kernelFunc:ff};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mf=Q(ts,a=>Math.sinh(a)),gf={kernelName:ts,backendName:"cpu",kernelFunc:mf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const If=11920928955078125e-23,je=Math.log(If)+2,kf=Q(es,a=>{const s=a>-je,t=a<je,n=Math.exp(a);let e;return t?e=n:s?e=a:e=Math.log(1+n),e}),xf={kernelName:es,backendName:"cpu",kernelFunc:kf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function bf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{blockShape:o,paddings:i}=n;q([e],"spaceToBatchND");const c=G(o),r=[[0,0]];r.push(...i);for(let y=1+o.length;y<e.shape.length;++y)r.push([0,0]);const l=mo.kernelFunc({inputs:{x:e},backend:t,attrs:{paddings:r,constantValue:0}}),d=Rn(l.shape,o,c,!1),u=Fn(d.length,o.length,!1),p=Dn(l.shape,o,c,!1),I=st({inputs:{x:l},backend:t,attrs:{shape:d}}),k=ht({inputs:{x:I},backend:t,attrs:{perm:u}}),S=st({inputs:{x:k},backend:t,attrs:{shape:p}});return t.disposeIntermediateTensorInfo(l),t.disposeIntermediateTensorInfo(I),t.disposeIntermediateTensorInfo(k),S}const Sf={kernelName:ki,backendName:"cpu",kernelFunc:bf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function yf(a){const{inputs:s,backend:t}=a,{indices:n,values:e,denseShape:o,defaultValue:i}=s;if(o.shape.length!==1)throw new Error(`Dense shape must be a vector, saw:
        ${o.shape}`);if(n.shape.length!==2)throw new Error(`Indices must be a matrix, saw:
        ${n.shape}`);if(e.shape.length!==1)throw new Error(`Values must be a vector, saw:
        ${e.shape}`);if(i.shape.length!==0)throw new Error(`Default value must be a scalar, saw:
        ${i.shape}`);const c=t.data.get(n.dataId).values,r=t.data.get(e.dataId).values,l=t.data.get(o.dataId).values,d=t.data.get(i.dataId).values[0],[u,p,f,m,I]=Hs(c,n.shape,n.dtype,r,e.dtype,l,d);return[t.makeTensorInfo(p,n.dtype,u),t.makeTensorInfo([p[0]],e.dtype,f),t.makeTensorInfo([m.length],"bool",new Uint8Array(m.map(h=>Number(h)))),t.makeTensorInfo([I.length],n.dtype,new Int32Array(I))]}const wf={kernelName:xi,backendName:"cpu",kernelFunc:yf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Nf(a){const{inputs:s,backend:t}=a,{inputIndices:n,inputShape:e,newShape:o}=s;if(n.shape.length!==2)throw new Error(`Input indices should be a matrix but received shape
        ${n.shape}`);if(e.shape.length!==1)throw new Error(`Input shape should be a vector but received shape
        ${e.shape}`);if(o.shape.length!==1)throw new Error(`Target shape should be a vector but received shape ${o.shape}`);const i=Array.from(t.data.get(e.dataId).values),c=t.data.get(n.dataId).values,r=Array.from(t.data.get(o.dataId).values),[l,d,u]=Ls(c,n.shape,n.dtype,i,r);return[t.makeTensorInfo(d,n.dtype,l),t.makeTensorInfo([u.length],o.dtype,new Int32Array(u))]}const Cf={kernelName:bi,backendName:"cpu",kernelFunc:Nf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function vf(a){const{inputs:s,backend:t}=a,{data:n,indices:e,segmentIds:o}=s;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(e.shape.length!==1)throw new Error(`Indices should be a vector but received shape
          ${e.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
          ${o.shape}`);if(e.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,r=t.data.get(o.dataId).values,[l,d]=Ve(i,n.shape,n.dtype,c,r,!0);return t.makeTensorInfo(d,n.dtype,l)}const Tf={kernelName:Si,backendName:"cpu",kernelFunc:vf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Mf(a){const{inputs:s,backend:t}=a,{data:n,indices:e,segmentIds:o}=s;if(n.shape.length<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(e.shape.length!==1)throw new Error(`Indices should be a vector but received shape
         ${e.shape}`);if(o.shape.length!==1)throw new Error(`Segment ids should be a vector but received shape
         ${o.shape}`);if(e.shape[0]!==o.shape[0])throw new Error("segmentIds and indices should have same size.");const i=t.data.get(n.dataId).values,c=t.data.get(e.dataId).values,r=t.data.get(o.dataId).values,[l,d]=Ve(i,n.shape,n.dtype,c,r);return t.makeTensorInfo(d,n.dtype,l)}const Rf={kernelName:yi,backendName:"cpu",kernelFunc:Mf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Ff(a){const{inputs:s,backend:t,attrs:n}=a,{sparseIndices:e,sparseValues:o,defaultValue:i}=s,{outputShape:c}=n,{sliceRank:r,numUpdates:l,sliceSize:d,strides:u,outputSize:p}=ve(o,e,c),f=!1,m=t.bufferSync(e);let I;switch(o.dtype){case"bool":{const h=t.bufferSync(o),g=!!t.data.get(i.dataId).values[0];I=Wt(m,h,c,p,d,l,r,u,g,f);break}case"float32":{const h=t.bufferSync(o),g=t.data.get(i.dataId).values[0];I=Wt(m,h,c,p,d,l,r,u,g,f);break}case"int32":{const h=t.bufferSync(o),g=t.data.get(i.dataId).values[0];I=Wt(m,h,c,p,d,l,r,u,g,f);break}case"string":{const h=t.bufferSync(o),g=Ke(t.data.get(i.dataId).values[0]);I=Wt(m,h,c,p,d,l,r,u,g,f);break}default:throw new Error(`Unsupported type ${o.dtype}`)}return t.makeTensorInfo(c,I.dtype,I.values)}const Df={kernelName:wi,backendName:"cpu",kernelFunc:Ff};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Vf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{numOrSizeSplits:o,axis:i}=n,c=mt(i,e.shape)[0],r=Ci(e,o,c),l=new Array(e.shape.length).fill(0),d=e.shape.slice();return r.map(u=>{const p=[...d];p[c]=u;const f=$t({inputs:{x:e},backend:t,attrs:{begin:l,size:p}});return l[c]+=u,f})}const Ef={kernelName:Ni,backendName:"cpu",kernelFunc:Vf};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Af={kernelName:vi,backendName:"cpu",kernelFunc:({inputs:a,backend:s})=>{const{x:t}=a,n=s;q(t,"square");const e=n.data.get(t.dataId).values,o=new Float32Array(e.length);for(let c=0;c<e.length;++c){const r=e[c];o[c]=r*r}return{dataId:n.write(o,t.shape,t.dtype),shape:t.shape,dtype:t.dtype}}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Of=Q(ns,(a,s)=>{const t=s;return isNaN(a)?NaN:a>0?1:t.alpha}),Wf={kernelName:ns,backendName:"cpu",kernelFunc:Of};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Pf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{begin:o,end:i,strides:c,beginMask:r,endMask:l,ellipsisMask:d,newAxisMask:u,shrinkAxisMask:p}=n;q(e,"stridedSlice");const{finalShapeSparse:f,finalShape:m,isIdentity:I,sliceDim0:h,isSimpleSlice:g,begin:k,end:b,strides:x}=Mi(e.shape,o,i,c,r,l,d,u,p);let S;if(I)S=st({inputs:{x:e},backend:t,attrs:{shape:m}});else if(h||g){ut(e.shape.length>=1,()=>`Input must have rank at least 1, got: ${e.shape.length}`);const y=Ri(k,b,x),w=$t({inputs:{x:e},backend:t,attrs:{begin:k,size:y}});S=st({inputs:{x:w},backend:t,attrs:{shape:m}}),t.disposeIntermediateTensorInfo(w)}else{const y=t.bufferSync(e),w=qs(f,y,x,k);S=t.makeTensorInfo(m,w.dtype,w.values)}return S}const $f={kernelName:Ti,backendName:"cpu",kernelFunc:Pf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function zf(a){const{inputs:s,backend:t,attrs:n}=a,{separator:e,nGramWidths:o,leftPad:i,rightPad:c,padWidth:r,preserveShortSequences:l}=n,{data:d,dataSplits:u}=s,p=t.data.get(d.dataId).values,f=t.data.get(u.dataId).values,[m,I]=_s(p,f,e,o,i,c,r,l);return[t.makeTensorInfo([m.length],"string",m),t.makeTensorInfo(u.shape,"int32",I)]}const Hf={kernelName:Fi,backendName:"cpu",kernelFunc:zf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Lf(a){const{inputs:s,backend:t,attrs:n}=a,{skipEmpty:e}=n,{input:o,delimiter:i}=s;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(o.shape.length!==1)throw new Error(`Input must be a vector, got shape: ${o.shape}`);if(i.shape.length!==0)throw new Error(`Delimiter must be a scalar, got shape: ${i.shape}`);const c=t.data.get(o.dataId).values,r=t.data.get(i.dataId).values[0],[l,d,u]=js(c,r,e),p=d.length;return[t.makeTensorInfo([p,2],"int32",l),t.makeTensorInfo([p],"string",d),t.makeTensorInfo([2],"int32",new Int32Array(u))]}const Bf={kernelName:Di,backendName:"cpu",kernelFunc:Lf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Gf(a){const{inputs:s,backend:t,attrs:n}=a,{numBuckets:e}=n,{input:o}=s;if(o.dtype!=="string")throw new Error("Input must be of datatype string");if(e<=0)throw new Error("Number of buckets must be at least 1");const i=t.data.get(o.dataId).values,c=Us(i,e);return t.makeTensorInfo(o.shape,"int32",c)}const qf={kernelName:Vi,backendName:"cpu",kernelFunc:Gf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const _f=Q(ss,a=>Math.tan(a)),jf={kernelName:ss,backendName:"cpu",kernelFunc:_f};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const Uf=Q(os,a=>Math.tanh(a)),Kf={kernelName:os,backendName:"cpu",kernelFunc:Uf};/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xf(a){const{inputs:s,backend:t}=a,{tensor:n,indices:e,updates:o}=s,{sliceRank:i,numUpdates:c,sliceSize:r,strides:l,outputSize:d}=ve(o,e,n.shape),u=!1,p=t.bufferSync(e),f=t.bufferSync(o),m=t.bufferSync(n),I=Wt(p,f,n.shape,d,r,c,i,l,m,u);return t.makeTensorInfo(n.shape,I.dtype,I.values)}const Yf={kernelName:Ei,backendName:"cpu",kernelFunc:Xf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Zf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{reps:o}=n;q(e,"tile");const i=Xs(t.bufferSync(e),o);return t.makeTensorInfo(i.shape,i.dtype,i.values)}const Qf={kernelName:Ai,backendName:"cpu",kernelFunc:Zf};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Jf(a){const{inputs:s,backend:t,attrs:n}=a,{x:e}=s,{k:o,sorted:i}=n;q(e,"topk");const c=t.data.get(e.dataId).values,[r,l]=Zs(c,e.shape,e.dtype,o,i);return[t.makeTensorInfo(r.shape,r.dtype,r.values),t.makeTensorInfo(l.shape,l.dtype,l.values)]}const th={kernelName:Oi,backendName:"cpu",kernelFunc:Jf};/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function eh(a){const{inputs:s,attrs:t,backend:n}=a,{image:e,transforms:o}=s,{interpolation:i,fillMode:c,fillValue:r,outputShape:l}=t,[d,u,p,f]=e.shape,[m,I]=l??[u,p],h=[d,m,I,f],g=K(e.shape),k=g[0],b=g[1],x=g[2],S=K(h),y=S[0],w=S[1],N=S[2],R=ft(e.dtype,G(h));R.fill(r);const F=n.data.get(e.dataId).values,E=n.data.get(o.dataId).values;for(let C=0;C<d;++C){const D=o.shape[0]===1?E:E.subarray(C*8,C*8+8);for(let v=0;v<m;++v)for(let T=0;T<I;++T)for(let A=0;A<f;++A){let M;const V=D[6]*T+D[7]*v+1;if(V===0)continue;const P=(D[0]*T+D[1]*v+D[2])/V,W=(D[3]*T+D[4]*v+D[5])/V,H=Ue(P,p,c),$=Ue(W,u,c);switch(i){case"nearest":M=ih(F,u,p,k,b,x,C,$,H,A,r);break;case"bilinear":M=ch(F,u,p,k,b,x,C,$,H,A,r);break;default:throw new Error(`Error in Transform: Expect 'nearest' or 'bilinear', but got ${i}`)}const L=C*y+v*w+T*N+A;R[L]=M}return n.makeTensorInfo(h,e.dtype,R)}return{dataId:n.write(R,h,e.dtype),shape:e.shape,dtype:e.dtype}}const nh={kernelName:Wi,backendName:"cpu",kernelFunc:eh};function Ue(a,s,t){switch(t){case"reflect":return sh(a,s);case"wrap":return oh(a,s);case"nearest":return rh(a,s);case"constant":default:return ah(a)}}function sh(a,s){let t=a;if(t<0)if(s<=1)t=0;else{const n=2*s;t<n&&(t=n*Math.trunc(-t/n)+t),t=t<-s?t+n:-t-1}else if(t>s-1)if(s<=1)t=0;else{const n=2*s;t-=n*Math.trunc(t/n),t>=s&&(t=n-t-1)}return Te(0,t,s-1)}function oh(a,s){let t=a;if(t<0)if(s<=1)t=0;else{const n=s-1;t+=s*(Math.trunc(-t/n)+1)}else if(t>s-1)if(s<=1)t=0;else{const n=s-1;t-=s*Math.trunc(t/n)}return Te(0,t,s-1)}function ah(a,s){return a}function rh(a,s){return Te(0,a,s-1)}function Zt(a,s,t,n,e,o,i,c,r,l,d){const u=i*n+c*e+r*o+l;return 0<=c&&c<s&&0<=r&&r<t?a[u]:d}function ih(a,s,t,n,e,o,i,c,r,l,d){const u=Math.round(c),p=Math.round(r);return Zt(a,s,t,n,e,o,i,u,p,l,d)}function ch(a,s,t,n,e,o,i,c,r,l,d){const u=Math.floor(c),p=Math.floor(r),f=u+1,m=p+1,I=(m-r)*Zt(a,s,t,n,e,o,i,u,p,l,d)+(r-p)*Zt(a,s,t,n,e,o,i,u,m,l,d),h=(m-r)*Zt(a,s,t,n,e,o,i,f,p,l,d)+(r-p)*Zt(a,s,t,n,e,o,i,f,m,l,d);return(f-c)*I+(c-u)*h}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an AS IS BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lh(a){const{inputs:s,attrs:t,backend:n}=a,{axis:e}=t,{x:o}=s;q(o,"unique");const i=n.data.get(o.dataId).values,{outputValues:c,outputShape:r,indices:l}=Qs(i,e,o.shape,o.dtype);return[n.makeTensorInfo(r,o.dtype,c),n.makeTensorInfo([l.length],"int32",l)]}const dh={kernelName:Pi,backendName:"cpu",kernelFunc:lh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function uh(a){const{inputs:s,backend:t,attrs:n}=a,{value:e}=s;let{axis:o}=n;o<0&&(o+=e.shape.length);const i=e.shape.length,c=e.shape[o],r=new Array(i-1);let l=0;for(let f=0;f<i;f++)f!==o&&(r[l++]=e.shape[f]);const d=new Array(i).fill(0),u=e.shape.slice();u[o]=1;const p=new Array(c);for(let f=0;f<p.length;f++){d[o]=f;const m=$t({inputs:{x:e},backend:t,attrs:{begin:d,size:u}});p[f]=st({inputs:{x:m},backend:t,attrs:{shape:r}}),t.disposeIntermediateTensorInfo(m)}return p}const ph={kernelName:$i,backendName:"cpu",kernelFunc:uh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function fh(a){const{inputs:s,backend:t,attrs:n}=a,{x:e,segmentIds:o}=s,{numSegments:i}=n;q(e,"unsortedSegmentSum");const c=e.shape.length,r=o.shape.length,l=[],d=[],u=c-r;let p=o;for(let m=0;m<u;++m){const I=ce({inputs:{input:p},backend:t,attrs:{dim:m+1}});p=I,d.push(I)}for(let m=0;m<i;++m){const I=be(m,"int32"),h=t.makeTensorInfo([],"int32",I),g=fs({inputs:{a:h,b:p},backend:t}),k=Et({inputs:{x:g},backend:t,attrs:{dtype:"float32"}}),b=he({inputs:{a:k,b:e},backend:t}),x=ee({inputs:{x:b},backend:t,attrs:{axis:0,keepDims:!1}});l.push(x),d.push(h),d.push(g),d.push(k),d.push(b),d.push(x)}const f=ho({inputs:l,backend:t,attrs:{axis:0}});return d.forEach(m=>t.disposeIntermediateTensorInfo(m)),f}const hh={kernelName:zi,backendName:"cpu",kernelFunc:fh};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const mh=[cl,Gi,dl,pl,Xi,hl,gl,kl,bl,yl,Nl,vl,Ml,Dl,El,Wl,$l,Hl,Bl,rl,ql,jl,Kl,Zi,Yl,Ui,Ji,Ql,qi,td,nd,sd,ad,id,ld,ud,fd,md,Id,xd,Sd,wd,Cd,Td,Md,Fd,Vd,Ad,Od,Wd,Pd,zd,Bd,Jc,qd,tc,Qd,ec,Jd,sc,au,ru,cu,ac,ic,du,pu,hu,gu,lc,uc,_i,ku,ed,bu,yu,Nu,tl,fc,mc,vu,Ic,Mu,Du,Eu,Wu,$u,Hu,Lu,xc,Gu,_u,Uu,Xu,Zu,Ju,ep,Sc,sp,rp,lp,wc,Cc,pp,mp,kp,Tc,bp,yp,wp,mo,Tp,nl,Fc,Rp,Dp,Ep,Op,ji,ke,Pp,sl,ol,al,zp,Lp,Gp,_p,Up,Kp,Yp,$c,Qp,sf,af,df,Hc,pf,hf,gf,Lc,ip,xf,Sf,wf,Cf,Tf,Rf,Df,Ef,qc,Af,jc,Kc,Wf,$f,Hf,Bf,qf,Qc,Hd,jf,Kf,Yf,Qf,th,nh,Mc,dh,ph,hh,Sp];for(const a of mh)Hi(a);export{fe as MathBackendCPU,kh as shared,xh as version_cpu};
