(function($) {
    $(document).ready(function() {

        // Smooth, continuous, “infinite” marquee feel
        const swiper = new Swiper('#portfolioSwiper', {
            loop: true,                      
            slidesPerView: 3,          
            spaceBetween: '30px',
            freeMode: {
                enabled: true,
                momentum: false,             
            },
            speed: 8000,                   
            autoplay: {
                delay: 2000,                    
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
        });

        swiper.on('touchEnd', () => {
            swiper.params.autoplay.delay = 0;
            swiper.autoplay.start();
        });

        // Smooth, continuous, “infinite” marquee feel
        var recendProject = new Swiper(".Recent-work-slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

    });
})(jQuery);