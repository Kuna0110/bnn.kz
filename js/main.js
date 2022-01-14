// Зафиксировать меню
$(function () {
    menu_top = $('.box-nav-inner').offset().top;
    $(window).scroll(function () {
        if ($(window).scrollTop() > menu_top) {
            if ($('.box-nav-inner').css('position') != 'fixed') {
                $('.box-nav-inner').css('position', 'fixed');
                $('.box-nav-inner').css('top', '0');
                $('.box-nav-inner').css('background', '#fff');
                $('.box-nav-inner').css('border-bottom', '1px solid #6FCF97');

                //logo
                $('.logo').css('font-size', '1.5rem');
                $('.logo').css('padding', '5px');
            }
        } else {
            if ($('.box-nav-inner').css('position') == 'fixed') {
                $('.box-nav-inner').css('position', '');
                $('.box-nav-inner').css('top', '');
                $('.box-nav-inner').css('background', '');
                $('.box-nav-inner').css('border-bottom', '');

                //logo
                $('.logo').css('font-size', '');
                $('.logo').css('padding', '');
            }
        }
    });
});