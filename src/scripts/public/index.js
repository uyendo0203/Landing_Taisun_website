$('.slider1').not('.slick-initialized').slick({
    dots: false,
    arrows:false,
    infinite: false,
    // autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
})
$('.slider2').not('.slick-initialized').slick({
    dots: false,
    arrows:true,
    infinite: false,
    autoplay:true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.png' ></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.png'></button>",
    responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true
          }
        }
      ]
})
$('.slider3').not('.slick-initialized').slick({
    dots: false,
    arrows:true,
    infinite: false,
    speed: 300,
    // autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.png' ></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.png'></button>",
    responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:false,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows:false,
            dots: true
          }
        }
      ]

})
$('.slider4').not('.slick-initialized').slick({
    dots: false,
    autoplay:true,
    arrows:true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.png' ></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.png'></button>",
    responsive: [
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            arrows:false,
            dots: true
          }
        },
    ]
})

$('.header__toggle-icon').click(function(e){
    e.stopPropagation()
    $('.header__nav').toggleClass('active')
})

$(document).click(function(e){
   
    $('.header__nav').removeClass('active')
})


$(document).ready(function() {

  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function() {
      var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

      // Now highlight all the stars that's not after the current hovered star
      $(this).parent().children('li.star').each(function(e) {
          if (e < onStar) {
              $(this).addClass('hover');
          } else {
              $(this).removeClass('hover');
          }
      });

  }).on('mouseout', function() {
      $(this).parent().children('li.star').each(function(e) {
          $(this).removeClass('hover');
      });
  });


  /* 2. Action to perform on click */
  $('#stars li').on('click', function() {
      var onStar = parseInt($(this).data('value'), 10); // The star currently selected
      var stars = $(this).parent().children('li.star');

      for (i = 0; i < stars.length; i++) {
          $(stars[i]).removeClass('selected');
      }

      for (i = 0; i < onStar; i++) {
          $(stars[i]).addClass('selected');
      }

  });


});

