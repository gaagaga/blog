(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function rd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wa={exports:{}},tl={},$a={exports:{}},P={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xn=Symbol.for("react.element"),od=Symbol.for("react.portal"),ad=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),dd=Symbol.for("react.provider"),ud=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),pd=Symbol.for("react.suspense"),fd=Symbol.for("react.memo"),hd=Symbol.for("react.lazy"),_o=Symbol.iterator;function gd(e){return e===null||typeof e!="object"?null:(e=_o&&e[_o]||e["@@iterator"],typeof e=="function"?e:null)}var Qa={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ka=Object.assign,Xa={};function rn(e,t,n){this.props=e,this.context=t,this.refs=Xa,this.updater=n||Qa}rn.prototype.isReactComponent={};rn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};rn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ya(){}Ya.prototype=rn.prototype;function zr(e,t,n){this.props=e,this.context=t,this.refs=Xa,this.updater=n||Qa}var Fr=zr.prototype=new Ya;Fr.constructor=zr;Ka(Fr,rn.prototype);Fr.isPureReactComponent=!0;var Ao=Array.isArray,Ja=Object.prototype.hasOwnProperty,Br={current:null},Za={key:!0,ref:!0,__self:!0,__source:!0};function qa(e,t,n){var l,r={},o=null,a=null;if(t!=null)for(l in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)Ja.call(t,l)&&!Za.hasOwnProperty(l)&&(r[l]=t[l]);var i=arguments.length-2;if(i===1)r.children=n;else if(1<i){for(var c=Array(i),u=0;u<i;u++)c[u]=arguments[u+2];r.children=c}if(e&&e.defaultProps)for(l in i=e.defaultProps,i)r[l]===void 0&&(r[l]=i[l]);return{$$typeof:Xn,type:e,key:o,ref:a,props:r,_owner:Br.current}}function xd(e,t){return{$$typeof:Xn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Gr(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xn}function bd(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Mo=/\/+/g;function wl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?bd(""+e.key):t.toString(36)}function vs(e,t,n,l,r){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Xn:case od:a=!0}}if(a)return a=e,r=r(a),e=l===""?"."+wl(a,0):l,Ao(r)?(n="",e!=null&&(n=e.replace(Mo,"$&/")+"/"),vs(r,t,n,"",function(u){return u})):r!=null&&(Gr(r)&&(r=xd(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Mo,"$&/")+"/")+e)),t.push(r)),1;if(a=0,l=l===""?".":l+":",Ao(e))for(var i=0;i<e.length;i++){o=e[i];var c=l+wl(o,i);a+=vs(o,t,n,c,r)}else if(c=gd(e),typeof c=="function")for(e=c.call(e),i=0;!(o=e.next()).done;)o=o.value,c=l+wl(o,i++),a+=vs(o,t,n,c,r);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ns(e,t,n){if(e==null)return e;var l=[],r=0;return vs(e,l,"","",function(o){return t.call(n,o,r++)}),l}function vd(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ae={current:null},ws={transition:null},wd={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:ws,ReactCurrentOwner:Br};function ei(){throw Error("act(...) is not supported in production builds of React.")}P.Children={map:ns,forEach:function(e,t,n){ns(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ns(e,function(){t++}),t},toArray:function(e){return ns(e,function(t){return t})||[]},only:function(e){if(!Gr(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};P.Component=rn;P.Fragment=ad;P.Profiler=cd;P.PureComponent=zr;P.StrictMode=id;P.Suspense=pd;P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=wd;P.act=ei;P.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var l=Ka({},e.props),r=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=Br.current),t.key!==void 0&&(r=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(c in t)Ja.call(t,c)&&!Za.hasOwnProperty(c)&&(l[c]=t[c]===void 0&&i!==void 0?i[c]:t[c])}var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){i=Array(c);for(var u=0;u<c;u++)i[u]=arguments[u+2];l.children=i}return{$$typeof:Xn,type:e.type,key:r,ref:o,props:l,_owner:a}};P.createContext=function(e){return e={$$typeof:ud,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:dd,_context:e},e.Consumer=e};P.createElement=qa;P.createFactory=function(e){var t=qa.bind(null,e);return t.type=e,t};P.createRef=function(){return{current:null}};P.forwardRef=function(e){return{$$typeof:md,render:e}};P.isValidElement=Gr;P.lazy=function(e){return{$$typeof:hd,_payload:{_status:-1,_result:e},_init:vd}};P.memo=function(e,t){return{$$typeof:fd,type:e,compare:t===void 0?null:t}};P.startTransition=function(e){var t=ws.transition;ws.transition={};try{e()}finally{ws.transition=t}};P.unstable_act=ei;P.useCallback=function(e,t){return ae.current.useCallback(e,t)};P.useContext=function(e){return ae.current.useContext(e)};P.useDebugValue=function(){};P.useDeferredValue=function(e){return ae.current.useDeferredValue(e)};P.useEffect=function(e,t){return ae.current.useEffect(e,t)};P.useId=function(){return ae.current.useId()};P.useImperativeHandle=function(e,t,n){return ae.current.useImperativeHandle(e,t,n)};P.useInsertionEffect=function(e,t){return ae.current.useInsertionEffect(e,t)};P.useLayoutEffect=function(e,t){return ae.current.useLayoutEffect(e,t)};P.useMemo=function(e,t){return ae.current.useMemo(e,t)};P.useReducer=function(e,t,n){return ae.current.useReducer(e,t,n)};P.useRef=function(e){return ae.current.useRef(e)};P.useState=function(e){return ae.current.useState(e)};P.useSyncExternalStore=function(e,t,n){return ae.current.useSyncExternalStore(e,t,n)};P.useTransition=function(){return ae.current.useTransition()};P.version="18.3.1";$a.exports=P;var Ue=$a.exports;const yd=rd(Ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd=Ue,Nd=Symbol.for("react.element"),Sd=Symbol.for("react.fragment"),kd=Object.prototype.hasOwnProperty,Ed=jd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Cd={key:!0,ref:!0,__self:!0,__source:!0};function ti(e,t,n){var l,r={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(l in t)kd.call(t,l)&&!Cd.hasOwnProperty(l)&&(r[l]=t[l]);if(e&&e.defaultProps)for(l in t=e.defaultProps,t)r[l]===void 0&&(r[l]=t[l]);return{$$typeof:Nd,type:e,key:o,ref:a,props:r,_owner:Ed.current}}tl.Fragment=Sd;tl.jsx=ti;tl.jsxs=ti;Wa.exports=tl;var s=Wa.exports,$l={},ni={exports:{}},be={},si={exports:{}},li={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,D){var O=S.length;S.push(D);e:for(;0<O;){var V=O-1>>>1,X=S[V];if(0<r(X,D))S[V]=D,S[O]=X,O=V;else break e}}function n(S){return S.length===0?null:S[0]}function l(S){if(S.length===0)return null;var D=S[0],O=S.pop();if(O!==D){S[0]=O;e:for(var V=0,X=S.length,es=X>>>1;V<es;){var xt=2*(V+1)-1,vl=S[xt],bt=xt+1,ts=S[bt];if(0>r(vl,O))bt<X&&0>r(ts,vl)?(S[V]=ts,S[bt]=O,V=bt):(S[V]=vl,S[xt]=O,V=xt);else if(bt<X&&0>r(ts,O))S[V]=ts,S[bt]=O,V=bt;else break e}}return D}function r(S,D){var O=S.sortIndex-D.sortIndex;return O!==0?O:S.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,i=a.now();e.unstable_now=function(){return a.now()-i}}var c=[],u=[],g=1,h=null,f=3,v=!1,w=!1,y=!1,M=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(S){for(var D=n(u);D!==null;){if(D.callback===null)l(u);else if(D.startTime<=S)l(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function x(S){if(y=!1,p(S),!w)if(n(c)!==null)w=!0,xl(N);else{var D=n(u);D!==null&&bl(x,D.startTime-S)}}function N(S,D){w=!1,y&&(y=!1,m(C),C=-1),v=!0;var O=f;try{for(p(D),h=n(c);h!==null&&(!(h.expirationTime>D)||S&&!Ee());){var V=h.callback;if(typeof V=="function"){h.callback=null,f=h.priorityLevel;var X=V(h.expirationTime<=D);D=e.unstable_now(),typeof X=="function"?h.callback=X:h===n(c)&&l(c),p(D)}else l(c);h=n(c)}if(h!==null)var es=!0;else{var xt=n(u);xt!==null&&bl(x,xt.startTime-D),es=!1}return es}finally{h=null,f=O,v=!1}}var k=!1,E=null,C=-1,H=5,L=-1;function Ee(){return!(e.unstable_now()-L<H)}function cn(){if(E!==null){var S=e.unstable_now();L=S;var D=!0;try{D=E(!0,S)}finally{D?dn():(k=!1,E=null)}}else k=!1}var dn;if(typeof d=="function")dn=function(){d(cn)};else if(typeof MessageChannel<"u"){var Io=new MessageChannel,ld=Io.port2;Io.port1.onmessage=cn,dn=function(){ld.postMessage(null)}}else dn=function(){M(cn,0)};function xl(S){E=S,k||(k=!0,dn())}function bl(S,D){C=M(function(){S(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||v||(w=!0,xl(N))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(S){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var O=f;f=D;try{return S()}finally{f=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,D){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var O=f;f=S;try{return D()}finally{f=O}},e.unstable_scheduleCallback=function(S,D,O){var V=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?V+O:V):O=V,S){case 1:var X=-1;break;case 2:X=250;break;case 5:X=1073741823;break;case 4:X=1e4;break;default:X=5e3}return X=O+X,S={id:g++,callback:D,priorityLevel:S,startTime:O,expirationTime:X,sortIndex:-1},O>V?(S.sortIndex=O,t(u,S),n(c)===null&&S===n(u)&&(y?(m(C),C=-1):y=!0,bl(x,O-V))):(S.sortIndex=X,t(c,S),w||v||(w=!0,xl(N))),S},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(S){var D=f;return function(){var O=f;f=D;try{return S.apply(this,arguments)}finally{f=O}}}})(li);si.exports=li;var Dd=si.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Od=Ue,xe=Dd;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ri=new Set,Tn={};function Lt(e,t){Zt(e,t),Zt(e+"Capture",t)}function Zt(e,t){for(Tn[e]=t,e=0;e<t.length;e++)ri.add(t[e])}var $e=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ql=Object.prototype.hasOwnProperty,Pd=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uo={},zo={};function Ld(e){return Ql.call(zo,e)?!0:Ql.call(Uo,e)?!1:Pd.test(e)?zo[e]=!0:(Uo[e]=!0,!1)}function Td(e,t,n,l){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return l?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rd(e,t,n,l){if(t===null||typeof t>"u"||Td(e,t,n,l))return!0;if(l)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ie(e,t,n,l,r,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=l,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ee[e]=new ie(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ee[t]=new ie(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ee[e]=new ie(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ee[e]=new ie(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ee[e]=new ie(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ee[e]=new ie(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ee[e]=new ie(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ee[e]=new ie(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ee[e]=new ie(e,5,!1,e.toLowerCase(),null,!1,!1)});var Hr=/[\-:]([a-z])/g;function Vr(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Hr,Vr);ee[t]=new ie(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Hr,Vr);ee[t]=new ie(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Hr,Vr);ee[t]=new ie(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ee[e]=new ie(e,1,!1,e.toLowerCase(),null,!1,!1)});ee.xlinkHref=new ie("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ee[e]=new ie(e,1,!1,e.toLowerCase(),null,!0,!0)});function Wr(e,t,n,l){var r=ee.hasOwnProperty(t)?ee[t]:null;(r!==null?r.type!==0:l||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rd(t,n,r,l)&&(n=null),l||r===null?Ld(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):r.mustUseProperty?e[r.propertyName]=n===null?r.type===3?!1:"":n:(t=r.attributeName,l=r.attributeNamespace,n===null?e.removeAttribute(t):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,l?e.setAttributeNS(l,t,n):e.setAttribute(t,n))))}var Ye=Od.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ss=Symbol.for("react.element"),It=Symbol.for("react.portal"),_t=Symbol.for("react.fragment"),$r=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),oi=Symbol.for("react.provider"),ai=Symbol.for("react.context"),Qr=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),Yl=Symbol.for("react.suspense_list"),Kr=Symbol.for("react.memo"),Ze=Symbol.for("react.lazy"),ii=Symbol.for("react.offscreen"),Fo=Symbol.iterator;function un(e){return e===null||typeof e!="object"?null:(e=Fo&&e[Fo]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,yl;function vn(e){if(yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);yl=t&&t[1]||""}return`
`+yl+e}var jl=!1;function Nl(e,t){if(!e||jl)return"";jl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var l=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){l=u}e.call(t.prototype)}else{try{throw Error()}catch(u){l=u}e()}}catch(u){if(u&&l&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=l.stack.split(`
`),a=r.length-1,i=o.length-1;1<=a&&0<=i&&r[a]!==o[i];)i--;for(;1<=a&&0<=i;a--,i--)if(r[a]!==o[i]){if(a!==1||i!==1)do if(a--,i--,0>i||r[a]!==o[i]){var c=`
`+r[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=i);break}}}finally{jl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?vn(e):""}function Id(e){switch(e.tag){case 5:return vn(e.type);case 16:return vn("Lazy");case 13:return vn("Suspense");case 19:return vn("SuspenseList");case 0:case 2:case 15:return e=Nl(e.type,!1),e;case 11:return e=Nl(e.type.render,!1),e;case 1:return e=Nl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _t:return"Fragment";case It:return"Portal";case Kl:return"Profiler";case $r:return"StrictMode";case Xl:return"Suspense";case Yl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ai:return(e.displayName||"Context")+".Consumer";case oi:return(e._context.displayName||"Context")+".Provider";case Qr:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Kr:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case Ze:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function _d(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===$r?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ci(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ad(e){var t=ci(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),l=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){l=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return l},setValue:function(a){l=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ls(e){e._valueTracker||(e._valueTracker=Ad(e))}function di(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=ci(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Zl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Bo(e,t){var n=t.defaultValue==null?"":t.defaultValue,l=t.checked!=null?t.checked:t.defaultChecked;n=mt(t.value!=null?t.value:n),e._wrapperState={initialChecked:l,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ui(e,t){t=t.checked,t!=null&&Wr(e,"checked",t,!1)}function ql(e,t){ui(e,t);var n=mt(t.value),l=t.type;if(n!=null)l==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(l==="submit"||l==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?er(e,t.type,n):t.hasOwnProperty("defaultValue")&&er(e,t.type,mt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Go(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var l=t.type;if(!(l!=="submit"&&l!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function er(e,t,n){(t!=="number"||Ls(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wn=Array.isArray;function $t(e,t,n,l){if(e=e.options,t){t={};for(var r=0;r<n.length;r++)t["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=t.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+mt(n),t=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function tr(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ho(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(wn(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mt(n)}}function mi(e,t){var n=mt(t.value),l=mt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),l!=null&&(e.defaultValue=""+l)}function Vo(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function nr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var rs,fi=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,l,r){MSApp.execUnsafeLocalFunction(function(){return e(t,n,l,r)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(rs=rs||document.createElement("div"),rs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=rs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Rn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Nn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Md=["Webkit","ms","Moz","O"];Object.keys(Nn).forEach(function(e){Md.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Nn[t]=Nn[e]})});function hi(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Nn.hasOwnProperty(e)&&Nn[e]?(""+t).trim():t+"px"}function gi(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var l=n.indexOf("--")===0,r=hi(n,t[n],l);n==="float"&&(n="cssFloat"),l?e.setProperty(n,r):e[n]=r}}var Ud=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function sr(e,t){if(t){if(Ud[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function lr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rr=null;function Xr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var or=null,Qt=null,Kt=null;function Wo(e){if(e=Zn(e)){if(typeof or!="function")throw Error(b(280));var t=e.stateNode;t&&(t=ol(t),or(e.stateNode,e.type,t))}}function xi(e){Qt?Kt?Kt.push(e):Kt=[e]:Qt=e}function bi(){if(Qt){var e=Qt,t=Kt;if(Kt=Qt=null,Wo(e),t)for(e=0;e<t.length;e++)Wo(t[e])}}function vi(e,t){return e(t)}function wi(){}var Sl=!1;function yi(e,t,n){if(Sl)return e(t,n);Sl=!0;try{return vi(e,t,n)}finally{Sl=!1,(Qt!==null||Kt!==null)&&(wi(),bi())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var l=ol(n);if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var ar=!1;if($e)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ar=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ar=!1}function zd(e,t,n,l,r,o,a,i,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(g){this.onError(g)}}var Sn=!1,Ts=null,Rs=!1,ir=null,Fd={onError:function(e){Sn=!0,Ts=e}};function Bd(e,t,n,l,r,o,a,i,c){Sn=!1,Ts=null,zd.apply(Fd,arguments)}function Gd(e,t,n,l,r,o,a,i,c){if(Bd.apply(this,arguments),Sn){if(Sn){var u=Ts;Sn=!1,Ts=null}else throw Error(b(198));Rs||(Rs=!0,ir=u)}}function Tt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ji(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $o(e){if(Tt(e)!==e)throw Error(b(188))}function Hd(e){var t=e.alternate;if(!t){if(t=Tt(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,l=t;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return $o(r),e;if(o===l)return $o(r),t;o=o.sibling}throw Error(b(188))}if(n.return!==l.return)n=r,l=o;else{for(var a=!1,i=r.child;i;){if(i===n){a=!0,n=r,l=o;break}if(i===l){a=!0,l=r,n=o;break}i=i.sibling}if(!a){for(i=o.child;i;){if(i===n){a=!0,n=o,l=r;break}if(i===l){a=!0,l=o,n=r;break}i=i.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==l)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Ni(e){return e=Hd(e),e!==null?Si(e):null}function Si(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Si(e);if(t!==null)return t;e=e.sibling}return null}var ki=xe.unstable_scheduleCallback,Qo=xe.unstable_cancelCallback,Vd=xe.unstable_shouldYield,Wd=xe.unstable_requestPaint,W=xe.unstable_now,$d=xe.unstable_getCurrentPriorityLevel,Yr=xe.unstable_ImmediatePriority,Ei=xe.unstable_UserBlockingPriority,Is=xe.unstable_NormalPriority,Qd=xe.unstable_LowPriority,Ci=xe.unstable_IdlePriority,nl=null,ze=null;function Kd(e){if(ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(nl,e,void 0,(e.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:Jd,Xd=Math.log,Yd=Math.LN2;function Jd(e){return e>>>=0,e===0?32:31-(Xd(e)/Yd|0)|0}var os=64,as=4194304;function yn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _s(e,t){var n=e.pendingLanes;if(n===0)return 0;var l=0,r=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var i=a&~r;i!==0?l=yn(i):(o&=a,o!==0&&(l=yn(o)))}else a=n&~r,a!==0?l=yn(a):o!==0&&(l=yn(o));if(l===0)return 0;if(t!==0&&t!==l&&!(t&r)&&(r=l&-l,o=t&-t,r>=o||r===16&&(o&4194240)!==0))return t;if(l&4&&(l|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=l;0<t;)n=31-Te(t),r=1<<n,l|=e[n],t&=~r;return l}function Zd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qd(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-Te(o),i=1<<a,c=r[a];c===-1?(!(i&n)||i&l)&&(r[a]=Zd(i,t)):c<=t&&(e.expiredLanes|=i),o&=~i}}function cr(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Di(){var e=os;return os<<=1,!(os&4194240)&&(os=64),e}function kl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Yn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Te(t),e[t]=n}function eu(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var l=e.eventTimes;for(e=e.expirationTimes;0<n;){var r=31-Te(n),o=1<<r;t[r]=0,l[r]=-1,e[r]=-1,n&=~o}}function Jr(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-Te(n),r=1<<l;r&t|e[l]&t&&(e[l]|=t),n&=~r}}var R=0;function Oi(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pi,Zr,Li,Ti,Ri,dr=!1,is=[],lt=null,rt=null,ot=null,_n=new Map,An=new Map,et=[],tu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ko(e,t){switch(e){case"focusin":case"focusout":lt=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":ot=null;break;case"pointerover":case"pointerout":_n.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":An.delete(t.pointerId)}}function pn(e,t,n,l,r,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:o,targetContainers:[r]},t!==null&&(t=Zn(t),t!==null&&Zr(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function nu(e,t,n,l,r){switch(t){case"focusin":return lt=pn(lt,e,t,n,l,r),!0;case"dragenter":return rt=pn(rt,e,t,n,l,r),!0;case"mouseover":return ot=pn(ot,e,t,n,l,r),!0;case"pointerover":var o=r.pointerId;return _n.set(o,pn(_n.get(o)||null,e,t,n,l,r)),!0;case"gotpointercapture":return o=r.pointerId,An.set(o,pn(An.get(o)||null,e,t,n,l,r)),!0}return!1}function Ii(e){var t=yt(e.target);if(t!==null){var n=Tt(t);if(n!==null){if(t=n.tag,t===13){if(t=ji(n),t!==null){e.blockedOn=t,Ri(e.priority,function(){Li(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ur(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);rr=l,n.target.dispatchEvent(l),rr=null}else return t=Zn(n),t!==null&&Zr(t),e.blockedOn=n,!1;t.shift()}return!0}function Xo(e,t,n){ys(e)&&n.delete(t)}function su(){dr=!1,lt!==null&&ys(lt)&&(lt=null),rt!==null&&ys(rt)&&(rt=null),ot!==null&&ys(ot)&&(ot=null),_n.forEach(Xo),An.forEach(Xo)}function fn(e,t){e.blockedOn===t&&(e.blockedOn=null,dr||(dr=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,su)))}function Mn(e){function t(r){return fn(r,e)}if(0<is.length){fn(is[0],e);for(var n=1;n<is.length;n++){var l=is[n];l.blockedOn===e&&(l.blockedOn=null)}}for(lt!==null&&fn(lt,e),rt!==null&&fn(rt,e),ot!==null&&fn(ot,e),_n.forEach(t),An.forEach(t),n=0;n<et.length;n++)l=et[n],l.blockedOn===e&&(l.blockedOn=null);for(;0<et.length&&(n=et[0],n.blockedOn===null);)Ii(n),n.blockedOn===null&&et.shift()}var Xt=Ye.ReactCurrentBatchConfig,As=!0;function lu(e,t,n,l){var r=R,o=Xt.transition;Xt.transition=null;try{R=1,qr(e,t,n,l)}finally{R=r,Xt.transition=o}}function ru(e,t,n,l){var r=R,o=Xt.transition;Xt.transition=null;try{R=4,qr(e,t,n,l)}finally{R=r,Xt.transition=o}}function qr(e,t,n,l){if(As){var r=ur(e,t,n,l);if(r===null)_l(e,t,l,Ms,n),Ko(e,l);else if(nu(r,e,t,n,l))l.stopPropagation();else if(Ko(e,l),t&4&&-1<tu.indexOf(e)){for(;r!==null;){var o=Zn(r);if(o!==null&&Pi(o),o=ur(e,t,n,l),o===null&&_l(e,t,l,Ms,n),o===r)break;r=o}r!==null&&l.stopPropagation()}else _l(e,t,l,null,n)}}var Ms=null;function ur(e,t,n,l){if(Ms=null,e=Xr(l),e=yt(e),e!==null)if(t=Tt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ji(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ms=e,null}function _i(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($d()){case Yr:return 1;case Ei:return 4;case Is:case Qd:return 16;case Ci:return 536870912;default:return 16}default:return 16}}var nt=null,eo=null,js=null;function Ai(){if(js)return js;var e,t=eo,n=t.length,l,r="value"in nt?nt.value:nt.textContent,o=r.length;for(e=0;e<n&&t[e]===r[e];e++);var a=n-e;for(l=1;l<=a&&t[n-l]===r[o-l];l++);return js=r.slice(e,1<l?1-l:void 0)}function Ns(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cs(){return!0}function Yo(){return!1}function ve(e){function t(n,l,r,o,a){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var i in e)e.hasOwnProperty(i)&&(n=e[i],this[i]=n?n(o):o[i]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?cs:Yo,this.isPropagationStopped=Yo,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=cs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=cs)},persist:function(){},isPersistent:cs}),t}var on={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},to=ve(on),Jn=B({},on,{view:0,detail:0}),ou=ve(Jn),El,Cl,hn,sl=B({},Jn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:no,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hn&&(hn&&e.type==="mousemove"?(El=e.screenX-hn.screenX,Cl=e.screenY-hn.screenY):Cl=El=0,hn=e),El)},movementY:function(e){return"movementY"in e?e.movementY:Cl}}),Jo=ve(sl),au=B({},sl,{dataTransfer:0}),iu=ve(au),cu=B({},Jn,{relatedTarget:0}),Dl=ve(cu),du=B({},on,{animationName:0,elapsedTime:0,pseudoElement:0}),uu=ve(du),mu=B({},on,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pu=ve(mu),fu=B({},on,{data:0}),Zo=ve(fu),hu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},gu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=xu[e])?!!t[e]:!1}function no(){return bu}var vu=B({},Jn,{key:function(e){if(e.key){var t=hu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?gu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:no,charCode:function(e){return e.type==="keypress"?Ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),wu=ve(vu),yu=B({},sl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qo=ve(yu),ju=B({},Jn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:no}),Nu=ve(ju),Su=B({},on,{propertyName:0,elapsedTime:0,pseudoElement:0}),ku=ve(Su),Eu=B({},sl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Cu=ve(Eu),Du=[9,13,27,32],so=$e&&"CompositionEvent"in window,kn=null;$e&&"documentMode"in document&&(kn=document.documentMode);var Ou=$e&&"TextEvent"in window&&!kn,Mi=$e&&(!so||kn&&8<kn&&11>=kn),ea=" ",ta=!1;function Ui(e,t){switch(e){case"keyup":return Du.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var At=!1;function Pu(e,t){switch(e){case"compositionend":return zi(t);case"keypress":return t.which!==32?null:(ta=!0,ea);case"textInput":return e=t.data,e===ea&&ta?null:e;default:return null}}function Lu(e,t){if(At)return e==="compositionend"||!so&&Ui(e,t)?(e=Ai(),js=eo=nt=null,At=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mi&&t.locale!=="ko"?null:t.data;default:return null}}var Tu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Tu[e.type]:t==="textarea"}function Fi(e,t,n,l){xi(l),t=Us(t,"onChange"),0<t.length&&(n=new to("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var En=null,Un=null;function Ru(e){Ji(e,0)}function ll(e){var t=zt(e);if(di(t))return e}function Iu(e,t){if(e==="change")return t}var Bi=!1;if($e){var Ol;if($e){var Pl="oninput"in document;if(!Pl){var sa=document.createElement("div");sa.setAttribute("oninput","return;"),Pl=typeof sa.oninput=="function"}Ol=Pl}else Ol=!1;Bi=Ol&&(!document.documentMode||9<document.documentMode)}function la(){En&&(En.detachEvent("onpropertychange",Gi),Un=En=null)}function Gi(e){if(e.propertyName==="value"&&ll(Un)){var t=[];Fi(t,Un,e,Xr(e)),yi(Ru,t)}}function _u(e,t,n){e==="focusin"?(la(),En=t,Un=n,En.attachEvent("onpropertychange",Gi)):e==="focusout"&&la()}function Au(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ll(Un)}function Mu(e,t){if(e==="click")return ll(t)}function Uu(e,t){if(e==="input"||e==="change")return ll(t)}function zu(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:zu;function zn(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!Ql.call(t,r)||!Ie(e[r],t[r]))return!1}return!0}function ra(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oa(e,t){var n=ra(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ra(n)}}function Hi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Hi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vi(){for(var e=window,t=Ls();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ls(e.document)}return t}function lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fu(e){var t=Vi(),n=e.focusedElem,l=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Hi(n.ownerDocument.documentElement,n)){if(l!==null&&lo(n)){if(t=l.start,e=l.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var r=n.textContent.length,o=Math.min(l.start,r);l=l.end===void 0?o:Math.min(l.end,r),!e.extend&&o>l&&(r=l,l=o,o=r),r=oa(n,o);var a=oa(n,l);r&&a&&(e.rangeCount!==1||e.anchorNode!==r.node||e.anchorOffset!==r.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(r.node,r.offset),e.removeAllRanges(),o>l?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Bu=$e&&"documentMode"in document&&11>=document.documentMode,Mt=null,mr=null,Cn=null,pr=!1;function aa(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pr||Mt==null||Mt!==Ls(l)||(l=Mt,"selectionStart"in l&&lo(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Cn&&zn(Cn,l)||(Cn=l,l=Us(mr,"onSelect"),0<l.length&&(t=new to("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=Mt)))}function ds(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ut={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionend:ds("Transition","TransitionEnd")},Ll={},Wi={};$e&&(Wi=document.createElement("div").style,"AnimationEvent"in window||(delete Ut.animationend.animation,delete Ut.animationiteration.animation,delete Ut.animationstart.animation),"TransitionEvent"in window||delete Ut.transitionend.transition);function rl(e){if(Ll[e])return Ll[e];if(!Ut[e])return e;var t=Ut[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wi)return Ll[e]=t[n];return e}var $i=rl("animationend"),Qi=rl("animationiteration"),Ki=rl("animationstart"),Xi=rl("transitionend"),Yi=new Map,ia="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ft(e,t){Yi.set(e,t),Lt(t,[e])}for(var Tl=0;Tl<ia.length;Tl++){var Rl=ia[Tl],Gu=Rl.toLowerCase(),Hu=Rl[0].toUpperCase()+Rl.slice(1);ft(Gu,"on"+Hu)}ft($i,"onAnimationEnd");ft(Qi,"onAnimationIteration");ft(Ki,"onAnimationStart");ft("dblclick","onDoubleClick");ft("focusin","onFocus");ft("focusout","onBlur");ft(Xi,"onTransitionEnd");Zt("onMouseEnter",["mouseout","mouseover"]);Zt("onMouseLeave",["mouseout","mouseover"]);Zt("onPointerEnter",["pointerout","pointerover"]);Zt("onPointerLeave",["pointerout","pointerover"]);Lt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Lt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Lt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Lt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Lt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var jn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vu=new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));function ca(e,t,n){var l=e.type||"unknown-event";e.currentTarget=n,Gd(l,t,void 0,e),e.currentTarget=null}function Ji(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var o=void 0;if(t)for(var a=l.length-1;0<=a;a--){var i=l[a],c=i.instance,u=i.currentTarget;if(i=i.listener,c!==o&&r.isPropagationStopped())break e;ca(r,i,u),o=c}else for(a=0;a<l.length;a++){if(i=l[a],c=i.instance,u=i.currentTarget,i=i.listener,c!==o&&r.isPropagationStopped())break e;ca(r,i,u),o=c}}}if(Rs)throw e=ir,Rs=!1,ir=null,e}function _(e,t){var n=t[br];n===void 0&&(n=t[br]=new Set);var l=e+"__bubble";n.has(l)||(Zi(t,e,2,!1),n.add(l))}function Il(e,t,n){var l=0;t&&(l|=4),Zi(n,e,l,t)}var us="_reactListening"+Math.random().toString(36).slice(2);function Fn(e){if(!e[us]){e[us]=!0,ri.forEach(function(n){n!=="selectionchange"&&(Vu.has(n)||Il(n,!1,e),Il(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[us]||(t[us]=!0,Il("selectionchange",!1,t))}}function Zi(e,t,n,l){switch(_i(t)){case 1:var r=lu;break;case 4:r=ru;break;default:r=qr}n=r.bind(null,t,n,e),r=void 0,!ar||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(t,n,{capture:!0,passive:r}):e.addEventListener(t,n,!0):r!==void 0?e.addEventListener(t,n,{passive:r}):e.addEventListener(t,n,!1)}function _l(e,t,n,l,r){var o=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var a=l.tag;if(a===3||a===4){var i=l.stateNode.containerInfo;if(i===r||i.nodeType===8&&i.parentNode===r)break;if(a===4)for(a=l.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;i!==null;){if(a=yt(i),a===null)return;if(c=a.tag,c===5||c===6){l=o=a;continue e}i=i.parentNode}}l=l.return}yi(function(){var u=o,g=Xr(n),h=[];e:{var f=Yi.get(e);if(f!==void 0){var v=to,w=e;switch(e){case"keypress":if(Ns(n)===0)break e;case"keydown":case"keyup":v=wu;break;case"focusin":w="focus",v=Dl;break;case"focusout":w="blur",v=Dl;break;case"beforeblur":case"afterblur":v=Dl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Jo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=iu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Nu;break;case $i:case Qi:case Ki:v=uu;break;case Xi:v=ku;break;case"scroll":v=ou;break;case"wheel":v=Cu;break;case"copy":case"cut":case"paste":v=pu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=qo}var y=(t&4)!==0,M=!y&&e==="scroll",m=y?f!==null?f+"Capture":null:f;y=[];for(var d=u,p;d!==null;){p=d;var x=p.stateNode;if(p.tag===5&&x!==null&&(p=x,m!==null&&(x=In(d,m),x!=null&&y.push(Bn(d,x,p)))),M)break;d=d.return}0<y.length&&(f=new v(f,w,null,n,g),h.push({event:f,listeners:y}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==rr&&(w=n.relatedTarget||n.fromElement)&&(yt(w)||w[Qe]))break e;if((v||f)&&(f=g.window===g?g:(f=g.ownerDocument)?f.defaultView||f.parentWindow:window,v?(w=n.relatedTarget||n.toElement,v=u,w=w?yt(w):null,w!==null&&(M=Tt(w),w!==M||w.tag!==5&&w.tag!==6)&&(w=null)):(v=null,w=u),v!==w)){if(y=Jo,x="onMouseLeave",m="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(y=qo,x="onPointerLeave",m="onPointerEnter",d="pointer"),M=v==null?f:zt(v),p=w==null?f:zt(w),f=new y(x,d+"leave",v,n,g),f.target=M,f.relatedTarget=p,x=null,yt(g)===u&&(y=new y(m,d+"enter",w,n,g),y.target=p,y.relatedTarget=M,x=y),M=x,v&&w)t:{for(y=v,m=w,d=0,p=y;p;p=Rt(p))d++;for(p=0,x=m;x;x=Rt(x))p++;for(;0<d-p;)y=Rt(y),d--;for(;0<p-d;)m=Rt(m),p--;for(;d--;){if(y===m||m!==null&&y===m.alternate)break t;y=Rt(y),m=Rt(m)}y=null}else y=null;v!==null&&da(h,f,v,y,!1),w!==null&&M!==null&&da(h,M,w,y,!0)}}e:{if(f=u?zt(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var N=Iu;else if(na(f))if(Bi)N=Uu;else{N=Au;var k=_u}else(v=f.nodeName)&&v.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(N=Mu);if(N&&(N=N(e,u))){Fi(h,N,n,g);break e}k&&k(e,f,u),e==="focusout"&&(k=f._wrapperState)&&k.controlled&&f.type==="number"&&er(f,"number",f.value)}switch(k=u?zt(u):window,e){case"focusin":(na(k)||k.contentEditable==="true")&&(Mt=k,mr=u,Cn=null);break;case"focusout":Cn=mr=Mt=null;break;case"mousedown":pr=!0;break;case"contextmenu":case"mouseup":case"dragend":pr=!1,aa(h,n,g);break;case"selectionchange":if(Bu)break;case"keydown":case"keyup":aa(h,n,g)}var E;if(so)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else At?Ui(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Mi&&n.locale!=="ko"&&(At||C!=="onCompositionStart"?C==="onCompositionEnd"&&At&&(E=Ai()):(nt=g,eo="value"in nt?nt.value:nt.textContent,At=!0)),k=Us(u,C),0<k.length&&(C=new Zo(C,e,null,n,g),h.push({event:C,listeners:k}),E?C.data=E:(E=zi(n),E!==null&&(C.data=E)))),(E=Ou?Pu(e,n):Lu(e,n))&&(u=Us(u,"onBeforeInput"),0<u.length&&(g=new Zo("onBeforeInput","beforeinput",null,n,g),h.push({event:g,listeners:u}),g.data=E))}Ji(h,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Us(e,t){for(var n=t+"Capture",l=[];e!==null;){var r=e,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=In(e,n),o!=null&&l.unshift(Bn(e,o,r)),o=In(e,t),o!=null&&l.push(Bn(e,o,r))),e=e.return}return l}function Rt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function da(e,t,n,l,r){for(var o=t._reactName,a=[];n!==null&&n!==l;){var i=n,c=i.alternate,u=i.stateNode;if(c!==null&&c===l)break;i.tag===5&&u!==null&&(i=u,r?(c=In(n,o),c!=null&&a.unshift(Bn(n,c,i))):r||(c=In(n,o),c!=null&&a.push(Bn(n,c,i)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Wu=/\r\n?/g,$u=/\u0000|\uFFFD/g;function ua(e){return(typeof e=="string"?e:""+e).replace(Wu,`
`).replace($u,"")}function ms(e,t,n){if(t=ua(t),ua(e)!==t&&n)throw Error(b(425))}function zs(){}var fr=null,hr=null;function gr(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xr=typeof setTimeout=="function"?setTimeout:void 0,Qu=typeof clearTimeout=="function"?clearTimeout:void 0,ma=typeof Promise=="function"?Promise:void 0,Ku=typeof queueMicrotask=="function"?queueMicrotask:typeof ma<"u"?function(e){return ma.resolve(null).then(e).catch(Xu)}:xr;function Xu(e){setTimeout(function(){throw e})}function Al(e,t){var n=t,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(l===0){e.removeChild(r),Mn(t);return}l--}else n!=="$"&&n!=="$?"&&n!=="$!"||l++;n=r}while(n);Mn(t)}function at(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function pa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var an=Math.random().toString(36).slice(2),Me="__reactFiber$"+an,Gn="__reactProps$"+an,Qe="__reactContainer$"+an,br="__reactEvents$"+an,Yu="__reactListeners$"+an,Ju="__reactHandles$"+an;function yt(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Qe]||n[Me]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=pa(e);e!==null;){if(n=e[Me])return n;e=pa(e)}return t}e=n,n=e.parentNode}return null}function Zn(e){return e=e[Me]||e[Qe],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function zt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function ol(e){return e[Gn]||null}var vr=[],Ft=-1;function ht(e){return{current:e}}function A(e){0>Ft||(e.current=vr[Ft],vr[Ft]=null,Ft--)}function I(e,t){Ft++,vr[Ft]=e.current,e.current=t}var pt={},le=ht(pt),ue=ht(!1),Et=pt;function qt(e,t){var n=e.type.contextTypes;if(!n)return pt;var l=e.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===t)return l.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=t[o];return l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=r),r}function me(e){return e=e.childContextTypes,e!=null}function Fs(){A(ue),A(le)}function fa(e,t,n){if(le.current!==pt)throw Error(b(168));I(le,t),I(ue,n)}function qi(e,t,n){var l=e.stateNode;if(t=t.childContextTypes,typeof l.getChildContext!="function")return n;l=l.getChildContext();for(var r in l)if(!(r in t))throw Error(b(108,_d(e)||"Unknown",r));return B({},n,l)}function Bs(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||pt,Et=le.current,I(le,e),I(ue,ue.current),!0}function ha(e,t,n){var l=e.stateNode;if(!l)throw Error(b(169));n?(e=qi(e,t,Et),l.__reactInternalMemoizedMergedChildContext=e,A(ue),A(le),I(le,e)):A(ue),I(ue,n)}var Ge=null,al=!1,Ml=!1;function ec(e){Ge===null?Ge=[e]:Ge.push(e)}function Zu(e){al=!0,ec(e)}function gt(){if(!Ml&&Ge!==null){Ml=!0;var e=0,t=R;try{var n=Ge;for(R=1;e<n.length;e++){var l=n[e];do l=l(!0);while(l!==null)}Ge=null,al=!1}catch(r){throw Ge!==null&&(Ge=Ge.slice(e+1)),ki(Yr,gt),r}finally{R=t,Ml=!1}}return null}var Bt=[],Gt=0,Gs=null,Hs=0,we=[],ye=0,Ct=null,He=1,Ve="";function vt(e,t){Bt[Gt++]=Hs,Bt[Gt++]=Gs,Gs=e,Hs=t}function tc(e,t,n){we[ye++]=He,we[ye++]=Ve,we[ye++]=Ct,Ct=e;var l=He;e=Ve;var r=32-Te(l)-1;l&=~(1<<r),n+=1;var o=32-Te(t)+r;if(30<o){var a=r-r%5;o=(l&(1<<a)-1).toString(32),l>>=a,r-=a,He=1<<32-Te(t)+r|n<<r|l,Ve=o+e}else He=1<<o|n<<r|l,Ve=e}function ro(e){e.return!==null&&(vt(e,1),tc(e,1,0))}function oo(e){for(;e===Gs;)Gs=Bt[--Gt],Bt[Gt]=null,Hs=Bt[--Gt],Bt[Gt]=null;for(;e===Ct;)Ct=we[--ye],we[ye]=null,Ve=we[--ye],we[ye]=null,He=we[--ye],we[ye]=null}var ge=null,he=null,U=!1,Pe=null;function nc(e,t){var n=je(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ga(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ge=e,he=at(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ge=e,he=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ct!==null?{id:He,overflow:Ve}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=je(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ge=e,he=null,!0):!1;default:return!1}}function wr(e){return(e.mode&1)!==0&&(e.flags&128)===0}function yr(e){if(U){var t=he;if(t){var n=t;if(!ga(e,t)){if(wr(e))throw Error(b(418));t=at(n.nextSibling);var l=ge;t&&ga(e,t)?nc(l,n):(e.flags=e.flags&-4097|2,U=!1,ge=e)}}else{if(wr(e))throw Error(b(418));e.flags=e.flags&-4097|2,U=!1,ge=e}}}function xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ge=e}function ps(e){if(e!==ge)return!1;if(!U)return xa(e),U=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!gr(e.type,e.memoizedProps)),t&&(t=he)){if(wr(e))throw sc(),Error(b(418));for(;t;)nc(e,t),t=at(t.nextSibling)}if(xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){he=at(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}he=null}}else he=ge?at(e.stateNode.nextSibling):null;return!0}function sc(){for(var e=he;e;)e=at(e.nextSibling)}function en(){he=ge=null,U=!1}function ao(e){Pe===null?Pe=[e]:Pe.push(e)}var qu=Ye.ReactCurrentBatchConfig;function gn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var l=n.stateNode}if(!l)throw Error(b(147,e));var r=l,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var i=r.refs;a===null?delete i[o]:i[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function fs(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ba(e){var t=e._init;return t(e._payload)}function lc(e){function t(m,d){if(e){var p=m.deletions;p===null?(m.deletions=[d],m.flags|=16):p.push(d)}}function n(m,d){if(!e)return null;for(;d!==null;)t(m,d),d=d.sibling;return null}function l(m,d){for(m=new Map;d!==null;)d.key!==null?m.set(d.key,d):m.set(d.index,d),d=d.sibling;return m}function r(m,d){return m=ut(m,d),m.index=0,m.sibling=null,m}function o(m,d,p){return m.index=p,e?(p=m.alternate,p!==null?(p=p.index,p<d?(m.flags|=2,d):p):(m.flags|=2,d)):(m.flags|=1048576,d)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function i(m,d,p,x){return d===null||d.tag!==6?(d=Vl(p,m.mode,x),d.return=m,d):(d=r(d,p),d.return=m,d)}function c(m,d,p,x){var N=p.type;return N===_t?g(m,d,p.props.children,x,p.key):d!==null&&(d.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ze&&ba(N)===d.type)?(x=r(d,p.props),x.ref=gn(m,d,p),x.return=m,x):(x=Ps(p.type,p.key,p.props,null,m.mode,x),x.ref=gn(m,d,p),x.return=m,x)}function u(m,d,p,x){return d===null||d.tag!==4||d.stateNode.containerInfo!==p.containerInfo||d.stateNode.implementation!==p.implementation?(d=Wl(p,m.mode,x),d.return=m,d):(d=r(d,p.children||[]),d.return=m,d)}function g(m,d,p,x,N){return d===null||d.tag!==7?(d=kt(p,m.mode,x,N),d.return=m,d):(d=r(d,p),d.return=m,d)}function h(m,d,p){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Vl(""+d,m.mode,p),d.return=m,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case ss:return p=Ps(d.type,d.key,d.props,null,m.mode,p),p.ref=gn(m,null,d),p.return=m,p;case It:return d=Wl(d,m.mode,p),d.return=m,d;case Ze:var x=d._init;return h(m,x(d._payload),p)}if(wn(d)||un(d))return d=kt(d,m.mode,p,null),d.return=m,d;fs(m,d)}return null}function f(m,d,p,x){var N=d!==null?d.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return N!==null?null:i(m,d,""+p,x);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ss:return p.key===N?c(m,d,p,x):null;case It:return p.key===N?u(m,d,p,x):null;case Ze:return N=p._init,f(m,d,N(p._payload),x)}if(wn(p)||un(p))return N!==null?null:g(m,d,p,x,null);fs(m,p)}return null}function v(m,d,p,x,N){if(typeof x=="string"&&x!==""||typeof x=="number")return m=m.get(p)||null,i(d,m,""+x,N);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ss:return m=m.get(x.key===null?p:x.key)||null,c(d,m,x,N);case It:return m=m.get(x.key===null?p:x.key)||null,u(d,m,x,N);case Ze:var k=x._init;return v(m,d,p,k(x._payload),N)}if(wn(x)||un(x))return m=m.get(p)||null,g(d,m,x,N,null);fs(d,x)}return null}function w(m,d,p,x){for(var N=null,k=null,E=d,C=d=0,H=null;E!==null&&C<p.length;C++){E.index>C?(H=E,E=null):H=E.sibling;var L=f(m,E,p[C],x);if(L===null){E===null&&(E=H);break}e&&E&&L.alternate===null&&t(m,E),d=o(L,d,C),k===null?N=L:k.sibling=L,k=L,E=H}if(C===p.length)return n(m,E),U&&vt(m,C),N;if(E===null){for(;C<p.length;C++)E=h(m,p[C],x),E!==null&&(d=o(E,d,C),k===null?N=E:k.sibling=E,k=E);return U&&vt(m,C),N}for(E=l(m,E);C<p.length;C++)H=v(E,m,C,p[C],x),H!==null&&(e&&H.alternate!==null&&E.delete(H.key===null?C:H.key),d=o(H,d,C),k===null?N=H:k.sibling=H,k=H);return e&&E.forEach(function(Ee){return t(m,Ee)}),U&&vt(m,C),N}function y(m,d,p,x){var N=un(p);if(typeof N!="function")throw Error(b(150));if(p=N.call(p),p==null)throw Error(b(151));for(var k=N=null,E=d,C=d=0,H=null,L=p.next();E!==null&&!L.done;C++,L=p.next()){E.index>C?(H=E,E=null):H=E.sibling;var Ee=f(m,E,L.value,x);if(Ee===null){E===null&&(E=H);break}e&&E&&Ee.alternate===null&&t(m,E),d=o(Ee,d,C),k===null?N=Ee:k.sibling=Ee,k=Ee,E=H}if(L.done)return n(m,E),U&&vt(m,C),N;if(E===null){for(;!L.done;C++,L=p.next())L=h(m,L.value,x),L!==null&&(d=o(L,d,C),k===null?N=L:k.sibling=L,k=L);return U&&vt(m,C),N}for(E=l(m,E);!L.done;C++,L=p.next())L=v(E,m,C,L.value,x),L!==null&&(e&&L.alternate!==null&&E.delete(L.key===null?C:L.key),d=o(L,d,C),k===null?N=L:k.sibling=L,k=L);return e&&E.forEach(function(cn){return t(m,cn)}),U&&vt(m,C),N}function M(m,d,p,x){if(typeof p=="object"&&p!==null&&p.type===_t&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case ss:e:{for(var N=p.key,k=d;k!==null;){if(k.key===N){if(N=p.type,N===_t){if(k.tag===7){n(m,k.sibling),d=r(k,p.props.children),d.return=m,m=d;break e}}else if(k.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ze&&ba(N)===k.type){n(m,k.sibling),d=r(k,p.props),d.ref=gn(m,k,p),d.return=m,m=d;break e}n(m,k);break}else t(m,k);k=k.sibling}p.type===_t?(d=kt(p.props.children,m.mode,x,p.key),d.return=m,m=d):(x=Ps(p.type,p.key,p.props,null,m.mode,x),x.ref=gn(m,d,p),x.return=m,m=x)}return a(m);case It:e:{for(k=p.key;d!==null;){if(d.key===k)if(d.tag===4&&d.stateNode.containerInfo===p.containerInfo&&d.stateNode.implementation===p.implementation){n(m,d.sibling),d=r(d,p.children||[]),d.return=m,m=d;break e}else{n(m,d);break}else t(m,d);d=d.sibling}d=Wl(p,m.mode,x),d.return=m,m=d}return a(m);case Ze:return k=p._init,M(m,d,k(p._payload),x)}if(wn(p))return w(m,d,p,x);if(un(p))return y(m,d,p,x);fs(m,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,d!==null&&d.tag===6?(n(m,d.sibling),d=r(d,p),d.return=m,m=d):(n(m,d),d=Vl(p,m.mode,x),d.return=m,m=d),a(m)):n(m,d)}return M}var tn=lc(!0),rc=lc(!1),Vs=ht(null),Ws=null,Ht=null,io=null;function co(){io=Ht=Ws=null}function uo(e){var t=Vs.current;A(Vs),e._currentValue=t}function jr(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Yt(e,t){Ws=e,io=Ht=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(de=!0),e.firstContext=null)}function Se(e){var t=e._currentValue;if(io!==e)if(e={context:e,memoizedValue:t,next:null},Ht===null){if(Ws===null)throw Error(b(308));Ht=e,Ws.dependencies={lanes:0,firstContext:e}}else Ht=Ht.next=e;return t}var jt=null;function mo(e){jt===null?jt=[e]:jt.push(e)}function oc(e,t,n,l){var r=t.interleaved;return r===null?(n.next=n,mo(t)):(n.next=r.next,r.next=n),t.interleaved=n,Ke(e,l)}function Ke(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qe=!1;function po(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ac(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function We(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function it(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,T&2){var r=l.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),l.pending=t,Ke(e,n)}return r=l.interleaved,r===null?(t.next=t,mo(l)):(t.next=r.next,r.next=t),l.interleaved=t,Ke(e,n)}function Ss(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Jr(e,n)}}function va(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=t:o=o.next=t}else r=o=t;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:l.shared,effects:l.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $s(e,t,n,l){var r=e.updateQueue;qe=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,i=r.shared.pending;if(i!==null){r.shared.pending=null;var c=i,u=c.next;c.next=null,a===null?o=u:a.next=u,a=c;var g=e.alternate;g!==null&&(g=g.updateQueue,i=g.lastBaseUpdate,i!==a&&(i===null?g.firstBaseUpdate=u:i.next=u,g.lastBaseUpdate=c))}if(o!==null){var h=r.baseState;a=0,g=u=c=null,i=o;do{var f=i.lane,v=i.eventTime;if((l&f)===f){g!==null&&(g=g.next={eventTime:v,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var w=e,y=i;switch(f=t,v=n,y.tag){case 1:if(w=y.payload,typeof w=="function"){h=w.call(v,h,f);break e}h=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=y.payload,f=typeof w=="function"?w.call(v,h,f):w,f==null)break e;h=B({},h,f);break e;case 2:qe=!0}}i.callback!==null&&i.lane!==0&&(e.flags|=64,f=r.effects,f===null?r.effects=[i]:f.push(i))}else v={eventTime:v,lane:f,tag:i.tag,payload:i.payload,callback:i.callback,next:null},g===null?(u=g=v,c=h):g=g.next=v,a|=f;if(i=i.next,i===null){if(i=r.shared.pending,i===null)break;f=i,i=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(g===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=g,t=r.shared.interleaved,t!==null){r=t;do a|=r.lane,r=r.next;while(r!==t)}else o===null&&(r.shared.lanes=0);Ot|=a,e.lanes=a,e.memoizedState=h}}function wa(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var l=e[t],r=l.callback;if(r!==null){if(l.callback=null,l=n,typeof r!="function")throw Error(b(191,r));r.call(l)}}}var qn={},Fe=ht(qn),Hn=ht(qn),Vn=ht(qn);function Nt(e){if(e===qn)throw Error(b(174));return e}function fo(e,t){switch(I(Vn,t),I(Hn,e),I(Fe,qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:nr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=nr(t,e)}A(Fe),I(Fe,t)}function nn(){A(Fe),A(Hn),A(Vn)}function ic(e){Nt(Vn.current);var t=Nt(Fe.current),n=nr(t,e.type);t!==n&&(I(Hn,e),I(Fe,n))}function ho(e){Hn.current===e&&(A(Fe),A(Hn))}var z=ht(0);function Qs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ul=[];function go(){for(var e=0;e<Ul.length;e++)Ul[e]._workInProgressVersionPrimary=null;Ul.length=0}var ks=Ye.ReactCurrentDispatcher,zl=Ye.ReactCurrentBatchConfig,Dt=0,F=null,Q=null,Y=null,Ks=!1,Dn=!1,Wn=0,em=0;function te(){throw Error(b(321))}function xo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function bo(e,t,n,l,r,o){if(Dt=o,F=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ks.current=e===null||e.memoizedState===null?lm:rm,e=n(l,r),Dn){o=0;do{if(Dn=!1,Wn=0,25<=o)throw Error(b(301));o+=1,Y=Q=null,t.updateQueue=null,ks.current=om,e=n(l,r)}while(Dn)}if(ks.current=Xs,t=Q!==null&&Q.next!==null,Dt=0,Y=Q=F=null,Ks=!1,t)throw Error(b(300));return e}function vo(){var e=Wn!==0;return Wn=0,e}function Ae(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Y===null?F.memoizedState=Y=e:Y=Y.next=e,Y}function ke(){if(Q===null){var e=F.alternate;e=e!==null?e.memoizedState:null}else e=Q.next;var t=Y===null?F.memoizedState:Y.next;if(t!==null)Y=t,Q=e;else{if(e===null)throw Error(b(310));Q=e,e={memoizedState:Q.memoizedState,baseState:Q.baseState,baseQueue:Q.baseQueue,queue:Q.queue,next:null},Y===null?F.memoizedState=Y=e:Y=Y.next=e}return Y}function $n(e,t){return typeof t=="function"?t(e):t}function Fl(e){var t=ke(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var l=Q,r=l.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}l.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,l=l.baseState;var i=a=null,c=null,u=o;do{var g=u.lane;if((Dt&g)===g)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),l=u.hasEagerState?u.eagerState:e(l,u.action);else{var h={lane:g,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(i=c=h,a=l):c=c.next=h,F.lanes|=g,Ot|=g}u=u.next}while(u!==null&&u!==o);c===null?a=l:c.next=i,Ie(l,t.memoizedState)||(de=!0),t.memoizedState=l,t.baseState=a,t.baseQueue=c,n.lastRenderedState=l}if(e=n.interleaved,e!==null){r=e;do o=r.lane,F.lanes|=o,Ot|=o,r=r.next;while(r!==e)}else r===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bl(e){var t=ke(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,o=t.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=e(o,a.action),a=a.next;while(a!==r);Ie(o,t.memoizedState)||(de=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,l]}function cc(){}function dc(e,t){var n=F,l=ke(),r=t(),o=!Ie(l.memoizedState,r);if(o&&(l.memoizedState=r,de=!0),l=l.queue,wo(pc.bind(null,n,l,e),[e]),l.getSnapshot!==t||o||Y!==null&&Y.memoizedState.tag&1){if(n.flags|=2048,Qn(9,mc.bind(null,n,l,r,t),void 0,null),J===null)throw Error(b(349));Dt&30||uc(n,t,r)}return r}function uc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function mc(e,t,n,l){t.value=n,t.getSnapshot=l,fc(t)&&hc(e)}function pc(e,t,n){return n(function(){fc(t)&&hc(e)})}function fc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function hc(e){var t=Ke(e,1);t!==null&&Re(t,e,1,-1)}function ya(e){var t=Ae();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$n,lastRenderedState:e},t.queue=e,e=e.dispatch=sm.bind(null,F,e),[t.memoizedState,e]}function Qn(e,t,n,l){return e={tag:e,create:t,destroy:n,deps:l,next:null},t=F.updateQueue,t===null?(t={lastEffect:null,stores:null},F.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e)),e}function gc(){return ke().memoizedState}function Es(e,t,n,l){var r=Ae();F.flags|=e,r.memoizedState=Qn(1|t,n,void 0,l===void 0?null:l)}function il(e,t,n,l){var r=ke();l=l===void 0?null:l;var o=void 0;if(Q!==null){var a=Q.memoizedState;if(o=a.destroy,l!==null&&xo(l,a.deps)){r.memoizedState=Qn(t,n,o,l);return}}F.flags|=e,r.memoizedState=Qn(1|t,n,o,l)}function ja(e,t){return Es(8390656,8,e,t)}function wo(e,t){return il(2048,8,e,t)}function xc(e,t){return il(4,2,e,t)}function bc(e,t){return il(4,4,e,t)}function vc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wc(e,t,n){return n=n!=null?n.concat([e]):null,il(4,4,vc.bind(null,t,e),n)}function yo(){}function yc(e,t){var n=ke();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&xo(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function jc(e,t){var n=ke();t=t===void 0?null:t;var l=n.memoizedState;return l!==null&&t!==null&&xo(t,l[1])?l[0]:(e=e(),n.memoizedState=[e,t],e)}function Nc(e,t,n){return Dt&21?(Ie(n,t)||(n=Di(),F.lanes|=n,Ot|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,de=!0),e.memoizedState=n)}function tm(e,t){var n=R;R=n!==0&&4>n?n:4,e(!0);var l=zl.transition;zl.transition={};try{e(!1),t()}finally{R=n,zl.transition=l}}function Sc(){return ke().memoizedState}function nm(e,t,n){var l=dt(e);if(n={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null},kc(e))Ec(t,n);else if(n=oc(e,t,n,l),n!==null){var r=oe();Re(n,e,l,r),Cc(n,t,l)}}function sm(e,t,n){var l=dt(e),r={lane:l,action:n,hasEagerState:!1,eagerState:null,next:null};if(kc(e))Ec(t,r);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,i=o(a,n);if(r.hasEagerState=!0,r.eagerState=i,Ie(i,a)){var c=t.interleaved;c===null?(r.next=r,mo(t)):(r.next=c.next,c.next=r),t.interleaved=r;return}}catch{}finally{}n=oc(e,t,r,l),n!==null&&(r=oe(),Re(n,e,l,r),Cc(n,t,l))}}function kc(e){var t=e.alternate;return e===F||t!==null&&t===F}function Ec(e,t){Dn=Ks=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Cc(e,t,n){if(n&4194240){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,Jr(e,n)}}var Xs={readContext:Se,useCallback:te,useContext:te,useEffect:te,useImperativeHandle:te,useInsertionEffect:te,useLayoutEffect:te,useMemo:te,useReducer:te,useRef:te,useState:te,useDebugValue:te,useDeferredValue:te,useTransition:te,useMutableSource:te,useSyncExternalStore:te,useId:te,unstable_isNewReconciler:!1},lm={readContext:Se,useCallback:function(e,t){return Ae().memoizedState=[e,t===void 0?null:t],e},useContext:Se,useEffect:ja,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Es(4194308,4,vc.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){return Es(4,2,e,t)},useMemo:function(e,t){var n=Ae();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var l=Ae();return t=n!==void 0?n(t):t,l.memoizedState=l.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},l.queue=e,e=e.dispatch=nm.bind(null,F,e),[l.memoizedState,e]},useRef:function(e){var t=Ae();return e={current:e},t.memoizedState=e},useState:ya,useDebugValue:yo,useDeferredValue:function(e){return Ae().memoizedState=e},useTransition:function(){var e=ya(!1),t=e[0];return e=tm.bind(null,e[1]),Ae().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var l=F,r=Ae();if(U){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),J===null)throw Error(b(349));Dt&30||uc(l,t,n)}r.memoizedState=n;var o={value:n,getSnapshot:t};return r.queue=o,ja(pc.bind(null,l,o,e),[e]),l.flags|=2048,Qn(9,mc.bind(null,l,o,n,t),void 0,null),n},useId:function(){var e=Ae(),t=J.identifierPrefix;if(U){var n=Ve,l=He;n=(l&~(1<<32-Te(l)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=em++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},rm={readContext:Se,useCallback:yc,useContext:Se,useEffect:wo,useImperativeHandle:wc,useInsertionEffect:xc,useLayoutEffect:bc,useMemo:jc,useReducer:Fl,useRef:gc,useState:function(){return Fl($n)},useDebugValue:yo,useDeferredValue:function(e){var t=ke();return Nc(t,Q.memoizedState,e)},useTransition:function(){var e=Fl($n)[0],t=ke().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Sc,unstable_isNewReconciler:!1},om={readContext:Se,useCallback:yc,useContext:Se,useEffect:wo,useImperativeHandle:wc,useInsertionEffect:xc,useLayoutEffect:bc,useMemo:jc,useReducer:Bl,useRef:gc,useState:function(){return Bl($n)},useDebugValue:yo,useDeferredValue:function(e){var t=ke();return Q===null?t.memoizedState=e:Nc(t,Q.memoizedState,e)},useTransition:function(){var e=Bl($n)[0],t=ke().memoizedState;return[e,t]},useMutableSource:cc,useSyncExternalStore:dc,useId:Sc,unstable_isNewReconciler:!1};function De(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Nr(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var cl={isMounted:function(e){return(e=e._reactInternals)?Tt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var l=oe(),r=dt(e),o=We(l,r);o.payload=t,n!=null&&(o.callback=n),t=it(e,o,r),t!==null&&(Re(t,e,r,l),Ss(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=oe(),r=dt(e),o=We(l,r);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=it(e,o,r),t!==null&&(Re(t,e,r,l),Ss(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=oe(),l=dt(e),r=We(n,l);r.tag=2,t!=null&&(r.callback=t),t=it(e,r,l),t!==null&&(Re(t,e,l,n),Ss(t,e,l))}};function Na(e,t,n,l,r,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,o,a):t.prototype&&t.prototype.isPureReactComponent?!zn(n,l)||!zn(r,o):!0}function Dc(e,t,n){var l=!1,r=pt,o=t.contextType;return typeof o=="object"&&o!==null?o=Se(o):(r=me(t)?Et:le.current,l=t.contextTypes,o=(l=l!=null)?qt(e,r):pt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=cl,e.stateNode=t,t._reactInternals=e,l&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=r,e.__reactInternalMemoizedMaskedChildContext=o),t}function Sa(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&cl.enqueueReplaceState(t,t.state,null)}function Sr(e,t,n,l){var r=e.stateNode;r.props=n,r.state=e.memoizedState,r.refs={},po(e);var o=t.contextType;typeof o=="object"&&o!==null?r.context=Se(o):(o=me(t)?Et:le.current,r.context=qt(e,o)),r.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Nr(e,t,o,n),r.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(t=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),t!==r.state&&cl.enqueueReplaceState(r,r.state,null),$s(e,n,r,l),r.state=e.memoizedState),typeof r.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var n="",l=t;do n+=Id(l),l=l.return;while(l);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:r,digest:null}}function Gl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function kr(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var am=typeof WeakMap=="function"?WeakMap:Map;function Oc(e,t,n){n=We(-1,n),n.tag=3,n.payload={element:null};var l=t.value;return n.callback=function(){Js||(Js=!0,_r=l),kr(e,t)},n}function Pc(e,t,n){n=We(-1,n),n.tag=3;var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var r=t.value;n.payload=function(){return l(r)},n.callback=function(){kr(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){kr(e,t),typeof l!="function"&&(ct===null?ct=new Set([this]):ct.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function ka(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new am;var r=new Set;l.set(t,r)}else r=l.get(t),r===void 0&&(r=new Set,l.set(t,r));r.has(n)||(r.add(n),e=ym.bind(null,e,t,n),t.then(e,e))}function Ea(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ca(e,t,n,l,r){return e.mode&1?(e.flags|=65536,e.lanes=r,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=We(-1,1),t.tag=2,it(n,t,1))),n.lanes|=1),e)}var im=Ye.ReactCurrentOwner,de=!1;function re(e,t,n,l){t.child=e===null?rc(t,null,n,l):tn(t,e.child,n,l)}function Da(e,t,n,l,r){n=n.render;var o=t.ref;return Yt(t,r),l=bo(e,t,n,l,o,r),n=vo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xe(e,t,r)):(U&&n&&ro(t),t.flags|=1,re(e,t,l,r),t.child)}function Oa(e,t,n,l,r){if(e===null){var o=n.type;return typeof o=="function"&&!Oo(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Lc(e,t,o,l,r)):(e=Ps(n.type,null,l,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:zn,n(a,l)&&e.ref===t.ref)return Xe(e,t,r)}return t.flags|=1,e=ut(o,l),e.ref=t.ref,e.return=t,t.child=e}function Lc(e,t,n,l,r){if(e!==null){var o=e.memoizedProps;if(zn(o,l)&&e.ref===t.ref)if(de=!1,t.pendingProps=l=o,(e.lanes&r)!==0)e.flags&131072&&(de=!0);else return t.lanes=e.lanes,Xe(e,t,r)}return Er(e,t,n,l,r)}function Tc(e,t,n){var l=t.pendingProps,r=l.children,o=e!==null?e.memoizedState:null;if(l.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},I(Wt,fe),fe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,I(Wt,fe),fe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=o!==null?o.baseLanes:n,I(Wt,fe),fe|=l}else o!==null?(l=o.baseLanes|n,t.memoizedState=null):l=n,I(Wt,fe),fe|=l;return re(e,t,r,n),t.child}function Rc(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Er(e,t,n,l,r){var o=me(n)?Et:le.current;return o=qt(t,o),Yt(t,r),n=bo(e,t,n,l,o,r),l=vo(),e!==null&&!de?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~r,Xe(e,t,r)):(U&&l&&ro(t),t.flags|=1,re(e,t,n,r),t.child)}function Pa(e,t,n,l,r){if(me(n)){var o=!0;Bs(t)}else o=!1;if(Yt(t,r),t.stateNode===null)Cs(e,t),Dc(t,n,l),Sr(t,n,l,r),l=!0;else if(e===null){var a=t.stateNode,i=t.memoizedProps;a.props=i;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Se(u):(u=me(n)?Et:le.current,u=qt(t,u));var g=n.getDerivedStateFromProps,h=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==l||c!==u)&&Sa(t,a,l,u),qe=!1;var f=t.memoizedState;a.state=f,$s(t,l,a,r),c=t.memoizedState,i!==l||f!==c||ue.current||qe?(typeof g=="function"&&(Nr(t,n,g,l),c=t.memoizedState),(i=qe||Na(t,n,i,l,f,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=c),a.props=l,a.state=c,a.context=u,l=i):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{a=t.stateNode,ac(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:De(t.type,i),a.props=u,h=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Se(c):(c=me(n)?Et:le.current,c=qt(t,c));var v=n.getDerivedStateFromProps;(g=typeof v=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(i!==h||f!==c)&&Sa(t,a,l,c),qe=!1,f=t.memoizedState,a.state=f,$s(t,l,a,r);var w=t.memoizedState;i!==h||f!==w||ue.current||qe?(typeof v=="function"&&(Nr(t,n,v,l),w=t.memoizedState),(u=qe||Na(t,n,u,l,f,w,c)||!1)?(g||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(l,w,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(l,w,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=w),a.props=l,a.state=w,a.context=c,l=u):(typeof a.componentDidUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||i===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return Cr(e,t,n,l,o,r)}function Cr(e,t,n,l,r,o){Rc(e,t);var a=(t.flags&128)!==0;if(!l&&!a)return r&&ha(t,n,!1),Xe(e,t,o);l=t.stateNode,im.current=t;var i=a&&typeof n.getDerivedStateFromError!="function"?null:l.render();return t.flags|=1,e!==null&&a?(t.child=tn(t,e.child,null,o),t.child=tn(t,null,i,o)):re(e,t,i,o),t.memoizedState=l.state,r&&ha(t,n,!0),t.child}function Ic(e){var t=e.stateNode;t.pendingContext?fa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fa(e,t.context,!1),fo(e,t.containerInfo)}function La(e,t,n,l,r){return en(),ao(r),t.flags|=256,re(e,t,n,l),t.child}var Dr={dehydrated:null,treeContext:null,retryLane:0};function Or(e){return{baseLanes:e,cachePool:null,transitions:null}}function _c(e,t,n){var l=t.pendingProps,r=z.current,o=!1,a=(t.flags&128)!==0,i;if((i=a)||(i=e!==null&&e.memoizedState===null?!1:(r&2)!==0),i?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(r|=1),I(z,r&1),e===null)return yr(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=l.children,e=l.fallback,o?(l=t.mode,o=t.child,a={mode:"hidden",children:a},!(l&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=ml(a,l,0,null),e=kt(e,l,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Or(n),t.memoizedState=Dr,e):jo(t,a));if(r=e.memoizedState,r!==null&&(i=r.dehydrated,i!==null))return cm(e,t,a,l,i,r,n);if(o){o=l.fallback,a=t.mode,r=e.child,i=r.sibling;var c={mode:"hidden",children:l.children};return!(a&1)&&t.child!==r?(l=t.child,l.childLanes=0,l.pendingProps=c,t.deletions=null):(l=ut(r,c),l.subtreeFlags=r.subtreeFlags&14680064),i!==null?o=ut(i,o):(o=kt(o,a,n,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,l=o,o=t.child,a=e.child.memoizedState,a=a===null?Or(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=Dr,l}return o=e.child,e=o.sibling,l=ut(o,{mode:"visible",children:l.children}),!(t.mode&1)&&(l.lanes=n),l.return=t,l.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=l,t.memoizedState=null,l}function jo(e,t){return t=ml({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function hs(e,t,n,l){return l!==null&&ao(l),tn(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cm(e,t,n,l,r,o,a){if(n)return t.flags&256?(t.flags&=-257,l=Gl(Error(b(422))),hs(e,t,a,l)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=l.fallback,r=t.mode,l=ml({mode:"visible",children:l.children},r,0,null),o=kt(o,r,a,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,t.mode&1&&tn(t,e.child,null,a),t.child.memoizedState=Or(a),t.memoizedState=Dr,o);if(!(t.mode&1))return hs(e,t,a,null);if(r.data==="$!"){if(l=r.nextSibling&&r.nextSibling.dataset,l)var i=l.dgst;return l=i,o=Error(b(419)),l=Gl(o,l,void 0),hs(e,t,a,l)}if(i=(a&e.childLanes)!==0,de||i){if(l=J,l!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(l.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,Ke(e,r),Re(l,e,r,-1))}return Do(),l=Gl(Error(b(421))),hs(e,t,a,l)}return r.data==="$?"?(t.flags|=128,t.child=e.child,t=jm.bind(null,e),r._reactRetry=t,null):(e=o.treeContext,he=at(r.nextSibling),ge=t,U=!0,Pe=null,e!==null&&(we[ye++]=He,we[ye++]=Ve,we[ye++]=Ct,He=e.id,Ve=e.overflow,Ct=t),t=jo(t,l.children),t.flags|=4096,t)}function Ta(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),jr(e.return,t,n)}function Hl(e,t,n,l,r){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=l,o.tail=n,o.tailMode=r)}function Ac(e,t,n){var l=t.pendingProps,r=l.revealOrder,o=l.tail;if(re(e,t,l.children,n),l=z.current,l&2)l=l&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ta(e,n,t);else if(e.tag===19)Ta(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}l&=1}if(I(z,l),!(t.mode&1))t.memoizedState=null;else switch(r){case"forwards":for(n=t.child,r=null;n!==null;)e=n.alternate,e!==null&&Qs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=t.child,t.child=null):(r=n.sibling,n.sibling=null),Hl(t,!1,r,n,o);break;case"backwards":for(n=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&Qs(e)===null){t.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}Hl(t,!0,n,null,o);break;case"together":Hl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Cs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Xe(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ot|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=ut(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ut(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dm(e,t,n){switch(t.tag){case 3:Ic(t),en();break;case 5:ic(t);break;case 1:me(t.type)&&Bs(t);break;case 4:fo(t,t.stateNode.containerInfo);break;case 10:var l=t.type._context,r=t.memoizedProps.value;I(Vs,l._currentValue),l._currentValue=r;break;case 13:if(l=t.memoizedState,l!==null)return l.dehydrated!==null?(I(z,z.current&1),t.flags|=128,null):n&t.child.childLanes?_c(e,t,n):(I(z,z.current&1),e=Xe(e,t,n),e!==null?e.sibling:null);I(z,z.current&1);break;case 19:if(l=(n&t.childLanes)!==0,e.flags&128){if(l)return Ac(e,t,n);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),I(z,z.current),l)break;return null;case 22:case 23:return t.lanes=0,Tc(e,t,n)}return Xe(e,t,n)}var Mc,Pr,Uc,zc;Mc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Pr=function(){};Uc=function(e,t,n,l){var r=e.memoizedProps;if(r!==l){e=t.stateNode,Nt(Fe.current);var o=null;switch(n){case"input":r=Zl(e,r),l=Zl(e,l),o=[];break;case"select":r=B({},r,{value:void 0}),l=B({},l,{value:void 0}),o=[];break;case"textarea":r=tr(e,r),l=tr(e,l),o=[];break;default:typeof r.onClick!="function"&&typeof l.onClick=="function"&&(e.onclick=zs)}sr(n,l);var a;n=null;for(u in r)if(!l.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var i=r[u];for(a in i)i.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in l){var c=l[u];if(i=r!=null?r[u]:void 0,l.hasOwnProperty(u)&&c!==i&&(c!=null||i!=null))if(u==="style")if(i){for(a in i)!i.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&i[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,i=i?i.__html:void 0,c!=null&&i!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tn.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&_("scroll",e),o||i===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};zc=function(e,t,n,l){n!==l&&(t.flags|=4)};function xn(e,t){if(!U)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&14680064,l|=r.flags&14680064,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function um(e,t,n){var l=t.pendingProps;switch(oo(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return me(t.type)&&Fs(),ne(t),null;case 3:return l=t.stateNode,nn(),A(ue),A(le),go(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(ps(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pe!==null&&(Ur(Pe),Pe=null))),Pr(e,t),ne(t),null;case 5:ho(t);var r=Nt(Vn.current);if(n=t.type,e!==null&&t.stateNode!=null)Uc(e,t,n,l,r),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!l){if(t.stateNode===null)throw Error(b(166));return ne(t),null}if(e=Nt(Fe.current),ps(t)){l=t.stateNode,n=t.type;var o=t.memoizedProps;switch(l[Me]=t,l[Gn]=o,e=(t.mode&1)!==0,n){case"dialog":_("cancel",l),_("close",l);break;case"iframe":case"object":case"embed":_("load",l);break;case"video":case"audio":for(r=0;r<jn.length;r++)_(jn[r],l);break;case"source":_("error",l);break;case"img":case"image":case"link":_("error",l),_("load",l);break;case"details":_("toggle",l);break;case"input":Bo(l,o),_("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!o.multiple},_("invalid",l);break;case"textarea":Ho(l,o),_("invalid",l)}sr(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var i=o[a];a==="children"?typeof i=="string"?l.textContent!==i&&(o.suppressHydrationWarning!==!0&&ms(l.textContent,i,e),r=["children",i]):typeof i=="number"&&l.textContent!==""+i&&(o.suppressHydrationWarning!==!0&&ms(l.textContent,i,e),r=["children",""+i]):Tn.hasOwnProperty(a)&&i!=null&&a==="onScroll"&&_("scroll",l)}switch(n){case"input":ls(l),Go(l,o,!0);break;case"textarea":ls(l),Vo(l);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(l.onclick=zs)}l=r,t.updateQueue=l,l!==null&&(t.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pi(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof l.is=="string"?e=a.createElement(n,{is:l.is}):(e=a.createElement(n),n==="select"&&(a=e,l.multiple?a.multiple=!0:l.size&&(a.size=l.size))):e=a.createElementNS(e,n),e[Me]=t,e[Gn]=l,Mc(e,t,!1,!1),t.stateNode=e;e:{switch(a=lr(n,l),n){case"dialog":_("cancel",e),_("close",e),r=l;break;case"iframe":case"object":case"embed":_("load",e),r=l;break;case"video":case"audio":for(r=0;r<jn.length;r++)_(jn[r],e);r=l;break;case"source":_("error",e),r=l;break;case"img":case"image":case"link":_("error",e),_("load",e),r=l;break;case"details":_("toggle",e),r=l;break;case"input":Bo(e,l),r=Zl(e,l),_("invalid",e);break;case"option":r=l;break;case"select":e._wrapperState={wasMultiple:!!l.multiple},r=B({},l,{value:void 0}),_("invalid",e);break;case"textarea":Ho(e,l),r=tr(e,l),_("invalid",e);break;default:r=l}sr(n,r),i=r;for(o in i)if(i.hasOwnProperty(o)){var c=i[o];o==="style"?gi(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&fi(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Rn(e,c):typeof c=="number"&&Rn(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Tn.hasOwnProperty(o)?c!=null&&o==="onScroll"&&_("scroll",e):c!=null&&Wr(e,o,c,a))}switch(n){case"input":ls(e),Go(e,l,!1);break;case"textarea":ls(e),Vo(e);break;case"option":l.value!=null&&e.setAttribute("value",""+mt(l.value));break;case"select":e.multiple=!!l.multiple,o=l.value,o!=null?$t(e,!!l.multiple,o,!1):l.defaultValue!=null&&$t(e,!!l.multiple,l.defaultValue,!0);break;default:typeof r.onClick=="function"&&(e.onclick=zs)}switch(n){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ne(t),null;case 6:if(e&&t.stateNode!=null)zc(e,t,e.memoizedProps,l);else{if(typeof l!="string"&&t.stateNode===null)throw Error(b(166));if(n=Nt(Vn.current),Nt(Fe.current),ps(t)){if(l=t.stateNode,n=t.memoizedProps,l[Me]=t,(o=l.nodeValue!==n)&&(e=ge,e!==null))switch(e.tag){case 3:ms(l.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ms(l.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else l=(n.nodeType===9?n:n.ownerDocument).createTextNode(l),l[Me]=t,t.stateNode=l}return ne(t),null;case 13:if(A(z),l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(U&&he!==null&&t.mode&1&&!(t.flags&128))sc(),en(),t.flags|=98560,o=!1;else if(o=ps(t),l!==null&&l.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Me]=t}else en(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),o=!1}else Pe!==null&&(Ur(Pe),Pe=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(l=l!==null,l!==(e!==null&&e.memoizedState!==null)&&l&&(t.child.flags|=8192,t.mode&1&&(e===null||z.current&1?K===0&&(K=3):Do())),t.updateQueue!==null&&(t.flags|=4),ne(t),null);case 4:return nn(),Pr(e,t),e===null&&Fn(t.stateNode.containerInfo),ne(t),null;case 10:return uo(t.type._context),ne(t),null;case 17:return me(t.type)&&Fs(),ne(t),null;case 19:if(A(z),o=t.memoizedState,o===null)return ne(t),null;if(l=(t.flags&128)!==0,a=o.rendering,a===null)if(l)xn(o,!1);else{if(K!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Qs(e),a!==null){for(t.flags|=128,xn(o,!1),l=a.updateQueue,l!==null&&(t.updateQueue=l,t.flags|=4),t.subtreeFlags=0,l=n,n=t.child;n!==null;)o=n,e=l,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return I(z,z.current&1|2),t.child}e=e.sibling}o.tail!==null&&W()>ln&&(t.flags|=128,l=!0,xn(o,!1),t.lanes=4194304)}else{if(!l)if(e=Qs(a),e!==null){if(t.flags|=128,l=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),xn(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!U)return ne(t),null}else 2*W()-o.renderingStartTime>ln&&n!==1073741824&&(t.flags|=128,l=!0,xn(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=W(),t.sibling=null,n=z.current,I(z,l?n&1|2:n&1),t):(ne(t),null);case 22:case 23:return Co(),l=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==l&&(t.flags|=8192),l&&t.mode&1?fe&1073741824&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function mm(e,t){switch(oo(t),t.tag){case 1:return me(t.type)&&Fs(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return nn(),A(ue),A(le),go(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ho(t),null;case 13:if(A(z),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));en()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return A(z),null;case 4:return nn(),null;case 10:return uo(t.type._context),null;case 22:case 23:return Co(),null;case 24:return null;default:return null}}var gs=!1,se=!1,pm=typeof WeakSet=="function"?WeakSet:Set,j=null;function Vt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(l){G(e,t,l)}else n.current=null}function Lr(e,t,n){try{n()}catch(l){G(e,t,l)}}var Ra=!1;function fm(e,t){if(fr=As,e=Vi(),lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,o=l.focusNode;l=l.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,i=-1,c=-1,u=0,g=0,h=e,f=null;t:for(;;){for(var v;h!==n||r!==0&&h.nodeType!==3||(i=a+r),h!==o||l!==0&&h.nodeType!==3||(c=a+l),h.nodeType===3&&(a+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break t;if(f===n&&++u===r&&(i=a),f===o&&++g===l&&(c=a),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=i===-1||c===-1?null:{start:i,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(hr={focusedElem:e,selectionRange:n},As=!1,j=t;j!==null;)if(t=j,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,j=e;else for(;j!==null;){t=j;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var y=w.memoizedProps,M=w.memoizedState,m=t.stateNode,d=m.getSnapshotBeforeUpdate(t.elementType===t.type?y:De(t.type,y),M);m.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(x){G(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,j=e;break}j=t.return}return w=Ra,Ra=!1,w}function On(e,t,n){var l=t.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var r=l=l.next;do{if((r.tag&e)===e){var o=r.destroy;r.destroy=void 0,o!==void 0&&Lr(t,n,o)}r=r.next}while(r!==l)}}function dl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var l=n.create;n.destroy=l()}n=n.next}while(n!==t)}}function Tr(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Fc(e){var t=e.alternate;t!==null&&(e.alternate=null,Fc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Me],delete t[Gn],delete t[br],delete t[Yu],delete t[Ju])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bc(e){return e.tag===5||e.tag===3||e.tag===4}function Ia(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rr(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=zs));else if(l!==4&&(e=e.child,e!==null))for(Rr(e,t,n),e=e.sibling;e!==null;)Rr(e,t,n),e=e.sibling}function Ir(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(e=e.child,e!==null))for(Ir(e,t,n),e=e.sibling;e!==null;)Ir(e,t,n),e=e.sibling}var Z=null,Oe=!1;function Je(e,t,n){for(n=n.child;n!==null;)Gc(e,t,n),n=n.sibling}function Gc(e,t,n){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(nl,n)}catch{}switch(n.tag){case 5:se||Vt(n,t);case 6:var l=Z,r=Oe;Z=null,Je(e,t,n),Z=l,Oe=r,Z!==null&&(Oe?(e=Z,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Z.removeChild(n.stateNode));break;case 18:Z!==null&&(Oe?(e=Z,n=n.stateNode,e.nodeType===8?Al(e.parentNode,n):e.nodeType===1&&Al(e,n),Mn(e)):Al(Z,n.stateNode));break;case 4:l=Z,r=Oe,Z=n.stateNode.containerInfo,Oe=!0,Je(e,t,n),Z=l,Oe=r;break;case 0:case 11:case 14:case 15:if(!se&&(l=n.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){r=l=l.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Lr(n,t,a),r=r.next}while(r!==l)}Je(e,t,n);break;case 1:if(!se&&(Vt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=n.memoizedProps,l.state=n.memoizedState,l.componentWillUnmount()}catch(i){G(n,t,i)}Je(e,t,n);break;case 21:Je(e,t,n);break;case 22:n.mode&1?(se=(l=se)||n.memoizedState!==null,Je(e,t,n),se=l):Je(e,t,n);break;default:Je(e,t,n)}}function _a(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new pm),t.forEach(function(l){var r=Nm.bind(null,e,l);n.has(l)||(n.add(l),l.then(r,r))})}}function Ce(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l];try{var o=e,a=t,i=a;e:for(;i!==null;){switch(i.tag){case 5:Z=i.stateNode,Oe=!1;break e;case 3:Z=i.stateNode.containerInfo,Oe=!0;break e;case 4:Z=i.stateNode.containerInfo,Oe=!0;break e}i=i.return}if(Z===null)throw Error(b(160));Gc(o,a,r),Z=null,Oe=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){G(r,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hc(t,e),t=t.sibling}function Hc(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ce(t,e),_e(e),l&4){try{On(3,e,e.return),dl(3,e)}catch(y){G(e,e.return,y)}try{On(5,e,e.return)}catch(y){G(e,e.return,y)}}break;case 1:Ce(t,e),_e(e),l&512&&n!==null&&Vt(n,n.return);break;case 5:if(Ce(t,e),_e(e),l&512&&n!==null&&Vt(n,n.return),e.flags&32){var r=e.stateNode;try{Rn(r,"")}catch(y){G(e,e.return,y)}}if(l&4&&(r=e.stateNode,r!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,i=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{i==="input"&&o.type==="radio"&&o.name!=null&&ui(r,o),lr(i,a);var u=lr(i,o);for(a=0;a<c.length;a+=2){var g=c[a],h=c[a+1];g==="style"?gi(r,h):g==="dangerouslySetInnerHTML"?fi(r,h):g==="children"?Rn(r,h):Wr(r,g,h,u)}switch(i){case"input":ql(r,o);break;case"textarea":mi(r,o);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?$t(r,!!o.multiple,v,!1):f!==!!o.multiple&&(o.defaultValue!=null?$t(r,!!o.multiple,o.defaultValue,!0):$t(r,!!o.multiple,o.multiple?[]:"",!1))}r[Gn]=o}catch(y){G(e,e.return,y)}}break;case 6:if(Ce(t,e),_e(e),l&4){if(e.stateNode===null)throw Error(b(162));r=e.stateNode,o=e.memoizedProps;try{r.nodeValue=o}catch(y){G(e,e.return,y)}}break;case 3:if(Ce(t,e),_e(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(y){G(e,e.return,y)}break;case 4:Ce(t,e),_e(e);break;case 13:Ce(t,e),_e(e),r=e.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(ko=W())),l&4&&_a(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(se=(u=se)||g,Ce(t,e),se=u):Ce(t,e),_e(e),l&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!g&&e.mode&1)for(j=e,g=e.child;g!==null;){for(h=j=g;j!==null;){switch(f=j,v=f.child,f.tag){case 0:case 11:case 14:case 15:On(4,f,f.return);break;case 1:Vt(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){l=f,n=f.return;try{t=l,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(y){G(l,n,y)}}break;case 5:Vt(f,f.return);break;case 22:if(f.memoizedState!==null){Ma(h);continue}}v!==null?(v.return=f,j=v):Ma(h)}g=g.sibling}e:for(g=null,h=e;;){if(h.tag===5){if(g===null){g=h;try{r=h.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(i=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,i.style.display=hi("display",a))}catch(y){G(e,e.return,y)}}}else if(h.tag===6){if(g===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){G(e,e.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;g===h&&(g=null),h=h.return}g===h&&(g=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ce(t,e),_e(e),l&4&&_a(e);break;case 21:break;default:Ce(t,e),_e(e)}}function _e(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bc(n)){var l=n;break e}n=n.return}throw Error(b(160))}switch(l.tag){case 5:var r=l.stateNode;l.flags&32&&(Rn(r,""),l.flags&=-33);var o=Ia(e);Ir(e,o,r);break;case 3:case 4:var a=l.stateNode.containerInfo,i=Ia(e);Rr(e,i,a);break;default:throw Error(b(161))}}catch(c){G(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function hm(e,t,n){j=e,Vc(e)}function Vc(e,t,n){for(var l=(e.mode&1)!==0;j!==null;){var r=j,o=r.child;if(r.tag===22&&l){var a=r.memoizedState!==null||gs;if(!a){var i=r.alternate,c=i!==null&&i.memoizedState!==null||se;i=gs;var u=se;if(gs=a,(se=c)&&!u)for(j=r;j!==null;)a=j,c=a.child,a.tag===22&&a.memoizedState!==null?Ua(r):c!==null?(c.return=a,j=c):Ua(r);for(;o!==null;)j=o,Vc(o),o=o.sibling;j=r,gs=i,se=u}Aa(e)}else r.subtreeFlags&8772&&o!==null?(o.return=r,j=o):Aa(e)}}function Aa(e){for(;j!==null;){var t=j;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:se||dl(5,t);break;case 1:var l=t.stateNode;if(t.flags&4&&!se)if(n===null)l.componentDidMount();else{var r=t.elementType===t.type?n.memoizedProps:De(t.type,n.memoizedProps);l.componentDidUpdate(r,n.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&wa(t,o,l);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wa(t,a,n)}break;case 5:var i=t.stateNode;if(n===null&&t.flags&4){n=i;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var g=u.memoizedState;if(g!==null){var h=g.dehydrated;h!==null&&Mn(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}se||t.flags&512&&Tr(t)}catch(f){G(t,t.return,f)}}if(t===e){j=null;break}if(n=t.sibling,n!==null){n.return=t.return,j=n;break}j=t.return}}function Ma(e){for(;j!==null;){var t=j;if(t===e){j=null;break}var n=t.sibling;if(n!==null){n.return=t.return,j=n;break}j=t.return}}function Ua(e){for(;j!==null;){var t=j;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{dl(4,t)}catch(c){G(t,n,c)}break;case 1:var l=t.stateNode;if(typeof l.componentDidMount=="function"){var r=t.return;try{l.componentDidMount()}catch(c){G(t,r,c)}}var o=t.return;try{Tr(t)}catch(c){G(t,o,c)}break;case 5:var a=t.return;try{Tr(t)}catch(c){G(t,a,c)}}}catch(c){G(t,t.return,c)}if(t===e){j=null;break}var i=t.sibling;if(i!==null){i.return=t.return,j=i;break}j=t.return}}var gm=Math.ceil,Ys=Ye.ReactCurrentDispatcher,No=Ye.ReactCurrentOwner,Ne=Ye.ReactCurrentBatchConfig,T=0,J=null,$=null,q=0,fe=0,Wt=ht(0),K=0,Kn=null,Ot=0,ul=0,So=0,Pn=null,ce=null,ko=0,ln=1/0,Be=null,Js=!1,_r=null,ct=null,xs=!1,st=null,Zs=0,Ln=0,Ar=null,Ds=-1,Os=0;function oe(){return T&6?W():Ds!==-1?Ds:Ds=W()}function dt(e){return e.mode&1?T&2&&q!==0?q&-q:qu.transition!==null?(Os===0&&(Os=Di()),Os):(e=R,e!==0||(e=window.event,e=e===void 0?16:_i(e.type)),e):1}function Re(e,t,n,l){if(50<Ln)throw Ln=0,Ar=null,Error(b(185));Yn(e,n,l),(!(T&2)||e!==J)&&(e===J&&(!(T&2)&&(ul|=n),K===4&&tt(e,q)),pe(e,l),n===1&&T===0&&!(t.mode&1)&&(ln=W()+500,al&&gt()))}function pe(e,t){var n=e.callbackNode;qd(e,t);var l=_s(e,e===J?q:0);if(l===0)n!==null&&Qo(n),e.callbackNode=null,e.callbackPriority=0;else if(t=l&-l,e.callbackPriority!==t){if(n!=null&&Qo(n),t===1)e.tag===0?Zu(za.bind(null,e)):ec(za.bind(null,e)),Ku(function(){!(T&6)&&gt()}),n=null;else{switch(Oi(l)){case 1:n=Yr;break;case 4:n=Ei;break;case 16:n=Is;break;case 536870912:n=Ci;break;default:n=Is}n=Zc(n,Wc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wc(e,t){if(Ds=-1,Os=0,T&6)throw Error(b(327));var n=e.callbackNode;if(Jt()&&e.callbackNode!==n)return null;var l=_s(e,e===J?q:0);if(l===0)return null;if(l&30||l&e.expiredLanes||t)t=qs(e,l);else{t=l;var r=T;T|=2;var o=Qc();(J!==e||q!==t)&&(Be=null,ln=W()+500,St(e,t));do try{vm();break}catch(i){$c(e,i)}while(!0);co(),Ys.current=o,T=r,$!==null?t=0:(J=null,q=0,t=K)}if(t!==0){if(t===2&&(r=cr(e),r!==0&&(l=r,t=Mr(e,r))),t===1)throw n=Kn,St(e,0),tt(e,l),pe(e,W()),n;if(t===6)tt(e,l);else{if(r=e.current.alternate,!(l&30)&&!xm(r)&&(t=qs(e,l),t===2&&(o=cr(e),o!==0&&(l=o,t=Mr(e,o))),t===1))throw n=Kn,St(e,0),tt(e,l),pe(e,W()),n;switch(e.finishedWork=r,e.finishedLanes=l,t){case 0:case 1:throw Error(b(345));case 2:wt(e,ce,Be);break;case 3:if(tt(e,l),(l&130023424)===l&&(t=ko+500-W(),10<t)){if(_s(e,0)!==0)break;if(r=e.suspendedLanes,(r&l)!==l){oe(),e.pingedLanes|=e.suspendedLanes&r;break}e.timeoutHandle=xr(wt.bind(null,e,ce,Be),t);break}wt(e,ce,Be);break;case 4:if(tt(e,l),(l&4194240)===l)break;for(t=e.eventTimes,r=-1;0<l;){var a=31-Te(l);o=1<<a,a=t[a],a>r&&(r=a),l&=~o}if(l=r,l=W()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*gm(l/1960))-l,10<l){e.timeoutHandle=xr(wt.bind(null,e,ce,Be),l);break}wt(e,ce,Be);break;case 5:wt(e,ce,Be);break;default:throw Error(b(329))}}}return pe(e,W()),e.callbackNode===n?Wc.bind(null,e):null}function Mr(e,t){var n=Pn;return e.current.memoizedState.isDehydrated&&(St(e,t).flags|=256),e=qs(e,t),e!==2&&(t=ce,ce=n,t!==null&&Ur(t)),e}function Ur(e){ce===null?ce=e:ce.push.apply(ce,e)}function xm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var l=0;l<n.length;l++){var r=n[l],o=r.getSnapshot;r=r.value;try{if(!Ie(o(),r))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function tt(e,t){for(t&=~So,t&=~ul,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Te(t),l=1<<n;e[n]=-1,t&=~l}}function za(e){if(T&6)throw Error(b(327));Jt();var t=_s(e,0);if(!(t&1))return pe(e,W()),null;var n=qs(e,t);if(e.tag!==0&&n===2){var l=cr(e);l!==0&&(t=l,n=Mr(e,l))}if(n===1)throw n=Kn,St(e,0),tt(e,t),pe(e,W()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wt(e,ce,Be),pe(e,W()),null}function Eo(e,t){var n=T;T|=1;try{return e(t)}finally{T=n,T===0&&(ln=W()+500,al&&gt())}}function Pt(e){st!==null&&st.tag===0&&!(T&6)&&Jt();var t=T;T|=1;var n=Ne.transition,l=R;try{if(Ne.transition=null,R=1,e)return e()}finally{R=l,Ne.transition=n,T=t,!(T&6)&&gt()}}function Co(){fe=Wt.current,A(Wt)}function St(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Qu(n)),$!==null)for(n=$.return;n!==null;){var l=n;switch(oo(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Fs();break;case 3:nn(),A(ue),A(le),go();break;case 5:ho(l);break;case 4:nn();break;case 13:A(z);break;case 19:A(z);break;case 10:uo(l.type._context);break;case 22:case 23:Co()}n=n.return}if(J=e,$=e=ut(e.current,null),q=fe=t,K=0,Kn=null,So=ul=Ot=0,ce=Pn=null,jt!==null){for(t=0;t<jt.length;t++)if(n=jt[t],l=n.interleaved,l!==null){n.interleaved=null;var r=l.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,l.next=a}n.pending=l}jt=null}return e}function $c(e,t){do{var n=$;try{if(co(),ks.current=Xs,Ks){for(var l=F.memoizedState;l!==null;){var r=l.queue;r!==null&&(r.pending=null),l=l.next}Ks=!1}if(Dt=0,Y=Q=F=null,Dn=!1,Wn=0,No.current=null,n===null||n.return===null){K=1,Kn=t,$=null;break}e:{var o=e,a=n.return,i=n,c=t;if(t=q,i.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,g=i,h=g.tag;if(!(g.mode&1)&&(h===0||h===11||h===15)){var f=g.alternate;f?(g.updateQueue=f.updateQueue,g.memoizedState=f.memoizedState,g.lanes=f.lanes):(g.updateQueue=null,g.memoizedState=null)}var v=Ea(a);if(v!==null){v.flags&=-257,Ca(v,a,i,o,t),v.mode&1&&ka(o,u,t),t=v,c=u;var w=t.updateQueue;if(w===null){var y=new Set;y.add(c),t.updateQueue=y}else w.add(c);break e}else{if(!(t&1)){ka(o,u,t),Do();break e}c=Error(b(426))}}else if(U&&i.mode&1){var M=Ea(a);if(M!==null){!(M.flags&65536)&&(M.flags|=256),Ca(M,a,i,o,t),ao(sn(c,i));break e}}o=c=sn(c,i),K!==4&&(K=2),Pn===null?Pn=[o]:Pn.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=Oc(o,c,t);va(o,m);break e;case 1:i=c;var d=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof d.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(ct===null||!ct.has(p)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Pc(o,i,t);va(o,x);break e}}o=o.return}while(o!==null)}Xc(n)}catch(N){t=N,$===n&&n!==null&&($=n=n.return);continue}break}while(!0)}function Qc(){var e=Ys.current;return Ys.current=Xs,e===null?Xs:e}function Do(){(K===0||K===3||K===2)&&(K=4),J===null||!(Ot&268435455)&&!(ul&268435455)||tt(J,q)}function qs(e,t){var n=T;T|=2;var l=Qc();(J!==e||q!==t)&&(Be=null,St(e,t));do try{bm();break}catch(r){$c(e,r)}while(!0);if(co(),T=n,Ys.current=l,$!==null)throw Error(b(261));return J=null,q=0,K}function bm(){for(;$!==null;)Kc($)}function vm(){for(;$!==null&&!Vd();)Kc($)}function Kc(e){var t=Jc(e.alternate,e,fe);e.memoizedProps=e.pendingProps,t===null?Xc(e):$=t,No.current=null}function Xc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=mm(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{K=6,$=null;return}}else if(n=um(n,t,fe),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);K===0&&(K=5)}function wt(e,t,n){var l=R,r=Ne.transition;try{Ne.transition=null,R=1,wm(e,t,n,l)}finally{Ne.transition=r,R=l}return null}function wm(e,t,n,l){do Jt();while(st!==null);if(T&6)throw Error(b(327));n=e.finishedWork;var r=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(eu(e,o),e===J&&($=J=null,q=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xs||(xs=!0,Zc(Is,function(){return Jt(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ne.transition,Ne.transition=null;var a=R;R=1;var i=T;T|=4,No.current=null,fm(e,n),Hc(n,e),Fu(hr),As=!!fr,hr=fr=null,e.current=n,hm(n),Wd(),T=i,R=a,Ne.transition=o}else e.current=n;if(xs&&(xs=!1,st=e,Zs=r),o=e.pendingLanes,o===0&&(ct=null),Kd(n.stateNode),pe(e,W()),t!==null)for(l=e.onRecoverableError,n=0;n<t.length;n++)r=t[n],l(r.value,{componentStack:r.stack,digest:r.digest});if(Js)throw Js=!1,e=_r,_r=null,e;return Zs&1&&e.tag!==0&&Jt(),o=e.pendingLanes,o&1?e===Ar?Ln++:(Ln=0,Ar=e):Ln=0,gt(),null}function Jt(){if(st!==null){var e=Oi(Zs),t=Ne.transition,n=R;try{if(Ne.transition=null,R=16>e?16:e,st===null)var l=!1;else{if(e=st,st=null,Zs=0,T&6)throw Error(b(331));var r=T;for(T|=4,j=e.current;j!==null;){var o=j,a=o.child;if(j.flags&16){var i=o.deletions;if(i!==null){for(var c=0;c<i.length;c++){var u=i[c];for(j=u;j!==null;){var g=j;switch(g.tag){case 0:case 11:case 15:On(8,g,o)}var h=g.child;if(h!==null)h.return=g,j=h;else for(;j!==null;){g=j;var f=g.sibling,v=g.return;if(Fc(g),g===u){j=null;break}if(f!==null){f.return=v,j=f;break}j=v}}}var w=o.alternate;if(w!==null){var y=w.child;if(y!==null){w.child=null;do{var M=y.sibling;y.sibling=null,y=M}while(y!==null)}}j=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,j=a;else e:for(;j!==null;){if(o=j,o.flags&2048)switch(o.tag){case 0:case 11:case 15:On(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,j=m;break e}j=o.return}}var d=e.current;for(j=d;j!==null;){a=j;var p=a.child;if(a.subtreeFlags&2064&&p!==null)p.return=a,j=p;else e:for(a=d;j!==null;){if(i=j,i.flags&2048)try{switch(i.tag){case 0:case 11:case 15:dl(9,i)}}catch(N){G(i,i.return,N)}if(i===a){j=null;break e}var x=i.sibling;if(x!==null){x.return=i.return,j=x;break e}j=i.return}}if(T=r,gt(),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(nl,e)}catch{}l=!0}return l}finally{R=n,Ne.transition=t}}return!1}function Fa(e,t,n){t=sn(n,t),t=Oc(e,t,1),e=it(e,t,1),t=oe(),e!==null&&(Yn(e,1,t),pe(e,t))}function G(e,t,n){if(e.tag===3)Fa(e,e,n);else for(;t!==null;){if(t.tag===3){Fa(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ct===null||!ct.has(l))){e=sn(n,e),e=Pc(t,e,1),t=it(t,e,1),e=oe(),t!==null&&(Yn(t,1,e),pe(t,e));break}}t=t.return}}function ym(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),t=oe(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(q&n)===n&&(K===4||K===3&&(q&130023424)===q&&500>W()-ko?St(e,0):So|=n),pe(e,t)}function Yc(e,t){t===0&&(e.mode&1?(t=as,as<<=1,!(as&130023424)&&(as=4194304)):t=1);var n=oe();e=Ke(e,t),e!==null&&(Yn(e,t,n),pe(e,n))}function jm(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yc(e,n)}function Nm(e,t){var n=0;switch(e.tag){case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;default:throw Error(b(314))}l!==null&&l.delete(t),Yc(e,n)}var Jc;Jc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ue.current)de=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return de=!1,dm(e,t,n);de=!!(e.flags&131072)}else de=!1,U&&t.flags&1048576&&tc(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var l=t.type;Cs(e,t),e=t.pendingProps;var r=qt(t,le.current);Yt(t,n),r=bo(null,t,l,e,r,n);var o=vo();return t.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(l)?(o=!0,Bs(t)):o=!1,t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,po(t),r.updater=cl,t.stateNode=r,r._reactInternals=t,Sr(t,l,e,n),t=Cr(null,t,l,!0,o,n)):(t.tag=0,U&&o&&ro(t),re(null,t,r,n),t=t.child),t;case 16:l=t.elementType;e:{switch(Cs(e,t),e=t.pendingProps,r=l._init,l=r(l._payload),t.type=l,r=t.tag=km(l),e=De(l,e),r){case 0:t=Er(null,t,l,e,n);break e;case 1:t=Pa(null,t,l,e,n);break e;case 11:t=Da(null,t,l,e,n);break e;case 14:t=Oa(null,t,l,De(l.type,e),n);break e}throw Error(b(306,l,""))}return t;case 0:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:De(l,r),Er(e,t,l,r,n);case 1:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:De(l,r),Pa(e,t,l,r,n);case 3:e:{if(Ic(t),e===null)throw Error(b(387));l=t.pendingProps,o=t.memoizedState,r=o.element,ac(e,t),$s(t,l,null,n);var a=t.memoizedState;if(l=a.element,o.isDehydrated)if(o={element:l,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){r=sn(Error(b(423)),t),t=La(e,t,l,n,r);break e}else if(l!==r){r=sn(Error(b(424)),t),t=La(e,t,l,n,r);break e}else for(he=at(t.stateNode.containerInfo.firstChild),ge=t,U=!0,Pe=null,n=rc(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(en(),l===r){t=Xe(e,t,n);break e}re(e,t,l,n)}t=t.child}return t;case 5:return ic(t),e===null&&yr(t),l=t.type,r=t.pendingProps,o=e!==null?e.memoizedProps:null,a=r.children,gr(l,r)?a=null:o!==null&&gr(l,o)&&(t.flags|=32),Rc(e,t),re(e,t,a,n),t.child;case 6:return e===null&&yr(t),null;case 13:return _c(e,t,n);case 4:return fo(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=tn(t,null,l,n):re(e,t,l,n),t.child;case 11:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:De(l,r),Da(e,t,l,r,n);case 7:return re(e,t,t.pendingProps,n),t.child;case 8:return re(e,t,t.pendingProps.children,n),t.child;case 12:return re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(l=t.type._context,r=t.pendingProps,o=t.memoizedProps,a=r.value,I(Vs,l._currentValue),l._currentValue=a,o!==null)if(Ie(o.value,a)){if(o.children===r.children&&!ue.current){t=Xe(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var i=o.dependencies;if(i!==null){a=o.child;for(var c=i.firstContext;c!==null;){if(c.context===l){if(o.tag===1){c=We(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var g=u.pending;g===null?c.next=c:(c.next=g.next,g.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),jr(o.return,n,t),i.lanes|=n;break}c=c.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(b(341));a.lanes|=n,i=a.alternate,i!==null&&(i.lanes|=n),jr(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}re(e,t,r.children,n),t=t.child}return t;case 9:return r=t.type,l=t.pendingProps.children,Yt(t,n),r=Se(r),l=l(r),t.flags|=1,re(e,t,l,n),t.child;case 14:return l=t.type,r=De(l,t.pendingProps),r=De(l.type,r),Oa(e,t,l,r,n);case 15:return Lc(e,t,t.type,t.pendingProps,n);case 17:return l=t.type,r=t.pendingProps,r=t.elementType===l?r:De(l,r),Cs(e,t),t.tag=1,me(l)?(e=!0,Bs(t)):e=!1,Yt(t,n),Dc(t,l,r),Sr(t,l,r,n),Cr(null,t,l,!0,e,n);case 19:return Ac(e,t,n);case 22:return Tc(e,t,n)}throw Error(b(156,t.tag))};function Zc(e,t){return ki(e,t)}function Sm(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function je(e,t,n,l){return new Sm(e,t,n,l)}function Oo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function km(e){if(typeof e=="function")return Oo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Qr)return 11;if(e===Kr)return 14}return 2}function ut(e,t){var n=e.alternate;return n===null?(n=je(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ps(e,t,n,l,r,o){var a=2;if(l=e,typeof e=="function")Oo(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case _t:return kt(n.children,r,o,t);case $r:a=8,r|=8;break;case Kl:return e=je(12,n,t,r|2),e.elementType=Kl,e.lanes=o,e;case Xl:return e=je(13,n,t,r),e.elementType=Xl,e.lanes=o,e;case Yl:return e=je(19,n,t,r),e.elementType=Yl,e.lanes=o,e;case ii:return ml(n,r,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oi:a=10;break e;case ai:a=9;break e;case Qr:a=11;break e;case Kr:a=14;break e;case Ze:a=16,l=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=je(a,n,t,r),t.elementType=e,t.type=l,t.lanes=o,t}function kt(e,t,n,l){return e=je(7,e,l,t),e.lanes=n,e}function ml(e,t,n,l){return e=je(22,e,l,t),e.elementType=ii,e.lanes=n,e.stateNode={isHidden:!1},e}function Vl(e,t,n){return e=je(6,e,null,t),e.lanes=n,e}function Wl(e,t,n){return t=je(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Em(e,t,n,l,r){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=kl(0),this.expirationTimes=kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.identifierPrefix=l,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Po(e,t,n,l,r,o,a,i,c){return e=new Em(e,t,n,i,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=je(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:l,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},po(o),e}function Cm(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:It,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}function qc(e){if(!e)return pt;e=e._reactInternals;e:{if(Tt(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(me(n))return qi(e,n,t)}return t}function ed(e,t,n,l,r,o,a,i,c){return e=Po(n,l,!0,e,r,o,a,i,c),e.context=qc(null),n=e.current,l=oe(),r=dt(n),o=We(l,r),o.callback=t??null,it(n,o,r),e.current.lanes=r,Yn(e,r,l),pe(e,l),e}function pl(e,t,n,l){var r=t.current,o=oe(),a=dt(r);return n=qc(n),t.context===null?t.context=n:t.pendingContext=n,t=We(o,a),t.payload={element:e},l=l===void 0?null:l,l!==null&&(t.callback=l),e=it(r,t,a),e!==null&&(Re(e,r,a,o),Ss(e,r,a)),a}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ba(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Lo(e,t){Ba(e,t),(e=e.alternate)&&Ba(e,t)}function Dm(){return null}var td=typeof reportError=="function"?reportError:function(e){console.error(e)};function To(e){this._internalRoot=e}fl.prototype.render=To.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));pl(e,t,null,null)};fl.prototype.unmount=To.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Pt(function(){pl(null,e,null,null)}),t[Qe]=null}};function fl(e){this._internalRoot=e}fl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ti();e={blockedOn:null,target:e,priority:t};for(var n=0;n<et.length&&t!==0&&t<et[n].priority;n++);et.splice(n,0,e),n===0&&Ii(e)}};function Ro(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Ga(){}function Om(e,t,n,l,r){if(r){if(typeof l=="function"){var o=l;l=function(){var u=el(a);o.call(u)}}var a=ed(t,l,e,0,null,!1,!1,"",Ga);return e._reactRootContainer=a,e[Qe]=a.current,Fn(e.nodeType===8?e.parentNode:e),Pt(),a}for(;r=e.lastChild;)e.removeChild(r);if(typeof l=="function"){var i=l;l=function(){var u=el(c);i.call(u)}}var c=Po(e,0,!1,null,null,!1,!1,"",Ga);return e._reactRootContainer=c,e[Qe]=c.current,Fn(e.nodeType===8?e.parentNode:e),Pt(function(){pl(t,c,n,l)}),c}function gl(e,t,n,l,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var i=r;r=function(){var c=el(a);i.call(c)}}pl(t,a,e,r)}else a=Om(n,t,e,r,l);return el(a)}Pi=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=yn(t.pendingLanes);n!==0&&(Jr(t,n|1),pe(t,W()),!(T&6)&&(ln=W()+500,gt()))}break;case 13:Pt(function(){var l=Ke(e,1);if(l!==null){var r=oe();Re(l,e,1,r)}}),Lo(e,1)}};Zr=function(e){if(e.tag===13){var t=Ke(e,134217728);if(t!==null){var n=oe();Re(t,e,134217728,n)}Lo(e,134217728)}};Li=function(e){if(e.tag===13){var t=dt(e),n=Ke(e,t);if(n!==null){var l=oe();Re(n,e,t,l)}Lo(e,t)}};Ti=function(){return R};Ri=function(e,t){var n=R;try{return R=e,t()}finally{R=n}};or=function(e,t,n){switch(t){case"input":if(ql(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var r=ol(l);if(!r)throw Error(b(90));di(l),ql(l,r)}}}break;case"textarea":mi(e,n);break;case"select":t=n.value,t!=null&&$t(e,!!n.multiple,t,!1)}};vi=Eo;wi=Pt;var Pm={usingClientEntryPoint:!1,Events:[Zn,zt,ol,xi,bi,Eo]},bn={findFiberByHostInstance:yt,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Lm={bundleType:bn.bundleType,version:bn.version,rendererPackageName:bn.rendererPackageName,rendererConfig:bn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ye.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ni(e),e===null?null:e.stateNode},findFiberByHostInstance:bn.findFiberByHostInstance||Dm,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bs.isDisabled&&bs.supportsFiber)try{nl=bs.inject(Lm),ze=bs}catch{}}be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Pm;be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ro(t))throw Error(b(200));return Cm(e,t,null,n)};be.createRoot=function(e,t){if(!Ro(e))throw Error(b(299));var n=!1,l="",r=td;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Po(e,1,!1,null,null,n,!1,l,r),e[Qe]=t.current,Fn(e.nodeType===8?e.parentNode:e),new To(t)};be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Ni(t),e=e===null?null:e.stateNode,e};be.flushSync=function(e){return Pt(e)};be.hydrate=function(e,t,n){if(!hl(t))throw Error(b(200));return gl(null,e,t,!0,n)};be.hydrateRoot=function(e,t,n){if(!Ro(e))throw Error(b(405));var l=n!=null&&n.hydratedSources||null,r=!1,o="",a=td;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=ed(t,null,e,1,n??null,r,!1,o,a),e[Qe]=t.current,Fn(e),l)for(e=0;e<l.length;e++)n=l[e],r=n._getVersion,r=r(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,r]:t.mutableSourceEagerHydrationData.push(n,r);return new fl(t)};be.render=function(e,t,n){if(!hl(t))throw Error(b(200));return gl(null,e,t,!1,n)};be.unmountComponentAtNode=function(e){if(!hl(e))throw Error(b(40));return e._reactRootContainer?(Pt(function(){gl(null,null,e,!1,function(){e._reactRootContainer=null,e[Qe]=null})}),!0):!1};be.unstable_batchedUpdates=Eo;be.unstable_renderSubtreeIntoContainer=function(e,t,n,l){if(!hl(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return gl(e,t,n,!1,l)};be.version="18.3.1-next-f1338f8080-20240426";function nd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nd)}catch(e){console.error(e)}}nd(),ni.exports=be;var Tm=ni.exports,Ha=Tm;$l.createRoot=Ha.createRoot,$l.hydrateRoot=Ha.hydrateRoot;var Le=(e=>(e.BLOG="blog",e.DIARY="diary",e.PROJECTS="projects",e))(Le||{});const Rm=({currentTab:e,onTabChange:t})=>s.jsx("nav",{className:"sticky top-0 z-40 w-full glass-panel border-b border-pink-100/40 shadow-sm transition-all duration-300 bg-white/60 backdrop-blur-md",children:s.jsxs("div",{className:"max-w-5xl mx-auto px-6 h-16 flex items-center justify-between",children:[s.jsxs("div",{className:"font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-rose-400 to-emerald-500 cursor-pointer hover:opacity-80 transition-opacity",children:[s.jsx("span",{className:"text-stone-600 font-light",children:"My"}),"Space"]}),s.jsxs("div",{className:"flex bg-stone-100/50 p-1 rounded-full border border-white/50 backdrop-blur-md shadow-sm",children:[s.jsx("button",{onClick:()=>t(Le.BLOG),className:`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${e===Le.BLOG?"bg-white text-pink-600 shadow-sm":"text-stone-600 hover:text-stone-900"}`,children:"博客"}),s.jsx("button",{onClick:()=>t(Le.DIARY),className:`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${e===Le.DIARY?"bg-white text-rose-500 shadow-sm":"text-stone-600 hover:text-stone-900"}`,children:"日记"}),s.jsx("button",{onClick:()=>t(Le.PROJECTS),className:`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${e===Le.PROJECTS?"bg-white text-emerald-600 shadow-sm":"text-stone-600 hover:text-stone-900"}`,children:"项目"})]})]})}),Im=({className:e})=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,children:s.jsx("path",{d:"M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347V9.987c.036-1.511.556-2.765 1.56-3.76C2.564 5.23 3.823 4.71 5.333 4.653h.854L3.64 1.925l1.493-1.493 4.108 4.16h5.461l4.16-4.16 1.547 1.493-2.597 2.728ZM5.333 6.253c-1.173 0-2.053.293-2.64.88-.587.587-.88 1.467-.88 2.64v7.84c0 1.173.293 2.053.88 2.64s1.467.88 2.64.88h13.334c1.173 0 2.053-.293 2.64-.88.587-.587.88-1.467.88-2.64v-7.84c0-1.173-.293-2.053-.88-2.64s-1.467-.88-2.64-.88H5.333Zm3.2 7.2a1.6 1.6 0 1 1 0-3.2 1.6 1.6 0 0 1 0 3.2Zm9.6-1.6a1.6 1.6 0 1 1-3.2 0 1.6 1.6 0 0 1 3.2 0Z"})}),_m=({className:e})=>s.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",className:e,children:s.jsx("path",{d:"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.05-.015-2.055-3.33.72-4.035-1.605-4.035-1.605-.54-1.38-1.32-1.755-1.32-1.755-1.09-.75.09-.735.09-.735 1.2.09 1.83 1.245 1.83 1.245 1.065 1.815 2.805 1.29 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405 1.02 0 2.04.135 3 .405 2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.285 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"})}),Am=({className:e})=>s.jsxs("svg",{viewBox:"0 0 1024 1024",fill:"currentColor",className:e,children:[s.jsx("path",{d:"M512 0C229.2 0 0 229.2 0 512s229.2 512 512 512 512-229.2 512-512S794.8 0 512 0z m0 928C282.3 928 96 741.7 96 512S282.3 96 512 96s416 186.3 416 416-186.3 416-416 416z m-64-256c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z m0-256c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z m256 0c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z m0 256c0-17.7-14.3-32-32-32s-32 14.3-32 32 14.3 32 32 32 32-14.3 32-32z"}),s.jsx("path",{d:"M288 320h448v64H288z m0 288h448v64H288z"})]}),Mm=()=>s.jsx("footer",{className:"w-full glass-panel border-t border-white/40 py-8 mt-auto relative z-10 bg-white/60 backdrop-blur-md",children:s.jsx("div",{className:"max-w-5xl mx-auto px-6 flex justify-end items-center",children:s.jsxs("div",{className:"flex items-center gap-6",children:[s.jsx("a",{href:"https://github.com/gaagaga",target:"_blank",rel:"noopener noreferrer",className:"text-stone-500 hover:text-stone-900 transition-colors duration-300 hover:scale-110 transform","aria-label":"GitHub",title:"GitHub",children:s.jsx(_m,{className:"w-6 h-6"})}),s.jsx("a",{href:"https://space.bilibili.com/273323983/dynamic?spm_id_from=444.41.my-info.face.click",target:"_blank",rel:"noopener noreferrer",className:"text-stone-500 hover:text-pink-500 transition-colors duration-300 hover:scale-110 transform","aria-label":"Bilibili",title:"Bilibili",children:s.jsx(Im,{className:"w-6 h-6"})}),s.jsx("a",{href:"https://blog.csdn.net/2403_87136809?spm=1000.2115.3001.10640",target:"_blank",rel:"noopener noreferrer",className:"text-stone-500 hover:text-red-600 transition-colors duration-300 hover:scale-110 transform","aria-label":"CSDN",title:"CSDN",children:s.jsx(Am,{className:"w-6 h-6"})})]})})}),Um=[{id:"28",title:"Unity 2D 游戏开发入门：10 [完结]打包生成游戏",excerpt:"Unity 2D 游戏开发系列教程完结篇。本篇介绍游戏打包流程：创建导航场景（InitialLoad）、Addressables寻址设置、图标与分辨率配置、资源打包与最终生成。",date:"2026-02-11",readTime:"15 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 创建导航场景"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个大包使用的导航场景"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/a498d3fc99224a1b804187c72d5e5e0c.png",alt:"导航场景",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c57d2d4f65114e20af9403e2438def52.png",alt:"场景结构",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"InitialLoad脚本："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;

public class InitialLoad : MonoBehaviour
{
    public AssetReference persistentScene;

    void Awake()
    {
        Addressables.LoadSceneAsync(persistentScene);
    }

}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 Addressables打包设置"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"上面是unity里面的寻址工具，打包使用第三个，在打包前要先build"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/622096b0fb4f4433ae4e1a522ce8df19.png",alt:"Addressables设置",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三 图标与分辨率设置"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"打包前的一些icon，分辨率设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/cc3648be0ce2405588bb7d0f5e93a438.png",alt:"PlayerSettings",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四 资源打包"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"统一打包所有图片资源"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/adba261fb01449c99c907192f0581acc.png",alt:"资源打包",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"五 打包完成"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"打包完成(●'◡'●)"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/93d21989b43041abb7b95c4da3c61707.png",alt:"游戏截图",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("div",{className:"bg-orange-50 border-l-4 border-orange-400 p-4 mt-6 rounded-r-lg",children:s.jsx("p",{className:"text-orange-800 font-medium",children:"Unity 2D 游戏开发入门系列教程完结！感谢观看！"})})]})},{id:"27",title:"Unity 2D 游戏开发入门：9 游戏结束面板与暂停菜单",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇实现游戏结束面板（UIManager、gameOverPanel）、暂停菜单（pausePanel、音量控制）、返回主菜单功能及事件系统整合。",date:"2026-02-11",readTime:"30 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 制作游戏结束面板"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"设计结束面板，首先要创建一个panel"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4e8bf2ee25294868a799b0f80d02819b.png",alt:"创建Panel",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"panel里面有文字和按钮"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4520ab74e52a4efcada3eb5847fe52e4.png",alt:"Panel内容",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"加入button组件，on click发送事件"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/555d721d3c4c40488ddff63d500b3ecd.png",alt:"Button事件",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"UIManager完整代码："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.EventSystems;
using UnityEngine.UI;

public class UIManager : MonoBehaviour
{
    public PlayStatBar playStatBar;

    [Header("广播")]
    public VoidEventSO volumenow;

    [Header("事件监听")]
    public CharacterEventSO healthEvent;
    public SceneLoadEventSO unloadedSceneEvent;
    public VoidEventSO loadDataEvent;
    public VoidEventSO gameOverEvent;
    public VoidEventSO backToMenuEvent;
    public FloatEventSO volumeEvent;


    [Header("组件")]
    public GameObject gameOverPanel;
    public GameObject restartBtn;
    public GameObject mobileTouch;
    public Button settingsBtn;
    public GameObject pausePanel;
    public Slider volumeSlider;
    public GameObject menu;


    void Awake()
    {
#if UNITY_STANDALONE
         mobileTouch.SetActive(false);
#endif

    settingsBtn.onClick.AddListener(TogglePausePanel);

    }

    void OnEnable()
    {
        healthEvent.OnEventRaised += OnHealthEvent;
        unloadedSceneEvent.LoadRequestEvent += OnUnLoadedSceneEvent;
        loadDataEvent.OnEventRaised += OnUnLoadedDataEvent;
        gameOverEvent.OnEventRaised += OnGameOverEvent;
        backToMenuEvent.OnEventRaised += OnUnLoadedDataEvent;
        volumeEvent.OnEventRaised += OnvolumeEvent;
    }



    void OnDisable()
    {
        healthEvent.OnEventRaised -= OnHealthEvent;
        unloadedSceneEvent.LoadRequestEvent -= OnUnLoadedSceneEvent;
        loadDataEvent.OnEventRaised -= OnUnLoadedDataEvent;
        gameOverEvent.OnEventRaised -= OnGameOverEvent;
        backToMenuEvent.OnEventRaised -= OnUnLoadedDataEvent;
        volumeEvent.OnEventRaised += OnvolumeEvent;
    }

    private void OnvolumeEvent(float amount)
    {
        volumeSlider.value = (amount + 80) / 100;
    }

    private void TogglePausePanel()
    {

        if (menu == null)
        {
            menu = GameObject.Find("GameMenuCanvas");
        }


        if(pausePanel.activeInHierarchy)
        {
            pausePanel.SetActive(false);
            Time.timeScale = 1;
            menu.SetActive(true);
        }
        else
        {
            if(volumenow != null) volumenow.RaiseEvent();
            pausePanel.SetActive(true);
            Time.timeScale = 0;
            menu.SetActive(false);
        }
    }

    private void OnUnLoadedSceneEvent(GameSceneSO sceneToLoad, Vector3 arg1, bool arg2)
    {
        var isMenu = sceneToLoad.sceneType == SceneType.Menu;
        playStatBar.gameObject.SetActive(!isMenu);

    }


    private void OnHealthEvent(Character character)
    {
        var persentage = character.currentHealth / character.maxHealth;
        playStatBar.OnHealthChange(persentage);
    }
    private void OnUnLoadedDataEvent()
    {
        Debug.Log("close");
        gameOverPanel.SetActive(false);
    }

        private void OnGameOverEvent()
    {
        Debug.Log("DEAD");
        gameOverPanel.SetActive(true);
        EventSystem.current.SetSelectedGameObject(restartBtn);
    }

}`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/661c14a5143b4269a080b00a45993ac6.png",alt:"Unity设置",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 PlayerController事件处理"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"同时在playercontroller里面使用事件让人物在重新开始的时候为存活"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`private void OnLoadDataEvent()
{
    isDead = false;
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三 返回主菜单功能"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"backtomenu实现，处理场景切换返回主菜单"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/052407ae87ed43b9bd99d48cada01f19.png",alt:"BackToMenu",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Sceneload完整代码："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing.Printing;
using TMPro;
using Unity.VisualScripting;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.ResourceManagement.ResourceProviders;
using UnityEngine.SceneManagement;
public class Sceneload : MonoBehaviour,iSaveable
{
    public Transform playerTrans;
    public Vector3 firstPosition;
    public Vector3 menuPosition;

    [Header("事件监听")]
    public SceneLoadEventSO loadEventSO;
    public VoidEventSO newGameEvent;
    public VoidEventSO backToMenuEvent;


    [Header("广播")]
    public VoidEventSO afterSceneLoadedEvent;
    public FadeEventSO fadeEvent;
    public SceneLoadEventSO unloadedSceneEvent;

    [Header("场景")]
    public GameSceneSO firstLoadScene;
    public GameSceneSO menuScene;
    private GameSceneSO currentLoadedScene;
    private GameSceneSO sceneToLoad;
    private Vector3 positionToGo;
    private bool fadeScreen;
    private bool isLoading;

    public float fadeDuration;

    void Start()
    {
        loadEventSO.RaiseLoadRequestEvent(menuScene, menuPosition, true);
    }
    private void Awake()
    {

    }
    void OnEnable()
    {
        loadEventSO.LoadRequestEvent += OnLoadRequestEvent;
        newGameEvent.OnEventRaised += NewGame;
        backToMenuEvent.OnEventRaised += OnBackToMenuEvent;

        iSaveable saveable = this;
        saveable.RegisterSaveData();
    }
    void OnDisable()
    {
        loadEventSO.LoadRequestEvent -= OnLoadRequestEvent;
        newGameEvent.OnEventRaised -= NewGame;
        backToMenuEvent.OnEventRaised -= OnBackToMenuEvent;

        iSaveable saveable = this;
        saveable.UnRegisterSaveData();
    }

    private void OnBackToMenuEvent()
    {
        sceneToLoad = menuScene;
        loadEventSO.RaiseLoadRequestEvent(sceneToLoad, menuPosition, true);
    }

    private void NewGame()
    {
        sceneToLoad = firstLoadScene;
        positionToGo = firstPosition;
        fadeScreen = true;

        if (currentLoadedScene != null)
        {
            StartCoroutine(UnLoadPreviousScene());
        }
        else
        {
            LoadNewScene();
        }
    }

    private void OnLoadRequestEvent(GameSceneSO sceneToLoad, Vector3 pos, bool fadeScreen)
    {
        this.sceneToLoad = sceneToLoad;
        this.positionToGo = pos;
        this.fadeScreen = fadeScreen;

        if (currentLoadedScene != null)
        {
            StartCoroutine(UnLoadPreviousScene());
        }
        else
        {
            LoadNewScene();
        }
    }

    private IEnumerator UnLoadPreviousScene()
    {
        if(fadeScreen)
        {
            fadeEvent.FadeIn(fadeDuration);
        }
        yield return new WaitForSeconds(fadeDuration);

        if(currentLoadedScene != null)
        {
            yield return currentLoadedScene.sceneReference.UnLoadScene();
        }
        playerTrans.gameObject.SetActive(false);

        LoadNewScene();
    }

    private void LoadNewScene()
    {
        var loadingOption = sceneToLoad.sceneReference.LoadSceneAsync(LoadSceneMode.Additive, true);
        loadingOption.Completed += OnLoadCompleted;
    }

    private void OnLoadCompleted(AsyncOperationHandle<SceneInstance> handle)
    {
        currentLoadedScene = sceneToLoad;
        playerTrans.position = positionToGo;
        playerTrans.gameObject.SetActive(true);

        if(fadeScreen)
        {
            fadeEvent.FadeOut(fadeDuration);
        }
        isLoading = false;
        afterSceneLoadedEvent.RaiseEvent();
    }

    public DataDefination GetDataID()
    {
        return GetComponent<DataDefination>();
    }

    public void GetSaveData(Data data)
    {
        data.sceneName = currentLoadedScene.sceneReference.editorAsset.name;
    }

    public void LoadData(Data data)
    {
        // 从存档加载场景
    }
}`})})]})},{id:"26",title:"Unity 2D 游戏开发入门：8 存储点与数据保存系统",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇实现存储点系统（Savepoint、Iinteractable接口）、画面后处理与灯光效果、数据结构及坐标保存加载（DataManager、iSaveable接口、Guid标记）。",date:"2026-02-07",readTime:"35 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 存储点及画面效果"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"存储点的创建，与宝箱相似，利用Trigger碰撞互动"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Savepoint : MonoBehaviour, Iinteractable
{
    [Header("广播")]
    public VoidEventSO LoadGameEvent;
    public SpriteRenderer spriteRenderer;
    public GameObject lightobj;
    public Sprite lightSprite;
    public Sprite darkSprite;
    public bool isDone;

    void OnEnable()
    {
        spriteRenderer.sprite = isDone ? lightSprite : darkSprite;
        lightobj.SetActive(isDone);
    }

    public void TriggerAction()
    {
        if(!isDone)
        {
            LightSprite();
        }
    }

    private void LightSprite()
    {
        spriteRenderer.sprite = lightSprite;
        isDone = true;
        lightobj.SetActive(true);
        LoadGameEvent.RaiseEvent();
        this.gameObject.tag = "Untagged";
    }
}`})}),s.jsx("h4",{className:"text-lg font-bold text-stone-800 mt-6 mb-3",children:"画面后处理以及灯光"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"打开管线渲染，添加部分特效"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 数据结构及坐标保存加载"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建datamanager管理，使用单例模式调用，观察者模式统一管理"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public interface iSaveable
{
    DataDefination GetDataID();
    void RegisterSaveData()
    {
        DataManager.instance.RegisterSaveData(this);
    }
    void UnRegisterSaveData()
    {
        DataManager.instance.UnRegisterSaveData(this);
    }
    void GetSaveData(Data data);
    void LoadData(Data data);
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用Guid标记"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DataDefination : MonoBehaviour
{
    public string ID;
    public PersistentTYpe persistentTYpe;

    private void OnValidate()
    {
        if(persistentTYpe == PersistentTYpe.ReadWrite)
        {
            if(ID == string.Empty)
                ID = System.Guid.NewGuid().ToString();
        }
        else
        {
            ID = string.Empty;
        }
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"在character里面使用接口"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

public class Character : MonoBehaviour, iSaveable
{
    private void OnEnable()
    {
        newGameEvent.OnEventRaised += NewGame;
        iSaveable saveable = this;
        saveable.RegisterSaveData();
    }

    private void OnDisable()
    {
        newGameEvent.OnEventRaised -= NewGame;
        iSaveable saveable = this;
        saveable.UnRegisterSaveData();
    }

    public DataDefination GetDataID()
    {
        return GetComponent<DataDefination>();
    }

    public void GetSaveData(Data data)
    {
        if(data.characterPosDict.ContainsKey(GetDataID().ID))
        {
            data.characterPosDict[GetDataID().ID] = transform.position;
            data.floatSavedData[GetDataID().ID + "health"] = this.currentHealth;
        }
        else
        {
            data.characterPosDict.Add(GetDataID().ID, transform.position);
            data.floatSavedData.Add(GetDataID().ID + "health", this.currentHealth);
        }
    }

    public void LoadData(Data data)
    {
        if (data.characterPosDict.ContainsKey(GetDataID().ID))
        {
            transform.position = data.characterPosDict[GetDataID().ID];
            this.currentHealth = data.floatSavedData[GetDataID().ID + "health"];
            OnHealthChange?.Invoke(this);
        }
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"统一管理"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

[DefaultExecutionOrder(-100)]
public class DataManager : MonoBehaviour
{
    [Header("事件监听")]
    public VoidEventSO saveDataEvent;
    public VoidEventSO loadDataEvent;

    public static DataManager instance;
    private Data saveData;
    private List<iSaveable> saveableList = new List<iSaveable>();

    void Awake()
    {
        if(instance == null)
            instance = this;
        else
            Destroy(this.gameObject);

        saveData = new Data();
    }

    private void Update()
    {
        if(Keyboard.current.rKey.wasPressedThisFrame)
        {
            Load();
        }
    }

    void OnEnable()
    {
        saveDataEvent.OnEventRaised += Save;
        loadDataEvent.OnEventRaised += Load;
    }

    void OnDisable()
    {
        saveDataEvent.OnEventRaised -= Save;
        loadDataEvent.OnEventRaised -= Load;
    }

    public void RegisterSaveData(iSaveable saveable)
    {
        if(!saveableList.Contains(saveable))
        {
            saveableList.Add(saveable);
        }
    }

    public void UnRegisterSaveData(iSaveable saveable)
    {
        if(saveableList.Contains(saveable))
        {
            saveableList.Remove(saveable);
        }
    }

    public void Save()
    {
        foreach (var saveable in saveableList)
        {
            saveable.GetSaveData(saveData);
        }
    }

    public void Load()
    {
        foreach (var saveable in saveableList)
        {
            saveable.LoadData(saveData);
        }
    }
}`})})]})},{id:"25",title:"Unity 2D 游戏开发入门：7 场景淡入淡出与主菜单",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇实现场景淡入淡出效果（DOTween插件、事件监听）、主菜单制作（TextMeshPro、字体更换、菜单按钮交互）。",date:"2026-01-26",readTime:"40 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 场景淡入淡出效果"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个白色画布铺满屏幕，然后修改透明值做渐变"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用事件监听的方式，用DOTween插件完成"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using DG.Tweening;
using UnityEngine;
using UnityEngine.UI;

public class FadeCanvas : MonoBehaviour
{
    [Header("事件监听")]
    public FadeEventSO fadeEvent;
    public Image fadeImage;

    private void OnEnable()
    {
        fadeEvent.OnEventRaised += OnFadeEvent;
    }

    private void OnDisable()
    {
        fadeEvent.OnEventRaised -= OnFadeEvent;
    }

    private void OnFadeEvent(Color target, float duration, bool fadeIn)
    {
        fadeImage.DOBlendableColor(target, duration);
    }
}`})}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[CreateAssetMenu(menuName = "Event/FadeEventSO")]
public class FadeEventSO : ScriptableObject
{
    public UnityAction<Color, float, bool> OnEventRaised;

    /// <summary>
    /// 逐渐变黑
    /// </summary>
    public void FadeIn(float duration)
    {
        RaiseEvent(Color.black, duration, true);
    }

    /// <summary>
    /// 逐渐变透明
    /// </summary>
    public void FadeOut(float duration)
    {
        RaiseEvent(Color.clear, duration, false);
    }

    public void RaiseEvent(Color target, float duration, bool fadeIn)
    {
        OnEventRaised?.Invoke(target, duration, fadeIn);
    }
}`})}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.AddressableAssets;
using UnityEngine.ResourceManagement.AsyncOperations;
using UnityEngine.ResourceManagement.ResourceProviders;
using UnityEngine.SceneManagement;

