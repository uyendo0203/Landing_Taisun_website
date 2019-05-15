/** 
 Slick slider-------------------------------------------
*/

$('.slider1').not('.slick-initialized').slick({
  dots: false,
  arrows: false,
  infinite: false,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
})
$('.slider2').not('.slick-initialized').slick({
  dots: false,
  arrows: true,
  infinite: false,
  autoplay: false,
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
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
})
$('.slider3').not('.slick-initialized').slick({
  dots: false,
  arrows: true,
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
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]

})
$('.slider4').not('.slick-initialized').slick({
  dots: false,
  autoplay: true,
  arrows: true,
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
        arrows: false,
        dots: true
      }
    },
  ]
})
$('.slider-promotion').not('.slick-initialized').slick({
  dots: false,
  autoplay: true,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.png' ></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.png'></button>",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
  ]
})
$('.slider-promotion-1').not('.slick-initialized').slick({
  dots: false,
  autoplay: false,
  arrows: true,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.png' ></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.png'></button>",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
  ]
})

$('.slider-product-detail--for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.slider-product-detail--nav'
});
$('.slider-product-detail--nav').slick({
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  asNavFor: '.slider-product-detail--for',
  dots: false,
  autoplay: true,
});


$('.slider-award').not('.slick-initialized').slick({
  dots: false,
  autoplay: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: "<button type='button' class='slick-prev pull-left'><img src='./assets/images/arrow-1.png' ></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><img src='./assets/images/arrow-2.png'></button>",
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
  ]
})

/** 
 header-------------------------------------------
*/


$('.header__toggle-icon').click(function (e) {
  e.stopPropagation()

  $(this).toggleClass('active')
  $('.header__nav').toggleClass('active');
  $('.header__content').toggleClass('active');

  if ($(window).width() < 1200) {
    $('.header__nav--product').addClass('active')
  }

})

$(document).click(function (e) {

  $('.header__nav').removeClass('active');

  $('.write-evaluate--content').removeClass('active')
  $('.write-question--content').removeClass('active');

  $('.header__nav--product').removeClass('active')
  $('.hover-product').removeClass('active')
  $('.header__toggle-icon').removeClass('active')
})



/** 
start rating -------------------------------------------
*/

$(document).ready(function () {
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on

    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function (e) {
      if (e < onStar) {
        $(this).addClass('hover');
      } else {
        $(this).removeClass('hover');
      }
    });

  }).on('mouseout', function () {
    $(this).parent().children('li.star').each(function (e) {
      $(this).removeClass('hover');
    });
  });


  /* 2. Action to perform on click */
  $('#stars li').on('click', function () {
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');

    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }

    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    console.log(ratingValue)

  });



/**set height max for items */
  var maxHeight = 0;

  $(".slider2 .item").each(function () {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });

  $(".slider2 .item").height(maxHeight + 60);

  var maxHeight1 = 0;
  $(".slider-promotion-1 .item").each(function () {
    console.log('1',maxHeight1)
    console.log('2',$(this).height())
    if ($(this).height() > maxHeight1) {
      maxHeight1 = $(this).height();
    }
  });
  console.log('max',maxHeight1)
  $(".slider-promotion-1 .item").height(maxHeight1 + 20);


});


/** 
 Popup vidio-------------------------------------------
*/


$(".popup").click(function () {
  var $src = $(this).attr("data-url");
  $(".show-image").fadeIn();
  $(".img-show iframe").attr("src", $src);
});

$("span, .overlay").click(function () {
  $(".show-image").fadeOut();
  $(".img-show iframe").attr("src", '');
});



/** 
 * Product dettail page
 * 
*/

$('.product-detail__list-function .image-hover').on('mouseover', function () {
  $(this).closest('.image').find('.text-hover').css('display', 'table')
})
$('.product-detail__list-function .image-hover').on('mouseout', function () {
  $(this).closest('.image').find('.text-hover').css('display', 'none')
})


/**
 * click danh gia and comment
 *  
 */

$('.write-evaluate').click(function (e) {
  e.stopPropagation();
  $('.write-evaluate--content').toggleClass('active');
  if ($('.write-evaluate--content').hasClass('active')) {
    $('.write-question--content').removeClass('active')
  }
})

$('.write-question').click(function (e) {
  e.stopPropagation();
  $('.write-question--content').toggleClass('active');
  if ($('.write-question--content').hasClass('active')) {
    $('.write-evaluate--content').removeClass('active')
  }
})


$(".write-evaluate--content").click(function (e) {
  e.stopPropagation();
});
$(".write-question--content").click(function (e) {
  e.stopPropagation();
});

/** end */

/**hover on menu "san pham" */
$('.hover-product').mouseover(function (e) {
  e.stopPropagation();
  $('.header__nav--product').addClass('active')
  $(this).addClass('active');
})
$('.header__nav--product').mouseleave(function (e) {
  e.stopPropagation();
  $('.hover-product').removeClass('active')
  $(this).removeClass('active');
})


/** 
 * Product detail click amount for minus and plus
 * 
*/
var amount = $('.amount').val();
$('.addon').click(function () {
  var attr = $(this).attr('data-amount');

  if (attr == 'plus') {
    amount++;

  } else {
    amount--;
  }

  if (amount < 1) {
    alert('Vui lòng chọn nhiều hơn 1 sản phẩm!')
    amount = 1;
  }

  $('.amount').attr('value', amount);


})




