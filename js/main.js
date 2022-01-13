/* *******************************************************
 * filename : main.js
 * description : 메인에만 사용되는 JS
 * date : 2017-05-30
******************************************************** */


jQuery(function($){
	//메인 아코디언 메뉴
	$(".main-arcodian-btn").click(function  () {
		$(".main-arcodian").toggleClass("active");
	});

	//스크롤시 메인 메뉴 슬라이드업
	$(window).scroll(function  () {
		var scrollHeight = $(window).scrollTop();

		if ( scrollHeight > 0 ) {
			$("#mainContent").addClass("active");
		}
	});

	/* *********************** 메인 비주얼 ************************ */
	// 임의의 영역을 만들어 스크롤바 크기 측정
	function getScrollBarWidth(){
		if($(document).height() > $(window).height()){
			$('body').append('<div id="fakescrollbar" style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"></div>');
			fakeScrollBar = $('#fakescrollbar');
			fakeScrollBar.append('<div style="height:100px;">&nbsp;</div>');
			var w1 = fakeScrollBar.find('div').innerWidth();
			fakeScrollBar.css('overflow-y', 'scroll');
			var w2 = $('#fakescrollbar').find('div').html('html is required to init new width.').innerWidth();
			fakeScrollBar.remove();
			return (w1-w2);
		}
		return 0;
	}

	// 메인 비주얼 높이값 설정
	$("#mainVisual.full-height").each(function  () {
		scrollWidth = getScrollBarWidth();
		var win_width = $(window).outerWidth() + getScrollBarWidth();

		if ( $("#header").is(".fixed-header") ) {
			var visual_height = $(window).height()	// - $("#header").height(); /* header가 fixed가 아닌경우는 주석해제*/ 
		}else {
			var visual_height = $(window).height()	- $("#header").height();
		}
		
		if ( win_width > 800 ) {
			$("#mainVisual").height(visual_height);
		}else {
			$("#mainVisual").css("height","auto");
		}
		$(window).resize(function  () {
			var win_width = $(window).outerWidth() + getScrollBarWidth();

			if ( $("#header").is(".fixed-header") ) {
				var visual_height = $(window).height()	// - $("#header").height(); /* header가 fixed가 아닌경우는 주석해제*/ 
			}else {
				var visual_height = $(window).height()	- $("#header").height();
			}

			if ( win_width > 800 ) {
				$("#mainVisual").height(visual_height);
			}else {
				$("#mainVisual").css("height","auto");
			}
		});
	});
	
	// 메인 비주얼 zoom-out 효과
	$(".main-visual-con").on('init', function(event, slick) {
		$(".main-visual-item").eq(0).addClass("active-item");
	});
	$(".main-visual-con").on('afterChange', function(event, slick, currentSlide){
        $(".main-visual-item").removeClass("active-item");
		$(this).find(".main-visual-item").eq(currentSlide).addClass("active-item")
    });

	// 메인 비주얼 슬라이드
 $('.main-visual-con').slick({
		draggable: false,
		arrows: true,
		dots: false,
		fade: true,
		speed: 1200,
		infinite: true,
		cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
		touchThreshold: 100,
		autoplay:true,
		autoplaySpeed: 5300,
		pauseOnHover:false,
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Prev" tabindex="0" role="button"><i class="material-icons">&#xE5C4;</i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="material-icons">&#xE5C8;</i></button>',
	  });
		


	//main-banner
	$(".main-banner-close").click(function  () {
		$(this).parent("#mainBanner").slideUp();
		$("#header").toggleClass("banner-off");
		$("#gnbM").addClass("banner-close");
	});

	


	
	/* *********************** 메인 갤러리 슬라이드 ************************ */

	$('.main-share-slider').slick({
		draggable: false,
		arrows: true,
		dots: false,
		speed: 900,
		infinite: true,
		autoplay:true,
		autoplaySpeed: 4000,
		slidesToShow: 4,
		slidesToScroll: 1,
		easing: 'easeInOutQuint',
		variableWidth:true,
		responsive: [
					{
					  breakpoint: 801,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
						centerMode:true
					  }
					}
				  ]
	  });



	$('.main-gallery-rolling-con > ul').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		dots:false,
		autoplay: true,
		speed:800,
		infinite:true,
		autoplaySpeed: 3000,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Prev" tabindex="0" role="button"><i class="material-icons">&#xE314;</i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="material-icons">&#xE315;</i></button>',
		responsive: [
					{
					  breakpoint: 801,
					  settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					  }
					},
					{
					  breakpoint: 641,
					  settings: {
						slidesToShow: 2,
						slidesToScroll: 1
					  }
					}
				  ]
	});

	/* *********************** 메인 갤러리 + 설명 슬라이드 ************************ */
	$('.main-slide-photo-con').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: false,
		dots:false,
		autoplay: true,
		speed:800,
		infinite:true,
		autoplaySpeed: 3000,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Prev" tabindex="0" role="button"><i class="material-icons">&#xE314;</i></button>',
		nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="material-icons">&#xE315;</i></button>',
		asNavFor: '.main-slide-text-con'
	});
	$('.main-slide-text-con').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		dots:false,
		autoplay: true,
		speed:800,
		infinite:true,
		autoplaySpeed: 3000,
		easing: 'easeInOutQuint',
		pauseOnHover:false,
		asNavFor: '.main-slide-photo-con'
	});	


	
});
