"use strict";
var nav = document.querySelector('.primary-navigation');
var navToggle = document.querySelector('.mobile-nav-toggle');
navToggle === null || navToggle === void 0 ? void 0 : navToggle.addEventListener('click', function () {
    if ((nav === null || nav === void 0 ? void 0 : nav.dataset.visible) === 'true') {
        nav.dataset.visible = 'false';
        navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'false');
    }
    else {
        nav.dataset.visible = 'true';
        navToggle === null || navToggle === void 0 ? void 0 : navToggle.setAttribute('aria-expanded', 'true');
    }
});
