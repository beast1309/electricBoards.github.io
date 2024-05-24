$(function () {

    $('.accessories__slider-list').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.accessories__slider-preview',
        prevArrow: '.accessories__slider-prevBtn',
        nextArrow: '.accessories__slider-nextBtn',
        focusOnSelect: true,

        responsive: [
            {
                breakpoint: 871,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 721,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 571,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.accessories__slider-preview').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.accessories__slider-list',
        centerMode: true,
    });


    $('.header__burger').on('click', function () {
        $('.header__navigation').toggleClass('--active');
    });
});