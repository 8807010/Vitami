"use strict";
import svg4everybody from 'svg4everybody';
import scrollLock from 'scroll-lock';

import header from './components/header.js';
import menuMobile from './components/menu.js';
import testServerRequest from './components/test-server-request.js';
import accordion from './components/accordion.js';



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

    app.initModule(accordion, '.js-accordion');
  }

};


window.addEventListener('DOMContentLoaded', app.init);