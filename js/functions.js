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
		$('.nav-collapse a[href*=#]:not([href=#]), #go-to-top a[href*=#]:not([href=#]), .scroll_down a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 750);
	            return false;
	        }
	    }

	    

		}); // Ending Smooth Scrolling function

		// Hide Header on on scroll down
		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('nav').outerHeight();

		$(window).scroll(function(event){
		    didScroll = true;
		});

		setInterval(function() {
		    if (didScroll) {
		        hasScrolled();
		        didScroll = false;
		    }
		}, 250);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    
		    // Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		        return;
		    
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > lastScrollTop && st > navbarHeight){
		        // Scroll Down
		        $('nav').removeClass('nav-down').addClass('nav-up');
		    } else {
		        // Scroll Up
		        if(st + $(window).height() < $(document).height()) {
		            $('nav').removeClass('nav-up').addClass('nav-down');
		        }
		    }
		    
		    lastScrollTop = st;
		}



		// Stop Youtube videos when switching frames
		
		
		
	
		// Functions relative to scroll position
		$(window).scroll(function() {

			// Variables to make things easier
				var $win = $(window); // Simple shortcut
				var windowHeight = $win.height(); // Detects height of browser window
			    var scrolled = $(this).scrollTop(); // Detect position of scroll

		    // Entering Header
			    if (scrolled >= 0 && scrolled <= 713) { 
			    	$('nav ul li ul.nav-collapse li a.navlink1').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink1').removeClass("active");
			    } 

			// Entering #dogdays
			    if (scrolled >= 714 && scrolled <= 1921) { 
			    	$('nav ul li ul.nav-collapse li a.navlink2').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink2').removeClass("active");
			    }

			// Entering #traviata
			    if (scrolled >= 1922 && scrolled <= 3129) { 
			    	$('nav ul li ul.nav-collapse li a.navlink3').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink3').removeClass("active");
			    } 

			// Entering #hamlet
			    if (scrolled >= 3130 && scrolled <= 4337) { 
			    	$('nav ul li ul.nav-collapse li a.navlink4').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink4').removeClass("active");
			    } 

			// Entering #frontiers
			    if (scrolled >= 4338 && scrolled <= 5147) { 
			    	$('nav ul li ul.nav-collapse li a.navlink5').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink5').removeClass("active");
			    }

			// Entering #tickets
			    if (scrolled >= 5148 && scrolled <= 5855) { 
			    	$('nav ul li ul.nav-collapse li a.navlink6').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink6').removeClass("active");
			    } 

			// Entering #festival_trailers
			    if (scrolled >= 5856 && scrolled <= 6105) { 
			    	$('nav ul li ul.nav-collapse li a.navlink7').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");
			    } 

			// Entering #festival_info
			    if ($win.height() + $win.scrollTop()
			        == $(document).height()){ 
			    	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");
			    	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
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