$(document).on('ready', function() {
    $(".regular").slick({
    	responsive: [
		    {
		      breakpoint: 769,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 481,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
		  ],
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1, 
        prevArrow: '<img class="previous-slide" src="img/left.png">',
  		nextArrow: '<img class="next-slide" src="img/right.png">'
    });
});