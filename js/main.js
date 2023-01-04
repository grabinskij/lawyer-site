$ (function(){
    $('.slider__inner, .news__slider-inner').slick({
        nextArrow:'<button type="button" class="slick-btn slick-next"></button>',
        prevArrow:'<button type="button" class="slick-btn slick-prev"></button>',
        infinite: false
    });
    $('select').styler();

     $('.header__btn-menu, .menu ul li a').click(function(event){
            $('.header__btn-menu, .menu ul').toggleClass('active');
        
        });





});
