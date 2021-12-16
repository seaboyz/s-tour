"use strict";
var nav = document.querySelector('.primary-navigation');
var navToggle = document.querySelector('.mobile-nav-toggle');
navToggle === null || navToggle === void 0 ? void 0 : navToggle.addEventListener('click', function () {
    if ((nav === null || nav === void 0 ? void 0 : nav.getAttribute('data-visible')) === 'true') {
        nav.setAttribute('data-visible', 'false');
        navToggle.setAttribute('aria-expanded', 'false');
    }
    else {
        nav === null || nav === void 0 ? void 0 : nav.setAttribute('data-visible', 'true');
        navToggle.setAttribute('aria-expanded', 'true');
    }
});
