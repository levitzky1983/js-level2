!function(t){var e={};function r(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=e,r.d=function(t,e,o){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(o,n,function(e){return t[e]}.bind(null,n));return o},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){const o=r(1),n=(o.container,o.containerProtRender,o.containerProtRemove,r(2)),i=(n.basket,n.shop,n.basketProt,n.basketProtAdd,n.basketProtRemove,r(3)),s=(i.basketItem,i.basketItemProt,i.shopItem,i.shopItemProt,r(4));s.drag,s.drop;new Basket("main_basket"),new Shop("main_shop")},function(t,e){const r=Container.prototype.render=function(){var t="";for(var e in this.children)t+=this.children[e].render();return this.htmlCode.replace("%id%",this.id).replace("%class%",this.className).replace("%children%",t)};Container.prototype.remove=function(){document.getElementById(this.id).remove()};t.exports={container:function(t,e,r){this.id=t,this.className=e,this.children=r,this.htmlCode="<div id='%id%' class='%class%'>%children%</div>"},containerProtRender:r,containerProtRemove:containerProtRemov}},function(t,e){const r=Basket.prototype=Object.create(Container.prototype),o=Basket.prototype.addToBasket=function(t){$.get("https://raw.githubusercontent.com/levitzky1983/git-practic/master/products.json",function(e){1===JSON.parse(e).result?$.get("https://raw.githubusercontent.com/levitzky1983/git-practic/master/shop_products.json",function(e){var r=!1,o=null;for(var n in this.children)if(this.children[n].id==="basket_item-"+t){var i=++this.children[n].amount;o=n;var s=new BasketItem(this.children[n].productId,this.children[n].productPrice,this.children[n].productName,i);r=!0,this.children.splice(o,1,s)}if(!r){var a=JSON.parse(e);for(var c of a.products)if(c.productId==t){var d=new BasketItem(c.productId,c.price,c.name,1);this.children.push(d),console.log(this.children)}}document.querySelector(".wrap").innerHTML=this.render(),bindBasketDroppable(),bindShopDraggable()}.bind(this)):alert("Ошибка")}.bind(this))},n=Basket.prototype.removeFromBasket=function(t){$.get("https://raw.githubusercontent.com/Sinozet/test/master/cart/delete.json",function(e){if(1===JSON.parse(e).result){var r=this.children.findIndex(function(e){return e.productId===t});this.children.splice(r,1),document.querySelector(".wrap").innerHTML=this.render(),bindBasketDroppable(),bindShopDraggable()}else alert("Ошибка")}.bind(this))},i=Shop.prototype=Object.create(Container.prototype);t.exports={basket:function(t){Container.call(this,t,"basket",[]),$.get("https://raw.githubusercontent.com/levitzky1983/git-practic/master/basket.json",function(t){var e=JSON.parse(t);if(1===e.result){for(var r of e.basket)r=new BasketItem(r.productId,r.price,r.name,r.amount),this.children.push(r);document.querySelector(".wrap").innerHTML=this.render(),bindBasketDroppable(),bindShopDraggable()}else alert("Ошибка")}.bind(this))},basketProt:r,basketProtAdd:o,basketProtRemove:n,shop:function(t){Container.call(this,t,"item_list",[]),$.get("https://raw.githubusercontent.com/levitzky1983/git-practic/master/shop_products.json",function(t){var e=JSON.parse(t);for(var r of e.products)r=new ShopItem(r.productId,r.price,r.name),this.children.push(r),document.querySelector(".products").innerHTML=this.render(),bindBasketDroppable(),bindShopDraggable()}.bind(this))},shopProt:i}},function(t,e){const r=BasketItem.prototype=Object.create(Container.prototype),o=ShopItem.prototype=Object.create(Container.prototype);t.exports={basketItem:function(t,e,r,o){Container.call(this,"basket_item-"+t,"basket_item",[]),this.productId=t,this.productName=r,this.productPrice=e,this.amount=o,this.htmlCode="<div id='%id%' class='%class%'>Продукт : "+this.productName+"<br> Цена : "+this.productPrice+"<br>Количество : "+this.amount+"<br><input type='button' onclick='basket.removeFromBasket("+this.productId+")' value='Удалить'/></div>"},shopItem:function(t,e,r){Container.call(this,t,"item",[]),this.productId=t,this.productPrice=e,this.productName=r,this.htmlCode="<div id='%id%' class='%class%'>"+this.productName+" Цена "+this.productPrice+"<input type='button' onclick='basket.addToBasket("+this.productId+")' value='Добавить'/></div>"},basketItemProt:r,shopItemProt:o}},function(t,e){t.exports={drag:function(){$(".item").draggable({revert:!0,revertDuration:100})},drop:function(){$(".basket").droppable({drop:function(t,e){basket.addToBasket(e.helper[0].id)}})}}}]);