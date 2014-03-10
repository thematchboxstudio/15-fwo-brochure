// Browser detection for when you get desparate. A measure of last resort.
// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// Smooth Scrolling
		$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top - 84
	            }, 750);
	            return false;
	        }
	    }
		}); // Ending Smooth Scrolling function
	
	
	
		// Functions relative to scroll position
		$(window).scroll(function() {

			// Variables to make things easier
				var $win = $(window); // Simple shortcut
				var windowHeight = $win.height(); // Detects height of browser window
			    var scrolled = $(this).scrollTop(); // Detect position of scroll

		    // Entering Header
			    if (scrolled >= 0 && scrolled <= 710) { 
			    	$('nav ul li ul.nav-collapse li a.navlink1').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink1').removeClass("active");
			    } 

			// Entering #dogdays
			    if (scrolled >= 711 && scrolled <= 1918) { 
			    	$('nav ul li ul.nav-collapse li a.navlink2').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink2').removeClass("active");
			    }

			// Entering #traviata
			    if (scrolled >= 1919 && scrolled <= 3126) { 
			    	$('nav ul li ul.nav-collapse li a.navlink3').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink3').removeClass("active");
			    } 

			// Entering #hamlet
			    if (scrolled >= 3127 && scrolled <= 4334) { 
			    	$('nav ul li ul.nav-collapse li a.navlink4').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink4').removeClass("active");
			    } 

			// Entering #tickets
			    if (scrolled >= 4335 && scrolled <= 9999) { 
			    	$('nav ul li ul.nav-collapse li a.navlink6').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink6').removeClass("active");
			    } 

		 	
		 	
		    
		}); // Ending Functions relative to scroll position
	
	});
	
	
	/* optional triggers
	
	$(window).load(function() {
		
	});
	
	$(window).resize(function() {
		
	});
	
	*/

})(window.jQuery);