import{a as Ou,c as fe,g as Lu}from"./index-DNMKKjB7.js";function Wu(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const r in s)if(r!=="default"&&!(r in e)){const o=Object.getOwnPropertyDescriptor(s,r);o&&Object.defineProperty(e,r,o.get?o:{enumerable:!0,get:()=>s[r]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}/**
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
 */const Uu=1e-7,qu=1e-4;class Gu{constructor(t,n){this.backend=t,this.dataMover=n,this.data=new WeakMap,this.dataIdsCount=0}get(t){return this.data.has(t)||this.dataMover.moveData(this.backend,t),this.data.get(t)}set(t,n){this.dataIdsCount++,this.data.set(t,n)}has(t){return this.data.has(t)}delete(t){return this.dataIdsCount--,this.data.delete(t)}numDataIds(){return this.dataIdsCount}}class Lr{refCount(t){return ht("refCount")}incRef(t){return ht("incRef")}timerAvailable(){return!0}time(t){return ht("time")}read(t){return ht("read")}readSync(t){return ht("readSync")}readToGPU(t,n){return ht("readToGPU")}numDataIds(){return ht("numDataIds")}disposeData(t,n){return ht("disposeData")}write(t,n,s){return ht("write")}move(t,n,s,r,o){return ht("move")}createTensorFromGPUData(t,n,s){return ht("createTensorFromGPUData")}memory(){return ht("memory")}floatPrecision(){return ht("floatPrecision")}epsilon(){return this.floatPrecision()===32?Uu:qu}dispose(){return ht("dispose")}}function ht(e){throw new Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
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
 */function Wr(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,t--,wn(e,t,n)}function zu(e,t){if(e.length!==t.length)throw new Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,s=0;for(;n>0;)s=Math.random()*n|0,n--,wn(e,n,s),wn(t,n,s)}function Ue(e,t,n){return Math.max(e,Math.min(t,n))}function Ku(e){return e%2===0?e:e+1}function wn(e,t,n){const s=e[t];e[t]=e[n],e[n]=s}function Vu(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function ju(e,t){const n=Math.random();return t*n+(1-n)*e}function Hu(e,t){let n=0;for(let s=0;s<e.length;s++){const r=Number(e[s])-Number(t[s]);n+=r*r}return n}function g(e,t){if(!e)throw new Error(typeof t=="string"?t:t())}function ct(e,t,n=""){g(Ct(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function de(e){g(e!=null,()=>"The input to the tensor constructor must be a non-null value.")}function W(e){if(e.length===0)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function Xu(e){return e.length===0}function Ur(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==null&&t[n]!==null&&e[n]!==t[n])return!1;return!0}function Ct(e,t){if(e===t)return!0;if(e==null||t==null||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function _e(e){return e%1===0}function Zu(e){if(Math.tanh!=null)return Math.tanh(e);if(e===1/0)return 1;if(e===-1/0)return-1;{const t=Math.exp(2*e);return(t-1)/(t+1)}}function Yu(e){const t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function Ju(e){const t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return Wr(t),t}function Oe(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function Qu(e,t=r=>0,n,s){return new Promise((r,o)=>{let a=0;const i=()=>{if(e()){r();return}a++;const c=t(a);if(n!=null&&a>=n){o();return}s!=null?s(i,c):setTimeout(i,c)};i()})}function tl(e,t){let n=1,s=-1;for(let o=0;o<e.length;++o)if(e[o]>=0)n*=e[o];else if(e[o]===-1){if(s!==-1)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${s} and dim ${o}`);s=o}else if(e[o]<0)throw Error(`Shapes can not be < 0. Found ${e[o]} at dim ${o}`);if(s===-1){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(n===0)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!==0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);const r=e.slice();return r[s]=t/n,r}function nn(e,t){const n=t.length;return e=e==null?t.map((s,r)=>r):[].concat(e),g(e.every(s=>s>=-n&&s<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),g(e.every(s=>_e(s)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(s=>s<0?n+s:s)}function qr(e,t){const n=[],s=[],r=t!=null&&Array.isArray(t)&&t.length===0,o=t==null||r?null:nn(t,e).sort();let a=0;for(let i=0;i<e.length;++i){if(o!=null){if(o[a]===i&&e[i]!==1)throw new Error(`Can't squeeze axis ${i} since its dim '${e[i]}' is not 1`);(o[a]==null||o[a]>i)&&e[i]===1&&(n.push(e[i]),s.push(i)),o[a]<=i&&a++}e[i]!==1&&(n.push(e[i]),s.push(i))}return{newShape:n,keptDims:s}}function Gr(e,t){return Ss(e,t)}function Ss(e,t){let n=null;if(e==null||e==="float32")n=new Float32Array(t);else if(e==="int32")n=new Int32Array(t);else if(e==="bool")n=new Uint8Array(t);else if(e==="string")n=new Array(t);else throw new Error(`Unknown data type ${e}`);return n}function zr(e,t){for(let n=0;n<e.length;n++){const s=e[n];if(isNaN(s)||!isFinite(s))throw Error(`A tensor of type ${t} being uploaded contains ${s}.`)}}function Kr(e){return e==="bool"||e==="complex64"||e==="float32"||e==="int32"||e==="string"}function el(e,t){return!(t==="complex64"||t==="float32"&&e!=="complex64"||t==="int32"&&e!=="float32"&&e!=="complex64"||t==="bool"&&e==="bool")}function yn(e){if(e==="float32"||e==="int32")return 4;if(e==="complex64")return 8;if(e==="bool")return 1;throw new Error(`Unknown dtype ${e}`)}function Vr(e){if(e==null)return 0;let t=0;return e.forEach(n=>t+=n.length),t}function qt(e){return typeof e=="string"||e instanceof String}function jr(e){return typeof e=="boolean"}function Hr(e){return typeof e=="number"}function sn(e){return Array.isArray(e)?sn(e[0]):e instanceof Float32Array?"float32":e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray?"int32":Hr(e)?"float32":qt(e)?"string":jr(e)?"bool":"float32"}function Vt(e){return!!(e&&e.constructor&&e.call&&e.apply)}function $n(e,t){for(let n=t;n<e;++n)if(e%n===0)return n;return e}function Fe(e){const t=e.length;if(t<2)return[];const n=new Array(t-1);n[t-2]=e[t-1];for(let s=t-3;s>=0;--s)n[s]=n[s+1]*e[s+1];return n}function Xr(e,t,n,s=!1){const r=new Array;if(t.length===1){const o=t[0]*(s?2:1);for(let a=0;a<o;a++)r[a]=n[e+a]}else{const o=t[0],a=t.slice(1),i=a.reduce((c,u)=>c*u)*(s?2:1);for(let c=0;c<o;c++)r[c]=Xr(e+c*i,a,n,s)}return r}function ke(e,t,n=!1){if(e.length===0)return t[0];const s=e.reduce((r,o)=>r*o)*(n?2:1);if(s===0)return[];if(s!==t.length)throw new Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return Xr(0,e,t,n)}function nl(e,t){if(Array.isArray(e))return e;if(t==="float32")return e instanceof Float32Array?e:new Float32Array(e);if(t==="int32")return e instanceof Int32Array?e:new Int32Array(e);if(t==="bool"||t==="string")return Uint8Array.from(new Int32Array(e));throw new Error(`Unknown dtype ${t}`)}function Ts(e,t){const n=Dn(e,t);for(let s=0;s<n.length;s++)n[s]=1;return n}function Dn(e,t){if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool")return new Uint8Array(e);throw new Error(`Unknown data type ${t}`)}function sl(e,t){const n=e.reduce((s,r)=>s*r,1);if(t==null||t==="float32")return ke(e,new Float32Array(n));if(t==="int32")return ke(e,new Int32Array(n));if(t==="bool")return ke(e,new Uint8Array(n));throw new Error(`Unknown data type ${t}`)}function pt(e){e.forEach(t=>{g(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function rl(e,t,n){if(t===0)return 0;if(t===1)return e[0];let s=e[e.length-1];for(let r=0;r<e.length-1;++r)s+=n[r]*e[r];return s}function ol(e,t,n){if(t===0)return[];if(t===1)return[e];const s=new Array(t);for(let r=0;r<s.length-1;++r)s[r]=Math.floor(e/n[r]),e-=s[r]*n[r];return s[s.length-1]=e,s}function Nn(e){return e&&e.then&&typeof e.then=="function"}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const wr="tfjsflags";class Zr{constructor(t){this.global=t,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=al,this.populateURLFlags()}setPlatform(t,n){this.platform!=null&&(R().getBool("IS_TEST")||R().getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${t}.`)),this.platformName=t,this.platform=n}registerFlag(t,n,s){if(this.flagRegistry[t]={evaluationFn:n,setHook:s},this.urlFlags[t]!=null){const r=this.urlFlags[t];R().getBool("IS_TEST")||R().getBool("PROD")||console.warn(`Setting feature override from URL ${t}: ${r}.`),this.set(t,r)}}async getAsync(t){return t in this.flags?this.flags[t]:(this.flags[t]=await this.evaluateFlag(t),this.flags[t])}get(t){if(t in this.flags)return this.flags[t];const n=this.evaluateFlag(t);if(Nn(n))throw new Error(`Flag ${t} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[t]=n,this.flags[t]}getNumber(t){return this.get(t)}getBool(t){return this.get(t)}getString(t){return this.get(t)}getFlags(){return this.flags}get features(){return this.flags}set(t,n){if(this.flagRegistry[t]==null)throw new Error(`Cannot set flag ${t} as it has not been registered.`);this.flags[t]=n,this.flagRegistry[t].setHook!=null&&this.flagRegistry[t].setHook(n)}evaluateFlag(t){if(this.flagRegistry[t]==null)throw new Error(`Cannot evaluate flag '${t}': no evaluation function found.`);return this.flagRegistry[t].evaluationFn()}setFlags(t){this.flags=Object.assign({},t)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(typeof this.global>"u"||typeof this.global.location>"u"||typeof this.global.location.search>"u")return;const t=this.getQueryParams(this.global.location.search);wr in t&&t[wr].split(",").forEach(s=>{const[r,o]=s.split(":");this.urlFlags[r]=cl(r,o)})}}function al(e){const t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(n,...s)=>(il(t,s[0],s[1]),s.join("="))),t}function il(e,t,n){e[decodeURIComponent(t)]=decodeURIComponent(n||"")}function cl(e,t){const n=t.toLowerCase();return n==="true"||n==="false"?n==="true":`${+n}`===n?+n:t}function R(){return Is}let Is=null;function ul(e){Is=e}/**
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
 */let jn;function Yr(){if(jn==null){let e;if(typeof window<"u")e=window;else if(typeof global<"u")e=global;else if(typeof process<"u")e=process;else if(typeof self<"u")e=self;else throw new Error("Could not find a global object");jn=e}return jn}function ll(){const e=Yr();return e._tfGlobals==null&&(e._tfGlobals=new Map),e._tfGlobals}function _s(e,t){const n=ll();if(n.has(e))return n.get(e);{const s=t();return n.set(e,s),n.get(e)}}const Jr="Abs",Qr="Acos",to="Acosh",As="Add",eo="AddN",no="All",so="Any",ro="ArgMax",oo="ArgMin",ao="Asin",io="Asinh",co="Atan",uo="Atanh",lo="Atan2",ho="AvgPool",hl="AvgPoolGrad",fo="AvgPool3D",fl="AvgPool3DGrad",po="BatchMatMul",go="BatchToSpaceND",mo="Bincount",bo="BitwiseAnd",dl="BroadcastTo",wo="BroadcastArgs",Ds="Cast",yo="Ceil",$o="ClipByValue",Eo="Complex",ko="ComplexAbs",xo="Concat",vo="Conv2D",So="Conv2DBackpropFilter",To="Conv2DBackpropInput",Io="Conv3D",pl="Conv3DBackpropFilterV2",_o="Conv3DBackpropInputV2",Ao="Cos",Do="Cosh",No="Cumprod",Mo="Cumsum",Fo="CropAndResize",Bo="DenseBincount",Ro="DepthToSpace",Co="DepthwiseConv2dNative",Po="DepthwiseConv2dNativeBackpropFilter",Oo="DepthwiseConv2dNativeBackpropInput",Lo="Diag",Wo="Dilation2D",gl="Dilation2DBackpropInput",ml="Dilation2DBackpropFilter",Ns="Draw",Uo="RealDiv",qo="Einsum",Go="Elu",bl="EluGrad",zo="Erf",Ko="Equal",Vo="Exp",jo="ExpandDims",Ho="Expm1",Xo="FFT",Zo="Fill",Yo="FlipLeftRight",Jo="Floor",Qo="FloorDiv",ta="FusedBatchNorm",ea="GatherV2",na="GatherNd",sa="Greater",ra="GreaterEqual",Ms="Identity",oa="IFFT",aa="Imag",ia="IsFinite",ca="IsInf",ua="IsNan",la="LeakyRelu",ha="Less",fa="LessEqual",da="LinSpace",pa="Log",ga="Log1p",ma="LogicalAnd",ba="LogicalNot",wa="LogicalOr",wl="LogicalXor",yl="LogSoftmax",$l="LowerBound",ya="LRN",El="LRNGrad",kl="MatrixBandPart",$a="Max",Ea="Maximum",ka="MaxPool",xl="MaxPoolGrad",xa="MaxPool3D",vl="MaxPool3DGrad",va="MaxPoolWithArgmax",Sa="Mean",Ta="Min",Ia="Minimum",_a="MirrorPad",Aa="Mod",Da="Multinomial",Na="Multiply",Ma="Neg",Fa="NotEqual",Ba="NonMaxSuppressionV3",Ra="NonMaxSuppressionV4",Ca="NonMaxSuppressionV5",Pa="OnesLike",Oa="OneHot",La="Pack",Wa="PadV2",Sl="Pool",Ua="Pow",qa="Prelu",Ga="Prod",za="RaggedGather",Ka="RaggedRange",Va="RaggedTensorToTensor",ja="Range",Ha="Real",Xa="Reciprocal",Za="Relu",Ya="Reshape",Ja="ResizeNearestNeighbor",Tl="ResizeNearestNeighborGrad",Qa="ResizeBilinear",Il="ResizeBilinearGrad",ti="Relu6",ei="Reverse",ni="Round",si="Rsqrt",ri="ScatterNd",oi="TensorScatterUpdate",ai="SearchSorted",ii="Select",ci="Selu",ui="Slice",li="Sin",hi="Sinh",fi="Sign",di="Sigmoid",pi="Softplus",gi="Sqrt",mi="Sum",bi="SpaceToBatchND",wi="SplitV",yi="Softmax",$i="SparseFillEmptyRows",Ei="SparseReshape",ki="SparseSegmentMean",xi="SparseSegmentSum",vi="SparseToDense",Si="SquaredDifference",_l="Square",Ti="StaticRegexReplace",Ii="StridedSlice",_i="StringNGrams",Ai="StringSplit",Di="StringToHashBucketFast",Ni="Sub",Mi="Tan",Fi="Tanh",Fs="Tile",Bi="TopK",Ri="Transform",pn="Transpose",Ci="Unique",Pi="Unpack",Oi="UnsortedSegmentSum",Al="UpperBound",Li="ZerosLike",Wi="Step",Qn="FromPixels",Ui="RotateWithOffset",ts="_FusedMatMul",es="FusedConv2D",ns="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Wt(...e){R().getBool("IS_TEST")||R().getBool("PROD")||console.warn(...e)}function Dl(...e){R().getBool("IS_TEST")||R().getBool("PROD")||console.log(...e)}/**
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
 */const Ae=_s("kernelRegistry",()=>new Map),qe=_s("gradRegistry",()=>new Map);function Ge(e,t){const n=Bs(e,t);return Ae.get(n)}function ss(e){return qe.get(e)}function En(e){const t=Ae.entries(),n=[];for(;;){const{done:s,value:r}=t.next();if(s)break;const[o,a]=r,[i]=o.split("_");i===e&&n.push(a)}return n}function qi(e){const{kernelName:t,backendName:n}=e,s=Bs(t,n);Ae.has(s)&&Wt(`The kernel '${t}' for backend '${n}' is already registered`),Ae.set(s,e)}function Nl(e){const{kernelName:t}=e;qe.has(t)&&R().getBool("DEBUG")&&Wt(`Overriding the gradient for '${t}'`),qe.set(t,e)}function Ml(e,t){const n=Bs(e,t);if(!Ae.has(n))throw new Error(`The kernel '${e}' for backend '${t}' is not registered`);Ae.delete(n)}function Fl(e){if(!qe.has(e))throw new Error(`The gradient '${e}' for backend is not registered`);qe.delete(e)}function Bl(e,t){En(e).forEach(s=>{const r=Object.assign({},s,{backendName:t});qi(r)})}function Bs(e,t){return`${t}_${e}`}/**
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
 */function Gi(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}var zi=V,yt=null;try{yt=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch{}function V(e,t,n){this.low=e|0,this.high=t|0,this.unsigned=!!n}V.prototype.__isLong__;Object.defineProperty(V.prototype,"__isLong__",{value:!0});function gt(e){return(e&&e.__isLong__)===!0}V.isLong=gt;var yr={},$r={};function pe(e,t){var n,s,r;return t?(e>>>=0,(r=0<=e&&e<256)&&(s=$r[e],s)?s:(n=j(e,(e|0)<0?-1:0,!0),r&&($r[e]=n),n)):(e|=0,(r=-128<=e&&e<128)&&(s=yr[e],s)?s:(n=j(e,e<0?-1:0,!1),r&&(yr[e]=n),n))}V.fromInt=pe;function $t(e,t){if(isNaN(e))return t?ee:Et;if(t){if(e<0)return ee;if(e>=Ki)return Hi}else{if(e<=-kr)return ft;if(e+1>=kr)return ji}return e<0?$t(-e,t).neg():j(e%De|0,e/De|0,t)}V.fromNumber=$t;function j(e,t,n){return new V(e,t,n)}V.fromBits=j;var kn=Math.pow;function Rs(e,t,n){if(e.length===0)throw Error("empty string");if(e==="NaN"||e==="Infinity"||e==="+Infinity"||e==="-Infinity")return Et;if(typeof t=="number"?(n=t,t=!1):t=!!t,n=n||10,n<2||36<n)throw RangeError("radix");var s;if((s=e.indexOf("-"))>0)throw Error("interior hyphen");if(s===0)return Rs(e.substring(1),t,n).neg();for(var r=$t(kn(n,8)),o=Et,a=0;a<e.length;a+=8){var i=Math.min(8,e.length-a),c=parseInt(e.substring(a,a+i),n);if(i<8){var u=$t(kn(n,i));o=o.mul(u).add($t(c))}else o=o.mul(r),o=o.add($t(c))}return o.unsigned=t,o}V.fromString=Rs;function Tt(e,t){return typeof e=="number"?$t(e,t):typeof e=="string"?Rs(e,t):j(e.low,e.high,typeof t=="boolean"?t:e.unsigned)}V.fromValue=Tt;var Er=65536,Rl=1<<24,De=Er*Er,Ki=De*De,kr=Ki/2,xr=pe(Rl),Et=pe(0);V.ZERO=Et;var ee=pe(0,!0);V.UZERO=ee;var Ee=pe(1);V.ONE=Ee;var Vi=pe(1,!0);V.UONE=Vi;var rs=pe(-1);V.NEG_ONE=rs;var ji=j(-1,2147483647,!1);V.MAX_VALUE=ji;var Hi=j(-1,-1,!0);V.MAX_UNSIGNED_VALUE=Hi;var ft=j(0,-2147483648,!1);V.MIN_VALUE=ft;var S=V.prototype;S.toInt=function(){return this.unsigned?this.low>>>0:this.low};S.toNumber=function(){return this.unsigned?(this.high>>>0)*De+(this.low>>>0):this.high*De+(this.low>>>0)};S.toString=function(t){if(t=t||10,t<2||36<t)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative())if(this.eq(ft)){var n=$t(t),s=this.div(n),r=s.mul(n).sub(this);return s.toString(t)+r.toInt().toString(t)}else return"-"+this.neg().toString(t);for(var o=$t(kn(t,6),this.unsigned),a=this,i="";;){var c=a.div(o),u=a.sub(c.mul(o)).toInt()>>>0,h=u.toString(t);if(a=c,a.isZero())return h+i;for(;h.length<6;)h="0"+h;i=""+h+i}};S.getHighBits=function(){return this.high};S.getHighBitsUnsigned=function(){return this.high>>>0};S.getLowBits=function(){return this.low};S.getLowBitsUnsigned=function(){return this.low>>>0};S.getNumBitsAbs=function(){if(this.isNegative())return this.eq(ft)?64:this.neg().getNumBitsAbs();for(var t=this.high!=0?this.high:this.low,n=31;n>0&&!(t&1<<n);n--);return this.high!=0?n+33:n+1};S.isZero=function(){return this.high===0&&this.low===0};S.eqz=S.isZero;S.isNegative=function(){return!this.unsigned&&this.high<0};S.isPositive=function(){return this.unsigned||this.high>=0};S.isOdd=function(){return(this.low&1)===1};S.isEven=function(){return(this.low&1)===0};S.equals=function(t){return gt(t)||(t=Tt(t)),this.unsigned!==t.unsigned&&this.high>>>31===1&&t.high>>>31===1?!1:this.high===t.high&&this.low===t.low};S.eq=S.equals;S.notEquals=function(t){return!this.eq(t)};S.neq=S.notEquals;S.ne=S.notEquals;S.lessThan=function(t){return this.comp(t)<0};S.lt=S.lessThan;S.lessThanOrEqual=function(t){return this.comp(t)<=0};S.lte=S.lessThanOrEqual;S.le=S.lessThanOrEqual;S.greaterThan=function(t){return this.comp(t)>0};S.gt=S.greaterThan;S.greaterThanOrEqual=function(t){return this.comp(t)>=0};S.gte=S.greaterThanOrEqual;S.ge=S.greaterThanOrEqual;S.compare=function(t){if(gt(t)||(t=Tt(t)),this.eq(t))return 0;var n=this.isNegative(),s=t.isNegative();return n&&!s?-1:!n&&s?1:this.unsigned?t.high>>>0>this.high>>>0||t.high===this.high&&t.low>>>0>this.low>>>0?-1:1:this.sub(t).isNegative()?-1:1};S.comp=S.compare;S.negate=function(){return!this.unsigned&&this.eq(ft)?ft:this.not().add(Ee)};S.neg=S.negate;S.add=function(t){gt(t)||(t=Tt(t));var n=this.high>>>16,s=this.high&65535,r=this.low>>>16,o=this.low&65535,a=t.high>>>16,i=t.high&65535,c=t.low>>>16,u=t.low&65535,h=0,l=0,f=0,p=0;return p+=o+u,f+=p>>>16,p&=65535,f+=r+c,l+=f>>>16,f&=65535,l+=s+i,h+=l>>>16,l&=65535,h+=n+a,h&=65535,j(f<<16|p,h<<16|l,this.unsigned)};S.subtract=function(t){return gt(t)||(t=Tt(t)),this.add(t.neg())};S.sub=S.subtract;S.multiply=function(t){if(this.isZero())return Et;if(gt(t)||(t=Tt(t)),yt){var n=yt.mul(this.low,this.high,t.low,t.high);return j(n,yt.get_high(),this.unsigned)}if(t.isZero())return Et;if(this.eq(ft))return t.isOdd()?ft:Et;if(t.eq(ft))return this.isOdd()?ft:Et;if(this.isNegative())return t.isNegative()?this.neg().mul(t.neg()):this.neg().mul(t).neg();if(t.isNegative())return this.mul(t.neg()).neg();if(this.lt(xr)&&t.lt(xr))return $t(this.toNumber()*t.toNumber(),this.unsigned);var s=this.high>>>16,r=this.high&65535,o=this.low>>>16,a=this.low&65535,i=t.high>>>16,c=t.high&65535,u=t.low>>>16,h=t.low&65535,l=0,f=0,p=0,w=0;return w+=a*h,p+=w>>>16,w&=65535,p+=o*h,f+=p>>>16,p&=65535,p+=a*u,f+=p>>>16,p&=65535,f+=r*h,l+=f>>>16,f&=65535,f+=o*u,l+=f>>>16,f&=65535,f+=a*c,l+=f>>>16,f&=65535,l+=s*h+r*u+o*c+a*i,l&=65535,j(p<<16|w,l<<16|f,this.unsigned)};S.mul=S.multiply;S.divide=function(t){if(gt(t)||(t=Tt(t)),t.isZero())throw Error("division by zero");if(yt){if(!this.unsigned&&this.high===-2147483648&&t.low===-1&&t.high===-1)return this;var n=(this.unsigned?yt.div_u:yt.div_s)(this.low,this.high,t.low,t.high);return j(n,yt.get_high(),this.unsigned)}if(this.isZero())return this.unsigned?ee:Et;var s,r,o;if(this.unsigned){if(t.unsigned||(t=t.toUnsigned()),t.gt(this))return ee;if(t.gt(this.shru(1)))return Vi;o=ee}else{if(this.eq(ft)){if(t.eq(Ee)||t.eq(rs))return ft;if(t.eq(ft))return Ee;var a=this.shr(1);return s=a.div(t).shl(1),s.eq(Et)?t.isNegative()?Ee:rs:(r=this.sub(t.mul(s)),o=s.add(r.div(t)),o)}else if(t.eq(ft))return this.unsigned?ee:Et;if(this.isNegative())return t.isNegative()?this.neg().div(t.neg()):this.neg().div(t).neg();if(t.isNegative())return this.div(t.neg()).neg();o=Et}for(r=this;r.gte(t);){s=Math.max(1,Math.floor(r.toNumber()/t.toNumber()));for(var i=Math.ceil(Math.log(s)/Math.LN2),c=i<=48?1:kn(2,i-48),u=$t(s),h=u.mul(t);h.isNegative()||h.gt(r);)s-=c,u=$t(s,this.unsigned),h=u.mul(t);u.isZero()&&(u=Ee),o=o.add(u),r=r.sub(h)}return o};S.div=S.divide;S.modulo=function(t){if(gt(t)||(t=Tt(t)),yt){var n=(this.unsigned?yt.rem_u:yt.rem_s)(this.low,this.high,t.low,t.high);return j(n,yt.get_high(),this.unsigned)}return this.sub(this.div(t).mul(t))};S.mod=S.modulo;S.rem=S.modulo;S.not=function(){return j(~this.low,~this.high,this.unsigned)};S.and=function(t){return gt(t)||(t=Tt(t)),j(this.low&t.low,this.high&t.high,this.unsigned)};S.or=function(t){return gt(t)||(t=Tt(t)),j(this.low|t.low,this.high|t.high,this.unsigned)};S.xor=function(t){return gt(t)||(t=Tt(t)),j(this.low^t.low,this.high^t.high,this.unsigned)};S.shiftLeft=function(t){return gt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?j(this.low<<t,this.high<<t|this.low>>>32-t,this.unsigned):j(0,this.low<<t-32,this.unsigned)};S.shl=S.shiftLeft;S.shiftRight=function(t){return gt(t)&&(t=t.toInt()),(t&=63)===0?this:t<32?j(this.low>>>t|this.high<<32-t,this.high>>t,this.unsigned):j(this.high>>t-32,this.high>=0?0:-1,this.unsigned)};S.shr=S.shiftRight;S.shiftRightUnsigned=function(t){if(gt(t)&&(t=t.toInt()),t&=63,t===0)return this;var n=this.high;if(t<32){var s=this.low;return j(s>>>t|n<<32-t,n>>>t,this.unsigned)}else return t===32?j(n,0,this.unsigned):j(n>>>t-32,0,this.unsigned)};S.shru=S.shiftRightUnsigned;S.shr_u=S.shiftRightUnsigned;S.toSigned=function(){return this.unsigned?j(this.low,this.high,!1):this};S.toUnsigned=function(){return this.unsigned?this:j(this.low,this.high,!0)};S.toBytes=function(t){return t?this.toBytesLE():this.toBytesBE()};S.toBytesLE=function(){var t=this.high,n=this.low;return[n&255,n>>>8&255,n>>>16&255,n>>>24,t&255,t>>>8&255,t>>>16&255,t>>>24]};S.toBytesBE=function(){var t=this.high,n=this.low;return[t>>>24,t>>>16&255,t>>>8&255,t&255,n>>>24,n>>>16&255,n>>>8&255,n&255]};V.fromBytes=function(t,n,s){return s?V.fromBytesLE(t,n):V.fromBytesBE(t,n)};V.fromBytesLE=function(t,n){return new V(t[0]|t[1]<<8|t[2]<<16|t[3]<<24,t[4]|t[5]<<8|t[6]<<16|t[7]<<24,n)};V.fromBytesBE=function(t,n){return new V(t[4]<<24|t[5]<<16|t[6]<<8|t[7],t[0]<<24|t[1]<<16|t[2]<<8|t[3],n)};const Xi=Ou(zi),Cl=Wu({__proto__:null,default:Xi},[zi]);/**
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
 */const te=Xi||Cl;function rn(e){return te.fromString(e,!0,16)}const Zi=rn("c3a5c85c97cb3127"),Qt=rn("b492b66fbe98f273"),at=rn("9ae16a3b2f90404f");function os(e){return e.xor(e.shru(47))}function Yi(e,t,n){const s=e.slice(t,t+n);return te.fromBytes(Array.from(s),!0,!0)}function G(e,t){return Yi(e,t,8)}function vr(e,t){return Yi(e,t,4)}function st(e,t){return t===0?e:e.shru(t).or(e.shl(64-t))}function zt(e,t,n=rn("9ddfea08eb382d69")){let s=e.xor(t).mul(n);s=s.xor(s.shru(47));let r=t.xor(s).mul(n);return r=r.xor(r.shru(47)),r=r.mul(n),r}function Pl(e,t,n,s,r,o){r=r.add(e),o=st(o.add(r).add(s),21);const a=r;return r=r.add(t),r=r.add(n),o=o.add(st(r,44)),[r.add(s),o.add(a)]}function fn(e,t,n,s){return Pl(G(e,t),G(e,t+8),G(e,t+16),G(e,t+24),n,s)}function Ol(e,t=e.length){if(t>=8){const n=at.add(t*2),s=G(e,0).add(at),r=G(e,t-8),o=st(r,37).mul(n).add(s),a=st(s,25).add(r).mul(n);return zt(o,a,n)}if(t>=4){const n=at.add(t*2),s=vr(e,0);return zt(s.shl(3).add(t),vr(e,t-4),n)}if(t>0){const n=e[0],s=e[t>>1],r=e[t-1],o=n+(s<<8),a=t+(r<<2);return os(at.mul(o).xor(Zi.mul(a))).mul(at)}return at}function Ll(e,t=e.length){const n=at.add(t*2),s=G(e,0).mul(Qt),r=G(e,8),o=G(e,t-8).mul(n),a=G(e,t-16).mul(at);return zt(st(s.add(r),43).add(st(o,30)).add(a),s.add(st(r.add(at),18)).add(o),n)}function Wl(e,t=e.length){const n=at.add(t*2),s=G(e,0).mul(at),r=G(e,8),o=G(e,t-8).mul(n),a=G(e,t-16).mul(at),i=st(s.add(r),43).add(st(o,30)).add(a),c=zt(i,s.add(st(r.add(at),18)).add(o),n),u=G(e,16).mul(n),h=G(e,24),l=i.add(G(e,t-32)).mul(n),f=c.add(G(e,t-24)).mul(n);return zt(st(u.add(h),43).add(st(l,30)).add(f),u.add(st(h.add(s),18)).add(l),n)}function Ul(e,t=e.length){const n=te.fromNumber(81,!0);if(t<=32)return t<=16?Ol(e,t):Ll(e,t);if(t<=64)return Wl(e,t);let s=n,r=n.mul(Qt).add(113),o=os(r.mul(at).add(113)).mul(at),a=[te.UZERO,te.UZERO],i=[te.UZERO,te.UZERO];s=s.mul(at).add(G(e,0));let c=0;const u=(t-1>>6)*64,h=u+(t-1&63)-63;do s=st(s.add(r).add(a[0]).add(G(e,c+8)),37).mul(Qt),r=st(r.add(a[1]).add(G(e,c+48)),42).mul(Qt),s=s.xor(i[1]),r=r.add(a[0]).add(G(e,c+40)),o=st(o.add(i[0]),33).mul(Qt),a=fn(e,c,a[1].mul(Qt),s.add(i[0])),i=fn(e,c+32,o.add(i[1]),r.add(G(e,c+16))),[o,s]=[s,o],c+=64;while(c!==u);const l=Qt.add(o.and(255).shl(1));return c=h,i[0]=i[0].add(t-1&63),a[0]=a[0].add(i[0]),i[0]=i[0].add(a[0]),s=st(s.add(r).add(a[0]).add(G(e,c+8)),37).mul(l),r=st(r.add(a[1]).add(G(e,c+48)),42).mul(l),s=s.xor(i[1].mul(9)),r=r.add(a[0].mul(9).add(G(e,c+40))),o=st(o.add(i[0]),33).mul(l),a=fn(e,c,a[1].mul(l),s.add(i[0])),i=fn(e,c+32,o.add(i[1]),r.add(G(e,c+16))),[o,s]=[s,o],zt(zt(a[0],i[0],l).add(os(r).mul(Zi)).add(o),zt(a[1],i[1],l).add(s),l)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function ql(e,t){return t==="string"?on(e):Mn([e],t)}function Gl(e,t){return e instanceof Float32Array&&t==="float32"||e instanceof Int32Array&&t==="int32"||e instanceof Uint8Array&&t==="bool"}function Mn(e,t){if(t==="string")throw new Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=jt(e)),R().getBool("DEBUG")&&zr(e,t),Gl(e,t))return e;if(t==null||t==="float32"||t==="complex64")return new Float32Array(e);if(t==="int32")return new Int32Array(e);if(t==="bool"){const n=new Uint8Array(e.length);for(let s=0;s<n.length;++s)Math.round(e[s])!==0&&(n[s]=1);return n}else throw new Error(`Unknown data type ${t}`)}function ze(){return R().platform.now()}function zl(e,t){return R().platform.fetch(e,t)}function on(e,t="utf-8"){return t=t||"utf-8",R().platform.encode(e,t)}function xn(e,t="utf-8"){return t=t||"utf-8",R().platform.decode(e,t)}function rt(e){return R().platform.isTypedArray!=null?R().platform.isTypedArray(e):Gi(e)}function jt(e,t=[],n=!1){if(t==null&&(t=[]),typeof e=="boolean"||typeof e=="number"||typeof e=="string"||Nn(e)||e==null||rt(e)&&n)t.push(e);else if(Array.isArray(e)||rt(e))for(let s=0;s<e.length;++s)jt(e[s],t,n);else{let s=-1;for(const r of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(r)&&(s=Math.max(s,Number(r)));for(let r=0;r<=s;r++)jt(e[r],t,n)}return t}const Kl=Object.freeze(Object.defineProperty({__proto__:null,arraysEqual:Ct,arraysEqualWithNull:Ur,assert:g,assertNonNegativeIntegerDimensions:pt,assertNonNull:de,assertShapesMatch:ct,bytesFromStringArray:Vr,bytesPerElement:yn,checkConversionForErrors:zr,clamp:Ue,computeStrides:Fe,convertBackendValuesAndArrayBuffer:nl,createScalarValue:ql,createShuffledIndices:Ju,decodeString:xn,distSquared:Hu,encodeString:on,fetch:zl,fingerPrint64:Ul,flatten:jt,getArrayFromDType:Ss,getTypedArrayFromDType:Gr,hasEncodingLoss:el,hexToLong:rn,indexToLoc:ol,inferDtype:sn,inferFromImplicitShape:tl,isBoolean:jr,isFunction:Vt,isInt:_e,isNumber:Hr,isPromise:Nn,isScalarShape:Xu,isString:qt,isTypedArray:rt,isValidDtype:Kr,locToIndex:rl,makeOnesTypedArray:Ts,makeZerosNestedTypedArray:sl,makeZerosTypedArray:Dn,nearestDivisor:$n,nearestLargerEven:Ku,now:ze,parseAxisParam:nn,randUniform:ju,repeatedTry:Qu,rightPad:Oe,shuffle:Wr,shuffleCombo:zu,sizeFromShape:W,sizeToSquarishShape:Yu,squeezeShape:qr,sum:Vu,swap:wn,tanh:Zu,toNestedArray:ke,toTypedArray:Mn},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Vl{constructor(t,n){this.backendTimer=t,this.logger=n,n==null&&(this.logger=new Hl)}profileKernel(t,n,s){let r;const o=()=>{r=s()};let a;const i=ze();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(o);else{o();for(const u of r)u.dataSync();a=Promise.resolve({kernelMs:ze()-i})}if(R().getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let u=0;u<r.length;u++){const h=r[u];h.data().then(l=>{jl(l,h.dtype,t)})}return{kernelName:t,outputs:r,inputs:n,timeMs:a.then(u=>u.kernelMs),extraInfo:a.then(u=>u.getExtraProfileInfo!=null?u.getExtraProfileInfo():"")}}logKernelProfile(t){const{kernelName:n,outputs:s,timeMs:r,inputs:o,extraInfo:a}=t;s.forEach(i=>{Promise.all([i.data(),r,a]).then(c=>{this.logger.logKernelProfile(n,i,c[0],c[1],o,c[2])})})}}function jl(e,t,n){if(t!=="float32")return!1;for(let s=0;s<e.length;s++){const r=e[s];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}return!1}class Hl{logKernelProfile(t,n,s,r,o,a){const i=typeof r=="number"?Oe(`${r}ms`,9):r.error,c=Oe(t,25),u=n.rank,h=n.size,l=Oe(n.shape.toString(),14);let f="";for(const p in o){const w=o[p];if(w!=null){const y=w.shape||n.shape,$=y.length;f+=`${p}: ${$}D ${$>0?y:""} `}}console.log(`%c${c}	%c${i}	%c${u}D ${l}	%c${h}	%c${f}	%c${a}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function Xl(e,t,n){const s={},r={};for(let c=0;c<t.length;c++)s[t[c].id]=!0;for(let c=0;c<e.length;c++){const u=e[c],h=u.inputs;for(const l in h){const f=h[l];let p=!1;for(let w=0;w<t.length;w++)if(s[f.id]){u.outputs.forEach(y=>s[y.id]=!0),p=!0,r[u.id]=!0;break}if(p)break}}const o={};o[n.id]=!0;const a={};for(let c=e.length-1;c>=0;c--){const u=e[c],h=u.inputs;for(let l=0;l<u.outputs.length;l++)if(o[u.outputs[l].id]){for(const f in h)o[h[f].id]=!0,a[u.id]=!0;break}}const i=[];for(let c=0;c<e.length;c++){const u=e[c];if(r[u.id]&&a[u.id]){const h={};for(const f in u.inputs){const p=u.inputs[f];s[p.id]&&(h[f]=p)}const l=Object.assign({},u);l.inputs=h,l.outputs=u.outputs,i.push(l)}}return i}function Zl(e,t,n,s){for(let r=t.length-1;r>=0;r--){const o=t[r],a=[];if(o.outputs.forEach(c=>{const u=e[c.id];u!=null?a.push(u):a.push(null)}),o.gradient==null)throw new Error(`Cannot compute gradient: gradient function not found for ${o.kernelName}.`);const i=o.gradient(a);for(const c in o.inputs){if(!(c in i))throw new Error(`Cannot backprop through input ${c}. Available gradients found: ${Object.keys(i)}.`);const u=n(()=>i[c]());if(u.dtype!=="float32")throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input ${c} must have 'float32' dtype, but has '${u.dtype}'`);const h=o.inputs[c];if(!Ct(u.shape,h.shape))throw new Error(`Error in gradient for op ${o.kernelName}. The gradient of input '${c}' has shape '${u.shape}', which does not match the shape of the input '${h.shape}'`);if(e[h.id]==null)e[h.id]=u;else{const l=e[h.id];e[h.id]=s(l,u),l.dispose()}}}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Sr=20,Re=3,Hn=7;function Yl(e,t,n,s){const r=Fe(t),o=Jl(e,t,n,r),a=t.length,i=gn(e,t,n,r,o),c=["Tensor"];return s&&(c.push(`  dtype: ${n}`),c.push(`  rank: ${a}`),c.push(`  shape: [${t}]`),c.push("  values:")),c.push(i.map(u=>"    "+u).join(`
`)),c.join(`
`)}function Jl(e,t,n,s){const r=W(t),o=s[s.length-1],a=new Array(o).fill(0),i=t.length,c=n==="complex64"?Pe(e):e;if(i>1)for(let u=0;u<r/o;u++){const h=u*o;for(let l=0;l<o;l++)a[l]=Math.max(a[l],Ce(c[h+l],0,n).length)}return a}function Ce(e,t,n){let s;return Array.isArray(e)?s=`${parseFloat(e[0].toFixed(Hn))} + ${parseFloat(e[1].toFixed(Hn))}j`:qt(e)?s=`'${e}'`:n==="bool"?s=Ji(e):s=parseFloat(e.toFixed(Hn)).toString(),Oe(s,t)}function Ji(e){return e===0?"false":"true"}function gn(e,t,n,s,r,o=!0){const a=n==="complex64"?2:1,i=t[0],c=t.length;if(c===0){if(n==="complex64"){const y=Pe(e);return[Ce(y[0],0,n)]}return n==="bool"?[Ji(e[0])]:[e[0].toString()]}if(c===1){if(i>Sr){const $=Re*a;let x=Array.from(e.slice(0,$)),N=Array.from(e.slice((i-Re)*a,i*a));return n==="complex64"&&(x=Pe(x),N=Pe(N)),["["+x.map((k,v)=>Ce(k,r[v],n)).join(", ")+", ..., "+N.map((k,v)=>Ce(k,r[i-Re+v],n)).join(", ")+"]"]}return["["+(n==="complex64"?Pe(e):Array.from(e)).map(($,x)=>Ce($,r[x],n)).join(", ")+"]"]}const u=t.slice(1),h=s.slice(1),l=s[0]*a,f=[];if(i>Sr){for(let y=0;y<Re;y++){const $=y*l,x=$+l;f.push(...gn(e.slice($,x),u,n,h,r,!1))}f.push("...");for(let y=i-Re;y<i;y++){const $=y*l,x=$+l;f.push(...gn(e.slice($,x),u,n,h,r,y===i-1))}}else for(let y=0;y<i;y++){const $=y*l,x=$+l;f.push(...gn(e.slice($,x),u,n,h,r,y===i-1))}const p=c===2?",":"";f[0]="["+(i>0?f[0]+p:"");for(let y=1;y<f.length-1;y++)f[y]=" "+f[y]+p;let w=`,
`;for(let y=2;y<c;y++)w+=`
`;return f[f.length-1]=" "+f[f.length-1]+"]"+(o?"":w),f}function Pe(e){const t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */class vn{constructor(t,n,s){if(this.dtype=n,this.shape=t.slice(),this.size=W(t),s!=null){const r=s.length;g(r===this.size,()=>`Length of values '${r}' does not match the size inferred by the shape '${this.size}'.`)}if(n==="complex64")throw new Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=s||Ss(n,this.size),this.strides=Fe(t)}set(t,...n){n.length===0&&(n=[0]),g(n.length===this.rank,()=>`The number of provided coordinates (${n.length}) must match the rank (${this.rank})`);const s=this.locToIndex(n);this.values[s]=t}get(...t){t.length===0&&(t=[0]);let n=0;for(const r of t){if(r<0||r>=this.shape[n]){const o=`Requested out of range element at ${t}.   Buffer shape=${this.shape}`;throw new Error(o)}n++}let s=t[t.length-1];for(let r=0;r<t.length-1;++r)s+=this.strides[r]*t[r];return this.values[s]}locToIndex(t){if(this.rank===0)return 0;if(this.rank===1)return t[0];let n=t[t.length-1];for(let s=0;s<t.length-1;++s)n+=this.strides[s]*t[s];return n}indexToLoc(t){if(this.rank===0)return[];if(this.rank===1)return[t];const n=new Array(this.shape.length);for(let s=0;s<n.length-1;++s)n[s]=Math.floor(t/this.strides[s]),t-=n[s]*this.strides[s];return n[n.length-1]=t,n}get rank(){return this.shape.length}toTensor(){return vt().makeTensor(this.values,this.shape,this.dtype)}}let vt=null,we=null;function Ql(e){vt=e}function th(e){we=e}class Q{constructor(t,n,s,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=t.slice(),this.dtype=n||"float32",this.size=W(t),this.strides=Fe(t),this.dataId=s,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){const t=await this.data();return we.buffer(this.shape,this.dtype,t)}bufferSync(){return we.buffer(this.shape,this.dtype,this.dataSync())}async array(){const t=await this.data();return ke(this.shape,t,this.dtype==="complex64")}arraySync(){return ke(this.shape,this.dataSync(),this.dtype==="complex64")}async data(){this.throwIfDisposed();const t=vt().read(this.dataId);if(this.dtype==="string"){const n=await t;try{return n.map(s=>xn(s))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return t}dataToGPU(t){return this.throwIfDisposed(),vt().readToGPU(this.dataId,t)}dataSync(){this.throwIfDisposed();const t=vt().readSync(this.dataId);if(this.dtype==="string")try{return t.map(n=>xn(n))}catch{throw new Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return t}async bytes(){this.throwIfDisposed();const t=await vt().read(this.dataId);return this.dtype==="string"?t:new Uint8Array(t.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),vt().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw new Error("Tensor is disposed.")}print(t=!1){return we.print(this,t)}clone(){return this.throwIfDisposed(),we.clone(this)}toString(t=!1){const n=this.dataSync();return Yl(n,this.shape,this.dtype,t)}cast(t){return this.throwIfDisposed(),we.cast(this,t)}variable(t=!0,n,s){return this.throwIfDisposed(),vt().makeVariable(this,t,n,s)}}Object.defineProperty(Q,Symbol.hasInstance,{value:e=>!!e&&e.data!=null&&e.dataSync!=null&&e.throwIfDisposed!=null});function Qi(){return _s("Tensor",()=>Q)}Qi();class Ke extends Q{constructor(t,n,s,r){super(t.shape,t.dtype,t.dataId,r),this.trainable=n,this.name=s}assign(t){if(t.dtype!==this.dtype)throw new Error(`dtype of the new value (${t.dtype}) and previous value (${this.dtype}) must match`);if(!Ct(t.shape,this.shape))throw new Error(`shape of the new value (${t.shape}) and previous value (${this.shape}) must match`);vt().disposeTensor(this),this.dataId=t.dataId,vt().incRef(this,null)}dispose(){vt().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(Ke,Symbol.hasInstance,{value:e=>e instanceof Q&&e.assign!=null&&e.assign instanceof Function});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */var as;(function(e){e.R0="R0",e.R1="R1",e.R2="R2",e.R3="R3",e.R4="R4",e.R5="R5",e.R6="R6"})(as||(as={}));var is;(function(e){e.float32="float32",e.int32="int32",e.bool="int32",e.complex64="complex64"})(is||(is={}));var cs;(function(e){e.float32="float32",e.int32="int32",e.bool="bool",e.complex64="complex64"})(cs||(cs={}));var us;(function(e){e.float32="float32",e.int32="float32",e.bool="float32",e.complex64="complex64"})(us||(us={}));var ls;(function(e){e.float32="complex64",e.int32="complex64",e.bool="complex64",e.complex64="complex64"})(ls||(ls={}));const eh={float32:us,int32:is,bool:cs,complex64:ls};function Fn(e,t){if(e==="string"||t==="string"){if(e==="string"&&t==="string")return"string";throw new Error(`Can not upcast ${e} with ${t}`)}return eh[e][t]}function nh(e){return Fn(e,"int32")}function tc(e){return e!=null&&typeof e=="object"&&"texture"in e&&e.texture instanceof WebGLTexture}function ec(e){return typeof GPUBuffer<"u"&&e!=null&&typeof e=="object"&&"buffer"in e&&e.buffer instanceof GPUBuffer}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function J(e,t){if(e.dtype===t.dtype)return[e,t];const n=Fn(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function nc(e,t){g(e.dtype===t.dtype,()=>`The dtypes of the first(${e.dtype}) and second(${t.dtype}) input must match`)}function sh(e,t){return t.some(n=>n.id===e.id)}function Cs(e){const t=[];return sc(e,t,new Set),t}function sc(e,t,n){if(e==null)return;if(e instanceof Q){t.push(e);return}if(!rh(e))return;const s=e;for(const r in s){const o=s[r];n.has(o)||(n.add(o),sc(o,t,n))}}function rh(e){return Array.isArray(e)||typeof e=="object"}const oh=Object.freeze(Object.defineProperty({__proto__:null,assertTypesMatch:nc,getTensorsInContainer:Cs,isTensorInList:sh,makeTypesMatch:J},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Xn(e){return e.kernelName!=null}class Tr{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(t=>t.name)))}}}dispose(){for(const t in this.registeredVariables)this.registeredVariables[t].dispose()}}class Ne{constructor(t){this.ENV=t,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new Tr}async ready(){if(this.pendingBackendInit!=null)return this.pendingBackendInit.then(()=>{});if(this.backendInstance!=null)return;const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n];if(await this.initializeBackend(s).success){await this.setBackend(s);return}}throw new Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(this.pendingBackendInit!=null)throw new Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(this.backendInstance==null){const{name:t,asyncInit:n}=this.initializeBackendsAndReturnBest();if(n)throw new Error(`The highest priority backend '${t}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(t)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(t){if(!(t in this.registry))if(t in this.registryFactory){const{asyncInit:n}=this.initializeBackend(t);if(n)return null}else return null;return this.registry[t]}findBackendFactory(t){return t in this.registryFactory?this.registryFactory[t].factory:null}registerBackend(t,n,s=1){return t in this.registryFactory?(Wt(`${t} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[t]={factory:n,priority:s},!0)}async setBackend(t){if(this.registryFactory[t]==null)throw new Error(`Backend name '${t}' not found in registry`);if(this.backendName=t,this.registry[t]==null){this.backendInstance=null;const{success:n,asyncInit:s}=this.initializeBackend(t);if(!(s?await n:n))return!1}return this.backendInstance=this.registry[t],this.setupRegisteredKernels(),this.profiler=new Vl(this.backendInstance),!0}setupRegisteredKernels(){En(this.backendName).forEach(n=>{n.setupFunc!=null&&n.setupFunc(this.backendInstance)})}disposeRegisteredKernels(t){En(t).forEach(s=>{s.disposeFunc!=null&&s.disposeFunc(this.registry[t])})}initializeBackend(t){const n=this.registryFactory[t];if(n==null)throw new Error(`Cannot initialize backend ${t}, no registration found.`);try{const s=n.factory();if(s&&!(s instanceof Lr)&&typeof s.then=="function"){const r=++this.pendingBackendInitId,o=s.then(a=>r<this.pendingBackendInitId?!1:(this.registry[t]=a,this.pendingBackendInit=null,!0)).catch(a=>(r<this.pendingBackendInitId||(this.pendingBackendInit=null,Wt(`Initialization of backend ${t} failed`),Wt(a.stack||a.message)),!1));return this.pendingBackendInit=o,{success:o,asyncInit:!0}}else return this.registry[t]=s,{success:!0,asyncInit:!1}}catch(s){return Wt(`Initialization of backend ${t} failed`),Wt(s.stack||s.message),{success:!1,asyncInit:!1}}}removeBackend(t){if(!(t in this.registryFactory))throw new Error(`${t} backend not found in registry`);this.backendName===t&&this.pendingBackendInit!=null&&this.pendingBackendInitId++,t in this.registry&&(this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t]),delete this.registryFactory[t],this.backendName===t&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(Object.keys(this.registryFactory).length===0)throw new Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((t,n)=>this.registryFactory[n].priority-this.registryFactory[t].priority)}initializeBackendsAndReturnBest(){const t=this.getSortedBackends();for(let n=0;n<t.length;n++){const s=t[n],{success:r,asyncInit:o}=this.initializeBackend(s);if(o||r)return{name:s,asyncInit:o}}throw new Error("Could not initialize any backends, all backend initializations failed.")}moveData(t,n){const s=this.state.tensorInfo.get(n),r=s.backend,o=this.readSync(n),a=r.refCount(n);r.disposeData(n,!0),s.backend=t,t.move(n,o,s.shape,s.dtype,a),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(t,n){let s=null;if(n==null){if(typeof t!="function")throw new Error("Please provide a function to tidy()");n=t}else{if(typeof t!="string"&&!(t instanceof String))throw new Error("When calling with two arguments, the first argument to tidy() must be a string");if(typeof n!="function")throw new Error("When calling with two arguments, the 2nd argument to tidy() must be a function");s=t}let r;return this.scopedRun(()=>this.startScope(s),()=>this.endScope(r),()=>(r=n(),r instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),r))}scopedRun(t,n,s){t();try{const r=s();return n(),r}catch(r){throw n(),r}}nextTensorId(){return Ne.nextTensorId++}nextVariableId(){return Ne.nextVariableId++}clone(t){const n=b.runKernel(Ms,{x:t}),s={x:t},r=a=>({x:()=>{const i="float32",c={x:a},u={dtype:i};return b.runKernel(Ds,c,u)}}),o=[];return this.addTapeNode(this.state.activeScope.name,s,[n],r,o,{}),n}runKernel(t,n,s){if(this.backendName==null&&this.backend,!(Ge(t,this.backendName)!=null))throw new Error(`Kernel '${t}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:t,inputs:n,attrs:s})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(t,n,s){const r=this.backend.numDataIds();let o=0;s.forEach(c=>{o+=c.dtype==="complex64"?3:1});const a=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-n-o-a;if(i>0)throw new Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${t}'`)}runKernelFunc(t){let n,s=[];const r=this.isTapeOn(),o=this.state.numBytes,a=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0);let i;this.backendName==null&&this.backend;let c;const u=Xn(t)?t.kernelName:this.state.activeScope!=null?this.state.activeScope.name:"";if(Xn(t)){const{kernelName:w,inputs:y,attrs:$}=t;this.backendName==null&&this.backend;const x=Ge(w,this.backendName);g(x!=null,()=>`Cannot find registered kernel '${w}' for backend '${this.backendName}'`),i=()=>{const N=this.backend.numDataIds();c=x.kernelFunc({inputs:y,attrs:$,backend:this.backend});const k=Array.isArray(c)?c:[c];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(w,N,k);const v=k.map(T=>T.rank!=null?T:this.makeTensorFromTensorInfo(T));if(r){const T=this.getTensorsForGradient(w,y,v);s=this.saveTensorsForBackwardMode(T)}return v}}else{const{forwardFunc:w}=t,y=$=>{r&&(s=$.map(x=>this.keep(this.clone(x))))};i=()=>{const $=this.backend.numDataIds();c=this.tidy(()=>w(this.backend,y));const x=Array.isArray(c)?c:[c];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,$,x),x}}const{inputs:h,attrs:l}=t,f=Xn(t)?null:t.backwardsFunc;let p;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{!this.ENV.getBool("DEBUG")&&!this.state.profiling?n=i():(p=this.profiler.profileKernel(u,h,()=>i()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(p),n=p.outputs)}),r&&this.addTapeNode(u,h,n,f,s,l),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-a,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(h).map(w=>h[w]!=null?h[w].shape:null),outputShapes:n.map(w=>w.shape),kernelTimeMs:p.timeMs,extraInfo:p.extraInfo}),Array.isArray(c)?n:n[0]}saveTensorsForBackwardMode(t){return t.map(s=>this.keep(this.clone(s)))}getTensorsForGradient(t,n,s){const r=ss(t);if(r!=null){const o=r.inputsToSave||[],a=r.outputsToSave||[];let i;r.saveAllInputs?(g(Array.isArray(n),()=>"saveAllInputs is true, expected inputs to be an array."),i=Object.keys(n).map(u=>n[u])):i=o.map(u=>n[u]);const c=s.filter((u,h)=>a[h]);return i.concat(c)}return[]}makeTensor(t,n,s,r){if(t==null)throw new Error("Values passed to engine.makeTensor() are null");s=s||"float32",r=r||this.backend;let o=t;s==="string"&&qt(t[0])&&(o=t.map(c=>on(c)));const a=r.write(o,n,s),i=new Q(n,s,a,this.nextTensorId());if(this.trackTensor(i,r),s==="string"){const c=this.state.tensorInfo.get(a),u=Vr(o);this.state.numBytes+=u-c.bytes,c.bytes=u}return i}makeTensorFromDataId(t,n,s,r){s=s||"float32";const o={dataId:t,shape:n,dtype:s};return this.makeTensorFromTensorInfo(o,r)}makeTensorFromTensorInfo(t,n){const{dataId:s,shape:r,dtype:o}=t,a=new Q(r,o,s,this.nextTensorId());return this.trackTensor(a,n),a}makeVariable(t,n=!0,s,r){s=s||this.nextVariableId().toString(),r!=null&&r!==t.dtype&&(t=t.cast(r));const o=new Ke(t,n,s,this.nextTensorId());if(this.state.registeredVariables[o.name]!=null)throw new Error(`Variable with name ${o.name} was already registered`);return this.state.registeredVariables[o.name]=o,this.incRef(o,this.backend),o}trackTensor(t,n){this.state.numTensors++,t.dtype==="string"&&this.state.numStringTensors++;let s=0;t.dtype!=="complex64"&&t.dtype!=="string"&&(s=t.size*yn(t.dtype)),this.state.numBytes+=s,this.state.tensorInfo.has(t.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(t.dataId,{backend:n||this.backend,dtype:t.dtype,shape:t.shape,bytes:s})),t instanceof Ke||this.track(t)}incRef(t,n){this.trackTensor(t,n),this.backend.incRef(t.dataId)}removeDataId(t,n){this.state.tensorInfo.has(t)&&this.state.tensorInfo.get(t).backend===n&&(this.state.tensorInfo.delete(t),this.state.numDataBuffers--)}disposeTensor(t){if(!this.state.tensorInfo.has(t.dataId))return;const n=this.state.tensorInfo.get(t.dataId);if(this.state.numTensors--,t.dtype==="string"&&(this.state.numStringTensors--,this.state.numBytes-=n.bytes),t.dtype!=="complex64"&&t.dtype!=="string"){const s=t.size*yn(t.dtype);this.state.numBytes-=s}n.backend.disposeData(t.dataId)&&this.removeDataId(t.dataId,n.backend)}disposeVariables(){for(const t in this.state.registeredVariables){const n=this.state.registeredVariables[t];this.disposeVariable(n)}}disposeVariable(t){this.disposeTensor(t),this.state.registeredVariables[t.name]!=null&&delete this.state.registeredVariables[t.name]}memory(){const t=this.backend.memory();return t.numTensors=this.state.numTensors,t.numDataBuffers=this.state.numDataBuffers,t.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(t.unreliable=!0,t.reasons==null&&(t.reasons=[]),t.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),t}async profile(t){this.state.profiling=!0;const n=this.state.numBytes,s=this.state.numTensors;this.state.activeProfile.kernels=[],this.state.activeProfile.result=await t(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(r=>r.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-n,this.state.activeProfile.newTensors=this.state.numTensors-s;for(const r of this.state.activeProfile.kernels)r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&this.state.kernelDepth===0}addTapeNode(t,n,s,r,o,a){const i={id:this.state.nextTapeNodeId++,kernelName:t,inputs:n,outputs:s,saved:o},c=ss(t);c!=null&&(r=c.gradFunc),r!=null&&(i.gradient=u=>(u=u.map((h,l)=>{if(h==null){const f=s[l],p=Dn(f.size,f.dtype);return this.makeTensor(p,f.shape,f.dtype)}return h}),r(u.length>1?u:u[0],o,a))),this.state.activeTape.push(i)}keep(t){return t.kept=!0,t}startTape(){this.state.gradientDepth===0&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(t){const n={track:[],name:"unnamed scope",id:this.state.nextScopeId++};t&&(n.name=t),this.state.scopeStack.push(n),this.state.activeScope=n}endScope(t){const n=Cs(t),s=new Set(n.map(o=>o.id));for(let o=0;o<this.state.activeScope.track.length;o++){const a=this.state.activeScope.track[o];!a.kept&&!s.has(a.id)&&a.dispose()}const r=this.state.scopeStack.pop();this.state.activeScope=this.state.scopeStack.length===0?null:this.state.scopeStack[this.state.scopeStack.length-1],n.forEach(o=>{!o.kept&&o.scopeId===r.id&&this.track(o)})}gradients(t,n,s,r=!1){if(g(n.length>0,()=>"gradients() received an empty list of xs."),s!=null&&s.dtype!=="float32")throw new Error(`dy must have 'float32' dtype, but has '${s.dtype}'`);const o=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",t));g(o instanceof Q,()=>"The result y returned by f() must be a tensor.");const a=Xl(this.state.activeTape,n,o);if(!r&&a.length===0&&n.length>0)throw new Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{const i={};i[o.id]=s??ah(o.shape),Zl(i,a,u=>this.tidy(u),ih);const c=n.map(u=>i[u.id]);return this.state.gradientDepth===0&&(this.state.activeTape.forEach(u=>{for(const h of u.saved)h.dispose()}),this.state.activeTape=null),{value:o,grads:c}})}customGrad(t){return g(Vt(t),()=>"The f passed in customGrad(f) must be a function."),(...n)=>{g(n.every(i=>i instanceof Q),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let s;const r={};n.forEach((i,c)=>{r[c]=i});const o=(i,c)=>(s=t(...n,c),g(s.value instanceof Q,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),g(Vt(s.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),s.value),a=(i,c)=>{const u=s.gradFunc(i,c),h=Array.isArray(u)?u:[u];g(h.length===n.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),g(h.every(f=>f instanceof Q),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");const l={};return h.forEach((f,p)=>{l[p]=()=>f}),l};return this.runKernelFunc({forwardFunc:o,backwardsFunc:a,inputs:r})}}readSync(t){return this.state.tensorInfo.get(t).backend.readSync(t)}read(t){return this.state.tensorInfo.get(t).backend.read(t)}readToGPU(t,n){return this.state.tensorInfo.get(t).backend.readToGPU(t,n)}async time(t){const n=ze(),s=await this.backend.time(t);return s.wallMs=ze()-n,s}track(t){return this.state.activeScope!=null&&(t.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(t)),t}get registeredVariables(){return this.state.registeredVariables}reset(){this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new Tr;for(const t in this.registry)this.disposeRegisteredKernels(t),this.registry[t].dispose(),delete this.registry[t];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}Ne.nextTensorId=0;Ne.nextVariableId=0;function ah(e){const t=Ts(W(e),"float32");return b.makeTensor(t,e,"float32")}function rc(){const e=Yr();if(e._tfengine==null){const t=new Zr(e);e._tfengine=new Ne(t)}return ul(e._tfengine.ENV),Ql(()=>e._tfengine),e._tfengine}const b=rc();function ih(e,t){const n={a:e,b:t};return b.runKernel(As,n)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function ch(){return typeof navigator<"u"&&navigator!=null}let hs;function uh(e){hs=e}function lh(e){if(hs!==void 0)return hs;if(e||ch()){if(e||(e=navigator),e.product==="ReactNative")return!0;const t=e.userAgent||e.vendor||(typeof window<"u"?window.opera:"");if(!t){const n=e;return n.userAgentData&&n.userAgentData.mobile}return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4))}return!1}function oc(){return typeof window<"u"&&window.document!=null||typeof WorkerGlobalScope<"u"}const hh=Object.freeze(Object.defineProperty({__proto__:null,isBrowser:oc,isMobile:lh,mockIsMobile:uh},Symbol.toStringTag,{value:"Module"}));/**
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
 */const lt=R();lt.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")});lt.registerFlag("IS_BROWSER",()=>oc());lt.registerFlag("IS_NODE",()=>typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u");lt.registerFlag("IS_CHROME",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor));lt.registerFlag("IS_SAFARI",()=>typeof navigator<"u"&&navigator!=null&&navigator.userAgent!=null&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor));lt.registerFlag("PROD",()=>!1);lt.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>lt.getBool("DEBUG"));lt.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0);lt.registerFlag("IS_TEST",()=>!1);lt.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>lt.getBool("DEBUG"));lt.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1);lt.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1);lt.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Dt(e,t){let n=e;if(rt(e))return t==="string"?[]:[e.length];if(tc(e)){const r=e.channels||"RGBA";return[e.height,e.width*r.length]}else if(ec(e))return[e.buffer.size/(t==null?4:yn(t))];if(!Array.isArray(e))return[];const s=[];for(;Array.isArray(n)||rt(n)&&t!=="string";)s.push(n.length),n=n[0];return Array.isArray(e)&&R().getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&ac(e,s,[]),s}function ac(e,t,n){if(n=n||[],!Array.isArray(e)&&!rt(e)){g(t.length===0,()=>`Element arr[${n.join("][")}] is a primitive, but should be an array/TypedArray of ${t[0]} elements`);return}g(t.length>0,()=>`Element arr[${n.join("][")}] should be a primitive, but is an array of ${e.length} elements`),g(e.length===t[0],()=>`Element arr[${n.join("][")}] should have ${t[0]} elements, but has ${e.length} elements`);const s=t.slice(1);for(let r=0;r<e.length;++r)ac(e[r],s,n.concat(r))}function Ir(e,t,n,s){if(e!=="string_or_numeric"){if(e==null)throw new Error("Expected dtype cannot be null.");if(e!=="numeric"&&e!==t||e==="numeric"&&t==="string")throw new Error(`Argument '${n}' passed to '${s}' must be ${e} tensor, but got ${t} tensor`)}}function d(e,t,n,s="numeric"){if(e instanceof Qi())return Ir(s,e.dtype,t,n),e;let r=sn(e);if(r!=="string"&&["bool","int32","float32"].indexOf(s)>=0&&(r=s),Ir(s,r,t,n),e==null||!rt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string"){const c=e==null?"null":e.constructor.name;throw new Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${c}'`)}const o=Dt(e,r);!rt(e)&&!Array.isArray(e)&&(e=[e]);const i=r!=="string"?Mn(e,r):jt(e,[],!0);return b.makeTensor(i,o,r)}function Ve(e,t,n,s="numeric"){if(!Array.isArray(e))throw new Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((o,a)=>d(o,`${t}[${a}]`,n,s))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ic="__op";function m(e){const t=Object.keys(e);if(t.length!==1)throw new Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0];const s=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1)),n=n+ic;const r=(...o)=>{b.startScope(n);try{const a=s(...o);return Nn(a)&&console.error("Cannot return a Promise inside of tidy."),b.endScope(a),a}catch(a){throw b.endScope(null),a}};return Object.defineProperty(r,"name",{value:n,configurable:!0}),r}/**
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
 */function fh(e,t){const n=d(e,"real","complex"),s=d(t,"imag","complex");ct(n.shape,s.shape,`real and imag shapes, ${n.shape} and ${s.shape}, must match in call to tf.complex().`);const r={real:n,imag:s};return b.runKernel(Eo,r)}const Ht=m({complex_:fh});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Zt(e,t,n,s){if(s==null)s=sn(e);else if(s==="complex64")throw new Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(ec(e)||tc(e)){if(s!=="float32"&&s!=="int32")throw new Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${s}.`);return b.backend.createTensorFromGPUData(e,t||n,s)}if(!rt(e)&&!Array.isArray(e)&&typeof e!="number"&&typeof e!="boolean"&&typeof e!="string")throw new Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(t!=null){pt(t);const r=W(t),o=W(n);g(r===o,()=>`Based on the provided shape, [${t}], the tensor should have ${r} values but has ${o}`);for(let a=0;a<n.length;++a){const i=n[a],c=a===n.length-1?i!==W(t.slice(a)):!0;g(n[a]===t[a]||!c,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return!rt(e)&&!Array.isArray(e)&&(e=[e]),t=t||n,e=s!=="string"?Mn(e,s):jt(e,[],!0),b.makeTensor(e,t,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function xe(e,t,n){const s=Dt(e,n);return Zt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const oe={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class It{static join(t){return new It(t).slice()}constructor(t){if(this.shards=[],this.previousShardIndex=0,t==null||(t instanceof Array||(t=[t]),t=t.map(s=>rt(s)?s.buffer:s),t.length===0))return;this.bufferUniformSize=t[0].byteLength;let n=0;for(let s=0;s<t.length;s++){const r=t[s];s!==t.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);const o=n+r.byteLength;this.shards.push({buffer:r,start:n,end:o}),n=o}this.shards.length===0&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(t=0,n=this.byteLength){if(this.shards.length===0)return new ArrayBuffer(0);if(t=isNaN(Number(t))?0:t,n=isNaN(Number(n))?0:n,t=Math.max(0,t),n=Math.min(this.byteLength,n),n<=t)return new ArrayBuffer(0);const s=this.findShardForByte(t);if(s===-1)throw new Error(`Could not find start shard for byte ${t}`);const r=n-t,o=new ArrayBuffer(r),a=new Uint8Array(o);let i=0;for(let c=s;c<this.shards.length;c++){const u=this.shards[c],l=t+i-u.start,f=i,w=Math.min(n,u.end)-u.start,y=new Uint8Array(u.buffer,l,w-l);if(a.set(y,f),i+=y.length,n<u.end)break}return o}findShardForByte(t){if(this.shards.length===0||t<0||t>=this.byteLength)return-1;if(this.bufferUniformSize!=null)return this.previousShardIndex=Math.floor(t/this.bufferUniformSize),this.previousShardIndex;function n(r){return t<r.start?-1:t>=r.end?1:0}if(n(this.shards[this.previousShardIndex])===0)return this.previousShardIndex;const s=dh(this.shards,n);return s===-1?-1:(this.previousShardIndex=s,this.previousShardIndex)}}function dh(e,t){let n=0,s=e.length;for(;n<=s;){const r=Math.floor((s-n)/2)+n,o=t(e[r]);if(o===0)return r;o<0?s=r:n=r+1}return-1}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ph(){R().set("PROD",!0)}function gh(){R().set("DEBUG",!0)}function mh(){R().set("DEPRECATION_WARNINGS_ENABLED",!1),console.warn("TensorFlow.js deprecation warnings have been disabled.")}function bh(e){R().getBool("DEPRECATION_WARNINGS_ENABLED")&&console.warn(e+" You can disable deprecation warnings with tf.disableDeprecationWarnings().")}function wh(){b.disposeVariables()}function yh(){return b}function $h(){return b.memory()}function Eh(e){return b.profile(e)}function tt(e,t){return b.tidy(e,t)}function ut(e){Cs(e).forEach(n=>n.dispose())}function cc(e){return b.keep(e)}function kh(e){return b.time(e)}function xh(e){return b.setBackend(e)}function vh(){return b.ready()}function uc(){return b.backendName}function Sh(e){b.removeBackend(e)}function Th(e){return b.findBackend(e)}function Ih(e){return b.findBackendFactory(e)}function _h(e,t,n=1){return b.registerBackend(e,t,n)}function lc(){return b.backend}function Ah(e,t){R().setPlatform(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Xt=4;async function Dh(e,t){const n=[],s=[],r=Array.isArray(e)?e.map(a=>a.name):Object.keys(e);for(let a=0;a<r.length;++a){const i=r[a],c=Array.isArray(e)?e[a].tensor:e[i];if(c.dtype!=="float32"&&c.dtype!=="int32"&&c.dtype!=="bool"&&c.dtype!=="string"&&c.dtype!=="complex64")throw new Error(`Unsupported dtype in weight '${i}': ${c.dtype}`);const u={name:i,shape:c.shape,dtype:c.dtype};if(c.dtype==="string"){const h=new Promise(async l=>{const f=await c.bytes(),p=f.reduce(($,x)=>$+x.length,0)+Xt*f.length,w=new Uint8Array(p);let y=0;for(let $=0;$<f.length;$++){const x=f[$],N=new Uint8Array(new Uint32Array([x.length]).buffer);w.set(N,y),y+=Xt,w.set(x,y),y+=x.length}l(w)});s.push(h)}else s.push(c.data());t!=null&&(u.group=t),n.push(u)}const o=await Promise.all(s);return{data:Bh(o),specs:n}}function hc(e,t){const n=new It(e),s={};let r=0;for(const o of t){const a=Nh(o,(i,c)=>n.slice(r+i,r+c));s[o.name]=fc(o,n.slice(r,r+a)),r+=a}return s}function Nh(e,t){const n=W(e.shape);let s;if("quantization"in e){const r=e.quantization;s=oe[r.dtype]}else if(e.dtype==="string"){let r=0;for(let o=0;o<n;o++)r+=Xt+new Uint32Array(t(r,r+Xt))[0];return r}else s=oe[e.dtype];return n*s}async function Mh(e,t){const n=W(e.shape);let s;if("quantization"in e){const r=e.quantization;s=oe[r.dtype]}else if(e.dtype==="string"){let r=0;for(let o=0;o<n;o++)r+=Xt+new Uint32Array(await t(r,r+Xt))[0];return r}else s=oe[e.dtype];return n*s}function fc(e,t){const n=e.name,s=e.dtype,r=e.shape,o=W(r);let a,i=0;if("quantization"in e){const c=e.quantization;if(c.dtype==="uint8"||c.dtype==="uint16"){if(!("min"in c&&"scale"in c))throw new Error(`Weight ${e.name} with quantization ${c.dtype} doesn't have corresponding metadata min and scale.`)}else if(c.dtype==="float16"){if(s!=="float32")throw new Error(`Weight ${e.name} is quantized with ${c.dtype} which only supports weights of type float32 not ${s}.`)}else throw new Error(`Weight ${e.name} has unknown quantization dtype ${c.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);const u=oe[c.dtype],h=c.dtype==="uint8"?new Uint8Array(t):new Uint16Array(t);if(s==="float32")if(c.dtype==="uint8"||c.dtype==="uint16"){a=new Float32Array(h.length);for(let l=0;l<h.length;l++){const f=h[l];a[l]=f*c.scale+c.min}}else if(c.dtype==="float16")a=Uh()(h);else throw new Error(`Unsupported quantization type ${c.dtype} for weight type float32.`);else if(s==="int32"){if(c.dtype!=="uint8"&&c.dtype!=="uint16")throw new Error(`Unsupported quantization type ${c.dtype} for weight type int32.`);a=new Int32Array(h.length);for(let l=0;l<h.length;l++){const f=h[l];a[l]=Math.round(f*c.scale+c.min)}}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=o*u}else if(s==="string"){const c=W(e.shape);a=[];for(let u=0;u<c;u++){const h=new Uint32Array(t.slice(i,i+Xt))[0];i+=Xt;const l=new Uint8Array(t.slice(i,i+h));a.push(l),i+=h}}else{const c=oe[s];if(s==="float32")a=new Float32Array(t);else if(s==="int32")a=new Int32Array(t);else if(s==="bool")a=new Uint8Array(t);else if(s==="complex64"){a=new Float32Array(t);const u=new Float32Array(a.length/2),h=new Float32Array(a.length/2);for(let w=0;w<u.length;w++)u[w]=a[w*2],h[w]=a[w*2+1];const l=xe(u,r,"float32"),f=xe(h,r,"float32"),p=Ht(l,f);return l.dispose(),f.dispose(),p}else throw new Error(`Unsupported dtype in weight '${n}': ${s}`);i+=o*c}return xe(a,r,s)}async function _r(e,t,n){let s=new Uint8Array(t);for(;s.byteLength<n;){const{done:r,value:o}=await e.read();if(r&&o==null){const i=n-s.byteLength;throw new Error(`Reader is done but ${i} bytes are still expected`)}const a=new Uint8Array(s.length+o.byteLength);a.set(s,0),a.set(new Uint8Array(o),s.length),s=a}return s.buffer}async function Fh(e,t){const n={},s=e.getReader();let r=new ArrayBuffer(0);for(const o of t){const a=await Mh(o,async(u,h)=>(r=await _r(s,r,h),r.slice(u,h)));r=await _r(s,r,a);const i=r.slice(0,a);r=r.slice(a);const c=fc(o,i);if(n[o.name]=c,uc()==="webgpu"){const u=lc();"uploadToGPU"in u&&W(c.shape)>=R().get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&u.uploadToGPU(c.dataId)}}return n}function Bh(e){if(e===null)throw new Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0;const n=[];e.forEach(o=>{if(t+=o.byteLength,n.push(o.byteLength===o.buffer.byteLength?o:new o.constructor(o)),!(o instanceof Float32Array||o instanceof Int32Array||o instanceof Uint8Array))throw new Error(`Unsupported TypedArray subtype: ${o.constructor.name}`)});const s=new Uint8Array(t);let r=0;return n.forEach(o=>{s.set(new Uint8Array(o.buffer),r),r+=o.byteLength}),s.buffer}const Ps=typeof Buffer<"u"&&(typeof Blob>"u"||typeof atob>"u"||typeof btoa>"u");function Ar(e){return Ps?Buffer.byteLength(e,"utf8"):new Blob([e]).size}function Rh(e){if(Ps)return Buffer.from(e).toString("base64");const t=new Uint8Array(e);let n="";for(let s=0,r=t.length;s<r;s++)n+=String.fromCharCode(t[s]);return btoa(n)}function Ch(e){if(Ps){const s=Buffer.from(e,"base64");return s.buffer.slice(s.byteOffset,s.byteOffset+s.byteLength)}const t=atob(e),n=new Uint8Array(t.length);for(let s=0;s<t.length;++s)n.set([t.charCodeAt(s)],s);return n.buffer}function Ph(e){return It.join(e)}function Dr(e){const t="/";for(e=e.trim();e.endsWith(t);)e=e.slice(0,e.length-1);const n=e.split(t);return n[n.length-1]}function dc(e,t){const n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return e.signature!=null&&(n.signature=e.signature),e.userDefinedMetadata!=null&&(n.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(n.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(n.initializerSignature=e.initializerSignature),e.trainingConfig!=null&&(n.trainingConfig=e.trainingConfig),n}function pc(e,t,n){const s={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(e.trainingConfig!=null&&(s.trainingConfig=e.trainingConfig),e.weightsManifest!=null){if(!t)throw new Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw new Error("modelJSON has weightsManifest but weightData is null");s.weightSpecs=t,s.weightData=n}return e.signature!=null&&(s.signature=e.signature),e.userDefinedMetadata!=null&&(s.userDefinedMetadata=e.userDefinedMetadata),e.modelInitializer!=null&&(s.modelInitializer=e.modelInitializer),e.initializerSignature!=null&&(s.initializerSignature=e.initializerSignature),s}async function Os(e,t){let n,s;return e.weightsManifest!=null&&([n,s]=await t(e.weightsManifest)),pc(e,n,s)}function an(e){if(e.modelTopology instanceof ArrayBuffer)throw new Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:e.modelTopology==null?0:Ar(JSON.stringify(e.modelTopology)),weightSpecsBytes:e.weightSpecs==null?0:Ar(JSON.stringify(e.weightSpecs)),weightDataBytes:e.weightData==null?0:new It(e.weightData).byteLength}}function fs(e){const t=[];for(const n of e)t.push(...n.weights);return t}function Oh(){const e=n=>{let s=n<<13,r=0;for(;!(s&8388608);)r-=8388608,s<<=1;return s&=-8388609,r+=947912704,s|r},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let n=1024;n<2048;n++)t[n]=939524096+(n-1024<<13);return t}function Lh(){const e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}function Wh(){const e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}function Uh(){const e=Oh(),t=Lh(),n=Wh();return s=>{const r=new ArrayBuffer(4*s.length),o=new Uint32Array(r);for(let a=0;a<s.length;a++){const i=s[a],c=e[n[i>>10]+(i&1023)]+t[i>>10];o[a]=c}return new Float32Array(r)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Y{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return Y.instance==null&&(Y.instance=new Y),Y.instance}static registerSaveRouter(t){Y.getInstance().saveRouters.push(t)}static registerLoadRouter(t){Y.getInstance().loadRouters.push(t)}static getSaveHandlers(t){return Y.getHandlers(t,"save")}static getLoadHandlers(t,n){return Y.getHandlers(t,"load",n)}static getHandlers(t,n,s){const r=[];return(n==="load"?Y.getInstance().loadRouters:Y.getInstance().saveRouters).forEach(a=>{const i=a(t,s);i!==null&&r.push(i)}),r}}const qh=e=>Y.registerSaveRouter(e),Gh=e=>Y.registerLoadRouter(e),zh=e=>Y.getSaveHandlers(e),Kh=(e,t)=>Y.getLoadHandlers(e,t);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ds="tensorflowjs",ps=1,ne="models_store",Gt="model_info_store";function gc(){if(!R().getBool("IS_BROWSER"))throw new Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");const e=typeof window>"u"?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(t==null)throw new Error("The current browser does not appear to support IndexedDB.");return t}function gs(e){const t=e.result;t.createObjectStore(ne,{keyPath:"modelPath"}),t.createObjectStore(Gt,{keyPath:"modelPath"})}class ae{constructor(t){if(this.indexedDB=gc(),t==null||!t)throw new Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=t}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,t)}async load(){return this.databaseAction(this.modelPath)}databaseAction(t,n){return new Promise((s,r)=>{const o=this.indexedDB.open(ds,ps);o.onupgradeneeded=()=>gs(o),o.onsuccess=()=>{const a=o.result;if(n==null){const i=a.transaction(ne,"readonly"),u=i.objectStore(ne).get(this.modelPath);u.onsuccess=()=>{if(u.result==null)return a.close(),r(new Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));s(u.result.modelArtifacts)},u.onerror=h=>(a.close(),r(u.error)),i.oncomplete=()=>a.close()}else{n.weightData=It.join(n.weightData);const i=an(n),c=a.transaction(Gt,"readwrite");let u=c.objectStore(Gt),h;try{h=u.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(f){return r(f)}let l;h.onsuccess=()=>{l=a.transaction(ne,"readwrite");const f=l.objectStore(ne);let p;try{p=f.put({modelPath:this.modelPath,modelArtifacts:n,modelArtifactsInfo:i})}catch(w){return r(w)}p.onsuccess=()=>s({modelArtifactsInfo:i}),p.onerror=w=>{u=c.objectStore(Gt);const y=u.delete(this.modelPath);y.onsuccess=()=>(a.close(),r(p.error)),y.onerror=$=>(a.close(),r(p.error))}},h.onerror=f=>(a.close(),r(h.error)),c.oncomplete=()=>{l==null?a.close():l.oncomplete=()=>a.close()}}},o.onerror=a=>r(o.error)})}}ae.URL_SCHEME="indexeddb://";const mc=e=>R().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ae.URL_SCHEME)?Vh(e.slice(ae.URL_SCHEME.length)):null;Y.registerSaveRouter(mc);Y.registerLoadRouter(mc);function Vh(e){return new ae(e)}function jh(e){return e.startsWith(ae.URL_SCHEME)?e.slice(ae.URL_SCHEME.length):e}class Hh{constructor(){this.indexedDB=gc()}async listModels(){return new Promise((t,n)=>{const s=this.indexedDB.open(ds,ps);s.onupgradeneeded=()=>gs(s),s.onsuccess=()=>{const r=s.result,o=r.transaction(Gt,"readonly"),i=o.objectStore(Gt).getAll();i.onsuccess=()=>{const c={};for(const u of i.result)c[u.modelPath]=u.modelArtifactsInfo;t(c)},i.onerror=c=>(r.close(),n(i.error)),o.oncomplete=()=>r.close()},s.onerror=r=>n(s.error)})}async removeModel(t){return t=jh(t),new Promise((n,s)=>{const r=this.indexedDB.open(ds,ps);r.onupgradeneeded=()=>gs(r),r.onsuccess=()=>{const o=r.result,a=o.transaction(Gt,"readwrite"),i=a.objectStore(Gt),c=i.get(t);let u;c.onsuccess=()=>{if(c.result==null)return o.close(),s(new Error(`Cannot find model with path '${t}' in IndexedDB.`));{const h=i.delete(t),l=()=>{u=o.transaction(ne,"readwrite");const p=u.objectStore(ne).delete(t);p.onsuccess=()=>n(c.result.modelArtifactsInfo),p.onerror=w=>s(c.error)};h.onsuccess=l,h.onerror=f=>(l(),o.close(),s(c.error))}},c.onerror=h=>(o.close(),s(c.error)),a.oncomplete=()=>{u==null?o.close():u.oncomplete=()=>o.close()}},r.onerror=o=>s(r.error)})}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Ft="/",ye="tensorflowjs_models",bc="info",Xh="model_topology",Zh="weight_specs",Yh="weight_data",Jh="model_metadata";function wc(e){return{info:[ye,e,bc].join(Ft),topology:[ye,e,Xh].join(Ft),weightSpecs:[ye,e,Zh].join(Ft),weightData:[ye,e,Yh].join(Ft),modelMetadata:[ye,e,Jh].join(Ft)}}function yc(e){for(const t of Object.values(e))window.localStorage.removeItem(t)}function Qh(e){const t=e.split(Ft);if(t.length<3)throw new Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join(Ft)}function tf(e){return e.startsWith(ie.URL_SCHEME)?e.slice(ie.URL_SCHEME.length):e}class ie{constructor(t){if(!R().getBool("IS_BROWSER")||typeof window>"u"||typeof window.localStorage>"u")throw new Error("The current environment does not support local storage.");if(this.LS=window.localStorage,t==null||!t)throw new Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=t,this.keys=wc(this.modelPath)}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{const n=JSON.stringify(t.modelTopology),s=JSON.stringify(t.weightSpecs),r=an(t),o=It.join(t.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,n),this.LS.setItem(this.keys.weightSpecs,s),this.LS.setItem(this.keys.weightData,Rh(o));const a={format:t.format,generatedBy:t.generatedBy,convertedBy:t.convertedBy,signature:t.signature!=null?t.signature:void 0,userDefinedMetadata:t.userDefinedMetadata!=null?t.userDefinedMetadata:void 0,modelInitializer:t.modelInitializer!=null?t.modelInitializer:void 0,initializerSignature:t.initializerSignature!=null?t.initializerSignature:void 0,trainingConfig:t.trainingConfig!=null?t.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(a)),{modelArtifactsInfo:r}}catch{throw yc(this.keys),new Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){const t=JSON.parse(this.LS.getItem(this.keys.info));if(t==null)throw new Error(`In local storage, there is no model with name '${this.modelPath}'`);if(t.modelTopologyType!=="JSON")throw new Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");const n={},s=JSON.parse(this.LS.getItem(this.keys.topology));if(s==null)throw new Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);n.modelTopology=s;const r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(r==null)throw new Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);n.weightSpecs=r;const o=this.LS.getItem(this.keys.modelMetadata);if(o!=null){const i=JSON.parse(o);n.format=i.format,n.generatedBy=i.generatedBy,n.convertedBy=i.convertedBy,i.signature!=null&&(n.signature=i.signature),i.userDefinedMetadata!=null&&(n.userDefinedMetadata=i.userDefinedMetadata),i.modelInitializer!=null&&(n.modelInitializer=i.modelInitializer),i.initializerSignature!=null&&(n.initializerSignature=i.initializerSignature),i.trainingConfig!=null&&(n.trainingConfig=i.trainingConfig)}const a=this.LS.getItem(this.keys.weightData);if(a==null)throw new Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return n.weightData=Ch(a),n}}ie.URL_SCHEME="localstorage://";const $c=e=>R().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(ie.URL_SCHEME)?ef(e.slice(ie.URL_SCHEME.length)):null;Y.registerSaveRouter($c);Y.registerLoadRouter($c);function ef(e){return new ie(e)}class nf{constructor(){g(R().getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),g(typeof window>"u"||typeof window.localStorage<"u",()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){const t={},n=ye+Ft,s=Ft+bc;for(let r=0;r<this.LS.length;++r){const o=this.LS.key(r);if(o.startsWith(n)&&o.endsWith(s)){const a=Qh(o);t[a]=JSON.parse(this.LS.getItem(o))}}return t}async removeModel(t){t=tf(t);const n=wc(t);if(this.LS.getItem(n.info)==null)throw new Error(`Cannot find model at path '${t}'`);const s=JSON.parse(this.LS.getItem(n.info));return yc(n),s}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ve="://";class ot{constructor(){this.managers={}}static getInstance(){return ot.instance==null&&(ot.instance=new ot),ot.instance}static registerManager(t,n){g(t!=null,()=>"scheme must not be undefined or null."),t.endsWith(ve)&&(t=t.slice(0,t.indexOf(ve))),g(t.length>0,()=>"scheme must not be an empty string.");const s=ot.getInstance();g(s.managers[t]==null,()=>`A model store manager is already registered for scheme '${t}'.`),s.managers[t]=n}static getManager(t){const n=ot.getInstance().managers[t];if(n==null)throw new Error(`Cannot find model manager for scheme '${t}'`);return n}static getSchemes(){return Object.keys(ot.getInstance().managers)}}function mn(e){if(e.indexOf(ve)===-1)throw new Error(`The url string provided does not contain a scheme. Supported schemes are: ${ot.getSchemes().join(",")}`);return{scheme:e.split(ve)[0],path:e.split(ve)[1]}}async function Ec(e,t,n=!1){g(e!==t,()=>`Old path and new path are the same: '${e}'`);const s=Y.getLoadHandlers(e);g(s.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),g(s.length<2,()=>`Copying failed because more than one (${s.length}) load handlers for source URL ${e}.`);const r=s[0],o=Y.getSaveHandlers(t);g(o.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),g(o.length<2,()=>`Copying failed because more than one (${s.length}) save handlers for destination URL ${t}.`);const a=o[0],i=mn(e).scheme,c=mn(e).path,u=i===mn(e).scheme,h=await r.load();n&&u&&await ot.getManager(i).removeModel(c);const l=await a.save(h);return n&&!u&&await ot.getManager(i).removeModel(c),l.modelArtifactsInfo}async function sf(){const e=ot.getSchemes(),t={};for(const n of e){const s=await ot.getManager(n).listModels();for(const r in s){const o=n+ve+r;t[o]=s[r]}}return t}async function rf(e){const t=mn(e);return ot.getManager(t.scheme).removeModel(t.path)}async function of(e,t){return Ec(e,t,!1)}async function af(e,t){return Ec(e,t,!0)}/**
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
 */class cf{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(t,n){return fetch(t,n)}now(){return performance.now()}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Browser's encoder only supports utf-8, but got ${n}`);return this.textEncoder==null&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(t)}decode(t,n){return new TextDecoder(n).decode(t)}setTimeoutCustom(t,n){if(typeof window>"u"||!R().getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(t,n);return}this.functionRefs.push(t),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},n),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",s=>{if(s.source===window&&s.data.name===this.messageName){s.stopPropagation();const r=this.functionRefs[s.data.index];r(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0)}},!0))}isTypedArray(t){return Gi(t)}}if(R().get("IS_BROWSER")){R().setPlatform("browser",new cf);try{ot.registerManager(ie.URL_SCHEME,new nf)}catch{}try{ot.registerManager(ae.URL_SCHEME,new Hh)}catch{}}/**
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
 */const uf={importFetch:()=>require("node-fetch")};let Zn;class lf{constructor(){this.util=require("util"),this.textEncoder=new this.util.TextEncoder}fetch(t,n){return R().global.fetch!=null?R().global.fetch(t,n):(Zn==null&&(Zn=uf.importFetch()),Zn(t,n))}now(){const t=process.hrtime();return t[0]*1e3+t[1]/1e6}encode(t,n){if(n!=="utf-8"&&n!=="utf8")throw new Error(`Node built-in encoder only supports utf-8, but got ${n}`);return this.textEncoder.encode(t)}decode(t,n){return t.length===0?"":new this.util.TextDecoder(n).decode(t)}isTypedArray(t){return this.util.types.isFloat32Array(t)||this.util.types.isInt32Array(t)||this.util.types.isUint8Array(t)||this.util.types.isUint8ClampedArray(t)}}R().get("IS_NODE")&&!R().get("IS_BROWSER")&&R().setPlatform("node",new lf);/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Bt(e,t="float32",n){return t=t||"float32",pt(e),new vn(e,t,n)}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function hf(e,t){const n=d(e,"x","cast");if(!Kr(t))throw new Error(`Failed to cast to unknown dtype ${t}`);if(t==="string"&&n.dtype!=="string"||t!=="string"&&n.dtype==="string")throw new Error("Only strings can be casted to strings");const s={x:n},r={dtype:t};return b.runKernel(Ds,s,r)}const H=m({cast_:hf});/**
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
 */function ff(e){const n={x:d(e,"x","clone","string_or_numeric")};return b.runKernel(Ms,n)}const re=m({clone_:ff});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function kc(e,t=!1){console.log(e.toString(t))}/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */rc();const df={buffer:Bt,cast:H,clone:re,print:kc};th(df);/**
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
 */function pf(e,t){let n=d(e,"a","add"),s=d(t,"b","add");[n,s]=J(n,s);const r={a:n,b:s};return b.runKernel(As,r)}const F=m({add_:pf});/**
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
 */function gf(e,t){let n=d(e,"a","floorDiv"),s=d(t,"b","floorDiv");[n,s]=J(n,s);const r={a:n,b:s};return b.runKernel(Qo,r)}const xc=m({floorDiv_:gf});/**
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
 */function mf(e,t){let n=d(e,"a","div"),s=d(t,"b","div");if([n,s]=J(n,s),n.dtype==="int32"&&s.dtype==="int32")return xc(n,s);const r={a:n,b:s},o={};return b.runKernel(Uo,r,o)}const K=m({div_:mf});/**
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
 */function bf(e,t){let n=d(e,"a","mul"),s=d(t,"b","mul");[n,s]=J(n,s);const r={a:n,b:s};return b.runKernel(Na,r)}const I=m({mul_:bf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function wf(e){const t=d(e,"x","abs");if(t.dtype==="complex64"){const n={x:t};return b.runKernel(ko,n)}else{const n={x:t};return b.runKernel(Jr,n)}}const mt=m({abs_:wf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function yf(e){const n={x:d(e,"x","acos")};return b.runKernel(Qr,n)}const $f=m({acos_:yf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ef(e){const n={x:d(e,"x","acosh")};return b.runKernel(to,n)}const kf=m({acosh_:Ef});/**
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
 */function xf(e){g(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),g(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);const t=e.map((r,o)=>d(r,`tensors${o}`,"addN")),n=t[0];t.forEach(r=>{if(r.dtype!==n.dtype)throw new Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(r=>{if(!Ct(r.shape,n.shape))throw new Error("All tensors passed to tf.addN() must have the same shape")});const s=t;return b.runKernel(eo,s)}const vf=m({addN_:xf});/**
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
 */function Sf(e,t=null,n=!1){const r={x:d(e,"x","all","bool")},o={axis:t,keepDims:n};return b.runKernel(no,r,o)}const Tf=m({all_:Sf});/**
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
 */function If(e,t=null,n=!1){const r={x:d(e,"x","any","bool")},o={axis:t,keepDims:n};return b.runKernel(so,r,o)}const _f=m({any_:If});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Af(e,t=0){const s={x:d(e,"x","argMax")},r={axis:t};return b.runKernel(ro,s,r)}const Df=m({argMax_:Af});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Nf(e,t=0){const s={x:d(e,"x","argMin")},r={axis:t};return b.runKernel(oo,s,r)}const Mf=m({argMin_:Nf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ff(e){const n={x:d(e,"x","asin")};return b.runKernel(ao,n)}const Bf=m({asin_:Ff});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Rf(e){const n={x:d(e,"x","asinh")};return b.runKernel(io,n)}const Cf=m({asinh_:Rf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Pf(e){const n={x:d(e,"x","atan")};return b.runKernel(co,n)}const Of=m({atan_:Pf});/**
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
 */function Lf(e,t){let n=d(e,"a","atan2"),s=d(t,"b","atan2");[n,s]=J(n,s);const r={a:n,b:s};return b.runKernel(lo,r)}const Wf=m({atan2_:Lf});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Uf(e){const n={x:d(e,"x","atanh")};return b.runKernel(uo,n)}const qf=m({atanh_:Uf});/**
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
 */function Gf(e,t,n,s,r="NHWC",o){const a=e[3],i=[...t,a],c=Tc(r);return cn(e,i,n,o,s,null,null,c)}function vc(e,t,n,s,r,o,a="channelsLast"){const[i,c]=je(t);let u;if(a==="channelsLast")u=[i,c,e[3],e[3]];else if(a==="channelsFirst")u=[i,c,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return cn(e,u,n,s,r,o,!1,a)}function zf(e,t,n,s,r,o,a="NDHWC"){const[i,c,u]=ms(t);let h,l;if(a==="NDHWC")l="channelsLast",h=[i,c,u,e[4],e[4]];else if(a==="NCDHW")l="channelsFirst",h=[i,c,u,e[1],e[1]];else throw new Error(`Unknown dataFormat ${a}`);return Sc(e,h,n,s,r,!1,l,o)}function cn(e,t,n,s,r,o,a=!1,i="channelsLast"){let[c,u,h,l]=[-1,-1,-1,-1];if(i==="channelsLast")[c,u,h,l]=e;else if(i==="channelsFirst")[c,l,u,h]=e;else throw new Error(`Unknown dataFormat ${i}`);const[f,p,,w]=t,[y,$]=je(n),[x,N]=je(s),k=Se(f,x),v=Se(p,N),{padInfo:T,outHeight:_,outWidth:M}=jf(r,u,h,y,$,k,v,o,i),A=a?w*l:w;let D;return i==="channelsFirst"?D=[c,A,_,M]:i==="channelsLast"&&(D=[c,_,M,A]),{batchSize:c,dataFormat:i,inHeight:u,inWidth:h,inChannels:l,outHeight:_,outWidth:M,outChannels:A,padInfo:T,strideHeight:y,strideWidth:$,filterHeight:f,filterWidth:p,effectiveFilterHeight:k,effectiveFilterWidth:v,dilationHeight:x,dilationWidth:N,inShape:e,outShape:D,filterShape:t}}function Sc(e,t,n,s,r,o=!1,a="channelsLast",i){let[c,u,h,l,f]=[-1,-1,-1,-1,-1];if(a==="channelsLast")[c,u,h,l,f]=e;else if(a==="channelsFirst")[c,f,u,h,l]=e;else throw new Error(`Unknown dataFormat ${a}`);const[p,w,y,,$]=t,[x,N,k]=ms(n),[v,T,_]=ms(s),M=Se(p,v),A=Se(w,T),D=Se(y,_),{padInfo:C,outDepth:B,outHeight:O,outWidth:U}=Hf(r,u,h,l,x,N,k,M,A,D,i),X=o?$*f:$;let nt;return a==="channelsFirst"?nt=[c,X,B,O,U]:a==="channelsLast"&&(nt=[c,B,O,U,X]),{batchSize:c,dataFormat:a,inDepth:u,inHeight:h,inWidth:l,inChannels:f,outDepth:B,outHeight:O,outWidth:U,outChannels:X,padInfo:C,strideDepth:x,strideHeight:N,strideWidth:k,filterDepth:p,filterHeight:w,filterWidth:y,effectiveFilterDepth:M,effectiveFilterHeight:A,effectiveFilterWidth:D,dilationDepth:v,dilationHeight:T,dilationWidth:_,inShape:e,outShape:nt,filterShape:t}}function Kf(e,t,n,s,r){s==null&&(s=Ls(e,t,n));const o=e[0],a=e[1],i=He((o-t+2*s)/n+1,r),c=He((a-t+2*s)/n+1,r);return[i,c]}function Vf(e,t,n,s,r,o){r==null&&(r=Ls(e,t[0],s[0]));const a=[0,0,0,n];for(let i=0;i<3;i++)e[i]+2*r>=t[i]&&(a[i]=He((e[i]-t[i]+2*r)/s[i]+1,o));return a}function Ls(e,t,n,s=1){const r=Se(t,s);return Math.floor((e[0]*(n-1)-n+r)/2)}function je(e){return typeof e=="number"?[e,e,e]:e.length===2?[e[0],e[1],1]:e}function ms(e){return typeof e=="number"?[e,e,e]:e}function Se(e,t){return t<=1?e:e+(e-1)*(t-1)}function jf(e,t,n,s,r,o,a,i,c){let u,h,l;if(typeof e=="number"){u={top:e,bottom:e,left:e,right:e,type:e===0?"VALID":"NUMBER"};const p=Kf([t,n],o,s,e,i);h=p[0],l=p[1]}else if(e==="same"){h=Math.ceil(t/s),l=Math.ceil(n/r);const f=Math.max(0,(h-1)*s+o-t),p=Math.max(0,(l-1)*r+a-n),w=Math.floor(f/2),y=f-w,$=Math.floor(p/2),x=p-$;u={top:w,bottom:y,left:$,right:x,type:"SAME"}}else if(e==="valid")u={top:0,bottom:0,left:0,right:0,type:"VALID"},h=Math.ceil((t-o+1)/s),l=Math.ceil((n-a+1)/r);else if(typeof e=="object"){const f=c==="channelsLast"?e[1][0]:e[2][0],p=c==="channelsLast"?e[1][1]:e[2][1],w=c==="channelsLast"?e[2][0]:e[3][0],y=c==="channelsLast"?e[2][1]:e[3][1];u={top:f,bottom:p,left:w,right:y,type:f===0&&p===0&&w===0&&y===0?"VALID":"EXPLICIT"},h=He((t-o+f+p)/s+1,i),l=He((n-a+w+y)/r+1,i)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:h,outWidth:l}}function Hf(e,t,n,s,r,o,a,i,c,u,h){let l,f,p,w;if(e==="valid"&&(e=0),typeof e=="number"){l={top:e,bottom:e,left:e,right:e,front:e,back:e,type:e===0?"VALID":"NUMBER"};const $=Vf([t,n,s,1],[i,c,u],1,[r,o,a],e,h);f=$[0],p=$[1],w=$[2]}else if(e==="same"){f=Math.ceil(t/r),p=Math.ceil(n/o),w=Math.ceil(s/a);const y=(f-1)*r+i-t,$=(p-1)*o+c-n,x=(w-1)*a+u-s,N=Math.floor(y/2),k=y-N,v=Math.floor($/2),T=$-v,_=Math.floor(x/2),M=x-_;l={top:v,bottom:T,left:_,right:M,front:N,back:k,type:"SAME"}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:l,outDepth:f,outHeight:p,outWidth:w}}function He(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw new Error(`Unknown roundingMode ${t}`)}}function Xe(e){const[t,n,s]=je(e);return t===1&&n===1&&s===1}function Pt(e,t){return Xe(e)||Xe(t)}function ce(e){return je(e).every(t=>t>0)}function Tc(e){if(e==="NHWC")return"channelsLast";if(e==="NCHW")return"channelsFirst";throw new Error(`Unknown dataFormat ${e}`)}function xt(e,t,n){if(n!=null){if(typeof t=="string")throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if(typeof t=="number")g(_e(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if(typeof t=="object")t.forEach(s=>{s.forEach(r=>{g(_e(r),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${r}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}/**
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
 */function Xf(e,t){const s={x:d(e,"x","reshape","string_or_numeric")},r={shape:t};return b.runKernel(Ya,s,r)}const E=m({reshape_:Xf});/**
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
 */function Zf(e,t,n,s,r){const o=d(e,"x","avgPool","float32"),a=1;g(Pt(n,a),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`);let i=o,c=!1;o.rank===3&&(c=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2]])),g(i.rank===4,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),xt("avgPool",s,r);const u={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r};let l=b.runKernel(ho,u,h);return l=H(l,o.dtype),c?E(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const Ic=m({avgPool_:Zf});/**
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
 */function Yf(e,t,n,s,r,o="NDHWC"){const a=d(e,"x","avgPool3d","float32");let i=a,c=!1;a.rank===4&&(c=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),g(i.rank===5,()=>`Error in avgPool3d: x must be rank 5 but got rank ${i.rank}.`),g(o==="NDHWC",()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),g(typeof n=="number"&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),xt("avgPool3d",s,r);const u={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:o};let l=b.runKernel(fo,u,h);return l=H(l,i.dtype),c?E(l,[l.shape[1],l.shape[2],l.shape[3],l.shape[4]]):l}const Jf=m({avgPool3d_:Yf});/**
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
 */function Qf(e,t=0){g(e.length>=1,()=>"Pass at least one tensor to concat");const n=Ve(e,"tensors","concat","string_or_numeric");if(n[0].dtype==="complex64"&&n.forEach(o=>{if(o.dtype!=="complex64")throw new Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${o.dtype}. `)}),n.length===1)return re(n[0]);const s=n,r={axis:t};return b.runKernel(xo,s,r)}const dt=m({concat_:Qf});/**
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
 */function td(e,t,n=!1,s=!1){let r=d(e,"a","matMul"),o=d(t,"b","matMul");[r,o]=J(r,o);const a={a:r,b:o},i={transposeA:n,transposeB:s};return b.runKernel(po,a,i)}const L=m({matMul_:td});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ed(e){const n={x:d(e,"x","sigmoid","float32")};return b.runKernel(di,n)}const Te=m({sigmoid_:ed});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function nd(e,t,n){const s=d(e,"x","slice","string_or_numeric");if(s.rank===0)throw new Error("Slicing scalar is not possible");const r={x:s},o={begin:t,size:n};return b.runKernel(ui,r,o)}const Z=m({slice_:nd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function sd(e){const n={x:d(e,"x","tanh","float32")};return b.runKernel(Fi,n)}const bs=m({tanh_:sd});/**
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
 */function rd(e,t,n,s,r,o){const a=d(e,"forgetBias","basicLSTMCell"),i=d(t,"lstmKernel","basicLSTMCell"),c=d(n,"lstmBias","basicLSTMCell"),u=d(s,"data","basicLSTMCell"),h=d(r,"c","basicLSTMCell"),l=d(o,"h","basicLSTMCell"),f=dt([u,l],1),p=L(f,i),w=F(p,c),y=w.shape[0],$=w.shape[1]/4,x=[y,$],N=Z(w,[0,0],x),k=Z(w,[0,$],x),v=Z(w,[0,$*2],x),T=Z(w,[0,$*3],x),_=F(I(Te(N),bs(k)),I(h,Te(F(a,v)))),M=I(bs(_),Te(T));return[_,M]}const od=m({basicLSTMCell_:rd});/**
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
 */function ad(e,t,n){const s=d(e,"x","batchToSpaceND"),r=t.reduce((i,c)=>i*c);g(s.rank>=1+t.length,()=>`input rank is ${s.rank} but should be > than blockShape.length ${t.length}`),g(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),g(s.shape[0]%r===0,()=>`input tensor batch is ${s.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${r}`);const o={x:s},a={blockShape:t,crops:n};return b.runKernel(go,o,a)}const _c=m({batchToSpaceND_:ad});function id(e){let t;return e.rank===0||e.rank===1?t=E(e,[1,1,1,e.size]):e.rank===2?t=E(e,[1,1,e.shape[0],e.shape[1]]):e.rank===3?t=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]):t=e,t}/**
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
 */function cd(e,t,n,s,r,o){o==null&&(o=.001);const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;r!=null&&(u=d(r,"scale","batchNorm"));let h;s!=null&&(h=d(s,"offset","batchNorm")),g(i.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),g(h==null||i.rank===h.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),g(u==null||i.rank===u.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");const f={x:id(a),scale:u,offset:h,mean:i,variance:c},p={varianceEpsilon:o},w=b.runKernel(ta,f,p);return E(w,a.shape)}const Bn=m({batchNorm_:cd});function ud(e,t,n,s,r,o){const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;r!=null&&(u=d(r,"scale","batchNorm"));let h;return s!=null&&(h=d(s,"offset","batchNorm")),g(a.rank===2,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${a.rank}.`),g(i.rank===2||i.rank===1,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${i.rank}.`),g(c.rank===2||c.rank===1,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),u!=null&&g(u.rank===2||u.rank===1,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${u.rank}.`),h!=null&&g(h.rank===2||h.rank===1,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${h.rank}.`),Bn(a,i,c,h,u,o)}const ld=m({batchNorm2d_:ud});function hd(e,t,n,s,r,o){const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;r!=null&&(u=d(r,"scale","batchNorm"));let h;return s!=null&&(h=d(s,"offset","batchNorm")),g(a.rank===3,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${a.rank}.`),g(i.rank===3||i.rank===1,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${i.rank}.`),g(c.rank===3||c.rank===1,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),u!=null&&g(u.rank===3||u.rank===1,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${u.rank}.`),h!=null&&g(h.rank===3||h.rank===1,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${h.rank}.`),Bn(a,i,c,h,u,o)}const fd=m({batchNorm3d_:hd});function dd(e,t,n,s,r,o){const a=d(e,"x","batchNorm"),i=d(t,"mean","batchNorm"),c=d(n,"variance","batchNorm");let u;r!=null&&(u=d(r,"scale","batchNorm"));let h;return s!=null&&(h=d(s,"offset","batchNorm")),g(a.rank===4,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${a.rank}.`),g(i.rank===4||i.rank===1,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${i.rank}.`),g(c.rank===4||c.rank===1,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),u!=null&&g(u.rank===4||u.rank===1,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${u.rank}.`),h!=null&&g(h.rank===4||h.rank===1,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${h.rank}.`),Bn(a,i,c,h,u,o)}const pd=m({batchNorm4d_:dd});/**
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
 */function gd(e,t,n){const s=d(e,"x","bincount"),r=d(t,"weights","bincount");g(s.dtype==="int32",()=>`Error in bincount: input dtype must be int32, but got ${s.dtype}`),g(n>=0,()=>`size must be non-negative, but got ${n}.`),g(r.size===s.size||r.size===0,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${s.shape}, weights shape: ${r.shape}.`);const o={x:s,weights:r},a={size:n};return b.runKernel(mo,o,a)}const Ac=m({bincount_:gd});/**
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
 */function md(e,t){const n=d(e,"x","bitwiseAnd"),s=d(t,"y","bitwiseAnd");if(!Ct(n.shape,s.shape))throw new Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${s.shape}`);if(n.dtype!=="int32"||s.dtype!=="int32")throw new Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${s.dtype}`);const r={a:n,b:s};return b.runKernel(bo,r)}const bd=m({bitwiseAnd_:md});/**
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
 */function wd(e,t){const n=d(e,"s0","broadcastArgs","int32"),s=d(t,"s1","broadcastArgs","int32");if(n.rank!==1)throw new Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(s.rank!==1)throw new Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${s.rank}`);const r={s0:n,s1:s};return b.runKernel(wo,r)}const yd=m({broadcastArgs_:wd});/**
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
 */function $d(e,t){let n=d(e,"broadcastTo","x");const s=n.shape;if(pt(t),t.length<n.rank)throw new Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){const u=n.shape.slice();for(;u.length<t.length;)u.unshift(1);n=E(n,u)}const r=n.shape,o=Array.from(t);for(let u=t.length-1;u>=0;u--)if(r[u]===t[u])o[u]=1;else if(n.shape[u]!==1)throw new Error(`broadcastTo(): [${s}] cannot be broadcast to [${t}].`);if(o.map((u,h)=>u>1?h:-1).filter(u=>u>=0).length===0)return re(n);const i={x:n},c={reps:o};return b.runKernel(Fs,i,c)}const bn=m({broadcastTo_:$d});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ed(e){const n={x:d(e,"x","ceil","float32")};return b.runKernel(yo,n)}const kd=m({ceil_:Ed});/**
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
 */function un(e,t,n){pt(e),n=n||sn(t);const s={shape:e,value:t,dtype:n};return b.runKernel(Zo,{},s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function xd(e,t,n){const s=d(e,"x","clipByValue");if(g(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)return un(s.shape,t,s.dtype);const r={x:s},o={clipValueMin:t,clipValueMax:n};return b.runKernel($o,r,o)}const vd=m({clipByValue_:xd});function Sd(e){return dt(e,0)}const Td=m({concat1d_:Sd});function Id(e,t){return dt(e,t)}const _d=m({concat2d_:Id});function Ad(e,t){return dt(e,t)}const Dd=m({concat3d_:Ad});function Nd(e,t){return dt(e,t)}const Md=m({concat4d_:Nd});/**
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
 */function Fd(e,t,n,s,r="NHWC",o=[1,1],a){const i=d(e,"x","conv2d","float32"),c=d(t,"filter","conv2d","float32");let u=i,h=!1;i.rank===3&&(h=!0,u=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(u.rank===4,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),g(c.rank===4,()=>`Error in conv2d: filter must be rank 4, but got rank ${c.rank}.`),xt("conv2d",s,a);const l=r==="NHWC"?u.shape[3]:u.shape[1];g(l===c.shape[2],()=>`Error in conv2d: depth of input (${l}) must match input depth for filter ${c.shape[2]}.`),g(Pt(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),g(ce(o),()=>"Error in conv2D: Dilated rates should be larger than 0."),g(ce(n),()=>"Error in conv2D: Strides should be larger than 0.");const f={x:u,filter:c},p={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a},w=b.runKernel(vo,f,p);return h?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Rn=m({conv2d_:Fd});function Bd(e,t,n,s,r="NWC",o=1,a){const i=d(e,"x","conv1d"),c=d(t,"filter","conv1d");let u=i,h=!1;i.rank===2&&(h=!0,u=E(i,[1,i.shape[0],i.shape[1]])),g(u.rank===3,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),g(c.rank===3,()=>`Error in conv1d: filter must be rank 3, but got rank ${c.rank}.`),xt("conv1d",s,a),g(u.shape[2]===c.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${c.shape[1]}.`),g(Pt(n,o),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${o}'`),g(ce(o),()=>"Error in conv1D: Dilated rates should be larger than 0."),g(ce(n),()=>"Error in conv1D: Stride should be larger than 0."),g(r==="NWC",()=>`Error in conv1d: got dataFormat of ${r} but only NWC is currently supported.`);const l=E(c,[1,c.shape[0],c.shape[1],c.shape[2]]),f=E(u,[u.shape[0],1,u.shape[1],u.shape[2]]),$=Rn(f,l,[1,n],s,"NHWC",[1,o],a);return h?E($,[$.shape[2],$.shape[3]]):E($,[$.shape[0],$.shape[2],$.shape[3]])}const Rd=m({conv1d_:Bd});/**
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
 */function Cd(e,t,n,s,r,o="NHWC",a){g(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let i=e,c=t,u=!1;t.rank===3&&(u=!0,c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]),i=[1,e[0],e[1],e[2]]),g(i.length===4,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${i.length}.`),g(c.rank===4,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${c.rank}`),g(n.rank===4,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);const h=o==="NHWC"?i[3]:i[1],l=o==="NHWC"?c.shape[3]:c.shape[1];g(h===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${h}) must match input depth for filter ${n.shape[2]}.`),g(l===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${l}) must match output depth for filter ${n.shape[3]}.`),xt("conv2dDerInput",r,a);const f={dy:c,filter:n},p={strides:s,pad:r,dataFormat:o,dimRoundingMode:a,inputShape:i},w=b.runKernel(To,f,p);return u?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Dc=m({conv2DBackpropInput_:Cd});function Pd(e,t,n,s,r,o){const a=d(e,"x","conv2dTranspose"),i=d(t,"filter","conv2dTranspose");return Dc(n,a,i,s,r,"NHWC",o)}const Od=m({conv2dTranspose_:Pd});/**
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
 */function Ld(e,t,n,s,r="NDHWC",o=[1,1,1]){const a=d(e,"x","conv3d"),i=d(t,"filter","conv3d");let c=a,u=!1;a.rank===4&&(u=!0,c=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),g(c.rank===5,()=>`Error in conv3d: input must be rank 5, but got rank ${c.rank}.`),g(i.rank===5,()=>`Error in conv3d: filter must be rank 5, but got rank ${i.rank}.`),g(c.shape[4]===i.shape[3],()=>`Error in conv3d: depth of input (${c.shape[4]}) must match input depth for filter ${i.shape[3]}.`),g(Pt(n,o),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),g(r==="NDHWC",()=>`Error in conv3d: got dataFormat of ${r} but only NDHWC is currently supported.`),g(ce(o),()=>"Error in conv3D: Dilated rates should be larger than 0."),g(ce(n),()=>"Error in conv3D: Strides should be larger than 0.");const h={x:c,filter:i},l={strides:n,pad:s,dataFormat:r,dilations:o},f=b.runKernel(Io,h,l);return u?E(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const Wd=m({conv3d_:Ld});/**
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
 */function Ud(e,t,n,s,r){g(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,a=t,i=!1;t.rank===4&&(i=!0,a=E(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),o=[1,e[0],e[1],e[2],e[3]]);const c=o[4],u=a.shape[4];g(o.length===5,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${o.length}.`),g(a.rank===5,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${a.rank}`),g(n.rank===5,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),g(c===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[3]}.`),g(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);const h={dy:a,filter:n},l={pad:r,strides:s,inputShape:o},f=b.runKernel(_o,h,l);return i?E(f,[f.shape[1],f.shape[2],f.shape[3],f.shape[4]]):f}const qd=m({conv3DBackpropInput_:Ud});function Gd(e,t,n,s,r){const o=d(e,"x","conv3dTranspose"),a=d(t,"filter","conv3dTranspose");return qd(n,o,a,s,r)}const zd=m({conv3dTranspose_:Gd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Kd(e){const n={x:d(e,"x","cos","float32")};return b.runKernel(Ao,n)}const Vd=m({cos_:Kd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function jd(e){const n={x:d(e,"x","cosh","float32")};return b.runKernel(Do,n)}const Hd=m({cosh_:jd});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function Xd(e,t=0,n=!1,s=!1){const o={x:d(e,"x","cumprod")},a={axis:t,exclusive:n,reverse:s};return b.runKernel(No,o,a)}const Zd=m({cumprod_:Xd});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Yd(e,t=0,n=!1,s=!1){const o={x:d(e,"x","cumsum")},a={axis:t,exclusive:n,reverse:s};return b.runKernel(Mo,o,a)}const Jd=m({cumsum_:Yd});/**
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
 */function Qd(e,t,n,s=!1){const r=d(e,"x","denseBincount"),o=d(t,"weights","denseBincount");g(r.dtype==="int32",()=>`Error in denseBincount: input dtype must be int32, but got ${r.dtype}`),g(r.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${r.rank}.`),g(n>=0,()=>`size must be non-negative, but got ${n}.`),g(o.size===r.size||o.size===0,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${r.shape}, weights shape: ${o.shape}.`);const a={x:r,weights:o},i={size:n,binaryOutput:s};return b.runKernel(Bo,a,i)}const tp=m({denseBincount_:Qd});/**
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
 */function ep(e,t,n="NHWC"){const s=d(e,"x","depthToSpace","float32"),r=n==="NHWC"?s.shape[1]:s.shape[2],o=n==="NHWC"?s.shape[2]:s.shape[3],a=n==="NHWC"?s.shape[3]:s.shape[1];g(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),g(r*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${r} and ${t}  for depthToSpace with input shape
    ${s.shape}`),g(o*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${o} and ${t} for depthToSpace with input shape
        ${s.shape}`),g(a%(t*t)===0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${a} for depthToSpace with input shape ${s.shape}`);const i={x:s},c={blockSize:t,dataFormat:n};return b.runKernel(Ro,i,c)}const np=m({depthToSpace_:ep});/**
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
 */function sp(e,t,n,s,r="NHWC",o=[1,1],a){const i=d(e,"x","depthwiseConv2d","float32"),c=d(t,"filter","depthwiseConv2d","float32");let u=i,h=!1;i.rank===3&&(h=!0,u=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(u.rank===4,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),g(c.rank===4,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${c.rank}.`);const l=r==="NHWC"?u.shape[3]:u.shape[1];g(l===c.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${l}) must match the inChannels dimension in filter ${c.shape[2]}.`),xt("depthwiseConv2d",s,a);const f={x:u,filter:c},p={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a},w=b.runKernel(Co,f,p);return h?E(w,[w.shape[1],w.shape[2],w.shape[3]]):w}const Ws=m({depthwiseConv2d_:sp});/**
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
 */function rp(e){const n={x:d(e,"x","diag")};return b.runKernel(Lo,n)}const op=m({diag_:rp});/**
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
 */function ap(e,t,n,s,r=[1,1],o="NHWC"){const a=d(e,"x","dilation2d"),i=d(t,"filter","dilation2d");g(a.rank===3||a.rank===4,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${a.rank}.`),g(i.rank===3,()=>`Error in dilation2d: filter must be rank 3, but got rank ${i.rank}.`),g(o==="NHWC",()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${o}`);let c=a,u=!1;a.rank===3&&(c=E(a,[1,a.shape[0],a.shape[1],a.shape[2]]),u=!0),g(c.shape[3]===i.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${c.shape[3]} vs ${i.shape[2]}`);const h={x:c,filter:i},l={strides:n,pad:s,dilations:r},f=b.runKernel(Wo,h,l);return u?E(f,[f.shape[1],f.shape[2],f.shape[3]]):f}const ip=m({dilation2d_:ap});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function Nc(e,t){const n=e.length,s=[];for(let r=0;r<n;r++){const o=n-1-r,a=e[o]||1;(t[t.length-1-r]||1)>1&&a===1&&s.unshift(o)}return s}function Us(e,t){const n=[];for(let s=0;s<t.length;s++){const r=e[e.length-s-1],o=t.length-s-1,a=t[o];(r==null||r===1&&a>1)&&n.unshift(o)}return n}function et(e,t){const n=Math.max(e.length,t.length),s=new Array(n);for(let r=0;r<n;r++){let o=e[e.length-r-1];o==null&&(o=1);let a=t[t.length-r-1];if(a==null&&(a=1),o===1)s[n-r-1]=a;else if(a===1)s[n-r-1]=o;else if(o!==a){const i=`Operands could not be broadcast together with shapes ${e} and ${t}.`;throw Error(i)}else s[n-r-1]=o}return s}const cp=Object.freeze(Object.defineProperty({__proto__:null,assertAndGetBroadcastShape:et,getBroadcastDims:Nc,getReductionAxes:Us},Symbol.toStringTag,{value:"Module"}));/**
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
 */function up(e,t){let n=d(e,"a","equal","string_or_numeric"),s=d(t,"b","equal","string_or_numeric");[n,s]=J(n,s),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(Ko,r)}const Mc=m({equal_:up});/**
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
 */function lp(e,t,n){const s=d(t,"a","where"),r=d(n,"b","where"),o=d(e,"condition","where","bool"),a=et(et(o.shape,s.shape),r.shape),i=bn(o,a),c=bn(s,a),u=bn(r,a),h={condition:i,t:c,e:u};return b.runKernel(ii,h)}const Kt=m({where_:lp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function hp(e){const n={x:d(e,"x","zerosLike")};return b.runKernel(Li,n)}const bt=m({zerosLike_:hp});/**
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
 */function fp(e,t){let n=d(e,"a","div"),s=d(t,"b","div");[n,s]=J(n,s);const r=K(n,s),o=bt(r),a=Mc(s,o);return Kt(a,o,r)}const dp=m({divNoNan_:fp});/**
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
 */function pp(e,t){const n=d(e,"t1","dot"),s=d(t,"t2","dot");g((n.rank===1||n.rank===2)&&(s.rank===1||s.rank===2),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${s.rank}.`);const r=n.rank===1?n.size:n.shape[1],o=s.rank===1?s.size:s.shape[0];if(g(r===o,()=>`Error in dot: inner dimensions of inputs must match, but got ${r} and ${o}.`),n.rank===1&&s.rank===1){const a=E(n,[1,-1]),i=E(s,[-1,1]),c=L(a,i);return E(c,[])}else if(n.rank===1&&s.rank===2){const a=E(n,[1,-1]),i=E(s,[s.shape[0],s.shape[1]]),c=L(a,i);return E(c,[c.size])}else if(n.rank===2&&s.rank===1){const a=E(s,[-1,1]),i=L(n,a);return E(i,[i.size])}else{const a=E(s,[s.shape[0],s.shape[1]]);return L(n,a)}}const gp=m({dot_:pp});/**
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
 */function mp(e,...t){const n=t.map((r,o)=>d(r,`tensors${o}`,"einsum")),s={equation:e};return b.runKernel(qo,n,s)}const $e=m({einsum_:mp});/**
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
 */function bp(e){const n={x:d(e,"x","elu","float32")};return b.runKernel(Go,n)}const Fc=m({elu_:bp});/**
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
 */function wp(e,t){const n=d(e,"x","ensureShape","string_or_numeric");if(!Ur(n.shape,t))throw new Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}const yp=m({ensureShape_:wp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function $p(e){let t=d(e,"x","erf");g(t.dtype==="int32"||t.dtype==="float32",()=>"Input dtype must be `int32` or `float32`."),t.dtype==="int32"&&(t=H(t,"float32"));const n={x:t};return b.runKernel(zo,n)}const Ep=m({erf_:$p});/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function qs(e,t){for(let n=0;n<e.length;++n)if(e[e.length-n-1]!==t-1-n)return!1;return!0}function Bc(e,t,n){const s=e.length+t.length,r=[];let o=0,a=0;for(let i=0;i<s;i++)n.indexOf(i)===-1?r.push(e[o++]):r.push(t[a++]);return r}function kp(e,t){const n=[],s=e.length;for(let o=0;o<s;o++)t.indexOf(o)===-1&&n.push(e[o]);const r=t.map(o=>e[o]);return[n,r]}function ln(e,t){const n=t.map(s=>1);return Bc(e,n,t)}function xp(e,t,n){g(qs(t,n),()=>`${e} supports only inner-most axes for now. Got axes ${t} and rank-${n} input.`)}function vp(e,t){if(qs(e,t))return null;const n=[];for(let s=0;s<t;++s)e.indexOf(s)===-1&&n.push(s);return e.forEach(s=>n.push(s)),n}function Sp(e){return e.map((t,n)=>[n,t]).sort((t,n)=>t[1]-n[1]).map(t=>t[0])}function Tp(e,t){const n=[];for(let s=t-e;s<t;++s)n.push(s);return n}/**
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
 */function Ip(e,t=null,n=!1){const r={x:d(e,"x","max")},o={reductionIndices:t,keepDims:n};return b.runKernel($a,r,o)}const Ie=m({max_:Ip});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function _p(e,t=null,n=!1){const r={x:d(e,"x","min")},o={axis:t,keepDims:n};return b.runKernel(Ta,r,o)}const ws=m({min_:_p});/**
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
 */function Ap(e,t){let n=d(e,"base","pow"),s=d(t,"exp","pow");[n,s]=J(n,s);const r={a:n,b:s};return b.runKernel(Ua,r)}const Ze=m({pow_:Ap});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function q(e,t){if((rt(e)&&t!=="string"||Array.isArray(e))&&t!=="complex64")throw new Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if(t==="string"&&rt(e)&&!(e instanceof Uint8Array))throw new Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return Zt(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Dp(e){const n={x:d(e,"x","sqrt","float32")};return b.runKernel(gi,n)}const Rt=m({sqrt_:Dp});/**
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
 */function Np(e){const t=d(e,"x","square"),n={};return b.runKernel("Square",{x:t},n)}const St=m({square_:Np});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Mp(e,t=null,n=!1){let s=d(e,"x","sum");s.dtype==="bool"&&(s=H(s,"int32"));const r={x:s},o={axis:t,keepDims:n};return b.runKernel(mi,r,o)}const z=m({sum_:Mp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Fp(e,t="euclidean",n=null,s=!1){e=d(e,"x","norm");const r=Rc(e,t,n);let o=r.shape;if(s){const a=nn(n,e.shape);o=ln(r.shape,a)}return E(r,o)}function Rc(e,t,n=null){if(e.rank===0)return mt(e);if(e.rank!==1&&n===null)return Rc(E(e,[-1]),t,n);if(e.rank===1||typeof n=="number"||Array.isArray(n)&&n.length===1){if(t===1)return z(mt(e),n);if(t===1/0)return Ie(mt(e),n);if(t===-1/0)return ws(mt(e),n);if(t==="euclidean"||t===2)return Rt(z(Ze(mt(e),q(2,"int32")),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}if(Array.isArray(n)&&n.length===2){if(t===1)return Ie(z(mt(e),n[0]),n[1]-1);if(t===1/0)return Ie(z(mt(e),n[1]),n[0]);if(t===-1/0)return ws(z(mt(e),n[1]),n[0]);if(t==="fro"||t==="euclidean")return Rt(z(St(e),n));throw new Error(`Error in norm: invalid ord value: ${t}`)}throw new Error(`Error in norm: invalid axis: ${n}`)}const Cn=m({norm_:Fp});/**
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
 */function Bp(e,t=null,n=!1){return Cn(e,"euclidean",t,n)}const Rp=m({euclideanNorm_:Bp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Cp(e){const n={x:d(e,"x","exp")};return b.runKernel(Vo,n)}const ue=m({exp_:Cp});/**
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
 */function Pp(e,t=0){const n=d(e,"x","expandDims","string_or_numeric");g(t<=n.rank,()=>"Axis must be <= rank of the tensor");const s={input:n},r={dim:t};return b.runKernel(jo,s,r)}const Lt=m({expandDims_:Pp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Op(e){const n={x:d(e,"x","expm1")};return b.runKernel(Ho,n)}const Lp=m({expm1_:Op});/**
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
 */function Wp(e,t){const n=d(e,"x","tile","string_or_numeric");g(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`);const s={x:n},r={reps:t};return b.runKernel(Fs,s,r)}const Le=m({tile_:Wp});/**
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
 */function Up(e,t,n,s="float32"){t==null&&(t=e);const r=Bt([e,t],s),o=e<=t?e:t;for(let i=0;i<o;++i)r.set(1,i,i);const a=E(r.toTensor(),[e,t]);if(n==null)return a;if(n.length===1)return Le(Lt(a,0),[n[0],1,1]);if(n.length===2)return Le(Lt(Lt(a,0),0),[n[0],n[1],1,1]);if(n.length===3)return Le(Lt(Lt(Lt(a,0),0),0),[n[0],n[1],n[2],1,1]);throw new Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}const Cc=m({eye_:Up});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function qp(e){const n={x:d(e,"x","floor","float32")};return b.runKernel(Jo,n)}const Pc=m({floor_:qp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Gp(e,t,n=0,s=0){const r=d(e,"x","gather"),o=d(t,"indices","gather","int32"),a={x:r,indices:o},i={axis:n,batchDims:s};return b.runKernel(ea,a,i)}const Oc=m({gather_:Gp});/**
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
 */function zp(e,t){let n=d(e,"a","greater","string_or_numeric"),s=d(t,"b","greater","string_or_numeric");[n,s]=J(n,s),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(sa,r)}const Pn=m({greater_:zp});/**
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
 */function Kp(e,t){let n=d(e,"a","greaterEqual","string_or_numeric"),s=d(t,"b","greaterEqual","string_or_numeric");[n,s]=J(n,s),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(ra,r)}const Lc=m({greaterEqual_:Kp});/**
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
 */function Vp(e){const n={input:d(e,"input","imag")};return b.runKernel(aa,n)}const On=m({imag_:Vp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function jp(e){const n={x:d(e,"x","isFinite")};return b.runKernel(ia,n)}const Hp=m({isFinite_:jp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Xp(e){const n={x:d(e,"x","isInf")};return b.runKernel(ca,n)}const Zp=m({isInf_:Xp});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Yp(e){const n={x:d(e,"x","isNaN")};return b.runKernel(ua,n)}const Jp=m({isNaN_:Yp});/**
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
 */function Qp(e,t=.2){const s={x:d(e,"x","leakyRelu")},r={alpha:t};return b.runKernel(la,s,r)}const Wc=m({leakyRelu_:Qp});/**
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
 */function tg(e,t){let n=d(e,"a","less","string_or_numeric"),s=d(t,"b","less","string_or_numeric");[n,s]=J(n,s),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(ha,r)}const ys=m({less_:tg});/**
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
 */function eg(e,t){let n=d(e,"a","lessEqual","string_or_numeric"),s=d(t,"b","lessEqual","string_or_numeric");[n,s]=J(n,s),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(fa,r)}const Gs=m({lessEqual_:eg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ng(e,t,n){if(n<=0)throw new Error("The number of values should be positive.");const s={start:e,stop:t,num:n};return b.runKernel(da,{},s)}/**
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
 */function sg(e,t=5,n=1,s=1,r=.5){const o=d(e,"x","localResponseNormalization");g(o.rank===4||o.rank===3,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${o.rank}.`),g(_e(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let a=o,i=!1;o.rank===3&&(i=!0,a=E(o,[1,o.shape[0],o.shape[1],o.shape[2]]));const c={x:a},u={depthRadius:t,bias:n,alpha:s,beta:r},h=b.runKernel(ya,c,u);return i?E(h,[h.shape[1],h.shape[2],h.shape[3]]):h}const rg=m({localResponseNormalization_:sg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function og(e){const n={x:d(e,"x","log","float32")};return b.runKernel(pa,n)}const Ye=m({log_:og});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ag(e){const n={x:d(e,"x","log1p")};return b.runKernel(ga,n)}const Uc=m({log1p_:ag});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ig(e){return g(Vt(e),()=>"The f passed in grad(f) must be a function"),(t,n)=>{const s=d(t,"x","tf.grad","string_or_numeric"),r=n!=null?d(n,"dy","tf.grad"):null;return b.tidy(()=>{const{value:o,grads:a}=b.gradients(()=>e(s),[s],r);return r!=null&&ct(o.shape,r.shape,"The shape of dy passed in grad(f)(x, dy) must match the shape returned by f(x)"),Ln(a),a[0]})}}function cg(e){return g(Vt(e),()=>"The f passed in grads(f) must be a function"),(t,n)=>{g(Array.isArray(t),()=>"The args passed in grads(f)(args) must be an array of `Tensor`s or `TensorLike`s");const s=Ve(t,"args","tf.grads","string_or_numeric"),r=n!=null?d(n,"dy","tf.grads"):null;return b.tidy(()=>{const{value:o,grads:a}=b.gradients(()=>e(...s),s,r);return r!=null&&ct(o.shape,r.shape,"The shape of dy passed in grads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ln(a),a})}}function ug(e){return g(Vt(e),()=>"The f passed in valueAndGrad(f) must be a function"),(t,n)=>{g(t instanceof Q,()=>"The x passed in valueAndGrad(f)(x) must be a tensor"),g(n==null||n instanceof Q,()=>"The dy passed in valueAndGrad(f)(x, dy) must be a tensor");const{grads:s,value:r}=b.gradients(()=>e(t),[t],n);return Ln(s),{grad:s[0],value:r}}}function lg(e){return g(Vt(e),()=>"The f passed in valueAndGrads(f) must be a function"),(t,n)=>{g(Array.isArray(t)&&t.every(r=>r instanceof Q),()=>"The args passed in valueAndGrads(f)(args) must be array of tensors"),g(n==null||n instanceof Q,()=>"The dy passed in valueAndGrads(f)(args, dy) must be a tensor");const s=b.gradients(()=>e(...t),t,n);return n!=null&&ct(s.value.shape,n.shape,"The shape of dy passed in valueAndGrads(f)([x1,...], dy) must match the shape returned by f([x1,...])"),Ln(s.grads),s}}function qc(e,t){g(Vt(e),()=>"The f passed in variableGrads(f) must be a function"),g(t==null||Array.isArray(t)&&t.every(u=>u instanceof Ke),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");const n=t!=null;if(!n){t=[];for(const u in b.registeredVariables)t.push(b.registeredVariables[u])}const s=n?t.filter(u=>!u.trainable):null,r=t.length;t=t.filter(u=>u.trainable),g(t.length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${r} variables is trainable.`);const o=!0,{value:a,grads:i}=b.gradients(e,t,null,o);g(i.some(u=>u!=null),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),g(a.rank===0,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${a.rank} tensor`);const c={};return t.forEach((u,h)=>{i[h]!=null&&(c[u.name]=i[h])}),s!=null&&s.forEach(u=>c[u.name]=null),{value:a,grads:c}}function Nt(e){return b.customGrad(e)}function Ln(e){if(e.filter(n=>n==null).length>0)throw new Error(`Cannot compute gradient of y=f(x) with respect to x. Make sure that
    the f you passed encloses all operations that lead from x to y.`)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function hg(e){const n={x:d(e,"x","neg")};return b.runKernel(Ma,n)}const At=m({neg_:hg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function fg(e){const n={x:d(e,"x","softplus")};return b.runKernel(pi,n)}const Gc=m({softplus_:fg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function dg(e){const t=d(e,"x","logSigmoid");return Nt(s=>({value:At(Gc(At(s))),gradFunc:a=>I(a,Te(At(s)))}))(t)}const pg=m({logSigmoid_:dg});/**
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
 */function gg(e,t){let n=d(e,"a","sub"),s=d(t,"b","sub");[n,s]=J(n,s);const r={a:n,b:s};return b.runKernel(Ni,r)}const P=m({sub_:gg});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function mg(e,t=-1){const n=d(e,"logits","logSoftmax");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return Nt((r,o)=>{const i=Ie(r,t,!0),c=P(r,i),u=P(H(c,"float32"),Ye(z(ue(c),t,!0)));return o([u]),{value:u,gradFunc:(l,f)=>{const[p]=f,w=!0,y=ue(p);return P(l,I(z(l,t,w),y))}}})(n)}const bg=m({logSoftmax_:mg});/**
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
 */function wg(e,t=null,n=!1){const s=d(e,"x","logSumExp"),r=nn(t,s.shape),o=Ie(s,r,!0),a=P(s,o),i=ue(a),c=z(i,r),u=Ye(c),h=F(E(o,u.shape),u);if(n){const l=ln(h.shape,r);return E(h,l)}return h}const zc=m({logSumExp_:wg});/**
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
 */function yg(e,t){const n=d(e,"a","logicalAnd","bool"),s=d(t,"b","logicalAnd","bool");et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(ma,r)}const Sn=m({logicalAnd_:yg});/**
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
 */function $g(e){const n={x:d(e,"x","logicalNot","bool")};return b.runKernel(ba,n)}const Kc=m({logicalNot_:$g});/**
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
 */function Eg(e,t){const n=d(e,"a","logicalOr","bool"),s=d(t,"b","logicalOr","bool");et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(wa,r)}const Vc=m({logicalOr_:Eg});/**
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
 */function kg(e,t){const n=d(e,"a","logicalXor","bool"),s=d(t,"b","logicalXor","bool");return et(n.shape,s.shape),Sn(Vc(e,t),Kc(Sn(e,t)))}const xg=m({logicalXor_:kg});/**
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
 */const dn=2147483648;function vg(e,t,n="left"){const s=d(e,"sortedSequence","searchSorted"),r=d(t,"values","searchSorted"),o=s.shape[s.shape.length-1],a=r.shape[r.shape.length-1],i=E(s,[-1,o]),c=E(r,[-1,a]);if(i.rank<2)throw new Error("Sorted input argument must be at least 2-dimensional");if(i.shape[0]!==c.shape[0])throw new Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(W(c.shape)>=dn)throw new Error(`values tensor size must less than ${dn}`);if(i.shape[1]>=dn)throw new Error(`trailing dim_size must less than ${dn} for int32 output type, was ${i.shape[1]}`);const u={sortedSequence:i,values:c},h={side:n};return b.runKernel(ai,u,h)}const zs=m({searchSorted_:vg});/**
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
 */function Sg(e,t){return zs(e,t,"left")}/**
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
 */function Tg(e,t,n,s,r){const o=d(e,"x","maxPool"),a=1;let i=o,c=!1;o.rank===3&&(c=!0,i=E(o,[1,o.shape[0],o.shape[1],o.shape[2]])),g(i.rank===4,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),g(Pt(n,a),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '${a}'`),xt("maxPool",s,r);const u={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r},l=b.runKernel(ka,u,h);return c?E(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const jc=m({maxPool_:Tg});/**
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
 */function Ig(e,t=[1,1,1],n,s,r,o="NDHWC"){const a=d(e,"x","maxPool3d");let i=a,c=!1;a.rank===4&&(c=!0,i=E(a,[1,a.shape[0],a.shape[1],a.shape[2],a.shape[3]])),g(i.rank===5,()=>`Error in maxPool3d: x must be rank 5 but got rank ${i.rank}.`),g(o==="NDHWC",()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${o}`),xt("maxPool3d",s,r);const u={x:i},h={filterSize:t,strides:n,pad:s,dimRoundingMode:r,dataFormat:o},l=b.runKernel(xa,u,h);return c?E(l,[l.shape[1],l.shape[2],l.shape[3],l.shape[4]]):l}const _g=m({maxPool3d_:Ig});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ag(e,t,n,s,r=!1){const a={x:d(e,"x","maxPoolWithArgmax")},i={filterSize:t,strides:n,pad:s,includeBatchInIndex:r},c=b.runKernel(va,a,i);return{result:c[0],indexes:c[1]}}const Dg=m({maxPoolWithArgmax_:Ag});/**
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
 */function Ng(e,t){let n=d(e,"a","maximum"),s=d(t,"b","maximum");[n,s]=J(n,s),n.dtype==="bool"&&(n=H(n,"int32"),s=H(s,"int32")),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(Ea,r)}const Hc=m({maximum_:Ng});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */function Mg(e,t=null,n=!1){const r={x:d(e,"x","mean")},o={axis:t,keepDims:n};return b.runKernel(Sa,r,o)}const Tn=m({mean_:Mg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Me(e,t="float32"){if(pt(e),t==="complex64"){const s=Me(e,"float32"),r=Me(e,"float32");return Ht(s,r)}const n=Dn(W(e),t);return b.makeTensor(n,e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function se(e,t="float32"){if(pt(e),t==="complex64"){const s=se(e,"float32"),r=Me(e,"float32");return Ht(s,r)}const n=Ts(W(e),t);return b.makeTensor(n,e,t)}/**
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
 */function Fg(e,t,{indexing:n="xy"}={}){if(n!=="xy"&&n!=="ij")throw new TypeError(`${n} is not a valid third argument to meshgrid`);if(e===void 0)return[];let s=d(e,"x","meshgrid",e instanceof Q?e.dtype:"float32");if(t===void 0)return[s];let r=d(t,"y","meshgrid",t instanceof Q?t.dtype:"float32");const o=W(s.shape),a=W(r.shape);return n==="xy"?(s=E(s,[1,-1]),r=E(r,[-1,1]),[L(se([a,1],s.dtype),s),L(r,se([1,o],r.dtype))]):(s=E(s,[-1,1]),r=E(r,[1,-1]),[L(s,se([1,a],s.dtype)),L(se([o,1],r.dtype),r)])}/**
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
 */function Bg(e,t){let n=d(e,"a","minimum"),s=d(t,"b","minimum");[n,s]=J(n,s),n.dtype==="bool"&&(n=H(n,"int32"),s=H(s,"int32")),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(Ia,r)}const In=m({minimum_:Bg});/**
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
 */function Rg(e,t,n){g(n==="reflect"||n==="symmetric",()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);const s=d(e,"x","mirrorPad");if(s.rank===0)throw new Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");g(t.length===s.rank,()=>`Padding doesn't match input. Must be ${s.rank}. Got ${t.length}.`);const r=n==="reflect"?1:0;for(let i=0;i<s.rank;i++)g(t[i].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),g(t[i][0]>=0&&t[i][0]<=s.shape[i]-r&&t[i][1]>=0&&t[i][1]<=s.shape[i]-r,()=>`Padding in dimension ${i} cannot be greater than or equal to ${s.shape[i]-r} or less than 0 for input of shape ${s.shape}`);const o={paddings:t,mode:n},a={x:s};return b.runKernel(_a,a,o)}const Cg=m({mirrorPad_:Rg});/**
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
 */function Pg(e,t){let n=d(e,"a","mod"),s=d(t,"b","mod");[n,s]=J(n,s);const r={a:n,b:s};return b.runKernel(Aa,r)}const Og=m({mod_:Pg});/**
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
 */function Lg(e,t=null,n=!1){e=d(e,"x","moments");const s=nn(t,e.shape),r=Tn(e,s,n);let o=r.shape;n||(o=ln(r.shape,s));const a=St(P(H(e,"float32"),E(r,o))),i=Tn(a,s,n);return{mean:r,variance:i}}const Wg=m({moments_:Lg});function Ug(e,t,n,s){const r=d(t,"data","multiRNNCell"),o=Ve(n,"c","multiRNNCell"),a=Ve(s,"h","multiRNNCell");let i=r;const c=[];for(let l=0;l<e.length;l++){const f=e[l](i,o[l],a[l]);c.push(f[0]),c.push(f[1]),i=f[1]}const u=[],h=[];for(let l=0;l<c.length;l+=2)u.push(c[l]),h.push(c[l+1]);return[u,h]}const qg=m({multiRNNCell_:Ug});/**
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
 */function Gg(e,t,n,s=!1){const r=d(e,"logits","multinomial"),o=r.size,a=r.rank;if(o<2)throw new Error(`Error in multinomial: you need at least 2 outcomes, but got ${o}.`);if(a>2)throw new Error(`Rank of probabilities must be 1 or 2, but is ${a}`);n=n||Math.random();const c={logits:a===1?E(r,[1,-1]):r},u={numSamples:t,seed:n,normalized:s},h=b.runKernel(Da,c,u);return a===1?E(h,[h.size]):h}const zg=m({multinomial_:Gg});/**
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
 */function Kg(e,t){let n=d(e,"a","notEqual","string_or_numeric"),s=d(t,"b","notEqual","string_or_numeric");[n,s]=J(n,s),et(n.shape,s.shape);const r={a:n,b:s};return b.runKernel(Fa,r)}const Xc=m({notEqual_:Kg});/**
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
 */function Vg(e,t,n=1,s=0,r="int32"){if(t<2)throw new Error(`Error in oneHot: depth must be >=2, but it is ${t}`);const a={indices:d(e,"indices","oneHot","int32")},i={dtype:r,depth:t,onValue:n,offValue:s};return b.runKernel(Oa,a,i)}const $s=m({oneHot_:Vg});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function jg(e){const n={x:d(e,"x","onesLike")};return b.runKernel(Pa,n)}const Hg=m({onesLike_:jg});function Xg(e,t){const n=d(e,"v1","outerProduct"),s=d(t,"v2","outerProduct");g(n.rank===1&&s.rank===1,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${s.rank}.`);const r=E(n,[-1,1]),o=E(s,[1,-1]);return L(r,o)}const Zg=m({outerProduct_:Xg});/**
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
 */function Yg(e,t,n=0){const s=d(e,"x","pad");if(s.rank===0)throw new Error("pad(scalar) is not defined. Pass non-scalar to pad");const r={paddings:t,constantValue:n},o={x:s};return b.runKernel(Wa,o,r)}const hn=m({pad_:Yg});function Jg(e,t,n=0){return g(t.length===2,()=>"Invalid number of paddings. Must be length of 2."),hn(e,[t],n)}const Qg=m({pad1d_:Jg});function tm(e,t,n=0){return g(t.length===2&&t[0].length===2&&t[1].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),hn(e,t,n)}const em=m({pad2d_:tm});function nm(e,t,n=0){return g(t.length===3&&t[0].length===2&&t[1].length===2&&t[2].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),hn(e,t,n)}const sm=m({pad3d_:nm});function rm(e,t,n=0){return g(t.length===4&&t[0].length===2&&t[1].length===2&&t[2].length===2&&t[3].length===2,()=>"Invalid number of paddings. Must be length of 2 each."),hn(e,t,n)}const om=m({pad4d_:rm});/**
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
 */function am(e,t,n){const s=d(e,"x","spaceToBatchND");g(s.rank>=1+t.length,()=>`input rank ${s.rank} should be > than [blockShape] ${t.length}`),g(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),g(s.shape.reduce((a,i,c)=>c>0&&c<=t.length?a&&(i+n[c-1][0]+n[c-1][1])%t[c-1]===0:a,!0),()=>`input spatial dimensions ${s.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`);const r={x:s},o={blockShape:t,paddings:n};return b.runKernel(bi,r,o)}const Zc=m({spaceToBatchND_:am});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function im(e,t,n,s,r,o,a){r==null&&(r=[1,1]),o==null&&(o=1),s===0&&(s="valid");const i=d(e,"x","maxPool");let c=i,u=!1;i.rank===3&&(u=!0,c=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),g(Pt(o,r),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${o} and dilations '${r}'`);const h=vc(c.shape,t,o,r,s),l=[h.dilationHeight,h.dilationWidth];let f;s==="same"?f=um([h.filterHeight,h.filterWidth],l):f=[[0,0],[0,0]];const p=l[0]===1&&l[1]===1,[w,y]=cm([h.inHeight,h.inWidth],l,f),$=p?s:"valid",x=p?c:Zc(c,l,w),k=(n==="avg"?()=>Ic(x,t,o,$,a):()=>jc(x,t,o,$,a))(),v=p?k:_c(k,l,y);return u?E(v,[v.shape[1],v.shape[2],v.shape[3]]):v}function cm(e,t,n){const s=n.map(h=>h[0]),r=n.map(h=>h[1]),o=e.concat(s,r),a=t.map((h,l)=>(h-o[l]%h)%h),i=r.map((h,l)=>h+a[l]),c=t.map((h,l)=>[s[l],i[l]]),u=t.map((h,l)=>[0,a[l]]);return[c,u]}function um(e,t){const s=e.map((a,i)=>a+(a-1)*(t[i]-1)).map(a=>a-1),r=s.map(a=>Math.floor(a/2)),o=s.map((a,i)=>a-r[i]);return s.map((a,i)=>[r[i],o[i]])}const lm=m({pool_:im});/**
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
 */function hm(e,t){const n=d(e,"x","prelu"),s=d(t,"alpha","prelu"),r={x:n,alpha:s};return b.runKernel(qa,r)}const Yc=m({prelu_:hm});/**
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
 */function fm(e,t=null,n=!1){let s=d(e,"x","prod");s.dtype==="bool"&&(s=H(s,"int32"));const r={x:s},o={axis:t,keepDims:n};return b.runKernel(Ga,r,o)}const dm=m({prod_:fm});/**
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
 */function pm(e,t,n,s){const r=e.map((h,l)=>d(h,`tensors${l}`,"raggedGather","int32")),o=d(t,"paramsDenseValues","raggedGather"),a=d(n,"indices","raggedGather","int32"),i={paramsNestedSplits:r,paramsDenseValues:o,indices:a},c={outputRaggedRank:s},u=b.runKernel(za,i,c);return{outputNestedSplits:u.slice(0,u.length-1),outputDenseValues:u[u.length-1]}}const gm=m({raggedGather_:pm});/**
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
 */function mm(e,t,n){const s=d(e,"starts","raggedRange"),r=d(t,"limits","raggedRange",s.dtype),o=d(n,"deltas","raggedRange",s.dtype),a={starts:s,limits:r,deltas:o},i=b.runKernel(Ka,a);return{rtNestedSplits:i[0],rtDenseValues:i[1]}}const bm=m({raggedRange_:mm});/**
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
 */function wm(e,t,n,s,r){const o=d(e,"shape","raggedTensorToTensor","int32"),a=d(t,"values","raggedTensorToTensor"),i=d(n,"defaultValue","raggedTensorToTensor",a.dtype),c=s.map((l,f)=>d(l,`tensors${f}`,"raggedTensorToTensor","int32")),u={shape:o,values:a,defaultValue:i,rowPartitionTensors:c},h={rowPartitionTypes:r};return b.runKernel(Va,u,h)}const ym=m({raggedTensorToTensor_:wm});/**
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
 */function $m(e,t,n){pt(e);const s=W(e);let r=null;if(n==null||n==="float32")r=new Float32Array(s);else if(n==="int32")r=new Int32Array(s);else if(n==="bool")r=new Uint8Array(s);else throw new Error(`Unknown data type ${n}`);for(let o=0;o<s;o++)r[o]=t();return b.makeTensor(r,e,n)}const Em=m({rand_:$m});var Ks={exports:{}};Ks.exports;(function(e){(function(t,n,s){function r(c){var u=this,h=i();u.next=function(){var l=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=l-(u.c=l|0)},u.c=1,u.s0=h(" "),u.s1=h(" "),u.s2=h(" "),u.s0-=h(c),u.s0<0&&(u.s0+=1),u.s1-=h(c),u.s1<0&&(u.s1+=1),u.s2-=h(c),u.s2<0&&(u.s2+=1),h=null}function o(c,u){return u.c=c.c,u.s0=c.s0,u.s1=c.s1,u.s2=c.s2,u}function a(c,u){var h=new r(c),l=u&&u.state,f=h.next;return f.int32=function(){return h.next()*4294967296|0},f.double=function(){return f()+(f()*2097152|0)*11102230246251565e-32},f.quick=f,l&&(typeof l=="object"&&o(l,h),f.state=function(){return o(h,{})}),f}function i(){var c=4022871197,u=function(h){h=String(h);for(var l=0;l<h.length;l++){c+=h.charCodeAt(l);var f=.02519603282416938*c;c=f>>>0,f-=c,f*=c,c=f>>>0,f-=c,c+=f*4294967296}return(c>>>0)*23283064365386963e-26};return u}n&&n.exports?n.exports=a:this.alea=a})(fe,e)})(Ks);var km=Ks.exports,Vs={exports:{}};Vs.exports;(function(e){(function(t,n,s){function r(i){var c=this,u="";c.x=0,c.y=0,c.z=0,c.w=0,c.next=function(){var l=c.x^c.x<<11;return c.x=c.y,c.y=c.z,c.z=c.w,c.w^=c.w>>>19^l^l>>>8},i===(i|0)?c.x=i:u+=i;for(var h=0;h<u.length+64;h++)c.x^=u.charCodeAt(h)|0,c.next()}function o(i,c){return c.x=i.x,c.y=i.y,c.z=i.z,c.w=i.w,c}function a(i,c){var u=new r(i),h=c&&c.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,w=(f+p)/(1<<21);while(w===0);return w},l.int32=u.next,l.quick=l,h&&(typeof h=="object"&&o(h,u),l.state=function(){return o(u,{})}),l}n&&n.exports?n.exports=a:this.xor128=a})(fe,e)})(Vs);var xm=Vs.exports,js={exports:{}};js.exports;(function(e){(function(t,n,s){function r(i){var c=this,u="";c.next=function(){var l=c.x^c.x>>>2;return c.x=c.y,c.y=c.z,c.z=c.w,c.w=c.v,(c.d=c.d+362437|0)+(c.v=c.v^c.v<<4^(l^l<<1))|0},c.x=0,c.y=0,c.z=0,c.w=0,c.v=0,i===(i|0)?c.x=i:u+=i;for(var h=0;h<u.length+64;h++)c.x^=u.charCodeAt(h)|0,h==u.length&&(c.d=c.x<<10^c.x>>>4),c.next()}function o(i,c){return c.x=i.x,c.y=i.y,c.z=i.z,c.w=i.w,c.v=i.v,c.d=i.d,c}function a(i,c){var u=new r(i),h=c&&c.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,w=(f+p)/(1<<21);while(w===0);return w},l.int32=u.next,l.quick=l,h&&(typeof h=="object"&&o(h,u),l.state=function(){return o(u,{})}),l}n&&n.exports?n.exports=a:this.xorwow=a})(fe,e)})(js);var vm=js.exports,Hs={exports:{}};Hs.exports;(function(e){(function(t,n,s){function r(i){var c=this;c.next=function(){var h=c.x,l=c.i,f,p;return f=h[l],f^=f>>>7,p=f^f<<24,f=h[l+1&7],p^=f^f>>>10,f=h[l+3&7],p^=f^f>>>3,f=h[l+4&7],p^=f^f<<7,f=h[l+7&7],f=f^f<<13,p^=f^f<<9,h[l]=p,c.i=l+1&7,p};function u(h,l){var f,p=[];if(l===(l|0))p[0]=l;else for(l=""+l,f=0;f<l.length;++f)p[f&7]=p[f&7]<<15^l.charCodeAt(f)+p[f+1&7]<<13;for(;p.length<8;)p.push(0);for(f=0;f<8&&p[f]===0;++f);for(f==8?p[7]=-1:p[f],h.x=p,h.i=0,f=256;f>0;--f)h.next()}u(c,i)}function o(i,c){return c.x=i.x.slice(),c.i=i.i,c}function a(i,c){i==null&&(i=+new Date);var u=new r(i),h=c&&c.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,w=(f+p)/(1<<21);while(w===0);return w},l.int32=u.next,l.quick=l,h&&(h.x&&o(h,u),l.state=function(){return o(u,{})}),l}n&&n.exports?n.exports=a:this.xorshift7=a})(fe,e)})(Hs);var Sm=Hs.exports,Xs={exports:{}};Xs.exports;(function(e){(function(t,n,s){function r(i){var c=this;c.next=function(){var h=c.w,l=c.X,f=c.i,p,w;return c.w=h=h+1640531527|0,w=l[f+34&127],p=l[f=f+1&127],w^=w<<13,p^=p<<17,w^=w>>>15,p^=p>>>12,w=l[f]=w^p,c.i=f,w+(h^h>>>16)|0};function u(h,l){var f,p,w,y,$,x=[],N=128;for(l===(l|0)?(p=l,l=null):(l=l+"\0",p=0,N=Math.max(N,l.length)),w=0,y=-32;y<N;++y)l&&(p^=l.charCodeAt((y+32)%l.length)),y===0&&($=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,y>=0&&($=$+1640531527|0,f=x[y&127]^=p+$,w=f==0?w+1:0);for(w>=128&&(x[(l&&l.length||0)&127]=-1),w=127,y=4*128;y>0;--y)p=x[w+34&127],f=x[w=w+1&127],p^=p<<13,f^=f<<17,p^=p>>>15,f^=f>>>12,x[w]=p^f;h.w=$,h.X=x,h.i=w}u(c,i)}function o(i,c){return c.i=i.i,c.w=i.w,c.X=i.X.slice(),c}function a(i,c){i==null&&(i=+new Date);var u=new r(i),h=c&&c.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,w=(f+p)/(1<<21);while(w===0);return w},l.int32=u.next,l.quick=l,h&&(h.X&&o(h,u),l.state=function(){return o(u,{})}),l}n&&n.exports?n.exports=a:this.xor4096=a})(fe,e)})(Xs);var Tm=Xs.exports,Zs={exports:{}};Zs.exports;(function(e){(function(t,n,s){function r(i){var c=this,u="";c.next=function(){var l=c.b,f=c.c,p=c.d,w=c.a;return l=l<<25^l>>>7^f,f=f-p|0,p=p<<24^p>>>8^w,w=w-l|0,c.b=l=l<<20^l>>>12^f,c.c=f=f-p|0,c.d=p<<16^f>>>16^w,c.a=w-l|0},c.a=0,c.b=0,c.c=-1640531527,c.d=1367130551,i===Math.floor(i)?(c.a=i/4294967296|0,c.b=i|0):u+=i;for(var h=0;h<u.length+20;h++)c.b^=u.charCodeAt(h)|0,c.next()}function o(i,c){return c.a=i.a,c.b=i.b,c.c=i.c,c.d=i.d,c}function a(i,c){var u=new r(i),h=c&&c.state,l=function(){return(u.next()>>>0)/4294967296};return l.double=function(){do var f=u.next()>>>11,p=(u.next()>>>0)/4294967296,w=(f+p)/(1<<21);while(w===0);return w},l.int32=u.next,l.quick=l,h&&(typeof h=="object"&&o(h,u),l.state=function(){return o(u,{})}),l}n&&n.exports?n.exports=a:this.tychei=a})(fe,e)})(Zs);var Im=Zs.exports,Jc={exports:{}};const _m={},Am=Object.freeze(Object.defineProperty({__proto__:null,default:_m},Symbol.toStringTag,{value:"Module"})),Dm=Lu(Am);(function(e){(function(t,n,s){var r=256,o=6,a=52,i="random",c=s.pow(r,o),u=s.pow(2,a),h=u*2,l=r-1,f;function p(v,T,_){var M=[];T=T==!0?{entropy:!0}:T||{};var A=x($(T.entropy?[v,k(n)]:v??N(),3),M),D=new w(M),C=function(){for(var B=D.g(o),O=c,U=0;B<u;)B=(B+U)*r,O*=r,U=D.g(1);for(;B>=h;)B/=2,O/=2,U>>>=1;return(B+U)/O};return C.int32=function(){return D.g(4)|0},C.quick=function(){return D.g(4)/4294967296},C.double=C,x(k(D.S),n),(T.pass||_||function(B,O,U,X){return X&&(X.S&&y(X,D),B.state=function(){return y(D,{})}),U?(s[i]=B,O):B})(C,A,"global"in T?T.global:this==s,T.state)}function w(v){var T,_=v.length,M=this,A=0,D=M.i=M.j=0,C=M.S=[];for(_||(v=[_++]);A<r;)C[A]=A++;for(A=0;A<r;A++)C[A]=C[D=l&D+v[A%_]+(T=C[A])],C[D]=T;(M.g=function(B){for(var O,U=0,X=M.i,nt=M.j,wt=M.S;B--;)O=wt[X=l&X+1],U=U*r+wt[l&(wt[X]=wt[nt=l&nt+O])+(wt[nt]=O)];return M.i=X,M.j=nt,U})(r)}function y(v,T){return T.i=v.i,T.j=v.j,T.S=v.S.slice(),T}function $(v,T){var _=[],M=typeof v,A;if(T&&M=="object")for(A in v)try{_.push($(v[A],T-1))}catch{}return _.length?_:M=="string"?v:v+"\0"}function x(v,T){for(var _=v+"",M,A=0;A<_.length;)T[l&A]=l&(M^=T[l&A]*19)+_.charCodeAt(A++);return k(T)}function N(){try{var v;return f&&(v=f.randomBytes)?v=v(r):(v=new Uint8Array(r),(t.crypto||t.msCrypto).getRandomValues(v)),k(v)}catch{var T=t.navigator,_=T&&T.plugins;return[+new Date,t,_,t.screen,k(n)]}}function k(v){return String.fromCharCode.apply(0,v)}if(x(s.random(),n),e.exports){e.exports=p;try{f=Dm}catch{}}else s["seed"+i]=p})(typeof self<"u"?self:fe,[],Math)})(Jc);var Nm=Jc.exports,Mm=km,Fm=xm,Bm=vm,Rm=Sm,Cm=Tm,Pm=Im,ge=Nm;ge.alea=Mm;ge.xor128=Fm;ge.xorwow=Bm;ge.xorshift7=Rm;ge.xor4096=Cm;ge.tychei=Pm;var Ys=ge;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const Om=.001,Qc=.1;function Lm(e,t,n){return n==null&&(n=Js()),Es(e,t,(s,r)=>Qs(s,r,n))}function Js(){return b.backend.floatPrecision()===32?Om:Qc}function Es(e,t,n){let s=!0;if((rt(e)||rt(t))&&(s=!1),rt(e)&&rt(t)&&(s=!0),s){const a=e.constructor.name,i=t.constructor.name;if(a!==i)throw new Error(`Arrays are of different type. Actual: ${a}. Expected: ${i}`)}if(Array.isArray(e)&&Array.isArray(t)){const a=Dt(e),i=Dt(t);if(!Ct(a,i))throw new Error(`Arrays have different shapes. Actual: [${a}]. Expected: [${i}]`)}const r=rt(e)?e:jt(e),o=rt(t)?t:jt(t);if(r.length!==o.length)throw new Error(`Arrays have different lengths actual: ${r.length} vs expected: ${o.length}.
Actual:   ${r}.
Expected: ${o}.`);for(let a=0;a<o.length;++a){const i=r[a],c=o[a];if(!n(i,c))throw new Error(`Arrays differ: actual[${a}] = ${i}, expected[${a}] = ${c}.
Actual:   ${r}.
Expected: ${o}.`)}typeof expect<"u"&&expect().nothing()}function Wm(e,t){e().then(()=>t.fail(),()=>t()),typeof expect<"u"&&expect().nothing()}function Um(e,t){const n=typeof t=="string"||typeof t=="number"||typeof t=="boolean"?[t]:t;return qt(e)||qt(e[0])||qt(t)||qt(t[0])?Es(e,n,(s,r)=>s==r):Es(e,t,(s,r)=>Qs(s,r,0))}function qm(e,t,n){if(n==null&&(n=Js()),!Qs(e,t,n))throw new Error(`Numbers differ: actual === ${e}, expected === ${t}`);typeof expect<"u"&&expect().nothing()}function Qs(e,t,n){return!isFinite(e)&&!isFinite(t)?!0:!(isNaN(e)||isNaN(t)||Math.abs(e-t)>n)}function Gm(e,t,n){for(let s=0;s<e.length;s++)if(e[s]<t||e[s]>n)throw new Error(`Value out of range:${e[s]} low: ${t}, high: ${n}`)}function zm(e,t){const n=new Float32Array(e),s=new Float32Array(t);if(n.length!==s.length)throw new Error(`Expected ArrayBuffer to be of length ${s.length}, but it was ${n.length}`);for(let r=0;r<s.length;r++)if(n[r]!==s[r])throw new Error(`Expected ArrayBuffer value at ${r} to be ${s[r]} but got ${n[r]} instead`)}function tu(e){for(let t=0;t<e.length;t++){const n=e[t];Array.isArray(n)?tu(n):e[t]=on(n)}return e}function Km(e){const t=document.createElement("video");return"playsInline"in t&&(t.playsInline=!0),t.muted=!0,t.loop=!0,t.style.position="fixed",t.style.left="0px",t.style.top="0px",t.preload="auto",t.appendChild(e),new Promise(n=>{t.addEventListener("loadeddata",s=>n(t)),t.load()})}async function Vm(e){await e.play(),"requestVideoFrameCallback"in e&&await new Promise(t=>{e.requestVideoFrameCallback(t)})}const jm=Object.freeze(Object.defineProperty({__proto__:null,TEST_EPSILON_FLOAT16:Qc,createVideoElement:Km,encodeStrings:tu,expectArrayBuffersEqual:zm,expectArraysClose:Lm,expectArraysEqual:Um,expectNumbersClose:qm,expectPromiseToFail:Wm,expectValuesInRange:Gm,play:Vm,testEpsilon:Js},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class tr{constructor(t,n,s,r,o){this.mean=t,this.stdDev=n,this.dtype=s,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+this.stdDev*2,this.lower=this.mean-this.stdDev*2);const a=o||Math.random();this.random=Ys.alea(a.toString())}nextValue(){if(!isNaN(this.nextVal)){const r=this.nextVal;return this.nextVal=NaN,r}let t,n,s=!1;for(;!s;){let r,o,a;do r=2*this.random()-1,o=2*this.random()-1,a=r*r+o*o;while(a>=1||a===0);const i=Math.sqrt(-2*Math.log(a)/a);t=this.mean+this.stdDev*r*i,n=this.mean+this.stdDev*o*i,(!this.truncated||this.isValidTruncated(t))&&(s=!0)}return(!this.truncated||this.isValidTruncated(n))&&(this.nextVal=this.convertValue(n)),this.convertValue(t)}convertValue(t){return this.dtype==null||this.dtype==="float32"?t:Math.round(t)}isValidTruncated(t){return t<=this.upper&&t>=this.lower}}class Hm{constructor(t,n,s,r){this.alpha=t,this.beta=1/n,this.dtype=s;const o=r||Math.random();this.randu=Ys.alea(o.toString()),this.randn=new tr(0,1,s,!1,this.randu()),t<1?this.d=t+2/3:this.d=t-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let t,n,s,r,o,a;for(;;){do r=this.randn.nextValue(),a=1+this.c*r;while(a<=0);if(a*=a*a,t=r*r,n=1-.331*t*t,s=.5*t+this.d*(1-a+Math.log(a)),o=this.randu(),o<n||Math.log(o)<s)break}return a=1/this.beta*this.d*a,this.alpha<1&&(a*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(a)}convertValue(t){return this.dtype==="float32"?t:Math.round(t)}}class Xm{constructor(t=0,n=1,s,r){if(this.canReturnFloat=()=>this.dtype==null||this.dtype==="float32",this.min=t,this.range=n-t,this.dtype=s,r==null&&(r=Math.random()),typeof r=="number"&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw new Error(`The difference between ${t} - ${n} <= 1 and dtype is not float`);this.random=Ys.alea(r)}convertValue(t){return this.canReturnFloat()?t:Math.round(t)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}/**
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
 */function Zm(e,t,n=1,s="float32",r){if(pt(e),n==null&&(n=1),s==null&&(s="float32"),s!=="float32"&&s!=="int32")throw new Error(`Unsupported data type ${s}`);const o=new Hm(t,n,s,r),a=Bt(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const Ym=m({randomGamma_:Zm});/**
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
 */function Jm(e,t=0,n=1,s,r){if(pt(e),s!=null&&s==="bool")throw new Error(`Unsupported data type ${s}`);const o=new tr(t,n,s,!1,r),a=Bt(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const eu=m({randomNormal_:Jm});/**
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
 */function Qm(e,t,n){if(t!=null&&t==="bool")throw new Error(`Unsupported data type ${t}`);return eu(e,0,1,t,n)}const tb=m({randomStandardNormal_:Qm});/**
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
 */function eb(e,t=0,n=1,s="float32",r){pt(e);const o=Bt(e,s),a=new Xm(t,n,null,r);for(let i=0;i<o.values.length;i++)o.values[i]=a.nextValue();return o.toTensor()}const er=m({randomUniform_:eb});/**
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
 */function nb(e,t,n,s){return er(e,t,n,"int32",s)}const sb=m({randomUniformInt_:nb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Je(e,t,n=1,s="float32"){if(n===0)throw new Error("Cannot have a step of zero");const r={start:e,stop:t,step:n,dtype:s};return b.runKernel(ja,{},r)}/**
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
 */function rb(e){const n={input:d(e,"input","real")};return b.runKernel(Ha,n)}const Qe=m({real_:rb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ob(e){const n={x:d(e,"x","reciprocal")};return b.runKernel(Xa,n)}const ab=m({reciprocal_:ob});/**
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
 */function ib(e){const n={x:d(e,"x","relu")};return b.runKernel(Za,n)}const Wn=m({relu_:ib});/**
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
 */function cb(e){const n={x:d(e,"x","relu6")};return b.runKernel(ti,n)}const nu=m({relu6_:cb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ub(e,t){const s={x:d(e,"x","reverse")},r={dims:t};return b.runKernel(ei,s,r)}const le=m({reverse_:ub});/**
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
 */function lb(e){const t=d(e,"x","reverse");return g(t.rank===1,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),le(t,0)}const hb=m({reverse1d_:lb});/**
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
 */function fb(e,t){const n=d(e,"x","reverse");return g(n.rank===2,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),le(n,t)}const db=m({reverse2d_:fb});/**
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
 */function pb(e,t){const n=d(e,"x","reverse");return g(n.rank===3,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),le(n,t)}const gb=m({reverse3d_:pb});/**
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
 */function mb(e,t){const n=d(e,"x","reverse");return g(n.rank===4,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),le(n,t)}const bb=m({reverse4d_:mb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function wb(e){const n={x:d(e,"x","round")};return b.runKernel(ni,n)}const su=m({round_:wb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function yb(e){const n={x:d(e,"x","rsqrt","float32")};return b.runKernel(si,n)}const $b=m({rsqrt_:yb});/**
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
 */function Eb(e){const n={x:d(e,"x","selu")};return b.runKernel(ci,n)}const kb=m({selu_:Eb});function xb(e,t,n,s,r,o=[1,1],a="NHWC"){const i=d(e,"x","separableConv2d"),c=d(t,"depthwiseFilter","separableConv2d"),u=d(n,"pointwiseFilter","separableConv2d");let h=i,l=!1;if(i.rank===3&&(l=!0,h=E(i,[1,i.shape[0],i.shape[1],i.shape[2]])),a==="NCHW")throw new Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");g(h.rank===4,()=>`Error in separableConv2d: input must be rank 4, but got rank ${h.rank}.`),g(c.rank===4,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${c.rank}.`),g(u.rank===4,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${c.rank}.`),g(u.shape[0]===1,()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),g(u.shape[1]===1,()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);const f=c.shape[2],p=c.shape[3];g(u.shape[2]===f*p,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${f*p}, but got ${u.shape[2]}.`);const w=Ws(h,c,s,r,a,o),$=Rn(w,u,1,"valid",a);return l?E($,[$.shape[1],$.shape[2],$.shape[3]]):$}const vb=m({separableConv2d_:xb});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
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
 */async function Sb(e,t){const n=d(e,"x","setdiff1d"),s=d(t,"y","setdiff1d");g(n.dtype===s.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${s.dtype}).`),g(n.rank===1,()=>`x should be 1D tensor, but got x (${n.shape}).`),g(s.rank===1,()=>`y should be 1D tensor, but got y (${s.shape}).`);const r=await n.data(),o=await s.data(),a=new Set(o);let i=0;for(let h=0;h<r.length;h++)a.has(r[h])||i++;const c=new vn([i],n.dtype),u=new vn([i],"int32");for(let h=0,l=0;h<r.length;h++)a.has(r[h])||(c.values[l]=r[h],u.values[l]=h,l++);return[c.toTensor(),u.toTensor()]}const Tb=Sb;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ib(e){const n={x:d(e,"x","sign")};return b.runKernel(fi,n)}const _b=m({sign_:Ib});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ab(e){const n={x:d(e,"x","sin","float32")};return b.runKernel(li,n)}const Db=m({sin_:Ab});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Nb(e){const n={x:d(e,"x","sinh")};return b.runKernel(hi,n)}const Mb=m({sinh_:Nb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Fb(e,t,n){const s=d(e,"x","slice1d");return g(s.rank===1,()=>`slice1d expects a rank-1 tensor, but got a rank-${s.rank} tensor`),Z(s,[t],[n])}const Bb=m({slice1d_:Fb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Rb(e,t,n){const s=d(e,"x","slice2d");return g(s.rank===2,()=>`slice2d expects a rank-2 tensor, but got a rank-${s.rank} tensor`),Z(s,t,n)}const Cb=m({slice2d_:Rb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Pb(e,t,n){const s=d(e,"x","slice3d");return g(s.rank===3,()=>`slice3d expects a rank-3 tensor, but got a rank-${s.rank} tensor`),Z(s,t,n)}const Ob=m({slice3d_:Pb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Lb(e,t,n){const s=d(e,"x","slice4d");return g(s.rank===4,()=>`slice4d expects a rank-4 tensor, but got a rank-${s.rank} tensor`),Z(s,t,n)}const Wb=m({slice4d_:Lb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Ub(e,t=-1){const n=d(e,"logits","softmax","float32");if(t===-1&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);const s={logits:n},r={dim:t};return b.runKernel(yi,s,r)}const qb=m({softmax_:Ub});/**
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
 */function Gb(e){g(e.dtype==="complex64",()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`);const t={input:e};return b.runKernel(Xo,t)}const nr=m({fft_:Gb});/**
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
 */function zb(e){g(e.dtype==="complex64",()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`);const t={input:e};return b.runKernel(oa,t)}const _n=m({ifft_:zb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Kb(e){const t=e.shape[e.shape.length-1],n=e.size/t;let s;if(t<=2){const r=E(e,[n,t]);s=_n(r)}else{const r=[n,2*(t-1)],o=E(Qe(e),[n,t]),a=E(On(e),[n,t]),i=le(Z(o,[0,1],[n,t-2]),1),c=I(le(Z(a,[0,1],[n,t-2]),1),q(-1)),u=dt([o,i],1),h=dt([a,c],1),l=E(Ht(u,h),[r[0],r[1]]);s=_n(l)}if(s=Qe(s),e.rank===3&&e.shape[0]!==0){const r=s,o=e.shape[0];s=E(s,[o,s.shape[0]/o,s.shape[1]]),r.dispose()}return s}const ru=m({irfft_:Kb});/**
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
 */function Vb(e,t,n=0){const r={x:d(e,"x","split")},o={numOrSizeSplits:t,axis:n};return b.runKernel(wi,r,o)}const tn=m({split_:Vb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function jb(e,t){g(e.dtype==="float32",()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let n=e.shape[e.shape.length-1];const s=e.size/n;let r;if(t!=null&&t<n){const w=e.shape.map($=>0),y=e.shape.map($=>$);y[e.shape.length-1]=t,r=Z(e,w,y),n=t}else if(t!=null&&t>n){const w=e.shape.map(y=>y);w[e.shape.length-1]=t-n,r=dt([e,Me(w)],e.shape.length-1),n=t}else r=e;const o=bt(r),a=E(Ht(r,o),[s,n]),i=nr(a),c=Math.floor(n/2)+1,u=Qe(i),h=On(i),l=tn(u,[c,n-c],u.shape.length-1),f=tn(h,[c,n-c],h.shape.length-1),p=r.shape.slice();return p[r.shape.length-1]=c,E(Ht(l[0],f[0]),p)}const sr=m({rfft_:jb});/**
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
 */function Hb(e,t){let n=d(e,"a","squaredDifference"),s=d(t,"b","squaredDifference");[n,s]=J(n,s),et(n.shape,s.shape);const r={a:n,b:s},o={};return b.runKernel(Si,r,o)}const ou=m({squaredDifference_:Hb});/**
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
 */function Xb(e,t){const n=d(e,"x","squeeze","string_or_numeric");return E(n,qr(n.shape,t).newShape)}const rr=m({squeeze_:Xb});/**
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
 */function Zb(e,t=0){const n=Ve(e,"tensors","stack","string_or_numeric");g(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&g(t<=n[0].rank,()=>"Axis must be <= rank of the tensor");const s=n,r={axis:t};return b.runKernel(La,s,r)}const en=m({stack_:Zb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Yb(e,t=0){const s={x:d(e,"x","step")},r={alpha:t};return b.runKernel(Wi,s,r)}const au=m({step_:Yb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Jb(e,t,n,s,r=0,o=0,a=0,i=0,c=0){const h={x:d(e,"x","stridedSlice","string_or_numeric")},l={begin:t,end:n,strides:s,beginMask:r,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};return b.runKernel(Ii,h,l)}const Qb=m({stridedSlice_:Jb});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function tw(e){const n={x:d(e,"x","tan","float32")};return b.runKernel(Mi,n)}const ew=m({tan_:tw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function kt(e,t){de(e);const n=Dt(e,t);if(n.length!==1)throw new Error("tensor1d() requires values to be a flat/TypedArray");return Zt(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function We(e,t,n){if(de(e),t!=null&&t.length!==2)throw new Error("tensor2d() requires shape to have two numbers");const s=Dt(e,n);if(s.length!==2&&s.length!==1)throw new Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return Zt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function iu(e,t,n){if(de(e),t!=null&&t.length!==3)throw new Error("tensor3d() requires shape to have three numbers");const s=Dt(e,n);if(s.length!==3&&s.length!==1)throw new Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor3d() requires shape to be provided when `values` are a flat array");return Zt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function nw(e,t,n){if(de(e),t!=null&&t.length!==4)throw new Error("tensor4d() requires shape to have four numbers");const s=Dt(e,n);if(s.length!==4&&s.length!==1)throw new Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor4d() requires shape to be provided when `values` are a flat array");return Zt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function sw(e,t,n){if(de(e),t!=null&&t.length!==5)throw new Error("tensor5d() requires shape to have five numbers");const s=Dt(e,n);if(s.length!==5&&s.length!==1)throw new Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor5d() requires shape to be provided when `values` are a flat array");return Zt(e,t,s,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function rw(e,t,n){if(de(e),t!=null&&t.length!==6)throw new Error("tensor6d() requires shape to have six numbers");const s=Dt(e,n);if(s.length!==6&&s.length!==1)throw new Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(s.length===1&&t==null)throw new Error("tensor6d() requires shape to be provided when `values` are a flat array");return t=t||s,Zt(e,t,s,n)}function or(e,t,n){const s=t.rank>1?t.shape[t.rank-1]:1,r=t.rank>1?t.rank-1:1,o=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${s}, and batchDim: ${r}.`;if(n.rank<r)throw new Error(o+` update.rank < ${r}. `);if(e.length<s+(n.rank-r))throw new Error(o+` Output shape length < ${s+(n.rank-r)}`);if(n.rank!==r+e.length-s)throw new Error(o+` update.rank != ${r+e.length-s}`);for(let a=0;a<r;++a)if(n.shape[a]!==t.shape[a])throw new Error(o+` updates.shape[${a}] (${n.shape[a]}) != indices.shape[${a}] (${t.shape[a]}).`);for(let a=0;a<n.rank-r;++a)if(n.shape[a+r]!==e[a+s])throw new Error(o+` updates.shape[${a+r}] (${n.shape[a+r]}) != shape[${a+r}] (${e[a+r]})`)}function Un(e,t,n){if(t.rank<1)throw new Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw new Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if(t.dtype!=="int32")throw new Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw new Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(n.length===0){if(t.size===0)throw new Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(e.size===0)throw new Error(`Updates specified for empty output. updates shape: ${e.shape}`)}or(n,t,e)}function cu(e,t,n){const s=t.shape.length,r=s>1?t.shape[s-1]:1,o=n.length;let a=1;for(let l=r;l<o;++l)a*=n[l];const i=r<1?1:r,c=W(t.shape)/i,u=[...Fe(n.slice(0,r)),1],h=W(n);return{sliceRank:r,numUpdates:c,sliceSize:a,strides:u,outputSize:h}}const ow=Object.freeze(Object.defineProperty({__proto__:null,calculateShapes:cu,validateInput:Un,validateUpdateShape:or},Symbol.toStringTag,{value:"Module"}));/**
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
 */function aw(e,t,n){const s=d(e,"tensor","tensorScatterupdate"),r=d(t,"indices","tensorScatterupdate","int32"),o=d(n,"updates","tensorScatterupdate");if(Un(o,r,s.shape),s.dtype!==o.dtype)throw new Error(`tensor and updates must have the same dtype, instead they are ${s.dtype} and ${o.dtype}.`);const a={tensor:s,indices:r,updates:o},i={};return b.runKernel(oi,a,i)}const iw=m({tensorScatterUpdate_:aw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function cw(e,t=1,n=!0){const s=d(e,"x","topk");if(s.rank===0)throw new Error("topk() expects the input to be of rank 1 or higher");const r=s.shape[s.shape.length-1];if(t<0)throw new Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>r)throw new Error(`'k' passed to topk() must be <= the last dimension (${r}) but got ${t}`);const o={x:s},a={k:t,sorted:n},[i,c]=b.runKernel(Bi,o,a);return{values:i,indices:c}}const uw=m({topk_:cw});/**
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
 */function lw(e,t=0,n=1,s,r){if(pt(e),s!=null&&s==="bool")throw new Error("Unsupported data type $ { dtype }");const o=new tr(t,n,s,!0,r),a=Bt(e,s);for(let i=0;i<a.values.length;i++)a.values[i]=o.nextValue();return a.toTensor()}const hw=m({truncatedNormal_:lw});/**
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
 */function fw(e,t=0){const n=d(e,"x","unique","string_or_numeric");g(n.rank>0,()=>"The input tensor must be at least 1D");const s={x:n},r={axis:t},[o,a]=b.runKernel(Ci,s,r);return{values:o,indices:a}}const dw=m({unique_:fw});/**
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
 */function pw(e,t,n){const s=d(e,"x","unsortedSegmentSum"),r=d(t,"segmentIds","unsortedSegmentSum","int32");g(_e(n),()=>"numSegments must be of dtype int");const o={x:s,segmentIds:r},a={numSegments:n};return b.runKernel(Oi,o,a)}const gw=m({unsortedSegmentSum_:pw});/**
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
 */function mw(e,t=0){const n=d(e,"x","unstack","string_or_numeric");g(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`);const s={value:n},r={axis:t};return b.runKernel(Pi,s,r)}const ar=m({unstack_:mw});/**
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
 */function bw(e,t){return zs(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ww(e,t=!0,n,s){return b.makeVariable(e,t,n,s)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function uu(e,t){const n=[];for(let o=0;o<t.length;o++)t[o]&&n.push(o);const s=Bt(e,"int32"),r=Bt([n.length,e.length],"int32");for(let o=0;o<n.length;o++){const a=s.indexToLoc(n[o]),i=o*e.length;r.values.set(a,i)}return r.toTensor()}/**
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
 */async function yw(e){const t=d(e,"condition","whereAsync","bool"),n=await t.data(),s=uu(t.shape,n);return e!==t&&t.dispose(),s}const lu=yw;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */async function $w(e,t,n){const s=d(e,"tensor","boolMask"),r=d(t,"mask","boolMask","bool"),o=n??0,a=r.rank,i=s.shape;g(a>0,()=>"mask cannot be scalar"),ct(i.slice(o,o+a),r.shape,"mask's shape must match the first K dimensions of tensor's shape,");let c=1;for(let y=o;y<o+a;y++)c*=i[y];const u=i.slice(0,o).concat([c],i.slice(o+a)),h=E(s,u),l=E(r,[-1]),f=await lu(l),p=rr(f,[1]),w=Oc(h,p,o);return e!==s&&s.dispose(),t!==r&&r.dispose(),p.dispose(),h.dispose(),l.dispose(),f.dispose(),w}const Ew=$w;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function kw(e,t,n){const s=d(e,"x","transpose");if(t==null&&(t=s.shape.map((a,i)=>i).reverse()),g(s.rank===t.length,()=>`Error in transpose: rank of input ${s.rank} must match length of perm ${t}.`),t.forEach(a=>{g(a>=0&&a<s.rank,()=>`All entries in 'perm' must be between 0 and ${s.rank-1} but got ${t}`)}),s.rank<=1)return s.clone();const r={x:s},o={perm:t};return s.dtype==="complex64"?tt(()=>{let a=Qe(s),i=On(s);return a=b.runKernel(pn,{x:a},o),i=b.runKernel(pn,{x:i},o),n&&(i=At(i)),Ht(a,i)}):b.runKernel(pn,r,o)}const An=m({transpose_:kw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function xw(e,t,n,s,r=!0){const o=d(e,"v","movingAverage"),a=d(t,"x","movingAverage"),i=d(n,"decay","movingAverage");nc(o,a),g(Ct(o.shape,a.shape),()=>"Shape mismatch in v and x");const c=q(1),u=P(c,i);let h=I(P(a,o),u);if(r){g(s!=null,()=>"When using zeroDebias: true, step is required.");const l=d(s,"step","movingAverage");h=K(h,P(c,Ze(i,l)))}return F(o,h)}const vw=m({movingAverage_:xw});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Sw(e,t,n){pt(n);const s=d(e,"indices","scatterND","int32"),r=d(t,"updates","scatterND");Un(r,s,n);const o={indices:s,updates:r},a={shape:n};return b.runKernel(ri,o,a)}const Tw=m({scatterND_:Sw});function Iw(e,t,n,s){if(e.dtype!=="int32")throw new Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw new Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);const r=e.rank>0?e.shape[0]:1,o=e.rank>1?e.shape[1]:1;if(n.length!==o)throw new Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${o}.`);const a=t.size;if(!(t.rank===0||t.rank===1&&a===r))throw new Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${r}]`);if(t.dtype!==s.dtype)throw new Error("sparseValues.dtype must match defaultValues.dtype")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function _w(e,t,n,s=0){pt(n);const r=d(e,"sparseIndices","sparseToDense","int32"),o=d(t,"sparseValues","sparseToDense","string_or_numeric"),a=d(s,"defaultValue","sparseToDense",o.dtype);Iw(r,o,n,a);const i={sparseIndices:r,sparseValues:o,defaultValue:a},c={outputShape:n};return b.runKernel(vi,i,c)}const Aw=m({sparseToDense_:_w});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Dw(e,t){const n=d(t,"indices","gatherND","int32"),r={params:d(e,"x","gatherND","string_or_numeric"),indices:n};return b.runKernel(na,r)}const Nw=m({gatherND_:Dw});/**
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
 */function Mw(e,t){if(t==null)return e.shape.slice();if(Ct(e.shape,t))return t;if(e.shape.length===t.length){const n=[];for(let s=0;s<e.shape.length;s++)t[s]==null&&e.shape[s]!=null?n.push(e.shape[s]):n.push(t[s]);return n}return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Fw(e,t,n,s){const r=d(e,"x","dropout");if(g(r.dtype==="float32",()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${r.dtype} tensor instead.`),g(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),t===0)return e instanceof Q?r.clone():r;const o=Mw(r,n),a=1-t,i=K(Pc(F(er(o,0,1,"float32",s),a)),a);return I(r,i)}const Bw=m({dropout_:Fw});/**
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
 */function hu(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function ir(e,t,n){const s=1-e%2,r=new Float32Array(e);for(let o=0;o<e;++o){const a=2*Math.PI*o/(e+s-1);r[o]=t-n*Math.cos(a)}return kt(r,"float32")}/**
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
 */async function Rw(e,t,n=1){const s=d(e,"predictions","inTopK"),r=d(t,"targets","inTopK");g(s.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${s.rank}`),g(s.rank-1===r.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${s.rank} and targets rank ${r.rank}`),ct(s.shape.slice(0,s.shape.length-1),r.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");const o=s.shape[s.shape.length-1];g(n>0&&n<=o,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${o}), but got ${n}`);const a=await s.data(),i=await r.data(),[c,u]=[a.length/o,o],h=Gr("bool",c);for(let l=0;l<c;l++){const f=l*u,p=a.subarray(f,f+u),w=[];for(let y=0;y<p.length;y++)w.push({value:p[y],index:y});w.sort((y,$)=>$.value-y.value),h[l]=0;for(let y=0;y<n;y++)if(w[y].index===i[l]){h[l]=1;break}}return e!==s&&s.dispose(),t!==r&&r.dispose(),xe(h,r.shape,"bool")}const Cw=Rw;/**
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
 */function Pw(e,t,n,s,r,o="NHWC",a){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]])),g(i.rank===4,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${i.shape}.`),g(c.rank===4,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${c.shape}.`),g(n.length===4,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);const u=o==="NHWC"?i.shape[3]:i.shape[1],h=o==="NHWC"?c.shape[3]:c.shape[1];g(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),g(h===n[3],()=>`Error in conv2dDerFilter: depth of dy (${h}) must match output depth for filter (${n[3]}).`),xt("conv2dDerFilter",r,a);const l={x:i,dy:c},f={strides:s,pad:r,dataFormat:o,dimRoundingMode:a,filterShape:n};return b.runKernel(So,l,f)}const Ow=m({conv2DBackpropFilter_:Pw});/**
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
 */function qn(e,t,n){if(n==null||n==="linear")return e;if(n==="relu")return I(e,au(t));throw new Error(`Cannot compute gradient for fused activation ${n}.`)}function Gn(e,t){let n=t;const s=Us(e.shape,t.shape);return s.length>0&&(n=z(n,s)),E(n,e.shape)}function zn(e,t,n,s){if(t==="linear")return e;if(t==="relu")return Wn(e);if(t==="elu")return Fc(e);if(t==="relu6")return nu(e);if(t==="prelu")return Yc(e,n);if(t==="leakyrelu")return Wc(e,s);if(t==="sigmoid")return Te(e);throw new Error(`Unknown fused activation ${t}.`)}const Kn=(e,t)=>!(e>0)||t==="linear";/**
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
 */function Lw({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:u,leakyreluAlpha:h}){if(c=c||"linear",Kn(b.state.gradientDepth,c)===!1){g(r==="NHWC",()=>`Error in fused conv2d: got dataFormat of ${r} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let _=Rn(e,t,n,s,r,o,a);return i!=null&&(_=F(_,i)),zn(_,c,u,h)}const l=d(e,"x","conv2d","float32"),f=d(t,"filter","conv2d","float32");let p=l,w=!1;l.rank===3&&(w=!0,p=E(l,[1,l.shape[0],l.shape[1],l.shape[2]])),g(p.rank===4,()=>`Error in fused conv2d: input must be rank 4, but got rank ${p.rank}.`),g(f.rank===4,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${f.rank}.`),xt("fused conv2d",s,a);const y=r==="NHWC"?p.shape[3]:p.shape[1];g(f.shape[2]===y,()=>`Error in conv2d: depth of input (${y}) must match input depth for filter ${f.shape[2]}.`),g(Pt(n,o),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`);const $=cn(p.shape,f.shape,n,o,s,a);let x;i!=null&&(x=d(i,"bias","fused conv2d"),[x]=J(x,l),r==="NHWC"?et($.outShape,x.shape):(g(x.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${x.shape.length}.`),g(x.shape.length===0||x.shape[0]===$.outChannels||x.shape[0]===1,()=>`Error in fused conv2d: bias shape (${x.shape}) is not compatible with the number of output channels (${$.outChannels})`)));let N;if(u!=null){const _=u.shape;if(g(_.length<=1||_.length===3,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${_.length}.`),_.length===1)g(_[0]===1||_[0]===$.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${_}) is not compatible with the number of output channels (${$.outChannels}).`);else if(_.length===3)try{et(_,$.outShape)}catch{const A=`Error in fused conv2d: PReLU activation weights (${_}) is not compatible with the output shape of the conv2d (${$.outShape}).`;throw Error(A)}N=d(u,"prelu weights","fused conv2d")}const k=(_,M)=>{g(r==="NHWC",()=>`Error in gradient of fused conv2D: got dataFormat of ${r} but only NHWC is currently supported.`);const[A,D,C,B]=M,O=qn(_,C,c);g(Xe(o),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${o}'`);const U=Dc(D.shape,O,A,n,s),X=Ow(D,O,A.shape,n,s),nt=[U,X];if(B!=null){const wt=Gn(B,O);nt.push(wt)}return nt},v={x:p,filter:f,bias:x,preluActivationWeights:N},T={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?Nt((M,A,D)=>{let C=b.runKernel(es,v,T);return D([A,M,C]),w&&(C=E(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:k}})(p,f):Nt((M,A,D,C)=>{let B=b.runKernel(es,v,T);return C([A,M,B,D]),w&&(B=E(B,[B.shape[1],B.shape[2],B.shape[3]])),{value:B,gradFunc:k}})(p,f,x)}const Ww=m({fusedConv2d_:Lw});/**
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
 */function Uw(e,t,n,s,r,o=[1,1],a){let i=e;e.rank===3&&(i=E(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let c=t;c.rank===3&&(c=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={x:i,dy:c},h={strides:s,pad:r,dimRoundingMode:a,dilations:o,filterShape:n};return b.runKernel(Po,u,h)}const qw=m({depthwiseConv2dNativeBackpropFilter_:Uw});/**
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
 */function Gw(e,t,n,s,r,o=[1,1],a){let i=t,c=!1;t.rank===3&&(c=!0,i=E(t,[1,t.shape[0],t.shape[1],t.shape[2]]));const u={dy:i,filter:n},h={strides:s,pad:r,dimRoundingMode:a,dilations:o,inputShape:e},l=b.runKernel(Oo,u,h);return c?E(l,[l.shape[1],l.shape[2],l.shape[3]]):l}const zw=m({depthwiseConv2dNativeBackpropInput_:Gw});/**
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
 */function Kw({x:e,filter:t,strides:n,pad:s,dataFormat:r="NHWC",dilations:o=[1,1],dimRoundingMode:a,bias:i,activation:c="linear",preluActivationWeights:u,leakyreluAlpha:h}){if(Kn(b.state.gradientDepth,c)===!1){let T=Ws(e,t,n,s,r,o,a);return i!=null&&(T=F(T,i)),zn(T,c,u,h)}const l=d(e,"x","depthwiseConv2d","float32"),f=d(t,"filter","depthwiseConv2d","float32");let p=l,w=!1;l.rank===3&&(w=!0,p=E(l,[1,l.shape[0],l.shape[1],l.shape[2]])),g(p.rank===4,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${p.rank}.`),g(f.rank===4,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${f.rank}.`),g(p.shape[3]===f.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${p.shape[3]}) must match the inChannels dimension in filter ${f.shape[2]}.`),o==null&&(o=[1,1]),g(Pt(n,o),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${o}'`),xt("fused depthwiseConv2d",s,a);const y=cn(p.shape,f.shape,n,o,s,a,!0);let $;i!=null&&($=d(i,"bias","fused conv2d"),[$]=J($,l),et(y.outShape,$.shape));let x;u!=null&&(x=d(u,"prelu weights","fused depthwiseConv2d"));const N=(T,_)=>{g(Xe(o),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${o}'`);const[M,A,D,C]=_,B=qn(T,D,c),O=zw(A.shape,B,M,n,s,o,a),U=qw(A,B,M.shape,n,s,o,a);if(C!=null){const X=Gn($,B);return[O,U,X]}return[O,U]},k={x:p,filter:f,bias:$,preluActivationWeights:x},v={strides:n,pad:s,dataFormat:r,dilations:o,dimRoundingMode:a,activation:c,leakyreluAlpha:h};return i==null?Nt((_,M,A)=>{let D=b.runKernel(ns,k,v);return A([M,_,D]),w&&(D=E(D,[D.shape[1],D.shape[2],D.shape[3]])),{value:D,gradFunc:N}})(p,f):Nt((_,M,A,D)=>{let C=b.runKernel(ns,k,v);return D([M,_,C,A]),w&&(C=E(C,[C.shape[1],C.shape[2],C.shape[3]])),{value:C,gradFunc:N}})(p,f,$)}const Vw=m({fusedDepthwiseConv2d_:Kw});/**
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
 */function jw({a:e,b:t,transposeA:n=!1,transposeB:s=!1,bias:r,activation:o="linear",preluActivationWeights:a,leakyreluAlpha:i=.2}){if(Kn(b.state.gradientDepth,o)===!1){let B=L(e,t,n,s);return r!=null&&(B=F(B,r)),zn(B,o,a,i)}let c=d(e,"a","fused matMul"),u=d(t,"b","fused matMul");[c,u]=J(c,u);const h=n?c.shape[c.rank-2]:c.shape[c.rank-1],l=s?u.shape[u.rank-1]:u.shape[u.rank-2],f=n?c.shape[c.rank-1]:c.shape[c.rank-2],p=s?u.shape[u.rank-2]:u.shape[u.rank-1],w=c.shape.slice(0,-2),y=u.shape.slice(0,-2),$=W(w),x=W(y);g(h===l,()=>`Error in fused matMul: inner shapes (${h}) and (${l}) of Tensors with shapes ${c.shape} and ${u.shape} and transposeA=${n} and transposeB=${s} must match.`);const k=et(c.shape.slice(0,-2),u.shape.slice(0,-2)).concat([f,p]),v=n?E(c,[$,h,f]):E(c,[$,f,h]),T=s?E(u,[x,p,l]):E(u,[x,l,p]);let _;r!=null&&(_=d(r,"bias","fused matMul"),[_]=J(_,c),et(k,_.shape));let M;a!=null&&(M=d(a,"prelu weights","fused matMul"));const A=(B,O)=>{const[U,X,nt,wt]=O,Mt=qn(E(B,nt.shape),nt,o);let me,be;if(!n&&!s?(me=L(Mt,X,!1,!0),be=L(U,Mt,!0,!1)):!n&&s?(me=L(Mt,X,!1,!1),be=L(Mt,U,!0,!1)):n&&!s?(me=L(X,Mt,!1,!0),be=L(U,Mt,!1,!1)):(me=L(X,Mt,!0,!0),be=L(Mt,U,!0,!0)),r!=null){const Pu=Gn(wt,Mt);return[me,be,Pu]}else return[me,be]},D={a:v,b:T,bias:_,preluActivationWeights:M},C={transposeA:n,transposeB:s,activation:o,leakyreluAlpha:i};return r==null?Nt((O,U,X)=>{const nt=b.runKernel(ts,D,C);return X([O,U,nt]),{value:E(nt,k),gradFunc:A}})(v,T):Nt((O,U,X,nt)=>{const wt=b.runKernel(ts,D,C);return nt([O,U,wt,X]),{value:E(wt,k),gradFunc:A}})(v,T,_)}const Hw=m({fusedMatMul_:jw});/**
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
 */const Xw=Object.freeze(Object.defineProperty({__proto__:null,conv2d:Ww,depthwiseConv2d:Vw,matMul:Hw},Symbol.toStringTag,{value:"Module"}));/**
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
 */function Zw(e){return ir(e,.54,.46)}const Yw=m({hammingWindow_:Zw});/**
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
 */function Jw(e){return ir(e,.5,.5)}const fu=m({hannWindow_:Jw});/**
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
 */function Qw(e,t,n,s=!1,r=0){let o=0;const a=[];for(;o+t<=e.size;)a.push(Z(e,o,t)),o+=n;if(s)for(;o<e.size;){const i=o+t-e.size,c=dt([Z(e,o,t-i),un([i],r)]);a.push(c),o+=n}return a.length===0?We([],[0,t]):E(dt(a),[a.length,t])}const du=m({frame_:Qw});/**
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
 */function t0(e,t,n,s,r=fu){s==null&&(s=hu(t));const o=du(e,t,n),a=I(o,r(t));return sr(a,s)}const e0=m({stft_:t0});/**
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
 */function n0(e,t,n,s,r="bilinear",o=0){const a=d(e,"image","cropAndResize"),i=d(t,"boxes","cropAndResize","float32"),c=d(n,"boxInd","cropAndResize","int32"),u=i.shape[0];g(a.rank===4,()=>`Error in cropAndResize: image must be rank 4,but got rank ${a.rank}.`),g(i.rank===2&&i.shape[1]===4,()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${i.shape}.`),g(c.rank===1&&c.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${i.shape}.`),g(s.length===2,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${s.length}.`),g(s[0]>=1&&s[1]>=1,()=>`cropSize must be atleast [1,1], but was ${s}`),g(r==="bilinear"||r==="nearest",()=>`method must be bilinear or nearest, but was ${r}`);const h={image:a,boxes:i,boxInd:c},l={method:r,extrapolationValue:o,cropSize:s};return b.runKernel(Fo,h,l)}const s0=m({cropAndResize_:n0});/**
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
 */function r0(e){const t=d(e,"image","flipLeftRight","float32");g(t.rank===4,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`);const n={image:t};return b.runKernel(Yo,n,{})}const o0=m({flipLeftRight_:r0});/**
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
 */function a0(e){const t=d(e,"image","grayscaleToRGB"),n=t.rank-1,s=t.shape[n];g(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),g(s===1,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${s}.`);const r=new Array(t.rank);return r.fill(1,0,n),r[n]=3,Le(t,r)}const i0=m({grayscaleToRGB_:a0});/**
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
 */function c0(e){const t=d(e,"image","RGBToGrayscale"),n=t.rank-1,s=t.shape[n];g(t.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${t.rank}.`),g(s===3,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${s}.`);const r=t.dtype,o=H(t,"float32"),a=kt([.2989,.587,.114]);let i;switch(t.rank){case 2:i=$e("ij,j->i",o,a);break;case 3:i=$e("ijk,k->ij",o,a);break;case 4:i=$e("ijkl,l->ijk",o,a);break;case 5:i=$e("ijklm,m->ijkl",o,a);break;case 6:i=$e("ijklmn,n->ijklm",o,a);break;default:throw new Error("Not a valid tensor rank.")}return i=Lt(i,-1),H(i,r)}const u0=m({rgbToGrayscale_:c0});/**
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
 */function l0(e,t,n=0,s=.5){const r=d(e,"image","rotateWithOffset","float32");g(r.rank===4,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${r.rank}.`);const o={image:r},a={radians:t,fillValue:n,center:s};return b.runKernel(Ui,o,a)}const h0=m({rotateWithOffset_:l0});/**
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
 */function Be(e,t,n,s,r,o){s==null&&(s=.5),r==null&&(r=Number.NEGATIVE_INFINITY),o==null&&(o=0);const a=e.shape[0];return n=Math.min(n,a),g(0<=s&&s<=1,()=>`iouThreshold must be in [0, 1], but was '${s}'`),g(e.rank===2,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),g(e.shape[1]===4,()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),g(t.rank===1,()=>"scores must be a 1D tensor"),g(t.shape[0]===a,()=>`scores has incompatible shape with boxes. Expected ${a}, but was ${t.shape[0]}`),g(0<=o&&o<=1,()=>`softNmsSigma must be in [0, 1], but was '${o}'`),{maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o}}/**
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
 */function f0(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=d(e,"boxes","nonMaxSuppression","float32"),a=d(t,"scores","nonMaxSuppression","float32"),i=Be(o,a,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const c={maxOutputSize:n,iouThreshold:s,scoreThreshold:r};return b.runKernel(Ba,{boxes:o,scores:a},c)}const d0=m({nonMaxSuppression_:f0});/**
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
 */function p0(e,t,n){const s=g0(e,t,n),r=s<0?-(s+1):s;e.splice(r,0,t)}function g0(e,t,n){return b0(e,t,n||m0)}function m0(e,t){return e>t?1:e<t?-1:0}function b0(e,t,n){let s=0,r=e.length,o=0,a=!1;for(;s<r;){o=s+(r-s>>>1);const i=n(t,e[o]);i>0?s=o+1:(r=o,a=!i)}return a?s:-s-1}/**
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
 */function pu(e,t,n,s,r){return cr(e,t,n,s,r,0)}function gu(e,t,n,s,r,o){return cr(e,t,n,s,r,0,!1,o,!0)}function mu(e,t,n,s,r,o){return cr(e,t,n,s,r,o,!0)}function cr(e,t,n,s,r,o,a=!1,i=!1,c=!1){const u=[];for(let $=0;$<t.length;$++)t[$]>r&&u.push({score:t[$],boxIndex:$,suppressBeginIndex:0});u.sort(Nr);const h=o>0?-.5/o:0,l=[],f=[];for(;l.length<n&&u.length>0;){const $=u.pop(),{score:x,boxIndex:N,suppressBeginIndex:k}=$;if(x<r)break;let v=!1;for(let T=l.length-1;T>=k;--T){const _=w0(e,N,l[T]);if(_>=s){v=!0;break}if($.score=$.score*y0(s,h,_),$.score<=r)break}$.suppressBeginIndex=l.length,v||($.score===x?(l.push(N),f.push($.score)):$.score>r&&p0(u,$,Nr))}const p=l.length,w=n-p;i&&w>0&&(l.push(...new Array(w).fill(0)),f.push(...new Array(w).fill(0)));const y={selectedIndices:l};return a&&(y.selectedScores=f),c&&(y.validOutputs=p),y}function w0(e,t,n){const s=e.subarray(t*4,t*4+4),r=e.subarray(n*4,n*4+4),o=Math.min(s[0],s[2]),a=Math.min(s[1],s[3]),i=Math.max(s[0],s[2]),c=Math.max(s[1],s[3]),u=Math.min(r[0],r[2]),h=Math.min(r[1],r[3]),l=Math.max(r[0],r[2]),f=Math.max(r[1],r[3]),p=(i-o)*(c-a),w=(l-u)*(f-h);if(p<=0||w<=0)return 0;const y=Math.max(o,u),$=Math.max(a,h),x=Math.min(i,l),N=Math.min(c,f),k=Math.max(x-y,0)*Math.max(N-$,0);return k/(p+w-k)}function y0(e,t,n){const s=Math.exp(t*n*n);return n<=e?s:0}function Nr(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}/**
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
 */async function $0(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY){const o=d(e,"boxes","nonMaxSuppressionAsync"),a=d(t,"scores","nonMaxSuppressionAsync"),i=Be(o,a,n,s,r);n=i.maxOutputSize,s=i.iouThreshold,r=i.scoreThreshold;const c=await Promise.all([o.data(),a.data()]),u=c[0],h=c[1],{selectedIndices:l}=pu(u,h,n,s,r);return o!==e&&o.dispose(),a!==t&&a.dispose(),kt(l,"int32")}const E0=$0;/**
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
 */function k0(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const a=d(e,"boxes","nonMaxSuppression"),i=d(t,"scores","nonMaxSuppression"),c=Be(a,i,n,s,r,o);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold,o=c.softNmsSigma;const u={boxes:a,scores:i},h={maxOutputSize:n,iouThreshold:s,scoreThreshold:r,softNmsSigma:o},l=b.runKernel(Ca,u,h);return{selectedIndices:l[0],selectedScores:l[1]}}const x0=m({nonMaxSuppressionWithScore_:k0});/**
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
 */async function v0(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=0){const a=d(e,"boxes","nonMaxSuppressionAsync"),i=d(t,"scores","nonMaxSuppressionAsync"),c=Be(a,i,n,s,r,o);n=c.maxOutputSize,s=c.iouThreshold,r=c.scoreThreshold,o=c.softNmsSigma;const u=await Promise.all([a.data(),i.data()]),h=u[0],l=u[1],{selectedIndices:f,selectedScores:p}=mu(h,l,n,s,r,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:kt(f,"int32"),selectedScores:kt(p)}}const S0=v0;/**
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
 */function T0(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const a=d(e,"boxes","nonMaxSuppression"),i=d(t,"scores","nonMaxSuppression"),c=Be(a,i,n,s,r,null),u=c.maxOutputSize,h=c.iouThreshold,l=c.scoreThreshold,f={boxes:a,scores:i},p={maxOutputSize:u,iouThreshold:h,scoreThreshold:l,padToMaxOutputSize:o},w=b.runKernel(Ra,f,p);return{selectedIndices:w[0],validOutputs:w[1]}}const I0=m({nonMaxSuppressionPadded_:T0});/**
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
 */async function _0(e,t,n,s=.5,r=Number.NEGATIVE_INFINITY,o=!1){const a=d(e,"boxes","nonMaxSuppressionAsync"),i=d(t,"scores","nonMaxSuppressionAsync"),c=Be(a,i,n,s,r,null),u=c.maxOutputSize,h=c.iouThreshold,l=c.scoreThreshold,[f,p]=await Promise.all([a.data(),i.data()]),{selectedIndices:w,validOutputs:y}=gu(f,p,u,h,l,o);return a!==e&&a.dispose(),i!==t&&i.dispose(),{selectedIndices:kt(w,"int32"),validOutputs:q(y,"int32")}}const A0=_0;/**
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
 */function D0(e,t,n=!1,s=!1){const r=d(e,"images","resizeBilinear");g(r.rank===3||r.rank===4,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),g(s===!1||n===!1,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let o=r,a=!1;r.rank===3&&(a=!0,o=E(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:s,size:t},u=b.runKernel(Qa,i,c);return a?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const N0=m({resizeBilinear_:D0});/**
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
 */function M0(e,t,n=!1,s=!1){const r=d(e,"images","resizeNearestNeighbor");g(r.rank===3||r.rank===4,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${r.rank}.`),g(t.length===2,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),g(r.dtype==="float32"||r.dtype==="int32",()=>"`images` must have `int32` or `float32` as dtype"),g(s===!1||n===!1,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let o=r,a=!1;r.rank===3&&(a=!0,o=E(r,[1,r.shape[0],r.shape[1],r.shape[2]]));const i={images:o},c={alignCorners:n,halfPixelCenters:s,size:t},u=b.runKernel(Ja,i,c);return a?E(u,[u.shape[1],u.shape[2],u.shape[3]]):u}const F0=m({resizeNearestNeighbor_:M0});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function B0(e,t="binary",n=!1,s=.5){const r=d(e,"image","threshold"),o=.2989,a=.587,i=.114,c=r.shape[0]*r.shape[1];let u=I(kt([s]),255),h,l,f,p;if(g(r.rank===3,()=>`Error in threshold: image must be rank 3,but got rank ${r.rank}.`),g(r.shape[2]===3||r.shape[2]===1,()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${r.shape[2]}.`),g(r.dtype==="int32"||r.dtype==="float32",()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${r.dtype}.`),g(t==="otsu"||t==="binary",()=>`Method must be binary or otsu, but was ${t}`),r.shape[2]===3){[h,l,f]=tn(r,[1,1,1],-1);const $=I(h,o),x=I(l,a),N=I(f,i);p=F(F($,x),N)}else p=e;if(t==="otsu"){const $=Ac(H(su(p),"int32"),xe([]),256);u=R0($,c)}const w=n?Gs(p,u):Pn(p,u);return H(I(w,255),"int32")}function R0(e,t){let n=kt([-1]),s=kt([0]),r=kt([0]),o,a,i,c,u,h;for(let l=0;l<e.size-1;l++){o=Z(e,0,l+1),a=Z(e,l+1),u=K(z(o),t),h=K(z(a),t);const f=z(I(o,Je(0,o.size)));i=K(f,z(o));const p=un(a.shape,o.size),w=F(Je(0,a.size),p),y=I(a,w);c=K(z(y),z(a));const $=P(i,c),x=P(i,c),N=I(u,h);r=I(I(N,$),x);const k=Pn(r,s);s=Kt(k,r,s),n=Kt(k,kt([l]),n)}return n}const C0=m({threshold_:B0});/**
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
 */function P0(e,t,n="nearest",s="constant",r=0,o){const a=d(e,"image","transform","float32"),i=d(t,"transforms","transform","float32");g(a.rank===4,()=>`Error in transform: image must be rank 4,but got rank ${a.rank}.`),g(i.rank===2&&(i.shape[0]===a.shape[0]||i.shape[0]===1)&&i.shape[1]===8,()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),g(o==null||o.length===2,()=>`Error in transform: outputShape must be [height, width] or null, but got ${o}.`);const c={image:a,transforms:i},u={interpolation:n,fillMode:s,fillValue:r,outputShape:o};return b.runKernel(Ri,c,u)}const O0=m({transform_:P0});/**
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
 */function L0(e,t,n){const s=d(e,"a","bandPart");g(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);const r=s.shape,[o,a]=s.shape.slice(-2);let i,c;typeof t=="number"?(g(t%1===0,()=>`bandPart(): numLower must be an integer, got ${t}.`),g(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),i=d(t<0?o:t,"numLower","bandPart")):(g(t.dtype==="int32",()=>"bandPart(): numLower's dtype must be an int32."),i=Kt(ys(t,0),o,In(t,o))),typeof n=="number"?(g(n%1===0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),g(n<=a,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${a}).`),c=d(n<0?a:n,"numUpper","bandPart")):(g(n.dtype==="int32",()=>"bandPart(): numUpper's dtype must be an int32."),c=Kt(ys(n,0),a,In(n,a)));const u=E(Je(0,o,1,"int32"),[-1,1]),h=Je(0,a,1,"int32"),l=P(u,h),f=Sn(Gs(l,i),Lc(l,At(c))),p=Me([o,a],s.dtype);return E(en(ar(E(s,[-1,o,a])).map(w=>Kt(f,w,p))),r)}const W0=m({bandPart_:L0});/**
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
 */function U0(e){let t;if(Array.isArray(e)){t=!1,g(e!=null&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");const r=e[0].shape[0];for(let o=1;o<e.length;++o)g(e[o].shape[0]===r,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[o].shape[0]} vs. ${r})`)}else t=!0,e=tn(e,e.shape[0],0).map(r=>rr(r,[0]));g(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);const n=[],s=e;for(let r=0;r<e.length;++r)n.push(b.tidy(()=>{let o=s[r];if(r>0)for(let a=0;a<r;++a){const i=I(z(I(n[a],o)),n[a]);o=P(o,i)}return K(o,Cn(o,"euclidean"))}));return t?en(n,0):n}const q0=m({gramSchmidt_:U0});/**
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
 */function G0(e,t=!1){if(g(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),e.rank===2)return Mr(e,t);{const n=e.shape.slice(0,e.shape.length-2).reduce((c,u)=>c*u),s=ar(E(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),r=[],o=[];s.forEach(c=>{const[u,h]=Mr(c,t);r.push(u),o.push(h)});const a=E(en(r,0),e.shape),i=E(en(o,0),e.shape);return[a,i]}}function Mr(e,t=!1){return b.tidy(()=>{g(e.shape.length===2,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);const n=e.shape[0],s=e.shape[1];let r=Cc(n),o=re(e);const a=We([[1]],[1,1]);let i=re(a);const c=n>=s?s:n;for(let u=0;u<c;++u){const h=o,l=i,f=r;[i,o,r]=b.tidy(()=>{const p=Z(o,[u,u],[n-u,1]),w=Cn(p),y=Z(o,[u,u],[1,1]),$=Kt(Pn(y,0),We([[-1]]),We([[1]])),x=P(y,I($,w)),N=K(p,x);N.shape[0]===1?i=re(a):i=dt([a,Z(N,[1,0],[N.shape[0]-1,N.shape[1]])],0);const k=At(K(L($,x),w)),v=Z(o,[u,0],[n-u,s]),T=I(k,i),_=An(i);if(u===0)o=P(v,L(T,L(_,v)));else{const D=P(v,L(T,L(_,v)));o=dt([Z(o,[0,0],[u,s]),D],0)}const M=An(T),A=Z(r,[0,u],[n,r.shape[1]-u]);if(u===0)r=P(A,L(L(A,i),M));else{const D=P(A,L(L(A,i),M));r=dt([Z(r,[0,0],[n,u]),D],1)}return[i,o,r]}),ut([h,l,f])}return!t&&n>s&&(r=Z(r,[0,0],[n,s]),o=Z(o,[0,0],[s,s])),[r,o]})}const z0=m({qr_:G0});/**
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
 */var it;(function(e){e[e.NONE=0]="NONE",e[e.MEAN=1]="MEAN",e[e.SUM=2]="SUM",e[e.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS"})(it||(it={}));function K0(e,t,n=it.SUM_BY_NONZERO_WEIGHTS){const s=d(e,"losses","computeWeightedLoss");let r=null;t!=null&&(r=d(t,"weights","computeWeightedLoss"));const o=r==null?s:I(s,r);if(n===it.NONE)return o;if(n===it.SUM)return z(o);if(n===it.MEAN){if(r==null)return Tn(o);{const a=s.size/r.size,i=K(z(o),z(r));return a>1?K(i,q(a)):i}}if(n===it.SUM_BY_NONZERO_WEIGHTS){if(r==null)return K(z(o),q(s.size));{const a=I(r,se(s.shape)),i=H(z(Xc(a,q(0))),"float32");return K(z(o),i)}}throw Error(`Unknown reduction: ${n}`)}const Ot=m({computeWeightedLoss_:K0});/**
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
 */function V0(e,t,n,s=it.SUM_BY_NONZERO_WEIGHTS){const r=d(e,"labels","absoluteDifference"),o=d(t,"predictions","absoluteDifference");let a=null;n!=null&&(a=d(n,"weights","absoluteDifference")),ct(r.shape,o.shape,"Error in absoluteDifference: ");const i=mt(P(r,o));return Ot(i,a,s)}const j0=m({absoluteDifference_:V0});function H0(e,t,n,s,r=it.SUM_BY_NONZERO_WEIGHTS){const o=d(e,"labels","cosineDistance"),a=d(t,"predictions","cosineDistance");let i=null;s!=null&&(i=d(s,"weights","cosineDistance")),ct(o.shape,a.shape,"Error in cosineDistance: ");const c=q(1),u=P(c,z(I(o,a),n,!0));return Ot(u,i,r)}const X0=m({cosineDistance_:H0});function Z0(e,t,n,s=it.SUM_BY_NONZERO_WEIGHTS){let r=d(e,"labels","hingeLoss");const o=d(t,"predictions","hingeLoss");let a=null;n!=null&&(a=d(n,"weights","hingeLoss")),ct(r.shape,o.shape,"Error in hingeLoss: ");const i=q(1);r=P(I(q(2),r),i);const c=Wn(P(i,I(r,o)));return Ot(c,a,s)}const Y0=m({hingeLoss_:Z0});/**
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
 */function J0(e,t,n,s=1,r=it.SUM_BY_NONZERO_WEIGHTS){const o=d(e,"labels","huberLoss"),a=d(t,"predictions","huberLoss");let i=null;n!=null&&(i=d(n,"weights","huberLoss")),ct(o.shape,a.shape,"Error in huberLoss: ");const c=q(s),u=mt(P(a,o)),h=In(u,c),l=P(u,h),f=F(I(q(.5),St(h)),I(c,l));return Ot(f,i,r)}const Q0=m({huberLoss_:J0});/**
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
 */function t1(e,t,n,s=1e-7,r=it.SUM_BY_NONZERO_WEIGHTS){const o=d(e,"labels","logLoss"),a=d(t,"predictions","logLoss");let i=null;n!=null&&(i=d(n,"weights","logLoss")),ct(o.shape,a.shape,"Error in logLoss: ");const c=q(1),u=q(s),h=At(I(o,Ye(F(a,u)))),l=I(P(c,o),Ye(F(P(c,a),u))),f=P(h,l);return Ot(f,i,r)}const e1=m({logLoss_:t1});/**
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
 */function n1(e,t,n,s=it.SUM_BY_NONZERO_WEIGHTS){const r=d(e,"labels","meanSquaredError"),o=d(t,"predictions","meanSquaredError");let a=null;n!=null&&(a=d(n,"weights","meanSquaredError")),ct(r.shape,o.shape,"Error in meanSquaredError: ");const i=ou(r,o);return Ot(i,a,s)}const s1=m({meanSquaredError_:n1});/**
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
 */function r1(e,t){const n=d(e,"labels","sigmoidCrossEntropyWithLogits"),s=d(t,"logits","sigmoidCrossEntropyWithLogits");ct(n.shape,s.shape,"Error in sigmoidCrossEntropyWithLogits: ");const r=Wn(s),o=I(s,n),a=Uc(ue(At(mt(s))));return F(P(r,o),a)}function o1(e,t,n,s=0,r=it.SUM_BY_NONZERO_WEIGHTS){let o=d(e,"multiClassLabels","sigmoidCrossEntropy");const a=d(t,"logits","sigmoidCrossEntropy");let i=null;if(n!=null&&(i=d(n,"weights","sigmoidCrossEntropy")),ct(o.shape,a.shape,"Error in sigmoidCrossEntropy: "),s>0){const u=q(s),h=q(1),l=q(.5);o=F(I(o,P(h,u)),I(l,u))}const c=r1(o,a);return Ot(c,i,r)}const a1=m({sigmoidCrossEntropy_:o1});/**
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
 */function i1(e,t,n=-1){if(n===-1&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return Nt((r,o,a)=>{const c=zc(o,[n],!0),u=P(H(o,"float32"),c);a([r,u]);const h=At(I(u,r));return{value:z(h,[n]),gradFunc:(p,w)=>{const[y,$]=w,x=ln(p.shape,[n]);return[I(E(p,x),P(H(y,"float32"),ue($))),I(E(p,x),P(ue($),H(y,"float32")))]}}})(e,t)}function c1(e,t,n,s=0,r=it.SUM_BY_NONZERO_WEIGHTS){let o=d(e,"onehotLabels","softmaxCrossEntropy");const a=d(t,"logits","softmaxCrossEntropy");let i=null;if(n!=null&&(i=d(n,"weights","softmaxCrossEntropy")),ct(o.shape,a.shape,"Error in softmaxCrossEntropy: "),s>0){const u=q(s),h=q(1),l=q(o.shape[1]);o=F(I(o,P(h,u)),K(u,l))}const c=i1(o,a);return Ot(c,i,r)}const u1=m({softmaxCrossEntropy_:c1});/**
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
 */function l1(e,t,n,s){const r=d(e,"indices","sparseFillEmptyRows","int32"),o=d(t,"values","sparseFillEmptyRows"),a=d(n,"denseShape","sparseFillEmptyRows","int32"),i=d(s,"defaultValue","sparseFillEmptyRows",o.dtype);if(r.rank!==2)throw new Error(`Indices should be Tensor2D but received shape
        ${r.shape}`);if(o.rank!==1)throw new Error(`Values should be Tensor1D but received shape ${o.shape}`);if(a.rank!==1)throw new Error(`Dense shape should be Tensor1D but received shape ${a.shape}`);if(i.rank!==0)throw new Error(`Default value should be a scalar but received shape ${i.shape}`);const c={indices:r,values:o,denseShape:a,defaultValue:i},u=b.runKernel($i,c);return{outputIndices:u[0],outputValues:u[1],emptyRowIndicator:u[2],reverseIndexMap:u[3]}}const h1=m({sparseFillEmptyRows_:l1});/**
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
 */function f1(e,t,n){const s=d(e,"inputIndices","sparseReshape","int32"),r=d(t,"inputShape","sparseReshape","int32"),o=d(n,"newShape","sparseReshape","int32");if(s.rank!==2)throw new Error(`Input indices should be Tensor2D but received shape
        ${s.shape}`);if(r.rank!==1)throw new Error(`Input shape should be Tensor1D but received shape ${r.shape}`);if(o.rank!==1)throw new Error(`New shape should be Tensor1D but received shape ${o.shape}`);const a={inputIndices:s,inputShape:r,newShape:o},i=b.runKernel(Ei,a);return{outputIndices:i[0],outputShape:i[1]}}const d1=m({sparseReshape_:f1});/**
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
 */function p1(e,t,n){const s=d(e,"data","sparseSegmentMean"),r=d(t,"indices","sparseSegmentMean","int32"),o=d(n,"segmentIds","sparseSegmentMean","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
          ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
          ${o.shape}`);const a={data:s,indices:r,segmentIds:o};return b.runKernel(ki,a)}const g1=m({sparseSegmentMean_:p1});/**
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
 */function m1(e,t,n){const s=d(e,"data","sparseSegmentSum"),r=d(t,"indices","sparseSegmentSum","int32"),o=d(n,"segmentIds","sparseSegmentSum","int32");if(s.rank<1)throw new Error("Data should be at least 1 dimensional but received scalar");if(r.rank!==1)throw new Error(`Indices should be Tensor1D but received shape
         ${r.shape}`);if(o.rank!==1)throw new Error(`Segment ids should be Tensor1D but received shape
         ${o.shape}`);const a={data:s,indices:r,segmentIds:o};return b.runKernel(xi,a)}const b1=m({sparseSegmentSum_:m1});/**
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
 */function w1(e,t,n,s,r,o,a,i){const c=d(e,"data","stringNGrams","string");if(c.dtype!=="string")throw new Error("Data must be of datatype string");if(c.shape.length!==1)throw new Error(`Data must be a vector, saw: ${c.shape}`);const u=d(t,"dataSplits","stringNGrams");if(u.dtype!=="int32")throw new Error("Data splits must be of datatype int32");const h={separator:n,nGramWidths:s,leftPad:r,rightPad:o,padWidth:a,preserveShortSequences:i},l={data:c,dataSplits:u},f=b.runKernel(_i,l,h);return{nGrams:f[0],nGramsSplits:f[1]}}const y1=m({stringNGrams_:w1});/**
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
 */function $1(e,t,n=!0){const s=d(e,"input","stringSplit","string"),r=d(t,"delimiter","stringSplit","string");if(s.rank!==1)throw new Error(`Input should be Tensor1D but received shape ${s.shape}`);if(r.rank!==0)throw new Error(`Delimiter should be a scalar but received shape ${r.shape}`);const o={skipEmpty:n},a={input:s,delimiter:r},i=b.runKernel(Ai,a,o);return{indices:i[0],values:i[1],shape:i[2]}}const E1=m({stringSplit_:$1});/**
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
 */function k1(e,t){const n=d(e,"input","stringToHashBucketFast","string"),s={numBuckets:t};if(t<=0)throw new Error("Number of buckets must be at least 1");const r={input:n};return b.runKernel(Di,r,s)}const x1=m({stringToHashBucketFast_:k1});/**
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
 */function v1(e,t,n,s=!0){const r=d(e,"input","staticRegexReplace","string"),o={pattern:t,rewrite:n,replaceGlobal:s};return b.runKernel(Ti,{x:r},o)}const S1=m({staticRegexReplace_:v1});/**
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
 */const T1={fft:nr,ifft:_n,rfft:sr,irfft:ru},I1={hammingWindow:Yw,hannWindow:fu,frame:du,stft:e0},_1={flipLeftRight:o0,grayscaleToRGB:i0,resizeNearestNeighbor:F0,resizeBilinear:N0,rgbToGrayscale:u0,rotateWithOffset:h0,cropAndResize:s0,nonMaxSuppression:d0,nonMaxSuppressionAsync:E0,nonMaxSuppressionWithScore:x0,nonMaxSuppressionWithScoreAsync:S0,nonMaxSuppressionPadded:I0,nonMaxSuppressionPaddedAsync:A0,threshold:C0,transform:O0},A1={bandPart:W0,gramSchmidt:q0,qr:z0},D1={absoluteDifference:j0,computeWeightedLoss:Ot,cosineDistance:X0,hingeLoss:Y0,huberLoss:Q0,logLoss:e1,meanSquaredError:s1,sigmoidCrossEntropy:a1,softmaxCrossEntropy:u1},N1={sparseFillEmptyRows:h1,sparseReshape:d1,sparseSegmentMean:g1,sparseSegmentSum:b1},M1={stringNGrams:y1,stringSplit:E1,stringToHashBucketFast:x1,staticRegexReplace:S1};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const F1=new Map,ks=new Map;class bu{getClassName(){return this.constructor.className}static fromConfig(t,n){return new t(n)}}class Ut{constructor(){this.classNameMap={}}static getMap(){return Ut.instance==null&&(Ut.instance=new Ut),Ut.instance}static register(t){Ut.getMap().classNameMap[t.className]=[t,t.fromConfig]}}function wu(e,t,n){g(e.className!=null,()=>"Class being registered does not have the static className property defined."),g(typeof e.className=="string",()=>"className is required to be a string, but got type "+typeof e.className),g(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),typeof t>"u"&&(t="Custom"),typeof n>"u"&&(n=e.className);const s=n,r=t+">"+s;return Ut.register(e),F1.set(r,e),ks.set(e,r),e}function B1(e){return ks.has(e)?ks.get(e):e.className}const R1=Object.freeze(Object.defineProperty({__proto__:null,Serializable:bu,SerializationMap:Ut,getRegisteredName:B1,registerClass:wu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Yt extends bu{minimize(t,n=!1,s){const{value:r,grads:o}=this.computeGradients(t,s);if(s!=null){const a=s.map(i=>({name:i.name,tensor:o[i.name]}));this.applyGradients(a)}else this.applyGradients(o);return ut(o),n?r:(r.dispose(),null)}get iterations(){return this.iterations_==null&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(t,n){return qc(t,n)}dispose(){this.iterations_!=null&&ut(this.iterations_)}async saveIterations(){return this.iterations_==null&&(this.iterations_=0),{name:"iter",tensor:q(this.iterations_,"int32")}}async getWeights(){throw new Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(t){throw new Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(t){return this.iterations_=(await t[0].tensor.data())[0],t.slice(1)}}Object.defineProperty(Yt,Symbol.hasInstance,{value:e=>e.minimize!=null&&e.computeGradients!=null&&e.applyGradients!=null});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class ur extends Yt{static get className(){return"Adadelta"}constructor(t,n,s=null){super(),this.learningRate=t,this.rho=n,this.epsilon=s,this.accumulatedGrads=[],this.accumulatedUpdates=[],s==null&&(this.epsilon=b.backend.epsilon())}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=b.registeredVariables[s],a=!1;this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accum_grad`,variable:tt(()=>bt(o).variable(a))}),this.accumulatedUpdates[r]==null&&(this.accumulatedUpdates[r]={originalName:`${s}/accum_var`,variable:tt(()=>bt(o).variable(a))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const c=this.accumulatedGrads[r].variable,u=this.accumulatedUpdates[r].variable;tt(()=>{const h=F(I(c,this.rho),I(St(i),1-this.rho)),l=I(K(Rt(F(u,this.epsilon)),Rt(F(c,this.epsilon))),i),f=F(I(u,this.rho),I(St(l),1-this.rho));c.assign(h),u.assign(f);const p=F(I(l,-this.learningRate),o);o.assign(p)})}),this.incrementIterations()}dispose(){this.accumulatedUpdates!=null&&(ut(this.accumulatedGrads.map(t=>t.variable)),ut(this.accumulatedUpdates.map(t=>t.variable)))}async getWeights(){const t=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=t.length/2,s=!1;this.accumulatedGrads=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedUpdates=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.rho,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class lr extends Yt{static get className(){return"Adagrad"}constructor(t,n=.1){super(),this.learningRate=t,this.initialAccumulatorValue=n,this.accumulatedGrads=[]}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=b.registeredVariables[s];this.accumulatedGrads[r]==null&&(this.accumulatedGrads[r]={originalName:`${s}/accumulator`,variable:tt(()=>un(o.shape,this.initialAccumulatorValue).variable(!1))});const a=Array.isArray(t)?t[r].tensor:t[s];if(a==null)return;const i=this.accumulatedGrads[r].variable;tt(()=>{const c=F(i,St(a));i.assign(c);const u=F(I(K(a,Rt(F(c,b.backend.epsilon()))),-this.learningRate),o);o.assign(u)})}),this.incrementIterations()}dispose(){this.accumulatedGrads!=null&&ut(this.accumulatedGrads.map(t=>t.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulatedGrads=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(t,n){return new t(n.learningRate,n.initialAccumulatorValue)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class hr extends Yt{static get className(){return"Adam"}constructor(t,n,s,r=null){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],tt(()=>{this.accBeta1=q(n).variable(),this.accBeta2=q(s).variable()}),r==null&&(this.epsilon=b.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);tt(()=>{const s=P(1,this.accBeta1),r=P(1,this.accBeta2);n.forEach((o,a)=>{const i=b.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:tt(()=>bt(i).variable(c))}),this.accumulatedSecondMoment[a]==null&&(this.accumulatedSecondMoment[a]={originalName:`${o}/v`,variable:tt(()=>bt(i).variable(c))});const u=Array.isArray(t)?t[a].tensor:t[o];if(u==null)return;const h=this.accumulatedFirstMoment[a].variable,l=this.accumulatedSecondMoment[a].variable,f=F(I(h,this.beta1),I(u,1-this.beta1)),p=F(I(l,this.beta2),I(St(u),1-this.beta2)),w=K(f,s),y=K(p,r);h.assign(f),l.assign(p);const $=F(I(K(w,F(Rt(y),this.epsilon)),-this.learningRate),i);i.assign($)}),this.accBeta1.assign(I(this.accBeta1,this.beta1)),this.accBeta2.assign(I(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),this.accumulatedFirstMoment!=null&&ut(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedSecondMoment!=null&&ut(this.accumulatedSecondMoment.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t),tt(()=>{this.accBeta1.assign(Ze(this.beta1,this.iterations_+1)),this.accBeta2.assign(Ze(this.beta2,this.iterations_+1))});const n=t.length/2,s=!1;this.accumulatedFirstMoment=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedSecondMoment=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class fr extends Yt{static get className(){return"Adamax"}constructor(t,n,s,r=null,o=0){super(),this.learningRate=t,this.beta1=n,this.beta2=s,this.epsilon=r,this.decay=o,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],tt(()=>{this.iteration=q(0).variable(),this.accBeta1=q(n).variable()}),r==null&&(this.epsilon=b.backend.epsilon())}applyGradients(t){const n=Array.isArray(t)?t.map(s=>s.name):Object.keys(t);tt(()=>{const s=P(1,this.accBeta1),r=K(-this.learningRate,F(I(this.iteration,this.decay),1));n.forEach((o,a)=>{const i=b.registeredVariables[o],c=!1;this.accumulatedFirstMoment[a]==null&&(this.accumulatedFirstMoment[a]={originalName:`${o}/m`,variable:bt(i).variable(c)}),this.accumulatedWeightedInfNorm[a]==null&&(this.accumulatedWeightedInfNorm[a]={originalName:`${o}/v`,variable:bt(i).variable(c)});const u=Array.isArray(t)?t[a].tensor:t[o];if(u==null)return;const h=this.accumulatedFirstMoment[a].variable,l=this.accumulatedWeightedInfNorm[a].variable,f=F(I(h,this.beta1),I(u,1-this.beta1)),p=I(l,this.beta2),w=mt(u),y=Hc(p,w);h.assign(f),l.assign(y);const $=F(I(K(r,s),K(f,F(y,this.epsilon))),i);i.assign($)}),this.iteration.assign(F(this.iteration,1)),this.accBeta1.assign(I(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),this.accumulatedFirstMoment!=null&&ut(this.accumulatedFirstMoment.map(t=>t.variable)),this.accumulatedWeightedInfNorm!=null&&ut(this.accumulatedWeightedInfNorm.map(t=>t.variable))}async getWeights(){throw new Error("getWeights() is not implemented for Adamax yet.")}async setWeights(t){throw new Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(t,n){return new t(n.learningRate,n.beta1,n.beta2,n.epsilon,n.decay)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Vn extends Yt{static get className(){return"SGD"}constructor(t){super(),this.learningRate=t,this.setLearningRate(t)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=Array.isArray(t)?t[r].tensor:t[s];if(o==null)return;const a=b.registeredVariables[s];tt(()=>{const i=F(I(this.c,o),a);a.assign(i)})}),this.incrementIterations()}setLearningRate(t){this.learningRate=t,this.c!=null&&this.c.dispose(),this.c=cc(q(-t))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(t){if(t=await this.extractIterations(t),t.length!==0)throw new Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(t,n){return new t(n.learningRate)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class dr extends Vn{static get className(){return"Momentum"}constructor(t,n,s=!1){super(t),this.learningRate=t,this.momentum=n,this.useNesterov=s,this.accumulations=[],this.m=q(this.momentum)}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=b.registeredVariables[s];this.accumulations[r]==null&&(this.accumulations[r]={originalName:`${s}/momentum`,variable:tt(()=>bt(o).variable(!1))});const a=this.accumulations[r].variable,i=Array.isArray(t)?t[r].tensor:t[s];i!=null&&tt(()=>{let c;const u=F(I(this.m,a),i);this.useNesterov?c=F(I(this.c,F(i,I(u,this.m))),o):c=F(I(this.c,u),o),a.assign(u),o.assign(c)})}),this.incrementIterations()}dispose(){this.m.dispose(),this.accumulations!=null&&ut(this.accumulations.map(t=>t.variable))}setMomentum(t){this.momentum=t}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(t=>({name:t.originalName,tensor:t.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=!1;this.accumulations=t.map(s=>({originalName:s.name,variable:s.tensor.variable(n)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(t,n){return new t(n.learningRate,n.momentum,n.useNesterov)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class pr extends Yt{static get className(){return"RMSProp"}constructor(t,n=.9,s=0,r=null,o=!1){if(super(),this.learningRate=t,this.decay=n,this.momentum=s,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=o,r==null&&(this.epsilon=b.backend.epsilon()),t==null)throw new Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(t){(Array.isArray(t)?t.map(s=>s.name):Object.keys(t)).forEach((s,r)=>{const o=b.registeredVariables[s],a=!1;this.accumulatedMeanSquares[r]==null&&(this.accumulatedMeanSquares[r]={originalName:`${s}/rms`,variable:tt(()=>bt(o).variable(a))}),this.accumulatedMoments[r]==null&&(this.accumulatedMoments[r]={originalName:`${s}/momentum`,variable:tt(()=>bt(o).variable(a))}),this.accumulatedMeanGrads[r]==null&&this.centered&&(this.accumulatedMeanGrads[r]={originalName:`${s}/mg`,variable:tt(()=>bt(o).variable(a))});const i=Array.isArray(t)?t[r].tensor:t[s];if(i==null)return;const c=this.accumulatedMeanSquares[r].variable,u=this.accumulatedMoments[r].variable;tt(()=>{const h=F(I(c,this.decay),I(St(i),1-this.decay));if(this.centered){const l=this.accumulatedMeanGrads[r].variable,f=F(I(l,this.decay),I(i,1-this.decay)),p=K(I(i,this.learningRate),Rt(P(h,F(St(f),this.epsilon)))),w=F(I(u,this.momentum),p);c.assign(h),l.assign(f),u.assign(w);const y=P(o,w);o.assign(y)}else{const l=F(I(c,this.decay),I(St(i),1-this.decay)),f=F(I(u,this.momentum),K(I(i,this.learningRate),Rt(F(l,this.epsilon))));c.assign(l),u.assign(f);const p=P(o,f);o.assign(p)}})}),this.incrementIterations()}dispose(){this.accumulatedMeanSquares!=null&&ut(this.accumulatedMeanSquares.map(t=>t.variable)),this.accumulatedMeanGrads!=null&&this.centered&&ut(this.accumulatedMeanGrads.map(t=>t.variable)),this.accumulatedMoments!=null&&ut(this.accumulatedMoments.map(t=>t.variable))}async getWeights(){const t=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&t.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(t.map(n=>({name:n.originalName,tensor:n.variable})))}async setWeights(t){t=await this.extractIterations(t);const n=this.centered?t.length/3:t.length/2,s=!1;this.accumulatedMeanSquares=t.slice(0,n).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.accumulatedMoments=t.slice(n,n*2).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})),this.centered&&(this.accumulatedMeanGrads=t.slice(n*2,n*3).map(r=>({originalName:r.name,variable:r.tensor.variable(s)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(t,n){return new t(n.learningRate,n.decay,n.momentum,n.epsilon,n.centered)}}/**
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
 */const C1=[ur,lr,hr,fr,dr,pr,Vn];function P1(){for(const e of C1)wu(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const O1="model",L1=".json",W1=".weights.bin";function Fr(e){return new Promise(t=>setTimeout(t)).then(e)}class he{constructor(t){if(!R().getBool("IS_BROWSER"))throw new Error("browserDownloads() cannot proceed because the current environment is not a browser.");t.startsWith(he.URL_SCHEME)&&(t=t.slice(he.URL_SCHEME.length)),(t==null||t.length===0)&&(t=O1),this.modelJsonFileName=t+L1,this.weightDataFileName=t+W1}async save(t){if(typeof document>"u")throw new Error("Browser downloads are not supported in this environment since `document` is not present");const n=It.join(t.weightData),s=window.URL.createObjectURL(new Blob([n],{type:"application/octet-stream"}));if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{const r=[{paths:["./"+this.weightDataFileName],weights:t.weightSpecs}],o=dc(t,r),a=window.URL.createObjectURL(new Blob([JSON.stringify(o)],{type:"application/json"})),i=this.modelJsonAnchor==null?document.createElement("a"):this.modelJsonAnchor;if(i.download=this.modelJsonFileName,i.href=a,await Fr(()=>i.dispatchEvent(new MouseEvent("click"))),t.weightData!=null){const c=this.weightDataAnchor==null?document.createElement("a"):this.weightDataAnchor;c.download=this.weightDataFileName,c.href=s,await Fr(()=>c.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:an(t)}}}}he.URL_SCHEME="downloads://";class U1{constructor(t){if(t==null||t.length<1)throw new Error(`When calling browserFiles, at least 1 file is required, but received ${t}`);this.jsonFile=t[0],this.weightsFiles=t.slice(1)}async load(){return new Promise((t,n)=>{const s=new FileReader;s.onload=r=>{const o=JSON.parse(r.target.result),a=o.modelTopology;if(a==null){n(new Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(o.weightsManifest==null){n(new Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(this.weightsFiles.length===0){t({modelTopology:a});return}const c=Os(o,u=>this.loadWeights(u));t(c)},s.onerror=r=>n(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),s.readAsText(this.jsonFile)})}loadWeights(t){const n=[],s=[];for(const a of t)n.push(...a.weights),s.push(...a.paths);const r=this.checkManifestAndWeightFiles(t),o=s.map(a=>this.loadWeightsFile(a,r[a]));return Promise.all(o).then(a=>[n,a])}loadWeightsFile(t,n){return new Promise((s,r)=>{const o=new FileReader;o.onload=a=>{const i=a.target.result;s(i)},o.onerror=a=>r(`Failed to weights data from file of path '${t}'.`),o.readAsArrayBuffer(n)})}checkManifestAndWeightFiles(t){const n=[],s=this.weightsFiles.map(o=>Dr(o.name)),r={};for(const o of t)o.paths.forEach(a=>{const i=Dr(a);if(n.indexOf(i)!==-1)throw new Error(`Duplicate file basename found in weights manifest: '${i}'`);if(n.push(i),s.indexOf(i)===-1)throw new Error(`Weight file with basename '${i}' is not provided.`);r[a]=this.weightsFiles[s.indexOf(i)]});if(n.length!==this.weightsFiles.length)throw new Error(`Mismatch in the number of files in weights manifest (${n.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}const q1=e=>R().getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(he.URL_SCHEME)?G1(e.slice(he.URL_SCHEME.length)):null;Y.registerSaveRouter(q1);function G1(e="model"){return new he(e)}function z1(e){return new U1(e)}/**
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
 */function Br(e,t,n,s){a(e),n=n??0,s=s??1,i(n,s);let r=0;const o=c=>(c.then(u=>{const h=n+ ++r/e.length*(s-n);return t(h),u}),c);function a(c){g(c!=null&&Array.isArray(c)&&c.length>0,()=>"promises must be a none empty array")}function i(c,u){g(c>=0&&c<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${c}`),g(u>=0&&u<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${u}`),g(u>=c,()=>`startFraction must be no more than endFraction, but got startFraction ${c} and endFraction ${u}`)}return Promise.all(e.map(o))}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */async function yu(e,t){t==null&&(t={});const n=t.fetchFunc==null?R().platform.fetch:t.fetchFunc,s=e.map(l=>n(l,t.requestInit,{isBinary:!0})),i=(t.onProgress==null?await Promise.all(s):await Br(s,t.onProgress,0,.5)).map(l=>l.arrayBuffer());return t.onProgress==null?await Promise.all(i):await Br(i,t.onProgress,.5,1)}function K1(e,t){var n;const s=t.fetchFunc==null?R().platform.fetch:t.fetchFunc;let r=0,o;return(n=t.onProgress)===null||n===void 0||n.call(t,0),new ReadableStream({pull:async a=>{for(var i;r<e.length;){o||(o=(await s(e[r],t.requestInit,{isBinary:!0})).body.getReader());const{done:c,value:u}=await o.read();if(c){r++,o=void 0,(i=t.onProgress)===null||i===void 0||i.call(t,r/e.length);continue}a.enqueue(u);return}a.close()}})}async function V1(e,t="",n,s){return $u(a=>yu(a,{requestInit:s}))(e,t,n)}function $u(e){return async(t,n="",s)=>{const r=t.map(()=>!1),o={},a=s!=null?s.map(()=>!1):[],i=[];if(t.forEach((p,w)=>{let y=0;p.weights.forEach($=>{const x="quantization"in $?$.quantization.dtype:$.dtype,N=oe[x]*W($.shape),k=()=>{r[w]=!0,o[w]==null&&(o[w]=[]),o[w].push({manifestEntry:$,groupOffset:y,sizeBytes:N})};s!=null?s.forEach((v,T)=>{v===$.name&&(k(),a[T]=!0)}):k(),i.push($.name),y+=N})}),!a.every(p=>p)){const p=s.filter((w,y)=>!a[y]);throw new Error(`Could not find weights in manifest with names: ${p.join(", ")}. 
Manifest JSON has weights with names: ${i.join(", ")}.`)}const c=r.reduce((p,w,y)=>(w&&p.push(y),p),[]),u=[];c.forEach(p=>{t[p].paths.forEach(w=>{const y=n+(n.endsWith("/")?"":"/")+w;u.push(y)})});const h=await e(u),l={};let f=0;return c.forEach(p=>{const w=t[p].paths.length,y=new It(h.slice(f,f+w));o[p].forEach(x=>{const N=y.slice(x.groupOffset,x.groupOffset+x.sizeBytes),k=hc(N,[x.manifestEntry]);for(const v in k)l[v]=k[v]}),f+=w}),l}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const j1="application/octet-stream",H1="application/json";class gr{constructor(t,n){if(this.DEFAULT_METHOD="POST",n==null&&(n={}),this.weightPathPrefix=n.weightPathPrefix,this.weightUrlConverter=n.weightUrlConverter,n.fetchFunc!=null?(g(typeof n.fetchFunc=="function",()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=n.fetchFunc):this.fetch=R().platform.fetch,g(t!=null&&t.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(t)&&g(t.length===2,()=>`URL paths for http must have a length of 2, (actual length is ${t.length}).`),this.path=t,n.requestInit!=null&&n.requestInit.body!=null)throw new Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=n.requestInit||{},this.loadOptions=n}async save(t){if(t.modelTopology instanceof ArrayBuffer)throw new Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");const n=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);n.body=new FormData;const s=[{paths:["./model.weights.bin"],weights:t.weightSpecs}],r=dc(t,s);if(n.body.append("model.json",new Blob([JSON.stringify(r)],{type:H1}),"model.json"),t.weightData!=null){const a=It.join(t.weightData);n.body.append("model.weights.bin",new Blob([a],{type:j1}),"model.weights.bin")}const o=await this.fetch(this.path,n);if(o.ok)return{modelArtifactsInfo:an(t),responses:[o]};throw new Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${o.status}.`)}async loadModelJSON(){const t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw new Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);let n;try{n=await t.json()}catch{let a=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?a+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":a+=" Please make sure the server is serving valid JSON for this request.",new Error(a)}const s=n.modelTopology,r=n.weightsManifest;if(s==null&&r==null)throw new Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return n}async load(){if(this.loadOptions.streamWeights)return this.loadStream();const t=await this.loadModelJSON();return Os(t,n=>this.loadWeights(n))}async loadStream(){const t=await this.loadModelJSON(),n=await this.getWeightUrls(t.weightsManifest),s=fs(t.weightsManifest),r=()=>K1(n,this.loadOptions);return Object.assign(Object.assign({},t),{weightSpecs:s,getWeightStream:r})}async getWeightUrls(t){const n=Array.isArray(this.path)?this.path[1]:this.path,[s,r]=X1(n),o=this.weightPathPrefix||s,a=[],i=[];for(const c of t)for(const u of c.paths)this.weightUrlConverter!=null?i.push(this.weightUrlConverter(u)):a.push(o+u+r);return this.weightUrlConverter&&a.push(...await Promise.all(i)),a}async loadWeights(t){const n=await this.getWeightUrls(t),s=fs(t),r=await yu(n,this.loadOptions);return[s,r]}}gr.URL_SCHEME_REGEX=/^https?:\/\//;function X1(e){const t=e.lastIndexOf("/"),n=e.lastIndexOf("?"),s=e.substring(0,t),r=n>t?e.substring(n):"";return[s+"/",r]}function xs(e){return e.match(gr.URL_SCHEME_REGEX)!=null}const Eu=(e,t)=>{if(typeof fetch>"u"&&(t==null||t.fetchFunc==null))return null;{let n=!0;if(Array.isArray(e)?n=e.every(s=>xs(s)):n=xs(e),n)return mr(e,t)}return null};Y.registerSaveRouter(Eu);Y.registerLoadRouter(Eu);function mr(e,t){return new gr(e,t)}function Z1(e,t){return mr(e,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Yn{constructor(t){this.modelArtifacts=t}load(){return this.modelArtifacts}}class ku{constructor(t){this.saveHandler=t}save(t){return this.saveHandler(t)}}class Y1{constructor(t){t.load&&(this.load=()=>Promise.resolve(t.load())),t.save&&(this.save=n=>Promise.resolve(t.save(n)))}}function J1(e,t,n,s){const r=arguments;return new Y1(xu(...r))}function xu(e,t,n,s){return arguments.length===1?e.modelTopology!=null||e.weightSpecs!=null?new Yn(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Yn({modelTopology:e})):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new Yn({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:s}))}function Q1(e){return new ku(e)}function ty(e){return new ku(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ey=Object.freeze(Object.defineProperty({__proto__:null,CompositeArrayBuffer:It,browserFiles:z1,browserHTTPRequest:Z1,concatenateArrayBuffers:Ph,copyModel:of,decodeWeights:hc,decodeWeightsStream:Fh,encodeWeights:Dh,fromMemory:J1,fromMemorySync:xu,getLoadHandlers:Kh,getModelArtifactsForJSON:Os,getModelArtifactsForJSONSync:pc,getModelArtifactsInfoForJSON:an,getSaveHandlers:zh,getWeightSpecs:fs,http:mr,isHTTPScheme:xs,listModels:sf,loadWeights:V1,moveModel:af,registerLoadRouter:Gh,registerSaveRouter:qh,removeModel:rf,weightsLoaderFactory:$u,withSaveHandler:Q1,withSaveHandlerSync:ty},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function ny(e,t,n){const s=d(e,"labels","confusionMatrix"),r=d(t,"predictions","confusionMatrix");g(n==null||n>0&&Number.isInteger(n),()=>`If provided, numClasses must be a positive integer, but got ${n}`),g(s.rank===1,()=>`Expected the rank of labels to be 1, but got ${s.rank}`),g(r.rank===1,()=>`Expected the rank of predictions to be 1, but got ${r.rank}`),g(s.shape[0]===r.shape[0],()=>`Mismatch in the number of examples: ${s.shape[0]} vs. ${r.shape[0]}. Labels and predictions should have the same number of elements.`),g(n>0&&Number.isInteger(n),()=>`numClasses is required to be a positive integer, but got ${n}`);const o=$s(H(s,"int32"),n),a=$s(H(r,"int32"),n),i=An(o),c=L(i,a);return H(c,"int32")}const sy=m({confusionMatrix_:ny});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const ry=Object.freeze(Object.defineProperty({__proto__:null,confusionMatrix:sy},Symbol.toStringTag,{value:"Module"}));/**
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
 */let Jt,Rr=!1;function vu(e,t=3){if(t>4)throw new Error("Cannot construct Tensor with more than 4 channels from pixels.");if(e==null)throw new Error("pixels passed to tf.browser.fromPixels() can not be null");let n=!1,s=!1,r=!1,o=!1,a=!1,i=!1;if(e.data instanceof Uint8Array)n=!0;else if(typeof ImageData<"u"&&e instanceof ImageData)s=!0;else if(typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement)r=!0;else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement)o=!0;else if(e.getContext!=null)a=!0;else if(typeof ImageBitmap<"u"&&e instanceof ImageBitmap)i=!0;else throw new Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(Ge(Qn,b.backendName)!=null){const w={pixels:e},y={numChannels:t};return b.runKernel(Qn,w,y)}const[u,h]=r?[e.videoWidth,e.videoHeight]:[e.width,e.height];let l;if(a)l=e.getContext("2d").getImageData(0,0,u,h).data;else if(s||n)l=e.data;else if(o||r||i){if(Jt==null)if(typeof document>"u")if(typeof OffscreenCanvas<"u"&&typeof OffscreenCanvasRenderingContext2D<"u")Jt=new OffscreenCanvas(1,1).getContext("2d");else throw new Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.");else Jt=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});Jt.canvas.width=u,Jt.canvas.height=h,Jt.drawImage(e,0,0,u,h),l=Jt.getImageData(0,0,u,h).data}let f;if(t===4)f=new Int32Array(l);else{const w=u*h;f=new Int32Array(w*t);for(let y=0;y<w;y++)for(let $=0;$<t;++$)f[y*t+$]=l[y*4+$]}return iu(f,[h,u,t],"int32")}function oy(e){return e!=null&&e.data instanceof Uint8Array}function ay(){return typeof window<"u"&&typeof ImageBitmap<"u"&&window.hasOwnProperty("createImageBitmap")}function iy(e){return e!=null&&e.width!==0&&e.height!==0}function cy(e){return ay()&&!(e instanceof ImageBitmap)&&iy(e)&&!oy(e)}async function uy(e,t=3){let n=null;if(R().getBool("WRAP_TO_IMAGEBITMAP")&&cy(e)){let s;try{s=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch{s=null}s!=null&&s.width===e.width&&s.height===e.height?n=s:n=e}else n=e;return vu(n,t)}function Su(e){if(e.rank!==2&&e.rank!==3)throw new Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);const t=e.rank===2?1:e.shape[2];if(t>4||t===2)throw new Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if(e.dtype!=="float32"&&e.dtype!=="int32")throw new Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}function ly(e){const t=(e==null?void 0:e.alpha)||1;if(t>1||t<0)throw new Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}async function hy(e,t){let n=d(e,"img","toPixels");if(!(e instanceof Q)){const u=n;n=H(u,"int32"),u.dispose()}Su(n);const[s,r]=n.shape.slice(0,2),o=n.rank===2?1:n.shape[2],a=await n.data(),i=n.dtype==="float32"?255:1,c=new Uint8ClampedArray(r*s*4);for(let u=0;u<s*r;++u){const h=[0,0,0,255];for(let f=0;f<o;f++){const p=a[u*o+f];if(n.dtype==="float32"){if(p<0||p>1)throw new Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${p}.`)}else if(n.dtype==="int32"&&(p<0||p>255))throw new Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${p}.`);o===1?(h[0]=p*i,h[1]=p*i,h[2]=p*i):h[f]=p*i}const l=u*4;c[l+0]=Math.round(h[0]),c[l+1]=Math.round(h[1]),c[l+2]=Math.round(h[2]),c[l+3]=Math.round(h[3])}if(t!=null){Rr||Ge(Ns,b.backendName)!=null&&(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),Rr=!0),t.width=r,t.height=s;const u=t.getContext("2d"),h=new ImageData(c,r,s);u.putImageData(h,0,0)}return n!==e&&n.dispose(),c}function fy(e,t,n){let s=d(e,"img","draw");if(!(e instanceof Q)){const a=s;s=H(a,"int32"),a.dispose()}Su(s),ly(n==null?void 0:n.imageOptions);const r={image:s},o={canvas:t,options:n};b.runKernel(Ns,r,o)}const dy=m({fromPixels_:vu}),py=Object.freeze(Object.defineProperty({__proto__:null,draw:fy,fromPixels:dy,fromPixelsAsync:uy,toPixels:hy},Symbol.toStringTag,{value:"Module"}));function Tu(e,t){const n=e.shape.length,s=t.shape.length;if(n<1)throw new Error(`tf.gatherND() expects the input to be rank 1 or higher, but the rank was ${n}.`);if(s<1)throw new Error(`tf.gatherND() expects the indices to be rank 1 or higher, but the rank was ${s}.`);if(t.dtype!=="int32")throw new Error(`tf.gatherND() expects the indices to be int32 type, but the dtype was ${t.dtype}.`);if(t.shape[s-1]>n)throw new Error(`index innermost dimension length must be <= tensor rank; saw: ${t.shape[s-1]} vs. ${n}`);if(W(e.shape)===0)throw new Error(`Requested more than 0 entries, but input is empty. Input shape: ${e.shape}.`);const r=t.shape,o=r[r.length-1];let a=1;for(let l=0;l<r.length-1;++l)a*=r[l];const i=e.shape,c=r.slice();c.pop();let u=1;for(let l=o;l<n;++l)u*=i[l],c.push(i[l]);const h=[...Fe(e.shape).map(l=>l/u),1].slice(0,o);return[c,a,u,h]}const gy=Object.freeze(Object.defineProperty({__proto__:null,prepareAndValidate:Tu},Symbol.toStringTag,{value:"Module"}));/**
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
 */const vs=-2,my=-1;function by(e,t,n){const s=e.shape.length;g(s===t.length,()=>`Error in slice${s}D: Length of begin ${t} must match the rank of the array (${s}).`),g(s===n.length,()=>`Error in slice${s}D: Length of size ${n} must match the rank of the array (${s}).`);for(let r=0;r<s;++r)g(t[r]+n[r]<=e.shape[r],()=>`Error in slice${s}D: begin[${r}] + size[${r}] (${t[r]+n[r]}) would overflow input.shape[${r}] (${e.shape[r]})`)}function wy(e){const t=[];let n=0;for(;e>0;)e&1&&t.push(n),e/=2,n++;return t}function yy(e,t,n){const s=[];for(let r=0;r<e.length;r++)s[r]=Math.ceil((t[r]-e[r])/n[r]);return s}function Iu(e,t,n,s){const r=[...e];for(let o=r.length;o<s.length;o++)r.push(1);for(let o=0;o<n;o++)o===0?r[t]=1:(r.splice(t,0,1),r.pop());return r}function _u(e,t,n){return n<=e?n:n-(t-1)}function Au(e,t){const n=[];for(let s=0;s<e;s++)n.push(t+s);return n}function $y(e,t,n,s,r,o,a,i,c){const u=e.length;let h=new Array(u),l=new Array(u),f=new Array(u);if(t.length&&n>0){const p=t[0],w=n+1;h=Du(a,p,w,s,e),l=Nu(i,p,w,r,e),f=Iu(o,p,w,e)}else for(let p=0;p<u;p++)h[p]=Fu(a,s,o,e,p,c),l[p]=Bu(i,r,o,e,p,c),f[p]=Mu(o,p,c);return{begin:h,end:l,strides:f}}function Du(e,t,n,s,r){const o=[...r],a=Au(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=0;else{const c=_u(t,n,i);let u=s[c];e&1<<c&&(u=0),o[i]=u}return o}function Nu(e,t,n,s,r){const o=[...r],a=Au(n,t);for(let i=0;i<o.length;i++)if(a.indexOf(i)>-1)o[i]=Number.MAX_SAFE_INTEGER;else{const c=_u(t,n,i);let u=s[c];e&1<<c&&(u=Number.MAX_SAFE_INTEGER),o[i]=u}for(let i=0;i<o.length;i++){const c=r[i];o[i]<0&&(o[i]+=c),o[i]=Ue(0,o[i],r[i])}return o}function Mu(e,t,n){let s=e[t];return(n&1<<t||s==null)&&(s=1),s}function Fu(e,t,n,s,r,o){let a=t[r];const i=n[r]||1;(e&1<<r||o&1<<r||a==null)&&(i>0?a=Number.MIN_SAFE_INTEGER:a=Number.MAX_SAFE_INTEGER);const c=s[r];return a<0&&(a+=c),a=Ue(0,a,c-1),a}function Bu(e,t,n,s,r,o){let a=t[r];const i=n[r]||1;(e&1<<r||o&1<<r||a==null)&&(i>0?a=Number.MAX_SAFE_INTEGER:a=Number.MIN_SAFE_INTEGER);const c=s[r];return a<0&&(a+=c),i>0?a=Ue(0,a,c):a=Ue(-1,a,c-1),a}function Ey(e,t,n){let s=n.length;for(let r=0;r<n.length;r++)if(n[r]>1){s=r;break}for(let r=s+1;r<n.length;r++)if(t[r]>0||n[r]!==e[r])return!1;return!0}function ky(e,t){let n=e.length>0?e[e.length-1]:1;for(let s=0;s<e.length-1;s++)n+=e[s]*t[s];return n}function xy(e,t,n){let s;const r=e.shape.length;typeof t=="number"?s=[t,...new Array(r-1).fill(0)]:t.length<r?s=t.concat(new Array(r-t.length).fill(0)):s=t.slice(),s.forEach(a=>{g(a!==-1,()=>"slice() does not support negative begin indexing.")});let o;return n==null?o=new Array(r).fill(-1):typeof n=="number"?o=[n,...new Array(r-1).fill(-1)]:n.length<r?o=n.concat(new Array(r-n.length).fill(-1)):o=n,o=o.map((a,i)=>a>=0?a:(g(a===-1,()=>`Negative size values should be exactly -1 but got ${a} for the slice() size at index ${i}.`),e.shape[i]-s[i])),[s,o]}function vy(e,t,n,s,r,o,a,i,c){let u;if(s==null?(u=new Array(t.length),u.fill(1)):u=s,a!=null&&a&a-1)throw new Error("Multiple ellipses in slice is not allowed.");let h=!1;const l={dims:u.length,numAddAxisAfterEllipsis:0,begin:t.slice(),end:n.slice(),strides:u.slice(),beginMask:r,endMask:o,ellipsisMask:a,newAxisMask:i,shrinkAxisMask:c};for(let k=0;k<l.dims;k++)h&&1<<k&i&&l.numAddAxisAfterEllipsis++,1<<k&a&&(h=!0);h||(l.ellipsisMask|=1<<l.dims,l.dims++);const f={dims:e.length,beginMask:0,endMask:0,beginValid:!1,endValid:!1};Sy(l,f);let p=!0,w=!0,y=!0;const $=[],x=[];for(let k=0;k<e.length;++k){if(f.strides[k]===0)throw Error(`strides[${k}] must be non-zero`);const v=!!(f.shrinkAxisMask&1<<k),T=e[k];if(T===-1){$.push(v?1:-1);continue}const _=[f.beginMask&1<<k,f.endMask&1<<k],M=[f.strides[k]>0?0:-1,f.strides[k]>0?T:T-1];if(v&&f.strides[k]<=0)throw Error("only stride 1 allowed on non-range indexing.");y=y&&f.strides[k]===1;const A=!!(f.beginMask&1<<k&&f.endMask&1<<k);if(f.beginValid&&f.endValid){if(v){const O=f.begin[k]<0?T+f.begin[k]:f.begin[k];if(f.begin[k]=O,f.end[k]=f.begin[k]+1,O<0||O>=T)throw Error(`slice index ${f.begin[k]} of dimension ${k} out of bounds.`)}else f.begin[k]=Cr(f.begin[k],0,f.strides[k],T,_,M),f.end[k]=Cr(f.end[k],1,f.strides[k],T,_,M);const B=f.strides[k]===1&&f.begin[k]===0&&f.end[k]===T;p=p&&B,w=w&&(k===0&&f.strides[k]===1||B)}else p=p&&f.strides[k]===1&&A,w=w&&(k===0&&f.strides[k]===1||A);let D,C=!1;if(f.beginValid&&f.endValid?(D=f.end[k]-f.begin[k],C=!0):v?(D=1,C=!0):A&&T>=0&&(f.strides[k]<0?D=-T:D=T,C=!0),C){let B;D===0||D<0!=f.strides[k]<0?B=0:B=Math.trunc(D/f.strides[k])+(D%f.strides[k]!==0?1:0),$.push(B)}else $.push(-1)}for(let k=0;k<f.finalShapeGatherIndices.length;++k){const v=f.finalShapeGatherIndices[k];v>=0?x.push($[v]):v===vs&&x.push(1)}return{finalShapeSparse:x.filter((k,v)=>f.finalShapeGatherIndices[v]!==vs),finalShape:x,isIdentity:p,sliceDim0:w,isSimpleSlice:y,begin:f.begin,end:f.end,strides:f.strides}}function Sy(e,t){t.beginMask=0,t.endMask=0,t.shrinkAxisMask=0;let n=0;t.beginValid=e.begin!=null,t.endValid=e.end!=null,t.begin=new Array(t.dims),t.end=new Array(t.dims),t.strides=new Array(t.dims),t.finalShapeGatherIndices=[],t.finalShapeGatherIndicesSparse=[],t.inputShapeGatherIndicesSparse=new Array(t.dims);for(let s=0;s<e.dims;s++)if(1<<s&e.ellipsisMask){const r=Math.min(t.dims-(e.dims-s)+1+e.numAddAxisAfterEllipsis,t.dims);for(;n<r;n++)t.begin[n]=0,t.end[n]=0,t.strides[n]=1,t.beginMask|=1<<n,t.endMask|=1<<n,t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(-1),t.inputShapeGatherIndicesSparse[n]=s}else if(1<<s&e.newAxisMask)t.finalShapeGatherIndices.push(vs),t.finalShapeGatherIndicesSparse.push(-1);else{if(n===t.begin.length)throw Error(`Index out of range using input dim ${n}; input has only ${t.dims} dims, ${t.begin.length}.`);e.begin!=null&&(t.begin[n]=e.begin[s]),e.end!=null&&(t.end[n]=e.end[s]),t.strides[n]=e.strides[s],e.beginMask&1<<s&&(t.beginMask|=1<<n),e.endMask&1<<s&&(t.endMask|=1<<n),e.shrinkAxisMask&1<<s?(t.finalShapeGatherIndices.push(my),t.finalShapeGatherIndicesSparse.push(-1),t.shrinkAxisMask|=1<<n):(t.finalShapeGatherIndices.push(n),t.finalShapeGatherIndicesSparse.push(s)),t.inputShapeGatherIndicesSparse[n]=s,n++}}function Cr(e,t,n,s,r,o){if(r[t])return n>0?o[t]:o[t+1&1];{const a=e<0?s+e:e;return a<o[0]?o[0]:a>o[1]?o[1]:a}}const Ru=Object.freeze(Object.defineProperty({__proto__:null,assertParamsValid:by,computeFlatOffset:ky,computeOutShape:yy,getNormalizedAxes:$y,isSliceContinous:Ey,maskToAxes:wy,parseSliceParams:xy,sliceInfo:vy,startForAxis:Fu,startIndicesWithElidedDims:Du,stopForAxis:Bu,stopIndicesWithElidedDims:Nu,stridesForAxis:Mu,stridesWithElidedDims:Iu},Symbol.toStringTag,{value:"Module"}));/** @license See the LICENSE file. */const Ty="4.22.0";/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */class Cu{static sgd(t){return new Vn(t)}static momentum(t,n,s=!1){return new dr(t,n,s)}static rmsprop(t,n=.9,s=0,r=null,o=!1){return new pr(t,n,s,r,o)}static adam(t=.001,n=.9,s=.999,r=null){return new hr(t,n,s,r)}static adadelta(t=.001,n=.95,s=null){return new ur(t,n,s)}static adamax(t=.002,n=.9,s=.999,r=null,o=0){return new fr(t,n,s,r,o)}static adagrad(t,n=.1){return new lr(t,n)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Iy=Cu;/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const _y=typeof requestAnimationFrame<"u"?requestAnimationFrame:typeof setImmediate<"u"?setImmediate:e=>e();function Ay(){return new Promise(e=>_y(()=>e()))}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */function Dy(e,t){const n=e[0].length;e.forEach((r,o)=>{g(r.length===n,()=>`Error in concat${n}D: rank of tensors[${o}] must be the same as the rank of the rest (${n})`)}),g(t>=0&&t<n,()=>`Error in concat${n}D: axis must be between 0 and ${n-1}.`);const s=e[0];e.forEach((r,o)=>{for(let a=0;a<n;a++)g(a===t||r[a]===s[a],()=>`Error in concat${n}D: Shape of tensors[${o}] (${r}) does not match the shape of the rest (${s}) along the non-concatenated axis ${o}.`)})}function Ny(e,t){const n=e[0].slice();for(let s=1;s<e.length;s++)n[t]+=e[s][t];return n}/**
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
 */var _t;(function(e){e[e.FIRST_DIM_SIZE=0]="FIRST_DIM_SIZE",e[e.VALUE_ROWIDS=1]="VALUE_ROWIDS",e[e.ROW_LENGTHS=2]="ROW_LENGTHS",e[e.ROW_SPLITS=3]="ROW_SPLITS",e[e.ROW_LIMITS=4]="ROW_LIMITS",e[e.ROW_STARTS=5]="ROW_STARTS"})(_t||(_t={}));function My(e,t,n){let s=new Array;if(n==null&&t==null)return s;if(t==null)for(;s.length<e+n.length;)s.push(-1);else s=t.slice();if(n==null)return s;if(e+n.length!==s.length)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.rank = ${e+n.length}, but shape.rank = ${s.length}`);for(let r=1;r<n.length;++r){const o=n[r],a=s[s.length-n.length+r],i=s[a];if(o>=0)if(i>=0){if(i!==o)throw new Error(`rt input.shape and shape=${t} are incompatible: rt input.shape[${r+e}] = ${o} but shape[${r+e}] = ${i}`)}else s[a]=o}return s}function Fy(e){const t={FIRST_DIM_SIZE:_t.FIRST_DIM_SIZE,VALUE_ROWIDS:_t.VALUE_ROWIDS,ROW_LENGTHS:_t.ROW_LENGTHS,ROW_SPLITS:_t.ROW_SPLITS,ROW_LIMITS:_t.ROW_LIMITS,ROW_STARTS:_t.ROW_STARTS},n=[];for(const s of e)if(s in t)n.push(t[s]);else break;return n}function By(e){return e.length===0?0:e[0]===_t.FIRST_DIM_SIZE?e.length-1:e.length}function Ry(e,t){if(e==null||t==null)return;const n=e.length,s=t.length;if(n>=s)throw new Error(`defaultValue.shape=${e} and ragged tensor flatValues.shape=${t}, are incompatible: defaultValue.rank = ${n} must be less than ragged tensor input flatValues.rank = ${s})`);for(let r=0;r<Math.min(n,s-1);++r){const o=e[r],a=t[r+1];if(o>=0&&a>=0&&o!==1&&o!==a)throw new Error(`defaultValue.shape=${e}, and ragged tensor input flatValues.shape=${t} are incompatible: defaultValue.shape[${r-e.length}] = ${o} but ragged tensor input.flatValues.shape[${r-e.length}] = ${a}`)}}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */const br=30;function Cy(e){return e<=br?e:$n(e,Math.floor(Math.sqrt(e)))}/**
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
 */function Py(e,t,n){const s=n*(typeof e=="number"?e:e[0]),r=t*(typeof e=="number"?e:e[1]);return[s,r]}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Oy(e,t,n,s=!0){let r=[];if(s)r=r.concat(t.slice(0)),r.push(e[0]/n),r=r.concat(e.slice(1));else{r=r.concat(e[0]);const o=t.length;for(let a=0;a<o;++a)r=r.concat([e[a+1]/t[a],t[a]]);r=r.concat(e.slice(o+1))}return r}function Ly(e,t,n=!0){const s=[];if(n){s.push(t);for(let r=t+1;r<e;++r)r<=2*t?(s.push(r),s.push(r-(t+1))):s.push(r)}else{const r=[],o=[];for(let a=1;a<e;++a)a>=t*2+1||a%2===1?o.push(a):r.push(a);s.push(...r),s.push(0),s.push(...o)}return s}function Wy(e,t,n,s=!0){const r=[];s?r.push(e[0]/n):r.push(e[0]*n);for(let o=1;o<e.length;++o)o<=t.length?s?r.push(t[o-1]*e[o]):r.push(e[o]/t[o-1]):r.push(e[o]);return r}function Uy(e,t){const n=[0];for(let s=0;s<t;++s)n.push(e[s][0]);return n}function qy(e,t,n){const s=e.slice(0,1);for(let r=0;r<n;++r)s.push(e[r+1]-t[r][0]-t[r][1]);return s}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Gy=1.7580993408473768,zy=1.0507009873554805;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */const Ky=.3275911,Vy=.254829592,jy=-.284496736,Hy=1.421413741,Xy=-1.453152027,Zy=1.061405429;/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function Yy(e,t){if(e.length!==t.length)throw new Error(`Cannot merge real and imag arrays of different lengths. real:${e.length}, imag: ${t.length}.`);const n=new Float32Array(e.length*2);for(let s=0;s<n.length;s+=2)n[s]=e[s/2],n[s+1]=t[s/2];return n}function Jy(e){const t=new Float32Array(e.length/2),n=new Float32Array(e.length/2);for(let s=0;s<e.length;s+=2)t[s/2]=e[s],n[s/2]=e[s+1];return{real:t,imag:n}}function Qy(e){const t=Math.ceil(e.length/4),n=new Float32Array(t),s=new Float32Array(t);for(let r=0;r<e.length;r+=4)n[Math.floor(r/4)]=e[r],s[Math.floor(r/4)]=e[r+1];return{real:n,imag:s}}function t$(e){const t=Math.floor(e.length/4),n=new Float32Array(t),s=new Float32Array(t);for(let r=2;r<e.length;r+=4)n[Math.floor(r/4)]=e[r],s[Math.floor(r/4)]=e[r+1];return{real:n,imag:s}}function e$(e,t){const n=e[t*2],s=e[t*2+1];return{real:n,imag:s}}function n$(e,t,n,s){e[s*2]=t,e[s*2+1]=n}function s$(e,t){const n=new Float32Array(e/2),s=new Float32Array(e/2);for(let r=0;r<Math.ceil(e/2);r++){const o=(t?2:-2)*Math.PI*(r/e);n[r]=Math.cos(o),s[r]=Math.sin(o)}return{real:n,imag:s}}function r$(e,t,n){const s=(n?2:-2)*Math.PI*(e/t),r=Math.cos(s),o=Math.sin(s);return{real:r,imag:o}}/**
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
 */const Jn="->",o$=/->/g,Pr=",",Or="...";function a$(e,t){e=e.replace(/\s/g,"");const n=(e.length-e.replace(o$,"").length)/Jn.length;if(n<1)throw new Error("Equations without an arrow are not supported.");if(n>1)throw new Error(`Equation must contain exactly one arrow ("${Jn}").`);const[s,r]=e.split(Jn);g(s.indexOf(Or)===-1,()=>`The ellipsis notation ("${Or}") is not supported yet.`);const o=s.split(Pr),a=o.length;if(t!==a)throw new Error(`Expected ${a} input tensors, received ${t}`);if(a>2)throw new Error("Support for more than 2 input tensors is not implemented yet.");const i=[];for(let f=0;f<r.length;++f){const p=r[f];if(!o.some(w=>w.indexOf(p)!==-1))throw new Error(`Output subscripts contain the label ${p} not present in the input subscripts.`);i.indexOf(p)===-1&&i.push(p)}for(let f=0;f<s.length;++f){const p=s[f];i.indexOf(p)===-1&&p!==Pr&&i.push(p)}const c=new Array(o.length);for(let f=0;f<a;++f){if(new Set(o[f].split("")).size!==o[f].length)throw new Error(`Found duplicate axes in input component ${o[f]}. Support for duplicate axes in input is not implemented yet.`);c[f]=[];for(let p=0;p<o[f].length;++p)c[f].push(i.indexOf(o[f][p]))}const u=i.length,h=r.length,l=[];for(let f=h;f<u;++f)l.push(f);return{allDims:i,summedDims:l,idDims:c}}function i$(e,t){let n=new Array(e);n.fill(-1);for(let r=0;r<t.length;++r)n[t[r]]=r;const s=[];for(let r=0;r<e;++r)n[r]===-1&&s.push(r);return n=n.filter(r=>r!==-1),{permutationIndices:n,expandDims:s}}function c$(e,t,n){const s=new Array(e);for(let r=0;r<n.length;++r){const o=n[r].shape;for(let a=0;a<t[r].length;++a)s[t[r][a]]===void 0?s[t[r][a]]=o[a]:g(s[t[r][a]]===o[a],()=>`Expected dimension ${s[t[r][a]]} at axis ${a} of input shaped ${JSON.stringify(o)}, but got dimension ${o[a]}`)}}function u$(e,t){const n=e,s=[];let r=0;e.length===0&&n.push(-1),r=e.length+1;for(let a=0;a<r;++a)s.push([]);const o=[];for(let a=0;a<n.length;++a){const i=n[a],c=h$(t,i);for(const u of c)o.indexOf(u)===-1&&(s[a].push(u),o.push(u))}return{path:n,steps:s}}function l$(e){return e.every((t,n)=>t===n)}function h$(e,t){const n=[];for(let s=0;s<e.length;++s)(e[s].length===0||e[s].indexOf(t)!==-1||t===-1)&&n.push(s);return n}function f$(e,t,n=0){let s=[];if(typeof t=="number")g(e.shape[n]%t===0,()=>"Number of splits must evenly divide the axis."),s=new Array(t).fill(e.shape[n]/t);else{const r=t.reduce((a,i)=>(i===-1&&(a+=1),a),0);g(r<=1,()=>"There should be only one negative value in split array.");const o=t.indexOf(-1);if(o!==-1){const a=t.reduce((i,c)=>c>0?i+c:i);t[o]=e.shape[n]-a}g(e.shape[n]===t.reduce((a,i)=>a+i),()=>"The sum of sizes must match the size of the axis dimension."),s=t}return s}/**
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
 */function d$(e){return`Received SparseTensor with denseShape[0] = 0 but
  indices.shape[0] = ${e}`}function p$(e,t){return`indices(${e}, 0) is invalid: ${t} < 0`}function g$(e,t,n){return`indices(${e}, 0) is invalid: ${t} >= ${n}`}/**
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
 */function m$(e,t){return`only one output dimension may be -1, not both ${e} and ${t}`}function b$(e,t){return`size ${e} must be non-negative, not ${t}`}function w$(){return"reshape cannot infer the missing input size for an empty tensor unless all specified input sizes are non-zero"}function y$(e,t){const n=W(e),s=W(t);return`Input to reshape is a SparseTensor with ${n}
  dense values, but the requested shape requires a multiple of ${s}. inputShape=${e} outputShape= ${t}`}function $$(e,t){const n=W(e),s=W(t);return`Input to reshape is a tensor with ${n} dense values, but the requested shape has ${s}. inputShape=${e} outputShape=${t}`}/**
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
 */function E$(){return"segment ids must be >= 0"}function k$(){return"segment ids are not increasing"}function x$(e,t){return`Segment id ${e} out of range [0, ${t}), possibly because segmentIds input is not sorted.`}function v$(e,t,n){return`Bad: indices[${e}] == ${t} out of range [0, ${n})`}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function S$(e,t){let n=!1,s;for(e<=br?(s=e,n=!0):s=$n(e,Math.floor(Math.sqrt(e)));!n;)s>t||s===e?n=!0:s=$n(e,s+1);return s}function T$(e,t,n){const s=[],r=e.length;for(let o=0;o<r;o++)o!==t?s.push(e[o]):s.push(n);return s}function I$(e,t,n,s){const r=t.shape.length,o=e.shape.length;if(s!==0&&(s<-r||s>r))throw new Error(`Expect batchDims in the range of [-${r}, ${r}], but got ${s}`);if(s<0&&(s+=r),s>o)throw new Error(`batchDims (${s}) must be less than rank(x) (
    ${o}).`);if(n<s)throw new Error(`batchDims (${s}) must be less than or equal to axis (${n}).`);for(let l=0;l<s;++l)if(e.shape[l]!==t.shape[l])throw new Error(`x.shape[${l}]: ${e.shape[l]} should be equal to indices.shape[${l}]: ${t.shape[l]}.`);const a=e.shape[n],i=[];let c=1,u=1,h=1;for(let l=0;l<s;++l)i.push(e.shape[l]),c*=e.shape[l];for(let l=s;l<n;l++)i.push(e.shape[l]),u*=e.shape[l];for(let l=s;l<r;l++)i.push(t.shape[l]);for(let l=n+1;l<o;l++)i.push(e.shape[l]),h*=e.shape[l];return{batchSize:c,sliceSize:h,outerSize:u,dimSize:a,outputShape:i}}const _$=Object.freeze(Object.defineProperty({__proto__:null,collectGatherOpShapeInfo:I$,computeOutShape:T$,segOpComputeOptimalWindowSize:S$},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
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
 */function A$(e){try{return e.map(t=>xn(t))}catch(t){throw new Error(`Failed to decode encoded string bytes into utf-8, error: ${t}`)}}function D$(e){return e.map(t=>on(t))}const N$=Object.freeze(Object.defineProperty({__proto__:null,ERF_A1:Vy,ERF_A2:jy,ERF_A3:Hy,ERF_A4:Xy,ERF_A5:Zy,ERF_P:Ky,PARALLELIZE_THRESHOLD:br,get RowPartitionType(){return _t},SELU_SCALE:zy,SELU_SCALEALPHA:Gy,applyActivation:zn,assertAndGetBroadcastShape:et,assertAxesAreInnerMostDims:xp,assertParamsConsistent:Dy,assignToTypedArray:n$,axesAreInnerMostDims:qs,calculateShapes:cu,checkEinsumDimSizes:c$,checkPadOnDimRoundingMode:xt,combineLocations:Bc,combineRaggedTensorToTensorShapes:My,complexWithEvenIndex:Qy,complexWithOddIndex:t$,computeConv2DInfo:cn,computeConv3DInfo:Sc,computeDefaultPad:Ls,computeDilation2DInfo:Gf,computeOptimalWindowSize:Cy,computeOutAndReduceShapes:kp,computeOutShape:Ny,computePool2DInfo:vc,computePool3DInfo:zf,convertConv2DDataFormat:Tc,decodeEinsumEquation:a$,eitherStridesOrDilationsAreOne:Pt,expandShapeToKeepDim:ln,exponent:r$,exponents:s$,fromStringArrayToUint8:D$,fromUint8ToStringArray:A$,getAxesPermutation:vp,getBroadcastDims:Nc,getComplexWithIndex:e$,getEinsumComputePath:u$,getEinsumPermutation:i$,getFusedBiasGradient:Gn,getFusedDyActivation:qn,getImageCenter:Py,getInnerMostAxes:Tp,getPermuted:Ly,getRaggedRank:By,getReductionAxes:Us,getReshaped:Oy,getReshapedPermuted:Wy,getRowPartitionTypesHelper:Fy,getSliceBeginCoords:Uy,getSliceSize:qy,getSparseFillEmptyRowsIndicesDenseShapeMismatch:d$,getSparseFillEmptyRowsNegativeIndexErrorMessage:p$,getSparseFillEmptyRowsOutOfRangeIndexErrorMessage:g$,getSparseReshapeEmptyTensorZeroOutputDimErrorMessage:w$,getSparseReshapeInputOutputMismatchErrorMessage:$$,getSparseReshapeInputOutputMultipleErrorMessage:y$,getSparseReshapeMultipleNegativeOneOutputDimErrorMessage:m$,getSparseReshapeNegativeOutputDimErrorMessage:b$,getSparseSegmentReductionIndicesOutOfRangeErrorMessage:v$,getSparseSegmentReductionNegativeSegmentIdsErrorMessage:E$,getSparseSegmentReductionNonIncreasingSegmentIdsErrorMessage:k$,getSparseSegmentReductionSegmentIdOutOfRangeErrorMessage:x$,getUndoAxesPermutation:Sp,isIdentityPermutation:l$,log:Dl,mergeRealAndImagArrays:Yy,prepareAndValidate:Tu,prepareSplitSize:f$,segment_util:_$,shouldFuse:Kn,slice_util:Ru,splitRealAndImagArrays:Jy,stridesOrDilationsArePositive:ce,tupleValuesAreOne:Xe,upcastType:Fn,validateDefaultValueShape:Ry,validateInput:Un,validateUpdateShape:or,warn:Wt},Symbol.toStringTag,{value:"Module"}));/**
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
 */const M$=Object.freeze(Object.defineProperty({__proto__:null,nonMaxSuppressionV3Impl:pu,nonMaxSuppressionV4Impl:gu,nonMaxSuppressionV5Impl:mu,whereImpl:uu},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
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
 */P1();const B$=Object.freeze(Object.defineProperty({__proto__:null,Abs:Jr,Acos:Qr,Acosh:to,AdadeltaOptimizer:ur,AdagradOptimizer:lr,AdamOptimizer:hr,AdamaxOptimizer:fr,Add:As,AddN:eo,All:no,Any:so,ArgMax:ro,ArgMin:oo,Asin:ao,Asinh:io,Atan:co,Atan2:lo,Atanh:uo,AvgPool:ho,AvgPool3D:fo,AvgPool3DGrad:fl,AvgPoolGrad:hl,BatchMatMul:po,BatchToSpaceND:go,Bincount:mo,BitwiseAnd:bo,BroadcastArgs:wo,BroadcastTo:dl,Cast:Ds,Ceil:yo,ClipByValue:$o,Complex:Eo,ComplexAbs:ko,Concat:xo,Conv2D:vo,Conv2DBackpropFilter:So,Conv2DBackpropInput:To,Conv3D:Io,Conv3DBackpropFilterV2:pl,Conv3DBackpropInputV2:_o,Cos:Ao,Cosh:Do,CropAndResize:Fo,Cumprod:No,Cumsum:Mo,DataStorage:Gu,DenseBincount:Bo,DepthToSpace:Ro,DepthwiseConv2dNative:Co,DepthwiseConv2dNativeBackpropFilter:Po,DepthwiseConv2dNativeBackpropInput:Oo,Diag:Lo,Dilation2D:Wo,Dilation2DBackpropFilter:ml,Dilation2DBackpropInput:gl,Draw:Ns,get ENV(){return Is},Einsum:qo,Elu:Go,EluGrad:bl,Environment:Zr,Equal:Ko,Erf:zo,Exp:Vo,ExpandDims:jo,Expm1:Ho,FFT:Xo,Fill:Zo,FlipLeftRight:Yo,Floor:Jo,FloorDiv:Qo,FromPixels:Qn,FusedBatchNorm:ta,FusedConv2D:es,FusedDepthwiseConv2D:ns,GatherNd:na,GatherV2:ea,Greater:sa,GreaterEqual:ra,IFFT:oa,Identity:Ms,Imag:aa,IsFinite:ia,IsInf:ca,IsNan:ua,KernelBackend:Lr,LRN:ya,LRNGrad:El,LeakyRelu:la,Less:ha,LessEqual:fa,LinSpace:da,Log:pa,Log1p:ga,LogSoftmax:yl,LogicalAnd:ma,LogicalNot:ba,LogicalOr:wa,LogicalXor:wl,LowerBound:$l,MatrixBandPart:kl,Max:$a,MaxPool:ka,MaxPool3D:xa,MaxPool3DGrad:vl,MaxPoolGrad:xl,MaxPoolWithArgmax:va,Maximum:Ea,Mean:Sa,Min:Ta,Minimum:Ia,MirrorPad:_a,Mod:Aa,MomentumOptimizer:dr,Multinomial:Da,Multiply:Na,Neg:Ma,NonMaxSuppressionV3:Ba,NonMaxSuppressionV4:Ra,NonMaxSuppressionV5:Ca,NotEqual:Fa,OP_SCOPE_SUFFIX:ic,OneHot:Oa,OnesLike:Pa,Optimizer:Yt,OptimizerConstructors:Cu,Pack:La,PadV2:Wa,Pool:Sl,Pow:Ua,Prelu:qa,Prod:Ga,RMSPropOptimizer:pr,RaggedGather:za,RaggedRange:Ka,RaggedTensorToTensor:Va,Range:ja,get Rank(){return as},Real:Ha,RealDiv:Uo,Reciprocal:Xa,get Reduction(){return it},Relu:Za,Relu6:ti,Reshape:Ya,ResizeBilinear:Qa,ResizeBilinearGrad:Il,ResizeNearestNeighbor:Ja,ResizeNearestNeighborGrad:Tl,Reverse:ei,RotateWithOffset:Ui,Round:ni,Rsqrt:si,SGDOptimizer:Vn,ScatterNd:ri,SearchSorted:ai,Select:ii,Selu:ci,Sigmoid:di,Sign:fi,Sin:li,Sinh:hi,Slice:ui,Softmax:yi,Softplus:pi,SpaceToBatchND:bi,SparseFillEmptyRows:$i,SparseReshape:Ei,SparseSegmentMean:ki,SparseSegmentSum:xi,SparseToDense:vi,SplitV:wi,Sqrt:gi,Square:_l,SquaredDifference:Si,StaticRegexReplace:Ti,Step:Wi,StridedSlice:Ii,StringNGrams:_i,StringSplit:Ai,StringToHashBucketFast:Di,Sub:Ni,Sum:mi,Tan:Mi,Tanh:Fi,Tensor:Q,TensorBuffer:vn,TensorScatterUpdate:oi,Tile:Fs,TopK:Bi,Transform:Ri,Transpose:pn,Unique:Ci,Unpack:Pi,UnsortedSegmentSum:Oi,UpperBound:Al,Variable:Ke,ZerosLike:Li,_FusedMatMul:ts,abs:mt,acos:$f,acosh:kf,add:F,addN:vf,all:Tf,any:_f,argMax:Df,argMin:Mf,asin:Bf,asinh:Cf,atan:Of,atan2:Wf,atanh:qf,avgPool:Ic,avgPool3d:Jf,backend:lc,backend_util:N$,basicLSTMCell:od,batchNorm:Bn,batchNorm2d:ld,batchNorm3d:fd,batchNorm4d:pd,batchToSpaceND:_c,bincount:Ac,bitwiseAnd:bd,booleanMaskAsync:Ew,broadcastArgs:yd,broadcastTo:bn,broadcast_util:cp,browser:py,buffer:Bt,cast:H,ceil:kd,clipByValue:vd,clone:re,complex:Ht,concat:dt,concat1d:Td,concat2d:_d,concat3d:Dd,concat4d:Md,conv1d:Rd,conv2d:Rn,conv2dTranspose:Od,conv3d:Wd,conv3dTranspose:zd,copyRegisteredKernels:Bl,cos:Vd,cosh:Hd,cosineWindow:ir,cumprod:Zd,cumsum:Jd,customGrad:Nt,denseBincount:tp,deprecationWarn:bh,depthToSpace:np,depthwiseConv2d:Ws,device_util:hh,diag:op,dilation2d:ip,disableDeprecationWarnings:mh,dispose:ut,disposeVariables:wh,div:K,divNoNan:dp,dot:gp,dropout:Bw,einsum:$e,elu:Fc,enableDebugMode:gh,enableProdMode:ph,enclosingPowerOfTwo:hu,engine:yh,ensureShape:yp,env:R,equal:Mc,erf:Ep,euclideanNorm:Rp,exp:ue,expandDims:Lt,expm1:Lp,eye:Cc,fft:nr,fill:un,findBackend:Th,findBackendFactory:Ih,floor:Pc,floorDiv:xc,fused:Xw,gather:Oc,gatherND:Nw,gather_util:gy,getBackend:uc,getGradient:ss,getKernel:Ge,getKernelsForBackend:En,grad:ig,grads:cg,greater:Pn,greaterEqual:Lc,ifft:_n,imag:On,image:_1,inTopKAsync:Cw,io:ey,irfft:ru,isFinite:Hp,isInf:Zp,isNaN:Jp,keep:cc,kernel_impls:M$,leakyRelu:Wc,less:ys,lessEqual:Gs,linalg:A1,linspace:ng,localResponseNormalization:rg,log:Ye,log1p:Uc,logSigmoid:pg,logSoftmax:bg,logSumExp:zc,logicalAnd:Sn,logicalNot:Kc,logicalOr:Vc,logicalXor:xg,losses:D1,lowerBound:Sg,matMul:L,math:ry,max:Ie,maxPool:jc,maxPool3d:_g,maxPoolWithArgmax:Dg,maximum:Hc,mean:Tn,memory:$h,meshgrid:Fg,min:ws,minimum:In,mirrorPad:Cg,mod:Og,moments:Wg,movingAverage:vw,mul:I,multiRNNCell:qg,multinomial:zg,neg:At,nextFrame:Ay,norm:Cn,notEqual:Xc,oneHot:$s,ones:se,onesLike:Hg,op:m,outerProduct:Zg,pad:hn,pad1d:Qg,pad2d:em,pad3d:sm,pad4d:om,pool:lm,pow:Ze,prelu:Yc,print:kc,prod:dm,profile:Eh,raggedGather:gm,raggedRange:bm,raggedTensorToTensor:ym,rand:Em,randomGamma:Ym,randomNormal:eu,randomStandardNormal:tb,randomUniform:er,randomUniformInt:sb,range:Je,ready:vh,real:Qe,reciprocal:ab,registerBackend:_h,registerGradient:Nl,registerKernel:qi,relu:Wn,relu6:nu,removeBackend:Sh,reshape:E,reverse:le,reverse1d:hb,reverse2d:db,reverse3d:gb,reverse4d:bb,rfft:sr,round:su,rsqrt:$b,scalar:q,scatterND:Tw,scatter_util:ow,searchSorted:zs,selu:kb,separableConv2d:vb,serialization:R1,setBackend:xh,setPlatform:Ah,setdiff1dAsync:Tb,sigmoid:Te,sign:_b,signal:I1,sin:Db,sinh:Mb,slice:Z,slice1d:Bb,slice2d:Cb,slice3d:Ob,slice4d:Wb,slice_util:Ru,softmax:qb,softplus:Gc,spaceToBatchND:Zc,sparse:N1,sparseToDense:Aw,spectral:T1,split:tn,sqrt:Rt,square:St,squaredDifference:ou,squeeze:rr,stack:en,step:au,stridedSlice:Qb,string:M1,sub:P,sum:z,sumOutType:nh,tan:ew,tanh:bs,tensor:xe,tensor1d:kt,tensor2d:We,tensor3d:iu,tensor4d:nw,tensor5d:sw,tensor6d:rw,tensorScatterUpdate:iw,tensor_util:oh,test_util:jm,tidy:tt,tile:Le,time:kh,topk:uw,train:Iy,transpose:An,truncatedNormal:hw,unique:dw,unregisterGradient:Fl,unregisterKernel:Ml,unsortedSegmentSum:gw,unstack:ar,upcastType:Fn,upperBound:bw,util:Kl,valueAndGrad:ug,valueAndGrads:lg,variable:ww,variableGrads:qc,version_core:Ty,where:Kt,whereAsync:lu,zeros:Me,zerosLike:bt},Symbol.toStringTag,{value:"Module"}));export{np as $,Ac as A,bd as B,Ew as C,yd as D,bn as E,Bt as F,H as G,kd as H,vd as I,Ht as J,dt as K,Td as L,_d as M,Dd as N,ic as O,Md as P,Rd as Q,Rn as R,Od as S,Wd as T,zd as U,Vd as V,Hd as W,ir as X,Zd as Y,Jd as Z,tp as _,mt as a,Og as a$,Ws as a0,op as a1,ip as a2,K as a3,dp as a4,gp as a5,Bw as a6,$e as a7,Fc as a8,hu as a9,ys as aA,Gs as aB,A1 as aC,ng as aD,rg as aE,Ye as aF,Uc as aG,pg as aH,bg as aI,zc as aJ,Sn as aK,Kc as aL,Vc as aM,xg as aN,D1 as aO,Sg as aP,L as aQ,Ie as aR,jc as aS,_g as aT,Dg as aU,Hc as aV,Tn as aW,Fg as aX,ws as aY,In as aZ,Cg as a_,yp as aa,Mc as ab,Ep as ac,Rp as ad,ue as ae,Lt as af,Lp as ag,Cc as ah,nr as ai,un as aj,Pc as ak,xc as al,Xw as am,Oc as an,Nw as ao,Pn as ap,Lc as aq,_n as ar,On as as,_1 as at,Cw as au,ru as av,Hp as aw,Zp as ax,Jp as ay,Wc as az,$f as b,Gc as b$,Wg as b0,vw as b1,I as b2,qg as b3,zg as b4,At as b5,Cn as b6,Xc as b7,$s as b8,se as b9,nu as bA,E as bB,le as bC,hb as bD,db as bE,gb as bF,bb as bG,sr as bH,su as bI,$b as bJ,q as bK,Tw as bL,zs as bM,kb as bN,vb as bO,Tb as bP,Te as bQ,_b as bR,I1 as bS,Db as bT,Mb as bU,Z as bV,Bb as bW,Cb as bX,Ob as bY,Wb as bZ,qb as b_,Hg as ba,m as bb,Zg as bc,hn as bd,Qg as be,em as bf,sm as bg,om as bh,lm as bi,Ze as bj,Yc as bk,kc as bl,dm as bm,gm as bn,bm as bo,ym as bp,Em as bq,Ym as br,eu as bs,tb as bt,er as bu,sb as bv,Je as bw,Qe as bx,ab as by,Wn as bz,re as c,uo as c$,Zc as c0,N1 as c1,Aw as c2,T1 as c3,tn as c4,Rt as c5,St as c6,ou as c7,rr as c8,en as c9,Me as cA,bt as cB,g as cC,cc as cD,tt as cE,Ct as cF,Nn as cG,ey as cH,Fh as cI,Q as cJ,ut as cK,fs as cL,pc as cM,xu as cN,Jr as cO,Qr as cP,to as cQ,As as cR,et as cS,Us as cT,eo as cU,ro as cV,oo as cW,ao as cX,io as cY,lo as cZ,co as c_,au as ca,Qb as cb,M1 as cc,P as cd,z as ce,ew as cf,bs as cg,xe as ch,kt as ci,We as cj,iu as ck,nw as cl,sw as cm,rw as cn,iw as co,Le as cp,uw as cq,An as cr,hw as cs,dw as ct,gw as cu,ar as cv,bw as cw,ww as cx,Kt as cy,lu as cz,B$ as d,xl as d$,d as d0,xt as d1,b as d2,fl as d3,fo as d4,hl as d5,ho as d6,po as d7,go as d8,dl as d9,Go as dA,bl as dB,zo as dC,Vo as dD,jo as dE,Ho as dF,Jo as dG,Qo as dH,ta as dI,ea as dJ,Sp as dK,ra as dL,Ms as dM,ia as dN,ca as dO,ua as dP,la as dQ,ga as dR,pa as dS,yl as dT,El as dU,ya as dV,ln as dW,$a as dX,Ea as dY,vl as dZ,xa as d_,Ds as da,yo as db,$o as dc,ko as dd,xo as de,nn as df,vo as dg,Xe as dh,Ow as di,Dc as dj,To as dk,pl as dl,Io as dm,qd as dn,Ao as dp,Do as dq,Mo as dr,vp as ds,Co as dt,Pt as du,qw as dv,zw as dw,Wo as dx,ml as dy,gl as dz,R as e,bu as e$,ka as e0,Sa as e1,kp as e2,W as e3,Ta as e4,Ia as e5,_a as e6,Aa as e7,Na as e8,Ma as e9,hi as eA,ui as eB,xy as eC,yi as eD,pi as eE,bi as eF,wi as eG,gi as eH,_l as eI,Si as eJ,Wi as eK,Ni as eL,mi as eM,Mi as eN,Fi as eO,Fs as eP,pn as eQ,Pi as eR,Oi as eS,Li as eT,Nl as eU,Qi as eV,N0 as eW,F0 as eX,ze as eY,lc as eZ,Hw as e_,Oa as ea,Pa as eb,La as ec,Wa as ed,Ua as ee,qa as ef,Ga as eg,Uo as eh,Xa as ei,ti as ej,Za as ek,Ya as el,Qa as em,Il as en,Ja as eo,Tl as ep,ei as eq,ni as er,si as es,ii as et,ci as eu,Gy as ev,zy as ew,di as ex,fi as ey,li as ez,kf as f,ky as f$,Ut as f0,wu as f1,Ay as f2,Hr as f3,Iy as f4,Yt as f5,Wr as f6,$h as f7,zh as f8,Dh as f9,jt as fA,Vu as fB,Wt as fC,qt as fD,on as fE,Gr as fF,yn as fG,uu as fH,oc as fI,_h as fJ,Eo as fK,ql as fL,Fn as fM,A$ as fN,tl as fO,_e as fP,Cy as fQ,Tp as fR,xp as fS,nh as fT,ts as fU,no as fV,so as fW,vc as fX,zf as fY,by as fZ,Ey as f_,Ph as fa,Kh as fb,Z1 as fc,V1 as fd,hc as fe,Ww as ff,rt as fg,Cs as fh,sh as fi,Ys as fj,dy as fk,zl as fl,Yu as fm,Ku as fn,qr as fo,Oe as fp,lh as fq,Fe as fr,N$ as fs,Nc as ft,Qu as fu,Lr as fv,Gu as fw,yh as fx,Yy as fy,xn as fz,F as g,Ra as g$,Oy as g0,Ly as g1,Wy as g2,Uy as g3,qy as g4,mo as g5,bo as g6,wo as g7,Fa as g8,Ha as g9,jy as gA,Hy as gB,Xy as gC,Zy as gD,Xo as gE,Zo as gF,sn as gG,Ss as gH,Yo as gI,Qn as gJ,es as gK,ns as gL,na as gM,Tu as gN,I$ as gO,sa as gP,oa as gQ,ha as gR,fa as gS,da as gT,ma as gU,ba as gV,wa as gW,va as gX,Da as gY,Ba as gZ,pu as g_,el as ga,Ny as gb,aa as gc,Dy as gd,Tc as ge,cn as gf,So as gg,Sc as gh,_o as gi,Fo as gj,No as gk,Bo as gl,Ro as gm,Po as gn,Oo as go,Lo as gp,Gf as gq,qo as gr,a$ as gs,c$ as gt,u$ as gu,i$ as gv,l$ as gw,Ko as gx,Ky as gy,Vy as gz,vf as h,ph as h$,gu as h0,Ca as h1,mu as h2,ct as h3,za as h4,Ka as h5,Va as h6,ja as h7,Ui as h8,Py as h9,hr as hA,fr as hB,Ns as hC,Is as hD,Zr as hE,wl as hF,$l as hG,kl as hH,dr as hI,Cu as hJ,Sl as hK,pr as hL,as as hM,it as hN,Vn as hO,vn as hP,Al as hQ,Ke as hR,cp as hS,py as hT,Bl as hU,Nt as hV,bh as hW,hh as hX,mh as hY,wh as hZ,gh as h_,ri as ha,cu as hb,ai as hc,$i as hd,Ei as he,ki as hf,xi as hg,vi as hh,f$ as hi,Ti as hj,Ii as hk,vy as hl,yy as hm,_i as hn,Ai as ho,Di as hp,oi as hq,Bi as hr,Ri as hs,Ci as ht,T$ as hu,S$ as hv,qi as hw,Ty as hx,ur as hy,lr as hz,Tf as i,r$ as i$,Th as i0,Ih as i1,gy as i2,uc as i3,ss as i4,Ge as i5,En as i6,ig as i7,cg as i8,M$ as i9,By as iA,_t as iB,Ry as iC,My as iD,D$ as iE,d$ as iF,p$ as iG,g$ as iH,m$ as iI,b$ as iJ,w$ as iK,y$ as iL,$$ as iM,E$ as iN,k$ as iO,x$ as iP,v$ as iQ,Ul as iR,wn as iS,Ts as iT,sl as iU,e$ as iV,Jy as iW,Qy as iX,t$ as iY,s$ as iZ,n$ as i_,ry as ia,Eh as ib,vh as ic,Sh as id,ow as ie,R1 as ig,xh as ih,Ah as ii,Ru as ij,oh as ik,jm as il,kh as im,Fl as io,Ml as ip,Kl as iq,ug as ir,lg as is,qc as it,nl as iu,ol as iv,rl as iw,Dn as ix,Mn as iy,Fy as iz,_f as j,Ue as j0,Df as k,Mf as l,Bf as m,Cf as n,Of as o,Wf as p,qf as q,Ic as r,Jf as s,ke as t,od as u,Bn as v,ld as w,fd as x,pd as y,_c as z};
