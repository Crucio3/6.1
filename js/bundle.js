!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2),n(3),n(4),n(5),n(6)},function(e,t,n){},function(e,t){var n,o=!1;function r(){window.innerWidth<=768?o||(o=!0,n=new Swiper(".swiper",{direction:"horizontal",pagination:{el:".swiper-pagination",clickable:"true"},slidesPerView:"auto",spaceBetween:16})):o&&(n.destroy(),o=!1)}r(),window.addEventListener("resize",r);var c=document.querySelector(".brands"),i=document.querySelector(".brands__more-content"),a=i.querySelector(".more-content__text"),u=i.querySelector(".more-content__icon");i.addEventListener("click",(function(e){e.preventDefault(),"Показать все"===a.textContent?(c.classList.add("full-brands"),a.textContent="Скрыть",u.style.transform="rotate(270deg)"):(c.classList.remove("full-brands"),a.textContent="Показать все",u.style.transform="rotate(90deg)")}))},function(e,t){var n=document.querySelector(".mobile-menu"),o=document.querySelector(".menu-open"),r=document.querySelector(".body");function c(){n.classList.remove("open-menu"),r.style.opacity=1}o.addEventListener("click",(function(e){e.preventDefault(),n.classList.add("open-menu"),r.style.opacity=.2,e.stopPropagation()})),document.querySelector(".menu-close").addEventListener("click",(function(e){e.preventDefault(),c(),e.stopPropagation()})),document.body.addEventListener("click",(function(e){n.contains(e.target)||o.contains(e.target)||n.classList.contains("open-menu")&&c()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(e.preventDefault(),c())}))},function(e,t){var n,o=!1;function r(){window.innerWidth<=768?o||(o=!0,n=new Swiper(".swiper",{direction:"horizontal",pagination:{el:".swiper-pagination",clickable:"true"},slidesPerView:"auto",spaceBetween:16})):o&&(n.destroy(),o=!1)}r(),window.addEventListener("resize",r);var c=document.querySelector(".technic"),i=document.querySelector(".technic__more-content"),a=i.querySelector(".more-content__text"),u=i.querySelector(".more-content__icon");i.addEventListener("click",(function(e){e.preventDefault(),"Показать все"===a.textContent?(c.classList.add("full-technic"),a.textContent="Скрыть",u.style.transform="rotate(270deg)"):(c.classList.remove("full-technic"),a.textContent="Показать все",u.style.transform="rotate(90deg)")}))},function(e,t){for(var n=document.querySelector(".call"),o=document.querySelectorAll(".call-open"),r=document.querySelector(".body"),c=0;c<o.length;c++)o[c].addEventListener("click",(function(e){e.preventDefault(),n.classList.add("open-call"),r.style.opacity=.2,e.stopPropagation()}));function i(){n.classList.remove("open-call"),r.style.opacity=1}document.querySelector(".call-close").addEventListener("click",(function(e){e.preventDefault(),i(),e.stopPropagation()})),document.addEventListener("keydown",(function(e){"Escape"===e.key&&(e.preventDefault(),i())}))}]);
//# sourceMappingURL=bundle.js.map