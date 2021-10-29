"use strict";
var hamburgerBtn = document.querySelector('.hamburger');
var closeBtn = document.querySelector('.close');
var header = document.querySelector('header');
var nav = document.querySelector('.primary-navigation');
header === null || header === void 0 ? void 0 : header.addEventListener('click', function (e) {
    var target = e.target;
    if (target.classList.contains('hamburger')) {
        hamburgerBtn === null || hamburgerBtn === void 0 ? void 0 : hamburgerBtn.classList.toggle('hidden');
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.classList.toggle('hidden');
        nav === null || nav === void 0 ? void 0 : nav.classList.toggle('hidden');
    }
    else if (target.classList.contains('close')) {
        hamburgerBtn === null || hamburgerBtn === void 0 ? void 0 : hamburgerBtn.classList.toggle('hidden');
        closeBtn === null || closeBtn === void 0 ? void 0 : closeBtn.classList.toggle('hidden');
        nav === null || nav === void 0 ? void 0 : nav.classList.toggle('hidden');
    }
});
