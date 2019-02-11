var myApp =
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nconst scriptSum = __webpack_require__(/*! ./modules/scriptSum */ \"./modules/scriptSum.js\");\r\nconst scriptSub = __webpack_require__(/*! ./modules/scriptSub */ \"./modules/scriptSub.js\");\r\nconst scriptMult = __webpack_require__(/*! ./modules/scriptMult */ \"./modules/scriptMult.js\");\r\nconst scriptDiv = __webpack_require__(/*! ./modules/scriptDiv */ \"./modules/scriptDiv.js\");\r\n   \r\n\r\nconsole.log(scriptSum.sum(2,5));\r\nconsole.log(scriptSub.sub(2,5));\r\nconsole.log(scriptMult.mult(-2,-5));\r\nconsole.log(scriptDiv.div(2,0));\r\n\r\n\n\n//# sourceURL=webpack://myApp/./app.js?");

/***/ }),

/***/ "./modules/scriptDiv.js":
/*!******************************!*\
  !*** ./modules/scriptDiv.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const div = function Div(a,b) {\r\n    if ( a === undefined || b === undefined) {\r\n        var error = new Error('Unknown arguments');\r\n        return error.message;\r\n    }\r\n    if (a === null || b === null) {\r\n       return null;\r\n    } \r\n    if (!Number.isFinite(a) || !Number.isFinite(b)) {\r\n        var error = new Error('One or more arguments are not a number');\r\n        return error.message;\r\n    }\r\n    if (b === 0) {\r\n        var error = new Error('division by zero is not allowed');\r\n        return error.message;\r\n    }\r\n    return  a / b;\r\n}\r\n\r\nmodule.exports = {\r\n    div : div\r\n}\r\n\n\n//# sourceURL=webpack://myApp/./modules/scriptDiv.js?");

/***/ }),

/***/ "./modules/scriptMult.js":
/*!*******************************!*\
  !*** ./modules/scriptMult.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const mult = function Mult(a,b) {\r\n    if ( a === undefined || b === undefined) {\r\n        var error = new Error('Unknown arguments');\r\n        return error.message;\r\n    }\r\n    if (a === null || b === null) {\r\n       return null;\r\n    } \r\n    if (!Number.isFinite(a) || !Number.isFinite(b)) {\r\n        var error = new Error('One or more arguments are not a number');\r\n        return error.message;\r\n    }\r\n    return  a * b;\r\n}\r\n\r\nmodule.exports = {\r\n    mult : mult\r\n}\r\n\n\n//# sourceURL=webpack://myApp/./modules/scriptMult.js?");

/***/ }),

/***/ "./modules/scriptSub.js":
/*!******************************!*\
  !*** ./modules/scriptSub.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sub = function Sub(a,b) {\r\n    if ( a === undefined || b === undefined) {\r\n        var error = new Error('Unknown arguments');\r\n        return error.message;\r\n    }\r\n    if ( a === null&&b === null) {\r\n        return null;\r\n    }\r\n    if (a === null) {\r\n       return -b;\r\n    } \r\n    if (b === null) {\r\n       return a;\r\n    }  \r\n   \r\n    if (!Number.isFinite(a) || !Number.isFinite(b)) {\r\n        var error = new Error('One or more arguments are not a number');\r\n        return error.message;\r\n    }\r\n    return  a - b;\r\n}\r\n\r\nmodule.exports = {\r\n    sub : sub\r\n}\r\n\n\n//# sourceURL=webpack://myApp/./modules/scriptSub.js?");

/***/ }),

/***/ "./modules/scriptSum.js":
/*!******************************!*\
  !*** ./modules/scriptSum.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const sum = function Sum(a,b) {\r\n    if ( a === undefined || b === undefined) {\r\n        var error = new Error('Unknown arguments');\r\n        return error.message;\r\n    }\r\n    if (a === null) {\r\n       return b;\r\n    } \r\n    if (b === null) {\r\n       return a;\r\n    }  \r\n   \r\n    if (!Number.isFinite(a) || !Number.isFinite(b)) {\r\n        var error = new Error('One or more arguments are not a number');\r\n        return error.message;\r\n    }\r\n    return  a + b;\r\n}\r\n\r\nmodule.exports = {\r\n    sum : sum\r\n}\r\n\n\n//# sourceURL=webpack://myApp/./modules/scriptSum.js?");

/***/ })

/******/ });