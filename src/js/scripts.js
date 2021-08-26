"use strict";
import svg4everybody from 'svg4everybody';
import scrollLock from 'scroll-lock';

import menuMobile from './components/header-menu';
import Header from './components/header';
import testServerRequest from './components/test-server-request.js';

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

    window.app.header = new Header('.js-header');

    app.initModule(testServerRequest, '.js-test-api');

    app.initModule(menuMobile, '.js-header-menu');
  }

};


window.addEventListener('DOMContentLoaded', app.init);