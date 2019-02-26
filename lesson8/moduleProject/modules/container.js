const container = function Container(id, className, childrenItems) {
    this.id = id;
    this.className = className;
    this.children = childrenItems;
    this.htmlCode = "<div id='%id%' class='%class%'>%children%</div>";
}
   
const containerProtRender = function() {
       return container.prototype.render = function() {
                 var childrenHtml = "";
                 for (var i in this.children)
                 childrenHtml += this.children[i].render(); 
                 return this.htmlCode
                   .replace('%id%', this.id)
                   .replace('%class%', this.className)
                   .replace('%children%', childrenHtml);
       };
}
      
const containerProtRemove = function() {
       return container.prototype.remove = function() {
                document.getElementById(this.id).remove();
       };
}


module.exports = {
   container : container,
   containerProtRender : containerProtRender,
   containerProtRemove : containerProtRemove
}