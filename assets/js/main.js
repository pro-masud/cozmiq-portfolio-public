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

        // Copy Button Mail
        $(document).on("click", ".soc-card__copy", async function () {
            const $btn  = $(this);
            const $icon = $btn.find("i");
            const email = $btn.data("email");

            // সাময়িক UI ফিডব্যাক
            const prevAria  = $btn.attr("aria-label") || "Copy email";
            const prevClass = $icon.attr("class");
            $btn.prop("disabled", true);

            try {
                await navigator.clipboard.writeText(email);
                $btn.attr("aria-label", "Copied!");
                $icon.attr("class", "fa-solid fa-check");
            } catch (e) {
                console.error(e);
                $btn.attr("aria-label", "Copy failed");
                $icon.attr("class", "fa-solid fa-triangle-exclamation");
            } finally {
                setTimeout(() => {
                $btn.attr("aria-label", prevAria);
                $icon.attr("class", prevClass);
                $btn.prop("disabled", false);
                }, 1200);
            }
        });

    });
})(jQuery);