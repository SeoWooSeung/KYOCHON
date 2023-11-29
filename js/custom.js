$(function () {
    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true
    });
    $('.banner_slide').slick({
        arrows: false,
        autoplay: false,
        pauseOnHover: false,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    $('.main_visual .arrows .left').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.visual_slide').slick('slickPrev')
    });

    $('.main_visual .arrows .right').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.visual_slide').slick('slickNext')
    });

    $('.main_content .arrows .left').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.banner_slide').slick('slickPrev')
    });

    $('.main_content .arrows .right').on('click', function () {
        //슬라이드가 뒤로 가 : slick 홈페이지 참조
        $('.banner_slide').slick('slickNext')
    });

    $('.totop').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 800)
    });

    $(window).on('scroll', function () {
        const sct = $(window).scrollTop();
        if (sct > 800) {
            $('.totop').addClass('on');
            $('.Header').addClass('on');
        } else {
            $('.totop').removeClass('on')
            $('.Header').removeClass('on')
        }
    });

    $(function () {
        $('.close').on('click', function () {
            $('.popup').hide();
        });

        // $('.check').on('change', function () {
        //     $('.popup').hide();
        // })
    })

});