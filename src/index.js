'use strict';
import 'nodelist-foreach-polyfill';
require('formdata-polyfill');
require('es6-promise').polyfill(); 
require('array-includes');
require("@babel/polyfill");
require('element-closest');


let accordion = require("./parts/accordion.js"),
    addStyles = require("./parts/addStyles.js"),
    ajax = require("./parts/ajax.js"),
    calculator = require("./parts/calculator.js"),
    filtr = require("./parts/filtr.js"),
    firstModal = require("./parts/firstModal.js"),
    hamburger = require("./parts/hamburger.js"),
    HoverEffect = require("./parts/HoverEffect.js"),
    mainSlider = require("./parts/mainSlider.js"),
    secondModal = require("./parts/secondModal.js"),
    secondSlider = require("./parts/secondSlider.js"),
    thirtModal = require("./parts/thirtModal.js");

accordion();
addStyles();
ajax();
calculator();
filtr();
firstModal();
hamburger();
HoverEffect();
mainSlider();
secondModal();
secondSlider();
thirtModal();

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;
    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