public class SceneLoad : MonoBehaviour
{
    public Transform playerTrans;
    public Vector3 firstPosition;
    public SceneLoadEventSO loadEventSO;
    public GameSceneSO firstLoadScene;

    [Header("广播")]
    public VoidEventSO afterSceneLoadedEvent;
    public FadeEventSO fadeEvent;

    private GameSceneSO currentLoadedScene;
    private GameSceneSO sceneToLoad;
    private Vector3 positionToGo;
    private bool fadeScreen;
    private bool isLoading;

    public float fadeDuration;

    void Start()
    {
        NewGame();
    }

    private void NewGame()
    {
        sceneToLoad = firstLoadScene;
        OnLoadRequestEvent(sceneToLoad, firstPosition, true);
    }

    void OnEnable()
    {
        loadEventSO.LoadRequestEvent += OnLoadRequestEvent;
    }

    void OnDisable()
    {
        loadEventSO.LoadRequestEvent -= OnLoadRequestEvent;
    }

    private void OnLoadRequestEvent(GameSceneSO locationToLoad, Vector3 posToGo, bool fadeScreen)
    {
        if(isLoading) return;
        isLoading = true;
        sceneToLoad = locationToLoad;
        positionToGo = posToGo;
        this.fadeScreen = fadeScreen;

        if(currentLoadedScene != null)
        {
            StartCoroutine(UnLoadPreviousScene());
        }
        else
        {
            LoadNewScene();
        }
    }

