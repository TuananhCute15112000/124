$(document).ready(function () {
  "use strict";
  Splitting();
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

  const impossible_slideImg = new Swiper('.impossible_slideImg', {
    direction: 'horizontal', // Hướng chuyển động từ phải qua trái
    loop: true, // Vòng lặp vô tận
    slidesPerView: 4, // Hiển thị 4 slide cùng một lúc
    spaceBetween: 10, // Khoảng cách giữa các slide
    autoplay: {
      delay: 0, // Không có thời gian chờ giữa các slide
      disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác
    },
    speed: 1000, // Tốc độ chuyển động (1 giây)
  });

  impossible_slideImg.autoplay.start(); // Bắt đầu autoplay

  
  const slideContainer = document.querySelector('.impossible_slideText');
  function cloneSlides() {
    const slides = slideContainer.querySelectorAll('.impossible_slideText_item');
    slides.forEach((slide) => {
      slideContainer.appendChild(slide.cloneNode(true));
    });
  }
  cloneSlides();

});
