(function($) {
    $(document).ready(function() {
        new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();

        // Portfolio Slider
        const swiper = new Swiper('#portfolioSwiper', {
            loop: true,                      
            slidesPerView: 3,          
            spaceBetween: 30,
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
             breakpoints: {
                0: { slidesPerView: 1, },
                768:{ slidesPerView: 2, spaceBetween: 16 },
                992:{ slidesPerView: 3, spaceBetween: 16 },
            },
        });

        swiper.on('touchEnd', () => {
            swiper.params.autoplay.delay = 0;
            swiper.autoplay.start();
        });

        var recendProject = new Swiper(".Recent-work-slider", {
            slidesPerView: 2,
            spaceBetween: 30,
            centeredSlides: false,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
             breakpoints: {
                0: { slidesPerView: 1, },
                768:{ slidesPerView: 2, spaceBetween: 16 },
            },
        });

        $(document).on("click", ".soc-card__copy", async function () {
            const $btn  = $(this);
            const $icon = $btn.find("i");
            const email = $btn.data("email");

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

        // Smoth Scrolling 
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        $(function () {
            $('a[href^="#"]').on('click', function (e) {
            const hash = this.getAttribute('href');
            if (hash && hash.length > 1 && document.querySelector(hash)) {
                e.preventDefault();
                lenis.scrollTo(hash, {
                offset: -72, 
                duration: 1.2,
            });
            history.pushState(null, '', hash);
            }
            });
        });

        if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            try { lenis.destroy(); } catch(e){}
        }


        // offcanvas creation
        const $bar = $('.cozmiq-bar');
        const $panel = $('#cozmiq-offcanvas');
        const $overlay = $('.cozmiq-overlay');
        const $closeBtn = $('.offcanvas-close');

        function openPanel(){
            $panel.addClass('is-open').attr('aria-hidden', 'false');
            $bar.attr('aria-expanded', 'true');
            $overlay.addClass('is-active').removeAttr('hidden');
            $('body').addClass('no-scroll');
            // ফোকাস ম্যানেজমেন্ট
            setTimeout(() => $closeBtn.trigger('focus'), 100);
        }

        function closePanel(){
            $panel.removeClass('is-open').attr('aria-hidden', 'true');
            $bar.attr('aria-expanded', 'false');
            $overlay.removeClass('is-active').attr('hidden', true);
            $('body').removeClass('no-scroll');
            $bar.trigger('focus');
        }

        // Open on click or Enter/Space
        $bar.on('click', openPanel);
        $bar.on('keydown', function(e){
            if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openPanel();
            }
        });

        // Close actions
        $closeBtn.on('click', closePanel);
        $overlay.on('click', closePanel);
        $(document).on('keydown', function(e){
            if (e.key === 'Escape' && $panel.hasClass('is-open')) {
            closePanel();
            }
        });

        // Simple focus trap inside panel when open
        $panel.on('keydown', function(e){
            if (e.key !== 'Tab') return;
            const $focusable = $panel
            .find('a, button, textarea, input, select, [tabindex]:not([tabindex="-1"])')
            .filter(':visible');
            if (!$focusable.length) return;

            const first = $focusable[0];
            const last  = $focusable[$focusable.length - 1];

            if (e.shiftKey && document.activeElement === first) {
            e.preventDefault(); $(last).focus();
            } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault(); $(first).focus();
            }
        });


    // Project Card 


    const stackSlider = new Swiper('.tools-swiper', {
        slidesPerView: 6,
        spaceBetween: 50,
        centeredSlides: false, 
        loop: true,               
        loopAdditionalSlides: 20,  
        allowTouchMove: false,
        speed: 6000,              
        autoplay: {
                delay: 0,                
                disableOnInteraction: false,
                pauseOnMouseEnter: false
            }
        });


    });
})(jQuery);