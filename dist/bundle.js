/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./script/app.js":
/*!***********************!*\
  !*** ./script/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style/style.css */ \"./style/style.css\");\n\nconst Card = function (width, height, specialPaper, regularPaper) {\n  this.width = width;\n  this.height = height;\n  this.specialPaper = specialPaper;\n  this.regularPaper = regularPaper;\n  this.CulateCard = function () {\n    if (this.width <= 47 && this.height <= 32 && this.regularPaper === true) {\n      console.log('Card Per unit cost will be', 5 / Math.floor(47 / this.width) * Math.floor(32 / this.height));\n    } else if (this.width <= 47 && this.height <= 32 && this.regularPaper === false && this.specialPaper === true) {\n      console.log('Card Per unit cost will be', 7 / Math.floor(47 / this.width) * Math.floor(32 / this.height));\n    }\n  };\n};\nconst result = new Card(21, 29.7, true, false);\nresult.CulateCard();\nconst Sticker = function (width, height, glossySticker, Mattsticker) {\n  Card.call(this, width, height);\n  this.glossySticker = glossySticker;\n  this.Mattsticker = Mattsticker;\n  this.check = this.glossySticker === true || this.Mattsticker === false || this.glossySticker === false || this.Mattsticker === true;\n  this.calculateSticker = function () {\n    if (this.width <= 47 && this.height <= 32 && this.check === true) {\n      console.log('Sticker Per unit cost will be', 5 / Math.floor(47 / this.width) * Math.floor(32 / this.height));\n    }\n  };\n};\nconst result2 = new Sticker(21, 29.7, false, true);\nresult2.calculateSticker();\n\n//# sourceURL=webpack://webpack/./script/app.js?");

/***/ }),

/***/ "./style/style.css":
/*!*************************!*\
  !*** ./style/style.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://webpack/./style/style.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script/app.js");
/******/ 	
/******/ })()
;