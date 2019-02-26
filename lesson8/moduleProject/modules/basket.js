const basket = function Basket(id) {
    require('../modules/container').container.call(this, id, 'basket', []);
    $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/basket.json', (function(data){
      var response = JSON.parse(data);
      if (response.result === 1) {
        for (var item of response.basket) { 
           item = require('../modules/basketItem').basketItem(item.productId, item.price, item.name, item.amount);
           this.children.push(item);  
        }
        document.querySelector('.wrap').innerHTML = this.render();
        bindBasketDroppable();
        bindShopDraggable();
      }
      else {
        alert('Ошибка');
      }
    }).bind(this));
}
    
const basketProt = function() {
  return Basket.prototype = Object.create(Container.prototype);
}
      
      //в методе добавления, после получения ответа result=1, создаем второй запрос и получаем json файл товаров магазина, и дальше смотрим если такой товар есть в корзине, то заменяем его на другой объект с кол-вом + 1, если товара нет в корзине , то по id находим товар для добавления и создаем новый объект. 
const basketProtAdd = function() {
  return Basket.prototype.addToBasket = function(productId) {
        $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/products.json', (function(data){
            var response = JSON.parse(data);
            if (response.result === 1) {  
              $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/shop_products.json', (function(data) {
                 var newChildren = [];   
                 var flag = false;
                 var indexToDelete = null;
                 for (var index in this.children) {
                   if (this.children[index].id === ('basket_item-' + productId)) { 
                     var amountItem = ++this.children[index].amount;
                     indexToDelete = index;
                     var itemNew = new BasketItem(this.children[index].productId, this.children[index].productPrice, this.children[index].productName, amountItem); 
                     flag = true;
                     this.children.splice(indexToDelete, 1, itemNew);       
                   } 
                 }        
                 if(!flag) {   
                   var responseProducts = JSON.parse(data);         
                   for (var item of responseProducts.products) { 
                     if (item.productId == productId) {
                        var itemToAdd = new BasketItem(item.productId, item.price, item.name, 1); 
                       //console.log(itemToAdd);
                       this.children.push(itemToAdd); 
                       console.log(this.children);
                     }
                   }
                }
                document.querySelector('.wrap').innerHTML = this.render();
                bindBasketDroppable();
                bindShopDraggable();
             }).bind(this)); 
            }  
            else {
              alert('Ошибка');
            }
        }).bind(this));
  };
}
      //метод удаления из корзины
const basketProtRemove = function() {
  return  Basket.prototype.removeFromBasket = function(productId) {
        $.get('https://raw.githubusercontent.com/Sinozet/test/master/cart/delete.json', (function(data) {
          var response = JSON.parse(data);
          if (response.result === 1) {
            var indexToRemove = this.children.findIndex(function(item) {
              return item.productId === productId;
            });
            this.children.splice(indexToRemove, 1);
            document.querySelector('.wrap').innerHTML = this.render();
            bindBasketDroppable();
            bindShopDraggable();
          }
          else {
            alert('Ошибка');
          }
        }).bind(this)); 
  };
}


const shop = function Shop(id) {
    require('../modules/container').container.call(this, id, 'item_list', []);
    $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/shop_products.json', (function(data){
      var response = JSON.parse(data);
      for (var item of response.products) { 
         item = require('../modules/basketItem').shopItem(item.productId, item.price, item.name);
         this.children.push(item);   
         document.querySelector('.products').innerHTML = this.render();
         bindBasketDroppable();
         bindShopDraggable();
      }
    }).bind(this));
}
    
const shopProt = function() {
  return Shop.prototype = Object.create(Container.prototype);
}

module.exports = {
    basket : basket,
    basketProt : basketProt,
    basketProtAdd : basketProtAdd,
    basketProtRemove : basketProtRemove,
    shop : shop,
    shopProt :  shopProt
}
  