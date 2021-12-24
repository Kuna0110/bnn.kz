// Зафиксировать меню
$(function () {
    menu_top = $('.box-nav').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > menu_top) {
            if ($('.box-nav').css('position') != 'fixed') {
                $('.box-nav').css('position', 'fixed');
                $('.box-nav').css('top', '0');
                $('.box-nav').css('background', '#fff');
                $('.box-nav').css('border-bottom', '1px solid #6FCF97');

                //logo
                $('.logo').css('font-size', '1.5rem');
            }
        } else {
            if ($('.box-nav').css('position') == 'fixed') {
                $('.box-nav').css('position', '');
                $('.box-nav').css('top', '');
                $('.box-nav').css('background', '');
                $('.box-nav').css('border-bottom', '');

                //logo
                $('.logo').css('font-size', '');
            }
        }
    });
});