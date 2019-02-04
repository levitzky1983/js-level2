console.clear();

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
function Preview(id) {
    Container.call(this, id, 'preview', []);
    $.get('https://raw.githubusercontent.com/levitzky1983/git-practic/master/image.json', (function(data){
      var response = JSON.parse(data);
     
        for (var item of response.images) { 
           item = new ImageItem(item.id, item.href);
           this.children.push(item);  
        }
        this.htmlCode = "<ul id = %id% class = %class% >%children% </ul>";
        document.querySelector('#slider').innerHTML = this.render();
    }).bind(this));
  }
  Preview.prototype = Object.create(Container.prototype);

  function ImageItem(id, href) {
    Container.call(this, id, 'image', []);
    this.href  = href;
    this.htmlCode = "<li id = %id% class = %class%> <img src="+this.href+"  class='slide-img' width = '300'></li>";
  }
  ImageItem.prototype = Object.create(Container.prototype);

  var preview = new Preview("slidewrapper");

