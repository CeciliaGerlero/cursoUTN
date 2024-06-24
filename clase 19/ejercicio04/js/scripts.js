$(document).ready(function(){
    $window=$(windows);

    $('#intro').height($window.height());
    $window.scroll(function () {  //tengo en cta el mov de scroll de los otros 3 div con la clase background > each por cada elemento
        $('div.background').each(function (index, item) {
            const $scroll = $(item);
            const yPos = -($window.scrollTop() / $scroll.data('speed'));
            const coords = '50%' + yPos + 'px';
            
            $scroll.css({ backgroundPosition: coord });
        }) //fin primer funcion
    }) //fin segunda funcion
}) //fin tercera funcion
