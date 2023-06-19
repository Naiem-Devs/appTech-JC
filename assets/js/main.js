(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (){ 
    $('.mobile-menu').toggleClass('siteBar');   
    $('.header-area').toggleClass('mobile_menu_Active');   
    $('.bar').toggleClass('active');   
  }); 

  if (jQuery(window).width() <= 767) {
      // owlCarousel
      $(".lokala_blog-area .row").addClass('owl-carousel')

      jQuery(".lokala_blog-area .row").owlCarousel({
      loop: true,
      margin: 20,
      items: 1,
      nav: false,
      dots: true
    });
  }


  if (jQuery(window).width() <= 767) {
      // owlCarousel
      $(".artical_slider").addClass('owl-carousel')

      jQuery(".artical_slider").owlCarousel({
      loop: true,
      margin: 20,
      items: 1,
      nav: false,
      dots: true
    });
  }


  if (jQuery(window).width() <= 767) {
      // owlCarousel
      $(".artical_slider2").addClass('owl-carousel')

      jQuery(".artical_slider2").owlCarousel({
      loop: true,
      margin: 20,
      items: 1,
      nav: false,
      dots: true
    });
  }


  // var lokalaOwlClass = document.querySelector('.lokala_blog-area .row');

  // window.onResize = function() {
  //   if (window.innerWidth <= 1000) lokalaOwlClass.classList.add('owl-carousel');
  //   else homeIcon.classList.remove('owl-carousel');
  // };

  // owlCarousel
  // $(".brand-active").owlCarousel({
  //   loop: true,
  //   margin: 30,
  //   items: 6,
  //   navText: [
  //     '<i class="fa fa-angle-left"></i>',
  //     '<i class="fa fa-angle-right"></i>'
  //   ],
  //   nav: false,
  //   dots: false,
  //   responsive: {
  //     0: {
  //       items: 2
  //     },
  //     767: {
  //       items: 3
  //     },
  //     992: {
  //       items: 6
  //     }
  //   }
  // });

  $('.select-vb').niceSelect();
  $('.select-input').niceSelect();

})(jQuery);
