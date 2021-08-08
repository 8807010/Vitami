"use strict";
import svg4everybody from 'svg4everybody';
import scrollLock from 'scroll-lock';

import header from './components/header.js';
import menuMobile from './components/menu.js';
import testServerRequest from './components/test-server-request.js';
import swiper from './components/swiper.js';






 // core version + navigation, pagination modules:
 import SwiperCore, { Navigation, Pagination } from 'swiper/core';

 // configure Swiper to use modules
 SwiperCore.use([Navigation, Pagination]);

 // init Swiper:
 const swiper = new Swiper(...);








svg4everybody();

window.app = {
  header: null,
  scroll: {
    disable: scrollLock.disablePageScroll,
    enable: scrollLock.enablePageScroll
  },
  mobileBreakpoint: 767.99 / 16,
  mobileQuery: window.matchMedia(`(max-width: ${767.99 / 16}rem)`),
  setInert(...args) {
    args.forEach(item => {
      item.setAttribute('inert', true);
    })
  },
  removeInert(...args) {
    args.forEach(item => {
      item.removeAttribute('inert');
    })
  },

  initModule(Module, selector) {
    if (!!selector) {
      let blocks = Array.prototype.slice.call(document.querySelectorAll(selector));
      blocks.forEach(block => {
        new Module(block);
      });
    } else {
      new Module();
    }
  },

  init () {

    app.initModule(header, '.js-header');

    app.initModule(menuMobile, '.js-header__menu');

    app.initModule(testServerRequest, '.js-test-api');

    app.initModule(swiper, '.swiper-container');


  }

};


window.addEventListener('DOMContentLoaded', app.init);