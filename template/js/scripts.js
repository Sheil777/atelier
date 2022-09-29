$(document).ready(
    function(){
        $('.header__burger, .close-phone-menu').click(
            function (event) {
                $('div.header__burger').toggleClass('header__burger_close');
                $('header').toggleClass('phone');
                $('.close-phone-menu').toggleClass('active');
                $('body').toggleClass('lock');
            }
        );
    }
);
