jQuery(function($) {
	"use strict";

	// Responsiv menu

	if ($('.fa-bars').lenght) {
		$('.fa-bars').on('click', function(){
			$('.wrapper .header nav').show();
		});
	}

	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		speed: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		
	});
})


