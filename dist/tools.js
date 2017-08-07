(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.tools = global.tools || {})));
}(this, (function (exports) { 'use strict';

function mytest () {
  console.log('mytest');
}

exports['default'] = mytest;

Object.defineProperty(exports, '__esModule', { value: true });

})));
