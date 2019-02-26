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
/******/ 	return __webpack_require__(__webpack_require__.s = "./script/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/basket.js":
/*!***************************!*\
  !*** ./modules/basket.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const basket = function Basket(id) {\r\n    __webpack_require__(/*! ../modules/container */ \"./modules/container.js\").container.call(this, id, 'basket', []);\r\n    $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/basket.json', (function(data){\r\n      var response = JSON.parse(data);\r\n      if (response.result === 1) {\r\n        for (var item of response.basket) { \r\n           item = __webpack_require__(/*! ../modules/basketItem */ \"./modules/basketItem.js\").basketItem(item.productId, item.price, item.name, item.amount);\r\n           this.children.push(item);  \r\n        }\r\n        document.querySelector('.wrap').innerHTML = this.render();\r\n        bindBasketDroppable();\r\n        bindShopDraggable();\r\n      }\r\n      else {\r\n        alert('Ошибка');\r\n      }\r\n    }).bind(this));\r\n}\r\n    \r\nconst basketProt = function() {\r\n  return Basket.prototype = Object.create(Container.prototype);\r\n}\r\n      \r\n      //в методе добавления, после получения ответа result=1, создаем второй запрос и получаем json файл товаров магазина, и дальше смотрим если такой товар есть в корзине, то заменяем его на другой объект с кол-вом + 1, если товара нет в корзине , то по id находим товар для добавления и создаем новый объект. \r\nconst basketProtAdd = function() {\r\n  return Basket.prototype.addToBasket = function(productId) {\r\n        $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/products.json', (function(data){\r\n            var response = JSON.parse(data);\r\n            if (response.result === 1) {  \r\n              $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/shop_products.json', (function(data) {\r\n                 var newChildren = [];   \r\n                 var flag = false;\r\n                 var indexToDelete = null;\r\n                 for (var index in this.children) {\r\n                   if (this.children[index].id === ('basket_item-' + productId)) { \r\n                     var amountItem = ++this.children[index].amount;\r\n                     indexToDelete = index;\r\n                     var itemNew = new BasketItem(this.children[index].productId, this.children[index].productPrice, this.children[index].productName, amountItem); \r\n                     flag = true;\r\n                     this.children.splice(indexToDelete, 1, itemNew);       \r\n                   } \r\n                 }        \r\n                 if(!flag) {   \r\n                   var responseProducts = JSON.parse(data);         \r\n                   for (var item of responseProducts.products) { \r\n                     if (item.productId == productId) {\r\n                        var itemToAdd = new BasketItem(item.productId, item.price, item.name, 1); \r\n                       //console.log(itemToAdd);\r\n                       this.children.push(itemToAdd); \r\n                       console.log(this.children);\r\n                     }\r\n                   }\r\n                }\r\n                document.querySelector('.wrap').innerHTML = this.render();\r\n                bindBasketDroppable();\r\n                bindShopDraggable();\r\n             }).bind(this)); \r\n            }  \r\n            else {\r\n              alert('Ошибка');\r\n            }\r\n        }).bind(this));\r\n  };\r\n}\r\n      //метод удаления из корзины\r\nconst basketProtRemove = function() {\r\n  return  Basket.prototype.removeFromBasket = function(productId) {\r\n        $.get('https://raw.githubusercontent.com/Sinozet/test/master/cart/delete.json', (function(data) {\r\n          var response = JSON.parse(data);\r\n          if (response.result === 1) {\r\n            var indexToRemove = this.children.findIndex(function(item) {\r\n              return item.productId === productId;\r\n            });\r\n            this.children.splice(indexToRemove, 1);\r\n            document.querySelector('.wrap').innerHTML = this.render();\r\n            bindBasketDroppable();\r\n            bindShopDraggable();\r\n          }\r\n          else {\r\n            alert('Ошибка');\r\n          }\r\n        }).bind(this)); \r\n  };\r\n}\r\n\r\n\r\nconst shop = function Shop(id) {\r\n    __webpack_require__(/*! ../modules/container */ \"./modules/container.js\").container.call(this, id, 'item_list', []);\r\n    $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/shop_products.json', (function(data){\r\n      var response = JSON.parse(data);\r\n      for (var item of response.products) { \r\n         item = __webpack_require__(/*! ../modules/basketItem */ \"./modules/basketItem.js\").shopItem(item.productId, item.price, item.name);\r\n         this.children.push(item);   \r\n         document.querySelector('.products').innerHTML = this.render();\r\n         bindBasketDroppable();\r\n         bindShopDraggable();\r\n      }\r\n    }).bind(this));\r\n}\r\n    \r\nconst shopProt = function() {\r\n  return Shop.prototype = Object.create(Container.prototype);\r\n}\r\n\r\nmodule.exports = {\r\n    basket : basket,\r\n    basketProt : basketProt,\r\n    basketProtAdd : basketProtAdd,\r\n    basketProtRemove : basketProtRemove,\r\n    shop : shop,\r\n    shopProt :  shopProt\r\n}\r\n  \n\n//# sourceURL=webpack:///./modules/basket.js?");

/***/ }),

