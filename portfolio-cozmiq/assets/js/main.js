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
            speed: 6000,                   
            autoplay: {
                delay: 0,                    
                disableOnInteraction: false,
                pauseOnMouseEnter: true
            },
            allowTouchMove: true,    
            grabCursor: true,
        });

        swiper.on('touchEnd', () => {
            swiper.params.autoplay.delay = 0;
            swiper.autoplay.start();
        });

    });
})(jQuery);