/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// JS Goes here - ES6 supported

// Say hello
// console.log("🦊 Hello! Edit me in src/js/app.js");

//////////////////////////////////////////////////////////////////////////
/////////////////////////// REMOVE EMPTY P TAGS //////////////////////////
//////////////////////////////////////////////////////////////////////////
// Created by a bug in how Hugo handles many shortcodes
// https://stackoverflow.com/questions/6092855/how-do-i-remove-empty-p-tags-with-jquery/6092882
// https://stackoverflow.com/questions/6953470/removing-all-empty-p-tags

// var p = document.querySelectorAll("p:empty");
// for (var i = p.length - 1; i > -1; i--) {
// //   p[i].remove();
// }

var p = document.querySelectorAll("p");
for (var i = p.length - 1; i > -1; i--) {
  if (p[i].textContent.trim() == "") {
    p[i].remove();
  }
}

//////////////////////////////////////////////////////////////////////////
////////////////////////// SCROLL TO TOP BUTTON //////////////////////////
//////////////////////////////////////////////////////////////////////////

var small_screen = window.innerWidth <= 768;

// From https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  if (!small_screen) scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("to-top-button").style.display = "block";
  } else {
    document.getElementById("to-top-button").style.display = "none";
  } //else

  /////////////////////// PORTFOLIO TITLE IMG PARALLAX /////////////////////
  if (document.getElementById("portfolio__title_img")) {
    var scrollTop = window.scrollY;
    var imgPos = -1 * (scrollTop / 6) + "px";
    document.getElementById("portfolio__title_img").style.backgroundPosition = "50% " + imgPos;
  } //if
}

// When the user clicks on the button, scroll to the top of the document
document.getElementById("to-top-button").onclick = function () {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

/***/ })
/******/ ]);