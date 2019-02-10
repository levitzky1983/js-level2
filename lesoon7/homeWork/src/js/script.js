console.clear();
var widthSlider; //ширина слайдера
var step = 0; //ширина шага
// Базовый класс контейнер
function Container(id, className, childrenItems) {
  this.id = id;
  this.className = className;
  this.children = childrenItems;
  this.htmlCode = "<div id='%id%' class='%class%'>%children%</div>";
}
Container.prototype.render = function() {
  var childrenHtml = "";
  for (var i in this.children)
    childrenHtml += this.children[i].render();
  
  return this.htmlCode
    .replace('%id%', this.id)
    .replace('%class%', this.className)
    .replace('%children%', childrenHtml);
};
//конструктор для блока превью
function Preview(id) {
    Container.call(this, id, 'preview', []);
    $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/image.json', (function(data){
      var response = JSON.parse(data);
      
        for (var item of response.images) { 
           item = new ImageItem(item.id, item.href);
           this.children.push(item);  
        }
        this.htmlCode = "<ul id = %id% class = %class% >%children%</ul>";
        $('#slider').html(this.render());
        //подсвечиваем второй по счету слайд
        for(var index in this.children) {
          if (index == 1) {
            getActiveImg(this.children[index].id);
          }
        }
    }).bind(this));  
  }
Preview.prototype = Object.create(Container.prototype);

//конструктор слайдов для блока превью
function ImageItem(id, href) {
    Container.call(this, id, 'image', []);
    this.href  = href;
    //узнаем ширину слайдера, чтобы поестить туда 3 слайда превью
    widthSlider = $('#slider').width();
    this.htmlCode = "<li id = %id% class = %class%> <img src="+this.href+"  class='item-img' width = '"+(widthSlider/3)+"'></li>";
}
ImageItem.prototype = Object.create(Container.prototype);

//конструктор основного слайда(большая картинка)
function Slide(href) {
    Container.call(this, "slide", 'imageBigItem', []);
    this.href = href;
    this.htmlCode = "<img id = %id% class = %class% src="+this.href+" width = '600'>";
    $('.slideBlock').html(this.render());
}
Slide.prototype = Object.create(Container.prototype);
//удаление основного слайда
Slide.prototype.remove = function() {
    $('#'+this.id).remove();
};

//создаем объект превью
var preview = new Preview("slidewrapper");

//сделаем так, чтобы при изменении окна изменялся размер слайдера и размер img
$(window).resize(function(){
  widthSlider = $('#slider').width();
  $('.item-img').width(widthSlider/3);
});

//после загрузки window показываем подсвеченный слайд из превью
//вешаем на кнопки обработчики пролистывания на следующий слайд (удаление текущего и показ нового подсвеченного )
$(window).on('load',  function() {
    openSlide();
    $('#left').on('click',function() {
     // slide.remove();
      openSlide();
    })
    $('#right').on('click',function() {
     // slide.remove();
      openSlide();
    }) 
});

//функция, которая выбирает из слайдов превью подсвеченный и показывает его 
function openSlide () {
    let $arrImg = $('.image');
    for (index in $arrImg) {
      if ($arrImg.eq(index).hasClass('opacity')) {
        var href = $arrImg.eq(index).children().attr('src');
        var slide = new Slide(href);
      }
    }
}

//функция, которая подсвечивает текущий слайд превью путем добавления класса
function getActiveImg(id) {
    $('#'+id).addClass('opacity');
}
//функция пролистывания превью впрво (вешается на кнопку)
function moveSlideRight() {
  var $arrImg = $('.image');
  for (index in $arrImg) {
    if ($arrImg.eq(index).hasClass('opacity')) { 
      if (index != ($arrImg.length-1)) {
        step += widthSlider/3;
        $('.image').animate({
        right : step + 'px'
        });
        $arrImg.eq(index).removeClass('opacity');
        $add = $arrImg.eq(++index);
        $add.addClass('opacity');
        break;
      }
    }
  }  
}
//функция пролистывания превью влево (вешается на кнопку)
function moveSlideLeft() {
  var $arrImg = $('.image');
  for (index in $arrImg) {
    if ($arrImg.eq(index).hasClass('opacity')) { 
      if (index != 0) {
        step -=  widthSlider/3;
        $('.image').animate({
        right : step + 'px'
        });
        $arrImg.eq(index).removeClass('opacity');
        $add = $arrImg.eq(--index);
        $add.addClass('opacity');
        break;
      }
    }
  }  
}

  

