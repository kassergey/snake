var k = document.getElementById('navigationMenu');
var str = '<ul class="hr"><li class="itemHead"><a href="index.html">Головна</a></li>' +
    '<li class="itemHead"><a href="history.html">Історія гри</a></li>' +
    '<li class="itemHead"><a href="snake.html">Гра</a></li></ul>';
    //+'<li class="itemHead"><a href="asdfasfd">fasdfa</a></li>';
k.innerHTML = str;
//события при наведении мыши на пункты меню
/*var liElements = document.getElementsByClassName('itemHead');
for (var i = 0; i < liElements.length; i++) {
    liElements[i].onmouseenter = function () {
        this.style.backgroundColor = 'CornflowerBlue';
    };
    liElements[i].onmouseleave = function () {
        this.style.backgroundColor = 'blue';
    };
}*/