    private IEnumerator UnLoadPreviousScene()
    {
        if(fadeScreen)
        {
            fadeEvent.FadeIn(fadeDuration);
        }
        yield return new WaitForSeconds(fadeDuration);

        if(currentLoadedScene != null)
        {
            yield return currentLoadedScene.sceneReference.UnLoadScene();
        }
        //关闭人物
        playerTrans.gameObject.SetActive(false);

        LoadNewScene();
    }

    private void LoadNewScene()
    {
        var loadingOption = sceneToLoad.sceneReference.LoadSceneAsync(LoadSceneMode.Additive, true);
        loadingOption.Completed += OnLoadCompleted;
    }

    /// <summary>
    /// 场景加载完毕后
    /// </summary>
    private void OnLoadCompleted(AsyncOperationHandle<SceneInstance> handle)
    {
        currentLoadedScene = sceneToLoad;
        playerTrans.position = positionToGo;
        playerTrans.gameObject.SetActive(true);

        if(fadeScreen)
        {
            fadeEvent.FadeOut(fadeDuration);
        }
        isLoading = false;
        afterSceneLoadedEvent.RaiseEvent();
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 主场景制作"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"先做好场景，主要实现：主场景的标题和可互动button，在Menu取消不必要的UI，在Menu人物停止移动"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"TextMeshPro的使用"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"由于无法使用中文所以更换字体为得意黑"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"对字体进行位置处理，渐变处理，颜色选择，大小选择，呈现自己想要的效果"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用组件用于对齐"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为新场景创建SO"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"对人物进行控制，在Menu无法操作"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class PlayerController : MonoBehaviour
{
   [Header("事件监听")]
   public SceneLoadEventSO loadEvent;
   public VoidEventSO afterSceneLoadedEvent;

   void OnEnable()
   {
       inputControl.Enable();
       loadEvent.LoadRequestEvent += OnLoadEvent;
       afterSceneLoadedEvent.OnEventRaised += OnAfterSceneLoadedEvent;
   }

   void OnDisable()
   {
       inputControl.Disable();
       loadEvent.LoadRequestEvent -= OnLoadEvent;
       afterSceneLoadedEvent.OnEventRaised -= OnAfterSceneLoadedEvent;
   }

   private void OnLoadEvent(GameSceneSO scene, Vector3 pos, bool fade)
   {
       // 触发切换时禁用控制
       inputControl.Disable();
   }

   private void OnAfterSceneLoadedEvent()
   {
       // 场景加载完成后启用控制
       inputControl.Enable();
   }
}`})})]})},{id:"24",title:"Unity 2D 游戏开发入门：6 场景互动与传送系统",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇实现人物可互动标识（E按钮提示）、场景互动逻辑（箱子开启、Iinteractable接口）、场景管理和切换系统（传送点、Addressables加载场景）。",date:"2025-12-23",readTime:"45 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 人物可互动标识"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"场景的管理，新建一个常用的场景来放置人物相机等等，其他的场景转换即可"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/a5d970b53bab4a4895be3c542115902a.png",alt:"场景管理",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"制作一个箱子然后给他一个TAG，用于后序激活"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/6637dff1c2804ff0a924de906b1d8372.png",alt:"箱子TAG",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"制作一个字母E放在play下，然后为他制作动画，记得取消勾选，在平时不出现。位置重置放在玩家头顶。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7d1032658080472dbf98f4ec418323f2.png",alt:"E按钮动画",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"在新建一个Sign用来挂载碰撞体和代码"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d48ddeda3e824e0f8d3198733215a4a5.png",alt:"Sign组件",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"代码实现走到interactable就显示E播放动画，走开就取消，并且方向不改变"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Sign : MonoBehaviour
{

    private Animator anim;
    public GameObject E_Button;
    public Transform playerTrans;
    private bool canPress;



    private void Awake()
    {
        anim = E_Button.GetComponent<Animator>();
    }

    private void Update()
    {
        E_Button.SetActive(canPress);
        E_Button.transform.localScale = playerTrans.localScale;
    }
    private void OnTriggerStay2D(Collider2D other)
    {
        if(other.CompareTag("interactable"))
        {
            canPress = true;
        }
    }
    private void OnTriggerExit2D(Collider2D other)
    {
        canPress = false;
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 场景互动的逻辑实现"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建脚本chest以及Linteractable用于制作接口"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7d2154b4e245471fb196ad7af32aa2bf.png",alt:"接口创建",className:"w-full md:w-2/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"到箱子能打开，改变图片，离开箱子提示消失"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using TMPro;
using UnityEditor.VersionControl;
using UnityEngine;

public class Chest : MonoBehaviour,Iinteractable
{
    private SpriteRenderer spriteRenderer;
    public Sprite openSprite;
    public Sprite closeSprite;
    public bool isDone;
    private void Awake()
    {
        spriteRenderer = GetComponent<SpriteRenderer>();
    }
    void OnEnable()
    {
        spriteRenderer.sprite = isDone ? openSprite : closeSprite;

    }
    public void TriggerAction()
    {
        if(!isDone)
        {
            OpenSprite();
        }
    }



    private void OpenSprite()
    {
        spriteRenderer.sprite = openSprite;
        isDone = true;
        this.gameObject.tag = "Untagged";
    }
}`})}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public interface Iinteractable
{
    void TriggerAction();
}`})}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using System.Drawing.Printing;
using UnityEngine;
using UnityEngine.InputSystem;

public class Sign : MonoBehaviour
{

    private PlayerInputControl playerInput;
    private Animator anim;
    public GameObject E_Button;
    public Transform playerTrans;
    private Iinteractable targetItem;
    private bool canPress;



    private void Awake()
    {
        anim = E_Button.GetComponent<Animator>();
        playerInput = new PlayerInputControl();
        playerInput.Enable();
    }

    private void Update()
    {
        E_Button.SetActive(canPress);
        E_Button.transform.localScale = playerTrans.localScale;
    }
    private void OnEnable()
    {
        playerInput.Gameplay.Confim.started += OnConfirm;
    }

    private void OnConfirm(InputAction.CallbackContext context)
    {
        if(canPress)
        {
            targetItem.TriggerAction();
        }
    }


    private void OnTriggerStay2D(Collider2D other)
    {
        if(other.CompareTag("interactable"))
        {
            canPress = true;
            targetItem = other.GetComponent<Iinteractable>();
        }
    }
    private void OnTriggerExit2D(Collider2D other)
    {
        canPress = false;
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为箱子挂载之前写过的声音脚本并在OpenSprite加上，即可实现开箱声音"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:"GetComponent<AudioDefination>().PlayAudioClip();"})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/475835644d6c4fd4926d5bb21e9f5334.png",alt:"音效挂载",className:"w-full md:w-2/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三 场景管理和切换"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"场景中创建一个空物体为他挂载box2D，和脚本,（记得勾选tag）"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e52da4c1c0e441f2ae29e49b13740aaa.png",alt:"传送点",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"在这里获取到去下一个地方的坐标后输入"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TeleportPoint : MonoBehaviour, Iinteractable
{
    public Vector3 postionToGo;
    public void TriggerAction()
    {
       Debug.Log("chuansong");
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建空物体和脚本"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/79e91e86e33c47459fc71520ebf7ab17.png",alt:"场景加载器",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"下载包"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/17151a350aa1480d8881526f2f65018a.png",alt:"Addressables",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"打开窗口，并创建"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/cd5d2941b5be4e7caae1616da0cb8cbc.png",alt:"Addressables窗口",className:"w-full md:w-2/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"在场景里面打勾加载进来"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/17f85d1d087649bbaa05fd901263381b.png",alt:"场景加载",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"预制体，在修改后所有的预制体都会改变"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1623cf256a6a4c0191e5d9b6801b1616.png",alt:"预制体",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"拖拽进来进入打包器"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/cb7381f20fe54c449da584f32fa85fca.png",alt:"打包器",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建脚本"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/342184a659f64e34b7dba7a56b132e2c.png",alt:"脚本创建",className:"w-full md:w-2/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using UnityEngine;

[CreateAssetMenu(menuName = "Event/SceneLoadEventSO")]
public class SceneLoadEventSO : ScriptableObject
{

}`})}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using UnityEngine;
using UnityEngine.AddressablesAssets;
[CreateAssetMenu(menuName = "Game Scene/GameSceneSO")]
public class GameSceneSO : ScriptableObject
{
    public AssetReference sceneReference;
}`})})]})},{id:"23",title:"Unity 2D 游戏开发入门：5 摄像机跟随与音效系统",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇实现Cinemachine摄像机跟随与攻击抖动效果，搭建完整的音效系统（BGM与音效分离），以及水（死亡）和荆棘（掉血）的环境伤害逻辑。",date:"2025-12-19",readTime:"40 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 摄像机跟随及攻击抖动实现"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Cinemachine插件"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/6be3a08b1c7f4c5bb4aaa41e744c4a08.png",alt:"Cinemachine插件",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bf6deb92924a4b589b818a2743242373.png",alt:"Cinemachine组件",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"人物挂载并且设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1f1024c626644ec09f04633c5757b298.png",alt:"人物挂载",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"底下两个组件一个是消除残影的，一个是用来让相机在一个范围内移动"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7f6fcd90ce124c708df0fef67ce6782d.png",alt:"相机组件",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个新的用于框定场景的bounds并给上面的confiner"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/cad9390e9fa14d67b72221aba43711f9.png",alt:"场景bounds",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"新建脚本用于摄像机控制"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using Cinemachine;
using UnityEngine;

public class CameraControl : MonoBehaviour
{
    private CinemachineConfiner2D confiner2D;
    public CinemachineImpulseSource impulseSource;

    private void Awake()
    {
        confiner2D = GetComponent<CinemachineConfiner2D>();
    }

    void Start()
    {
        GetNewCameraBounds();
    }
    private void GetNewCameraBounds()
    {
        var obj = GameObject.FindGameObjectWithTag("Bounds");
        if(obj == null)
            return;

        confiner2D.m_BoundingShape2D = obj.GetComponent<Collider2D>();

        confiner2D.InvalidateCache();
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"新建shake用于摄像机的震动"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/9934dcc381114a58bc95ccfb2d200d93.png",alt:"摄像机震动",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用监听创建脚本VoidEventSO"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using UnityEngine;

[CreateAssetMenu(menuName = "Event/VoidEventSO")]
public class VoidEventSO : ScriptableObject
{

}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"给人物受伤时挂载(给🐗挂增加打击感)"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/6cacc9d128314a1fac704d875ee08904.png",alt:"受伤挂载",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/94b09eebb3d249998b331622c7e67cb4.png",alt:"野猪挂载",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 音源设置和音效播放"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"音乐资源"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:[s.jsx("a",{href:"https://maou.audio/",target:"_blank",rel:"noopener noreferrer",className:"text-pink-600 hover:underline",children:"魔王魂 | 無料で使える森田交一の音楽"}),"（非常厉害的免费音乐魔王魂）"]}),s.jsx("p",{className:"mb-4 text-stone-700",children:s.jsx("a",{href:"https://assetstore.unity.com/packages/audio/sound-fx/free-casual-game-sfx-pack-54116",target:"_blank",rel:"noopener noreferrer",className:"text-pink-600 hover:underline",children:"FREE Casual Game SFX Pack | 音频 音效 | Unity Asset Store"})}),s.jsx("p",{className:"mb-4 text-stone-700",children:s.jsx("a",{href:"https://assetstore.unity.com/packages/audio/music/free-casual-music-pack-242591",target:"_blank",rel:"noopener noreferrer",className:"text-pink-600 hover:underline",children:"Free Casual Music Pack | 音频 音乐 | Unity Asset Store"})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"下载"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/85ed559db0c34922b8fefd9de353fb50.png",alt:"下载资源",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"素材文件全部导入，背景音乐导入一个"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4177f05cd8a24e6cb2b65060e63aef32.png",alt:"导入素材",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"组件Source像音箱，Listener像耳朵"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/da968d67c0ab45818176b1f3ed379a23.png",alt:"音源组件",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"一个用来放bgm一个用来放音效(记得勾选loop循环bgm,还有最下面选择2D)"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5c347c8fff4c414683284beed49c761d.png",alt:"BGM设置",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"新建代码并把音乐赋值"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoBehaviour
{
    public AudioSource BGMSource;

    public AudioSource FXSource;



}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"新建一个事件"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using UnityEngine;
using UnityEngine.Events;

[CreateAssetMenu(menuName ="Event/playAudioEventSO")]
public class PlayAudioEventSO : ScriptableObject
{
  public UnityAction<AudioClip> OnEventRaised;

  public void RaiseEvent(AudioClip audioClip)
    {
        OnEventRaised?.Invoke(audioClip);
    }

}`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b6ce7222693f40bbb69336e5f1cea37a.png",alt:"音频事件",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"并且新建一个AudioDefination用来管理，挂载到Attack123上"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/46f48b4177894398b05b29f3d46bd041.png",alt:"AudioDefination",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AudioDefination : MonoBehaviour
{
    public PlayAudioEventSO playAudioEvent;
    public AudioClip audioClip;
    public bool playOnEnable;

    private void Onable()
    {
        if(playOnEnable)
            PlayAudioClip();
    }

    public void PlayAudioClip()
    {
        playAudioEvent.OnEventRaised(audioClip);
    }

}`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/95ea7a4753b44aa0bccac2da1be059ba.png",alt:"音效挂载",className:"w-full md:w-2/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"完善AudioManager"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoBehaviour
{
    [Header("事件监听")]
    public PlayAudioEventSO FXEvent;
    public PlayAudioEventSO BGMEvent;

    public AudioSource BGMSource;

    public AudioSource FXSource;

    void OnEnable()
    {
        FXEvent.OnEventRaised += OnFXEvent;
        BGMEvent.OnEventRaised += OnBGMEvent;
    }

    void OnDisable()
    {
        FXEvent.OnEventRaised -= OnFXEvent;
        BGMEvent.OnEventRaised -= OnBGMEvent;
    }

    private void OnBGMEvent(AudioClip clip)
    {
        BGMSource.clip = clip;
        BGMSource.Play();
    }

    private void OnFXEvent(AudioClip clip)
    {
        FXSource.clip = clip;
        FXSource.Play();
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"用于播放BGM，要注意上面对钩"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/baab6e1582494f148473026c57cf71ac.png",alt:"BGM播放",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"打开窗口"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/13375db201e84dbfbb515aaa1b286a94.png",alt:"音频窗口",className:"w-full md:w-2/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ee7457fa1e0143fc98d77c4f646935e0.png",alt:"音频混音器",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建子音轨并把值付给他"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5bf30eb00243473ebe5298caf2001a1e.png",alt:"子音轨",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三 水和荆棘的逻辑实现"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"制作人物碰到水会死亡，喷到荆棘会掉血的逻辑"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建两个画布，为front层，挂载Tilemap2D并勾选IsTrigger，tag设置为新的Water"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/0d973b633b544e40a20ed42e453e4c37.png",alt:"水Tilemap",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/49a35f5e7a38452c98d72318754a2794.png",alt:"Water标签",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class Character : MonoBehaviour
{

    private void OnTriggerStay2D(Collider2D other)
    {
        if(other.CompareTag("Water"))
        {
            currentHealth = 0;
            OnHealthChange?.Invoke(this);
            OnDie?.Invoke();
        }
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"藤蔓逻辑就是挂载一个Attack脚本然后有伤害"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"绘制好两个场景就ok了"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c9e94b10eb38455d83bd23cc96cb4d6c.png",alt:"场景1",className:"w-full md:w-4/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c1347b5f073d451dae42d94674026986.png",alt:"场景2",className:"w-full md:w-2/5 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"})]})},{id:"22",title:"Unity 2D 游戏开发入门：4 UI - 人物状态栏与血量更新",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇实现游戏UI中的人物状态栏，包括血条显示、血量百分比更新逻辑，以及使用ScriptableObject事件系统实现数据与UI的解耦。",date:"2025-12-15",readTime:"35 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 UI - 创建人物状态栏"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建canvas"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/111055fe1f4e44eeb7e9dcc692f6b0c6.png",alt:"创建canvas",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"切换自己创建的控制器"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/94aff2b153bc4ff2ad0aa4d43cbae219.png",alt:"切换控制器",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"切换比例"}),s.jsxs("div",{className:"flex gap-4 mb-6",children:[s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/59ac487251d6405b8090c15c1c208f4d.png",alt:"比例1",className:"w-1/3 h-auto rounded-xl shadow-lg border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3bde238a3c954fbd9c34339ca362165e.png",alt:"比例2",className:"w-2/3 h-auto rounded-xl shadow-lg border border-stone-200"})]}),s.jsx("p",{className:"mb-4 text-stone-700",children:"通过Alt控制位置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d6766ac585694cb286d3ab129b57b7aa.png",alt:"Alt控制位置",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"裁切ui设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f0df79300ff34d178280c10d5f6d3a93.png",alt:"裁切UI",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"自动裁切并手动处理，然后再为需要的命名"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"设置为固定比例，修改大小和位置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8c5f454c7a704541a902eac31f92a5a0.png",alt:"固定比例",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"复制一份并且注意层级，调整大小，修改填充设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8a419d2302f2494ea53a41b5770beaac.png",alt:"复制调整",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d7201aaf4f6c43fe95525d1377e06b21.png",alt:"填充设置",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"这里就是一些个性化的东西，裁切头像就是找到一个人物照片之后使用Mask把底下的face切割后移动"}),s.jsxs("div",{className:"flex gap-4 mb-6",children:[s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f6f1e3bc59a240dcbefa71edaf1a35ab.png",alt:"头像裁切1",className:"w-1/2 h-auto rounded-xl shadow-lg border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/04558699201d4862a67d4a9559c937bd.png",alt:"头像裁切2",className:"w-1/2 h-auto rounded-xl shadow-lg border border-stone-200"})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 UI - 血量更新逻辑的实现"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建脚本PlayStatBar，利用UI里面的Fill Amount把血量百分比值给他来体现血量的变化"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1ae97b63f7964a3a89331fb8c0307395.png",alt:"PlayStatBar",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayStatBar : MonoBehaviour
{
    public Image healthImage;
    public Image healthDelayImage;
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"把组件给他"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/49732494c1564e8fa70419b224c130ad.png",alt:"组件设置",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Event事件 - 创建一个脚本"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7a2a4af330f3402783386aa3a270c526.png",alt:"Event脚本",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Events;

[CreateAssetMenu(fileName ="Event/CharacterEventSO")]
public class CharacterEventSO : ScriptableObject
{
    public UnityAction<Character> OnEventRaised;

    public void RaiseEvent(Character character)
    {
        OnEventRaised?.Invoke(character);
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"在character里面加上"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:"public UnityEvent<Character> OnHealthChange;"})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建并调用characterEventSO"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5e5a1ba85a1a411abe79f488fd54aa13.png",alt:"CharacterEventSO",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"在UI脚本里创建UIManager统一管理"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class UIManager : MonoBehaviour
{
    public PlayStatBar playStatBar;
    [Header("事件监听")]
    public CharacterEventSO healthEvent;

    void OnEnable()
    {
        healthEvent.OnEventRaised += OnHealthEvent;
    }

    void OnDisable()
    {
        healthEvent.OnEventRaised -= OnHealthEvent;
    }

    private void OnHealthEvent(Character character)
    {
        var persentage = character.currentHealth / character.maxHealth;
        playStatBar.OnHealthChange(persentage);
    }
}`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c3d369b5a0bd41bb8296f18bff130036.png",alt:"UIManager",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"character里面添加逻辑"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`private void Start()
{
    currentHealth = maxHealth;
    OnHealthChange?.Invoke(this);
}

