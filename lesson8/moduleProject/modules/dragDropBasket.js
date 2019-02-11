const drag = function bindShopDraggable(){
    $(".item").draggable({
      revert: true,
      revertDuration: 100
    });
}
    
const drop = function bindBasketDroppable() {
    $(".basket").droppable({
        drop: function(e, ui) {
        basket.addToBasket(ui.helper[0].id);
        }
    });
}


module.exports = {
    drag : drag,
    drop : drop
}