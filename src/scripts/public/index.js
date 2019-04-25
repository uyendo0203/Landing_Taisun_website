$('.slider1').not('.slick-initialized').slick({
    dots: false,
    arrows:false,
    infinite: false,
    autoplay:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
})
$('.slider2').not('.slick-initialized').slick({
    dots: false,
    arrows:true,
    infinite: false,
    autoplay:false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.jpg' ></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.jpg'></button>",
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
    autoplay:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.jpg' ></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.jpg'></button>",
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
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.jpg' ></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.jpg'></button>",
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