public void TakeDamage(Attack attacker)
{
    if(invulnerable)
        return;
    if(currentHealth - attacker.damage >0)
    {
        currentHealth -= attacker.damage;
        TriggrInvulnerable();

        OnTakeDamage?.Invoke(attacker.transform);
    }
    else
    {
        currentHealth = 0;
        OnDie?.Invoke();
    }

    OnHealthChange?.Invoke(this);
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"红色血条跟随变化"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class PlayStatBar : MonoBehaviour
{
    public Image healthImage;
    public Image healthDelayImage;

    void Update()
    {
        if(healthDelayImage.fillAmount > healthImage.fillAmount)
        {
            healthDelayImage.fillAmount -= Time.deltaTime;
        }
    }

    /// <summary>
    /// 接受Health的变化百分比
    /// </summary>
    /// <param name="persentage">百分比：Current/Max</param>

    public void OnHealthChange(float persentage)
    {
        healthImage.fillAmount = persentage;
    }
}`})}),s.jsx("p",{className:"mt-8 text-stone-600 italic",children:"这部分学的很不好，之后老老实实学c#吧🌀👃🌀"})]})},{id:"21",title:"Unity 2D 游戏开发入门：3.2 敌人AI - 有限状态机 (FSM)",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇引入设计模式——有限状态机 (Finite State Machine)，通过抽象类重构敌人逻辑，实现野猪的巡逻 (Patrol) 与追击 (Chase) 状态的平滑切换。",date:"2025-12-12",readTime:"40 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、设计模式 - 有限状态机 & 抽象类"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["为了更好地管理敌人复杂的行为（巡逻、追击、受伤、死亡），我们引入状态机模式。首先创建抽象基类 ",s.jsx("code",{children:"BaseState"}),"。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4e92a45128fd4cc0b78ff52f14d8b776.png",alt:"Script Creation",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public abstract class BaseState 
{
    protected Enemy currentEnemy;
    public abstract void OnEnter(Enemy enemy);
    public abstract void LogicUpdate();
    public abstract void PhysicsUpdata();
    public abstract void OnExit();
}`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["创建野猪的巡逻状态 ",s.jsx("code",{children:"BoarPatrolState"})," 继承自该抽象类，并在 ",s.jsx("code",{children:"Boar"})," 类中进行初始化。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class Boar : Enemy
{
    protected override void Awake()
    {
        base.Awake();
        PatrolState = new BoarPatrolState();
        chaseState = new BoarChaseState();
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、状态切换与管理"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在 ",s.jsx("code",{children:"Enemy"})," 基类中实现状态切换逻辑 ",s.jsx("code",{children:"SwitchState"}),"。使用 C# 的模式匹配语法来简化 switch 语句。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public void SwitchState(NPCState state)
    {
        var newState = state switch
        {
            NPCState.Patrol => PatrolState,
            NPCState.Chase => chaseState,
            _ => null
        };

        currentState.OnExit();
        currentState = newState;
        currentState.OnEnter(this);
    }`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["同时在 ",s.jsx("code",{children:"Update"})," 和 ",s.jsx("code",{children:"FixedUpdate"})," 中调用当前状态的更新方法。"]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、追击状态 (Chase State) 实现"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在 ",s.jsx("code",{children:"Enemy"})," 中添加 ",s.jsx("code",{children:"FoundPlayer"})," 方法，利用 ",s.jsx("code",{children:"Physics2D.BoxCast"})," 发射射线检测玩家。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public bool FoundPlayer()
    {
        return Physics2D.BoxCast(transform.position + (Vector3)centerOffset, checkSize, 0, faceDir, checkDistance, attackLayer);
    }`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在 ",s.jsx("code",{children:"BoarPatrolState"})," (巡逻) 中检测到玩家后，切换到 ",s.jsx("code",{children:"Chase"})," 状态。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public override void LogicUpdate()
    {
        if(currentEnemy.FoundPlayer())
        {
            currentEnemy.SwitchState(NPCState.Chase);
        }
        // ... 原有的巡逻撞墙转向逻辑
    }`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["编写 ",s.jsx("code",{children:"BoarChaseState"}),"。逻辑：进入状态时加速并播放跑动动画；如果丢失玩家视野 (Lost Time)，则倒计时结束后切回巡逻。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c7f2207512cc413192f09be76fbcd375.png",alt:"Chase Logic",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public override void LogicUpdate()
    {
        // 丢失目标计时逻辑
        if(currentEnemy.lostTimeCounter <= 0)
        {
            currentEnemy.SwitchState(NPCState.Patrol);
            return;
        }

        // 撞墙处理：追击时不等待，直接转身
        if(!currentEnemy.physicsCheck.isGround || (currentEnemy.physicsCheck.touchLeftWall && currentEnemy.faceDir.x < 0) || (currentEnemy.physicsCheck.touchRightWall && currentEnemy.faceDir.x > 0))
        {
            currentEnemy.transform.localScale = new Vector3(currentEnemy.faceDir.x, 1, 1);
        }
    }`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四、Bug 修复与细节完善"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"1. 地面检测方向修正"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["之前 ",s.jsx("code",{children:"PhysicsCheck"})," 检测地面时没有考虑人物翻转，导致转身后检测点错误。需要乘上 ",s.jsx("code",{children:"transform.localScale"}),"。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:"   isGround = Physics2D.OverlapCircle((Vector2)transform.position + bottomOffset * transform.localScale.x, checkReduis, groundLayer);"})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/29969a949c6243e195b9edc84d7eed01.png",alt:"Gizmos Check",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"2. 受击停止移动"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为了防止野猪在受伤被击退时，底层的移动逻辑（Move）依然在施加力导致“滑步”或无法被击退，需要在受伤时将 X 轴速度置零。"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public void OnTakeDamage(Transform attackTrans)
    {
        // 关键：受击瞬间停止原有移动速度
        rb.velocity = new Vector2(0, rb.velocity.y); 
        // ... 后续的击退力逻辑
    }`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d772035b3c604a99b8c29d0e417357b1.png",alt:"Hit Result",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"})]})},{id:"21",title:"Unity 2D 游戏开发入门：3.1 敌人AI逻辑与状态管理",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇以“野猪”为例，讲解如何构建敌人的基类与子类，实现自动巡逻、撞墙检测、计时器等待、受击击退以及死亡销毁的完整 AI 流程。",date:"2025-12-10",readTime:"30 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、野猪 - 基本的移动逻辑和动画"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["创建基类 ",s.jsx("code",{children:"Enemy"})," 和子类 ",s.jsx("code",{children:"Boar"}),"。子类重写基类的移动方法。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class Boar : Enemy
{
    public override void Move()
    {
        base.Move();
        anim.SetBool("Walk", true);
    }
}`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在基类 ",s.jsx("code",{children:"Enemy"})," 中定义基本参数和移动逻辑："]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class Enemy : MonoBehaviour
{
    Rigidbody2D rb;
    protected Animator anim;

    [Header("基本参数")]
    public float normalSpeed;
    public float chaseSpeed;
    public float currentSpeed;
    public Vector3 faceDir;

    private void Awake()
    {
        rb = GetComponent<Rigidbody2D>();
        anim = GetComponent<Animator>();
        currentSpeed = normalSpeed;
    }

    void Update()
    {
        faceDir = new Vector3(-transform.localScale.x, 0, 0);
    }

    private void FixedUpdate()
    {
        Move();
    }

    public virtual void Move()
    {
        rb.velocity = new Vector2(currentSpeed * faceDir.x * Time.deltaTime, rb.velocity.y);
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"制作野猪的动画裁切，图片设置，逻辑设置，利用 Walk 和 Run 两个 bool 值更改。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3d75499b74cb416290b847bace6f6361.png",alt:"Boar Animation 1",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1bde06233f4c4fb3a0fcf86a31302e5f.png",alt:"Boar Animation 2",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、野猪 - 撞墙判定和等候计时"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["首先要给敌人挂载 ",s.jsx("code",{children:"PhysicsCheck"})," 检测地面和墙面。更新脚本以包含左右墙壁的检测。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class PhysicsCheck : MonoBehaviour
{
    private CapsuleCollider2D coll;
    
    [Header("检测参数")]
    public bool manual; // 是否手动设置offset
    public Vector2 rightomOffset;
    public Vector2 leftmOffset;
    // ... 其他变量

    [Header("状态")]
    public bool touchLeftWall;
    public bool touchRightWall;

    public void Check()
    {
       isGround = Physics2D.OverlapCircle((Vector2)transform.position + bottomOffset, checkReduis, groundLayer);
       touchLeftWall = Physics2D.OverlapCircle((Vector2)transform.position + leftmOffset, checkReduis, groundLayer);
       touchRightWall = Physics2D.OverlapCircle((Vector2)transform.position + rightomOffset, checkReduis, groundLayer);
    }

    void OnDrawGizmosSelected()
    {
        Gizmos.DrawWireSphere((Vector2)transform.position + bottomOffset, checkReduis);
        Gizmos.DrawWireSphere((Vector2)transform.position + rightomOffset, checkReduis);
        Gizmos.DrawWireSphere((Vector2)transform.position + leftmOffset, checkReduis);
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"注意要把碰撞体的 Physics shape 修改一下变成方形，避免圆形底部导致的检测误差。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/29969a949c6243e195b9edc84d7eed01.png",alt:"Physics Shape",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["最后在 ",s.jsx("code",{children:"Enemy"})," 中实现撞墙转向逻辑。加入",s.jsx("strong",{children:"计时器"}),"，让敌人在撞墙后等待一段时间再转身。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    [Header("计数器")]
    public float waitTime;
    public float waitTimeCounter;
    public bool wait;

    void Update()
    {
        faceDir = new Vector3(-transform.localScale.x, 0, 0);
        
        // 撞墙检测
        if((physicsCheck.touchLeftWall && faceDir.x < 0) || (physicsCheck.touchRightWall && faceDir.x > 0))
        {
            wait = true;
            anim.SetBool("Walk", false);
        }
        
        TimeCounter();
    }

    public void TimeCounter()
    {
        if(wait)
        {
            waitTimeCounter -= Time.deltaTime;
            if (waitTimeCounter <= 0 )
            {
                wait = false;
                waitTimeCounter = waitTime;
                // 转身
                transform.localScale = new Vector3(faceDir.x, 1, 1);
            }
        }
    }`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、野猪 - 受伤及死亡的逻辑和动画"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"制作野猪受伤和死亡的动画。逻辑图如下："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ea977f65f1594a4283c15aac58ee0787.png",alt:"Animator Logic",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"记得取消 dead 和 hurt 动画里的 Loop Time。"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"受击逻辑"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"受击时面向攻击者，并产生击退效果。使用协程 (Coroutine) 来处理受击停顿。"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public void OnTakeDamage(Transform attackTrans)
    {
        attacker = attackTrans;

        // 转身面向攻击者
        if(attackTrans.position.x - transform.position.x > 0)
            transform.localScale = new Vector3(-1, 1, 1);
        if(attackTrans.position.x - transform.position.x < 0)
            transform.localScale = new Vector3(1, 1, 1);

        isHurt = true;
        anim.SetTrigger("hurt"); 
        
        // 击退
        Vector2 dir = new Vector2(transform.position.x - attackTrans.position.x, 0).normalized;
        StartCoroutine(OnHurt(dir));
    }

    private IEnumerator OnHurt(Vector2 dir)
    {
        rb.AddForce(dir * hurtFouce, ForceMode2D.Impulse);
        yield return new WaitForSeconds(0.45f);
        isHurt = false;
    }`})}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"死亡逻辑"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["野猪死后会触发 ",s.jsx("code",{children:"OnDie"}),'，设置死亡动画。为了避免死后还能产生碰撞，需要将 Layer 修改为 "Ignore Raycast" 或专门的 Dead 层。']}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public void OnDie()
    {
        gameObject.layer = 2; // Ignore Raycast Layer
        anim.SetBool("dead", true);
        isDead = true;
    }

    public void DestroyAfterAnimation()
    {
        Destroy(this.gameObject);
    }`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["最后，在动画的最后一帧添加 Animation Event，调用 ",s.jsx("code",{children:"DestroyAfterAnimation"})," 方法来销毁物体。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3df075a978de42c1aad27990f61e648c.png",alt:"Animation Event",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"})]})},{id:"20",title:"Unity 2D 游戏开发入门：2.3 战斗系统与Combo攻击",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇讲解角色属性与伤害计算、受击与死亡动画逻辑、实现三段式Combo攻击以及精确的攻击判定框设置。",date:"2025-12-07",readTime:"35 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、人物属性及伤害计算"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"将野猪素材进行修改设置与裁剪，挂载组件并修改碰撞模型。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/0919e4b9e67a4dba9f16586c741e2392.png",alt:"Boar Sprite",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1714c60fa75f46acac31bf80b91ffc4a.png",alt:"Collider Setup",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为人物创建新的图层 (Layer) 制作触发器，设置矩阵使野猪碰撞玩家，但敌人之间不互撞。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/87e2d9559b0e4e5e8ab7552dd9031baa.png",alt:"Layer Matrix",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["新建脚本 ",s.jsx("code",{children:"Character.cs"}),"，同时挂给野猪和玩家，用于管理血量和无敌时间。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using UnityEngine;
using UnityEngine.Events;

public class Character : MonoBehaviour
{
    [Header("基本属性")]
    public float maxHealth;
    public float currentHealth;
    
    [Header("受伤无敌")]
    public float invulnerableDuration;
    private float invulnerableCounter;
    public bool invulnerable;

    public UnityEvent<Transform> OnTakeDamage;
    public UnityEvent OnDie;

    void Start()
    {
        currentHealth = maxHealth;
    }

    private void Update()
    {
        if(invulnerable)
        {
            invulnerableCounter -= Time.deltaTime;
            if(invulnerableCounter <= 0)
            {
                invulnerable = false;
            }
        }
    }

    public void TakeDamage(Attack attacker)
    {
        if(invulnerable) return;

        if(currentHealth - attacker.damage > 0)
        {
            currentHealth -= attacker.damage;
            TriggrInvulnerable();
            OnTakeDamage?.Invoke(attacker.transform);
        }
        else
        {
            currentHealth = 0;
            OnDie?.Invoke();
        }
    }

    private void TriggrInvulnerable()
    {
        if(!invulnerable)
        {
            invulnerable = true;
            invulnerableCounter = invulnerableDuration;
        }
    }
}`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["新建脚本 ",s.jsx("code",{children:"Attack.cs"}),"，挂载在攻击判定体上。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class Attack : MonoBehaviour
{
    public int damage;
    public float attackRange;
    public float attackRate;

    private void OnTriggerStay2D(Collider2D other)
    {
        other.GetComponent<Character>()?.TakeDamage(this);
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、受伤和死亡的逻辑和动画"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建受伤（Hurt）和死亡（Dead）动画，注意受伤动画设置为叠加层 (Override Layer) 并调整权重。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/422ead04a7cb4b4799eab40dae7d7fa7.png",alt:"Animation Layers",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/186e80b829ff40ebaa3193fa13aa0fc8.png",alt:"Hurt Animation",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["使用 ",s.jsx("strong",{children:"UnityEvent"})," 响应受伤事件，比如播放动画、击退效果等。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/79d30ac1ba6545c2a3022793000f1e42.png",alt:"Unity Events",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在 ",s.jsx("code",{children:"PlayerController.cs"})," 中实现受击击退逻辑："]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public void GetHurt(Transform attacker)
    {
        isHurt = true;
        rb.velocity = Vector2.zero;
        Vector2 dir = new Vector2((transform.position.x - attacker.position.x), 0).normalized;
        rb.AddForce(dir * hurtFouce, ForceMode2D.Impulse);
    }`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["为了解决 ",s.jsx("code",{children:"isHurt"})," 一直为 true 的问题，在 Animator 的 State Machine Behaviour 中创建一个脚本，在退出状态时重置布尔值。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/659fb6c9cee24fc69a6a522ac5e3c0a9.png",alt:"State Machine Behaviour",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、三段攻击动画的实现"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["制作三段攻击动画，并创建一个新的 Attack Layer。利用 ",s.jsx("code",{children:"isAttack"}),", ",s.jsx("code",{children:"attack"})," (Trigger), ",s.jsx("code",{children:"combo"})," (Int) 参数控制流程。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/a23705094394409f867648213592baba.png",alt:"Combo State Machine",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"逻辑：攻击动画播放时，如果在结束前再次按下攻击键，则过渡到下一段攻击，否则结束攻击状态。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/487a90aef1e4476aa636aeb4af794654.png",alt:"Combo Transitions",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在 ",s.jsx("code",{children:"PlayerController.cs"})," 中添加输入监听："]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    private void PlayerAttack(InputAction.CallbackContext context)
    {
        playerAnimation.PlayAttack(); 
        isAttack = true;
    }`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["记得在 Attack 动画状态上挂载脚本，用于在动画结束时重置 ",s.jsx("code",{children:"isAttack"})," 状态，防止卡死。"]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四、实装攻击判定"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["为 Player 添加子物体作为判定框，挂载 Collider2D 和 ",s.jsx("code",{children:"Attack"})," 脚本，记得勾选 Is Trigger。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/6e7a941fd1e941b581b7f949d41553a2.png",alt:"Attack Hitbox",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在 Animation 窗口中，通过修改 Box Collider 2D 的 ",s.jsx("strong",{children:"Enabled"})," 属性，实现只在挥刀的关键帧激活碰撞体。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/aa4d0993686045c6978bb76a5f1c30b1.png",alt:"Animation Property",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"修复滑步与物理材质"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为了解决攻击时人物还能滑动的问题，以及平时不挂墙（光滑材质）但跳跃需要摩擦力的问题，动态切换 Physics Material。"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    [Header("物理材质")]
    public PhysicsMaterial2D normal;
    public PhysicsMaterial2D wall;

    void FixedUpdate()
    {
        // 攻击或受伤时禁止移动
        if(!isHurt && !isAttack)
            Move();
    }

    public void CheckState()
    {
        // 在地上传递普通材质（有摩擦），在空中传递墙壁材质（无摩擦）
        coll.sharedMaterial = physicsCheck.isGround ? normal : wall;
    }`})})]})},{id:"19",title:"Unity 2D 游戏开发入门：2.2物理检测与动画状态机",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇详细讲解如何编写 PhysicsCheck 脚本进行地面检测、使用 Gizmos 可视化调试、创建角色动画状态机以及使用 Blend Tree 实现跳跃动画的平滑过渡。",date:"2025-12-03",readTime:"30 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、物理环境监测及 Gizmos 绘制"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为了进行碰撞监测，我们需要编写一个新的脚本，敌人和角色都需要使用这个功能。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1eef7da8f68e4e8489b506ca86ff8627.png",alt:"Create Layer",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建并设置图层 (Layer)。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/52b4532422bf4c06997108dfbe0ef0da.png",alt:"Layer Settings",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"设置脚本："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7d5295274b12431483a24667cfbb81be.png",alt:"Script Setup",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["创建变量，获取组件，编写 ",s.jsx("code",{children:"if"})," 语句。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/2b245a5b7849431490868cef275ce378.png",alt:"Variables",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"绘制检测范围。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3728b484d514453faf9623f9fd2d23ff.png",alt:"Gizmos",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个物理材质，防止角色挂在墙上。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/a28dd332581040dea256a237afa9163f.png",alt:"Physics Material",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PhysicsCheck : MonoBehaviour
{
    public Vector2 bottomOffset;
    public bool isGround;
    public float checkReduis;
    public LayerMask groundLayer;

    void Update()
    {
        Check();
    }

    public void Check()
    {
       isGround = Physics2D.OverlapCircle((Vector2)transform.position + bottomOffset, checkReduis, groundLayer);
    }

    void OnDrawGizmosSelected()
    {
        Gizmos.DrawWireSphere((Vector2)transform.position + bottomOffset, checkReduis);
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、创建人物基本动画"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c57f97db211148cda457c6e58c1ff918.png",alt:"Animation Setup",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"添加动画组件。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/cd2dfc67381a4c81b9ef4109a256162d.png",alt:"Animator Component",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建新文件夹 Animations/player，创建 Controller 并赋值。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/eaad674ace9d4ebf8b6b05ddc2dc9f79.png",alt:"Project Folder",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"打开控制器。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/099153abdcee4c94bc26b2abeee66c25.png",alt:"Animator Window",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建 Animation 并把照片导入。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e5aca11b7c504bf69ec25b92b77a65b0.png",alt:"Animation Clip",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"勾选并把 60 修改为 10 帧。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/768b46e48b74496fa9d4779a0fd791ba.png",alt:"Sample Rate",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建跑步动画导入照片。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5dcd0efac13344ea90a11adf5ab90478.png",alt:"Run Animation",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建转换。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/63d5415cde41419d9e3398cb0b3eb524.png",alt:"Transition",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建条件，修改参数。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bb727a3b827c401182c5b0db4586d01d.png",alt:"Parameters",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["创建新的脚本，读取组件并把 Rb 里面的 ",s.jsx("code",{children:"velocity"})," 的 x 的绝对值传给 Animation。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerAnimation : MonoBehaviour
{
    private Animator anim;
    private Rigidbody2D rb;

    private void Awake()
    {
        anim = GetComponent<Animator>();
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        SetAnimation();
    }

    public void SetAnimation()
    {
        anim.SetFloat("velocityX", Mathf.Abs(rb.velocity.x));
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"设置一个走路的逻辑动画，velocity 的值为 2.5。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/068ed4d0cc384a8dac17821018ebb2c9.png",alt:"Walk Logic",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、创建人物跳跃动画 Blend Tree"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"根据 guide 将 jump 先分为 5 个。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3afca78bc51349cba378435540c8686b.png",alt:"Jump Guide",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建 Blend 树。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d38d80afbc9d47f4ae3fe33c994c7921.png",alt:"Blend Tree",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个 velocityY 将 jump 导入到树中，并修改数值。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/36c3ebdc672c43d9ad16726710892588.png",alt:"Blend Tree Settings",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"增加代码。"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public void SetAnimation()
    {
        anim.SetFloat("velocityX", Mathf.Abs(rb.velocity.x));
        anim.SetFloat("velocityY", rb.velocity.y);
    }`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"与 Any State 相连再与落地动画相连接。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8be1a8bcbb7c45638d2b6166a680e691.png",alt:"Any State Transition",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["脚本增加 ",s.jsx("code",{children:"isGround"})," 这个值。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class PlayerAnimation : MonoBehaviour
{
    private Animator anim;
    private Rigidbody2D rb;
    private PhysicsCheck physicsCheck;

    private void Awake()
    {
        anim = GetComponent<Animator>();
        rb = GetComponent<Rigidbody2D>();
        physicsCheck = GetComponent<PhysicsCheck>();
    }

    private void Update()
    {
        SetAnimation();
    }

    public void SetAnimation()
    {
        anim.SetFloat("velocityX", Mathf.Abs(rb.velocity.x));
        anim.SetFloat("velocityY", rb.velocity.y);
        anim.SetBool("isGround", physicsCheck.isGround);
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为了让落地直接走取消下蹲动作，所以加入打断。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3e35353e949e4c38be89fba82ef36288.png",alt:"Interruption Source",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"})]})},{id:"18",title:"Unity 2D 游戏开发入门：2.1动画系统与物理检测",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇讲解如何通过 Gizmos 可视化物理检测范围、使用 Animator 创建 Blend Tree 实现角色动画状态机，以及将物理检测结果与动画系统绑定的完整流程。",date:"2025-12-03",readTime:"30 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、物理环境监测及 Gizmos 绘制"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["为了进行碰撞监测，我们需要编写一个新的脚本 ",s.jsx("code",{children:"PhysicsCheck"}),"，因为敌人和角色都需要使用这个功能。"]}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"1.1 创建脚本与图层设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1eef7da8f68e4e8489b506ca86ff8627.png",alt:"Create Script",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建并设置图层 (Layer)，比如 Ground 层。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/52b4532422bf4c06997108dfbe0ef0da.png",alt:"Layer Setup",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"1.2 编写检测代码"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["设置脚本，创建变量，使用 ",s.jsx("code",{children:"Physics2D.OverlapCircle"})," 进行圆形检测。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7d5295274b12431483a24667cfbb81be.png",alt:"Script Variables",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/2b245a5b7849431490868cef275ce378.png",alt:"Check Logic",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"1.3 Gizmos 可视化"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["利用 ",s.jsx("code",{children:"OnDrawGizmosSelected"})," 方法绘制检测范围，方便在编辑器中调试。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3728b484d514453faf9623f9fd2d23ff.png",alt:"Gizmos Visual",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["另外，为了防止角色挂在墙上，需要创建一个 ",s.jsx("strong",{children:"Physics Material 2D"})," (物理材质)，将摩擦力 (Friction) 设为 0，并赋给角色的碰撞体。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/a28dd332581040dea256a237afa9163f.png",alt:"Physics Material",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PhysicsCheck : MonoBehaviour
{
    public Vector2 bottomOffset;
    public bool isGround;
    public float checkReduis;
    public LayerMask groundLayer;

    void Update()
    {
        Check();
    }

    public void Check()
    {
       isGround = Physics2D.OverlapCircle((Vector2)transform.position + bottomOffset, checkReduis, groundLayer);
    }

    void OnDrawGizmosSelected()
    {
        Gizmos.DrawWireSphere((Vector2)transform.position + bottomOffset, checkReduis);
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、创建人物基本动画"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["为角色添加 ",s.jsx("strong",{children:"Animator"})," 组件。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c57f97db211148cda457c6e58c1ff918.png",alt:"Animator Component",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/cd2dfc67381a4c81b9ef4109a256162d.png",alt:"Animator Inspector",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"2.1 创建 Controller 与 Clip"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建 Animations/player 文件夹，创建 Animator Controller 并赋值给角色。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/eaad674ace9d4ebf8b6b05ddc2dc9f79.png",alt:"Create Controller",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"打开 Animation 窗口，创建动画 Clip (如 Idle)，将图片素材拖入时间轴。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/099153abdcee4c94bc26b2abeee66c25.png",alt:"Animation Window",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e5aca11b7c504bf69ec25b92b77a65b0.png",alt:"Drag Sprites",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"记得将采样率 (Samples) 从 60 修改为 10 帧，以适配像素风格。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/768b46e48b74496fa9d4779a0fd791ba.png",alt:"Sample Rate",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"2.2 动画状态机 (Animator)"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建 Run 动画。在 Animator 窗口中创建 Idle 到 Run 的 Transition (转换)。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5dcd0efac13344ea90a11adf5ab90478.png",alt:"Run Animation",className:"w-full h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/63d5415cde41419d9e3398cb0b3eb524.png",alt:"Transition",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"设置 Parameters (如 velocityX)，并添加 Condition (条件)。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bb727a3b827c401182c5b0db4586d01d.png",alt:"Conditions",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"2.3 动画控制脚本"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["创建 ",s.jsx("code",{children:"PlayerAnimation.cs"}),"，读取 Rigidbody 的速度并传递给 Animator。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerAnimation : MonoBehaviour
{
    private Animator anim;
    private Rigidbody2D rb;

    private void Awake()
    {
        anim = GetComponent<Animator>();
        rb = GetComponent<Rigidbody2D>();
    }

    private void Update()
    {
        SetAnimation();
    }

    public void SetAnimation()
    {
        anim.SetFloat("velocityX", Mathf.Abs(rb.velocity.x));
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"设置一个走路的逻辑动画，当 velocityX &gt 0.1 时切换到 Run。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/068ed4d0cc384a8dac17821018ebb2c9.png",alt:"Threshold",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、创建人物跳跃动画 Blend Tree"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"根据 Guide 将跳跃过程分为 5 个阶段。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3afca78bc51349cba378435540c8686b.png",alt:"Jump Guide",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"3.1 创建 Blend Tree"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"在 Animator 中右键 Create State -np,gt From New Blend Tree。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d38d80afbc9d47f4ae3fe33c994c7921.png",alt:"Blend Tree Node",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-4 border border-stone-200"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["创建一个 ",s.jsx("code",{children:"velocityY"})," 参数，将不同的跳跃阶段 Clip 导入树中，并根据垂直速度 (Threshold) 进行混合。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/36c3ebdc672c43d9ad16726710892588.png",alt:"Blend Tree Config",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"3.2 代码更新"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`    public void SetAnimation()
    {
        anim.SetFloat("velocityX", Mathf.Abs(rb.velocity.x));
        anim.SetFloat("velocityY", rb.velocity.y);
    }`})}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"3.3 状态机逻辑完善"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["使用 ",s.jsx("strong",{children:"Any State"})," 连接跳跃动画，这样无论当前是什么状态，只要跳跃条件满足就会触发。 落地后连接到 Land 动画，再回到 Idle/Run。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8be1a8bcbb7c45638d2b6166a680e691.png",alt:"Animator State Machine",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"3.4 绑定物理检测"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["在脚本中获取 ",s.jsx("code",{children:"PhysicsCheck"})," 组件，并将 ",s.jsx("code",{children:"isGround"})," 状态传递给 Animator。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`public class PlayerAnimation : MonoBehaviour
{
    private Animator anim;
    private Rigidbody2D rb;
    private PhysicsCheck physicsCheck;

    private void Awake()
    {
        anim = GetComponent<Animator>();
        rb = GetComponent<Rigidbody2D>();
        physicsCheck = GetComponent<PhysicsCheck>();
    }

    private void Update()
    {
        SetAnimation();
    }

    public void SetAnimation()
    {
        anim.SetFloat("velocityX", Mathf.Abs(rb.velocity.x));
        anim.SetFloat("velocityY", rb.velocity.y);
        anim.SetBool("isGround", physicsCheck.isGround);
    }
}`})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["为了让落地后如果玩家在移动能直接切到跑动（取消下蹲/落地的后摇），可以在 Transition 中勾选 ",s.jsx("strong",{children:"Has Exit Time"})," 并调整 settings (加入 Interruption Source)。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3e35353e949e4c38be89fba82ef36288.png",alt:"Interruption",className:"w-full h-auto rounded-xl shadow-lg mb-6 border border-stone-200"})]})},{id:"17",title:"Unity 2D 游戏开发入门：2.0角色移动与输入系统",excerpt:"Unity 2D 游戏开发系列教程笔记。本篇讲解角色刚体与碰撞体设置、New Input System 的安装与代码配置、实现角色的移动、翻转以及跳跃功能。",date:"2025-12-02",readTime:"25 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一 设置人物和基本组件"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"重力组件"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c6b533f1156c4ea598af94b429de67cf.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Rigidbody Settings"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"系统里面还有更为详细的设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/92544bc37aea4dd5a810e4131af3c0e3.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"More Settings"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用重力组件和碰撞体积组件并改变数值"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/fd7e0dcfec4b4e27a2b85d8a55c17cd8.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Gravity and Collider"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"同样为瓦片平台挂载碰撞体积组件并且合为整体"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/40b4a588a750482aac1e05a7d4d7fa1c.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Tilemap Collider"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7a4c3622cea2432f85bdac29cbdd89f4.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Composite Collider"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"锁定z轴"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/503af60d8fe341bb8e892f9602e77fd4.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Lock Z Axis"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"可以查看组件手册"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c7287d5f4cc4442ab58d791523c29d19.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Component Manual"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二 创建及配置新输入系统"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建脚本"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8a49d60ec923472482466a896c8d264d.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Create Script"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"人物挂载脚本"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/9bf860a1d08e47e58ebf919ca78141c2.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Attach Script"}),s.jsx("p",{className:"mb-4 text-red-600 font-bold",children:"注意创建时命名完就会编译，你再改名里面类名没有改变（上面就是错了）"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建输入系统修改一些设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/171393a87bec4d7dbd195ed8465f015b.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Input System Settings"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/71068bbacd614f028ad1e53e698984ee.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Input System Package"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"新建一个控制文件"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/348155f10d96494b98a6c2c154ac2c52.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Input Actions"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"修改设置和绑的上下左右"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/364a7469cb1c46cc9297633027506a17.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Binding"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e1b6ad003ea046be9ac85ded6654f730.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Binding Config"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"但是我们不用这个手动"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"下面让unity给我们生成一个配置表"}),s.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-2",children:[s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/0052e430453f41749eac2bafc3eb7abd.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Generate Config 1"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/293ea2980af24651a1d132bacbb16bec.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Generate Config 2"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/0632ff53b9564a1e800257e62e4dcd63.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Generate Config 3"})]}),s.jsx("p",{className:"mb-4 text-stone-700",children:"这里我们要使用代码的方式来实现，先把挂载的配置表取消"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d06bf171904645cc926fbfa8b3c928fd.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Detach Component"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"编写代码"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"启动顺序Awake>OnEnable>OndDisable    Enable和Disable就是人物的存在和消失"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Updata里面的代码是读取配置表里面的gamepaly然后用ReadValue读取坐标值"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d7ed4d546cfa48f6bbd35b7be8109d27.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Code Screenshot"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三 实现人物移动和翻转"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c6f74ab751f2486092aae1c8044b8515.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Movement"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"修改Rb也就是读取Rigidbody里面的数值，可以直接拖拽到"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bbf0e7d38ee04617a1e90bc5fab07afe.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Rigidbody Assign"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"也可以使用"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/115c97b720964281b5f63404be2ff32f.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"GetComponent"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"编辑和修改速度后可正常使用"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/54710d0fb0514453b11cf4202b5d0c9b.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Speed Config"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e46ac8ec967c407ab1b21c519cdde3f5.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Movement Test"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"人物反转"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"判断语句改变方向"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
   public PlayerInputControl inputControl;
   private Rigidbody2D rb;
   public Vector2 inputDirection;
   public float speed;

    void Awake()
    {
        inputControl = new PlayerInputControl();

        rb = GetComponent<Rigidbody2D>();
    }

    void OnEnable()
    {
        inputControl.Enable();
    }

    void OnDisable()
    {
        inputControl.Disable();
    }

    void Update()
    {
        inputDirection = inputControl.Gameplay.Move.ReadValue<Vector2>();
    }

    void FixedUpdate()
    {
        Move();
    }

    public void Move()
    {
        rb.velocity = new Vector2(inputDirection.x * speed * Time.deltaTime , rb.velocity.y);

        int faceDir = (int)transform.localScale.x;
        if(inputDirection.x > 0)
            faceDir = 1;
        if(inputDirection.x < 0)
            faceDir = -1;

        transform.localScale = new Vector3(faceDir,1,1);
    }
}`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"或者修改里面的X值，这么做后面人物不是真正的翻转更像是图片翻转，主要学习一下代码"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d0f9ec54786e41fe80005c87a02b7b37.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"FlipX"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.InputSystem;

public class PlayerController : MonoBehaviour
{
   public PlayerInputControl inputControl;
   private Rigidbody2D rb;
   private SpriteRenderer faceDir;
   public Vector2 inputDirection;
   public float speed;

    void Awake()
    {
        inputControl = new PlayerInputControl();

        rb = GetComponent<Rigidbody2D>();
        faceDir = GetComponent<SpriteRenderer>();
    }

    void OnEnable()
    {
        inputControl.Enable();
    }

    void OnDisable()
    {
        inputControl.Disable();
    }

    void Update()
    {
        inputDirection = inputControl.Gameplay.Move.ReadValue<Vector2>();
    }

    void FixedUpdate()
    {
        Move();
    }

    public void Move()
    {
        rb.velocity = new Vector2(inputDirection.x * speed * Time.deltaTime , rb.velocity.y);

        
        if(inputDirection.x > 0)
            faceDir.flipX = false;
        if(inputDirection.x < 0)
            faceDir.flipX = true;

       
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四 实现人物跳跃"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"这里我设置了空格和k键"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/da15632d9ef74d1ea3a5f24a94229b27.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Jump Key 1"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f853330a7b474ae78a37415efbbf4f79.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Jump Key 2"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/fa607fbcf2c844369bc8f6e105d1e866.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Jump Key 3"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Alt+小键盘可以调整代码顺序  Dbug测试  学会看代码手册"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/14843cc03e4d4ce6b1af94cf2e15f5ba.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Code Order"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d89407369f3440a699855b7461d9e955.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Debug"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`
   public float jumpForce;

    void Awake()
    {
        rb = GetComponent<Rigidbody2D>();

        inputControl.Gameplay.Jump.started += Jump;
        inputControl = new PlayerInputControl();

    }

    private void Jump(InputAction.CallbackContext obj)
    {
        rb.AddForce(transform.up*jumpForce, ForceMode2D.Impulse);
    }`})}),s.jsx("p",{className:"mb-4 text-stone-700",children:"这里代码写错了"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"顺序没有更改没有初始化。。。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ac8a26f209364fa687c5d3d210c4690f.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Error Fix"})]})},{id:"16",title:"Unity 2D 游戏开发入门：1.0环境配置与 Tilemap 绘制",excerpt:"Unity 2022.3 2D 游戏开发系列教程笔记。涵盖环境配置、VS Code 插件安装、素材导入与切割、Tilemap 瓦片地图使用、图层管理以及 Rule Tile 规则瓦片的高级应用。",date:"2025-11-30",readTime:"20 min",category:"Unity开发",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-4 text-stone-700 leading-relaxed",children:["首先系列课程来自 ",s.jsx("a",{href:"https://www.bilibili.com/video/BV1mL411o77x",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:underline",children:"安装Unity引擎和代码编辑器｜Unity2022.2 最新教程《勇士传说》入门到进阶｜4K_哔哩哔哩_bilibili"})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"环境配置与安装"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"下载unity hub"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用unity2022.3.6 "}),s.jsx("p",{className:"mb-4 text-stone-700",children:"选择编辑工具 Visual Studio 或者Visual Studio code 配置文档"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["Visual Studio for Unity: ",s.jsx("a",{href:"https://learn.microsoft.com/zh-cn/visualstudio/gamedev/unity/get-started/getting-started-with-visual-studio-tools-for-unity?pivots=windows",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:underline",children:"https://learn.microsoft.com..."})]}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["Visual Studio Code for Unity: ",s.jsx("a",{href:"https://code.visualstudio.com/docs/other/unity",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:underline",children:"https://code.visualstudio.com..."})]}),s.jsx("p",{className:"mb-4 text-stone-700",children:"下载Package （vs code）"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b3f24a28b31c4e7399f1c20df0d207ea.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Package"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"选择编辑器"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/9f67b996a01146c0b9a505992062d3e7.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Editor Select"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"2.1了解编辑器窗口布局设定"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"根据自己的习惯更改窗口，右上角有设置模版"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/9a1c22a89dd6477c91f54e12f1052a8f.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Layout"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"2.2导入素材并整理"}),s.jsx("p",{className:"mb-4 text-stone-700",children:s.jsx("a",{href:"https://pan.baidu.com/s/1yMxDHHfOI3NXbF524MQh7A?pwd=xpk0",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:underline",children:"素材下载"})}),s.jsx("h5",{className:"font-bold text-stone-700 mt-2",children:"图片设置"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"找到png下的人物图集"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"修改Sprite Mode 为 Multiple"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Pixels Per Unit（像素比） 为16"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/9bc699cc3ce34b1db2e7555de0454691.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"PPU"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Filter Mode 为Point  "}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Compression 为None"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/326dffc329a44d2fbb0ceaa9d69e4fd5.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Filter"}),s.jsx("h5",{className:"font-bold text-stone-700 mt-2",children:"切割"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/36ee3d5d631d4f8cbb672d7b106c943c.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Slice"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"选择格子切割"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/81864ed59c824064a1675573b7be0517.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Grid Slice"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"3.1了解熟悉 Tilemap 瓦片地图功能"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"将地图素材切割"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d2dc4a90f0cd49a6b895f2950ae18e60.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Tilemap Assets"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"瓦批，启动！"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d2e05cef6ef0438286476b26a4b05e82.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Tile Palette"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"新建调色盘和瓦片"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/88438264f4ca4b788e5ebefb137cf0d7.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Create Palette"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"新建图层"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/9fc913ea33b14762abbeb02b6064ec13.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Create Layer"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"3.2修改摄像机尺寸"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/20b5923fa41b40cb957c06e57938ef11.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Camera Size"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"3.3图层概念"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b844ba853ffd49c4b1cbba9561cd0da3.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Layers"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"非常重要的概念，看上面的图就能把整个背景分为许多的层级，这里设置Sorting Layer 并且使用Order in Layer改变具体数值 "}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4ffc016c248d4d97ba3a44b8fdb8d143.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Order in Layer"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"对应图层进行绘制"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4364fda3775f4241a3940fb626c1faa9.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Painting"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用focus on 功能来看自己绘制的是哪一部分"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/42b2b8ee14da47768dc7109784bacf94.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Focus On"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-4 mb-2",children:"4.1创建 Rule Tile 实现快速场景绘制"}),s.jsx("p",{className:"mb-4 text-stone-700",children:" 在绘制时可以做到部分充分利用，部分随机出现，不需要再一个一个绘制"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f49a364c50f647bcba08ede906ac9bb8.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Rule Tile Intro"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个规则瓦片"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/675e57d7c2c64b4aa077d517cd37a871.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Create Rule Tile"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"将之前瓦片改名为ground方便使用"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d6581f6420bb4f179b364601e8cdb42c.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Rename"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"select "}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b46373321558495fa260334c0b56f89b.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Select"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为选择的左上瓦片选择规则"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/68aa97f1257143a792d9279746f9f78e.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Rule Config 1"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"为中心瓦片制定规则和随机属性"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/beb94ec4c660414493fedf9a74ba4d63.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Rule Config 2"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"同理绘制其他部分"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/2bd46a706ff54ff6bd54942af64bc589.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Rule Config 3"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"制作完毕选择矩形工具绘制"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/0082dafc1cf043fb81aaef02ed16fe35.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Box Fill"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"别忘了拐角还有优先级设置"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ca63dfb69b434d91b4172ccda575aa94.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Priority"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"同样制作出没有草地的平地"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/48778a494fcb4b12aa7a109ab37a2789.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Plain Ground"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"制作动态的瓦片"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"同样的方法制作，创建动态瓦片，重命名放到合适位置，注意文件管理，调整速度，调整层级"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/87f4d54cc5c547b38b57686808464b7d.png",className:"w-full h-auto rounded-xl shadow-lg mb-4",alt:"Animated Tile"})]})},{id:"15",title:"使用 Gemini 3.0 零基础制作个人 Blog",excerpt:"在 Gemini 更新 3.0 后，即使是零基础也能随意的创造出自己想要的一些前端应用。本文记录如何使用 Gemini 3.0 制作并部署自己的博客。",date:"2025-11-25",readTime:"10 min",category:"AI实战",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-4 text-stone-700 leading-relaxed",children:["在",s.jsx("span",{className:"font-bold text-orange-600",children:"Gemini"}),"更新3.0后，即使是零基础也能随意的创造出自己想要的一些前端应用。"]}),s.jsx("p",{className:"mb-4 text-stone-700 leading-relaxed",children:"今天使用Gemini3.0来制作自己的blog。"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["成品：",s.jsx("a",{href:"https://gaagaga.github.io/blog/",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:underline",children:"https://gaagaga.github.io/blog/"})]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c79cee4628b84c0b897025d3d70c38ed.png",alt:"Blog Preview",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"使用 Gemini"}),s.jsx("p",{className:"mb-4 text-stone-700",children:s.jsx("a",{href:"https://aistudio.google.com/",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:underline",children:"推荐使用 https://aistudio.google.com/"})}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["左侧找到 ",s.jsx("span",{className:"font-bold text-stone-800",children:"build"}),"，尽可能的描述自己想要的风格或者类型，模版之类。或者可以参考别人的blog把截图给AI让它生成。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/555ddf2eef1448099877bbc5cacf7806.png",alt:"Gemini Build Interface",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["右上可以报错可以下载和直接发送到 ",s.jsx("span",{className:"font-bold text-stone-800",children:"github"}),"。"]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"写 blog"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"如果懂一些Html，css可以自己去直接code界面书写，我直接在CSDN找到网站的代码然后给他帮我写了（你也可以直接让ai链接到csdn更加方便）。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3e40e8fd1d364e6082bb6f3f8ca3d1e1.png",alt:"Writing Blog",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"部署"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"这里你先要告诉他你要部署到哪，我这里用的是github。"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"去问AI怎么做，错了就再改，我这里就是有问题才让我打包。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e74eaad7338b4c78b0d2d29224ab9926.png",alt:"Deployment Issue",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"这里上传本来用git push但是不太稳定就直接换了。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bf019b92561e4a6db44c7980a4ba1af5.png",alt:"Manual Upload",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"类似这样。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/af0a9307d4e4498093a6d920ffcf052c.png",alt:"Github Repo",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"到这基本上就成功了，每个人遇到的问题都不一样所以需要自己再去解决。"}),s.jsx("p",{className:"mb-2 text-stone-700",children:"比如："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/aa7c976963234129a9f2add95c7c981f.png",alt:"Error Example",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700 font-bold",children:"总之不断试错修改, AI就是你的老师。"})]})},{id:"14",title:"数据库图书销售管理系统实验",excerpt:"详细设计一个图书销售管理系统，涵盖图书编目、进退货、会员管理及财务报表等功能。包含完整的需求分析、数据字典与E-R图设计。",date:"2025-05-07",readTime:"25 min",category:"数据库",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-4 text-stone-700 leading-relaxed",children:[s.jsx("strong",{children:"需求描述："}),"图书销售系统提供给书店包括",s.jsx("span",{className:"text-orange-600 font-bold",children:"图书编目、进退货、销售、财务报表"}),"等方面的一体化解决方案。同时还提供会员管理和会员折扣等功能。"]}),s.jsx("p",{className:"mb-6 text-stone-700 leading-relaxed",children:"其业务需求有图书零售购买，顾客购书后收银台进行结账。对于书店的会员可以提供相应的折扣。 输入需要购买的图书和数量，计算出总金额，由用户选择使用现金或会员卡进行结账。"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、系统功能"}),s.jsxs("ul",{className:"list-disc list-inside space-y-2 mb-6 text-stone-700 ml-4 text-sm",children:[s.jsxs("li",{children:[s.jsx("strong",{children:"图书进货/退货："}),"处理图书库存与金额差异。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"出版社管理："}),"增删改查出版社资料。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"会员管理："}),"注册、查找、修改、充值、挂失及会员组折扣设置。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"系统设置："}),"操作员权限与密码管理。"]}),s.jsxs("li",{children:[s.jsx("strong",{children:"报表处理："}),"生成销售单、进货单及各类报表。"]})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、系统结构与数据类"}),s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-stone-700 mb-3 px-3 py-1 bg-stone-100 w-fit rounded-lg",children:"1. 图书信息管理 (C1)"}),s.jsx("div",{className:"overflow-x-auto border border-stone-200 rounded-xl",children:s.jsxs("table",{className:"w-full text-sm text-stone-600",children:[s.jsx("thead",{className:"bg-stone-50 border-b border-stone-200",children:s.jsxs("tr",{children:[s.jsx("th",{className:"p-3 text-left font-semibold",children:"数据项名"}),s.jsx("th",{className:"p-3 text-left font-semibold",children:"对应数据类"})]})}),s.jsxs("tbody",{className:"divide-y divide-stone-100 bg-white",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-3",children:"ISBN / 书名 / 出版社号"}),s.jsx("td",{className:"p-3",children:"C1"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-3",children:"进价 / 销售价"}),s.jsx("td",{className:"p-3",children:"C1"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-3",children:"进货量 / 销售量 / 库存"}),s.jsx("td",{className:"p-3",children:"C1"})]})]})]})})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-stone-700 mb-3 px-3 py-1 bg-stone-100 w-fit rounded-lg",children:"2. 会员与会员组 (C2, C3)"}),s.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[s.jsxs("div",{className:"p-4 border border-stone-200 rounded-xl bg-white/50",children:[s.jsx("p",{className:"font-bold text-stone-800 mb-2",children:"会员组 (C2)"}),s.jsx("p",{className:"text-sm text-stone-600",children:"编号、名称、折扣、积分换算比例"})]}),s.jsxs("div",{className:"p-4 border border-stone-200 rounded-xl bg-white/50",children:[s.jsx("p",{className:"font-bold text-stone-800 mb-2",children:"会员 (C3)"}),s.jsx("p",{className:"text-sm text-stone-600",children:"会员编号、姓名、性别、年龄、手机号、有效期、会员组、消费总额、状态、余额、密码、积分"})]})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"font-bold text-stone-700 mb-3 px-3 py-1 bg-stone-100 w-fit rounded-lg",children:"3. 业务与人员 (C4-C9)"}),s.jsx("div",{className:"overflow-x-auto border border-stone-200 rounded-xl",children:s.jsx("table",{className:"w-full text-sm text-stone-600",children:s.jsxs("tbody",{className:"divide-y divide-stone-100 bg-white",children:[s.jsxs("tr",{children:[s.jsx("td",{className:"p-3 font-medium bg-stone-50/50 w-32",children:"出版社 (C4)"}),s.jsx("td",{className:"p-3",children:"出版社号、名称、电话、邮编、地址"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-3 font-medium bg-stone-50/50",children:"操作员 (C5)"}),s.jsx("td",{className:"p-3",children:"编号、姓名、账号、密码、邮箱、状态、权限ID"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-3 font-medium bg-stone-50/50",children:"财务报表 (C6)"}),s.jsx("td",{className:"p-3",children:"进货单号、ISBN、进货时间、价格、数量"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-3 font-medium bg-stone-50/50",children:"销售管理 (C7)"}),s.jsx("td",{className:"p-3",children:"销售单号、ISBN、时间、价格、会员编号、积分、退货金额、销售量"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-3 font-medium bg-stone-50/50",children:"权限 (C8)"}),s.jsx("td",{className:"p-3",children:"权限ID、权限名称、权限类型"})]}),s.jsxs("tr",{children:[s.jsx("td",{className:"p-3 font-medium bg-stone-50/50",children:"日志 (C9)"}),s.jsx("td",{className:"p-3",children:"日志ID、操作类型、内容、操作员、时间"})]})]})})})]})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-10 mb-3",children:"三、数据字典详细定义"}),s.jsxs("div",{className:"overflow-x-auto mb-6 border border-stone-200 rounded-xl shadow-sm",children:[s.jsxs("table",{className:"w-full text-sm text-stone-600 min-w-[600px]",children:[s.jsx("thead",{className:"bg-stone-100 text-stone-700",children:s.jsxs("tr",{children:[s.jsx("th",{className:"p-3 border-b border-stone-200 text-left",children:"编号"}),s.jsx("th",{className:"p-3 border-b border-stone-200 text-left",children:"数据项名"}),s.jsx("th",{className:"p-3 border-b border-stone-200 text-left",children:"类型/长度"}),s.jsx("th",{className:"p-3 border-b border-stone-200 text-left",children:"备注"})]})}),s.jsxs("tbody",{className:"divide-y divide-stone-100 bg-white",children:[s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅰ1"}),s.jsx("td",{className:"p-3",children:"ISBN"}),s.jsx("td",{className:"p-3",children:"字符, 20"}),s.jsx("td",{className:"p-3",children:"PK, 非空"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅰ2"}),s.jsx("td",{className:"p-3",children:"书名"}),s.jsx("td",{className:"p-3",children:"字符, 50"}),s.jsx("td",{className:"p-3"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅰ4"}),s.jsx("td",{className:"p-3",children:"进价"}),s.jsx("td",{className:"p-3",children:"数值(10,2)"}),s.jsx("td",{className:"p-3"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅱ1"}),s.jsx("td",{className:"p-3",children:"会员组编号"}),s.jsx("td",{className:"p-3",children:"字符, 6"}),s.jsx("td",{className:"p-3",children:"PK"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅲ2"}),s.jsx("td",{className:"p-3",children:"会员编号"}),s.jsx("td",{className:"p-3",children:"字符, 10"}),s.jsx("td",{className:"p-3",children:"PK, 非空"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅲ4"}),s.jsx("td",{className:"p-3",children:"性别"}),s.jsx("td",{className:"p-3",children:"字符, 2"}),s.jsx("td",{className:"p-3",children:"男/女"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅲ5"}),s.jsx("td",{className:"p-3",children:"年龄"}),s.jsx("td",{className:"p-3",children:"整数"}),s.jsx("td",{className:"p-3",children:"0-120"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅴ1"}),s.jsx("td",{className:"p-3",children:"操作员编号"}),s.jsx("td",{className:"p-3",children:"字符, 10"}),s.jsx("td",{className:"p-3",children:"PK, 非空"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅵ1"}),s.jsx("td",{className:"p-3",children:"进货单号"}),s.jsx("td",{className:"p-3",children:"字符, 20"}),s.jsx("td",{className:"p-3",children:"PK, 非空"})]}),s.jsxs("tr",{className:"hover:bg-orange-50/30",children:[s.jsx("td",{className:"p-3",children:"Ⅶ1"}),s.jsx("td",{className:"p-3",children:"销售单号"}),s.jsx("td",{className:"p-3",children:"字符, 20"}),s.jsx("td",{className:"p-3",children:"PK, 非空"})]})]})]}),s.jsx("div",{className:"p-2 bg-stone-50 text-xs text-stone-500 text-center border-t border-stone-200",children:"*注：表格仅列出核心字段，完整定义见设计文档"})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-10 mb-3",children:"四、视图 E-R 图设计"}),s.jsxs("h4",{className:"font-bold text-stone-700 mt-6 mb-3 flex items-center gap-2",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500"}),"全局关系概览"]}),s.jsx("div",{className:"bg-stone-900 p-6 rounded-xl font-mono text-xs md:text-sm text-stone-300 mb-8 overflow-x-auto shadow-lg",children:s.jsx("pre",{children:`+----------------+           +----------------+
|   出版社 C4    |<----1:N---|    图书 C1     |
+----------------+           +----------------+
                                     |    |
+----------------+           +----------------+
|   进货单 C6    |<---N:1----|    图书 C1     |
+----------------+           +----------------+
                                     |
+----------------+           +----------------+
|   销售单 C7    |<---N:1----|    会员 C3     |
+----------------+           +----------------+
                                     |
+----------------+           +----------------+
|  会员组 C2     |<----1:N---|    会员 C3     |
+----------------+           +----------------+
                                     
+----------------+           +----------------+
|   操作员 C5    |<---N:1----|    权限 C8     |
+----------------+           +----------------+`})}),s.jsxs("h4",{className:"font-bold text-stone-700 mt-6 mb-3 flex items-center gap-2",children:[s.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500"}),"关键约束说明"]}),s.jsx("div",{className:"bg-white p-6 rounded-xl border border-stone-200 shadow-sm",children:s.jsxs("ul",{className:"list-none space-y-4 text-stone-700 text-sm",children:[s.jsxs("li",{className:"flex gap-3",children:[s.jsx("span",{className:"font-bold text-stone-900 min-w-[3rem]",children:"主键："}),s.jsx("span",{children:"所有实体主键唯一且非空（如 ISBN、会员编号、进货单号）。"})]}),s.jsxs("li",{className:"flex gap-3",children:[s.jsx("span",{className:"font-bold text-stone-900 min-w-[3rem]",children:"外键："}),s.jsxs("ul",{className:"list-disc list-inside space-y-1 text-stone-600",children:[s.jsx("li",{children:"图书.出版社号 → 出版社.出版社号"}),s.jsx("li",{children:"会员.会员组 → 会员组.会员组编号"}),s.jsx("li",{children:"销售.图书ISBN → 图书.ISBN"}),s.jsx("li",{children:"销售.会员编号 → 会员.会员编号"})]})]}),s.jsxs("li",{className:"flex gap-3",children:[s.jsx("span",{className:"font-bold text-stone-900 min-w-[3rem]",children:"规则："}),s.jsx("span",{children:"会员组折扣 ≤ 1，积分换算比例 ≥ 0（通过 CHECK 约束实现）。"})]})]})})]})},{id:"13",title:"MATLAB三维图像绘制，子图，数据导入和预处理 02",excerpt:"MATLAB进阶笔记：学习三维图像绘制、子图布局、外部数据导入以及数据预处理（处理缺失值和离群值）。",date:"2025-04-29",readTime:"15 min",category:"MATLAB",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、三维图"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bd2f78aee9bf47c7a567592cab752c24.png",alt:"3D Plot 1",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"还有改变颜色等操作"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f67a2230010a46cb897ad3c8d136f4a5.png",alt:"3D Plot Color",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、子图"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c27c40645a524aea884122b9cb66c768.png",alt:"Subplot",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"多个图同时输出"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、导入数据"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/d50712dd24c748108af21d4d786fa95c.png",alt:"Import Data 1",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c78f1089efcd49a1b8f62c9d25569775.png",alt:"Import Data 2",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b94e0bda0cae44bf8647c0add45fe496.png",alt:"Import Data 3",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四、数据预处理"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"出现异常数据或者错误数据"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f931ceb4571945cbab03a5b67429f953.png",alt:"Data Preprocessing",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"缺失数据和离群数据"})]})},{id:"12",title:"MATLAB界面和基本操作，矩阵运算，二维图的绘制 01",excerpt:"MATLAB基础入门笔记：介绍界面布局、脚本文件、数据类型（字符串与文本）、矩阵基本运算以及常用的二维绘图方法（线图、柱状图、散点图等）。",date:"2025-04-29",readTime:"15 min",category:"MATLAB",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、界面和基本操作"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3ae6d21e54e54bc49970dd31fdf30c78.png",alt:"Interface",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/341aaebf4be6450bad37163bbe9a2d00.png",alt:"Editor",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["1. ",s.jsx("span",{className:"font-bold",children:"编辑器"}),"、工作区命令行窗口、当前文件夹。在编辑器里面能输入文字和代码，界面能进行运算。",s.jsx("span",{className:"font-bold",children:"命令行"}),"窗口能完成多种指令操作。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/436b9c04299048b1923e7ccbae04c649.png",alt:"Command Window",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"2. 函数的使用"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/6d6d1df68ebd4b6ab517be8c6f5bb558.png",alt:"Function Usage",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["3. ",s.jsx("span",{className:"font-bold",children:"脚本文件"}),"和实时脚本文件，以及运行节"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ffe4c6acc7fb4df198df2cb61b19119b.png",alt:"Scripts",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"实时脚本文件能实时输出，运行节更能选择一个段落运行输出结果。"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"4. 字符串和文本区别"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/23205d16f16b4491a5c316fceb950837.png",alt:"String vs Char 1",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:[s.jsx("span",{className:"font-bold",children:"string"}),"类型和char类型，很类似C++语言。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/10b7c06c4c2a43cf9a7b7989e2a08d5d.png",alt:"String vs Char 2",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、矩阵运算"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ab2d871bc2654723b16ed69e60012392.png",alt:"Matrix Operations 1",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"不同形式的矩阵也能进行运算。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1d389fd79e28450ebf56d39e0021a551.png",alt:"Matrix Operations 2",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、二维图绘制"}),s.jsx("p",{className:"mb-2 font-bold text-stone-700",children:"线图"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/949eb42f917f4454b92c2c11e176502a.png",alt:"Line Plot",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 font-bold text-stone-700",children:"柱状图"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b92123e53d574184b15707d185400a76.png",alt:"Bar Chart",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 font-bold text-stone-700",children:"极坐标"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/87434844ee8b4034970ba153a562c1ff.png",alt:"Polar Plot",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 font-bold text-stone-700",children:"散点图"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b636b45301574307aedec37e47c45d3c.png",alt:"Scatter Plot",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"绘图板块有更多图形"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/9742d633a7df4037bae6ef3805257dcc.png",alt:"More Plots",className:"w-full h-auto rounded-xl shadow-lg mb-6"})]})},{id:"11",title:"数据结构课设实践预习",excerpt:"包含四个数据结构题目分析：表达式转换、修理牧场、PAT考试排名汇总、旅游规划问题。",date:"2024-11-07",readTime:"20 min",category:"数据结构",content:s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"mb-4 text-stone-700",children:"数据结构课程设计的一些预习题目分析与代码片段。"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"A1. 表达式转换 (☆☆)"}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"题目描述："}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["将中缀表达式转换为后缀表达式。例如：",s.jsx("code",{children:"2+3*(7-4)+8/4"})," 转换为 ",s.jsx("code",{children:"2 3 7 4 - * + 8 4 / +"}),"。"]}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"问题分析："}),s.jsx("p",{className:"mb-4 text-stone-700",children:"使用堆栈来实现。遍历中缀表达式："}),s.jsxs("ul",{className:"list-disc list-inside ml-4 mb-4 text-stone-700",children:[s.jsx("li",{children:"如果是数字，直接输出。"}),s.jsx("li",{children:"如果是左括号，入栈。"}),s.jsx("li",{children:"如果是右括号，弹出栈顶元素输出，直到遇到左括号。"}),s.jsx("li",{children:"如果是运算符，弹出优先级大于等于当前运算符的栈顶元素，然后将当前运算符入栈。"})]}),s.jsx("h4",{className:"font-bold text-stone-700 mb-2",children:"部分代码实现："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`int precedence(char op) {
    if (op == '+' || op == '-') return 1;
    if (op == '*' || op == '/') return 2;
    return 0;
};

int main() {
    stack<int> a;
    string expression;
    string A;
    cout<<"请输入";
    cin>>A;
    for (char c : A) {  
        if (isdigit(c)) {
            expression += c;//是数字
        } 
        else if(c == '('){
            a.push(c);
            }
        else if(c == ')'){
            while(!a.Empty() && a.Top() != '('){
                expression += a.Top();
                a.pop();
            }
            a.pop();} // 删 '('
        
        else if (c == '+' || c == '-' || c == '*' || c == '/') {
            while (!a.Empty() && a.precedence(a.Top()) >= a.precedence(c)) {
                expression += a.Top();
                a.pop();
            }
            a.push(c);
        }	
        
        
    }
    while (!a.Empty()) {
        expression += a.Top();
        a.pop();
    }
    
    cout<<"后序输出结果为"<<expression;
    
    return 0;
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"A2. 修理牧场 (☆☆)"}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"题目描述："}),s.jsx("p",{className:"mb-4 text-stone-700",children:"将木头锯成 N 块，每次锯的费用等于被锯木头的长度。求最小花费。"}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"问题分析："}),s.jsx("p",{className:"mb-4 text-stone-700",children:"这是一个典型的哈夫曼树（Huffman Tree）问题。每次选择最小的两段木头合并，费用累加，直到只剩一段。 代码中使用数组模拟查找最小值和删除操作。"}),s.jsx("h4",{className:"font-bold text-stone-700 mb-2",children:"部分代码实现："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`int search(int cut[], int a) {
    int min = cut[0];
    int minIndex = 0;
    for (int i = 0; i < a; i++) {
        if (cut[i] < min) {
            min = cut[i];
            minIndex = i;
        }
    }
    return minIndex;
}

void Delete(int cut[], int minIndex, int &a) {
    for (int i = minIndex; i < a - 1; ++i) {
        cut[i] = cut[i + 1];
    }
    --a;
}

int op(int cut[],int a){
    int m = 0;
    int j = a;
    for(int i = 0; i < j; i++){
        int minIndex = search(cut, a);
        int min = cut[minIndex];
        if(a > 1){
            Delete(cut,minIndex, a);
            int c = cut[search(cut, a)];
            c += min;
            m += c;
            cut[search(cut, a)] = c;
        }
    }
    return m;
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"A3. PAT 考试排名汇总 (☆☆)"}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"题目描述："}),s.jsx("p",{className:"mb-4 text-stone-700",children:"汇总各个考点的成绩并生成总排名表。需要处理考号、分数、考点排名和总排名。"}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"问题分析："}),s.jsx("p",{className:"mb-4 text-stone-700",children:"建立结构体存储学生信息，使用排序算法（如选择排序或快速排序）对学生进行多重条件排序（分数、考号）。"}),s.jsx("h4",{className:"font-bold text-stone-700 mb-2",children:"部分代码实现："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`Student students[MAXN];
int n, k, num = 0;


int compare_id(const char* a, const char* b) {
    while (*a && (*a == *b)) {
        a++;
        b++;
    }
    return *(const unsigned char*)a - *(const unsigned char*)b;
}


void selection_sort(int start, int end) {
    for (int i = start; i < end; ++i) {
        int a = i;
        for (int j = i + 1; j < end; ++j) {
            if (students[j].score > students[a].score ||
                (students[j].score == students[a].score && compare_id(students[j].id, students[a].id) < 0)) {
                a = j;
            }
        }
        if (a != i) {
            swap(students[i], students[a]);
        }
    }
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"A4. 旅游规划问题 (☆☆)"}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"题目描述："}),s.jsx("p",{className:"mb-4 text-stone-700",children:"找城市间的最短路径。如果有若干条路径都是最短的，输出最便宜的一条。"}),s.jsx("p",{className:"mb-2 font-semibold text-stone-800",children:"问题分析："}),s.jsx("p",{className:"mb-4 text-stone-700",children:"Dijkstra 算法的变体。使用优先队列（最小堆）存储节点状态（当前节点、总长度、总费用）。 优先比较长度，长度相同比较费用。"}),s.jsx("h4",{className:"font-bold text-stone-700 mb-2",children:"部分代码实现："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`int main() {
    int n, m, s, d;
    cin >> n >> m >> s >> d;
    
    vector<vector<Edge>> graph(n);
    for (int i = 0; i < m; ++i) {
        int u, v, length, cost;
        cin >> u >> v >> length >> cost;
        graph[u].push_back({v, length, cost});
        graph[v].push_back({u, length, cost});
    }
    
    // 使用优先队列（最小堆）
    priority_queue<State, vector<State>, greater<State>> pq;
    vector<bool> visited(n, false);
    
    // 起始城市的状态
    State start = {s, 0, 0, {s}};
    pq.push(start);
    
    while (!pq.empty()) {
        State cur = pq.top();
        pq.pop();
        
        if (visited[cur.node]) continue;
        visited[cur.node] = true;
        
        // 如果到达了目的地
        if (cur.node == d) {
            cout << cur.length << " " << cur.cost << endl;
            return 0;
        }
        
        // 遍历相邻节点
        for (const Edge& edge : graph[cur.node]) {
            if (!visited[edge.to]) {
                State next = {edge.to, cur.length + edge.length, cur.cost + edge.cost, cur.path};
                next.path.push_back(edge.to);
                pq.push(next);
            }
        }
    }
    
    return 0;
}`})})]})},{id:"10",title:"Web 开发学习笔记 Day 8: React 组件基础",excerpt:"深入理解 React 组件的核心概念：State（状态）与 Props（属性）。学习类组件的基本结构、构造函数初始化以及如何处理用户交互。",date:"2024-09-29",readTime:"20 min",category:"React",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-4 text-stone-700 leading-relaxed",children:["学习 ",s.jsx("span",{className:"font-bold text-orange-600",children:"JavaScript"})," 组件，重点是 React.js。"]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、State（状态）"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:[s.jsx("code",{children:"state"})," 是组件内部管理的数据，它是",s.jsx("span",{className:"font-bold text-stone-900",children:"可变的"}),"，通常用来响应用户交互和渲染组件的不同视图。"]}),s.jsxs("ul",{className:"list-disc list-inside space-y-2 mb-6 text-stone-700 ml-4",children:[s.jsxs("li",{children:[s.jsx("code",{children:"state"})," 是私有的，完全由组件自身控制。"]}),s.jsxs("li",{children:["在类组件中，",s.jsx("code",{children:"state"})," 通常通过构造函数初始化，可以通过 ",s.jsx("code",{children:"this.setState"})," 更新，这将触发重新渲染。"]}),s.jsxs("li",{children:["在函数组件中，",s.jsx("code",{children:"state"})," 通过 ",s.jsx("code",{children:"useState"})," 钩子管理。"]}),s.jsxs("li",{children:["更新 ",s.jsx("code",{children:"state"})," 可能会导致组件及其子组件的重新渲染。"]})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、Props（属性）"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:[s.jsx("code",{children:"props"})," 是 properties 的简写，是组件的输入。它们是从",s.jsx("span",{className:"font-bold text-stone-900",children:"父组件"}),"传递到子组件的数据。"]}),s.jsxs("ul",{className:"list-disc list-inside space-y-2 mb-6 text-stone-700 ml-4",children:[s.jsxs("li",{children:[s.jsx("code",{children:"props"})," 是不可变的：无法在子组件内部改变。"]}),s.jsxs("li",{children:[s.jsx("code",{children:"props"})," 可以用来定制组件的外观和行为。"]}),s.jsxs("li",{children:["在类组件中，通过 ",s.jsx("code",{children:"this.props"})," 访问。"]}),s.jsx("li",{children:"在函数组件中，作为参数直接传递。"})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、框架代码"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["添加构造函数来访问属性和初始化阶段。",s.jsx("code",{children:".props"})," 和 ",s.jsx("code",{children:".state"})," 用来访问对象。",s.jsx("code",{children:"return"})," 里面是虚拟 HTML 环境。"]}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`import React, { Component } from 'react';

class Comment extends Component {
  constructor(props) {
    super(props);
    // 初始化 state
  }

  render() {
    return (
      <div>
        {/* 组件内容 */}
      </div>
    );
  }
}

export default Comment;`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四、实例分析"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/158e4bacb9e74241b68e6e45824f14c9.png",alt:"Instance Example 1",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"创建一个 LikeButton。逻辑：如果 liked 为真（喜欢），返回一个图像；否则返回空或是“不喜欢”的状态。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8262e4c49cb941008a9330cfd83edc15.png",alt:"Instance Example 2",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 font-bold text-stone-800 mt-4",children:"三元运算符的使用："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/faca8abcfe8943b3ac8f2ee2856c9cb1.png",alt:"Ternary Operator",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"五、更新函数"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f71e0a57c3e84215b33b66b4a4b4a95b.png",alt:"Update Function",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-4 text-stone-700",children:"如果点击按钮就触发函数。"}),s.jsx("h4",{className:"text-lg font-bold text-stone-800 mt-6 mb-3",children:"整体代码结构："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b3df82493f17457f94bbdd68aa6925ef.png",alt:"Full Code",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"总结"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ea82d06ed58c47c6a40404af1419a089.png",alt:"Summary",className:"w-full h-auto rounded-xl shadow-lg mb-6"})]})},{id:"9",title:"Web 开发学习笔记 Day 7.5: UI 设计美学与思考",excerpt:"深入思考 UI 设计原则：背景处理、导航栏设计、封装美学以及字体配色的搭配艺术。学习优秀网站案例，确立独特的个人风格。",date:"2024-09-24",readTime:"10 min",category:"UI Design",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-4 text-stone-700 leading-relaxed",children:["学习 ",s.jsx("span",{className:"font-bold text-orange-600",children:"UI"})," 怎么做才能美观，思考怎么做背景，怎么做导航，怎么封装才美观，文字颜色字体怎么搭配。"]}),s.jsx("p",{className:"mb-6 text-stone-700 leading-relaxed",children:"多学习著名的网站经验，不能把东西都塞到一个界面，要拥有自己的风格等等。"}),s.jsxs("div",{className:"space-y-8",children:[s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/11c8e0a1595e49b4a6d5e6aa048b5963.png",alt:"UI Design Inspiration 1",className:"w-full h-auto rounded-xl shadow-lg border border-stone-200/50"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3f150dba100a4cb1bf9b2ea625a48748.png",alt:"UI Design Inspiration 2",className:"w-full h-auto rounded-xl shadow-lg border border-stone-200/50"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/42834901353a45b599aac98a428dabad.png",alt:"UI Design Inspiration 3",className:"w-full h-auto rounded-xl shadow-lg border border-stone-200/50"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5f895ec682f54b5dac71b680ade6e09d.png",alt:"UI Design Inspiration 4",className:"w-full h-auto rounded-xl shadow-lg border border-stone-200/50"})]})]})},{id:"8",title:"Web 开发学习笔记 Day 7: JavaScript 贪吃蛇小游戏",excerpt:"使用原生 JavaScript 实现经典贪吃蛇游戏，包含游戏循环、蛇的移动与增长、食物生成及碰撞检测逻辑。",date:"2024-09-20",readTime:"30 min",category:"Game Dev",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-4",children:["主要是用 ",s.jsx("span",{className:"font-bold text-orange-600",children:"JavaScript"})," 做一个",s.jsx("a",{href:"https://so.csdn.net/so/search?q=%E8%B4%AA%E5%90%83%E8%9B%87&spm=1001.2101.3001.7020",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:underline",children:"贪吃蛇"}),"小游戏。"]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/db1984db4c714382ba728fec5dd2c5bf.png",alt:"Snake Game",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"1. Game Logic (game.js)"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`const SNAKE_SPEED = 5;       // 定义蛇的速度
const gameBoard = document.getElementById("game-board");

let isGameOver = false;

const main = () => {         // 游戏主循环
	update();
	draw();
	if (isGameOver) {
		alert("Game Over");
		clearInterval(gameLoop);
	}
};

let gameLoop = setInterval(main, 1000 / SNAKE_SPEED);

const update = () => {
	console.log("Updating");
	updateSnake();
	updateFood();
	isGameOver = checkGameOver();
};

const draw = () => {
	gameBoard.innerHTML = "";
	drawSnake(gameBoard);
	drawFood(gameBoard);
};

const checkGameOver = () => {
	return snakeOutOfBounds() || snakeIntersectSelf();
};`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"2. Snake Logic (snake.js)"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`const drawSnake = (gameBoard) => {
  for (let i = 0; i < snakeBody.length; i++) {
    const segment = snakeBody[i];
    const snakeElement = document.createElement('div');
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;
    snakeElement.classList.add('snake');
    gameBoard.appendChild(snakeElement);
  }
};

const snakeBody = [
  { x: 11, y: 11 },
  { x: 11, y: 10 },
  { x: 11, y: 9 },
];

const updateSnake = () => {
  snakeBody.pop(); // 移除尾部
  const newHead = { ...snakeBody[0] };
  const snakeDirection = getInputDirection();

  newHead.x += snakeDirection.x;
  newHead.y += snakeDirection.y;

  snakeBody.unshift(newHead); // 添加新头部
};

const GRID_SIZE = 21;

const onSnake = (position) => {
  for (let i = 0; i < snakeBody.length; i++) {
    if (equalPositions(position, snakeBody[i])) {
      return true;
    }
  }
  return false;
};

const equalPositions = (pos1, pos2) => {
  return pos1.x === pos2.x && pos1.y === pos2.y;
};

const growSnake = () => {
  snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
};

const getNewFoodPosition = () => {
  let randomFoodPosition = randomGridPosition();
  while (onSnake(randomFoodPosition)) {
    randomFoodPosition = randomGridPosition();
  }
  return randomFoodPosition;
};

const randomGridPosition = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1,
    y: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
};

const outOfBounds = (position) => {
  return (
    position.x < 1 ||
    position.x > GRID_SIZE ||
    position.y < 1 ||
    position.y > GRID_SIZE
  );
};

const snakeOutOfBounds = () => {
  return outOfBounds(snakeBody[0]);
};

const snakeIntersectSelf = () => {
  for (let i = 1; i < snakeBody.length; i++) {
    if (equalPositions(snakeBody[0], snakeBody[i])) {
      return true;
    }
  }
  return false;
};`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"3. Food Logic (food.js)"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`let food = { x: 4, y: 16 };

const updateFood = () => {
  if (onSnake(food)) {
    growSnake();
    food = getNewFoodPosition();
  }
};

const drawFood = (gameBoard) => {
  const foodElement = document.createElement('div');
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add('food');
  gameBoard.appendChild(foodElement);
};`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"4. Input Logic (input.js)"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`let inputDirection = { x: 0, y: 1 };

window.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowUp' && inputDirection.x !== 0) {
    inputDirection = { x: 0, y: -1 };
  } else if (event.key === 'ArrowDown' && inputDirection.x !== 0) {
    inputDirection = { x: 0, y: 1 };
  } else if (event.key === 'ArrowRight' && inputDirection.y !== 0) {
    inputDirection = { x: 1, y: 0 };
  } else if (event.key === 'ArrowLeft' && inputDirection.y !== 0) {
    inputDirection = { x: -1, y: 0 };
  }
});

const getInputDirection = () => {
  return inputDirection;
};`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"5. CSS (style.css)"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`body {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: gray;
}

#game-board {
  background-color: black;
  width: 100vmin;
  height: 100vmin;
  display: grid;
  grid-template-rows: repeat(21, 1fr);
  grid-template-columns: repeat(21, 1fr);
}

.snake {
  background-color: lime;
  border: 0.25vmin solid black;
}

.food {
  background-color: red;
  border: 0.25vmin solid gray;
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"6. HTML (index.html)"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Snake</title>
    <script src="snake.js"><\/script>
    <script src="input.js"><\/script>
    <script src="food.js"><\/script>
    <script src="game.js" defer><\/script>
  </head>
  <body>
    <div id="game-board"></div>
  </body>
</html>`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"总结"}),s.jsxs("p",{className:"mb-4 text-stone-700",children:["写一个完整的项目需要周密的逻辑，考虑哪里会出现问题，考虑",s.jsx("span",{className:"font-bold text-orange-600",children:"边界情况"}),"。"]}),s.jsx("p",{className:"mb-4 text-stone-700",children:"我掌握的很差，他说之后慢慢来，不用一下全部掌握，先混个眼熟 😀"}),s.jsx("p",{className:"mb-4 text-stone-700 font-medium",children:"总之，JavaScript 可以帮助我们在网页做出修改，可以监听用户的输入。"})]})},{id:"7",title:"Web 开发学习笔记 Day 6: JavaScript DOM 操作补遗",excerpt:"补充 JavaScript DOM 操作知识：使用 ID 选择元素、修改样式、数组操作、事件监听(click)以及 Window 对象的使用。",date:"2024-09-20",readTime:"15 min",category:"JavaScript",content:s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"mb-4",children:"这部分是上次落下的一些语法。"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"1. 用 ID 标记并使用"}),s.jsxs("p",{className:"mb-2",children:["通过 ",s.jsx("code",{children:"getElementById"})," 获取元素并打印："]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4ffa3da958754444823256be832d20e2.png",alt:"ID Selection",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-4"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/01ae21a19ff04f12a97444d964bd1296.png",alt:"Console Output",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 font-bold",children:"改变颜色："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/0ceab68049874a169c9f1baf4b4d6c3e.png",alt:"Change Color",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 font-bold",children:"数组添加 (push)："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bbb4511094d84360beb5a8051606bb9f.png",alt:"Array Push",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-4"}),s.jsx("p",{className:"text-sm text-stone-500 mb-6",children:"这些只会改变最终的实现，不会改变代码文件本身。"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"2. 互动：Click 点击事件"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/2c47ba1a6e7140d5bf8e8bb95031f9a7.png",alt:"Click Event",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"3. Window 对象"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/f0e6dd9db2e94c28bd8573243aa45d11.png",alt:"Window Object",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"4. 一个实例"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/2ff8cc67b441471cb279461ce45cc24d.png",alt:"Instance Example",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"总结"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/200aa8b351f54a658e1ae539396ccba4.png",alt:"Summary",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6"})]})},{id:"6",title:"Web 开发学习笔记 Day 5: JavaScript 基础",excerpt:"JavaScript 数据类型、运算符、循环、函数以及 ES6 新特性（类、扩展运算符）的快速入门。",date:"2024-09-14",readTime:"25 min",category:"JavaScript",content:s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"mb-4",children:"今天纯纯学习 JavaScript，因为学过 C++ 所以简洁列出。"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、数据类型"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bb6e5cf4340a4c0c9eef8536b3cc7af1.png",alt:"数据类型",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、运算符"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c886d821ee1f4e1a962562e9620a2d95.png",alt:"运算符",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 text-stone-600",children:"注意三等号，与双等号不同："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/66c8a2543a064b22b2481043adf5f793.png",alt:"等号区别",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"三、命名方式"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5ac1a0237c654dbfb3b1fdcdd9b8efac.png",alt:"命名方式",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 text-stone-600 font-semibold",children:"常量："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1e26f027d78b4bee8e909684a583d3f5.png",alt:"常量",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 text-stone-600 font-semibold",children:"不用 var："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8d34a5007993487bae19da7c6d0e0860.png",alt:"let const",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"四、输出"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7ad4534deca64da2b2eb4f1f4923c686.png",alt:"输出",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"五、警报（Alert）"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/57f1ee8538c8433cbb5f74a85632ab5b.png",alt:"警报",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"六、数组"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/85e064fa24324094abcfda4d184e127f.png",alt:"数组",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 mt-4 text-stone-600 font-bold",children:"Map 函数："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e16052975aec47e2af05157309388ebe.png",alt:"Map函数",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 mt-4 text-stone-600 font-bold",children:"Filter 函数："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/5a9bc96f6b4a493696fbafb65d88d167.png",alt:"Filter函数",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"七、If 判断"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/08d2646c9ecd4b1d8b3f1f17dd386c59.png",alt:"If判断",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"八、循环"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/6f21ef2d8f1b43e3ad54a424093ce03b.png",alt:"循环1",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/e295fbff2ca24c08a848b7ef415fca75.png",alt:"循环2",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"九、函数"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/651a09dd5b08483ab5e220df9f7d8fc7.png",alt:"函数",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mb-2 mt-4 text-stone-600 font-bold",children:"回调函数："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/080f39080887488ba014f2d6e743b824.png",alt:"回调函数",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"十、类 (Class)"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/a494eccdeb054156983a19f070edab51.png",alt:"类",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"十一、扩展运算符"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/fa516f83743d4f85a3aac0aca53fe5fc.png",alt:"扩展运算符",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mt-6 text-stone-500 italic",children:"后面和 HTML 结合的内容明天复习一下再放出来吧，有点没看懂，C++ 忘光了，有点蒙。之后好好复习一下 C++。"})]})},{id:"4",title:"Web 开发学习笔记 Day 4: CSS优化与Flex布局",excerpt:"学习CSS类、字体引入、自定义属性、Flex布局等页面优化技巧。",date:"2024-09-11",readTime:"20 min",category:"Web开发",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-4",children:["今天主要学习了 ",s.jsx("span",{className:"text-orange-600 font-bold",children:"HTML"})," 和 CSS 优化页面，零碎知识点比较多。"]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"1. 学会在 CSS 里书写类"}),s.jsx("p",{className:"mb-4",children:"并在 HTML 中使用（不懂多问 AI）。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/239978e435cf45f998ae6fdda1cc02ac.png",alt:"CSS Class Example",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"2. 文字的位置"}),s.jsx("p",{className:"mb-4",children:"如居中、居左等。"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`.u-textCenter {
    text-align: center;
}`})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"3. 更改字体"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3d8d22fc3dec47018eb37ca806cd1dc5.png",alt:"Font Example 1",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/833fe151e3d44f3f94a0dbff55649173.png",alt:"Font Example 2",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`@import url('https://fonts.googleapis.com/css2?family=ZCOOL+KuaiLe&display=swap');
html, body {
    margin: 0;
    font-family: "ZCOOL KuaiLe", sans-serif;
    font-weight: 400;
    font-style: normal;
}`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1a4d9bdb7fd7432ea22ea851e2b787e9.png",alt:"Font Result",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"4. 封装自定义属性"}),s.jsx("p",{className:"mb-4",children:"底下的大小是4的倍数，使页面看起来舒服一点。"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`:root {
    --primaryL: #396dff;
    --grey: #f7f7f7;
    --white: #fff;

    --xs: 4px;
    --s: 8px;
    --m: 16px;
    --l: 24px;
}`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/6f9c5ad702f8454ba3b41fd423d0aff3.png",alt:"Root Variables",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"5. 写导航栏"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`<nav class="navContainer">
    <h1 class="navTitle">gagagaa</h1>
