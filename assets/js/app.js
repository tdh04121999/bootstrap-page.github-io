$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      loop: true,
      slideBY: 1,
      margin: 30,
      nav: true,
      dots: false,
      responsive: {
        0: {
          items: 2,
        },
        768: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
      nav: true,
      navText: [
        "<i class='fa-solid fa-angle-left'></i>",
        "<i class='fa-solid fa-angle-right'></i>",
      ],
    });
    $(".navbar-toggle").click(function () {
      $("ul#reponsive-menu").slideToggle();
    });

    function hide_reponsive_menu() {
      $("ul#reponsive-menu").slideUp();
      $(".down-toggle").removeClass("open");
      $("ul#reponsive-menu .sub-menu").slideUp();
    }
    $(window).resize(function () {
      hide_reponsive_menu();
    });
    $(window).scroll(function () {
      hide_reponsive_menu();
    });

    // show hide sub menu
    $(".down-toggle").click(function () {
      $(this).toggleClass("open");
      $(this).next(".sub-menu").slideToggle();
    });
  });