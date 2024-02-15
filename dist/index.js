"use strict";var g=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var m=g(function(qe,I){I.exports={objectMode:!1,encoding:null,sep:"\n",copy:!0,siter:1e308}});var y=g(function(we,b){
var C=require('@stdlib/assert-is-plain-object/dist'),a=require('@stdlib/assert-has-own-property/dist'),J=require('@stdlib/assert-is-boolean/dist').isPrimitive,z=require('@stdlib/assert-is-nonnegative-number/dist').isPrimitive,l=require('@stdlib/assert-is-string/dist').isPrimitive,B=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,D=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,o=require('@stdlib/error-tools-fmtprodmsg/dist');function U(r,e){return C(e)?a(e,"sep")&&(r.sep=e.sep,!l(r.sep))?new TypeError(o('0qn2W',"sep",r.sep)):a(e,"objectMode")&&(r.objectMode=e.objectMode,!J(r.objectMode))?new TypeError(o('0qn2o',"objectMode",r.objectMode)):a(e,"encoding")&&(r.encoding=e.encoding,!l(r.encoding)&&r.encoding!==null)?new TypeError(o('0qn7n',"encoding",r.encoding)):a(e,"highWaterMark")&&(r.highWaterMark=e.highWaterMark,!z(r.highWaterMark))?new TypeError(o('0qn4k',"highWaterMark",r.highWaterMark)):a(e,"iter")&&(r.iter=e.iter,!D(r.iter))?new TypeError(o('0qn2t',"iter",r.iter)):a(e,"siter")&&(r.siter=e.siter,!B(r.siter))?new TypeError(o('0qn3P',"siter",r.siter)):(a(e,"prng")&&(r.prng=e.prng),a(e,"seed")&&(r.seed=e.seed),a(e,"state")&&(r.state=e.state),a(e,"copy")&&(r.copy=e.copy),null):new TypeError(o('0qn2V',e));}b.exports=U
});var q=g(function(_e,p){
var H=require("debug"),K=H("random:streams:betaprime");p.exports=K
});var c=g(function(je,S){
var O=require("readable-stream").Readable,w=require('@stdlib/assert-is-positive-number/dist').isPrimitive,Q=require('@stdlib/assert-is-error/dist'),X=require('@stdlib/object-assign/dist'),Y=require('@stdlib/utils-inherit/dist'),_=require('@stdlib/utils-define-nonenumerable-property/dist'),u=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),v=require('@stdlib/utils-define-read-only-accessor/dist'),Z=require('@stdlib/utils-define-read-write-accessor/dist'),$=require('@stdlib/random-base-betaprime/dist').factory,j=require('@stdlib/buffer-from-string/dist'),ee=require('@stdlib/utils-next-tick/dist'),M=require('@stdlib/error-tools-fmtprodmsg/dist'),re=m(),te=y(),d=q();function ie(){return this._prng.seed}function ne(){return this._prng.seedLength}function ae(){return this._prng.stateLength}function se(){return this._prng.byteLength}function ue(){return this._prng.state}function oe(r){this._prng.state=r}function ge(){var r,e;if(!this._destroyed)for(r=!0;r;){if(this._i+=1,this._i>this._iter)return d("Finished generating pseudorandom numbers."),this.push(null);e=this._prng(),d("Generated a new pseudorandom number. Value: %d. Iter: %d.",e,this._i),this._objectMode===!1&&(e=e.toString(),this._i===1?e=j(e):e=j(this._sep+e)),r=this.push(e),this._i%this._siter===0&&this.emit("state",this.state)}}function de(r){var e;if(this._destroyed)return d("Attempted to destroy an already destroyed stream."),this;return e=this,this._destroyed=!0,ee(n),this;function n(){r&&(d("Stream was destroyed due to an error. Error: %s.",Q(r)?r.message:JSON.stringify(r)),e.emit("error",r)),d("Closing the stream..."),e.emit("close")}}function i(r,e,n){var t,s;if(!(this instanceof i))return arguments.length>2?new i(r,e,n):new i(r,e);if(!w(r))throw new TypeError(M('0qn71',r));if(!w(e))throw new TypeError(M('0qn72',e));if(t=X({},re),arguments.length>2&&(s=te(t,n),s))throw s;return d("Creating a readable stream configured with the following options: %s.",JSON.stringify(t)),O.call(this,t),_(this,"_destroyed",!1),u(this,"_objectMode",t.objectMode),u(this,"_sep",t.sep),u(this,"_iter",t.iter),u(this,"_siter",t.siter),_(this,"_i",0),u(this,"_prng",$(r,e,t)),u(this,"PRNG",this._prng.PRNG),this}Y(i,O);v(i.prototype,"seed",ie);v(i.prototype,"seedLength",ne);Z(i.prototype,"state",ue,oe);v(i.prototype,"stateLength",ae);v(i.prototype,"byteLength",se);u(i.prototype,"_read",ge);u(i.prototype,"destroy",de);S.exports=i
});var T=g(function(Me,E){
var ve=require('@stdlib/assert-is-plain-object/dist'),ce=require('@stdlib/error-tools-fmtprodmsg/dist'),fe=require('@stdlib/object-assign/dist'),he=c();function me(r,e,n){var t;if(arguments.length>2){if(t=n,!ve(t))throw new TypeError(ce('0qn2V',t));t=fe({},n)}else t={};return t.objectMode=!0,new he(r,e,t)}E.exports=me
});var x=g(function(Oe,k){
var P=require('@stdlib/assert-is-plain-object/dist'),N=require('@stdlib/object-assign/dist'),R=require('@stdlib/error-tools-fmtprodmsg/dist'),L=c();function le(r,e,n){var t,s,f;if(t=arguments.length,t===1){if(!P(r))throw new TypeError(R('0qn2V',r));s=N({},r)}else if(t>2){if(!P(n))throw new TypeError(R('0qn2V',n));s=N({},n)}else s={};return t<2?f=W:f=A,f;function W(F,G){return new L(F,G,s)}function A(){return new L(r,e,s)}}k.exports=le
});var V=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=c(),be=T(),ye=x();V(h,"objectMode",be);V(h,"factory",ye);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
