const containerModule = require('../modules/container').container;
const containerRender = require('../modules/container').containerProtRender;
const containerRemove = require('../modules/container').containerProtRender;


const basketModule = require('../modules/basket').basket;
const shopModule = require('../modules/basket').shop;
const basketProt = require('../modules/basket').basketProt;
const basketProtAdd = require('../modules/basket').basketProtAdd;
const basketProtRemove = require('../modules/basket').basketProtRemove;

const basketItemModule = require('../modules/basketItem').basketItem;
const basketItemProt = require('../modules/basketItem').basketItemProt;
const shopItemModule = require('../modules/basketItem').shopItem;
const shopItemProt = require('../modules/basketItem').shopItemProt;


const scriptDragDropBasket = require('../modules/dragDropBasket');
const drag = require('../modules/dragDropBasket').drag;
const drop = require('../modules/dragDropBasket').drop;

var basket = basketModule('main_basket');
var shop = shopModule('main_shop');
