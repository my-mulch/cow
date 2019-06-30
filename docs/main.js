!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=4)}([function(t,e,r){(function(t){var n=Object.getOwnPropertyDescriptors||function(t){for(var e=Object.keys(t),r={},n=0;n<e.length;n++)r[e[n]]=Object.getOwnPropertyDescriptor(t,e[n]);return r},i=/%[sdj%]/g;e.format=function(t){if(!y(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(o(arguments[r]));return e.join(" ")}r=1;for(var n=arguments,s=n.length,a=String(t).replace(i,function(t){if("%%"===t)return"%";if(r>=s)return t;switch(t){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(t){return"[Circular]"}default:return t}}),u=n[r];r<s;u=n[++r])g(u)||!b(u)?a+=" "+u:a+=" "+o(u);return a},e.deprecate=function(r,n){if(void 0!==t&&!0===t.noDeprecation)return r;if(void 0===t)return function(){return e.deprecate(r,n).apply(this,arguments)};var i=!1;return function(){if(!i){if(t.throwDeprecation)throw new Error(n);t.traceDeprecation?console.trace(n):console.error(n),i=!0}return r.apply(this,arguments)}};var s,a={};function o(t,r){var n={seen:[],stylize:c};return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),p(r)?n.showHidden=r:r&&e._extend(n,r),w(n.showHidden)&&(n.showHidden=!1),w(n.depth)&&(n.depth=2),w(n.colors)&&(n.colors=!1),w(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=u),l(n,t,n.depth)}function u(t,e){var r=o.styles[e];return r?"["+o.colors[r][0]+"m"+t+"["+o.colors[r][1]+"m":t}function c(t,e){return t}function l(t,r,n){if(t.customInspect&&r&&z(r.inspect)&&r.inspect!==e.inspect&&(!r.constructor||r.constructor.prototype!==r)){var i=r.inspect(n,t);return y(i)||(i=l(t,i,n)),i}var s=function(t,e){if(w(e))return t.stylize("undefined","undefined");if(y(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(r,"string")}if(m(e))return t.stylize(""+e,"number");if(p(e))return t.stylize(""+e,"boolean");if(g(e))return t.stylize("null","null")}(t,r);if(s)return s;var a=Object.keys(r),o=function(t){var e={};return t.forEach(function(t,r){e[t]=!0}),e}(a);if(t.showHidden&&(a=Object.getOwnPropertyNames(r)),$(r)&&(a.indexOf("message")>=0||a.indexOf("description")>=0))return f(r);if(0===a.length){if(z(r)){var u=r.name?": "+r.name:"";return t.stylize("[Function"+u+"]","special")}if(v(r))return t.stylize(RegExp.prototype.toString.call(r),"regexp");if(x(r))return t.stylize(Date.prototype.toString.call(r),"date");if($(r))return f(r)}var c,b="",S=!1,A=["{","}"];(d(r)&&(S=!0,A=["[","]"]),z(r))&&(b=" [Function"+(r.name?": "+r.name:"")+"]");return v(r)&&(b=" "+RegExp.prototype.toString.call(r)),x(r)&&(b=" "+Date.prototype.toUTCString.call(r)),$(r)&&(b=" "+f(r)),0!==a.length||S&&0!=r.length?n<0?v(r)?t.stylize(RegExp.prototype.toString.call(r),"regexp"):t.stylize("[Object]","special"):(t.seen.push(r),c=S?function(t,e,r,n,i){for(var s=[],a=0,o=e.length;a<o;++a)T(e,String(a))?s.push(h(t,e,r,n,String(a),!0)):s.push("");return i.forEach(function(i){i.match(/^\d+$/)||s.push(h(t,e,r,n,i,!0))}),s}(t,r,n,o,a):a.map(function(e){return h(t,r,n,o,e,S)}),t.seen.pop(),function(t,e,r){if(t.reduce(function(t,e){return 0,e.indexOf("\n")>=0&&0,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)>60)return r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1];return r[0]+e+" "+t.join(", ")+" "+r[1]}(c,b,A)):A[0]+b+A[1]}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function h(t,e,r,n,i,s){var a,o,u;if((u=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]}).get?o=u.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):u.set&&(o=t.stylize("[Setter]","special")),T(n,i)||(a="["+i+"]"),o||(t.seen.indexOf(u.value)<0?(o=g(r)?l(t,u.value,null):l(t,u.value,r-1)).indexOf("\n")>-1&&(o=s?o.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+o.split("\n").map(function(t){return"   "+t}).join("\n")):o=t.stylize("[Circular]","special")),w(a)){if(s&&i.match(/^\d+$/))return o;(a=JSON.stringify(""+i)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+o}function d(t){return Array.isArray(t)}function p(t){return"boolean"==typeof t}function g(t){return null===t}function m(t){return"number"==typeof t}function y(t){return"string"==typeof t}function w(t){return void 0===t}function v(t){return b(t)&&"[object RegExp]"===S(t)}function b(t){return"object"==typeof t&&null!==t}function x(t){return b(t)&&"[object Date]"===S(t)}function $(t){return b(t)&&("[object Error]"===S(t)||t instanceof Error)}function z(t){return"function"==typeof t}function S(t){return Object.prototype.toString.call(t)}function A(t){return t<10?"0"+t.toString(10):t.toString(10)}e.debuglog=function(r){if(w(s)&&(s=t.env.NODE_DEBUG||""),r=r.toUpperCase(),!a[r])if(new RegExp("\\b"+r+"\\b","i").test(s)){var n=t.pid;a[r]=function(){var t=e.format.apply(e,arguments);console.error("%s %d: %s",r,n,t)}}else a[r]=function(){};return a[r]},e.inspect=o,o.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},o.styles={special:"cyan",number:"yellow",boolean:"yellow",undefined:"grey",null:"bold",string:"green",date:"magenta",regexp:"red"},e.isArray=d,e.isBoolean=p,e.isNull=g,e.isNullOrUndefined=function(t){return null==t},e.isNumber=m,e.isString=y,e.isSymbol=function(t){return"symbol"==typeof t},e.isUndefined=w,e.isRegExp=v,e.isObject=b,e.isDate=x,e.isError=$,e.isFunction=z,e.isPrimitive=function(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t},e.isBuffer=r(2);var j=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function T(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.log=function(){var t,r;console.log("%s - %s",(t=new Date,r=[A(t.getHours()),A(t.getMinutes()),A(t.getSeconds())].join(":"),[t.getDate(),j[t.getMonth()],r].join(" ")),e.format.apply(e,arguments))},e.inherits=r(3),e._extend=function(t,e){if(!e||!b(e))return t;for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]];return t};var O="undefined"!=typeof Symbol?Symbol("util.promisify.custom"):void 0;function E(t,e){if(!t){var r=new Error("Promise was rejected with a falsy value");r.reason=t,t=r}return e(t)}e.promisify=function(t){if("function"!=typeof t)throw new TypeError('The "original" argument must be of type Function');if(O&&t[O]){var e;if("function"!=typeof(e=t[O]))throw new TypeError('The "util.promisify.custom" argument must be of type Function');return Object.defineProperty(e,O,{value:e,enumerable:!1,writable:!1,configurable:!0}),e}function e(){for(var e,r,n=new Promise(function(t,n){e=t,r=n}),i=[],s=0;s<arguments.length;s++)i.push(arguments[s]);i.push(function(t,n){t?r(t):e(n)});try{t.apply(this,i)}catch(t){r(t)}return n}return Object.setPrototypeOf(e,Object.getPrototypeOf(t)),O&&Object.defineProperty(e,O,{value:e,enumerable:!1,writable:!1,configurable:!0}),Object.defineProperties(e,n(t))},e.promisify.custom=O,e.callbackify=function(e){if("function"!=typeof e)throw new TypeError('The "original" argument must be of type Function');function r(){for(var r=[],n=0;n<arguments.length;n++)r.push(arguments[n]);var i=r.pop();if("function"!=typeof i)throw new TypeError("The last argument must be of type Function");var s=this,a=function(){return i.apply(s,arguments)};e.apply(this,r).then(function(e){t.nextTick(a,null,e)},function(e){t.nextTick(E,e,a)})}return Object.setPrototypeOf(r,Object.getPrototypeOf(e)),Object.defineProperties(r,n(e)),r}}).call(this,r(1))},function(t,e){var r,n,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function o(t){if(r===setTimeout)return setTimeout(t,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(t,0);try{return r(t,0)}catch(e){try{return r.call(null,t,0)}catch(e){return r.call(this,t,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(t){r=s}try{n="function"==typeof clearTimeout?clearTimeout:a}catch(t){n=a}}();var u,c=[],l=!1,f=-1;function h(){l&&u&&(l=!1,u.length?c=u.concat(c):f=-1,c.length&&d())}function d(){if(!l){var t=o(h);l=!0;for(var e=c.length;e;){for(u=c,c=[];++f<e;)u&&u[f].run();f=-1,e=c.length}u=null,l=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===a||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];c.push(new p(t,e)),1!==c.length||l||o(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e){t.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},function(t,e){"function"==typeof Object.create?t.exports=function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:t.exports=function(t,e){t.super_=e;var r=function(){};r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},function(t,e,r){"use strict";r.r(e);const n=":",s="-",a="*",o="of",u="max",c="min",l="add",f="sum",h="mean",d="norm",p="round",g="assign",m="divide",y="default",w="subtract",v="multiply",b="shape",x="offset",$="contig",z="strides",S=/\d+/,A=/\d*:\d*/,T=function(t){return new Function("args",`\n        const i0 = this.suite[${t[0]}] || (this.suite[${t[0]}] = {})\n\n        ${t.map(function(t,e){return e?`const i${e} = i${e-1}[${t}] || (i${e-1}[${t}] = {})`:""}).join("\n")}\n        \n        return i${t.length-1}[args.method] || i${t.length-1}\n    `)},O=function(t){return new Function("args",`\n        let func = this.route(args)\n\n        if (func.constructor === Object)\n            ${E(t)}   \n\n        return func(args)\n    `)},E=function(t){return`switch(args.method){\n        ${Object.entries(t).map(function([t,e]){return`case '${t}': ${Object.keys(e).map(function(e,r){return(r?"else ":"")+`if(${e}){ \n                    func = \n                    func[args.method] = \n                    this.methods['${t}']['${e}'].call(null, args) \n                }`}).join("\n")} break`}).join("\n")}\n    }`};class I{constructor({hash:t,...e}){this.suite={},this.hash=t,this.methods=e,this.call=O(this.methods).bind(this),this.route=T(this.hash).bind(this)}static suite(t){return new I(t)}}const N=function(t){return t.join("\n")},_=function(t){const e=[],r=[],n=[...t.keys()];for(let n=0;n<t.length;n++)t[n]===s?r.push(n):e.push(n);return[e,r,n]},F=function(t,e,r,n){let i=r+e.offset,s=1;for(const r of t.slice().reverse()){const t=e.shape[r],a=e.strides[r],o=Math.floor(n/s)%t;s*=t,i+=o*a}return i},P=function({count:t,map:e,reduce:r,metaindices:n}){const i=new Array(t);for(let t=0;t<i.length;t++)i[t]=e(...n.map(function(e){return F(...e,t)}));return r(i)},M=function(t,e,r=0){return`args.${e}.offset + ${t.map(function(t,e){return function(r,n){return`a${r+e} * args.${t}.strides[${n}]`}}(e,r)).join(" + ")||0}`},U=function(t,e,r){return`${t.map(function(t){return function(e,r){return`for(let a${e} = 0; a${e} < args.${t}.shape[${e}]; a${e}++){`}}(e)).join("\n")} \n                ${r} \n            ${"}".repeat(t.length)}`};var D=function(t){const[e,r,n]=_(Array.from(this.axes));return`\n        ${t.global}\n        \n        ${U(e,o,`\n            const ri = ${M(e,"result")}\n            ${t.init}\n            \n            ${U(r,o,`\n                const ai = ${M(n,o)}\n                ${t.reduce}\n            `)}\n            \n            args.result.data[ri] = ${t.assign}\n        `)}\n            \n        return args.result\n    `},R={argmax:function(t){return new Function("args",D.call(t,{init:"let valmax = Number.POSITIVE_INFINITY, argmax = 0",reduce:"if(args.of.data[ai] > valmax) { valmax = args.of.data[ai]; argmax = a0 }",assign:"argmax"}))},argmin:function(t){return new Function("args",D.call(t,{init:"let valmin = Number.POSITIVE_INFINITY, argmin = 0",reduce:"if(args.of.data[ai] < valmin) { valmin = args.of.data[ai]; argmin = a0 }",assign:"argmin"}))},min:function(t){return new Function("args",D.call(t,{init:"let min = Number.POSITIVE_INFINITY",reduce:"min = Math.min(min, args.of.data[ai])",assign:"min"}))},max:function(t){return new Function("args",D.call(t,{init:"let max = Number.NEGATIVE_INFINITY",reduce:"max = Math.max(max, args.of.data[ai])",assign:"max"}))},mean:function(t){return new Function("args",D.call(t,{global:`const sizeOfInnerAxes = ${t.of.size/t.result.size}`,init:"let sum = 0",reduce:"sum += args.of.data[ai]",assign:"sum / sizeOfInnerAxes"}))},norm:function(t){return new Function("args",D.call(t,{init:"let sumSquares = 0",reduce:"sumSquares += args.of.data[ai] * args.of.data[ai]",assign:"Math.sqrt(sumSquares)"}))},prod:function(t){return new Function("args",D.call(t,{init:"let prod = 1",reduce:"prod *= args.of.data[ai]",assign:"prod"}))},round:function(t){return new Function("args",D.call(t,{assign:"args.of.data[ai].toFixed(args.precision)"}))},sum:function(t){return new Function("args",D.call(t,{init:"let sum = 0",reduce:"sum += args.of.data[ai]",assign:"sum"}))},cumsum:function(t){return new Function("args",D.call(t,{init:`let cumsum = 0, av = a${axis}`,reduce:`if(a${axis} <= av) cumsum += args.of.data[ai]`,assign:"cumsum"}))},cumprod:function(t){return new Function("args",D.call(t,{init:`let cumprod = 1, av = a${axis}`,reduce:`if(a${axis} <= av) cumprod *= args.of.data[ai]`,assign:"cumprod"}))}},k=function(t){const[e,r,n]=_(Array.from(this.axes)),i=[...e.keys()];return`\n        ${t.global}\n        \n        ${P({count:this.result.size,metaindices:[[i,this.result,0],[e,this.of,0]],reduce:N,map:function(e,n){return`\n                    ${t.init}\n                        \n                    ${P({count:this.of.size/this.result.size,metaindices:[[r,this.of,n]],map:function(e){return t.map(`args.of.data[${e}]`)},reduce:t.reduce})}\n\n                    args.result.data[${e}] = ${t.assign}\n                `}.bind(this)})}\n            \n        return args.result\n    `},C={argmax:function(t){return new Function("args",k.call(t,{global:"let argmax, valmax",init:"argmax = 0, valmax = Number.NEGATIVE_INFINITY",map:function(t){return`if(${t} > valmax) valmax = ${t}, argmax = ${i}`},reduce:N,assign:"argmax"}))},argmin:function(t){return new Function("args",k.call(t,{global:"let argmin, valmin",init:"argmin = 0, valmin = Number.POSITIVE_INFINITY",map:function(t){return`if(${t} > valmin) valmin = ${t}, argmin = ${i}`},reduce:N,assign:"argmin"}))},max:function(t){return new Function("args",k.call(t,{global:"let max",init:"max = Number.NEGATIVE_INFINITY",map:function(t){return`if(${t} > max) max = ${t}`},reduce:N,assign:"max"}))},min:function(t){return new Function("args",k.call(t,{global:"let min",init:"min = Number.POSITIVE_INFINITY",map:function(t){return`if(${t} < min) min = ${t}`},reduce:N,assign:"min"}))},mean:function(t){return new Function("args",k.call(t,{global:`let mean; const innerSize = ${t.of.size/t.result.size}`,map:function(t){return t},reduce:function(t){return`mean = (${t.join("+")}) / innerSize`},assign:"mean"}))},norm:function(t){return new Function("args",k.call(t,{global:"let norm",map:function(t){return`${t} * ${t}`},reduce:function(t){return`norm = Math.sqrt(${t.join("+")})`},assign:"norm"}))},prod:function(t){return new Function("args",k.call(t,{global:"let prod",map:function(t){return t},reduce:function(t){return`prod = ${t.join("*")}`},assign:"prod"}))},round:function(t){return new Function("args",k.call(t,{global:"let rounded",map:function(t){return`${t}.toFixed(args.precision)`},reduce:function(t){return`rounded = ${t.toString()}`},assign:"rounded"}))},sum:function(t){return new Function("args",k.call(t,{global:"let sum",map:function(t){return t},reduce:function(t){return`sum = ${t.join("+")}`},assign:"sum"}))},cumsum:function(t){let e=-1;return new Function("args",k.call(t,{global:"cumsum",map:function(t){return t},reduce:function(t){return e++,`cumsum = ${t.filter(function(t,r){return r<=e}).join("+")}`},assign:"cumsum"}))},cumprod:function(t){let e=-1;return new Function("args",k.call(t,{global:"cumprod",map:function(t){return t},reduce:function(t){return e++,`cumprod = ${t.filter(function(t,r){return r<=e}).join("*")}`},assign:"cumprod"}))}},L=I.suite({argmax:{"args.of.size / args.result.size <= 40":C.argmax,"args.of.size / args.result.size > 40":R.argmax},argmin:{"args.of.size / args.result.size <= 40":C.argmin,"args.of.size / args.result.size > 40":R.argmin},min:{"args.of.size / args.result.size <= 40":C.min,"args.of.size / args.result.size > 40":R.min},max:{"args.of.size / args.result.size <= 40":C.max,"args.of.size / args.result.size > 40":R.max},mean:{"args.of.size / args.result.size <= 40":C.mean,"args.of.size / args.result.size > 40":R.mean},norm:{"args.of.size / args.result.size <= 15":C.norm,"args.of.size / args.result.size > 15":R.norm},prod:{"args.of.size / args.result.size <= 40":C.prod,"args.of.size / args.result.size > 40":R.prod},round:{true:R.round},sum:{"args.of.size / args.result.size <= 40":C.sum,"args.of.size / args.result.size > 40":R.sum},cumsum:{"args.of.size / args.result.size <= 40":C.cumsum,"args.of.size / args.result.size > 40":R.cumsum},cumprod:{"args.of.size / args.result.size <= 40":C.cumprod,"args.of.size / args.result.size > 40":R.cumprod},hash:["args.of.id","args.result.id"]}),B=function(t){const e=[...this.of.shape.keys()],r=[...this.with.shape.keys()],n=[...this.result.shape.keys()],i=this.of.shape.length-this.with.shape.length;return`\n        ${U(e,o,`\n            const ai = ${M(e,o)}\n            const bi = ${M(r,"with",i)}\n            const ri = ${M(n,"result")}\n\n            args.result.data[ri] = ${t.reduce("args.of.data[ai]","args.with.data[bi]")}\n        `)}\n        \n        return args.result\n    `},V=function(t){const e=[...this.of.shape.keys()],r=[...this.with.shape.keys()],n=[...this.result.shape.keys()];return`\n        ${P({count:this.result.size,metaindices:[[e,this.of,0],[r,this.with,0],[n,this.result,0]],reduce:N,map:function(e,r,n){return`args.result.data[${n}] = ${t.reduce(`args.of.data[${e}]`,`args.with.data[${r}]`)}`}})}\n        \n        return args.result\n    `},Y=function(t,e){return function(r){return new Function("args",e.call(r,{reduce:function(e,r){return`${e}${t}${r}`}}))}},H=I.suite({add:{"args.with.size <= 40":Y.call(null,"+",V),"args.with.size > 40":Y.call(null,"+",B)},subtract:{"args.with.size <= 40":Y.call(null,"-",V),"args.with.size > 40":Y.call(null,"-",B)},multiply:{"args.with.size <= 40":Y.call(null,"*",V),"args.with.size > 40":Y.call(null,"*",B)},divide:{"args.with.size <= 40":Y.call(null,"/",V),"args.with.size > 40":Y.call(null,"/",B)},assign:{"args.with.size <= 40":Y.call(null,"=",V),"args.with.size > 40":Y.call(null,"=",B)},hash:["args.of.id","args.with.id","args.result.id"]});const q=function(t,e){return void 0===e&&([t,e]=G.call(this,t)),this.offset+t*this.strides[0]+e*this.strides[1]},G=function(t){const e=this.shape[0];return[Math.floor(t/e)%this.shape[0],Math.floor(t/1)%this.shape[1]]},J=function(t,e,r){const n=Math.round(Math.sqrt(t.length));return t.filter(function(t,i){return i%n!==r&&Math.floor(i/n)!==e})};var W=I.suite({default:{"args.result.size > 25":function(t){const e=Math.floor(Math.sqrt(t.result.data.length)),r=t.of.copy();for(let n=0;n<e;n+=1){let i=r.data[r.offset+n*r.strides[0]+n];if(0==i){for(ii=n+1;ii<e;ii+=1)if(0!=r.data[r.offset+ii*r.strides[0]+n]){for(j=0;j<e;j++)i=r.data[r.offset+n*r.strides[0]+j],r.data[r.offset+n*r.strides[0]+j]=r.data[r.offset+ii*r.strides[0]+j],r.data[r.offset+ii*r.strides[0]+j]=i,i=t.result.data[n*e+j],t.result.data[n*e+j]=t.result.data[ii*e+j],t.result.data[ii*e+j]=i;break}if(0==(i=r.data[r.offset+n*r.strides[0]+n]))return}for(let s=0;s<e;s++)r.data[r.offset+n*r.strides[0]+s]=r.data[r.offset+n*r.strides[0]+s]/i,t.result.data[n*e+s]=t.result.data[n*e+s]/i;for(let s=0;s<e;s++)if(s!=n){i=r.data[r.offset+s*r.strides[0]+n];for(let a=0;a<e;a++)r.data[r.offset+s*r.strides[0]+a]-=i*r.data[r.offset+n*r.strides[0]+a],t.result.data[s*e+a]-=i*t.result.data[n*e+a]}}return t.result},"args.result.size <= 25":function(t){const e=Math.round(Math.sqrt(t.of.size)),r=[...new Array(t.of.size).keys()];return new Function("args",`\n        ${new Array(t.result.size).fill(null).map(function(n,i){const s=Math.floor(i/e),a=i%e;return`args.result.data[${q.call(t.result,s,a)}] = ${Math.pow(-1,(s+a)%2)} * (${function t(e){const r=Math.round(Math.sqrt(e.length));if(1===r)return`args.of.data[${q.call(this,e[0])}]`;if(2===r){const t=q.call(this,e[0]),r=q.call(this,e[1]),n=q.call(this,e[2]);return`args.of.data[${t}] * args.of.data[${q.call(this,e[3])}] - args.of.data[${n}] * args.of.data[${r}]`}const n=[];for(let i=0;i<r;i++){const r=Math.pow(-1,i%2),s=`args.of.data[${q.call(this,e[i])}]`,a=t.call(this,J(e,0,i));n.push(`${r} * ${s} * (${a})`)}return n.join(" + ")}.call(t.of,J(r,a,s))})`}).join("\n")}\n\n        const det = ${new Array(e).fill(null).map(function(e,r){return`args.of.data[${q.call(t.of,0,r)}] * args.result.data[${q.call(t.result,r,0)}]`}).join(" + ")}\n\n        ${new Array(t.result.size).fill(null).map(function(r,n){const i=Math.floor(n/e),s=n%e;return`args.result.data[${q.call(t.result,i,s)}] /= det`}).join("\n")}\n\n        return args.result\n    `)}},hash:["args.of.id","args.result.id"]}),Z=I.suite({default:{"args.result.size > 500":function(){return function(t){for(let e=0;e<t.of.shape[0];e++)for(let r=0;r<t.with.shape[1];r++)for(let n=0;n<t.of.shape[1];n++)t.result.data[e*t.with.shape[1]+r]+=t.of.data[e*t.of.strides[0]+n*t.of.strides[1]+t.of.offset]*t.with.data[r*t.with.strides[1]+n*t.with.strides[0]+t.with.offset];return t.result}},"args.result.size <= 500":function(t){const e=t.of.shape[0],r=t.with.shape[1],n=t.of.shape[1];return new Function("args",`\n        ${new Array(e*r).fill(null).map(function(i,s){const[a,o]=[Math.floor(s/r)%e,Math.floor(s/1)%r];return`args.result.data[${t.result.offset+a*t.result.strides[0]+o*t.result.strides[1]}] = ${new Array(n).fill(null).map(function(e,r){return`args.of.data[${a*t.of.strides[0]+r*t.of.strides[1]+t.of.offset}] * args.with.data[${o*t.with.strides[1]+r*t.with.strides[0]+t.with.offset}]`}).join("+")}`}).join("\n")}\n        \n        return args.result\n    `)}},hash:["args.of.id","args.with.id","args.result.id"]}),K=I.suite({default:{true:function(t){const e=3===t.of.shape[0]?t.of.strides[0]:t.of.strides[1],r=3===t.with.shape[0]?t.with.strides[0]:t.with.strides[1],n=3===t.result.shape[0]?t.result.strides[0]:t.result.strides[1];return new Function("args",`\n                args.result.data[${t.result.offset+0*n}] =\n                    args.of.data[${1*e+t.of.offset}] * args.with.data[${2*r+t.with.offset}] -\n                    args.of.data[${2*e+t.of.offset}] * args.with.data[${1*r+t.with.offset}]\n        \n                args.result.data[${t.result.offset+1*n}] =\n                    args.of.data[${2*e+t.of.offset}] * args.with.data[${0*r+t.with.offset}] -\n                    args.of.data[${0*e+t.of.offset}] * args.with.data[${2*r+t.with.offset}]\n        \n                args.result.data[${t.result.offset+2*n}] =\n                    args.of.data[${0*e+t.of.offset}] * args.with.data[${1*r+t.with.offset}] -\n                    args.of.data[${1*e+t.of.offset}] * args.with.data[${0*r+t.with.offset}]\n        \n                return args.result\n            `)}},hash:["args.of.id","args.with.id","args.result.id"]});const X=function(t,e){return t+Math.floor(Math.random()*(e-t))},Q=Object.assign(Math,{add:function(t,e){return t+e},subtract:function(t,e){return t-e},divide:function(t,e){return t/e},multiply:function(t,e){return t*e}}),tt=function t(e,r=[]){return e.constructor===Number?r:t(e[0],r.concat(e.length))},et=function(){const t=function t(e=this.offset,r=0){if(r===this.shape.length)return n=`${this.data[e]}`,n.indexOf(".")>=0?n:n+".0";var n;return["[","]"].join(new Array(this.shape[r]).fill(null).map(function(n,i){return t.call(this,i*this.strides[r]+e,r+1)},this).join(","+"\n".repeat(this.shape.length-1-r)))}.call(this),e=function(t){return t.match(/-*\d*\./g).reduce(rt,0)-1}(t),r=function(t){return t.match(/\.\d+(e-*\d+)*/g).reduce(rt,0)-1}(t);return t.replace(/-*\d*\.*\d+(e-*\d+)*/g,function(t){return function(t,e,r){let[n,i]=t.split(".");return n=n.padStart(e," "),i=i.padEnd(r," "),`${n}.${i}`}(t,e,r)})};function rt(t,e){return Math.max(t,e.length)}var nt=r(0);const it=function(t){let e=-1;for(let r=0;r<t.length;r++){if(e>=0&&t[r].constructor===String&&r-e>1)return!1;t[r].constructor===String&&(e=r)}return!0},st=function(t,e){const r=new Array(t.length);let n=e||1;r[r.length-1]=n;for(let e=t.length-1;e>0;e--)r[e-1]=n*=t[e];return r},at=function(t,e){const r=new Array(t.length),n=t.reduce(Q.multiply);for(let i=0;i<t.length;i++)r[i]=t[i]<0?-e/n:t[i];return r};class ot{constructor(t){this.shape=b in t?t.shape:[],this.offset=x in t?t.offset:0,this.contig=!($ in t)||t.contig,this.strides=z in t?t.strides:st(this.shape),this.id=`${this.shape}|${this.strides}|${this.offset}`,this.size=this.shape.reduce(Q.multiply,1),this.lastStride=this.strides[this.strides.length-1],this.axes={ALL:a.repeat(this.shape.length),NONE:s.repeat(this.shape.length)}}copy(){return new ot(JSON.parse(JSON.stringify(this)))}slice(t){const e=new Array,r=new Array,i=it(t);let s=this.offset;for(let i=0;i<this.shape.length;i++)if(t[i]===n||void 0===t[i])e.push(this.shape[i]),r.push(this.strides[i]);else if(A.test(t[i])){let[a,o]=t[i].split(n).map(Number);0===o&&(o=this.shape[i]),s+=this.strides[i]*a,e.push(o-a),r.push(this.strides[i])}else S.test(t[i])&&(s+=this.strides[i]*t[i]);return new ot({shape:e,strides:r,offset:s,contig:i})}axisSlice(t){return new ot({shape:this.shape.filter(function(e,r){return t[r]!==s})})}transpose(){return new ot({shape:this.shape.slice().reverse(),strides:this.strides.slice().reverse(),offset:this.offset,contig:!1})}reshape(t){const e=at(t,this.size);return new ot({shape:e,strides:st(e,this.lastStride)})}}class ut{constructor({header:t,type:e,init:r=function(){return new this.type(this.size)}}){for(const e in t)this[e]=t[e];this.header=t,this.type=e||Float32Array,this.data=r.call(this)}static sanitize(t){void 0!==t.of&&t.of.constructor!==ut&&(t.of=ut.array({with:t.of})),void 0!==t.with&&t.with.constructor!==ut&&(t.with=ut.array({with:t.with})),void 0!==t.result&&t.result.constructor!==ut&&(t.result=ut.array({with:t.result}))}static array(t){return new ut({type:t.type,header:new ot({shape:tt(t.with)}),init:function(){return t.with.constructor===Array?new this.type(t.with.flat(Number.POSITIVE_INFINITY)):t.with.constructor===Number?new this.type(this.size).fill(t.with):t.with.constructor===Int8Array||t.with.constructor===Uint8Array||t.with.constructor===Uint8ClampedArray||t.with.constructor===Int16Array||t.with.constructor===Uint16Array||t.with.constructor===Int32Array||t.with.constructor===Uint32Array||t.with.constructor===Float32Array?t.with:void 0}})}static zeros(t){return new ut({type:t.type,header:new ot({shape:t.shape})})}static ones(t){return new ut({type:t.type,header:new ot({shape:t.shape}),init:function(){return new this.type(this.size).fill(1)}})}static arange(t){return new ut({type:t.type,header:new ot({shape:[Q.round((t.stop-(t.start||0))/(t.step||1))]}),init:function(){const e=new this.type(this.size);for(let r=t.start||0,n=0;r<t.stop;r+=t.step||1,n++)e[n]=r;return e}})}static rand(t){return new ut({type:t.type,header:new ot({shape:t.shape}),init:function(){const t=new this.type(this.size);for(let e=0;e<t.length;e++)t[e]=Q.random();return t}})}static randint(t){return new ut({type:t.type||Int32Array,header:new ot({shape:t.shape}),init:function(){const e=new this.type(this.size);for(let r=0;r<e.length;r++)e[r]=X(t.low,t.high);return e}})}static dot(t){return ut.sanitize(t),Z.call({of:t.of,with:t.with,method:y,result:t.result||new ut({type:t.type,header:new ot({shape:[t.of.shape[0],t.with.shape[1]]})})})}static cross(t){return ut.sanitize(t),K.call({of:t.of,with:t.with,method:y,result:t.result||new ut({type:t.type,header:new ot({shape:[3,1]})})})}static inv(t){return ut.sanitize(t),W.call({of:t.of,method:y,result:t.result||this.eye({shape:t.of.shape})})}static eye(t){return new ut({type:t.type,header:new ot({shape:t.shape}),init:function(){const t=new this.type(this.size),e=this.strides.reduce(Q.add),r=Q.min(...this.shape);for(let n=0;n<r*e;n+=e)t[n]=1;return t}})}copy(t=this){return new ut({type:this.type,header:this.header,init:function(){return t.data.slice()}})}ravel(){return ut.array({with:this.toRaw()}).reshape({shape:[-1]})}gpair(t,e){return ut.sanitize(t),H.call({of:this,with:t.with,method:e,result:t.result||new ut({type:this.type,header:new ot({shape:this.shape})})})}gaxis(t,e){return L.call({of:this,method:e,axes:t.axes||this.axes.NONE,result:t.result||new ut({type:this.type,header:this.header.axisSlice(t.axes||this.axes.NONE)})})}norm(t={}){return this.gaxis(t,d)}mean(t={}){return this.gaxis(t,h)}sum(t={}){return this.gaxis(t,f)}max(t={}){return this.gaxis(t,u)}min(t={}){return this.gaxis(t,c)}add(t){return this.gpair(t,l)}divide(t){return this.gpair(t,m)}subtract(t){return this.gpair(t,w)}multiply(t){return this.gpair(t,v)}inv(t={}){return ut.inv({of:this,result:t.result})}dot(t){return ut.dot({of:this,with:t.with,result:t.result})}cross(t){return ut.cross({of:this,with:t.with,result:t.result})}round(t){return L.call({of:this,method:p,axes:this.axes.ALL,precision:t.precision,result:t.result||new ut({type:this.type,header:new ot({shape:this.shape})})})}slice(t,e=this){return new ut({type:this.type,header:this.header.slice(t.with),init:function(){return e.data}})}T(t=this){return new ut({type:this.type,header:this.header.transpose(),init:function(){return t.data}})}reshape(t,e=this){return this.contig?new ut({type:this.type,header:this.header.reshape(t.shape),init:function(){return e.data}}):ut.array({with:this.toRaw()}).reshape({shape:t.shape})}set(t){return ut.sanitize(t),H.call({of:this,with:t.with,method:g,result:this})}toRaw(){return JSON.parse(this.toString())}valueOf(){return this.data[this.offset]}toString(){return et.call(this)}[nt.inspect.custom](){return this.toString()}}var ct={frameRate:30,videoHeight:100,videoWidth:100,imageHeight:100,imageWidth:100};class lt{constructor(t){this.name=t.name,this.size=t.size,this.type=t.type}}class ft extends lt{constructor(t){super(t),createImageBitmap(t).then(function(t){const e=document.createElement("canvas"),r=e.getContext("2d"),n=[0,0,ct.imageWidth,ct.imageHeight];r.drawImage(t,...n),this.data=r.getImageData(...n).data,e.remove()}.bind(this))}}class ht extends lt{constructor(t){super(t);let e=0,r=0;const n=1/ct.frameRate,i=document.createElement("video"),s=document.createElement("canvas"),a=s.getContext("2d");i.src=URL.createObjectURL(t),i.onloadeddata=function(){this.frameChannels=4,this.frameCount=Math.ceil(i.duration/n),this.frameDimensions=[0,0,ct.videoWidth,ct.videoHeight],this.data=new Uint8ClampedArray(this.frameCount*this.frameChannels*this.frameDimensions[2]*this.frameDimensions[3]),i.currentTime=e}.bind(this),i.onseeked=function(){a.drawImage(i,...this.frameDimensions);const t=a.getImageData(...this.frameDimensions).data;this.data.set(t,r*t.length),r+=1,(e+=n)<=i.duration?i.currentTime=e:(i.remove(),s.remove())}.bind(this)}}class dt{constructor(t){this.target=t.target,this.export=t.export,this.read=this.read.bind(this),this.ignore=this.ignore.bind(this),this.target.addEventListener("drop",this.read,!1),this.target.addEventListener("dragover",this.ignore,!1)}ignore(t){t.stopPropagation(),t.preventDefault()}read(t){this.ignore(t),Object.values(t.dataTransfer.files).forEach(this.export)}}class pt{constructor(t){this.media=[],this.on=this.on.bind(this),this.filedrop=new dt({export:this.on,target:t.filedrop})}on(t){switch(t.type){case"image/jpeg":return this.media.push(new ft(t));case"video/quicktime":return this.media.push(new ht(t))}}}class gt{static createBuffer({context:t,array:e}){const r=t.createBuffer(),n=this.mapType({context:t,array:e}),i=t.STATIC_DRAW,s=t.ARRAY_BUFFER;return t.bindBuffer(s,r),t.bufferData(s,e.data,i),{buffer:r,size:e.shape[1],count:e.shape[0],type:n,normalize:!0,offset:e.offset*e.type.BYTES_PER_ELEMENT,stride:e.strides[0]*e.type.BYTES_PER_ELEMENT}}static mapType({context:t,array:e}){return e.type===Int8Array?t.BYTE:e.type===Uint8Array?t.UNSIGNED_BYTE:e.type===Uint8ClampedArray?t.UNSIGNED_BYTE:e.type===Int16Array?t.SHORT:e.type===Uint16Array?t.UNSIGNED_SHORT:e.type===Int32Array?t.INT:e.type===Uint32Array?t.UNSIGNED_INT:e.type===Float32Array?t.FLOAT:null}}class mt{static lookAt({to:t,from:e,up:r}){t=ut.array({with:t}),r=ut.array({with:r}),e=ut.array({with:e});const n=ut.eye({shape:[4,4]}),i=ut.eye({shape:[4,4]}),s=e.subtract({with:t}),a=r.cross({with:s}),o=s.divide({with:s.norm()}),u=a.divide({with:a.norm()}),c=o.cross({with:u});return n.slice({with:[":3",0]}).set({with:u}),n.slice({with:[":3",1]}).set({with:c}),n.slice({with:[":3",2]}).set({with:o}),i.slice({with:[3,":3"]}).set({with:e.multiply({with:-1})}),i.dot({with:n})}static project({angle:t,aspect:e,near:r,far:n}){const i=Math.PI*t/180/2,s=1/(n-r),a=Math.sin(i),o=Math.cos(i)/a,u=new Float32Array(16);return u[0]=o/e,u[5]=o,u[10]=-(n+r)*s,u[11]=-1,u[14]=-2*r*n*s,ut.array({with:u}).reshape({shape:[4,4]})}}class yt{static createShader({context:t,type:e,source:r}){const n=t.createShader(e);return t.shaderSource(n,r),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)?n:(console.error(`Error with compile: ${t.getShaderInfoLog(n)}`),t.deleteShader(n),null)}static createProgram({context:t,vertex:e,fragment:r}){const n=t.createProgram();return t.attachShader(n,this.createShader({context:t,type:t.VERTEX_SHADER,source:e})),t.attachShader(n,this.createShader({context:t,type:t.FRAGMENT_SHADER,source:r})),t.linkProgram(n),t.getProgramParameter(n,t.LINK_STATUS)?n:(console.error(`Error with link: ${t.getProgramInfoLog(n)}`),t.deleteProgram(n),null)}}class wt{static createUniforms({context:t,program:e}){const r={},n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;i++){const n=t.getActiveUniform(e,i),s=t.getUniformLocation(e,n.name);r[n.name]=this.createUniform({context:t,type:n.type,location:s})}return r}static createUniform({context:t,type:e,location:r}){return e===t.FLOAT_MAT2?function(e){t.uniformMatrix2fv(r,!1,e.data)}:e===t.FLOAT_MAT3?function(e){t.uniformMatrix3fv(r,!1,e.data)}:e===t.FLOAT_MAT4?function(e){t.uniformMatrix4fv(r,!1,e.data)}:void 0}}class vt{static createAttributes({context:t,program:e}){const r={},n=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(var i=0;i<n;i++){const n=t.getActiveAttrib(e,i),s=t.getAttribLocation(e,n.name);r[n.name]=this.createAttribute({context:t,location:s})}return r}static createAttribute({context:t,location:e}){return function(r){t.bindBuffer(t.ARRAY_BUFFER,r.buffer),t.enableVertexAttribArray(e),t.vertexAttribPointer(e,r.size,r.type,r.normalize,r.stride,r.offset)}}}var bt={vertex:"attribute float a_PointSize;\nattribute vec4 a_Position;\nattribute vec4 a_Color;\nuniform mat4 u_ViewMatrix;\nuniform mat4 u_ProjMatrix;\nvarying vec4 v_Color;\nvoid main() {\n  gl_PointSize = a_PointSize;\n  gl_Position = u_ProjMatrix * u_ViewMatrix * a_Position;\n  v_Color = a_Color;\n}\n",fragment:"precision mediump float;\nvarying vec4 v_Color;\nvoid main() {\n  gl_FragColor = v_Color;\n}\n"};class xt{constructor(t){this.target=t.target,this.context=this.target.getContext("webgl"),this.program=yt.createProgram({context:this.context,vertex:bt.vertex,fragment:bt.fragment}),this.attributes=vt.createAttributes({context:this.context,program:this.program}),this.uniforms=wt.createUniforms({context:this.context,program:this.program}),this.context.useProgram(this.program)}feed({array:t,attribute:e}){e.call(null,gt.createBuffer({context:this.context,array:t}))}plot({vertices:t,colors:e,sizes:r}){this.feed({array:t,attribute:this.attributes.a_Position}),this.feed({array:e,attribute:this.attributes.a_Color}),this.feed({array:r,attribute:this.attributes.a_PointSize});const n=mt.lookAt({to:[[0,0,0]],up:[[0,1,0]],from:[[10.5],[2.4],[2.4]]}),i=mt.project({angle:30,aspect:this.target.width/this.target.height,near:.1,far:100});this.uniforms.u_ViewMatrix(n),this.uniforms.u_ProjMatrix(i),this.context.drawArrays(this.context.POINTS,0,t.shape[0])}}var $t=new class{constructor(){this.canvas=document.querySelector("canvas"),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize()),this.media=new pt({filedrop:this.canvas,camcorder:this.video,microphone:this.audio}),this.graphics=new xt({target:this.canvas})}resize(){return this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight,this.resize}};window.bb=ut,window.app=$t,window.vertices=ut.array({with:[[0,0,0],[1,0,0],[0,1,0],[0,0,1]]}),window.colors=ut.array({with:[[255,255,255],[255,0,0],[0,255,0],[0,0,255]],type:Uint8ClampedArray}),window.sizes=ut.ones({shape:[vertices.size,1]}).multiply({with:10}),$t.graphics.plot({vertices:vertices,colors:colors,sizes:sizes})}]);