var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,f=u||l||Function("return this")(),c=Object.prototype.toString,s=Math.max,m=Math.min,d=function(){return f.Date.now()};function v(e,t,n){var i,o,r,a,u,l,f=0,c=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,f=t,a=e.apply(r,n)}function j(e){return f=e,u=setTimeout(w,t),c?y(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||v&&e-f>=r}function w(){var e=d();if(h(e))return O(e);u=setTimeout(w,function(e){var n=t-(e-l);return v?m(n,r-(e-f)):n}(e))}function O(e){return u=void 0,b&&i?y(e):(i=o=void 0,a)}function T(){var e=d(),n=h(e);if(i=arguments,o=this,l=e,n){if(void 0===u)return j(l);if(v)return u=setTimeout(w,t),y(l)}return void 0===u&&(u=setTimeout(w,t)),a}return t=p(t)||0,g(n)&&(c=!!n.leading,r=(v="maxWait"in n)?s(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),T.cancel=function(){void 0!==u&&clearTimeout(u),f=0,i=l=o=u=void 0},T.flush=function(){return void 0===u?a:O(d())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==c.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=o.test(e);return u||r.test(e)?a(e.slice(2),u?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const b=document.querySelector(".feedback-form");b.addEventListener("input",(function(e){"email"===e.target.name&&(y.email=e.target.value);"message"===e.target.name&&(y.message=e.target.value);t((()=>{const e=JSON.stringify(y);localStorage.setItem("feedback-form-state",e)}),500)()}));const y={};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));null===b.elements.email.value?b.elements.email.value=e.email:b.elements.email.value=" ",null===b.elements.email.value?b.elements.email.value=e.message:b.elements.email.value=" "}(),b.addEventListener("submit",(function(e){e.preventDefault(),console.log(y),localStorage.clear(),b.reset()}));
//# sourceMappingURL=03-feedback.6f303c65.js.map
