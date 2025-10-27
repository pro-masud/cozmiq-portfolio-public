(function($) {
    $(document).ready(function() {
        new WOW({
            boxClass: 'wow',
            animateClass: 'animate__animated',
            offset: 0,
            mobile: true,
            live: true
        }).init();

        if($('#smooth-wrapper').length && $('#smooth-content').length){
            gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
        
            gsap.config({
                nullTargetWarn: false,
            });
        
            let smoother = ScrollSmoother.create({
                smooth: 2,
                effects: true,
                smoothTouch: 0.1,
                normalizeScroll: false,
                ignoreMobileResize: true,
            });

        }

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

        if (!window.__lenis) {
        window.__lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
            smoothWheel: true,
            smoothTouch: false,
            wheelMultiplier: 1.0,
            touchMultiplier: 1.4
        });
        }
        const lenis = window.__lenis;

        if (!window.__lenisRAF) {
            window.__lenisRAF = true;
            function raf(time) {
                lenis.raf(time);
                requestAnimationFrame(raf);
            }
            requestAnimationFrame(raf);
        }

        const HEADER_OFFSET = (function () {
        const $h = $('.cozmiq-header');
        return $h.length ? $h.outerHeight() : 80;
        })();

        $('a[href^="#"]')
        .off('click.lenis') 
        .on('click.lenis', function (e) {
            const id = $(this).attr('href');
            if (!id || id === '#') return; 
            const $target = $(id);
            if ($target.length) {
            e.preventDefault();
            lenis.scrollTo($target[0], { offset: -HEADER_OFFSET });
            }
        });

        $('.swiper, .swiper-container').attr('data-lenis-prevent', '');

    });
})(jQuery);