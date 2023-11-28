$(function () {
    $('.visual_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: false,
        dots: true
    });
    $('.banner_slide').slick({
        arrows: false,
        autoplay: true,
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

    $('.main_visual').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).index();
        $('.visual_slide').slick('slickGoTo', idx);
    });


});