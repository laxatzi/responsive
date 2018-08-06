$(document).ready(function() {
	
    $('.section-features--js').waypoint(function(direction) {
        if (direction == "down") {
	   $('nav').addClass('sticky-navigation');
			
	} else {
	   $('nav').removeClass('sticky-navigation');
	}
    }, {
       offset: '25%' 
    });
	
 /*    THIS IS THE PLUGIN DOC GUIDE
var waypoints = $('#handler-first').waypoint(function(direction) {
   notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})	 */
	
/* Scrolling */
   $('.scroll-to-plans--js').click(function() {
      $('html, body').animate( { scrollTop:$('.section-plans--js').offset().top }, 1000);
});   /* End of scrolling to plans script */
			         
   $('.scroll-to-features--js').click(function() {
      $('html, body').animate( {scrollTop:$('.section-features--js').offset().top}, 1000);
});    /* End of scrolling to features script */
			
/* Scrolling through menu */		
		
   $('.delivery--js').click(function() {
      $('html, body').animate( {scrollTop:$('.section-gallery--js').offset().top}, 1000);
});   /* End of scrolling to gallery script */
			
   $('.howTo--js').click(function() {
      $('html, body').animate( {scrollTop:$('.section-steps--js').offset().top}, 1000);
});   /* End of scrolling to how to/steps script */
			
   $('.cities--js').click(function() {
      $('html, body').animate( {scrollTop:$('.section-cities--js').offset().top}, 1000);
});   /* End of scrolling to cities script */
	
   $('.contact--js').click(function() {
      $('html, body').animate( {scrollTop:$('.section-contactform--js').offset().top}, 1000);
});   /* End of scrolling to contactForm script */
		
/* Toggle */
   $('.hamburger--js').click(function() {
       var icon =  $('.hamburger--js i');
       $('.main-navigation--js').toggleClass('hideMe'); 
				 
	if(icon.hasClass('fa-bars')) {
	    icon.addClass('fa-times');
	    icon.removeClass('fa-bars');
	 } else {
	    icon.removeClass('fa-times');
	    icon.addClass('fa-bars');
	}
    });
	
});<!-- End ready -->
