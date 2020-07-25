(function ($) {
  "use strict";

  jQuery(document).ready(function ($) {
    /*********** Nav menu ***************/
    $('.nav-icon').click(function () {
      $('.menubar').toggleClass('canvas-menu');
      return false;
    });
    $('.dropdown-area').click(function () {
      $('.sub-dropdown').toggleClass('show-area');
    });

    /*********** slider***************/
    $('.single-product-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplayTimeout: 3000,
      dots: true,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 2,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    /*********** popup ***************/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });
    $('.document-carousel').owlCarousel({
      loop: true,
      margin: 20,
      nav: true,
      // autoplay:true,
      // autoplayTimeout:3000,
      // autoplayHoverPause:true,
      dots: false,
      responsive: {
        0: {
          items: 1,
        },
        575: {
          items: 2,
        },
        767: {
          items: 2,
        },
        992: {
          items: 3,
        },
        1200: {
          items: 4,
        },
      },
    });

    /*********** popup ***************/
    $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,

      fixedContentPos: false,
    });

    $('#sh-tabs').tabs();

    /*==============================
              Smooth Scroll Down
          ================================*/

    $('.menubar li a').on('click', function (event) {
      if (this.hash !== '') {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });





  });


})(jQuery);