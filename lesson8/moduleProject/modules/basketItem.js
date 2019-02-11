const basketItem = function BasketItem(id, price, name, amount) {
    require('../modules/container').container.call(this, 'basket_item-' + id, 'basket_item', []);
    this.productId = id;
    this.productName = name;
    this.productPrice = price;
    this.amount = amount;
    this.htmlCode = "<div id='%id%' class='%class%'>Продукт : " + this.productName + "<br> Цена : " + this.productPrice + "<br>Количество : "+this.amount+"<br><input type='button' onclick='basket.removeFromBasket(" + this.productId + ")' value='Удалить'/></div>";
}
const basketItemProt = function() {
    return BasketItem.prototype = Object.create(Container.prototype);
}      
const shopItem = function ShopItem(id, price, name) {
    require('../modules/container').container.call(this, id, 'item', []);
    this.productId = id;
    this.productPrice = price;
    this.productName = name;
    this.htmlCode = "<div id='%id%' class='%class%'>"+this.productName + " Цена " +   this.productPrice + "<input type='button' onclick='basket.addToBasket(" + this.productId + ")' value='Добавить'/></div>";
}   
const shopItemProt = function() {
    return ShopItem.prototype = Object.create(Container.prototype);
}

module.exports = {
    basketItem : basketItem,
    shopItem : shopItem,
    basketItemProt : basketItemProt,
    shopItemProt : shopItemProt
}