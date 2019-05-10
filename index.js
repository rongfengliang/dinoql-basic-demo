(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
(function (global){
window=global||window
const dinoql  = require("dinoql")
const gql =  require("graphql-tag")
const data = {
    requests: {
      products: [],
      
      users: [{
        name: 'Victor Igor',
        id: "100",
        age: 40
      }, {
        name: 'Kant Jonas',
        id: "200",
        age: 35
      }],
      
      friends: [{
        name: 'Kátia',
        id: "300",
        age: 10
      }]
    }
  }

const userQuery = gql`
query userQuery {
  requests {
    users {
      name
      id
    }
    friends {
       name
    }
  }

}

`


const userQuery2 = `
  requests {
    users {
      name
      id
    }
    friends {
       name
    }
  }
`

// this is one way  to call  query 
// const users = dinoql(data)`
// requests {
//   users {
//     name
//     id
//   }
//   friends {
//      name
//   }
// }
// `


// you can alse use graphql-tag graphql query utilities 

const users = dinoql(data)(userQuery)
console.log(users)

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"dinoql":2,"graphql-tag":3}],2:[function(require,module,exports){
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.dinoql=n():e.dinoql=n()}(window,function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=27)}([function(e,n,t){var r=t(1),o=t(7);e.exports=function(e){return function n(t,i){switch(arguments.length){case 0:return n;case 1:return o(t)?n:r(function(n){return e(t,n)});default:return o(t)&&o(i)?n:o(t)?r(function(n){return e(n,i)}):o(i)?r(function(n){return e(t,n)}):e(t,i)}}}},function(e,n,t){var r=t(7);e.exports=function(e){return function n(t){return 0===arguments.length||r(t)?n:e.apply(this,arguments)}}},function(e,n,t){var r=t(1),o=t(0),i=t(7);e.exports=function(e){return function n(t,a,u){switch(arguments.length){case 0:return n;case 1:return i(t)?n:o(function(n,r){return e(t,n,r)});case 2:return i(t)&&i(a)?n:i(t)?o(function(n,t){return e(n,a,t)}):i(a)?o(function(n,r){return e(t,n,r)}):r(function(n){return e(t,a,n)});default:return i(t)&&i(a)&&i(u)?n:i(t)&&i(a)?o(function(n,t){return e(n,t,u)}):i(t)&&i(u)?o(function(n,t){return e(n,a,t)}):i(a)&&i(u)?o(function(n,r){return e(t,n,r)}):i(t)?r(function(n){return e(n,a,u)}):i(a)?r(function(n){return e(t,n,u)}):i(u)?r(function(n){return e(t,a,n)}):e(t,a,u)}}}},function(e,n){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},function(e,n,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){i(e,n,t[n])})}return e}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function u(e){var n=function(e,n){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===r(n)?n:String(n)}var c={prop:t(29),pathEq:t(30),propOr:t(37),path:t(8),pathOr:t(20),last:t(39),isNil:t(21),pick:t(41),project:t(42),ifElse:t(47),map:t(48),always:t(54),isEmpty:t(55),assoc:t(24),dissoc:t(57),identity:t(22),find:t(58),assocPath:t(61),init:t(63),concat:t(64),pipe:t(77),toPairs:t(81),fromPairs:t(82),of:t(83)},s={getValue:c.path(["value","value"]),getAlias:c.path(["alias","value"]),getName:c.path(["name","value"])};e.exports=o({},c,{ast:s,renameProp:function(e,n,t){var r=t[e],c=a(t,[e].map(u));return o(i({},n,r),c)}})},function(e,n){e.exports=function(e,n){return Object.prototype.hasOwnProperty.call(n,e)}},function(e,n,t){"use strict";var r="function"==typeof Symbol?Symbol.for("nodejs.util.inspect.custom"):void 0;n.a=r},function(e,n){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}},function(e,n,t){var r=t(0)(function(e,n){for(var t=n,r=0;r<e.length;){if(null==t)return;t=t[e[r]],r+=1}return t});e.exports=r},function(e,n,t){var r=t(1),o=t(5),i=t(19),a=!{toString:null}.propertyIsEnumerable("toString"),u=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],c=function(){"use strict";return arguments.propertyIsEnumerable("length")}(),s=function(e,n){for(var t=0;t<e.length;){if(e[t]===n)return!0;t+=1}return!1},f="function"!=typeof Object.keys||c?r(function(e){if(Object(e)!==e)return[];var n,t,r=[],f=c&&i(e);for(n in e)!o(n,e)||f&&"length"===n||(r[r.length]=n);if(a)for(t=u.length-1;t>=0;)o(n=u[t],e)&&!s(r,n)&&(r[r.length]=n),t-=1;return r}):r(function(e){return Object(e)!==e?[]:Object.keys(e)});e.exports=f},function(e,n){e.exports=function(e){return"[object String]"===Object.prototype.toString.call(e)}},function(e,n){e.exports=function(e,n){switch(e){case 0:return function(){return n.apply(this,arguments)};case 1:return function(e){return n.apply(this,arguments)};case 2:return function(e,t){return n.apply(this,arguments)};case 3:return function(e,t,r){return n.apply(this,arguments)};case 4:return function(e,t,r,o){return n.apply(this,arguments)};case 5:return function(e,t,r,o,i){return n.apply(this,arguments)};case 6:return function(e,t,r,o,i,a){return n.apply(this,arguments)};case 7:return function(e,t,r,o,i,a,u){return n.apply(this,arguments)};case 8:return function(e,t,r,o,i,a,u,c){return n.apply(this,arguments)};case 9:return function(e,t,r,o,i,a,u,c,s){return n.apply(this,arguments)};case 10:return function(e,t,r,o,i,a,u,c,s,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}},function(e,n,t){"use strict";t.d(n,"a",function(){return u});var r=t(6);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var i=10,a=2;function u(e){return c(e,[])}function c(e,n){switch(o(e)){case"string":return JSON.stringify(e);case"function":return e.name?"[function ".concat(e.name,"]"):"[function]";case"object":return function(e,n){if(-1!==n.indexOf(e))return"[Circular]";var t=[].concat(n,[e]);if(e){var o=function(e){var n=e[String(r.a)];if("function"==typeof n)return n;if("function"==typeof e.inspect)return e.inspect}(e);if(o){var u=o.call(e);if(u!==e)return"string"==typeof u?u:c(u,t)}else if(Array.isArray(e))return function(e,n){if(0===e.length)return"[]";if(n.length>a)return"[Array]";for(var t=Math.min(i,e.length),r=e.length-t,o=[],u=0;u<t;++u)o.push(c(e[u],n));1===r?o.push("... 1 more item"):r>1&&o.push("... ".concat(r," more items"));return"["+o.join(", ")+"]"}(e,t);return function(e,n){var t=Object.keys(e);if(0===t.length)return"{}";if(n.length>a)return"["+function(e){var n=Object.prototype.toString.call(e).replace(/^\[object /,"").replace(/]$/,"");if("Object"===n&&"function"==typeof e.constructor){var t=e.constructor.name;if("string"==typeof t)return t}return n}(e)+"]";return"{ "+t.map(function(t){var r=c(e[t],n);return t+": "+r}).join(", ")+" }"}(e,t)}return String(e)}(e,n);default:return String(e)}}},function(e,n,t){var r=t(0),o=t(31),i=r(function(e,n){return o(e,n,[],[])});e.exports=i},function(e,n){e.exports=function(e,n){for(var t=0,r=n.length,o=Array(r);t<r;)o[t]=e(n[t]),t+=1;return o}},function(e,n,t){var r=t(11),o=t(1),i=t(0),a=t(46),u=i(function(e,n){return 1===e?o(n):r(e,a(e,[],n))});e.exports=u},function(e,n,t){var r=t(3),o=t(49);e.exports=function(e,n,t){return function(){if(0===arguments.length)return t();var i=Array.prototype.slice.call(arguments,0),a=i.pop();if(!r(a)){for(var u=0;u<e.length;){if("function"==typeof a[e[u]])return a[e[u]].apply(a,i);u+=1}if(o(a))return n.apply(null,i)(a)}return t.apply(this,arguments)}}},function(e,n,t){var r=t(50),o=t(51),i=t(52);function a(e,n,t){for(var r=t.next();!r.done;){if((n=e["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=t.next()}return e["@@transducer/result"](n)}function u(e,n,t,r){return e["@@transducer/result"](t[r](i(e["@@transducer/step"],e),n))}var c="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";e.exports=function(e,n,t){if("function"==typeof e&&(e=o(e)),r(t))return function(e,n,t){for(var r=0,o=t.length;r<o;){if((n=e["@@transducer/step"](n,t[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return e["@@transducer/result"](n)}(e,n,t);if("function"==typeof t["fantasy-land/reduce"])return u(e,n,t,"fantasy-land/reduce");if(null!=t[c])return a(e,n,t[c]());if("function"==typeof t.next)return a(e,n,t);if("function"==typeof t.reduce)return u(e,n,t,"reduce");throw new TypeError("reduce: list must be array or iterable")}},function(e,n){e.exports={init:function(){return this.xf["@@transducer/init"]()},result:function(e){return this.xf["@@transducer/result"](e)}}},function(e,n,t){var r=t(5),o=Object.prototype.toString,i=function(){return"[object Arguments]"===o.call(arguments)?function(e){return"[object Arguments]"===o.call(e)}:function(e){return r("callee",e)}}();e.exports=i},function(e,n,t){var r=t(2),o=t(38),i=t(8),a=r(function(e,n,t){return o(e,i(n,t))});e.exports=a},function(e,n,t){var r=t(1)(function(e){return null==e});e.exports=r},function(e,n,t){var r=t(1)(t(43));e.exports=r},function(e,n){e.exports=function(e){return"[object Object]"===Object.prototype.toString.call(e)}},function(e,n,t){var r=t(2)(function(e,n,t){var r={};for(var o in t)r[o]=t[o];return r[e]=n,r});e.exports=r},function(e,n,t){var r=t(26),o=t(2)(r("slice",function(e,n,t){return Array.prototype.slice.call(t,e,n)}));e.exports=o},function(e,n,t){var r=t(3);e.exports=function(e,n){return function(){var t=arguments.length;if(0===t)return n();var o=arguments[t-1];return r(o)||"function"!=typeof o[e]?n.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,t-1))}}},function(e,n,t){var r=t(4),o=t(85),i=t(88),a={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{keep:!1};return function(t){var u=JSON.stringify({data:e,query:t});if(u in a)return a[u];var c,s,f,l=o(t),p=r.path(["definitions",0],l),v=r.ast.getName(p),d=(0,i(n).getQueryResolved)(p,(f=e,(s=v)in(c={})?Object.defineProperty(c,s,{value:f,enumerable:!0,configurable:!0,writable:!0}):c[s]=f,c));if(n.keep){var y=r.prop(0,Object.keys(d));return r.prop(y,d)}return a[u]=d,d}}},,function(e,n,t){var r=t(0),o=t(8),i=r(function(e,n){return o([e],n)});e.exports=i},function(e,n,t){var r=t(2),o=t(13),i=t(8),a=r(function(e,n,t){return o(i(e,t),n)});e.exports=a},function(e,n,t){var r=t(32),o=t(33),i=t(34),a=t(5),u=t(35),c=t(9),s=t(36);function f(e,n,t,i){var a=r(e),u=r(n);function c(e,n){return l(e,n,t.slice(),i.slice())}return!o(function(e,n){return!o(c,n,e)},u,a)}function l(e,n,t,r){if(u(e,n))return!0;var o=s(e);if(o!==s(n))return!1;if(null==e||null==n)return!1;if("function"==typeof e["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof e["fantasy-land/equals"]&&e["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](e);if("function"==typeof e.equals||"function"==typeof n.equals)return"function"==typeof e.equals&&e.equals(n)&&"function"==typeof n.equals&&n.equals(e);switch(o){case"Arguments":case"Array":case"Object":if("function"==typeof e.constructor&&"Promise"===i(e.constructor))return e===n;break;case"Boolean":case"Number":case"String":if(typeof e!=typeof n||!u(e.valueOf(),n.valueOf()))return!1;break;case"Date":if(!u(e.valueOf(),n.valueOf()))return!1;break;case"Error":return e.name===n.name&&e.message===n.message;case"RegExp":if(e.source!==n.source||e.global!==n.global||e.ignoreCase!==n.ignoreCase||e.multiline!==n.multiline||e.sticky!==n.sticky||e.unicode!==n.unicode)return!1}for(var p=t.length-1;p>=0;){if(t[p]===e)return r[p]===n;p-=1}switch(o){case"Map":return e.size===n.size&&f(e.entries(),n.entries(),t.concat([e]),r.concat([n]));case"Set":return e.size===n.size&&f(e.values(),n.values(),t.concat([e]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var v=c(e);if(v.length!==c(n).length)return!1;var d=t.concat([e]),y=r.concat([n]);for(p=v.length-1;p>=0;){var E=v[p];if(!a(E,n)||!l(n[E],e[E],d,y))return!1;p-=1}return!0}e.exports=l},function(e,n){e.exports=function(e){for(var n,t=[];!(n=e.next()).done;)t.push(n.value);return t}},function(e,n){e.exports=function(e,n,t){for(var r=0,o=t.length;r<o;){if(e(n,t[r]))return!0;r+=1}return!1}},function(e,n){e.exports=function(e){var n=String(e).match(/^function (\w*)/);return null==n?"":n[1]}},function(e,n){e.exports="function"==typeof Object.is?Object.is:function(e,n){return e===n?0!==e||1/e==1/n:e!=e&&n!=n}},function(e,n,t){var r=t(1)(function(e){return null===e?"Null":void 0===e?"Undefined":Object.prototype.toString.call(e).slice(8,-1)});e.exports=r},function(e,n,t){var r=t(2),o=t(20),i=r(function(e,n,t){return o(e,[n],t)});e.exports=i},function(e,n,t){var r=t(0)(function(e,n){return null==n||n!=n?e:n});e.exports=r},function(e,n,t){var r=t(40)(-1);e.exports=r},function(e,n,t){var r=t(0),o=t(10),i=r(function(e,n){var t=e<0?n.length+e:e;return o(n)?n.charAt(t):n[t]});e.exports=i},function(e,n,t){var r=t(0)(function(e,n){for(var t={},r=0;r<e.length;)e[r]in n&&(t[e[r]]=n[e[r]]),r+=1;return t});e.exports=r},function(e,n,t){var r=t(14),o=t(22),i=t(44),a=t(45)(r,[i,o]);e.exports=a},function(e,n){e.exports=function(e){return e}},function(e,n,t){var r=t(0)(function(e,n){for(var t={},r=0,o=e.length;r<o;){var i=e[r];t[i]=n[i],r+=1}return t});e.exports=r},function(e,n,t){var r=t(0),o=t(15),i=r(function(e,n){return o(n.length,function(){for(var t=[],r=0;r<n.length;)t.push(n[r].call(this,arguments[r])),r+=1;return e.apply(this,t.concat(Array.prototype.slice.call(arguments,n.length)))})});e.exports=i},function(e,n,t){var r=t(11),o=t(7);e.exports=function e(n,t,i){return function(){for(var a=[],u=0,c=n,s=0;s<t.length||u<arguments.length;){var f;s<t.length&&(!o(t[s])||u>=arguments.length)?f=t[s]:(f=arguments[u],u+=1),a[s]=f,o(f)||(c-=1),s+=1}return c<=0?i.apply(this,a):r(c,e(n,a,i))}}},function(e,n,t){var r=t(2),o=t(15),i=r(function(e,n,t){return o(Math.max(e.length,n.length,t.length),function(){return e.apply(this,arguments)?n.apply(this,arguments):t.apply(this,arguments)})});e.exports=i},function(e,n,t){var r=t(0),o=t(16),i=t(14),a=t(17),u=t(53),c=t(15),s=t(9),f=r(o(["fantasy-land/map","map"],u,function(e,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return c(n.length,function(){return e.call(this,n.apply(this,arguments))});case"[object Object]":return a(function(t,r){return t[r]=e(n[r]),t},{},s(n));default:return i(e,n)}}));e.exports=f},function(e,n){e.exports=function(e){return null!=e&&"function"==typeof e["@@transducer/step"]}},function(e,n,t){var r=t(1),o=t(3),i=t(10),a=r(function(e){return!!o(e)||!!e&&("object"==typeof e&&(!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&(e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1)))))});e.exports=a},function(e,n){var t=function(){function e(e){this.f=e}return e.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},e.prototype["@@transducer/result"]=function(e){return e},e.prototype["@@transducer/step"]=function(e,n){return this.f(e,n)},e}();e.exports=function(e){return new t(e)}},function(e,n,t){var r=t(11),o=t(0)(function(e,n){return r(e.length,function(){return e.apply(n,arguments)})});e.exports=o},function(e,n,t){var r=t(0),o=t(18),i=function(){function e(e,n){this.xf=n,this.f=e}return e.prototype["@@transducer/init"]=o.init,e.prototype["@@transducer/result"]=o.result,e.prototype["@@transducer/step"]=function(e,n){return this.xf["@@transducer/step"](e,this.f(n))},e}(),a=r(function(e,n){return new i(e,n)});e.exports=a},function(e,n,t){var r=t(1)(function(e){return function(){return e}});e.exports=r},function(e,n,t){var r=t(1),o=t(56),i=t(13),a=r(function(e){return null!=e&&i(e,o(e))});e.exports=a},function(e,n,t){var r=t(1),o=t(19),i=t(3),a=t(23),u=t(10),c=r(function(e){return null!=e&&"function"==typeof e["fantasy-land/empty"]?e["fantasy-land/empty"]():null!=e&&null!=e.constructor&&"function"==typeof e.constructor["fantasy-land/empty"]?e.constructor["fantasy-land/empty"]():null!=e&&"function"==typeof e.empty?e.empty():null!=e&&null!=e.constructor&&"function"==typeof e.constructor.empty?e.constructor.empty():i(e)?[]:u(e)?"":a(e)?{}:o(e)?function(){return arguments}():void 0});e.exports=c},function(e,n,t){var r=t(0)(function(e,n){var t={};for(var r in n)t[r]=n[r];return delete t[e],t});e.exports=r},function(e,n,t){var r=t(0)(t(16)(["find"],t(59),function(e,n){for(var t=0,r=n.length;t<r;){if(e(n[t]))return n[t];t+=1}}));e.exports=r},function(e,n,t){var r=t(0),o=t(60),i=t(18),a=function(){function e(e,n){this.xf=n,this.f=e,this.found=!1}return e.prototype["@@transducer/init"]=i.init,e.prototype["@@transducer/result"]=function(e){return this.found||(e=this.xf["@@transducer/step"](e,void 0)),this.xf["@@transducer/result"](e)},e.prototype["@@transducer/step"]=function(e,n){return this.f(n)&&(this.found=!0,e=o(this.xf["@@transducer/step"](e,n))),e},e}(),u=r(function(e,n){return new a(e,n)});e.exports=u},function(e,n){e.exports=function(e){return e&&e["@@transducer/reduced"]?e:{"@@transducer/value":e,"@@transducer/reduced":!0}}},function(e,n,t){var r=t(2),o=t(5),i=t(3),a=t(62),u=t(24),c=t(21),s=r(function e(n,t,r){if(0===n.length)return t;var s=n[0];if(n.length>1){var f=!c(r)&&o(s,r)?r[s]:a(n[1])?[]:{};t=e(Array.prototype.slice.call(n,1),t,f)}if(a(s)&&i(r)){var l=[].concat(r);return l[s]=t,l}return u(s,t,r)});e.exports=s},function(e,n){e.exports=Number.isInteger||function(e){return e<<0===e}},function(e,n,t){var r=t(25)(0,-1);e.exports=r},function(e,n,t){var r=t(0),o=t(3),i=t(65),a=t(10),u=t(66),c=r(function(e,n){if(o(e)){if(o(n))return e.concat(n);throw new TypeError(u(n)+" is not an array")}if(a(e)){if(a(n))return e+n;throw new TypeError(u(n)+" is not a string")}if(null!=e&&i(e["fantasy-land/concat"]))return e["fantasy-land/concat"](n);if(null!=e&&i(e.concat))return e.concat(n);throw new TypeError(u(e)+' does not have a method named "concat" or "fantasy-land/concat"')});e.exports=c},function(e,n){e.exports=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},function(e,n,t){var r=t(1),o=t(67),i=r(function(e){return o(e,[])});e.exports=i},function(e,n,t){var r=t(68),o=t(14),i=t(70),a=t(71),u=t(9),c=t(72);e.exports=function e(n,t){var s=function(o){var i=t.concat([n]);return r(o,i)?"<Circular>":e(o,i)},f=function(e,n){return o(function(n){return i(n)+": "+s(e[n])},n.slice().sort())};switch(Object.prototype.toString.call(n)){case"[object Arguments]":return"(function() { return arguments; }("+o(s,n).join(", ")+"))";case"[object Array]":return"["+o(s,n).concat(f(n,c(function(e){return/^\d+$/.test(e)},u(n)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof n?"new Boolean("+s(n.valueOf())+")":n.toString();case"[object Date]":return"new Date("+(isNaN(n.valueOf())?s(NaN):i(a(n)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof n?"new Number("+s(n.valueOf())+")":1/n==-1/0?"-0":n.toString(10);case"[object String]":return"object"==typeof n?"new String("+s(n.valueOf())+")":i(n);case"[object Undefined]":return"undefined";default:if("function"==typeof n.toString){var l=n.toString();if("[object Object]"!==l)return l}return"{"+f(n,u(n)).join(", ")+"}"}}},function(e,n,t){var r=t(69);e.exports=function(e,n){return r(n,e,0)>=0}},function(e,n,t){var r=t(13);e.exports=function(e,n,t){var o,i;if("function"==typeof e.indexOf)switch(typeof n){case"number":if(0===n){for(o=1/n;t<e.length;){if(0===(i=e[t])&&1/i===o)return t;t+=1}return-1}if(n!=n){for(;t<e.length;){if("number"==typeof(i=e[t])&&i!=i)return t;t+=1}return-1}return e.indexOf(n,t);case"string":case"boolean":case"function":case"undefined":return e.indexOf(n,t);case"object":if(null===n)return e.indexOf(n,t)}for(;t<e.length;){if(r(e[t],n))return t;t+=1}return-1}},function(e,n){e.exports=function(e){return'"'+e.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}},function(e,n){var t=function(e){return(e<10?"0":"")+e},r="function"==typeof Date.prototype.toISOString?function(e){return e.toISOString()}:function(e){return e.getUTCFullYear()+"-"+t(e.getUTCMonth()+1)+"-"+t(e.getUTCDate())+"T"+t(e.getUTCHours())+":"+t(e.getUTCMinutes())+":"+t(e.getUTCSeconds())+"."+(e.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};e.exports=r},function(e,n,t){var r=t(73),o=t(0),i=t(74),a=o(function(e,n){return i(r(e),n)});e.exports=a},function(e,n){e.exports=function(e){return function(){return!e.apply(this,arguments)}}},function(e,n,t){var r=t(0),o=t(16),i=t(75),a=t(23),u=t(17),c=t(76),s=t(9),f=r(o(["filter"],c,function(e,n){return a(n)?u(function(t,r){return e(n[r])&&(t[r]=n[r]),t},{},s(n)):i(e,n)}));e.exports=f},function(e,n){e.exports=function(e,n){for(var t=0,r=n.length,o=[];t<r;)e(n[t])&&(o[o.length]=n[t]),t+=1;return o}},function(e,n,t){var r=t(0),o=t(18),i=function(){function e(e,n){this.xf=n,this.f=e}return e.prototype["@@transducer/init"]=o.init,e.prototype["@@transducer/result"]=o.result,e.prototype["@@transducer/step"]=function(e,n){return this.f(n)?this.xf["@@transducer/step"](e,n):e},e}(),a=r(function(e,n){return new i(e,n)});e.exports=a},function(e,n,t){var r=t(11),o=t(78),i=t(79),a=t(80);e.exports=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return r(arguments[0].length,i(o,arguments[0],a(arguments)))}},function(e,n){e.exports=function(e,n){return function(){return n.call(this,e.apply(this,arguments))}}},function(e,n,t){var r=t(2)(t(17));e.exports=r},function(e,n,t){var r=t(26),o=t(1)(r("tail",t(25)(1,1/0)));e.exports=o},function(e,n,t){var r=t(1),o=t(5),i=r(function(e){var n=[];for(var t in e)o(t,e)&&(n[n.length]=[t,e[t]]);return n});e.exports=i},function(e,n,t){var r=t(1)(function(e){for(var n={},t=0;t<e.length;)n[e[t][0]]=e[t][1],t+=1;return n});e.exports=r},function(e,n,t){var r=t(1)(t(84));e.exports=r},function(e,n){e.exports=function(e){return[e]}},function(e,n,t){var r=t(4),o=t(90).parse,i=t(86);e.exports=function(e){var n=r.prop(0,e);if("string"!=typeof n)return i.mergeFragments(e);var t=" \n    query MyQuery {\n      ".concat(n,"\n    }\n  ");return o(t)}},function(e,n,t){var r=t(87).visit,o=t(4);e.exports={mergeFragments:function(e){var n=o.prop("definitions",e),t=null;return r(e,{FragmentSpread:function(r,i,a,u){var c=o.ast.getName(r)||o.ast.getAlias(r),s=o.find(o.pathEq(["name","value"],c),n),f=o.path(["selectionSet","selections"],s),l=o.init(u),p=o.path(l,t||e),v=o.concat(p,f);return t=o.assocPath(l,v,e),null}}),t||e}}},function(e,n,t){"use strict";t.r(n),t.d(n,"QueryDocumentKeys",function(){return o}),t.d(n,"BREAK",function(){return i}),t.d(n,"visit",function(){return a}),t.d(n,"visitInParallel",function(){return c}),t.d(n,"visitWithTypeInfo",function(){return s}),t.d(n,"getVisitFn",function(){return f});var r=t(12),o={Name:[],Document:["definitions"],OperationDefinition:["name","variableDefinitions","directives","selectionSet"],VariableDefinition:["variable","type","defaultValue","directives"],Variable:["name"],SelectionSet:["selections"],Field:["alias","name","arguments","directives","selectionSet"],Argument:["name","value"],FragmentSpread:["name","directives"],InlineFragment:["typeCondition","directives","selectionSet"],FragmentDefinition:["name","variableDefinitions","typeCondition","directives","selectionSet"],IntValue:[],FloatValue:[],StringValue:[],BooleanValue:[],NullValue:[],EnumValue:[],ListValue:["values"],ObjectValue:["fields"],ObjectField:["name","value"],Directive:["name","arguments"],NamedType:["name"],ListType:["type"],NonNullType:["type"],SchemaDefinition:["directives","operationTypes"],OperationTypeDefinition:["type"],ScalarTypeDefinition:["description","name","directives"],ObjectTypeDefinition:["description","name","interfaces","directives","fields"],FieldDefinition:["description","name","arguments","type","directives"],InputValueDefinition:["description","name","type","defaultValue","directives"],InterfaceTypeDefinition:["description","name","directives","fields"],UnionTypeDefinition:["description","name","directives","types"],EnumTypeDefinition:["description","name","directives","values"],EnumValueDefinition:["description","name","directives"],InputObjectTypeDefinition:["description","name","directives","fields"],DirectiveDefinition:["description","name","arguments","locations"],SchemaExtension:["directives","operationTypes"],ScalarTypeExtension:["name","directives"],ObjectTypeExtension:["name","interfaces","directives","fields"],InterfaceTypeExtension:["name","directives","fields"],UnionTypeExtension:["name","directives","types"],EnumTypeExtension:["name","directives","values"],InputObjectTypeExtension:["name","directives","fields"]},i={};function a(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:o,a=void 0,c=Array.isArray(e),s=[e],l=-1,p=[],v=void 0,d=void 0,y=void 0,E=[],h=[],N=e;do{var m=++l===s.length,g=m&&0!==p.length;if(m){if(d=0===h.length?void 0:E[E.length-1],v=y,y=h.pop(),g){if(c)v=v.slice();else{for(var O={},I=Object.keys(v),T=0;T<I.length;T++){var A=I[T];O[A]=v[A]}v=O}for(var b=0,S=0;S<p.length;S++){var _=p[S][0],k=p[S][1];c&&(_-=b),c&&null===k?(v.splice(_,1),b++):v[_]=k}}l=a.index,s=a.keys,p=a.edits,c=a.inArray,a=a.prev}else{if(d=y?c?l:s[l]:void 0,null==(v=y?y[d]:N))continue;y&&E.push(d)}var x=void 0;if(!Array.isArray(v)){if(!u(v))throw new Error("Invalid AST Node: "+Object(r.a)(v));var C=f(n,v.kind,m);if(C){if((x=C.call(n,v,d,y,E,h))===i)break;if(!1===x){if(!m){E.pop();continue}}else if(void 0!==x&&(p.push([d,x]),!m)){if(!u(x)){E.pop();continue}v=x}}}void 0===x&&g&&p.push([d,v]),m?E.pop():(a={inArray:c,index:l,keys:s,edits:p,prev:a},s=(c=Array.isArray(v))?v:t[v.kind]||[],l=-1,p=[],y&&h.push(y),y=v)}while(void 0!==a);return 0!==p.length&&(N=p[p.length-1][1]),N}function u(e){return Boolean(e&&"string"==typeof e.kind)}function c(e){var n=new Array(e.length);return{enter:function(t){for(var r=0;r<e.length;r++)if(!n[r]){var o=f(e[r],t.kind,!1);if(o){var a=o.apply(e[r],arguments);if(!1===a)n[r]=t;else if(a===i)n[r]=i;else if(void 0!==a)return a}}},leave:function(t){for(var r=0;r<e.length;r++)if(n[r])n[r]===t&&(n[r]=null);else{var o=f(e[r],t.kind,!0);if(o){var a=o.apply(e[r],arguments);if(a===i)n[r]=i;else if(void 0!==a&&!1!==a)return a}}}}}function s(e,n){return{enter:function(t){e.enter(t);var r=f(n,t.kind,!1);if(r){var o=r.apply(n,arguments);return void 0!==o&&(e.leave(t),u(o)&&e.enter(o)),o}},leave:function(t){var r,o=f(n,t.kind,!0);return o&&(r=o.apply(n,arguments)),e.leave(t),r}}}function f(e,n,t){var r=e[n];if(r){if(!t&&"function"==typeof r)return r;var o=t?r.leave:r.enter;if("function"==typeof o)return o}else{var i=t?e.leave:e.enter;if(i){if("function"==typeof i)return i;var a=i[n];if("function"==typeof a)return a}}}},function(e,n,t){function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=t(89),i=t(4);e.exports=function(e){var n={},t=function(e){var n=e.data,t=e.nodeName;return function(e){var r=i.prop(t,n),a=e.reduce(function(e,n){var t=i.ast.getName(n),a=i.ast.getValue(n);return i.propOr(o.filterKey(t),t,o)(r,a)},r);return i.assoc(t,a,n)}},a=function(e){var t=e.data,o=e.ast,a=n,u=t.reduce(function(e,t){n={};var a=c(o,t),u=i.ast.getName(o)||i.ast.getAlias(o),s=i.dissoc(u,t);return e.concat(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){r(e,n,t[n])})}return e}({},s,a))},[]);return n=a,u},u=function(t){var r=t.nodeValue,o=t.nodeName,a=t.selections,u=t.data,s=t.props,f=i.ifElse(Array.isArray,i.project(s),i.pick(s))(r||[]);return a.reduce(function(t,r){var a=c(r,f);if(e.keep)return i.assoc(o,a,t);var u=i.ast.getAlias(r)||i.ast.getName(r);if(Array.isArray(a))n[o]=a;else if(!r.selectionSet){var s=i.prop(u,a);s&&(n[u]=s)}return n},u)};function c(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i.ast.getAlias(e),o=i.ast.getName(e),c=r||o,s=r?i.renameProp(o,r,n):n,f=i.pathOr([],["selectionSet","selections"],e),l=i.map(i.ast.getName,f),p=i.propOr([],"arguments",e),v=i.ifElse(i.isEmpty,i.always(s),t({data:s,nodeName:c}))(p),d=i.prop(c,v);return Array.isArray(v)?a({nodeName:c,props:l,data:v,ast:e}):u({data:v,selections:f,nodeValue:d,nodeName:c,props:l})}return{getQueryResolved:c}}},function(e,n,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=t(4);e.exports={filterKey:function(e){return function(n,t){if(!n)throw new Error('Resolver "'.concat(e,'" does not exist.'));return n.filter(function(n){return o.prop(e,n)==t})}},orderBy:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;return e.sort(function(e,t){return parseFloat(e[n])-parseFloat(t[n])})},first:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o.prop(0,e)},last:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return o.last(e)},toNumber:function(e){return Number(e)||e},defaultValue:function(e,n){var t=Number(n),r=t||n;return o.isNil(e)?r:e},toArray:function(e){return o.pipe(o.toPairs,o.map(o.pipe(o.of,o.fromPairs)))(e)},getObjectValues:function(e){return"object"===r(e)?Object.values(e):e}}},function(e,n,t){"use strict";t.r(n);var r=t(12),o=t(6);function i(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.prototype.toString;e.prototype.toJSON=n,e.prototype.inspect=n,o.a&&(e.prototype[o.a]=n)}function a(e,n){if(!e)throw new Error(n)}var u,c=function(e,n,t){this.body=e,this.name=n||"GraphQL request",this.locationOffset=t||{line:1,column:1},this.locationOffset.line>0||a(0,"line in locationOffset is 1-indexed and must be positive"),this.locationOffset.column>0||a(0,"column in locationOffset is 1-indexed and must be positive")};function s(e,n){for(var t,r=/\r\n|[\n\r]/g,o=1,i=n+1;(t=r.exec(e.body))&&t.index<n;)o+=1,i=n+1-(t.index+t[0].length);return{line:o,column:i}}function f(e,n){var t=e.locationOffset.column-1,r=l(t)+e.body,o=n.line-1,i=e.locationOffset.line-1,a=n.line+i,u=1===n.line?t:0,c=n.column+u,s=r.split(/\r\n|[\n\r]/g);return"".concat(e.name," (").concat(a,":").concat(c,")\n")+function(e){var n=e.filter(function(e){e[0];var n=e[1];return void 0!==n}),t=0,r=!0,o=!1,i=void 0;try{for(var a,u=n[Symbol.iterator]();!(r=(a=u.next()).done);r=!0){var c=a.value,s=c[0];t=Math.max(t,s.length)}}catch(e){o=!0,i=e}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n.map(function(e){var n,r=e[0],o=e[1];return l(t-(n=r).length)+n+o}).join("\n")}([["".concat(a-1,": "),s[o-1]],["".concat(a,": "),s[o]],["",l(c-1)+"^"],["".concat(a+1,": "),s[o+1]]])}function l(e){return Array(e+1).join(" ")}function p(e,n,t,r,o,i,a){var u=Array.isArray(n)?0!==n.length?n:void 0:n?[n]:void 0,c=t;if(!c&&u){var f=u[0];c=f&&f.loc&&f.loc.source}var l,v=r;!v&&u&&(v=u.reduce(function(e,n){return n.loc&&e.push(n.loc.start),e},[])),v&&0===v.length&&(v=void 0),r&&t?l=r.map(function(e){return s(t,e)}):u&&(l=u.reduce(function(e,n){return n.loc&&e.push(s(n.loc.source,n.loc.start)),e},[]));var d=a||i&&i.extensions;Object.defineProperties(this,{message:{value:e,enumerable:!0,writable:!0},locations:{value:l||void 0,enumerable:Boolean(l)},path:{value:o||void 0,enumerable:Boolean(o)},nodes:{value:u||void 0},source:{value:c||void 0},positions:{value:v||void 0},originalError:{value:i},extensions:{value:d||void 0,enumerable:Boolean(d)}}),i&&i.stack?Object.defineProperty(this,"stack",{value:i.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,p):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}function v(e,n,t){return new p("Syntax Error: ".concat(t),void 0,e,[n])}function d(e){for(var n=e.split(/\r\n|[\n\r]/g),t=null,r=1;r<n.length;r++){var o=n[r],i=y(o);if(i<o.length&&(null===t||i<t)&&0===(t=i))break}if(t)for(var a=1;a<n.length;a++)n[a]=n[a].slice(t);for(;n.length>0&&E(n[0]);)n.shift();for(;n.length>0&&E(n[n.length-1]);)n.pop();return n.join("\n")}function y(e){for(var n=0;n<e.length&&(" "===e[n]||"\t"===e[n]);)n++;return n}function E(e){return y(e)===e.length}function h(e,n){var t=new I(g.SOF,0,0,0,0,null);return{source:e,options:n,lastToken:t,token:t,line:1,lineStart:0,advance:N,lookahead:m}}function N(){return this.lastToken=this.token,this.token=this.lookahead()}function m(){var e=this.token;if(e.kind!==g.EOF)do{e=e.next||(e.next=A(this,e))}while(e.kind===g.COMMENT);return e}u=c,"function"==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(u.prototype,Symbol.toStringTag,{get:function(){return this.constructor.name}}),p.prototype=Object.create(Error.prototype,{constructor:{value:p},name:{value:"GraphQLError"},toString:{value:function(){return function(e){var n=[];if(e.nodes){var t=!0,r=!1,o=void 0;try{for(var i,a=e.nodes[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value;u.loc&&n.push(f(u.loc.source,s(u.loc.source,u.loc.start)))}}catch(e){r=!0,o=e}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}else if(e.source&&e.locations){var c=e.source,l=!0,p=!1,v=void 0;try{for(var d,y=e.locations[Symbol.iterator]();!(l=(d=y.next()).done);l=!0){var E=d.value;n.push(f(c,E))}}catch(e){p=!0,v=e}finally{try{l||null==y.return||y.return()}finally{if(p)throw v}}}return 0===n.length?e.message:[e.message].concat(n).join("\n\n")+"\n"}(this)}}});var g=Object.freeze({SOF:"<SOF>",EOF:"<EOF>",BANG:"!",DOLLAR:"$",AMP:"&",PAREN_L:"(",PAREN_R:")",SPREAD:"...",COLON:":",EQUALS:"=",AT:"@",BRACKET_L:"[",BRACKET_R:"]",BRACE_L:"{",PIPE:"|",BRACE_R:"}",NAME:"Name",INT:"Int",FLOAT:"Float",STRING:"String",BLOCK_STRING:"BlockString",COMMENT:"Comment"});function O(e){var n=e.value;return n?"".concat(e.kind,' "').concat(n,'"'):e.kind}function I(e,n,t,r,o,i,a){this.kind=e,this.start=n,this.end=t,this.line=r,this.column=o,this.value=a,this.prev=i,this.next=null}function T(e){return isNaN(e)?g.EOF:e<127?JSON.stringify(String.fromCharCode(e)):'"\\u'.concat(("00"+e.toString(16).toUpperCase()).slice(-4),'"')}function A(e,n){var t=e.source,r=t.body,o=r.length,i=function(e,n,t){var r=e.length,o=n;for(;o<r;){var i=e.charCodeAt(o);if(9===i||32===i||44===i||65279===i)++o;else if(10===i)++o,++t.line,t.lineStart=o;else{if(13!==i)break;10===e.charCodeAt(o+1)?o+=2:++o,++t.line,t.lineStart=o}}return o}(r,n.end,e),a=e.line,u=1+i-e.lineStart;if(i>=o)return new I(g.EOF,o,o,a,u,n);var c=r.charCodeAt(i);switch(c){case 33:return new I(g.BANG,i,i+1,a,u,n);case 35:return function(e,n,t,r,o){var i,a=e.body,u=n;do{i=a.charCodeAt(++u)}while(!isNaN(i)&&(i>31||9===i));return new I(g.COMMENT,n,u,t,r,o,a.slice(n+1,u))}(t,i,a,u,n);case 36:return new I(g.DOLLAR,i,i+1,a,u,n);case 38:return new I(g.AMP,i,i+1,a,u,n);case 40:return new I(g.PAREN_L,i,i+1,a,u,n);case 41:return new I(g.PAREN_R,i,i+1,a,u,n);case 46:if(46===r.charCodeAt(i+1)&&46===r.charCodeAt(i+2))return new I(g.SPREAD,i,i+3,a,u,n);break;case 58:return new I(g.COLON,i,i+1,a,u,n);case 61:return new I(g.EQUALS,i,i+1,a,u,n);case 64:return new I(g.AT,i,i+1,a,u,n);case 91:return new I(g.BRACKET_L,i,i+1,a,u,n);case 93:return new I(g.BRACKET_R,i,i+1,a,u,n);case 123:return new I(g.BRACE_L,i,i+1,a,u,n);case 124:return new I(g.PIPE,i,i+1,a,u,n);case 125:return new I(g.BRACE_R,i,i+1,a,u,n);case 65:case 66:case 67:case 68:case 69:case 70:case 71:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 80:case 81:case 82:case 83:case 84:case 85:case 86:case 87:case 88:case 89:case 90:case 95:case 97:case 98:case 99:case 100:case 101:case 102:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 110:case 111:case 112:case 113:case 114:case 115:case 116:case 117:case 118:case 119:case 120:case 121:case 122:return function(e,n,t,r,o){var i=e.body,a=i.length,u=n+1,c=0;for(;u!==a&&!isNaN(c=i.charCodeAt(u))&&(95===c||c>=48&&c<=57||c>=65&&c<=90||c>=97&&c<=122);)++u;return new I(g.NAME,n,u,t,r,o,i.slice(n,u))}(t,i,a,u,n);case 45:case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:return function(e,n,t,r,o,i){var a=e.body,u=t,c=n,s=!1;45===u&&(u=a.charCodeAt(++c));if(48===u){if((u=a.charCodeAt(++c))>=48&&u<=57)throw v(e,c,"Invalid number, unexpected digit after 0: ".concat(T(u),"."))}else c=b(e,c,u),u=a.charCodeAt(c);46===u&&(s=!0,u=a.charCodeAt(++c),c=b(e,c,u),u=a.charCodeAt(c));69!==u&&101!==u||(s=!0,43!==(u=a.charCodeAt(++c))&&45!==u||(u=a.charCodeAt(++c)),c=b(e,c,u));return new I(s?g.FLOAT:g.INT,n,c,r,o,i,a.slice(n,c))}(t,i,c,a,u,n);case 34:return 34===r.charCodeAt(i+1)&&34===r.charCodeAt(i+2)?function(e,n,t,r,o,i){var a=e.body,u=n+3,c=u,s=0,f="";for(;u<a.length&&!isNaN(s=a.charCodeAt(u));){if(34===s&&34===a.charCodeAt(u+1)&&34===a.charCodeAt(u+2))return f+=a.slice(c,u),new I(g.BLOCK_STRING,n,u+3,t,r,o,d(f));if(s<32&&9!==s&&10!==s&&13!==s)throw v(e,u,"Invalid character within String: ".concat(T(s),"."));10===s?(++u,++i.line,i.lineStart=u):13===s?(10===a.charCodeAt(u+1)?u+=2:++u,++i.line,i.lineStart=u):92===s&&34===a.charCodeAt(u+1)&&34===a.charCodeAt(u+2)&&34===a.charCodeAt(u+3)?(f+=a.slice(c,u)+'"""',c=u+=4):++u}throw v(e,u,"Unterminated string.")}(t,i,a,u,n,e):function(e,n,t,r,o){var i=e.body,a=n+1,u=a,c=0,s="";for(;a<i.length&&!isNaN(c=i.charCodeAt(a))&&10!==c&&13!==c;){if(34===c)return s+=i.slice(u,a),new I(g.STRING,n,a+1,t,r,o,s);if(c<32&&9!==c)throw v(e,a,"Invalid character within String: ".concat(T(c),"."));if(++a,92===c){switch(s+=i.slice(u,a-1),c=i.charCodeAt(a)){case 34:s+='"';break;case 47:s+="/";break;case 92:s+="\\";break;case 98:s+="\b";break;case 102:s+="\f";break;case 110:s+="\n";break;case 114:s+="\r";break;case 116:s+="\t";break;case 117:var f=(l=i.charCodeAt(a+1),p=i.charCodeAt(a+2),d=i.charCodeAt(a+3),y=i.charCodeAt(a+4),S(l)<<12|S(p)<<8|S(d)<<4|S(y));if(f<0)throw v(e,a,"Invalid character escape sequence: "+"\\u".concat(i.slice(a+1,a+5),"."));s+=String.fromCharCode(f),a+=4;break;default:throw v(e,a,"Invalid character escape sequence: \\".concat(String.fromCharCode(c),"."))}u=++a}}var l,p,d,y;throw v(e,a,"Unterminated string.")}(t,i,a,u,n)}throw v(t,i,function(e){if(e<32&&9!==e&&10!==e&&13!==e)return"Cannot contain the invalid character ".concat(T(e),".");if(39===e)return"Unexpected single quote character ('), did you mean to use a double quote (\")?";return"Cannot parse the unexpected character ".concat(T(e),".")}(c))}function b(e,n,t){var r=e.body,o=n,i=t;if(i>=48&&i<=57){do{i=r.charCodeAt(++o)}while(i>=48&&i<=57);return o}throw v(e,o,"Invalid number, expected digit but got: ".concat(T(i),"."))}function S(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}i(I,function(){return{kind:this.kind,value:this.value,line:this.line,column:this.column}});var _=Object.freeze({NAME:"Name",DOCUMENT:"Document",OPERATION_DEFINITION:"OperationDefinition",VARIABLE_DEFINITION:"VariableDefinition",SELECTION_SET:"SelectionSet",FIELD:"Field",ARGUMENT:"Argument",FRAGMENT_SPREAD:"FragmentSpread",INLINE_FRAGMENT:"InlineFragment",FRAGMENT_DEFINITION:"FragmentDefinition",VARIABLE:"Variable",INT:"IntValue",FLOAT:"FloatValue",STRING:"StringValue",BOOLEAN:"BooleanValue",NULL:"NullValue",ENUM:"EnumValue",LIST:"ListValue",OBJECT:"ObjectValue",OBJECT_FIELD:"ObjectField",DIRECTIVE:"Directive",NAMED_TYPE:"NamedType",LIST_TYPE:"ListType",NON_NULL_TYPE:"NonNullType",SCHEMA_DEFINITION:"SchemaDefinition",OPERATION_TYPE_DEFINITION:"OperationTypeDefinition",SCALAR_TYPE_DEFINITION:"ScalarTypeDefinition",OBJECT_TYPE_DEFINITION:"ObjectTypeDefinition",FIELD_DEFINITION:"FieldDefinition",INPUT_VALUE_DEFINITION:"InputValueDefinition",INTERFACE_TYPE_DEFINITION:"InterfaceTypeDefinition",UNION_TYPE_DEFINITION:"UnionTypeDefinition",ENUM_TYPE_DEFINITION:"EnumTypeDefinition",ENUM_VALUE_DEFINITION:"EnumValueDefinition",INPUT_OBJECT_TYPE_DEFINITION:"InputObjectTypeDefinition",DIRECTIVE_DEFINITION:"DirectiveDefinition",SCHEMA_EXTENSION:"SchemaExtension",SCALAR_TYPE_EXTENSION:"ScalarTypeExtension",OBJECT_TYPE_EXTENSION:"ObjectTypeExtension",INTERFACE_TYPE_EXTENSION:"InterfaceTypeExtension",UNION_TYPE_EXTENSION:"UnionTypeExtension",ENUM_TYPE_EXTENSION:"EnumTypeExtension",INPUT_OBJECT_TYPE_EXTENSION:"InputObjectTypeExtension"}),k=Object.freeze({QUERY:"QUERY",MUTATION:"MUTATION",SUBSCRIPTION:"SUBSCRIPTION",FIELD:"FIELD",FRAGMENT_DEFINITION:"FRAGMENT_DEFINITION",FRAGMENT_SPREAD:"FRAGMENT_SPREAD",INLINE_FRAGMENT:"INLINE_FRAGMENT",VARIABLE_DEFINITION:"VARIABLE_DEFINITION",SCHEMA:"SCHEMA",SCALAR:"SCALAR",OBJECT:"OBJECT",FIELD_DEFINITION:"FIELD_DEFINITION",ARGUMENT_DEFINITION:"ARGUMENT_DEFINITION",INTERFACE:"INTERFACE",UNION:"UNION",ENUM:"ENUM",ENUM_VALUE:"ENUM_VALUE",INPUT_OBJECT:"INPUT_OBJECT",INPUT_FIELD_DEFINITION:"INPUT_FIELD_DEFINITION"});function x(e,n){var t="string"==typeof e?new c(e):e;if(!(t instanceof c))throw new TypeError("Must provide Source. Received: ".concat(Object(r.a)(t)));return function(e){var n=e.token;return{kind:_.DOCUMENT,definitions:Te(e,g.SOF,L,g.EOF),loc:de(e,n)}}(h(t,n||{}))}function C(e,n){var t=h("string"==typeof e?new c(e):e,n||{});he(t,g.SOF);var r=K(t,!1);return he(t,g.EOF),r}function R(e,n){var t=h("string"==typeof e?new c(e):e,n||{});he(t,g.SOF);var r=W(t);return he(t,g.EOF),r}function w(e){var n=he(e,g.NAME);return{kind:_.NAME,value:n.value,loc:de(e,n)}}function L(e){if(Ee(e,g.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":case"fragment":return D(e);case"schema":case"scalar":case"type":case"interface":case"union":case"enum":case"input":case"directive":return ee(e);case"extend":return function(e){var n=e.lookahead();if(n.kind===g.NAME)switch(n.value){case"schema":return function(e){var n=e.token;me(e,"extend"),me(e,"schema");var t=H(e,!0),r=Ee(e,g.BRACE_L)?Te(e,g.BRACE_L,re,g.BRACE_R):[];if(0===t.length&&0===r.length)throw Oe(e);return{kind:_.SCHEMA_EXTENSION,directives:t,operationTypes:r,loc:de(e,n)}}(e);case"scalar":return function(e){var n=e.token;me(e,"extend"),me(e,"scalar");var t=w(e),r=H(e,!0);if(0===r.length)throw Oe(e);return{kind:_.SCALAR_TYPE_EXTENSION,name:t,directives:r,loc:de(e,n)}}(e);case"type":return function(e){var n=e.token;me(e,"extend"),me(e,"type");var t=w(e),r=oe(e),o=H(e,!0),i=ie(e);if(0===r.length&&0===o.length&&0===i.length)throw Oe(e);return{kind:_.OBJECT_TYPE_EXTENSION,name:t,interfaces:r,directives:o,fields:i,loc:de(e,n)}}(e);case"interface":return function(e){var n=e.token;me(e,"extend"),me(e,"interface");var t=w(e),r=H(e,!0),o=ie(e);if(0===r.length&&0===o.length)throw Oe(e);return{kind:_.INTERFACE_TYPE_EXTENSION,name:t,directives:r,fields:o,loc:de(e,n)}}(e);case"union":return function(e){var n=e.token;me(e,"extend"),me(e,"union");var t=w(e),r=H(e,!0),o=se(e);if(0===r.length&&0===o.length)throw Oe(e);return{kind:_.UNION_TYPE_EXTENSION,name:t,directives:r,types:o,loc:de(e,n)}}(e);case"enum":return function(e){var n=e.token;me(e,"extend"),me(e,"enum");var t=w(e),r=H(e,!0),o=fe(e);if(0===r.length&&0===o.length)throw Oe(e);return{kind:_.ENUM_TYPE_EXTENSION,name:t,directives:r,values:o,loc:de(e,n)}}(e);case"input":return function(e){var n=e.token;me(e,"extend"),me(e,"input");var t=w(e),r=H(e,!0),o=pe(e);if(0===r.length&&0===o.length)throw Oe(e);return{kind:_.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:r,fields:o,loc:de(e,n)}}(e)}throw Oe(e,n)}(e)}else{if(Ee(e,g.BRACE_L))return D(e);if(ne(e))return ee(e)}throw Oe(e)}function D(e){if(Ee(e,g.NAME))switch(e.token.value){case"query":case"mutation":case"subscription":return P(e);case"fragment":return function(e){var n=e.token;if(me(e,"fragment"),e.options.experimentalFragmentVariables)return{kind:_.FRAGMENT_DEFINITION,name:J(e),variableDefinitions:j(e),typeCondition:(me(e,"on"),Z(e)),directives:H(e,!1),selectionSet:U(e),loc:de(e,n)};return{kind:_.FRAGMENT_DEFINITION,name:J(e),typeCondition:(me(e,"on"),Z(e)),directives:H(e,!1),selectionSet:U(e),loc:de(e,n)}}(e)}else if(Ee(e,g.BRACE_L))return P(e);throw Oe(e)}function P(e){var n=e.token;if(Ee(e,g.BRACE_L))return{kind:_.OPERATION_DEFINITION,operation:"query",name:void 0,variableDefinitions:[],directives:[],selectionSet:U(e),loc:de(e,n)};var t,r=F(e);return Ee(e,g.NAME)&&(t=w(e)),{kind:_.OPERATION_DEFINITION,operation:r,name:t,variableDefinitions:j(e),directives:H(e,!1),selectionSet:U(e),loc:de(e,n)}}function F(e){var n=he(e,g.NAME);switch(n.value){case"query":return"query";case"mutation":return"mutation";case"subscription":return"subscription"}throw Oe(e,n)}function j(e){return Ee(e,g.PAREN_L)?Te(e,g.PAREN_L,B,g.PAREN_R):[]}function B(e){var n=e.token;return{kind:_.VARIABLE_DEFINITION,variable:M(e),type:(he(e,g.COLON),W(e)),defaultValue:Ne(e,g.EQUALS)?K(e,!0):void 0,directives:H(e,!0),loc:de(e,n)}}function M(e){var n=e.token;return he(e,g.DOLLAR),{kind:_.VARIABLE,name:w(e),loc:de(e,n)}}function U(e){var n=e.token;return{kind:_.SELECTION_SET,selections:Te(e,g.BRACE_L,V,g.BRACE_R),loc:de(e,n)}}function V(e){return Ee(e,g.SPREAD)?function(e){var n=e.token;he(e,g.SPREAD);var t=ge(e,"on");if(!t&&Ee(e,g.NAME))return{kind:_.FRAGMENT_SPREAD,name:J(e),directives:H(e,!1),loc:de(e,n)};return{kind:_.INLINE_FRAGMENT,typeCondition:t?Z(e):void 0,directives:H(e,!1),selectionSet:U(e),loc:de(e,n)}}(e):function(e){var n,t,r=e.token,o=w(e);Ne(e,g.COLON)?(n=o,t=w(e)):t=o;return{kind:_.FIELD,alias:n,name:t,arguments:Y(e,!1),directives:H(e,!1),selectionSet:Ee(e,g.BRACE_L)?U(e):void 0,loc:de(e,r)}}(e)}function Y(e,n){var t=n?q:G;return Ee(e,g.PAREN_L)?Te(e,g.PAREN_L,t,g.PAREN_R):[]}function G(e){var n=e.token,t=w(e);return he(e,g.COLON),{kind:_.ARGUMENT,name:t,value:K(e,!1),loc:de(e,n)}}function q(e){var n=e.token;return{kind:_.ARGUMENT,name:w(e),value:(he(e,g.COLON),Q(e)),loc:de(e,n)}}function J(e){if("on"===e.token.value)throw Oe(e);return w(e)}function K(e,n){var t=e.token;switch(t.kind){case g.BRACKET_L:return function(e,n){var t=e.token,r=n?Q:z;return{kind:_.LIST,values:Ie(e,g.BRACKET_L,r,g.BRACKET_R),loc:de(e,t)}}(e,n);case g.BRACE_L:return function(e,n){var t=e.token;return{kind:_.OBJECT,fields:Ie(e,g.BRACE_L,function(){return function(e,n){var t=e.token,r=w(e);return he(e,g.COLON),{kind:_.OBJECT_FIELD,name:r,value:K(e,n),loc:de(e,t)}}(e,n)},g.BRACE_R),loc:de(e,t)}}(e,n);case g.INT:return e.advance(),{kind:_.INT,value:t.value,loc:de(e,t)};case g.FLOAT:return e.advance(),{kind:_.FLOAT,value:t.value,loc:de(e,t)};case g.STRING:case g.BLOCK_STRING:return X(e);case g.NAME:return"true"===t.value||"false"===t.value?(e.advance(),{kind:_.BOOLEAN,value:"true"===t.value,loc:de(e,t)}):"null"===t.value?(e.advance(),{kind:_.NULL,loc:de(e,t)}):(e.advance(),{kind:_.ENUM,value:t.value,loc:de(e,t)});case g.DOLLAR:if(!n)return M(e)}throw Oe(e)}function X(e){var n=e.token;return e.advance(),{kind:_.STRING,value:n.value,block:n.kind===g.BLOCK_STRING,loc:de(e,n)}}function Q(e){return K(e,!0)}function z(e){return K(e,!1)}function H(e,n){for(var t=[];Ee(e,g.AT);)t.push($(e,n));return t}function $(e,n){var t=e.token;return he(e,g.AT),{kind:_.DIRECTIVE,name:w(e),arguments:Y(e,n),loc:de(e,t)}}function W(e){var n,t=e.token;return Ne(e,g.BRACKET_L)?(n=W(e),he(e,g.BRACKET_R),n={kind:_.LIST_TYPE,type:n,loc:de(e,t)}):n=Z(e),Ne(e,g.BANG)?{kind:_.NON_NULL_TYPE,type:n,loc:de(e,t)}:n}function Z(e){var n=e.token;return{kind:_.NAMED_TYPE,name:w(e),loc:de(e,n)}}function ee(e){var n=ne(e)?e.lookahead():e.token;if(n.kind===g.NAME)switch(n.value){case"schema":return function(e){var n=e.token;me(e,"schema");var t=H(e,!0),r=Te(e,g.BRACE_L,re,g.BRACE_R);return{kind:_.SCHEMA_DEFINITION,directives:t,operationTypes:r,loc:de(e,n)}}(e);case"scalar":return function(e){var n=e.token,t=te(e);me(e,"scalar");var r=w(e),o=H(e,!0);return{kind:_.SCALAR_TYPE_DEFINITION,description:t,name:r,directives:o,loc:de(e,n)}}(e);case"type":return function(e){var n=e.token,t=te(e);me(e,"type");var r=w(e),o=oe(e),i=H(e,!0),a=ie(e);return{kind:_.OBJECT_TYPE_DEFINITION,description:t,name:r,interfaces:o,directives:i,fields:a,loc:de(e,n)}}(e);case"interface":return function(e){var n=e.token,t=te(e);me(e,"interface");var r=w(e),o=H(e,!0),i=ie(e);return{kind:_.INTERFACE_TYPE_DEFINITION,description:t,name:r,directives:o,fields:i,loc:de(e,n)}}(e);case"union":return function(e){var n=e.token,t=te(e);me(e,"union");var r=w(e),o=H(e,!0),i=se(e);return{kind:_.UNION_TYPE_DEFINITION,description:t,name:r,directives:o,types:i,loc:de(e,n)}}(e);case"enum":return function(e){var n=e.token,t=te(e);me(e,"enum");var r=w(e),o=H(e,!0),i=fe(e);return{kind:_.ENUM_TYPE_DEFINITION,description:t,name:r,directives:o,values:i,loc:de(e,n)}}(e);case"input":return function(e){var n=e.token,t=te(e);me(e,"input");var r=w(e),o=H(e,!0),i=pe(e);return{kind:_.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:r,directives:o,fields:i,loc:de(e,n)}}(e);case"directive":return function(e){var n=e.token,t=te(e);me(e,"directive"),he(e,g.AT);var r=w(e),o=ue(e);me(e,"on");var i=function(e){Ne(e,g.PIPE);var n=[];do{n.push(ve(e))}while(Ne(e,g.PIPE));return n}(e);return{kind:_.DIRECTIVE_DEFINITION,description:t,name:r,arguments:o,locations:i,loc:de(e,n)}}(e)}throw Oe(e,n)}function ne(e){return Ee(e,g.STRING)||Ee(e,g.BLOCK_STRING)}function te(e){if(ne(e))return X(e)}function re(e){var n=e.token,t=F(e);he(e,g.COLON);var r=Z(e);return{kind:_.OPERATION_TYPE_DEFINITION,operation:t,type:r,loc:de(e,n)}}function oe(e){var n=[];if(ge(e,"implements")){Ne(e,g.AMP);do{n.push(Z(e))}while(Ne(e,g.AMP)||e.options.allowLegacySDLImplementsInterfaces&&Ee(e,g.NAME))}return n}function ie(e){return e.options.allowLegacySDLEmptyFields&&Ee(e,g.BRACE_L)&&e.lookahead().kind===g.BRACE_R?(e.advance(),e.advance(),[]):Ee(e,g.BRACE_L)?Te(e,g.BRACE_L,ae,g.BRACE_R):[]}function ae(e){var n=e.token,t=te(e),r=w(e),o=ue(e);he(e,g.COLON);var i=W(e),a=H(e,!0);return{kind:_.FIELD_DEFINITION,description:t,name:r,arguments:o,type:i,directives:a,loc:de(e,n)}}function ue(e){return Ee(e,g.PAREN_L)?Te(e,g.PAREN_L,ce,g.PAREN_R):[]}function ce(e){var n=e.token,t=te(e),r=w(e);he(e,g.COLON);var o,i=W(e);Ne(e,g.EQUALS)&&(o=Q(e));var a=H(e,!0);return{kind:_.INPUT_VALUE_DEFINITION,description:t,name:r,type:i,defaultValue:o,directives:a,loc:de(e,n)}}function se(e){var n=[];if(Ne(e,g.EQUALS)){Ne(e,g.PIPE);do{n.push(Z(e))}while(Ne(e,g.PIPE))}return n}function fe(e){return Ee(e,g.BRACE_L)?Te(e,g.BRACE_L,le,g.BRACE_R):[]}function le(e){var n=e.token,t=te(e),r=w(e),o=H(e,!0);return{kind:_.ENUM_VALUE_DEFINITION,description:t,name:r,directives:o,loc:de(e,n)}}function pe(e){return Ee(e,g.BRACE_L)?Te(e,g.BRACE_L,ce,g.BRACE_R):[]}function ve(e){var n=e.token,t=w(e);if(k.hasOwnProperty(t.value))return t;throw Oe(e,n)}function de(e,n){if(!e.options.noLocation)return new ye(n,e.lastToken,e.source)}function ye(e,n,t){this.start=e.start,this.end=n.end,this.startToken=e,this.endToken=n,this.source=t}function Ee(e,n){return e.token.kind===n}function he(e,n){var t=e.token;if(t.kind===n)return e.advance(),t;throw v(e.source,t.start,"Expected ".concat(n,", found ").concat(O(t)))}function Ne(e,n){var t=e.token;if(t.kind===n)return e.advance(),t}function me(e,n){var t=e.token;if(t.kind===g.NAME&&t.value===n)return e.advance(),t;throw v(e.source,t.start,'Expected "'.concat(n,'", found ').concat(O(t)))}function ge(e,n){var t=e.token;if(t.kind===g.NAME&&t.value===n)return e.advance(),t}function Oe(e,n){var t=n||e.token;return v(e.source,t.start,"Unexpected ".concat(O(t)))}function Ie(e,n,t,r){he(e,n);for(var o=[];!Ne(e,r);)o.push(t(e));return o}function Te(e,n,t,r){he(e,n);for(var o=[t(e)];!Ne(e,r);)o.push(t(e));return o}t.d(n,"parse",function(){return x}),t.d(n,"parseValue",function(){return C}),t.d(n,"parseType",function(){return R}),t.d(n,"parseConstValue",function(){return Q}),t.d(n,"parseTypeReference",function(){return W}),t.d(n,"parseNamedType",function(){return Z}),i(ye,function(){return{start:this.start,end:this.end}})}])});
},{}],3:[function(require,module,exports){
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var parser = require('graphql/language/parser');

var parse = parser.parse;

// Strip insignificant whitespace
// Note that this could do a lot more, such as reorder fields etc.
function normalize(string) {
  return string.replace(/[\s,]+/g, ' ').trim();
}

// A map docString -> graphql document
var docCache = {};

// A map fragmentName -> [normalized source]
var fragmentSourceMap = {};

function cacheKeyFromLoc(loc) {
  return normalize(loc.source.body.substring(loc.start, loc.end));
}

// For testing.
function resetCaches() {
  docCache = {};
  fragmentSourceMap = {};
}

// Take a unstripped parsed document (query/mutation or even fragment), and
// check all fragment definitions, checking for name->source uniqueness.
// We also want to make sure only unique fragments exist in the document.
var printFragmentWarnings = true;
function processFragments(ast) {
  var astFragmentMap = {};
  var definitions = [];

  for (var i = 0; i < ast.definitions.length; i++) {
    var fragmentDefinition = ast.definitions[i];

    if (fragmentDefinition.kind === 'FragmentDefinition') {
      var fragmentName = fragmentDefinition.name.value;
      var sourceKey = cacheKeyFromLoc(fragmentDefinition.loc);

      // We know something about this fragment
      if (fragmentSourceMap.hasOwnProperty(fragmentName) && !fragmentSourceMap[fragmentName][sourceKey]) {

        // this is a problem because the app developer is trying to register another fragment with
        // the same name as one previously registered. So, we tell them about it.
        if (printFragmentWarnings) {
          console.warn("Warning: fragment with name " + fragmentName + " already exists.\n"
            + "graphql-tag enforces all fragment names across your application to be unique; read more about\n"
            + "this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names");
        }

        fragmentSourceMap[fragmentName][sourceKey] = true;

      } else if (!fragmentSourceMap.hasOwnProperty(fragmentName)) {
        fragmentSourceMap[fragmentName] = {};
        fragmentSourceMap[fragmentName][sourceKey] = true;
      }

      if (!astFragmentMap[sourceKey]) {
        astFragmentMap[sourceKey] = true;
        definitions.push(fragmentDefinition);
      }
    } else {
      definitions.push(fragmentDefinition);
    }
  }

  ast.definitions = definitions;
  return ast;
}

function disableFragmentWarnings() {
  printFragmentWarnings = false;
}

function stripLoc(doc, removeLocAtThisLevel) {
  var docType = Object.prototype.toString.call(doc);

  if (docType === '[object Array]') {
    return doc.map(function (d) {
      return stripLoc(d, removeLocAtThisLevel);
    });
  }

  if (docType !== '[object Object]') {
    throw new Error('Unexpected input.');
  }

  // We don't want to remove the root loc field so we can use it
  // for fragment substitution (see below)
  if (removeLocAtThisLevel && doc.loc) {
    delete doc.loc;
  }

  // https://github.com/apollographql/graphql-tag/issues/40
  if (doc.loc) {
    delete doc.loc.startToken;
    delete doc.loc.endToken;
  }

  var keys = Object.keys(doc);
  var key;
  var value;
  var valueType;

  for (key in keys) {
    if (keys.hasOwnProperty(key)) {
      value = doc[keys[key]];
      valueType = Object.prototype.toString.call(value);

      if (valueType === '[object Object]' || valueType === '[object Array]') {
        doc[keys[key]] = stripLoc(value, true);
      }
    }
  }

  return doc;
}

var experimentalFragmentVariables = false;
function parseDocument(doc) {
  var cacheKey = normalize(doc);

  if (docCache[cacheKey]) {
    return docCache[cacheKey];
  }

  var parsed = parse(doc, { experimentalFragmentVariables: experimentalFragmentVariables });
  if (!parsed || parsed.kind !== 'Document') {
    throw new Error('Not a valid GraphQL document.');
  }

  // check that all "new" fragments inside the documents are consistent with
  // existing fragments of the same name
  parsed = processFragments(parsed);
  parsed = stripLoc(parsed, false);
  docCache[cacheKey] = parsed;

  return parsed;
}

function enableExperimentalFragmentVariables() {
  experimentalFragmentVariables = true;
}

function disableExperimentalFragmentVariables() {
  experimentalFragmentVariables = false;
}

// XXX This should eventually disallow arbitrary string interpolation, like Relay does
function gql(/* arguments */) {
  var args = Array.prototype.slice.call(arguments);

  var literals = args[0];

  // We always get literals[0] and then matching post literals for each arg given
  var result = (typeof(literals) === "string") ? literals : literals[0];

  for (var i = 1; i < args.length; i++) {
    if (args[i] && args[i].kind && args[i].kind === 'Document') {
      result += args[i].loc.source.body;
    } else {
      result += args[i];
    }

    result += literals[i];
  }

  return parseDocument(result);
}

// Support typescript, which isn't as nice as Babel about default exports
gql.default = gql;
gql.resetCaches = resetCaches;
gql.disableFragmentWarnings = disableFragmentWarnings;
gql.enableExperimentalFragmentVariables = enableExperimentalFragmentVariables;
gql.disableExperimentalFragmentVariables = disableExperimentalFragmentVariables;

module.exports = gql;

})));


},{"graphql/language/parser":20}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GraphQLError = GraphQLError;

var _printError = require("./printError");

var _location = require("../language/location");

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return (0, _location.getLocation)(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push((0, _location.getLocation)(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions || originalError && originalError.extensions;

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}

GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return (0, _printError.printError)(this);
    }
  }
});
},{"../language/location":19,"./printError":8}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatError = formatError;

var _invariant = _interopRequireDefault(require("../jsutils/invariant"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  !error ? (0, _invariant.default)(0, 'Received null or undefined error.') : void 0;
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
},{"../jsutils/invariant":13}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GraphQLError", {
  enumerable: true,
  get: function get() {
    return _GraphQLError.GraphQLError;
  }
});
Object.defineProperty(exports, "syntaxError", {
  enumerable: true,
  get: function get() {
    return _syntaxError.syntaxError;
  }
});
Object.defineProperty(exports, "locatedError", {
  enumerable: true,
  get: function get() {
    return _locatedError.locatedError;
  }
});
Object.defineProperty(exports, "printError", {
  enumerable: true,
  get: function get() {
    return _printError.printError;
  }
});
Object.defineProperty(exports, "formatError", {
  enumerable: true,
  get: function get() {
    return _formatError.formatError;
  }
});

var _GraphQLError = require("./GraphQLError");

var _syntaxError = require("./syntaxError");

var _locatedError = require("./locatedError");

var _printError = require("./printError");

var _formatError = require("./formatError");
},{"./GraphQLError":4,"./formatError":5,"./locatedError":7,"./printError":8,"./syntaxError":9}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.locatedError = locatedError;

var _GraphQLError = require("./GraphQLError");

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */
function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError.GraphQLError(originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}
},{"./GraphQLError":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.printError = printError;

var _location = require("../language/location");

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */
function printError(error) {
  var printedLocations = [];

  if (error.nodes) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = error.nodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;

        if (node.loc) {
          printedLocations.push(highlightSourceAtLocation(node.loc.source, (0, _location.getLocation)(node.loc.source, node.loc.start)));
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  } else if (error.source && error.locations) {
    var source = error.source;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = error.locations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var location = _step2.value;
        printedLocations.push(highlightSourceAtLocation(source, location));
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  return printedLocations.length === 0 ? error.message : [error.message].concat(printedLocations).join('\n\n') + '\n';
}
/**
 * Render a helpful description of the location of the error in the GraphQL
 * Source document.
 */


function highlightSourceAtLocation(source, location) {
  var firstLineColumnOffset = source.locationOffset.column - 1;
  var body = whitespace(firstLineColumnOffset) + source.body;
  var lineIndex = location.line - 1;
  var lineOffset = source.locationOffset.line - 1;
  var lineNum = location.line + lineOffset;
  var columnOffset = location.line === 1 ? firstLineColumnOffset : 0;
  var columnNum = location.column + columnOffset;
  var lines = body.split(/\r\n|[\n\r]/g);
  return "".concat(source.name, " (").concat(lineNum, ":").concat(columnNum, ")\n") + printPrefixedLines([// Lines specified like this: ["prefix", "string"],
  ["".concat(lineNum - 1, ": "), lines[lineIndex - 1]], ["".concat(lineNum, ": "), lines[lineIndex]], ['', whitespace(columnNum - 1) + '^'], ["".concat(lineNum + 1, ": "), lines[lineIndex + 1]]]);
}

function printPrefixedLines(lines) {
  var existingLines = lines.filter(function (_ref) {
    var _ = _ref[0],
        line = _ref[1];
    return line !== undefined;
  });
  var padLen = 0;
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = existingLines[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var _ref4 = _step3.value;
      var prefix = _ref4[0];
      padLen = Math.max(padLen, prefix.length);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return existingLines.map(function (_ref3) {
    var prefix = _ref3[0],
        line = _ref3[1];
    return lpad(padLen, prefix) + line;
  }).join('\n');
}

function whitespace(len) {
  return Array(len + 1).join(' ');
}

function lpad(len, str) {
  return whitespace(len - str.length) + str;
}
},{"../language/location":19}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.syntaxError = syntaxError;

var _GraphQLError = require("./GraphQLError");

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */
function syntaxError(source, position, description) {
  return new _GraphQLError.GraphQLError("Syntax Error: ".concat(description), undefined, source, [position]);
}
},{"./GraphQLError":4}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineToJSON;

var _nodejsCustomInspectSymbol = _interopRequireDefault(require("./nodejsCustomInspectSymbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The `defineToJSON()` function defines toJSON() and inspect() prototype
 * methods, if no function provided they become aliases for toString().
 */
function defineToJSON( // eslint-disable-next-line flowtype/no-weak-types
classObject) {
  var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : classObject.prototype.toString;
  classObject.prototype.toJSON = fn;
  classObject.prototype.inspect = fn;

  if (_nodejsCustomInspectSymbol.default) {
    classObject.prototype[_nodejsCustomInspectSymbol.default] = fn;
  }
}
},{"./nodejsCustomInspectSymbol":14}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = defineToStringTag;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The `defineToStringTag()` function checks first to see if the runtime
 * supports the `Symbol` class and then if the `Symbol.toStringTag` constant
 * is defined as a `Symbol` instance. If both conditions are met, the
 * Symbol.toStringTag property is defined as a getter that returns the
 * supplied class constructor's name.
 *
 * @method defineToStringTag
 *
 * @param {Class<any>} classObject a class such as Object, String, Number but
 * typically one of your own creation through the class keyword; `class A {}`,
 * for example.
 */
function defineToStringTag(classObject) {
  if (typeof Symbol === 'function' && Symbol.toStringTag) {
    Object.defineProperty(classObject.prototype, Symbol.toStringTag, {
      get: function get() {
        return this.constructor.name;
      }
    });
  }
}
},{}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = inspect;

var _nodejsCustomInspectSymbol = _interopRequireDefault(require("./nodejsCustomInspectSymbol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var MAX_ARRAY_LENGTH = 10;
var MAX_RECURSIVE_DEPTH = 2;
/**
 * Used to print values in error messages.
 */

function inspect(value) {
  return formatValue(value, []);
}

function formatValue(value, seenValues) {
  switch (_typeof(value)) {
    case 'string':
      return JSON.stringify(value);

    case 'function':
      return value.name ? "[function ".concat(value.name, "]") : '[function]';

    case 'object':
      return formatObjectValue(value, seenValues);

    default:
      return String(value);
  }
}

function formatObjectValue(value, previouslySeenValues) {
  if (previouslySeenValues.indexOf(value) !== -1) {
    return '[Circular]';
  }

  var seenValues = [].concat(previouslySeenValues, [value]);

  if (value) {
    var customInspectFn = getCustomFn(value);

    if (customInspectFn) {
      // $FlowFixMe(>=0.90.0)
      var customValue = customInspectFn.call(value); // check for infinite recursion

      if (customValue !== value) {
        return typeof customValue === 'string' ? customValue : formatValue(customValue, seenValues);
      }
    } else if (Array.isArray(value)) {
      return formatArray(value, seenValues);
    }

    return formatObject(value, seenValues);
  }

  return String(value);
}

function formatObject(object, seenValues) {
  var keys = Object.keys(object);

  if (keys.length === 0) {
    return '{}';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[' + getObjectTag(object) + ']';
  }

  var properties = keys.map(function (key) {
    var value = formatValue(object[key], seenValues);
    return key + ': ' + value;
  });
  return '{ ' + properties.join(', ') + ' }';
}

function formatArray(array, seenValues) {
  if (array.length === 0) {
    return '[]';
  }

  if (seenValues.length > MAX_RECURSIVE_DEPTH) {
    return '[Array]';
  }

  var len = Math.min(MAX_ARRAY_LENGTH, array.length);
  var remaining = array.length - len;
  var items = [];

  for (var i = 0; i < len; ++i) {
    items.push(formatValue(array[i], seenValues));
  }

  if (remaining === 1) {
    items.push('... 1 more item');
  } else if (remaining > 1) {
    items.push("... ".concat(remaining, " more items"));
  }

  return '[' + items.join(', ') + ']';
}

function getCustomFn(object) {
  var customInspectFn = object[String(_nodejsCustomInspectSymbol.default)];

  if (typeof customInspectFn === 'function') {
    return customInspectFn;
  }

  if (typeof object.inspect === 'function') {
    return object.inspect;
  }
}

function getObjectTag(object) {
  var tag = Object.prototype.toString.call(object).replace(/^\[object /, '').replace(/]$/, '');

  if (tag === 'Object' && typeof object.constructor === 'function') {
    var name = object.constructor.name;

    if (typeof name === 'string') {
      return name;
    }
  }

  return tag;
}
},{"./nodejsCustomInspectSymbol":14}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = invariant;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
function invariant(condition, message) {
  /* istanbul ignore else */
  if (!condition) {
    throw new Error(message);
  }
}
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */
var nodejsCustomInspectSymbol = typeof Symbol === 'function' ? Symbol.for('nodejs.util.inspect.custom') : undefined;
var _default = nodejsCustomInspectSymbol;
exports.default = _default;
},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dedentBlockStringValue = dedentBlockStringValue;
exports.getBlockStringIndentation = getBlockStringIndentation;
exports.printBlockString = printBlockString;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Produces the value of a block string from its parsed raw value, similar to
 * CoffeeScript's block string, Python's docstring trim or Ruby's strip_heredoc.
 *
 * This implements the GraphQL spec's BlockStringValue() static algorithm.
 */
function dedentBlockStringValue(rawString) {
  // Expand a block string's raw value into independent lines.
  var lines = rawString.split(/\r\n|[\n\r]/g); // Remove common indentation from all lines but first.

  var commonIndent = getBlockStringIndentation(lines);

  if (commonIndent !== 0) {
    for (var i = 1; i < lines.length; i++) {
      lines[i] = lines[i].slice(commonIndent);
    }
  } // Remove leading and trailing blank lines.


  while (lines.length > 0 && isBlank(lines[0])) {
    lines.shift();
  }

  while (lines.length > 0 && isBlank(lines[lines.length - 1])) {
    lines.pop();
  } // Return a string of the lines joined with U+000A.


  return lines.join('\n');
} // @internal


function getBlockStringIndentation(lines) {
  var commonIndent = null;

  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    var indent = leadingWhitespace(line);

    if (indent === line.length) {
      continue; // skip empty lines
    }

    if (commonIndent === null || indent < commonIndent) {
      commonIndent = indent;

      if (commonIndent === 0) {
        break;
      }
    }
  }

  return commonIndent === null ? 0 : commonIndent;
}

function leadingWhitespace(str) {
  var i = 0;

  while (i < str.length && (str[i] === ' ' || str[i] === '\t')) {
    i++;
  }

  return i;
}

function isBlank(str) {
  return leadingWhitespace(str) === str.length;
}
/**
 * Print a block string in the indented block form by adding a leading and
 * trailing blank line. However, if a block string starts with whitespace and is
 * a single-line, adding a leading blank line would strip that whitespace.
 */


function printBlockString(value) {
  var indentation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var preferMultipleLines = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isSingleLine = value.indexOf('\n') === -1;
  var hasLeadingSpace = value[0] === ' ' || value[0] === '\t';
  var hasTrailingQuote = value[value.length - 1] === '"';
  var printAsMultipleLines = !isSingleLine || hasTrailingQuote || preferMultipleLines;
  var result = ''; // Format a multi-line block quote to account for leading space.

  if (printAsMultipleLines && !(isSingleLine && hasLeadingSpace)) {
    result += '\n' + indentation;
  }

  result += indentation ? value.replace(/\n/g, '\n' + indentation) : value;

  if (printAsMultipleLines) {
    result += '\n';
  }

  return '"""' + result.replace(/"""/g, '\\"""') + '"""';
}
},{}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectiveLocation = void 0;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed directive location values.
 */
var DirectiveLocation = Object.freeze({
  // Request Definitions
  QUERY: 'QUERY',
  MUTATION: 'MUTATION',
  SUBSCRIPTION: 'SUBSCRIPTION',
  FIELD: 'FIELD',
  FRAGMENT_DEFINITION: 'FRAGMENT_DEFINITION',
  FRAGMENT_SPREAD: 'FRAGMENT_SPREAD',
  INLINE_FRAGMENT: 'INLINE_FRAGMENT',
  VARIABLE_DEFINITION: 'VARIABLE_DEFINITION',
  // Type System Definitions
  SCHEMA: 'SCHEMA',
  SCALAR: 'SCALAR',
  OBJECT: 'OBJECT',
  FIELD_DEFINITION: 'FIELD_DEFINITION',
  ARGUMENT_DEFINITION: 'ARGUMENT_DEFINITION',
  INTERFACE: 'INTERFACE',
  UNION: 'UNION',
  ENUM: 'ENUM',
  ENUM_VALUE: 'ENUM_VALUE',
  INPUT_OBJECT: 'INPUT_OBJECT',
  INPUT_FIELD_DEFINITION: 'INPUT_FIELD_DEFINITION'
});
/**
 * The enum type representing the directive location values.
 */

exports.DirectiveLocation = DirectiveLocation;
},{}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Kind = void 0;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * The set of allowed kind values for AST nodes.
 */
var Kind = Object.freeze({
  // Name
  NAME: 'Name',
  // Document
  DOCUMENT: 'Document',
  OPERATION_DEFINITION: 'OperationDefinition',
  VARIABLE_DEFINITION: 'VariableDefinition',
  SELECTION_SET: 'SelectionSet',
  FIELD: 'Field',
  ARGUMENT: 'Argument',
  // Fragments
  FRAGMENT_SPREAD: 'FragmentSpread',
  INLINE_FRAGMENT: 'InlineFragment',
  FRAGMENT_DEFINITION: 'FragmentDefinition',
  // Values
  VARIABLE: 'Variable',
  INT: 'IntValue',
  FLOAT: 'FloatValue',
  STRING: 'StringValue',
  BOOLEAN: 'BooleanValue',
  NULL: 'NullValue',
  ENUM: 'EnumValue',
  LIST: 'ListValue',
  OBJECT: 'ObjectValue',
  OBJECT_FIELD: 'ObjectField',
  // Directives
  DIRECTIVE: 'Directive',
  // Types
  NAMED_TYPE: 'NamedType',
  LIST_TYPE: 'ListType',
  NON_NULL_TYPE: 'NonNullType',
  // Type System Definitions
  SCHEMA_DEFINITION: 'SchemaDefinition',
  OPERATION_TYPE_DEFINITION: 'OperationTypeDefinition',
  // Type Definitions
  SCALAR_TYPE_DEFINITION: 'ScalarTypeDefinition',
  OBJECT_TYPE_DEFINITION: 'ObjectTypeDefinition',
  FIELD_DEFINITION: 'FieldDefinition',
  INPUT_VALUE_DEFINITION: 'InputValueDefinition',
  INTERFACE_TYPE_DEFINITION: 'InterfaceTypeDefinition',
  UNION_TYPE_DEFINITION: 'UnionTypeDefinition',
  ENUM_TYPE_DEFINITION: 'EnumTypeDefinition',
  ENUM_VALUE_DEFINITION: 'EnumValueDefinition',
  INPUT_OBJECT_TYPE_DEFINITION: 'InputObjectTypeDefinition',
  // Directive Definitions
  DIRECTIVE_DEFINITION: 'DirectiveDefinition',
  // Type System Extensions
  SCHEMA_EXTENSION: 'SchemaExtension',
  // Type Extensions
  SCALAR_TYPE_EXTENSION: 'ScalarTypeExtension',
  OBJECT_TYPE_EXTENSION: 'ObjectTypeExtension',
  INTERFACE_TYPE_EXTENSION: 'InterfaceTypeExtension',
  UNION_TYPE_EXTENSION: 'UnionTypeExtension',
  ENUM_TYPE_EXTENSION: 'EnumTypeExtension',
  INPUT_OBJECT_TYPE_EXTENSION: 'InputObjectTypeExtension'
});
/**
 * The enum type representing the possible kind values of AST nodes.
 */

exports.Kind = Kind;
},{}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createLexer = createLexer;
exports.isPunctuatorToken = isPunctuatorToken;
exports.getTokenDesc = getTokenDesc;
exports.TokenKind = void 0;

var _defineToJSON = _interopRequireDefault(require("../jsutils/defineToJSON"));

var _error = require("../error");

var _blockString = require("./blockString");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given a Source object, this returns a Lexer for that source.
 * A Lexer is a stateful stream generator in that every time
 * it is advanced, it returns the next token in the Source. Assuming the
 * source lexes, the final Token emitted by the lexer will be of kind
 * EOF, after which the lexer will repeatedly return the same EOF token
 * whenever called.
 */
function createLexer(source, options) {
  var startOfFileToken = new Tok(TokenKind.SOF, 0, 0, 0, 0, null);
  var lexer = {
    source: source,
    options: options,
    lastToken: startOfFileToken,
    token: startOfFileToken,
    line: 1,
    lineStart: 0,
    advance: advanceLexer,
    lookahead: lookahead
  };
  return lexer;
}

function advanceLexer() {
  this.lastToken = this.token;
  var token = this.token = this.lookahead();
  return token;
}

function lookahead() {
  var token = this.token;

  if (token.kind !== TokenKind.EOF) {
    do {
      // Note: next is only mutable during parsing, so we cast to allow this.
      token = token.next || (token.next = readToken(this, token));
    } while (token.kind === TokenKind.COMMENT);
  }

  return token;
}
/**
 * The return type of createLexer.
 */


/**
 * An exported enum describing the different kinds of tokens that the
 * lexer emits.
 */
var TokenKind = Object.freeze({
  SOF: '<SOF>',
  EOF: '<EOF>',
  BANG: '!',
  DOLLAR: '$',
  AMP: '&',
  PAREN_L: '(',
  PAREN_R: ')',
  SPREAD: '...',
  COLON: ':',
  EQUALS: '=',
  AT: '@',
  BRACKET_L: '[',
  BRACKET_R: ']',
  BRACE_L: '{',
  PIPE: '|',
  BRACE_R: '}',
  NAME: 'Name',
  INT: 'Int',
  FLOAT: 'Float',
  STRING: 'String',
  BLOCK_STRING: 'BlockString',
  COMMENT: 'Comment'
});
/**
 * The enum type representing the token kinds values.
 */

exports.TokenKind = TokenKind;

// @internal
function isPunctuatorToken(token) {
  var kind = token.kind;
  return kind === TokenKind.BANG || kind === TokenKind.DOLLAR || kind === TokenKind.AMP || kind === TokenKind.PAREN_L || kind === TokenKind.PAREN_R || kind === TokenKind.SPREAD || kind === TokenKind.COLON || kind === TokenKind.EQUALS || kind === TokenKind.AT || kind === TokenKind.BRACKET_L || kind === TokenKind.BRACKET_R || kind === TokenKind.BRACE_L || kind === TokenKind.PIPE || kind === TokenKind.BRACE_R;
}
/**
 * A helper function to describe a token as a string for debugging
 */


function getTokenDesc(token) {
  var value = token.value;
  return value ? "".concat(token.kind, " \"").concat(value, "\"") : token.kind;
}
/**
 * Helper function for constructing the Token object.
 */


function Tok(kind, start, end, line, column, prev, value) {
  this.kind = kind;
  this.start = start;
  this.end = end;
  this.line = line;
  this.column = column;
  this.value = value;
  this.prev = prev;
  this.next = null;
} // Print a simplified form when appearing in JSON/util.inspect.


(0, _defineToJSON.default)(Tok, function () {
  return {
    kind: this.kind,
    value: this.value,
    line: this.line,
    column: this.column
  };
});

function printCharCode(code) {
  return (// NaN/undefined represents access beyond the end of the file.
    isNaN(code) ? TokenKind.EOF : // Trust JSON for ASCII.
    code < 0x007f ? JSON.stringify(String.fromCharCode(code)) : // Otherwise print the escaped form.
    "\"\\u".concat(('00' + code.toString(16).toUpperCase()).slice(-4), "\"")
  );
}
/**
 * Gets the next token from the source starting at the given position.
 *
 * This skips over whitespace until it finds the next lexable token, then lexes
 * punctuators immediately or calls the appropriate helper function for more
 * complicated tokens.
 */


function readToken(lexer, prev) {
  var source = lexer.source;
  var body = source.body;
  var bodyLength = body.length;
  var pos = positionAfterWhitespace(body, prev.end, lexer);
  var line = lexer.line;
  var col = 1 + pos - lexer.lineStart;

  if (pos >= bodyLength) {
    return new Tok(TokenKind.EOF, bodyLength, bodyLength, line, col, prev);
  }

  var code = body.charCodeAt(pos); // SourceCharacter

  switch (code) {
    // !
    case 33:
      return new Tok(TokenKind.BANG, pos, pos + 1, line, col, prev);
    // #

    case 35:
      return readComment(source, pos, line, col, prev);
    // $

    case 36:
      return new Tok(TokenKind.DOLLAR, pos, pos + 1, line, col, prev);
    // &

    case 38:
      return new Tok(TokenKind.AMP, pos, pos + 1, line, col, prev);
    // (

    case 40:
      return new Tok(TokenKind.PAREN_L, pos, pos + 1, line, col, prev);
    // )

    case 41:
      return new Tok(TokenKind.PAREN_R, pos, pos + 1, line, col, prev);
    // .

    case 46:
      if (body.charCodeAt(pos + 1) === 46 && body.charCodeAt(pos + 2) === 46) {
        return new Tok(TokenKind.SPREAD, pos, pos + 3, line, col, prev);
      }

      break;
    // :

    case 58:
      return new Tok(TokenKind.COLON, pos, pos + 1, line, col, prev);
    // =

    case 61:
      return new Tok(TokenKind.EQUALS, pos, pos + 1, line, col, prev);
    // @

    case 64:
      return new Tok(TokenKind.AT, pos, pos + 1, line, col, prev);
    // [

    case 91:
      return new Tok(TokenKind.BRACKET_L, pos, pos + 1, line, col, prev);
    // ]

    case 93:
      return new Tok(TokenKind.BRACKET_R, pos, pos + 1, line, col, prev);
    // {

    case 123:
      return new Tok(TokenKind.BRACE_L, pos, pos + 1, line, col, prev);
    // |

    case 124:
      return new Tok(TokenKind.PIPE, pos, pos + 1, line, col, prev);
    // }

    case 125:
      return new Tok(TokenKind.BRACE_R, pos, pos + 1, line, col, prev);
    // A-Z _ a-z

    case 65:
    case 66:
    case 67:
    case 68:
    case 69:
    case 70:
    case 71:
    case 72:
    case 73:
    case 74:
    case 75:
    case 76:
    case 77:
    case 78:
    case 79:
    case 80:
    case 81:
    case 82:
    case 83:
    case 84:
    case 85:
    case 86:
    case 87:
    case 88:
    case 89:
    case 90:
    case 95:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 108:
    case 109:
    case 110:
    case 111:
    case 112:
    case 113:
    case 114:
    case 115:
    case 116:
    case 117:
    case 118:
    case 119:
    case 120:
    case 121:
    case 122:
      return readName(source, pos, line, col, prev);
    // - 0-9

    case 45:
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
      return readNumber(source, pos, code, line, col, prev);
    // "

    case 34:
      if (body.charCodeAt(pos + 1) === 34 && body.charCodeAt(pos + 2) === 34) {
        return readBlockString(source, pos, line, col, prev, lexer);
      }

      return readString(source, pos, line, col, prev);
  }

  throw (0, _error.syntaxError)(source, pos, unexpectedCharacterMessage(code));
}
/**
 * Report a message that an unexpected character was encountered.
 */


function unexpectedCharacterMessage(code) {
  if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
    return "Cannot contain the invalid character ".concat(printCharCode(code), ".");
  }

  if (code === 39) {
    // '
    return "Unexpected single quote character ('), did you mean to use " + 'a double quote (")?';
  }

  return "Cannot parse the unexpected character ".concat(printCharCode(code), ".");
}
/**
 * Reads from body starting at startPosition until it finds a non-whitespace
 * character, then returns the position of that character for lexing.
 */


function positionAfterWhitespace(body, startPosition, lexer) {
  var bodyLength = body.length;
  var position = startPosition;

  while (position < bodyLength) {
    var code = body.charCodeAt(position); // tab | space | comma | BOM

    if (code === 9 || code === 32 || code === 44 || code === 0xfeff) {
      ++position;
    } else if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else {
      break;
    }
  }

  return position;
}
/**
 * Reads a comment token from the source file.
 *
 * #[\u0009\u0020-\uFFFF]*
 */


function readComment(source, start, line, col, prev) {
  var body = source.body;
  var code;
  var position = start;

  do {
    code = body.charCodeAt(++position);
  } while (!isNaN(code) && ( // SourceCharacter but not LineTerminator
  code > 0x001f || code === 0x0009));

  return new Tok(TokenKind.COMMENT, start, position, line, col, prev, body.slice(start + 1, position));
}
/**
 * Reads a number token from the source file, either a float
 * or an int depending on whether a decimal point appears.
 *
 * Int:   -?(0|[1-9][0-9]*)
 * Float: -?(0|[1-9][0-9]*)(\.[0-9]+)?((E|e)(+|-)?[0-9]+)?
 */


function readNumber(source, start, firstCode, line, col, prev) {
  var body = source.body;
  var code = firstCode;
  var position = start;
  var isFloat = false;

  if (code === 45) {
    // -
    code = body.charCodeAt(++position);
  }

  if (code === 48) {
    // 0
    code = body.charCodeAt(++position);

    if (code >= 48 && code <= 57) {
      throw (0, _error.syntaxError)(source, position, "Invalid number, unexpected digit after 0: ".concat(printCharCode(code), "."));
    }
  } else {
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 46) {
    // .
    isFloat = true;
    code = body.charCodeAt(++position);
    position = readDigits(source, position, code);
    code = body.charCodeAt(position);
  }

  if (code === 69 || code === 101) {
    // E e
    isFloat = true;
    code = body.charCodeAt(++position);

    if (code === 43 || code === 45) {
      // + -
      code = body.charCodeAt(++position);
    }

    position = readDigits(source, position, code);
  }

  return new Tok(isFloat ? TokenKind.FLOAT : TokenKind.INT, start, position, line, col, prev, body.slice(start, position));
}
/**
 * Returns the new position in the source after reading digits.
 */


function readDigits(source, start, firstCode) {
  var body = source.body;
  var position = start;
  var code = firstCode;

  if (code >= 48 && code <= 57) {
    // 0 - 9
    do {
      code = body.charCodeAt(++position);
    } while (code >= 48 && code <= 57); // 0 - 9


    return position;
  }

  throw (0, _error.syntaxError)(source, position, "Invalid number, expected digit but got: ".concat(printCharCode(code), "."));
}
/**
 * Reads a string token from the source file.
 *
 * "([^"\\\u000A\u000D]|(\\(u[0-9a-fA-F]{4}|["\\/bfnrt])))*"
 */


function readString(source, start, line, col, prev) {
  var body = source.body;
  var position = start + 1;
  var chunkStart = position;
  var code = 0;
  var value = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position)) && // not LineTerminator
  code !== 0x000a && code !== 0x000d) {
    // Closing Quote (")
    if (code === 34) {
      value += body.slice(chunkStart, position);
      return new Tok(TokenKind.STRING, start, position + 1, line, col, prev, value);
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009) {
      throw (0, _error.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    ++position;

    if (code === 92) {
      // \
      value += body.slice(chunkStart, position - 1);
      code = body.charCodeAt(position);

      switch (code) {
        case 34:
          value += '"';
          break;

        case 47:
          value += '/';
          break;

        case 92:
          value += '\\';
          break;

        case 98:
          value += '\b';
          break;

        case 102:
          value += '\f';
          break;

        case 110:
          value += '\n';
          break;

        case 114:
          value += '\r';
          break;

        case 116:
          value += '\t';
          break;

        case 117:
          // u
          var charCode = uniCharCode(body.charCodeAt(position + 1), body.charCodeAt(position + 2), body.charCodeAt(position + 3), body.charCodeAt(position + 4));

          if (charCode < 0) {
            throw (0, _error.syntaxError)(source, position, 'Invalid character escape sequence: ' + "\\u".concat(body.slice(position + 1, position + 5), "."));
          }

          value += String.fromCharCode(charCode);
          position += 4;
          break;

        default:
          throw (0, _error.syntaxError)(source, position, "Invalid character escape sequence: \\".concat(String.fromCharCode(code), "."));
      }

      ++position;
      chunkStart = position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Reads a block string token from the source file.
 *
 * """("?"?(\\"""|\\(?!=""")|[^"\\]))*"""
 */


function readBlockString(source, start, line, col, prev, lexer) {
  var body = source.body;
  var position = start + 3;
  var chunkStart = position;
  var code = 0;
  var rawValue = '';

  while (position < body.length && !isNaN(code = body.charCodeAt(position))) {
    // Closing Triple-Quote (""")
    if (code === 34 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34) {
      rawValue += body.slice(chunkStart, position);
      return new Tok(TokenKind.BLOCK_STRING, start, position + 3, line, col, prev, (0, _blockString.dedentBlockStringValue)(rawValue));
    } // SourceCharacter


    if (code < 0x0020 && code !== 0x0009 && code !== 0x000a && code !== 0x000d) {
      throw (0, _error.syntaxError)(source, position, "Invalid character within String: ".concat(printCharCode(code), "."));
    }

    if (code === 10) {
      // new line
      ++position;
      ++lexer.line;
      lexer.lineStart = position;
    } else if (code === 13) {
      // carriage return
      if (body.charCodeAt(position + 1) === 10) {
        position += 2;
      } else {
        ++position;
      }

      ++lexer.line;
      lexer.lineStart = position;
    } else if ( // Escape Triple-Quote (\""")
    code === 92 && body.charCodeAt(position + 1) === 34 && body.charCodeAt(position + 2) === 34 && body.charCodeAt(position + 3) === 34) {
      rawValue += body.slice(chunkStart, position) + '"""';
      position += 4;
      chunkStart = position;
    } else {
      ++position;
    }
  }

  throw (0, _error.syntaxError)(source, position, 'Unterminated string.');
}
/**
 * Converts four hexadecimal chars to the integer that the
 * string represents. For example, uniCharCode('0','0','0','f')
 * will return 15, and uniCharCode('0','0','f','f') returns 255.
 *
 * Returns a negative number on error, if a char was invalid.
 *
 * This is implemented by noting that char2hex() returns -1 on error,
 * which means the result of ORing the char2hex() will also be negative.
 */


function uniCharCode(a, b, c, d) {
  return char2hex(a) << 12 | char2hex(b) << 8 | char2hex(c) << 4 | char2hex(d);
}
/**
 * Converts a hex character to its integer value.
 * '0' becomes 0, '9' becomes 9
 * 'A' becomes 10, 'F' becomes 15
 * 'a' becomes 10, 'f' becomes 15
 *
 * Returns -1 on error.
 */


function char2hex(a) {
  return a >= 48 && a <= 57 ? a - 48 // 0-9
  : a >= 65 && a <= 70 ? a - 55 // A-F
  : a >= 97 && a <= 102 ? a - 87 // a-f
  : -1;
}
/**
 * Reads an alphanumeric + underscore name from the source.
 *
 * [_A-Za-z][_0-9A-Za-z]*
 */


function readName(source, start, line, col, prev) {
  var body = source.body;
  var bodyLength = body.length;
  var position = start + 1;
  var code = 0;

  while (position !== bodyLength && !isNaN(code = body.charCodeAt(position)) && (code === 95 || // _
  code >= 48 && code <= 57 || // 0-9
  code >= 65 && code <= 90 || // A-Z
  code >= 97 && code <= 122) // a-z
  ) {
    ++position;
  }

  return new Tok(TokenKind.NAME, start, position, line, col, prev, body.slice(start, position));
}
},{"../error":6,"../jsutils/defineToJSON":10,"./blockString":15}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Represents a location in a Source.
 */

/**
 * Takes a Source and a UTF-8 character offset, and returns the corresponding
 * line and column as a SourceLocation.
 */
function getLocation(source, position) {
  var lineRegexp = /\r\n|[\n\r]/g;
  var line = 1;
  var column = position + 1;
  var match;

  while ((match = lineRegexp.exec(source.body)) && match.index < position) {
    line += 1;
    column = position + 1 - (match.index + match[0].length);
  }

  return {
    line: line,
    column: column
  };
}
},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = parse;
exports.parseValue = parseValue;
exports.parseType = parseType;
exports.parseConstValue = parseConstValue;
exports.parseTypeReference = parseTypeReference;
exports.parseNamedType = parseNamedType;

var _inspect = _interopRequireDefault(require("../jsutils/inspect"));

var _defineToJSON = _interopRequireDefault(require("../jsutils/defineToJSON"));

var _source = require("./source");

var _error = require("../error");

var _lexer = require("./lexer");

var _kinds = require("./kinds");

var _directiveLocation = require("./directiveLocation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * Given a GraphQL source, parses it into a Document.
 * Throws GraphQLError if a syntax error is encountered.
 */
function parse(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;

  if (!(sourceObj instanceof _source.Source)) {
    throw new TypeError("Must provide Source. Received: ".concat((0, _inspect.default)(sourceObj)));
  }

  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  return parseDocument(lexer);
}
/**
 * Given a string containing a GraphQL value (ex. `[42]`), parse the AST for
 * that value.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Values directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: valueFromAST().
 */


function parseValue(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expectToken(lexer, _lexer.TokenKind.SOF);
  var value = parseValueLiteral(lexer, false);
  expectToken(lexer, _lexer.TokenKind.EOF);
  return value;
}
/**
 * Given a string containing a GraphQL Type (ex. `[Int!]`), parse the AST for
 * that type.
 * Throws GraphQLError if a syntax error is encountered.
 *
 * This is useful within tools that operate upon GraphQL Types directly and
 * in isolation of complete GraphQL documents.
 *
 * Consider providing the results to the utility function: typeFromAST().
 */


function parseType(source, options) {
  var sourceObj = typeof source === 'string' ? new _source.Source(source) : source;
  var lexer = (0, _lexer.createLexer)(sourceObj, options || {});
  expectToken(lexer, _lexer.TokenKind.SOF);
  var type = parseTypeReference(lexer);
  expectToken(lexer, _lexer.TokenKind.EOF);
  return type;
}
/**
 * Converts a name lex token into a name parse node.
 */


function parseName(lexer) {
  var token = expectToken(lexer, _lexer.TokenKind.NAME);
  return {
    kind: _kinds.Kind.NAME,
    value: token.value,
    loc: loc(lexer, token)
  };
} // Implements the parsing rules in the Document section.

/**
 * Document : Definition+
 */


function parseDocument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.DOCUMENT,
    definitions: many(lexer, _lexer.TokenKind.SOF, parseDefinition, _lexer.TokenKind.EOF),
    loc: loc(lexer, start)
  };
}
/**
 * Definition :
 *   - ExecutableDefinition
 *   - TypeSystemDefinition
 *   - TypeSystemExtension
 */


function parseDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
      case 'fragment':
        return parseExecutableDefinition(lexer);

      case 'schema':
      case 'scalar':
      case 'type':
      case 'interface':
      case 'union':
      case 'enum':
      case 'input':
      case 'directive':
        return parseTypeSystemDefinition(lexer);

      case 'extend':
        return parseTypeSystemExtension(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseExecutableDefinition(lexer);
  } else if (peekDescription(lexer)) {
    return parseTypeSystemDefinition(lexer);
  }

  throw unexpected(lexer);
}
/**
 * ExecutableDefinition :
 *   - OperationDefinition
 *   - FragmentDefinition
 */


function parseExecutableDefinition(lexer) {
  if (peek(lexer, _lexer.TokenKind.NAME)) {
    switch (lexer.token.value) {
      case 'query':
      case 'mutation':
      case 'subscription':
        return parseOperationDefinition(lexer);

      case 'fragment':
        return parseFragmentDefinition(lexer);
    }
  } else if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return parseOperationDefinition(lexer);
  }

  throw unexpected(lexer);
} // Implements the parsing rules in the Operations section.

/**
 * OperationDefinition :
 *  - SelectionSet
 *  - OperationType Name? VariableDefinitions? Directives? SelectionSet
 */


function parseOperationDefinition(lexer) {
  var start = lexer.token;

  if (peek(lexer, _lexer.TokenKind.BRACE_L)) {
    return {
      kind: _kinds.Kind.OPERATION_DEFINITION,
      operation: 'query',
      name: undefined,
      variableDefinitions: [],
      directives: [],
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }

  var operation = parseOperationType(lexer);
  var name;

  if (peek(lexer, _lexer.TokenKind.NAME)) {
    name = parseName(lexer);
  }

  return {
    kind: _kinds.Kind.OPERATION_DEFINITION,
    operation: operation,
    name: name,
    variableDefinitions: parseVariableDefinitions(lexer),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * OperationType : one of query mutation subscription
 */


function parseOperationType(lexer) {
  var operationToken = expectToken(lexer, _lexer.TokenKind.NAME);

  switch (operationToken.value) {
    case 'query':
      return 'query';

    case 'mutation':
      return 'mutation';

    case 'subscription':
      return 'subscription';
  }

  throw unexpected(lexer, operationToken);
}
/**
 * VariableDefinitions : ( VariableDefinition+ )
 */


function parseVariableDefinitions(lexer) {
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, parseVariableDefinition, _lexer.TokenKind.PAREN_R) : [];
}
/**
 * VariableDefinition : Variable : Type DefaultValue? Directives[Const]?
 */


function parseVariableDefinition(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.VARIABLE_DEFINITION,
    variable: parseVariable(lexer),
    type: (expectToken(lexer, _lexer.TokenKind.COLON), parseTypeReference(lexer)),
    defaultValue: expectOptionalToken(lexer, _lexer.TokenKind.EQUALS) ? parseValueLiteral(lexer, true) : undefined,
    directives: parseDirectives(lexer, true),
    loc: loc(lexer, start)
  };
}
/**
 * Variable : $ Name
 */


function parseVariable(lexer) {
  var start = lexer.token;
  expectToken(lexer, _lexer.TokenKind.DOLLAR);
  return {
    kind: _kinds.Kind.VARIABLE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * SelectionSet : { Selection+ }
 */


function parseSelectionSet(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.SELECTION_SET,
    selections: many(lexer, _lexer.TokenKind.BRACE_L, parseSelection, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}
/**
 * Selection :
 *   - Field
 *   - FragmentSpread
 *   - InlineFragment
 */


function parseSelection(lexer) {
  return peek(lexer, _lexer.TokenKind.SPREAD) ? parseFragment(lexer) : parseField(lexer);
}
/**
 * Field : Alias? Name Arguments? Directives? SelectionSet?
 *
 * Alias : Name :
 */


function parseField(lexer) {
  var start = lexer.token;
  var nameOrAlias = parseName(lexer);
  var alias;
  var name;

  if (expectOptionalToken(lexer, _lexer.TokenKind.COLON)) {
    alias = nameOrAlias;
    name = parseName(lexer);
  } else {
    name = nameOrAlias;
  }

  return {
    kind: _kinds.Kind.FIELD,
    alias: alias,
    name: name,
    arguments: parseArguments(lexer, false),
    directives: parseDirectives(lexer, false),
    selectionSet: peek(lexer, _lexer.TokenKind.BRACE_L) ? parseSelectionSet(lexer) : undefined,
    loc: loc(lexer, start)
  };
}
/**
 * Arguments[Const] : ( Argument[?Const]+ )
 */


function parseArguments(lexer, isConst) {
  var item = isConst ? parseConstArgument : parseArgument;
  return peek(lexer, _lexer.TokenKind.PAREN_L) ? many(lexer, _lexer.TokenKind.PAREN_L, item, _lexer.TokenKind.PAREN_R) : [];
}
/**
 * Argument[Const] : Name : Value[?Const]
 */


function parseArgument(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);
  expectToken(lexer, _lexer.TokenKind.COLON);
  return {
    kind: _kinds.Kind.ARGUMENT,
    name: name,
    value: parseValueLiteral(lexer, false),
    loc: loc(lexer, start)
  };
}

function parseConstArgument(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.ARGUMENT,
    name: parseName(lexer),
    value: (expectToken(lexer, _lexer.TokenKind.COLON), parseConstValue(lexer)),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Fragments section.

/**
 * Corresponds to both FragmentSpread and InlineFragment in the spec.
 *
 * FragmentSpread : ... FragmentName Directives?
 *
 * InlineFragment : ... TypeCondition? Directives? SelectionSet
 */


function parseFragment(lexer) {
  var start = lexer.token;
  expectToken(lexer, _lexer.TokenKind.SPREAD);
  var hasTypeCondition = expectOptionalKeyword(lexer, 'on');

  if (!hasTypeCondition && peek(lexer, _lexer.TokenKind.NAME)) {
    return {
      kind: _kinds.Kind.FRAGMENT_SPREAD,
      name: parseFragmentName(lexer),
      directives: parseDirectives(lexer, false),
      loc: loc(lexer, start)
    };
  }

  return {
    kind: _kinds.Kind.INLINE_FRAGMENT,
    typeCondition: hasTypeCondition ? parseNamedType(lexer) : undefined,
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * FragmentDefinition :
 *   - fragment FragmentName on TypeCondition Directives? SelectionSet
 *
 * TypeCondition : NamedType
 */


function parseFragmentDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'fragment'); // Experimental support for defining variables within fragments changes
  // the grammar of FragmentDefinition:
  //   - fragment FragmentName VariableDefinitions? on TypeCondition Directives? SelectionSet

  if (lexer.options.experimentalFragmentVariables) {
    return {
      kind: _kinds.Kind.FRAGMENT_DEFINITION,
      name: parseFragmentName(lexer),
      variableDefinitions: parseVariableDefinitions(lexer),
      typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
      directives: parseDirectives(lexer, false),
      selectionSet: parseSelectionSet(lexer),
      loc: loc(lexer, start)
    };
  }

  return {
    kind: _kinds.Kind.FRAGMENT_DEFINITION,
    name: parseFragmentName(lexer),
    typeCondition: (expectKeyword(lexer, 'on'), parseNamedType(lexer)),
    directives: parseDirectives(lexer, false),
    selectionSet: parseSelectionSet(lexer),
    loc: loc(lexer, start)
  };
}
/**
 * FragmentName : Name but not `on`
 */


function parseFragmentName(lexer) {
  if (lexer.token.value === 'on') {
    throw unexpected(lexer);
  }

  return parseName(lexer);
} // Implements the parsing rules in the Values section.

/**
 * Value[Const] :
 *   - [~Const] Variable
 *   - IntValue
 *   - FloatValue
 *   - StringValue
 *   - BooleanValue
 *   - NullValue
 *   - EnumValue
 *   - ListValue[?Const]
 *   - ObjectValue[?Const]
 *
 * BooleanValue : one of `true` `false`
 *
 * NullValue : `null`
 *
 * EnumValue : Name but not `true`, `false` or `null`
 */


function parseValueLiteral(lexer, isConst) {
  var token = lexer.token;

  switch (token.kind) {
    case _lexer.TokenKind.BRACKET_L:
      return parseList(lexer, isConst);

    case _lexer.TokenKind.BRACE_L:
      return parseObject(lexer, isConst);

    case _lexer.TokenKind.INT:
      lexer.advance();
      return {
        kind: _kinds.Kind.INT,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer.TokenKind.FLOAT:
      lexer.advance();
      return {
        kind: _kinds.Kind.FLOAT,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer.TokenKind.STRING:
    case _lexer.TokenKind.BLOCK_STRING:
      return parseStringLiteral(lexer);

    case _lexer.TokenKind.NAME:
      if (token.value === 'true' || token.value === 'false') {
        lexer.advance();
        return {
          kind: _kinds.Kind.BOOLEAN,
          value: token.value === 'true',
          loc: loc(lexer, token)
        };
      } else if (token.value === 'null') {
        lexer.advance();
        return {
          kind: _kinds.Kind.NULL,
          loc: loc(lexer, token)
        };
      }

      lexer.advance();
      return {
        kind: _kinds.Kind.ENUM,
        value: token.value,
        loc: loc(lexer, token)
      };

    case _lexer.TokenKind.DOLLAR:
      if (!isConst) {
        return parseVariable(lexer);
      }

      break;
  }

  throw unexpected(lexer);
}

function parseStringLiteral(lexer) {
  var token = lexer.token;
  lexer.advance();
  return {
    kind: _kinds.Kind.STRING,
    value: token.value,
    block: token.kind === _lexer.TokenKind.BLOCK_STRING,
    loc: loc(lexer, token)
  };
}

function parseConstValue(lexer) {
  return parseValueLiteral(lexer, true);
}

function parseValueValue(lexer) {
  return parseValueLiteral(lexer, false);
}
/**
 * ListValue[Const] :
 *   - [ ]
 *   - [ Value[?Const]+ ]
 */


function parseList(lexer, isConst) {
  var start = lexer.token;
  var item = isConst ? parseConstValue : parseValueValue;
  return {
    kind: _kinds.Kind.LIST,
    values: any(lexer, _lexer.TokenKind.BRACKET_L, item, _lexer.TokenKind.BRACKET_R),
    loc: loc(lexer, start)
  };
}
/**
 * ObjectValue[Const] :
 *   - { }
 *   - { ObjectField[?Const]+ }
 */


function parseObject(lexer, isConst) {
  var start = lexer.token;

  var item = function item() {
    return parseObjectField(lexer, isConst);
  };

  return {
    kind: _kinds.Kind.OBJECT,
    fields: any(lexer, _lexer.TokenKind.BRACE_L, item, _lexer.TokenKind.BRACE_R),
    loc: loc(lexer, start)
  };
}
/**
 * ObjectField[Const] : Name : Value[?Const]
 */


function parseObjectField(lexer, isConst) {
  var start = lexer.token;
  var name = parseName(lexer);
  expectToken(lexer, _lexer.TokenKind.COLON);
  return {
    kind: _kinds.Kind.OBJECT_FIELD,
    name: name,
    value: parseValueLiteral(lexer, isConst),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Directives section.

/**
 * Directives[Const] : Directive[?Const]+
 */


function parseDirectives(lexer, isConst) {
  var directives = [];

  while (peek(lexer, _lexer.TokenKind.AT)) {
    directives.push(parseDirective(lexer, isConst));
  }

  return directives;
}
/**
 * Directive[Const] : @ Name Arguments[?Const]?
 */


function parseDirective(lexer, isConst) {
  var start = lexer.token;
  expectToken(lexer, _lexer.TokenKind.AT);
  return {
    kind: _kinds.Kind.DIRECTIVE,
    name: parseName(lexer),
    arguments: parseArguments(lexer, isConst),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Types section.

/**
 * Type :
 *   - NamedType
 *   - ListType
 *   - NonNullType
 */


function parseTypeReference(lexer) {
  var start = lexer.token;
  var type;

  if (expectOptionalToken(lexer, _lexer.TokenKind.BRACKET_L)) {
    type = parseTypeReference(lexer);
    expectToken(lexer, _lexer.TokenKind.BRACKET_R);
    type = {
      kind: _kinds.Kind.LIST_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  } else {
    type = parseNamedType(lexer);
  }

  if (expectOptionalToken(lexer, _lexer.TokenKind.BANG)) {
    return {
      kind: _kinds.Kind.NON_NULL_TYPE,
      type: type,
      loc: loc(lexer, start)
    };
  }

  return type;
}
/**
 * NamedType : Name
 */


function parseNamedType(lexer) {
  var start = lexer.token;
  return {
    kind: _kinds.Kind.NAMED_TYPE,
    name: parseName(lexer),
    loc: loc(lexer, start)
  };
} // Implements the parsing rules in the Type Definition section.

/**
 * TypeSystemDefinition :
 *   - SchemaDefinition
 *   - TypeDefinition
 *   - DirectiveDefinition
 *
 * TypeDefinition :
 *   - ScalarTypeDefinition
 *   - ObjectTypeDefinition
 *   - InterfaceTypeDefinition
 *   - UnionTypeDefinition
 *   - EnumTypeDefinition
 *   - InputObjectTypeDefinition
 */


function parseTypeSystemDefinition(lexer) {
  // Many definitions begin with a description and require a lookahead.
  var keywordToken = peekDescription(lexer) ? lexer.lookahead() : lexer.token;

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaDefinition(lexer);

      case 'scalar':
        return parseScalarTypeDefinition(lexer);

      case 'type':
        return parseObjectTypeDefinition(lexer);

      case 'interface':
        return parseInterfaceTypeDefinition(lexer);

      case 'union':
        return parseUnionTypeDefinition(lexer);

      case 'enum':
        return parseEnumTypeDefinition(lexer);

      case 'input':
        return parseInputObjectTypeDefinition(lexer);

      case 'directive':
        return parseDirectiveDefinition(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}

function peekDescription(lexer) {
  return peek(lexer, _lexer.TokenKind.STRING) || peek(lexer, _lexer.TokenKind.BLOCK_STRING);
}
/**
 * Description : StringValue
 */


function parseDescription(lexer) {
  if (peekDescription(lexer)) {
    return parseStringLiteral(lexer);
  }
}
/**
 * SchemaDefinition : schema Directives[Const]? { OperationTypeDefinition+ }
 */


function parseSchemaDefinition(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R);
  return {
    kind: _kinds.Kind.SCHEMA_DEFINITION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}
/**
 * OperationTypeDefinition : OperationType : NamedType
 */


function parseOperationTypeDefinition(lexer) {
  var start = lexer.token;
  var operation = parseOperationType(lexer);
  expectToken(lexer, _lexer.TokenKind.COLON);
  var type = parseNamedType(lexer);
  return {
    kind: _kinds.Kind.OPERATION_TYPE_DEFINITION,
    operation: operation,
    type: type,
    loc: loc(lexer, start)
  };
}
/**
 * ScalarTypeDefinition : Description? scalar Name Directives[Const]?
 */


function parseScalarTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.SCALAR_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectTypeDefinition :
 *   Description?
 *   type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition?
 */


function parseObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * ImplementsInterfaces :
 *   - implements `&`? NamedType
 *   - ImplementsInterfaces & NamedType
 */


function parseImplementsInterfaces(lexer) {
  var types = [];

  if (expectOptionalKeyword(lexer, 'implements')) {
    // Optional leading ampersand
    expectOptionalToken(lexer, _lexer.TokenKind.AMP);

    do {
      types.push(parseNamedType(lexer));
    } while (expectOptionalToken(lexer, _lexer.TokenKind.AMP) || // Legacy support for the SDL?
    lexer.options.allowLegacySDLImplementsInterfaces && peek(lexer, _lexer.TokenKind.NAME));
  }

  return types;
}
/**
 * FieldsDefinition : { FieldDefinition+ }
 */


function parseFieldsDefinition(lexer) {
  // Legacy support for the SDL?
  if (lexer.options.allowLegacySDLEmptyFields && peek(lexer, _lexer.TokenKind.BRACE_L) && lexer.lookahead().kind === _lexer.TokenKind.BRACE_R) {
    lexer.advance();
    lexer.advance();
    return [];
  }

  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseFieldDefinition, _lexer.TokenKind.BRACE_R) : [];
}
/**
 * FieldDefinition :
 *   - Description? Name ArgumentsDefinition? : Type Directives[Const]?
 */


function parseFieldDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectToken(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.FIELD_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    type: type,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ArgumentsDefinition : ( InputValueDefinition+ )
 */


function parseArgumentDefs(lexer) {
  if (!peek(lexer, _lexer.TokenKind.PAREN_L)) {
    return [];
  }

  return many(lexer, _lexer.TokenKind.PAREN_L, parseInputValueDef, _lexer.TokenKind.PAREN_R);
}
/**
 * InputValueDefinition :
 *   - Description? Name : Type DefaultValue? Directives[Const]?
 */


function parseInputValueDef(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  expectToken(lexer, _lexer.TokenKind.COLON);
  var type = parseTypeReference(lexer);
  var defaultValue;

  if (expectOptionalToken(lexer, _lexer.TokenKind.EQUALS)) {
    defaultValue = parseConstValue(lexer);
  }

  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.INPUT_VALUE_DEFINITION,
    description: description,
    name: name,
    type: type,
    defaultValue: defaultValue,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * InterfaceTypeDefinition :
 *   - Description? interface Name Directives[Const]? FieldsDefinition?
 */


function parseInterfaceTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.INTERFACE_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * UnionTypeDefinition :
 *   - Description? union Name Directives[Const]? UnionMemberTypes?
 */


function parseUnionTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);
  return {
    kind: _kinds.Kind.UNION_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}
/**
 * UnionMemberTypes :
 *   - = `|`? NamedType
 *   - UnionMemberTypes | NamedType
 */


function parseUnionMemberTypes(lexer) {
  var types = [];

  if (expectOptionalToken(lexer, _lexer.TokenKind.EQUALS)) {
    // Optional leading pipe
    expectOptionalToken(lexer, _lexer.TokenKind.PIPE);

    do {
      types.push(parseNamedType(lexer));
    } while (expectOptionalToken(lexer, _lexer.TokenKind.PIPE));
  }

  return types;
}
/**
 * EnumTypeDefinition :
 *   - Description? enum Name Directives[Const]? EnumValuesDefinition?
 */


function parseEnumTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);
  return {
    kind: _kinds.Kind.ENUM_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}
/**
 * EnumValuesDefinition : { EnumValueDefinition+ }
 */


function parseEnumValuesDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseEnumValueDefinition, _lexer.TokenKind.BRACE_R) : [];
}
/**
 * EnumValueDefinition : Description? EnumValue Directives[Const]?
 *
 * EnumValue : Name
 */


function parseEnumValueDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  return {
    kind: _kinds.Kind.ENUM_VALUE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * InputObjectTypeDefinition :
 *   - Description? input Name Directives[Const]? InputFieldsDefinition?
 */


function parseInputObjectTypeDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);
  return {
    kind: _kinds.Kind.INPUT_OBJECT_TYPE_DEFINITION,
    description: description,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * InputFieldsDefinition : { InputValueDefinition+ }
 */


function parseInputFieldsDefinition(lexer) {
  return peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseInputValueDef, _lexer.TokenKind.BRACE_R) : [];
}
/**
 * TypeSystemExtension :
 *   - SchemaExtension
 *   - TypeExtension
 *
 * TypeExtension :
 *   - ScalarTypeExtension
 *   - ObjectTypeExtension
 *   - InterfaceTypeExtension
 *   - UnionTypeExtension
 *   - EnumTypeExtension
 *   - InputObjectTypeDefinition
 */


function parseTypeSystemExtension(lexer) {
  var keywordToken = lexer.lookahead();

  if (keywordToken.kind === _lexer.TokenKind.NAME) {
    switch (keywordToken.value) {
      case 'schema':
        return parseSchemaExtension(lexer);

      case 'scalar':
        return parseScalarTypeExtension(lexer);

      case 'type':
        return parseObjectTypeExtension(lexer);

      case 'interface':
        return parseInterfaceTypeExtension(lexer);

      case 'union':
        return parseUnionTypeExtension(lexer);

      case 'enum':
        return parseEnumTypeExtension(lexer);

      case 'input':
        return parseInputObjectTypeExtension(lexer);
    }
  }

  throw unexpected(lexer, keywordToken);
}
/**
 * SchemaExtension :
 *  - extend schema Directives[Const]? { OperationTypeDefinition+ }
 *  - extend schema Directives[Const]
 */


function parseSchemaExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'schema');
  var directives = parseDirectives(lexer, true);
  var operationTypes = peek(lexer, _lexer.TokenKind.BRACE_L) ? many(lexer, _lexer.TokenKind.BRACE_L, parseOperationTypeDefinition, _lexer.TokenKind.BRACE_R) : [];

  if (directives.length === 0 && operationTypes.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds.Kind.SCHEMA_EXTENSION,
    directives: directives,
    operationTypes: operationTypes,
    loc: loc(lexer, start)
  };
}
/**
 * ScalarTypeExtension :
 *   - extend scalar Name Directives[Const]
 */


function parseScalarTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'scalar');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);

  if (directives.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds.Kind.SCALAR_TYPE_EXTENSION,
    name: name,
    directives: directives,
    loc: loc(lexer, start)
  };
}
/**
 * ObjectTypeExtension :
 *  - extend type Name ImplementsInterfaces? Directives[Const]? FieldsDefinition
 *  - extend type Name ImplementsInterfaces? Directives[Const]
 *  - extend type Name ImplementsInterfaces
 */


function parseObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'type');
  var name = parseName(lexer);
  var interfaces = parseImplementsInterfaces(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);

  if (interfaces.length === 0 && directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds.Kind.OBJECT_TYPE_EXTENSION,
    name: name,
    interfaces: interfaces,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * InterfaceTypeExtension :
 *   - extend interface Name Directives[Const]? FieldsDefinition
 *   - extend interface Name Directives[Const]
 */


function parseInterfaceTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'interface');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseFieldsDefinition(lexer);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds.Kind.INTERFACE_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * UnionTypeExtension :
 *   - extend union Name Directives[Const]? UnionMemberTypes
 *   - extend union Name Directives[Const]
 */


function parseUnionTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'union');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var types = parseUnionMemberTypes(lexer);

  if (directives.length === 0 && types.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds.Kind.UNION_TYPE_EXTENSION,
    name: name,
    directives: directives,
    types: types,
    loc: loc(lexer, start)
  };
}
/**
 * EnumTypeExtension :
 *   - extend enum Name Directives[Const]? EnumValuesDefinition
 *   - extend enum Name Directives[Const]
 */


function parseEnumTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'enum');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var values = parseEnumValuesDefinition(lexer);

  if (directives.length === 0 && values.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds.Kind.ENUM_TYPE_EXTENSION,
    name: name,
    directives: directives,
    values: values,
    loc: loc(lexer, start)
  };
}
/**
 * InputObjectTypeExtension :
 *   - extend input Name Directives[Const]? InputFieldsDefinition
 *   - extend input Name Directives[Const]
 */


function parseInputObjectTypeExtension(lexer) {
  var start = lexer.token;
  expectKeyword(lexer, 'extend');
  expectKeyword(lexer, 'input');
  var name = parseName(lexer);
  var directives = parseDirectives(lexer, true);
  var fields = parseInputFieldsDefinition(lexer);

  if (directives.length === 0 && fields.length === 0) {
    throw unexpected(lexer);
  }

  return {
    kind: _kinds.Kind.INPUT_OBJECT_TYPE_EXTENSION,
    name: name,
    directives: directives,
    fields: fields,
    loc: loc(lexer, start)
  };
}
/**
 * DirectiveDefinition :
 *   - Description? directive @ Name ArgumentsDefinition? on DirectiveLocations
 */


function parseDirectiveDefinition(lexer) {
  var start = lexer.token;
  var description = parseDescription(lexer);
  expectKeyword(lexer, 'directive');
  expectToken(lexer, _lexer.TokenKind.AT);
  var name = parseName(lexer);
  var args = parseArgumentDefs(lexer);
  expectKeyword(lexer, 'on');
  var locations = parseDirectiveLocations(lexer);
  return {
    kind: _kinds.Kind.DIRECTIVE_DEFINITION,
    description: description,
    name: name,
    arguments: args,
    locations: locations,
    loc: loc(lexer, start)
  };
}
/**
 * DirectiveLocations :
 *   - `|`? DirectiveLocation
 *   - DirectiveLocations | DirectiveLocation
 */


function parseDirectiveLocations(lexer) {
  // Optional leading pipe
  expectOptionalToken(lexer, _lexer.TokenKind.PIPE);
  var locations = [];

  do {
    locations.push(parseDirectiveLocation(lexer));
  } while (expectOptionalToken(lexer, _lexer.TokenKind.PIPE));

  return locations;
}
/*
 * DirectiveLocation :
 *   - ExecutableDirectiveLocation
 *   - TypeSystemDirectiveLocation
 *
 * ExecutableDirectiveLocation : one of
 *   `QUERY`
 *   `MUTATION`
 *   `SUBSCRIPTION`
 *   `FIELD`
 *   `FRAGMENT_DEFINITION`
 *   `FRAGMENT_SPREAD`
 *   `INLINE_FRAGMENT`
 *
 * TypeSystemDirectiveLocation : one of
 *   `SCHEMA`
 *   `SCALAR`
 *   `OBJECT`
 *   `FIELD_DEFINITION`
 *   `ARGUMENT_DEFINITION`
 *   `INTERFACE`
 *   `UNION`
 *   `ENUM`
 *   `ENUM_VALUE`
 *   `INPUT_OBJECT`
 *   `INPUT_FIELD_DEFINITION`
 */


function parseDirectiveLocation(lexer) {
  var start = lexer.token;
  var name = parseName(lexer);

  if (_directiveLocation.DirectiveLocation.hasOwnProperty(name.value)) {
    return name;
  }

  throw unexpected(lexer, start);
} // Core parsing utility functions

/**
 * Returns a location object, used to identify the place in
 * the source that created a given parsed object.
 */


function loc(lexer, startToken) {
  if (!lexer.options.noLocation) {
    return new Loc(startToken, lexer.lastToken, lexer.source);
  }
}

function Loc(startToken, endToken, source) {
  this.start = startToken.start;
  this.end = endToken.end;
  this.startToken = startToken;
  this.endToken = endToken;
  this.source = source;
} // Print a simplified form when appearing in JSON/util.inspect.


(0, _defineToJSON.default)(Loc, function () {
  return {
    start: this.start,
    end: this.end
  };
});
/**
 * Determines if the next token is of a given kind
 */

function peek(lexer, kind) {
  return lexer.token.kind === kind;
}
/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */


function expectToken(lexer, kind) {
  var token = lexer.token;

  if (token.kind === kind) {
    lexer.advance();
    return token;
  }

  throw (0, _error.syntaxError)(lexer.source, token.start, "Expected ".concat(kind, ", found ").concat((0, _lexer.getTokenDesc)(token)));
}
/**
 * If the next token is of the given kind, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and return undefined.
 */


function expectOptionalToken(lexer, kind) {
  var token = lexer.token;

  if (token.kind === kind) {
    lexer.advance();
    return token;
  }

  return undefined;
}
/**
 * If the next token is a given keyword, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and throw an error.
 */


function expectKeyword(lexer, value) {
  var token = lexer.token;

  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }

  throw (0, _error.syntaxError)(lexer.source, token.start, "Expected \"".concat(value, "\", found ").concat((0, _lexer.getTokenDesc)(token)));
}
/**
 * If the next token is a given keyword, return that token after advancing
 * the lexer. Otherwise, do not change the parser state and return undefined.
 */


function expectOptionalKeyword(lexer, value) {
  var token = lexer.token;

  if (token.kind === _lexer.TokenKind.NAME && token.value === value) {
    lexer.advance();
    return token;
  }

  return undefined;
}
/**
 * Helper function for creating an error when an unexpected lexed token
 * is encountered.
 */


function unexpected(lexer, atToken) {
  var token = atToken || lexer.token;
  return (0, _error.syntaxError)(lexer.source, token.start, "Unexpected ".concat((0, _lexer.getTokenDesc)(token)));
}
/**
 * Returns a possibly empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function any(lexer, openKind, parseFn, closeKind) {
  expectToken(lexer, openKind);
  var nodes = [];

  while (!expectOptionalToken(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }

  return nodes;
}
/**
 * Returns a non-empty list of parse nodes, determined by
 * the parseFn. This list begins with a lex token of openKind
 * and ends with a lex token of closeKind. Advances the parser
 * to the next lex token after the closing token.
 */


function many(lexer, openKind, parseFn, closeKind) {
  expectToken(lexer, openKind);
  var nodes = [parseFn(lexer)];

  while (!expectOptionalToken(lexer, closeKind)) {
    nodes.push(parseFn(lexer));
  }

  return nodes;
}
},{"../error":6,"../jsutils/defineToJSON":10,"../jsutils/inspect":12,"./directiveLocation":16,"./kinds":17,"./lexer":18,"./source":21}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Source = void 0;

var _invariant = _interopRequireDefault(require("../jsutils/invariant"));

var _defineToStringTag = _interopRequireDefault(require("../jsutils/defineToStringTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/**
 * A representation of source input to GraphQL.
 * `name` and `locationOffset` are optional. They are useful for clients who
 * store GraphQL documents in source files; for example, if the GraphQL input
 * starts at line 40 in a file named Foo.graphql, it might be useful for name to
 * be "Foo.graphql" and location to be `{ line: 40, column: 0 }`.
 * line and column in locationOffset are 1-indexed
 */
var Source = function Source(body, name, locationOffset) {
  this.body = body;
  this.name = name || 'GraphQL request';
  this.locationOffset = locationOffset || {
    line: 1,
    column: 1
  };
  !(this.locationOffset.line > 0) ? (0, _invariant.default)(0, 'line in locationOffset is 1-indexed and must be positive') : void 0;
  !(this.locationOffset.column > 0) ? (0, _invariant.default)(0, 'column in locationOffset is 1-indexed and must be positive') : void 0;
}; // Conditionally apply `[Symbol.toStringTag]` if `Symbol`s are supported


exports.Source = Source;
(0, _defineToStringTag.default)(Source);
},{"../jsutils/defineToStringTag":11,"../jsutils/invariant":13}]},{},[1]);