</nav>`})}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`.navTitle {
    color: var(--white);
    font-size: 20px;
    margin: 0;
    font-weight: normal;
}

.navContainer {
    padding: var(--s) var(--m);
    background-color: var(--primaryL);
}`})}),s.jsx("p",{className:"mb-4",children:"最后实现效果："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/a4dc0a9639cb4e0aac35d07c387ec50d.png",alt:"Navbar Result",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"6. 去除边距"}),s.jsx("p",{className:"mb-4",children:"F12 查看布局。"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/30461aa9fa1b43eebb2d1545ae586a03.png",alt:"Margin Inspection",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c19dffe2bd914eb2aadd2a4358e9fa2d.png",alt:"Defining Rules",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"7. 圆滑边角"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`.centeredImage {
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: var(--m);
}`})}),s.jsx("p",{className:"mb-4",children:"前三行用于居中，最后一行用于圆滑边角。"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"8. Flex 管理页面规格"}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`<div class="u-flex">
    <section class="u-textCenter u-colour subContainer">
        <h4>一</h4>
        <p>这里应该放点东西的</p>
    </section>
    <section class="u-colour u-textCenter subContainer">
        <h4>二</h4>
        <a href="https://space.bilibili.com/273323983">
            我的bilbil!
        </a>
    </section>
