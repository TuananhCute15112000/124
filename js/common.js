// anchor in page
$(window).bind("load", function () {
  "use strict";
  $(function () {
    $('a[href^="#"]').click(function () {
      if ($($(this).attr("href")).length) {
        var p = $($(this).attr("href")).offset();
        if ($(window).width() > 768) {
          $("html,body").animate(
            {
              scrollTop: p.top,
            },
            600
          );
        } else {
          $("html,body").animate(
            {
              scrollTop: p.top,
            },
            600
          );
        }
      }
      return false;
    });
  });
});

// anchor top page #
$(window).bind("load", function () {
  "use strict";
  var hash = location.hash;
  if (hash) {
    var p1 = $(hash).offset();
    if ($(window).width() > 768) {
      $("html,body").animate(
        {
          scrollTop: p1.top - 170,
        },
        600
      );
    } else {
      $("html,body").animate(
        {
          scrollTop: p1.top - 60,
        },
        600
      );
    }
  }
});

// menu
$(document).ready(function () {
  "use strict";
  $(".toggle_block").click(function (e) {
    e.preventDefault();
    $('#toggle-menu').toggleClass("active");
    $(".hamburger").toggleClass("active");
    $(".overlay").toggleClass("opened");
    $(".menu").toggleClass("active");
    $(".menu_logo").toggleClass("active");
    $(".menu_item").toggleClass("active");
  });
  $(".overlay").click(function (e) {
    e.preventDefault();
    $(this).removeClass("opened");
    $(".hamburger").removeClass("active");
    $(".menu").removeClass("active");
    $(".menu_logo").removeClass("active");
    $(".menu_item").removeClass("active");
  });

  // scrolleffect
  scrolleffect();
  function scrolleffect() {
    var controller = new ScrollMagic.Controller();
    $(".is-effect").each(function () {
      var headerScene = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -200,
        reverse: false,
      })
        .setClassToggle(this, "effect-active")
        .addTo(controller);
    });
  }
  // scrolleffect
  scrollTitle();
  function scrollTitle() {
    var controller = new ScrollMagic.Controller();
    $(".is-title").each(function () {
      var headerScene = new ScrollMagic.Scene({
        triggerElement: this,
        offset: -200,
        reverse: false,
      })
        .setClassToggle(this, "effect-title")
        .addTo(controller);
    });
  }
});
