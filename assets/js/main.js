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

    });
})(jQuery);