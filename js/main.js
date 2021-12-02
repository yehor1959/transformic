let $ = jQuery;
$(document).ready(function(){	

	//banner slider
	$('#bannerSlider').slick({
		arrows: true,
		dots: true,
		fade: true
	});

	//burger + menu
	$('#headerBurger').click(function(){
		$('header').toggleClass('active');
		$('body').toggleClass('overflow-hidden');
		$(this).toggleClass('active');
	});

	//header btn
	$('.header-contacts .site-btn').click(()=>{
		$('#headerBurger').removeClass('active');
		$('header').removeClass('active');
		$('body').removeClass('overflow-hidden');
	});

	//production slider
	$('#productionSlider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		autoplaySpeed: 3000
	});

	//recomend slider
	$('#recomendSlider').slick({
		arrows: true,
		dots: false,
		slidesToShow: 5,
		responsive: [
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 4
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 2
		      }
		    },
		    {
		      breakpoint: 578,
		      settings: {
		        slidesToShow: 1
		      }
		    }
		  ]
	});
	
	//product thumbnails
	$('#thumbnails .gallery a').click(function(e){
		e.preventDefault();
		$('#thumbnails .gallery a').removeClass('active');
		$(this).addClass('active');

		let img = $(this).attr('href');
		$(this).parents('#thumbnails').find('.main img').attr('src', img);
	});
});


