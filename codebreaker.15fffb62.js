var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},t=e.parcelRequire94c2;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},e.parcelRequire94c2=t),t.register("jCLg5",(function(e,n){function r(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=void 0;var t=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.codigo=""!=n?n:"1234"}var n,t,o;return n=e,(t=[{key:"adivinar",value:function(e){var n=this.codigo.split(""),r=0;return e==this.codigo?"Ganaste!":(n.includes(e[0])&&r++,n.includes(e[1])&&r++,n.includes(e[2])&&r++,n.includes(e[3])&&r++,r>0?"Contiene ".concat(r,"!"):"Perdiste!")}}])&&r(n.prototype,t),o&&r(n,o),e}();e.exports.default=t}));var o,i=(o=t("jCLg5"))&&o.__esModule?o:{default:o};var a=document.querySelector("#numero"),u=document.querySelector("#form-adivinar"),l=document.querySelector("#resultado");u.addEventListener("submit",(function(e){e.preventDefault();var n=new i.default("").adivinar(a.value);l.innerHTML=n}));
//# sourceMappingURL=codebreaker.15fffb62.js.map
