parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"6KIz":[function(require,module,exports) {
"use strict";var e=document.querySelector(".cookie"),t=document.querySelector(".header__button"),o=document.querySelector(".body"),s=document.querySelector(".header__menu"),n=document.querySelector(".menu__icon-close"),c=document.querySelector(".menu"),r=document.querySelector(".footer__icon--1"),i=document.querySelector(".footer__icon--2"),a=document.querySelector(".footer__icon--3"),u=document.querySelector(".footer__icon--facebook"),l=document.querySelector(".footer__icon--instagram"),d=document.querySelector(".footer__icon--twitter"),m=document.querySelector(".header__theme-switcher"),L=document.querySelector(".header__title"),f=document.querySelector(".about-us__title"),_=document.querySelector(".info__title"),v=document.querySelectorAll(".info__main h3"),h=Array.from(v),y=document.querySelector(".header__color--blue"),g=document.querySelector(".header__color--pink");m.addEventListener("click",function(){m.classList.toggle("before-transform"),o.classList.toggle("body-pink"),c.classList.toggle("body-pink"),L.classList.toggle("title-pink"),f.classList.toggle("title-pink"),_.classList.toggle("title-pink"),y.classList.toggle("text-dark"),g.classList.toggle("text-pink"),h.forEach(function(e){e.classList.toggle("title-pink")})}),t.addEventListener("mouseover",function(){e.classList.add("cookie--white")}),t.addEventListener("mouseout",function(){e.classList.remove("cookie--white")}),s.addEventListener("click",function(){c.classList.add("menu-transform"),o.classList.add("page-body")}),n.addEventListener("click",function(){c.classList.remove("menu-transform"),o.classList.remove("page-body")}),r.addEventListener("mouseover",function(){u.classList.add("footer-icons-white")}),r.addEventListener("mouseout",function(){u.classList.remove("footer-icons-white")}),i.addEventListener("mouseover",function(){l.classList.add("footer-icons-white")}),i.addEventListener("mouseout",function(){l.classList.remove("footer-icons-white")}),a.addEventListener("mouseover",function(){d.classList.add("footer-icons-white")}),a.addEventListener("mouseout",function(){d.classList.remove("footer-icons-white")}),window.addEventListener("hashchange",function(){"#product"===window.location.hash?(c.classList.remove("menu-transform"),o.classList.remove("page-body")):"#about"===window.location.hash?(c.classList.remove("menu-transform"),o.classList.remove("page-body")):"#blog"===window.location.hash?(c.classList.remove("menu-transform"),o.classList.remove("page-body")):"#contact"===window.location.hash&&(c.classList.remove("menu-transform"),o.classList.remove("page-body"))});
},{}]},{},["6KIz"], null)
//# sourceMappingURL=main.24e5addc.js.map