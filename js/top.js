$(document).ready(function () {
    "use strict";
    
    const swiper = new Swiper('.top_slider', {
        loop: true,
        effect: 'fade',
        simulateTouch: false,
        allowTouchMove: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        speed: 2000,
      });
});
