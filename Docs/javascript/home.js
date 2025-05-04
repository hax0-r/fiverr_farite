var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    keyboard: true,
});

var swiper = new Swiper(".mySwiperTestimonials", {
    slidesPerView: 2,
    spaceBetween: 50,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    keyboard: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
    },
});
