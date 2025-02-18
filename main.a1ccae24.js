parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Ir8I":[function(require,module,exports) {
"use strict";function t(s){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(s)}function s(t){return a(t)||r(t)||i(t)||e()}function e(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,s){if(t){if("string"==typeof t)return n(t,s);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,s):void 0}}function r(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function a(t){if(Array.isArray(t))return n(t)}function n(t,s){(null==s||s>t.length)&&(s=t.length);for(var e=0,i=Array(s);e<s;e++)i[e]=t[e];return i}function o(t,s){if(!(t instanceof s))throw new TypeError("Cannot call a class as a function")}function u(t,s){for(var e=0;e<s.length;e++){var i=s[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,f(i.key),i)}}function h(t,s,e){return s&&u(t.prototype,s),e&&u(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function f(s){var e=l(s,"string");return"symbol"==t(e)?e:e+""}function l(s,e){if("object"!=t(s)||!s)return s;var i=s[Symbol.toPrimitive];if(void 0!==i){var r=i.call(s,e||"default");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(s)}var c=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];o(this,t),t.statuses||(t.statuses={IDLE:"idle",PLAYING:"playing",WIN:"win"},this.size=4,this.score=0,this.status=t.statuses.IDLE,this.state=e.map(function(t){return s(t)}))}return h(t,[{key:"addRandomTile",value:function(){var t=[];this.state.forEach(function(s,e){s.forEach(function(s,i){0===s&&t.push({row:e,col:i})})}),t.length;var s=Math.floor(Math.random()*t.length),e=t[s],i=e.row,r=e.col,a=Math.random()<.9?2:4;this.state[i][r]=a}},{key:"moveLeft",value:function(){if(this.status===t.statuses.PLAYING){for(var e=this.state.map(function(t){return s(t)}),i=[],r=[],a=0;a<this.size;a++){for(var n=this.state[a].filter(function(t){return 0!==t});n.length<this.size;)n.push(0);i.push(n)}for(var o=0;o<this.size;o++){for(var u=i[o].filter(function(t){return 0!==t}),h=0;h<u.length;h++)u[h]===u[h+1]&&(u[h]=2*u[h],u[h+1]=0,this.updateScore(u[h]));for(;u.length<this.size;)u.push(0);r.push(u)}this.boardsAreEqual(e,r)||(this.state=r,this.addRandomTile(),this.checkStatus())}}},{key:"moveRight",value:function(){if(this.status===t.statuses.PLAYING){for(var e=this.state.map(function(t){return s(t)}),i=[],r=[],a=0;a<this.size;a++){for(var n=this.state[a].filter(function(t){return 0!==t});n.length<this.size;)n.unshift(0);i.push(n)}for(var o=0;o<this.size;o++){for(var u=i[o].filter(function(t){return 0!==t}),h=u.length-1;h>0;h--)u[h]===u[h-1]&&(u[h]*=2,u.splice(h-1,1),u.unshift(0),this.updateScore(u[h]));for(;u.length<this.size;)u.unshift(0);r.push(u)}this.boardsAreEqual(e,r)||(this.state=r,this.addRandomTile(),this.checkStatus())}}},{key:"moveUp",value:function(){if(this.status===t.statuses.PLAYING){for(var e=this.state.map(function(t){return s(t)}),i=0;i<this.size;i++){for(var r=[],a=0;a<this.size;a++)0!==this.state[a][i]&&r.push(this.state[a][i]);for(;r.length<this.size;)r.push(0);for(var n=0;n<this.size;n++)this.state[n][i]=r[n]}for(var o=0;o<this.size;o++){for(var u=[],h=0;h<this.size;)h<this.size-1&&this.state[h][o]===this.state[h+1][o]?(u.push(2*this.state[h][o]),this.updateScore(2*this.state[h][o]),h+=2):(u.push(this.state[h][o]),h++);for(;u.length<this.size;)u.push(0);for(var f=0;f<this.size;f++)this.state[f][o]=u[f]}this.boardsAreEqual(e,this.state)||(this.addRandomTile(),this.checkStatus())}}},{key:"moveDown",value:function(){if(this.status===t.statuses.PLAYING){for(var e=this.state.map(function(t){return s(t)}),i=0;i<this.size;i++){for(var r=[],a=0;a<this.size;a++)0!==this.state[a][i]&&r.push(this.state[a][i]);for(;r.length<this.size;)r.unshift(0);for(var n=0;n<this.size;n++)this.state[n][i]=r[n]}for(var o=0;o<this.size;o++){for(var u=[],h=this.size-1;h>=0;)h>0&&this.state[h][o]===this.state[h-1][o]?(u.unshift(2*this.state[h][o]),this.updateScore(2*this.state[h][o]),h-=2):(u.unshift(this.state[h][o]),h--);for(;u.length<this.size;)u.unshift(0);for(var f=0;f<this.size;f++)this.state[f][o]=u[f]}this.boardsAreEqual(e,this.state)||(this.addRandomTile(),this.checkStatus())}}},{key:"getScore",value:function(){return this.score}},{key:"updateScore",value:function(t){this.score=this.score+t}},{key:"getState",value:function(){return this.state}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.addRandomTile(),this.addRandomTile(),this.status=t.statuses.PLAYING}},{key:"restart",value:function(){this.score=0,this.state=this.initialState.map(function(t){return s(t)}),this.status=t.statuses.IDLE}},{key:"boardsAreEqual",value:function(t,s){for(var e=0;e<t.length;e++)for(var i=0;i<t[e].length;i++)if(t[e][i]!==s[e][i])return!1;return!0}},{key:"checkStatus",value:function(){for(var s=!1,e=!1,i=0;i<4;i++)for(var r=0;r<4;r++){if(2048===this.state[i][r])return void(this.status=t.statuses.WIN);0===this.state[i][r]&&(s=!0),(i<3&&this.state[i][r]===this.state[i+1][r]||r<3&&this.state[i][r]===this.state[i][r+1])&&(e=!0)}s||e||(this.status=t.statuses.LOSE)}}])}();module.exports=c;
},{}],"6KIz":[function(require,module,exports) {
"use strict";var e=require("../modules/Game.class"),t=new e;function s(){var e=document.querySelector(".game-field");e.innerHTML="",t.getState().forEach(function(t){var s=document.createElement("tr");s.classList.add("field-row"),t.forEach(function(e){var t=document.createElement("td");t.classList.add("field-cell"),e>0&&t.classList.add("field-cell--".concat(e)),t.textContent=0!==e?e:"",s.appendChild(t)}),e.appendChild(s)})}function a(){i.innerHTML=t.getScore()}function r(){t.getStatus()===e.statuses.WIN?d.classList.remove("hidden"):t.getStatus()===e.statuses.LOSE&&o.classList.remove("hidden")}var n=document.querySelector(".button"),c=document.querySelector(".message-start"),o=document.querySelector(".message-lose"),d=document.querySelector(".message-win"),i=document.querySelector(".game-score");n.addEventListener("click",function(){n.classList.contains("start")?(t.start(),s(),a(),n.classList.remove("start"),n.classList.add("restart"),n.textContent="Restart",c.classList.add("hidden")):n.classList.contains("restart")&&(n.classList.remove("restart"),n.classList.add("start"),n.textContent="Start",o.classList.add("hidden"),t.restart(),s(),a())}),document.addEventListener("keydown",function(e){switch(e.preventDefault(),e.key){case"ArrowUp":t.moveUp();break;case"ArrowDown":t.moveDown();break;case"ArrowRight":t.moveRight();break;case"ArrowLeft":t.moveLeft()}a(),s(),r()});
},{"../modules/Game.class":"Ir8I"}]},{},["6KIz"], null)
//# sourceMappingURL=main.a1ccae24.js.map