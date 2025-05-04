var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 5000,
    },
    loop: true,
    keyboard: true,
});