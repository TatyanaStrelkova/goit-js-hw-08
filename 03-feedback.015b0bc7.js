!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a,l=o("dCfNN"),u={form:document.querySelector(".feedback-form"),input:document.querySelector("input"),message:document.querySelector("textarea")},i="feedback-form-state";(a=JSON.parse(localStorage.getItem(i)))&&(u.input.value=a.email,u.message.value=a.message),u.form.addEventListener("input",e(l)((function(e){var t={email:e.currentTarget.elements.email.value,message:e.currentTarget.elements.message.value};localStorage.setItem(i,JSON.stringify(t))}),500)),u.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(JSON.parse(localStorage.getItem(i))),e.currentTarget.reset(),localStorage.removeItem(i)}))}();
//# sourceMappingURL=03-feedback.015b0bc7.js.map
