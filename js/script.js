$(document).ready(function() {
    $('.intro__slider').slick({
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true,
        autoplay: true
    });


    $('.burger').on("click", function(event) {
        $('.burger,.header__menu').toggleClass("active");
        $("body").toggleClass("lock");
    })

    $('.comments__slider').slick({
        infinite: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        dots: false,
        arrows: false,
        asNavFor: ".comments__sliderMin",
        initialSlide: 0,
    });

    $('.comments__sliderMin').slick({
        slidesToShow: 4,
        asNavFor: ".comments__slider",
        initialSlide: 0,
        arrows: true
    });


    // Fixed
    let header = $("#header");
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();
        checkscroll(scrollPos, introH);
    })

    function checkscroll(scrollPos, introH) {
        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    // Smooth 
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        let elementId = $(this).data("scroll");
        let elementOffset = $(elementId).offset().top;
        $(".header__menu,.burger").removeClass('active');
        $("html,body").animate({
            scrollTop: elementOffset - 70
        }, 1000)
    })

})