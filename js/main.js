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


window.addEventListener('DOMContentLoaded', () => {

const cookieGermanBtn = document.getElementById('cookieGermanBtn');
const cookieEnglishBtn = document.getElementById('cookieEnglishBtn');
const cookieEnglish = document.getElementById('cookieEnglish');
const cookieGerman = document.getElementById('cookieGerman');



cookieGermanBtn.addEventListener('click', () => {
    cookieEnglish.style.display = 'block';
    cookieGerman.style.display = 'none';
  });

  cookieEnglishBtn.addEventListener('click', () => {
    cookieGerman.style.display = 'block';
    cookieEnglish.style.display = 'none';
  });

});