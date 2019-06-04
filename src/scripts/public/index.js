/** 
 Slick slider-------------------------------------------
*/

$('.slider1').not('.slick-initialized').slick({
	dots: false,
	arrows: false,
	infinite: true,
	autoplay: true,
	autoplaySpeed: 4500,
	speed: 800,
	slidesToShow: 1,
	slidesToScroll: 1,
})

/**
 * slider active and autoplay video
 */
// $('.slider1').on('afterChange', function(event, slick, currentSlide, nextSlide){
// 	if($('#videoPlay').hasClass('slick-current')){
// 		document.getElementById('videoAutoplay').play();
// 	}
// });


/**
 * slick slider 
 */
var isInfiniteRelated = true;
var isAutoPlayRelated = true;
var numberItemOnSlideRelated = $('.related-left__content .slide-related').length;
var numberItemConfigRelated = 2;

if (numberItemOnSlideRelated <= numberItemConfigRelated) {
	isAutoPlayRelated = false
}

$('.related-left__content').not('.slick-initialized').slick({
	dots: false,
	arrows: false,
	infinite: false,
	autoplay: isAutoPlayRelated,
	speed: 300,
	slidesToShow: 2,
	slidesToScroll: 1,
	responsive: [
		{
		  breakpoint: 420,
		  settings: {
			slidesToShow: 1
		  }
		}
	  ]
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

var isInfinite = true;
var isAutoPlay = true;
var numberItemOnSlide = $('.product-detail--nav .item').length;
var numberItemConfig = 3;

if (numberItemOnSlide <= numberItemConfig) {
	isAutoPlay = false
}

$('.slider-product-detail--for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-product-detail--nav',
	autoplay: isAutoPlay,
	infinite: isInfinite
});

$('.slider-product-detail--nav').slick({
	slidesToShow: numberItemConfig,
	slidesToScroll: 1,
	asNavFor: '.slider-product-detail--for',
	dots: false,
	arrows: false,
	focusOnSelect: true,
	autoplay: isAutoPlay,
	infinite: isInfinite
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
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
				dots: true
			}
		},
		{
			breakpoint: 420,
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

/** 
 header-------------------------------------------
*/
$('.header__toggle-icon').click(function (e) {
	e.stopPropagation()

	$(this).toggleClass('active')
	$('.header__nav').toggleClass('active');
	$('.header__content').toggleClass('active');

	if ($(window).width() < 1200) {
		$('.header__nav--product').addClass('active');
		$('.header__nav--promotion').addClass('active')
	}
})

$(window).on('scroll', function () {

	var temp = $(this).scrollTop();

	if (temp > 260) {
		$('.header').addClass('active-scroll')
	} else {
		$('.header').removeClass('active-scroll')
	}
});


/***
 * document ready
 */

$(document).click(function (e) {

	$('.header__nav').removeClass('active');

	$('.write-evaluate--content').removeClass('active')
	$('.write-question--content').removeClass('active');
	$('.hover-product').removeClass('active');
	$('.header__nav--promotion').removeClass('active')
	$('.hover-promotion').removeClass('active');

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
	});



	/**set height max for items slider*/
	var maxHeight = 0;

	$(".slider2 .item").each(function () {
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});

	setTimeout(function () {
		$(".slider2 .item").height(maxHeight + 60);
	}, 1000);


	/**----------------------------------------------- */
	var maxHeight1 = 0;
	$(".slider-promotion-1 .item").each(function () {
		if ($(this).height() > maxHeight1) {
			maxHeight1 = $(this).height();
		}
	});

	setTimeout(function () {
		$(".slider-promotion-1 .item").height(maxHeight1 + 20);
	}, 1000)

	/**----------------------------------------------- */
	var maxHeight3 = 0;

	$(".product .slider2 .item").each(function () {
		if ($(this).height() > maxHeight3) {
			maxHeight3 = $(this).height();
		}
	});

	setTimeout(function () {
		$(".product .slider2 .item").height(maxHeight3 + 60);
	}, 1000)

	/**----------------------------------------------- */
	var maxHeight4 = 0;

	$(".product-detail .related-left__content .slide-related").each(function () {
		if ($(this).height() > maxHeight4) {
			maxHeight4 = $(this).height();
		}
	});

	setTimeout(function () {
		$(".product-detail .related-left__content .slide-related").height(maxHeight4);
	}, 1000)


	/**----------------------------------------------- */
	var maxHeight5 = 0;

	$(".taisun_website .product-detail__slider .product-detail--nav .item").each(function () {
		if ($(this).height() > maxHeight5) {
			maxHeight5 = $(this).height();
		}
	});

	setTimeout(function () {
		$(".taisun_website .product-detail__slider .product-detail--nav .item").height(maxHeight5);
	}, 1000)

	/**----------------------------------------------- */
	var maxHeight6 = 0;

	$(".taisun_website .product-detail__slider .product-detail--for .item").each(function () {
		if ($(this).height() > maxHeight6) {
			maxHeight6 = $(this).find('.image').height();
		}
	});

	setTimeout(function () {
		$(".taisun_website .product-detail__slider .product-detail--for .item .image").height(maxHeight6);
	}, 1000)


	/**----------------------------------------------- */
	// var minHeight = $(".banner__slider .item .img")[0].clientHeight;

	// $(".banner__slider .item .img").each(function () {
	// 	if ($(this)[0].clientHeight < minHeight) {
	// 		minHeight = $(this)[0].clientHeight
	// 	}
	// });

	// setTimeout(function(){
	// 	$(".banner__slider .item .img video").height(minHeight);
	// }, 1000)

	// document.getElementById('videoAutoplay').play();

});


/** 
 Popup video-------------------------------------------
*/

$(".popup").click(function () {
	var $src = $(this).attr("data-url");
	console.log($src)
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

	$('.header__nav--promotion').removeClass('active')
	$('.hover-promotion').removeClass('active');
})
$('.header__nav--product').mouseleave(function (e) {
	e.stopPropagation();
	$('.hover-product').removeClass('active')
	$(this).removeClass('active');
})

$('.header__bg').mouseover(function (e) {
	$('.hover-product').removeClass('active')			
	$('.header__nav--product').removeClass('active');
	$('.hover-promotion').removeClass('active')
	$('.header__nav--promotion').removeClass('active');
})
/**hover on menu "khuyen mai" */
$('.hover-promotion').mouseover(function (e) {
	e.stopPropagation();
	$('.header__nav--promotion').addClass('active')
	$(this).addClass('active');
	$('.header__nav--product').removeClass('active')
	$('.hover-product').removeClass('active');
})
$('.header__nav--promotion').mouseleave(function (e) {
	e.stopPropagation();
	$('.hover-promotion').removeClass('active')
	$(this).removeClass('active');
})
$('.header__bg').mouseover(function (e) {
	$('.hover-promotion').removeClass('active')
	$('.header__nav--product').removeClass('active');			
	$('.header__nav--product').removeClass('active');
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


