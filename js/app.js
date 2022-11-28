const sliderMain = new Swiper('.slider_main', {
    freeMode: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 200
        },
        680: {
            slidesPerView: 1.5,
            spaceBetween: 900
        }
    }
})