/***/ "./modules/basketItem.js":
/*!*******************************!*\
  !*** ./modules/basketItem.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const basketItem = function BasketItem(id, price, name, amount) {\r\n    __webpack_require__(/*! ../modules/container */ \"./modules/container.js\").container.call(this, 'basket_item-' + id, 'basket_item', []);\r\n    this.productId = id;\r\n    this.productName = name;\r\n    this.productPrice = price;\r\n    this.amount = amount;\r\n    this.htmlCode = \"<div id='%id%' class='%class%'>Продукт : \" + this.productName + \"<br> Цена : \" + this.productPrice + \"<br>Количество : \"+this.amount+\"<br><input type='button' onclick='basket.removeFromBasket(\" + this.productId + \")' value='Удалить'/></div>\";\r\n}\r\nconst basketItemProt = function() {\r\n    return BasketItem.prototype = Object.create(Container.prototype);\r\n}      \r\nconst shopItem = function ShopItem(id, price, name) {\r\n    __webpack_require__(/*! ../modules/container */ \"./modules/container.js\").container.call(this, id, 'item', []);\r\n    this.productId = id;\r\n    this.productPrice = price;\r\n    this.productName = name;\r\n    this.htmlCode = \"<div id='%id%' class='%class%'>\"+this.productName + \" Цена \" +   this.productPrice + \"<input type='button' onclick='basket.addToBasket(\" + this.productId + \")' value='Добавить'/></div>\";\r\n}   \r\nconst shopItemProt = function() {\r\n    return ShopItem.prototype = Object.create(Container.prototype);\r\n}\r\n\r\nmodule.exports = {\r\n    basketItem : basketItem,\r\n    shopItem : shopItem,\r\n    basketItemProt : basketItemProt,\r\n    shopItemProt : shopItemProt\r\n}\n\n//# sourceURL=webpack:///./modules/basketItem.js?");

/***/ }),

/***/ "./modules/container.js":
/*!******************************!*\
  !*** ./modules/container.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const container = function Container(id, className, childrenItems) {\r\n    this.id = id;\r\n    this.className = className;\r\n    this.children = childrenItems;\r\n    this.htmlCode = \"<div id='%id%' class='%class%'>%children%</div>\";\r\n}\r\n   \r\nconst containerProtRender = function() {\r\n       return container.prototype.render = function() {\r\n                 var childrenHtml = \"\";\r\n                 for (var i in this.children)\r\n                 childrenHtml += this.children[i].render(); \r\n                 return this.htmlCode\r\n                   .replace('%id%', this.id)\r\n                   .replace('%class%', this.className)\r\n                   .replace('%children%', childrenHtml);\r\n       };\r\n}\r\n      \r\nconst containerProtRemove = function() {\r\n       return container.prototype.remove = function() {\r\n                document.getElementById(this.id).remove();\r\n       };\r\n}\r\n\r\n\r\nmodule.exports = {\r\n   container : container,\r\n   containerProtRender : containerProtRender,\r\n   containerProtRemove : containerProtRemove\r\n}\n\n//# sourceURL=webpack:///./modules/container.js?");

/***/ }),

/***/ "./modules/dragDropBasket.js":
/*!***********************************!*\
  !*** ./modules/dragDropBasket.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const drag = function bindShopDraggable(){\r\n    $(\".item\").draggable({\r\n      revert: true,\r\n      revertDuration: 100\r\n    });\r\n}\r\n    \r\nconst drop = function bindBasketDroppable() {\r\n    $(\".basket\").droppable({\r\n        drop: function(e, ui) {\r\n        basket.addToBasket(ui.helper[0].id);\r\n        }\r\n    });\r\n}\r\n\r\n\r\nmodule.exports = {\r\n    drag : drag,\r\n    drop : drop\r\n}\n\n//# sourceURL=webpack:///./modules/dragDropBasket.js?");

/***/ }),

/***/ "./script/script.js":
/*!**************************!*\
  !*** ./script/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const containerModule = __webpack_require__(/*! ../modules/container */ \"./modules/container.js\").container;\r\nconst containerRender = __webpack_require__(/*! ../modules/container */ \"./modules/container.js\").containerProtRender;\r\nconst containerRemove = __webpack_require__(/*! ../modules/container */ \"./modules/container.js\").containerProtRender;\r\n\r\n\r\nconst basketModule = __webpack_require__(/*! ../modules/basket */ \"./modules/basket.js\").basket;\r\nconst shopModule = __webpack_require__(/*! ../modules/basket */ \"./modules/basket.js\").shop;\r\nconst basketProt = __webpack_require__(/*! ../modules/basket */ \"./modules/basket.js\").basketProt;\r\nconst basketProtAdd = __webpack_require__(/*! ../modules/basket */ \"./modules/basket.js\").basketProtAdd;\r\nconst basketProtRemove = __webpack_require__(/*! ../modules/basket */ \"./modules/basket.js\").basketProtRemove;\r\n\r\nconst basketItemModule = __webpack_require__(/*! ../modules/basketItem */ \"./modules/basketItem.js\").basketItem;\r\nconst basketItemProt = __webpack_require__(/*! ../modules/basketItem */ \"./modules/basketItem.js\").basketItemProt;\r\nconst shopItemModule = __webpack_require__(/*! ../modules/basketItem */ \"./modules/basketItem.js\").shopItem;\r\nconst shopItemProt = __webpack_require__(/*! ../modules/basketItem */ \"./modules/basketItem.js\").shopItemProt;\r\n\r\n\r\nconst scriptDragDropBasket = __webpack_require__(/*! ../modules/dragDropBasket */ \"./modules/dragDropBasket.js\");\r\nconst drag = __webpack_require__(/*! ../modules/dragDropBasket */ \"./modules/dragDropBasket.js\").drag;\r\nconst drop = __webpack_require__(/*! ../modules/dragDropBasket */ \"./modules/dragDropBasket.js\").drop;\r\n\r\nvar basket = basketModule('main_basket');\r\nvar shop = shopModule('main_shop');\r\n\n\n//# sourceURL=webpack:///./script/script.js?");

/***/ })

/******/ });