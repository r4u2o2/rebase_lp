
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    lazyLoad: 'progressive',
    // mobileFirst: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
    responsive: [
      {
        breakpoint: 750,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      }
    ]
  });




