!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,m=s||c||Function("return this")(),d=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return m.Date.now()};function y(e,t,n){var i,r,a,u,l,f,s=0,c=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(o);function y(t){var n=i,o=r;return i=r=void 0,s=t,u=e.apply(o,n)}function O(e){return s=e,l=setTimeout(j,t),c?y(e):u}function h(e){var n=e-f;return void 0===f||n>=t||n<0||m&&e-s>=a}function j(){var e=p();if(h(e))return w(e);l=setTimeout(j,function(e){var n=t-(e-f);return m?g(n,a-(e-s)):n}(e))}function w(e){return l=void 0,d&&i?y(e):(i=r=void 0,u)}function N(){var e=p(),n=h(e);if(i=arguments,r=this,f=e,n){if(void 0===l)return O(f);if(m)return l=setTimeout(j,t),y(f)}return void 0===l&&(l=setTimeout(j,t)),u}return t=S(t)||0,b(n)&&(c=!!n.leading,a=(m="maxWait"in n)?v(S(n.maxWait)||0,t):a,d="trailing"in n?!!n.trailing:d),N.cancel=function(){void 0!==l&&clearTimeout(l),s=0,i=f=r=l=void 0},N.flush=function(){return void 0===l?u:w(p())},N}function b(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||l.test(t)?f(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};var O,h=document.querySelector(".feedback-form"),j="feedback-form-"+h.id;function w(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.email,n=e.message;h.elements.email.value=t||"",h.elements.message.value=n||""}function N(){return{email:h.elements.email.value,message:h.elements.message.value}}h.addEventListener("submit",(function(e){e.preventDefault();var t=N();t.email&&t.message?(console.log(t),h.reset(),localStorage.removeItem(j)):console.log("Будь ласка, заповніть обидва поля")})),h.addEventListener("change",e(t)((function(){var e=N();localStorage.setItem(j,JSON.stringify(e))}),500)),h.elements.email.addEventListener("input",(function(){var e=N();e.email=h.elements.email.value,localStorage.setItem(j,JSON.stringify(e))})),h.elements.message.addEventListener("input",(function(){var e=N();e.message=h.elements.message.value,localStorage.setItem(j,JSON.stringify(e))})),null!==(O=JSON.parse(localStorage.getItem(j)))&&w(O),function(){var e=JSON.parse(localStorage.getItem(j));null!==e&&w(e)}()}();
//# sourceMappingURL=03-feedback.bc895c8d.js.map