</div>`})}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`.u-flex {
    display: flex;
}`})}),s.jsx("p",{className:"mb-4",children:"设置初设值和比例值："}),s.jsx("pre",{className:"bg-stone-800 text-stone-200 p-4 rounded-lg overflow-x-auto mb-6 font-mono text-sm",children:s.jsx("code",{children:`.subContainer {
    flex-basis: 0;
    flex-grow: 1;
}`})}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4a6407ef12734280a70ec4e628f1d9aa.png",alt:"Flex Result",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"查缺补漏"}),s.jsx("p",{className:"mb-4",children:"1个错误："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/bc03ad4f41564f08831f50b36c2136d4.png",alt:"Error Fix",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"最后实现"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/ca21c4ef7a1245e29b2191d826da926c.png",alt:"Final Result",className:"w-full h-auto rounded-xl shadow-lg mb-6"}),s.jsx("p",{className:"mt-6 mb-4",children:s.jsx("a",{href:"https://gaagaga.github.io/weblab/",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:text-orange-800 hover:underline transition-colors font-bold",children:"🔗 网站链接：gagagaa (gaagaga.github.io)"})})]})},{id:"3",title:"Web 开发学习笔记 Day 3: HTML基础与CSS初探",excerpt:"学习HTML基本标签（head, body, div, img, link）以及CSS ID选择器的使用。",date:"2024-09-11",readTime:"15 min",category:"Web开发",content:s.jsxs(s.Fragment,{children:[s.jsx("p",{className:"mb-4",children:"今天学习大概两部分："}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"一、学习 HTML 的编写"}),s.jsxs("ul",{className:"list-none space-y-3 mb-6 text-stone-700",children:[s.jsx("li",{children:s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"1. HTML 部分"})}),s.jsxs("li",{children:[s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"2. Head 部分"}),": 一个 title 和一个样式表（用于后面 CSS）"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"3. Body 部分"}),": 主体"]}),s.jsx("li",{children:s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"4. h1 和 p 用途"})}),s.jsxs("li",{children:[s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"5. div 框架"}),": 主题"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"6. a tag"}),": 用于引用其他链接"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"7. img"}),": 用于图片"]}),s.jsxs("li",{children:[s.jsx("strong",{className:"text-stone-900 bg-orange-100 px-1 rounded",children:"8. link"}),": 将 HTML 和 CSS 连接"]})]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/651f3d774a5f4697acec51bd2849b4eb.png",alt:"HTML Structure 1",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7e19cc5c7d1941e58ee53f4b2f207360.png",alt:"HTML Structure 2",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/762cfab235bd4841b4983e535101cdbb.png",alt:"HTML Structure 3",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"二、学习 CSS 编写"}),s.jsxs("div",{className:"mb-4",children:[s.jsx("p",{className:"mb-2",children:s.jsx("span",{className:"font-bold text-orange-600",children:"ID 选择器"})}),s.jsx("p",{className:"text-stone-500",children:"Class 选择器（还没实现）"})]}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/4c15e57f92114f5c9f2fe782c37e7e0d.png",alt:"CSS ID",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("h4",{className:"text-lg font-bold text-stone-700 mt-6 mb-3",children:"两者关系"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/2f0ca879680b473f81914ef928b791cc.png",alt:"Relation 1",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg mb-6"}),s.jsxs("div",{className:"flex flex-col md:flex-row gap-4 mb-6",children:[s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/3cd7e65b86d44d5e89c5c49e083f74d3.png",alt:"Relation 2",className:"w-full md:w-1/3 h-auto rounded-xl shadow-lg object-contain"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/b33bb4b31ad047c6b4718f13cec00e16.png",alt:"Relation 3",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg object-cover"})]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"最后实现效果"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/8d6e3183ccc34e4183476775799b3472.png",alt:"Result 1",className:"w-full md:w-1/2 h-auto rounded-xl shadow-lg mb-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/28cab6d0c1de4fd5a7d9f04a0884a27c.png",alt:"Result 2",className:"w-full h-auto rounded-xl shadow-lg mb-6"})]})},{id:"2",title:"Web 开发学习笔记 Day 2: 网站设计思考与规划",excerpt:"思考产品受众与设计目标，规划网站的主要功能模块：主页、日记、游戏与资源分享。",date:"2024-09-06",readTime:"10 min",category:"产品设计",content:s.jsxs(s.Fragment,{children:[s.jsxs("p",{className:"mb-6 text-stone-700 leading-relaxed font-medium",children:["思考如何设计，怎么设计是好的，有创意的，思考你的产品受众，如何才能让大家喜欢。",s.jsx("br",{}),"只要有想法就先写下来，不管现在有没有能力实现，版本更迭会做的更好的。"]}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-6",children:"我的目标"}),s.jsxs("div",{className:"grid gap-4",children:[s.jsxs("div",{className:"bg-white/60 p-5 rounded-xl border border-white/70 shadow-sm transition-all hover:shadow-md",children:[s.jsxs("h4",{className:"font-bold text-stone-800 mb-2 flex items-center gap-2",children:[s.jsx("span",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-orange-100 text-orange-600 text-xs",children:"1"}),"主页面干净"]}),s.jsxs("p",{className:"text-stone-600 text-sm ml-8",children:["UI清晰，学习 ",s.jsx("a",{href:"https://limestart.cn/",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:text-orange-800 underline decoration-orange-300 hover:decoration-2",children:"青柠起始页 (limestart.cn)"})," 的设计风格。"]})]}),s.jsxs("div",{className:"bg-white/60 p-5 rounded-xl border border-white/70 shadow-sm transition-all hover:shadow-md",children:[s.jsxs("h4",{className:"font-bold text-stone-800 mb-2 flex items-center gap-2",children:[s.jsx("span",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-pink-100 text-pink-600 text-xs",children:"2"}),"日记部分"]}),s.jsx("p",{className:"text-stone-600 text-sm ml-8",children:"一方面是学习日记，未来的其他都放进来，一部分是生活日记。"})]}),s.jsxs("div",{className:"bg-white/60 p-5 rounded-xl border border-white/70 shadow-sm transition-all hover:shadow-md",children:[s.jsxs("h4",{className:"font-bold text-stone-800 mb-2 flex items-center gap-2",children:[s.jsx("span",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 text-xs",children:"3"}),"游戏部分"]}),s.jsx("p",{className:"text-stone-600 text-sm ml-8",children:"以后做的小游戏尽量都弄进来。"})]}),s.jsxs("div",{className:"bg-white/60 p-5 rounded-xl border border-white/70 shadow-sm transition-all hover:shadow-md",children:[s.jsxs("h4",{className:"font-bold text-stone-800 mb-2 flex items-center gap-2",children:[s.jsx("span",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-pink-100 text-pink-600 text-xs",children:"4"}),"资源分享"]}),s.jsx("p",{className:"text-stone-600 text-sm ml-8",children:"放一些快捷好用的资源（网站，电子书）给大家使用。"})]}),s.jsxs("div",{className:"bg-white/60 p-5 rounded-xl border border-white/70 shadow-sm transition-all hover:shadow-md",children:[s.jsxs("h4",{className:"font-bold text-stone-800 mb-2 flex items-center gap-2",children:[s.jsx("span",{className:"flex items-center justify-center w-6 h-6 rounded-full bg-purple-100 text-purple-600 text-xs",children:"5"}),"路人留言"]}),s.jsx("p",{className:"text-stone-600 text-sm ml-8",children:"留一个路人可以写东西的地方？（也许不用）。"})]})]}),s.jsx("p",{className:"mt-8 text-stone-500 italic border-l-4 border-stone-200 pl-4 py-1",children:"再看到有趣的我会加进来..."})]})},{id:"5",title:"从零学习 Web 开发 Day 1",excerpt:"MIT Web Development Crash Course 学习笔记：Git 基础配置、常用指令与 GitHub 问题解决。",date:"2024-09-05",readTime:"15 min",category:"Web开发",content:s.jsxs(s.Fragment,{children:[s.jsx("h3",{className:"text-2xl font-bold text-stone-800 mb-4",children:"前言"}),s.jsx("p",{className:"mb-4",children:"学习课程 2021年 MIT Web Development Crash Course 麻省理工 Web 开发速成课程。"}),s.jsx("p",{className:"mb-6",children:s.jsx("a",{href:"https://www.bilibili.com/video/BV18G411Z7MZ/?spm_id_from=333.1007.top_right_bar_window_default_collection.content.click&vd_source=3e13336dab4d46419c30e2df5571fec9",target:"_blank",rel:"noopener noreferrer",className:"text-orange-600 hover:text-orange-800 hover:underline transition-colors",children:"📺 视频链接：2021年MIT Web Development Crash Course 麻省理工 Web 开发速成课程中英字幕_哔哩哔哩_bilibili"})}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"1. 学会 Git 概念"}),s.jsx("p",{className:"mb-4",children:"了解 Git 的基本原理，以及如何在 Windows 上实现 Linux 环境。"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"2. 认识并使用一些 Git 指令"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/99342f54d5114012ae201936473c4521.png",alt:"Git 指令演示",className:"w-full h-auto rounded-xl shadow-lg my-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"3. 学会使用"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/cadb0efc5a804e8ea279df835afaecb6.png",alt:"使用演示",className:"w-full h-auto rounded-xl shadow-lg my-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"4. 命令指令"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/25e89923b68d4e58ae4685e6102ca048.png",alt:"命令行操作",className:"w-full h-auto rounded-xl shadow-lg my-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"最后实现"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/134d29e519c9408694dce73d631e3bd0.png",alt:"最终效果",className:"w-full h-auto rounded-xl shadow-lg my-6"}),s.jsx("h3",{className:"text-xl font-bold text-stone-800 mt-8 mb-3",children:"部分日志"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1b50813b23dc4d3181518f241493878e.png",alt:"日志记录 1",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg my-6"}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/c7e300d61805445ab3e11070b38aa31c.png",alt:"日志记录 2",className:"w-full h-auto rounded-xl shadow-lg my-6"}),s.jsx("h3",{className:"text-2xl font-bold text-stone-800 mt-10 mb-4",children:"问题解决"}),s.jsx("h4",{className:"text-lg font-semibold text-stone-700 mt-6 mb-2",children:"问题 1: 无法连接 GitHub"}),s.jsx("p",{className:"mb-2 font-mono text-sm bg-red-50 text-red-600 p-2 rounded border border-red-100 inline-block",children:"fatal: unable to access 'https://github.com/xx': Could not resolve host: github.com"}),s.jsx("p",{className:"mb-2",children:"解决方案："}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/7a5a74246a9c4ebf877ad9cd7baee12f.png",alt:"解决方案截图",className:"w-full md:w-3/4 h-auto rounded-xl shadow-lg my-6"}),s.jsx("h4",{className:"text-lg font-semibold text-stone-700 mt-6 mb-2",children:"问题 2: Git 全局配置"}),s.jsxs("p",{className:"mb-2 font-mono text-sm bg-stone-100 text-stone-600 p-2 rounded border border-stone-200",children:['$ git config --global user.email "..."',s.jsx("br",{}),'$ git config --global user.name "..."']}),s.jsx("img",{src:"https://images.weserv.nl/?url=https://i-blog.csdnimg.cn/direct/1e77ce1e37be4456a35a6271e32e6b59.png",alt:"Git 配置截图",className:"w-full md:w-2/3 h-auto rounded-xl shadow-lg my-6"})]})}],Va=()=>{const[e,t]=Ue.useState(null),n=Ue.useMemo(()=>[...Um].sort((l,r)=>new Date(r.date).getTime()-new Date(l.date).getTime()),[]);return e?s.jsxs("div",{className:"max-w-4xl mx-auto animate-fade-in-up",children:[s.jsxs("button",{onClick:()=>t(null),className:"mb-8 flex items-center gap-2 text-slate-700 hover:text-pink-700 transition-colors bg-white/50 px-4 py-2 rounded-full backdrop-blur-sm border border-white/40",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"})}),"返回列表"]}),s.jsxs("article",{className:"glass-panel p-8 md:p-12 rounded-3xl shadow-sm border border-white/60 bg-white/80 backdrop-blur-lg",children:[s.jsxs("header",{className:"mb-8 pb-8 border-b border-slate-200",children:[s.jsxs("div",{className:"flex gap-3 mb-4",children:[s.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100",children:e.category}),s.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-500",children:e.date})]}),s.jsx("h1",{className:"text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-4",children:e.title})]}),s.jsx("div",{className:"prose prose-slate prose-lg max-w-none text-slate-700 leading-loose",children:e.content})]})]}):s.jsxs("div",{className:"space-y-8 max-w-4xl mx-auto animate-fade-in-up",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-8 bg-white/60 p-4 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm",children:[s.jsx("div",{className:"p-2 bg-pink-100 rounded-lg text-pink-600",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"})})}),s.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"技术博客"}),s.jsx("div",{className:"h-[1px] flex-grow bg-gradient-to-r from-pink-200/50 to-transparent"})]}),s.jsx("div",{className:"grid gap-6",children:n.map(l=>s.jsx("div",{onClick:()=>t(l),className:"group cursor-pointer",children:s.jsxs("article",{className:"relative glass-panel bg-white/70 hover:bg-white/90 p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-white/60 overflow-hidden",children:[s.jsx("div",{className:"absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-pink-400/20 to-rose-400/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"}),s.jsxs("div",{className:"relative z-10",children:[s.jsxs("div",{className:"flex items-center justify-between mb-3",children:[s.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300",children:l.category}),s.jsx("span",{className:"text-xs font-mono text-slate-500",children:l.date})]}),s.jsx("h3",{className:"text-xl md:text-2xl font-bold text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-emerald-600 transition-all duration-300",children:l.title}),s.jsx("p",{className:"text-slate-600 text-sm md:text-base leading-relaxed mb-4 font-light line-clamp-2",children:l.excerpt}),s.jsx("div",{className:"flex items-center justify-end border-t border-slate-200/50 pt-4 mt-2 h-10",children:s.jsxs("span",{className:"text-sm text-pink-700 font-medium opacity-0 transform translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex items-center gap-1",children:["阅读全文",s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",className:"w-4 h-4",children:s.jsx("path",{fillRule:"evenodd",d:"M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z",clipRule:"evenodd"})})]})})]})]})},l.id))})]})},zm=[{id:"22",date:"2026-3-4",mood:"🎮",content:"准备先把游戏打包手机做完去刷算法（后天杀戮尖塔2就来了期待）",weather:"一般"},{id:"21",date:"2026-2-11",mood:"💪",content:"博客补完了，基本上现在就是刷leetcode了",weather:"一般"},{id:"20",date:"2026-2-6",mood:"🤔",content:"基本实现游戏内容，打包也能给他们玩了，没有任何游戏性，回学校再补吧。现在要做的是：1. 把博客补了 2. 学一下c++刷题 3. 补充游戏性",weather:"冷"},{id:"19",date:"2026-1-26",mood:"😞",content:"感觉在家学习效率好低",weather:"冷"},{id:"18",date:"2026-1-20",mood:"🤔",content:"之后学一下工作流skill，还有claude提示词，写博客这个搬运的过程还可以简化。寒假一周之内完成项目，然后学一下c#，c++语法最后再优化之前的项目？还是用ai写一些没完成的思路？感觉还是自己写好点，现在一个月没动都忘的差不多了🙄",weather:"冷"},{id:"17",date:"2026-1-19",mood:"🥰",content:"今天搞好了claude code，以后就拿这个更新博客和日记了挺方便的",weather:"冷"},{id:"16",date:"2026-1-4",mood:"👁️",content:"科目三结束，说实话感觉还是要做一个app来写日记再导入，不然这样有时候还是积极性不够（最近太忙）",weather:"冷"},{id:"15",date:"2025-12-20",mood:"👁️",content:"b🐷是真恶心，tm改了3个小时真的服了。AI也改不好，看了还是无法代替我🤣",weather:"冷"},{id:"14",date:"2025-12-20",mood:"👁️",content:"有的时候就是想写点长的东西，但是现在太低能了感觉两行后面就不会写了",weather:"冷"},{id:"13",date:"2025-12-17",mood:"😣",content:"学不动了还有15节课，放寒假前感觉还差点劲",weather:"冷"},{id:"12",date:"2025-12-16",mood:"😶",content:"我的unity新项目未来一定要解决的两个事情：1做受击掉血出数字 2做好生物逻辑",weather:"冷"},{id:"11",date:"2025-12-14",mood:"😶",content:"人生有点得意的话配置一下hadoop",weather:"冷"},{id:"10",date:"2025-12-11",mood:"🤔",content:"改bug改了3个小时，吐了",weather:"一般"},{id:"9",date:"2025-12-3",mood:"🥲",content:"学unity人物的动作，很难想象下电梯的神级设计是怎么做的，太难了。还有人能真正跑起来，有动画真的很有成就感",weather:"冷冷冷冷冷死了"},{id:"8",date:"2025-12-2",mood:"☀️",content:"学车真的很怕又挂科😫，感觉这是近几年最让人烦恼的事情，我从没想到会让我这么焦虑",weather:"晴"},{id:"7",date:"2025-12-1",mood:"☀️",content:"学习unity中🤓",weather:"晴"},{id:"6",date:"2025-11-29",mood:"☁️",content:"看到影视飓风的视频，大AI时代没有不被影响的，没有不为之焦虑的，我甚至不想把有些东西喂给他。也许有一天新的大模型就会把你的工作一脚踢飞谁又知道后面会怎样呢",weather:"多云"},{id:"5",date:"2025-11-27",mood:"☀️",content:"抖音上刷到初中同学，也是感叹他们俩多年还能在一起，谁又不想看青梅竹马走到最后的故事呢",weather:"晴"},{id:"4",date:"2025-11-25",mood:"☀️",content:"有没想合租的，在外面打工的时候可以一起做饭或者出去玩，感觉一个人好孤独🥲",weather:"晴"},{id:"3",date:"2025-11-24",mood:"☀️",content:"时钟功能一直实现不了，之后再做吧",weather:"晴"},{id:"2",date:"2025-11-24",mood:"☁️",content:"体侧累坏了，以后真不能再强撑了，还有要加强心肺训练😫",weather:"多云"},{id:"1",date:"2025-11-23",mood:"☁️",content:"从这里开始",weather:"多云"}],Fm=()=>{const[e,t]=Ue.useState(!1),[n,l]=Ue.useState(""),[r,o]=Ue.useState(!1),a=i=>{i.preventDefault(),n==="827"?(t(!0),o(!1)):(o(!0),l(""))};return e?s.jsxs("div",{className:"max-w-2xl mx-auto animate-fade-in-up",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-10 bg-white/60 p-4 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm",children:[s.jsx("h2",{className:"text-2xl font-bold text-stone-800",children:"生活日志"}),s.jsx("div",{className:"h-[1px] flex-grow bg-gradient-to-r from-stone-200 to-transparent"}),s.jsx("button",{onClick:()=>t(!1),className:"p-2 text-stone-400 hover:text-orange-500 transition-colors",title:"锁定",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-5 h-5",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})})})]}),s.jsx("div",{className:"relative border-l-2 border-orange-100/50 ml-3 space-y-12",children:zm.map(i=>s.jsxs("div",{className:"relative pl-8 md:pl-12 group",children:[s.jsx("div",{className:"absolute -left-[9px] top-3 w-4 h-4 rounded-full bg-white border-4 border-orange-200 group-hover:border-orange-400 group-hover:scale-110 transition-all duration-300 shadow-sm"}),s.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-2 mb-3",children:[s.jsx("span",{className:"text-sm font-bold text-stone-500",children:i.date}),s.jsxs("div",{className:"flex gap-2 text-sm text-stone-400 bg-white/50 px-2 py-0.5 rounded-full w-fit border border-white/60",children:[s.jsx("span",{children:i.mood}),s.jsx("span",{className:"text-stone-300",children:"•"}),s.jsx("span",{children:i.weather})]})]}),s.jsx("div",{className:"p-6 glass-panel bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:bg-white/90",children:s.jsx("p",{className:"text-stone-700 leading-relaxed whitespace-pre-line font-light",children:i.content})})]},i.id))})]}):s.jsx("div",{className:"max-w-md mx-auto mt-12 animate-fade-in-up",children:s.jsxs("div",{className:"glass-panel bg-white/60 backdrop-blur-xl p-8 rounded-3xl shadow-lg border border-white/60 text-center",children:[s.jsx("div",{className:"w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500",children:s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-8 h-8",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"})})}),s.jsx("h2",{className:"text-xl font-bold text-stone-800 mb-2",children:"私密日记"}),s.jsx("p",{className:"text-stone-500 mb-8 text-sm",children:"请输入密码解锁内容"}),s.jsxs("form",{onSubmit:a,className:"flex flex-col gap-4",children:[s.jsx("div",{className:"relative",children:s.jsx("input",{type:"password",value:n,onChange:i=>{l(i.target.value),o(!1)},placeholder:"密码",className:"w-full px-4 py-3 rounded-xl bg-white/50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-orange-200 focus:border-orange-300 text-center tracking-widest text-stone-700 placeholder-stone-400 transition-all",autoFocus:!0})}),r&&s.jsx("p",{className:"text-red-500 text-xs font-medium animate-pulse",children:"密码错误，请重试"}),s.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-stone-800 to-stone-700 text-white font-medium py-3 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:scale-95",children:"解锁日记"})]})]})})},Bm=[{id:"1",title:"2D Advantage",description:"一款简单的2D动作游戏Demo，包含基础战斗系统和关卡机制。",tags:["Unity","2D","Action","Mobile"],imageUrl:"https://images.weserv.nl/?url=http://i0.hdslb.com/bfs/new_dyn/b76d4d9ae1ed4f0d2712d5f8166cedd1273323983.png",githubUrl:"https://github.com/gaagaga/2Dadvantage",images:["https://images.weserv.nl/?url=http://i0.hdslb.com/bfs/new_dyn/9f8d4e944397f0f2c21bdc1cf27d6eea273323983.png","https://images.weserv.nl/?url=http://i0.hdslb.com/bfs/new_dyn/b67c1cc1ce7287b709a0c398f7f077e1273323983.png"]}],Gm=()=>{const[e,t]=Ue.useState(null);return s.jsxs("div",{className:"animate-fade-in-up",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-10 max-w-3xl mx-auto bg-white/60 p-4 rounded-2xl backdrop-blur-md border border-white/50 shadow-sm",children:[s.jsx("h2",{className:"text-2xl font-bold text-stone-800",children:"项目展示"}),s.jsx("div",{className:"h-[1px] flex-grow bg-gradient-to-r from-stone-200 to-transparent"})]}),s.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto",children:Bm.map(n=>s.jsxs("div",{className:"glass-panel bg-white/70 rounded-2xl overflow-hidden hover:border-orange-200/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl",children:[s.jsxs("div",{className:"h-48 overflow-hidden bg-stone-100 relative",children:[s.jsx("img",{src:n.imageUrl,alt:n.title,className:"w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-transform duration-700"}),s.jsx("div",{className:"absolute inset-0 bg-stone-900/20 group-hover:bg-stone-900/10 transition-colors duration-300"})]}),s.jsxs("div",{className:"p-6",children:[s.jsx("h3",{className:"text-xl font-bold text-stone-800 mb-2",children:n.title}),s.jsx("p",{className:"text-stone-500 text-sm leading-relaxed mb-4 italic",children:n.description}),s.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:n.tags.map(l=>s.jsx("span",{className:"px-2.5 py-0.5 text-xs font-medium bg-stone-100 text-stone-500 border border-stone-200/50 rounded-full",children:l},l))}),s.jsxs("div",{className:"flex gap-2 pt-2 border-t border-stone-100/50",children:[n.githubUrl&&s.jsxs("a",{href:n.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 bg-stone-800 text-white text-center py-2 rounded-xl text-sm font-medium hover:bg-stone-700 transition-colors flex items-center justify-center gap-2",children:[s.jsx("svg",{className:"w-4 h-4",fill:"currentColor",viewBox:"0 0 24 24",children:s.jsx("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]}),n.images&&n.images.length>0&&s.jsx("button",{onClick:()=>t(e===n.id?null:n.id),className:"flex-1 bg-stone-100 text-stone-700 py-2 rounded-xl text-sm font-medium hover:bg-stone-200 transition-colors",children:e===n.id?"收起":"截图"})]}),e===n.id&&n.images&&s.jsx("div",{className:"mt-4 grid grid-cols-2 gap-2 animate-fade-in",children:n.images.map((l,r)=>s.jsx("img",{src:l,alt:`${n.title} screenshot ${r+1}`,className:"w-full h-32 object-cover rounded-lg"},r))})]})]},n.id))})]})},Hm=()=>{const[e,t]=Ue.useState(Le.BLOG),n=()=>{switch(e){case Le.BLOG:return s.jsx(Va,{});case Le.DIARY:return s.jsx(Fm,{});case Le.PROJECTS:return s.jsx(Gm,{});default:return s.jsx(Va,{})}};return s.jsxs("div",{className:"min-h-screen flex flex-col relative overflow-x-hidden font-sans text-stone-700 selection:bg-pink-200 selection:text-pink-900",children:[s.jsxs("div",{className:"fixed inset-0 z-0 bg-pink-50",children:[s.jsx("img",{src:"https://images.weserv.nl/?url=https://i0.hdslb.com/bfs/new_dyn/baaa0a0fd27496c2dc3ca208521b6ed715262773.jpg",alt:"Spring Background",className:"w-full h-full object-cover"}),s.jsx("div",{className:"absolute inset-0 bg-pink-100/20 backdrop-blur-[2px]"}),s.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-green-100/60 to-transparent"})]}),s.jsxs("div",{className:"relative z-10 flex flex-col min-h-screen",children:[s.jsx(Rm,{currentTab:e,onTabChange:t}),s.jsxs("main",{className:"flex-grow w-full max-w-5xl mx-auto px-6 py-12 md:py-16",children:[s.jsxs("header",{className:"mb-16 animate-fade-in-up",children:[s.jsxs("h1",{className:"text-center md:text-left text-4xl md:text-5xl font-bold text-stone-800 mb-8 tracking-tight drop-shadow-lg shadow-white",children:["你好，我是 ",s.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-400 to-emerald-500",children:"gagagaa"})]}),s.jsx("div",{className:"flex flex-col md:flex-row gap-6 items-stretch",children:s.jsxs("div",{className:"md:max-w-2xl backdrop-blur-md bg-white/50 p-8 rounded-3xl border border-pink-100/60 shadow-sm flex items-center hover:bg-white/60 transition-all duration-300 hover:shadow-md group",children:[s.jsx("div",{className:"w-1 h-12 bg-pink-400/60 rounded-full mr-6 group-hover:h-16 group-hover:bg-pink-500 transition-all duration-300"}),s.jsxs("p",{className:"text-stone-800 text-lg md:text-xl font-medium leading-relaxed",children:["欢迎来到我的blog",s.jsx("br",{className:"hidden md:block"}),"春日里的思考，以及那些温暖时光"]})]})})]}),n()]}),s.jsx(Mm,{})]})]})},sd=document.getElementById("root");if(!sd)throw new Error("Could not find root element to mount to");const Vm=$l.createRoot(sd);Vm.render(s.jsx(yd.StrictMode,{children:s.jsx(Hm,{})}));
