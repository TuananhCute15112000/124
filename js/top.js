$(document).ready(function () {
  "use strict";
  const swiper = new Swiper(".top_slider", {
    loop: true,
    effect: "fade",
    simulateTouch: false,
    allowTouchMove: false,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 2000,
  });

  const impossible_slider = new Swiper(".impossible_slider", {
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection: true,
    },
    loop: true,
    spaceBetween: 30,
    slidesPerView: "auto",
    speed: 13000,
    allowTouchMove: false,
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      1024: {
        spaceBetween: 30,
      },
    },
  });

  var project_slider = new Swiper("#project_slider", {
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
      renderFraction: function (currentClass, totalClass) {
        return (
          '<span class="' +currentClass +'"></span>' +"／" +'<span class="' +totalClass +'"></span>'
        );
      },
    },
    slidesPerView: "auto",
    spaceBetween: 40,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init: function () {
        var progress = $(".swiper-progress-bar .slide_progress-bar");
        var progressWidth = (1 / this.slides.length) * 100 + "%";
        progress.css("width", progressWidth);
      },
      slideChangeTransitionEnd: function () {
        var progress = $(".swiper-progress-bar .slide_progress-bar");
        var activeSlideIndex = this.realIndex;
        var progressWidth = ((activeSlideIndex + 1) / this.slides.length) * 100 + "%";
        progress.css("width", progressWidth);
      },
      reachEnd: function () {
        var progress = $(".swiper-progress-bar .slide_progress-bar");
        var progressWidth = "100%";
        progress.css("width", progressWidth);
      },
    },
    breakpoints: {
      320: {
        spaceBetween: 10,
      },
      768: {
        spaceBetween: 20,
      },
      1024: {
        spaceBetween: 40,
      },
    },
  });
});
