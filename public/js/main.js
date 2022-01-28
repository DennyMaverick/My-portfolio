/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (function() {

eval("\r\n$(function () {\r\n  /*  Filter\r\n=========================== */\r\n\r\n  let filter = $(\"[data-filter]\");\r\n\r\n  filter.on(\"click\", function (event) {\r\n    event.preventDefault(); //убирает стандартное поведение элементов(ссылок)\r\n\r\n    let cat = $(this).data(\"filter\"); //получаем значение элемента, по которому\r\n    //производится клик мыши\r\n\r\n    if (cat == \"all\") {\r\n      $(\"[data-cat]\").removeClass(\"hide\");\r\n    } else {\r\n      $(\"[data-cat]\").each(function () {\r\n        let workCat = $(this).data(\"cat\");\r\n\r\n        if (workCat != cat) {\r\n          $(this).addClass(\"hide\");\r\n        } else {\r\n          $(this).removeClass(\"hide\");\r\n        }\r\n      });\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://gulp-starter/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;