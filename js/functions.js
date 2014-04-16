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

		        if ($('body').hasClass('large')) {
		        	$('html,body').animate({
		            	scrollTop: target.offset().top
		            }, 1500);
		            return false;
		        } // end if


		        // Right now this breaks the 'go to top' smooth scrolling on mobile
		        else if ($('body').hasClass('small') || $('body').hasClass('mediumone') || $('body').hasClass('mediumtwo') || $('body').hasClass('mediumthree')) {

					var target_pos = (target.length > 0) ? target.offset().top : 0;
					var fhdr = $('.toggle');
					var fhdr_height = (fhdr.length > 0) ? fhdr.outerHeight() : 0;

					target_pos -= fhdr_height;
					if (target_pos > 0) {
					   $('html,body').animate({
					      scrollTop: target_pos
					   }, 1000);
					   return false;
					} // end if

		        } // end else if

		    } // end if


		}); // Ending Smooth Scrolling function





		// Stop Youtube videos when switching frames
		$('a#trailer-close').click(function(){

			// Remove src of iframe to stop videos
			document.getElementById( 'trailer-video1' ).setAttribute( 'src', '' );
			document.getElementById( 'trailer-video2' ).setAttribute( 'src', '' );
			document.getElementById( 'trailer-video3' ).setAttribute( 'src', '' );

			// resets the src of videos so they run again
			document.getElementById( 'trailer-video1' ).setAttribute( 'src', '//www.youtube.com/embed/_POGKOhwKkk' );
			document.getElementById( 'trailer-video2' ).setAttribute( 'src', '//www.youtube.com/embed/MPv2AC_2czs' );
			document.getElementById( 'trailer-video3' ).setAttribute( 'src', '//player.vimeo.com/video/53783631' );

		});





		// Functions relative to scroll position
		$(window).scroll($.throttle(50,function() {

			// Variables to make things easier
				var $win = $(window); // Simple shortcut
				var windowHeight = $win.height(); // Detects height of browser window
			    var scrolled = $(this).scrollTop(); // Detect position of scroll

			// I'm sure there's a better way to do this, but I don't know it
		   if ($('body').hasClass('small')) {
		    // Entering Header
			    if (scrolled >= 0 && scrolled <= 1033) {
			    	$('nav ul li ul.nav-collapse li a.navlink1').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink1').removeClass("active");
			    }

			// Entering #dogdays
			    if (scrolled >= 1034 && scrolled <= 2013) {
			    	$('nav ul li ul.nav-collapse li a.navlink2').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink2').removeClass("active");
			    }

			// Entering #traviata
			    if (scrolled >= 2014 && scrolled <= 2993) {
			    	$('nav ul li ul.nav-collapse li a.navlink3').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink3').removeClass("active");
			    }

			// Entering #hamlet
			    if (scrolled >= 2994 && scrolled <= 3473) {
			    	$('nav ul li ul.nav-collapse li a.navlink4').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink4').removeClass("active");
			    }

			// Entering #frontiers
			    if (scrolled >= 3474 && scrolled <= 4283) {
			    	$('nav ul li ul.nav-collapse li a.navlink5').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink5').removeClass("active");
			    }

			// Entering #tickets
			    if (scrolled >= 4284 && scrolled <= 4851) {
			    	$('nav ul li ul.nav-collapse li a.navlink6').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink6').removeClass("active");
			    }

			// Entering #festival_trailers
			    if (scrolled >= 4852 && scrolled <= 5351) {
			    	$('nav ul li ul.nav-collapse li a.navlink7').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");
			    }

			// Entering #festival_info
			    if (scrolled >= 5352 && scrolled <= 9999 ) {
			    	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			    }

			// // Entering #festival_info
			//     if ($win.height() + $win.scrollTop()
			//         == $(document).height()){
			//     	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");
			//     	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");

			//     } else {
			//     	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			//     }

			}// IF SMALL

			// I'm sure there's a better way to do this, but I don't know it
		   if ($('body').hasClass('mediumone')) {
		    // Entering Header
			    if (scrolled >= 0 && scrolled <= 945) {
			    	$('nav ul li ul.nav-collapse li a.navlink1').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink1').removeClass("active");
			    }

			// Entering #dogdays
			    if (scrolled >= 946 && scrolled <= 2013) {
			    	$('nav ul li ul.nav-collapse li a.navlink2').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink2').removeClass("active");
			    }

			// Entering #traviata
			    if (scrolled >= 2014 && scrolled <= 2993) {
			    	$('nav ul li ul.nav-collapse li a.navlink3').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink3').removeClass("active");
			    }

			// Entering #hamlet
			    if (scrolled >= 2994 && scrolled <= 3473) {
			    	$('nav ul li ul.nav-collapse li a.navlink4').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink4').removeClass("active");
			    }

			// Entering #frontiers
			    if (scrolled >= 3474 && scrolled <= 4283) {
			    	$('nav ul li ul.nav-collapse li a.navlink5').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink5').removeClass("active");
			    }

			// Entering #tickets
			    if (scrolled >= 4284 && scrolled <= 4851) {
			    	$('nav ul li ul.nav-collapse li a.navlink6').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink6').removeClass("active");
			    }

			// Entering #festival_trailers
			    if (scrolled >= 4852 && scrolled <= 5351) {
			    	$('nav ul li ul.nav-collapse li a.navlink7').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");
			    }

			// Entering #festival_info
			    if (scrolled >= 5352 && scrolled <= 9999 ) {
			    	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			    }

			// // Entering #festival_info
			//     if ($win.height() + $win.scrollTop()
			//         == $(document).height()){
			//     	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");
			//     	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");

			//     } else {
			//     	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			//     }

			}// IF MEDIUMONE

			// I'm sure there's a better way to do this, but I don't know it
		   if ($('body').hasClass('mediumtwo')) {
		    // Entering Header
			    if (scrolled >= 0 && scrolled <= 1033) {
			    	$('nav ul li ul.nav-collapse li a.navlink1').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink1').removeClass("active");
			    }

			// Entering #dogdays
			    if (scrolled >= 1034 && scrolled <= 2013) {
			    	$('nav ul li ul.nav-collapse li a.navlink2').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink2').removeClass("active");
			    }

			// Entering #traviata
			    if (scrolled >= 2014 && scrolled <= 2993) {
			    	$('nav ul li ul.nav-collapse li a.navlink3').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink3').removeClass("active");
			    }

			// Entering #hamlet
			    if (scrolled >= 2994 && scrolled <= 3473) {
			    	$('nav ul li ul.nav-collapse li a.navlink4').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink4').removeClass("active");
			    }

			// Entering #frontiers
			    if (scrolled >= 3474 && scrolled <= 4283) {
			    	$('nav ul li ul.nav-collapse li a.navlink5').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink5').removeClass("active");
			    }

			// Entering #tickets
			    if (scrolled >= 4284 && scrolled <= 4851) {
			    	$('nav ul li ul.nav-collapse li a.navlink6').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink6').removeClass("active");
			    }

			// Entering #festival_trailers
			    if (scrolled >= 4852 && scrolled <= 5351) {
			    	$('nav ul li ul.nav-collapse li a.navlink7').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");
			    }

			// Entering #festival_info
			    if (scrolled >= 5352 && scrolled <= 9999 ) {
			    	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			    }

			// // Entering #festival_info
			//     if ($win.height() + $win.scrollTop()
			//         == $(document).height()){
			//     	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");
			//     	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");

			//     } else {
			//     	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			//     }

			}// IF MEDIUMTWO


			// I'm sure there's a better way to do this, but I don't know it
		   if ($('body').hasClass('mediumthree')) {
		    // Entering Header
			    if (scrolled >= 0 && scrolled <= 1033) {
			    	$('nav ul li ul.nav-collapse li a.navlink1').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink1').removeClass("active");
			    }

			// Entering #dogdays
			    if (scrolled >= 1034 && scrolled <= 2013) {
			    	$('nav ul li ul.nav-collapse li a.navlink2').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink2').removeClass("active");
			    }

			// Entering #traviata
			    if (scrolled >= 2014 && scrolled <= 2993) {
			    	$('nav ul li ul.nav-collapse li a.navlink3').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink3').removeClass("active");
			    }

			// Entering #hamlet
			    if (scrolled >= 2994 && scrolled <= 3473) {
			    	$('nav ul li ul.nav-collapse li a.navlink4').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink4').removeClass("active");
			    }

			// Entering #frontiers
			    if (scrolled >= 3474 && scrolled <= 4283) {
			    	$('nav ul li ul.nav-collapse li a.navlink5').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink5').removeClass("active");
			    }

			// Entering #tickets
			    if (scrolled >= 4284 && scrolled <= 4851) {
			    	$('nav ul li ul.nav-collapse li a.navlink6').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink6').removeClass("active");
			    }

			// Entering #festival_trailers
			    if (scrolled >= 4852 && scrolled <= 5351) {
			    	$('nav ul li ul.nav-collapse li a.navlink7').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");
			    }

			// Entering #festival_info
			    if (scrolled >= 5352 && scrolled <= 9999 ) {
			    	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			    }

			// // Entering #festival_info
			//     if ($win.height() + $win.scrollTop()
			//         == $(document).height()){
			//     	$('nav ul li ul.nav-collapse li a.navlink8').addClass("active");
			//     	$('nav ul li ul.nav-collapse li a.navlink7').removeClass("active");

			//     } else {
			//     	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			//     }

			}// IF MEDIUMTHREE



		   else if ($('body').hasClass('large')) {
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
			    	$('footer#festival_info').addClass("active");

			    } else {
			    	$('nav ul li ul.nav-collapse li a.navlink8').removeClass("active");
			    	$('footer#festival_info').removeClass("active");
			    }



			    if (scrolled >= 3){
					$('header h1.deep').addClass("active");
				} else {
					$('header h1.deep').removeClass("active");
				}

				if (scrolled >= 370){
					$('header div.container div.scroll_down').addClass("active");
				} else {
					$('header div.container div.scroll_down').removeClass("active");
				}

				if (scrolled >= 5048){
					$('article#tickets div.container h1.deep').addClass("active");
				} else {
					$('article#tickets div.container h1.deep').removeClass("active");
				}

			}// IF LARGE

			// Parallax
			//Dog Days

				var copter = -((scrolled-799)*.1) + '%';
				var dogman = ((-(scrolled-799)*.2)) + 'px';
				var leftlandscape = ((scrolled)*.00015) + .85;



				if (scrolled <= 1214) {

					//$('div.px-container #px-dogdays-leftlandscape,div.px-container #px-dogdays-rightlandscape').css('transform', 'scale(' + leftlandscape +')');
					//('height',(708+((scrolled-799)*.05)) + 'px');

					$('div.px-container #px-dogdays-helicopter').css('transform', 'translate3d(' + copter +', 0, 0)');
					//.css('left',(70+(-(scrolled-799)*.0125)) + '%');

					$('div.px-container #px-dogdays-man').css('height',(((scrolled-799)*.125)+708) + 'px');
					$('div.px-container #px-dogdays-man').css('transform', 'translate3d(0,' + dogman +', 0)');
					//.css('top',(100+(-(scrolled-799)*.075)) + 'px');
				}

			// La Traviata
				var girl = -(scrolled-1999) * .25 + 'px';
				var hand = (scrolled-1999) * .25 + 'px';
				var handright = -(scrolled-1999) * .25 + 'px';

				if (scrolled <= 2422) {
					//$('div.px-container #px-traviata-girl').css('transform','translateX(' + (-(scrolled-2099)*.125) + 'px)');
					//$('div.px-container #px-traviata-girl').css('transform','translateY(' + (-(scrolled-2099)*.175) + 'px)');

					$('div.px-container #px-traviata-girl').css('transform', 'translate3d(0,' + girl +', 0)');
					//('bottom',(-220+((scrolled-1999)*.25)) + 'px');
						//
						//
					$('div.px-container #px-traviata-girl').css('height',(((scrolled-1999)*.125)+700) + 'px');
					//$('div.px-container #px-traviata-horns').css('transform','translateX(' + (-(scrolled-2099)*.05) + 'px)');

					//$('div.px-container #px-traviata-middle').css('transform','translateX(' + ((scrolled-2099)*.05) + 'px)');
					//$('div.px-container #px-traviata-musician').css('transform','translateX(' + (-(scrolled-2099)*.03) + 'px)');

					//$('div.px-container #px-traviata-leftcurtain,div.px-container #px-traviata-rightcurtain').css('transform','scale(' + ((scrolled-2099)*.5) + ',' + ((scrolled-2099)*.5) + ')');
					//$('div.px-container #px-traviata-leftcurtain,div.px-container #px-traviata-rightcurtain').css('transform','translateY(' + (-(scrolled-2099)*.05) + 'px)');

					//$('div.px-container #px-traviata-butterfly').css('transform','translate(' + ((scrolled-2099)*.5) + 'px,' + (-(scrolled-2099)*.25) + 'px)');

					//$('div.px-container #px-traviata-lefthand').css('transform', 'rotate(' + (25+(-(scrolled-2099)*.05)) + 'deg)');
					//$('div.px-container #px-traviata-righthand').css('transform', 'rotate(' + (-25+((scrolled-2099)*.05)) + 'deg)');

					//$('div.px-container #px-traviata-lefthand').css('transform', 'translateX(' + ((scrolled-2099)*.25) + 'px)');
					//$('div.px-container #px-traviata-righthand').css('transform', 'translateX(' + (-(scrolled-2099)*.25) + 'px)');

					$('div.px-container #px-traviata-lefthand').css('transform', 'translate3d('+ hand +',0, 0)');
					//('left',(-160+((scrolled-1999)*.25)) + 'px');
					$('div.px-container #px-traviata-righthand').css('transform', 'translate3d('+ handright +',0, 0)');
					//('right',(-160+((scrolled-1999)*.25)) + 'px');
				}

			//Hamlet
				var skull = -(scrolled-3199) * .2 + 'px';
				var skulltop = -(scrolled-3199) * .0625 + 'px';
				var driptop = -(scrolled-3199) * .125 + 'px';
				var splatter = (((scrolled-3199)*.125)+111) + 'px';

				if (scrolled <= 4338) {
					$('div.px-container #px-hamlet-main').css('transform', 'translate3d( 0, '+ skull +', 0)');
					//$('div.px-container #px-hamlet-splatter').css('transform', 'translate3d( 0, '+ -(scrolled-3199) * .35 + 'px' +', 0) rotate(' + (scrolled-3199) * .05 + 'deg)');
					$('div.px-container #px-hamlet-drips').css('transform', 'translate3d( 0, '+ -(scrolled-3199) * .075 + 'px' +', 0)');


					$('div.px-container #px-hamlet-main-top').css('transform', 'translate3d( 0, '+ skulltop +', 0)');
					$('div.px-container #px-hamlet-drips-top').css('transform', 'translate3d( 0, '+ (scrolled-3199) * .1 + 'px' +', 0)');

					//$('div.px-container #px-hamlet-splatter').css('height', splatter );
						//('top',(60+(-(scrolled-3199)*.2)) + 'px');
					//$('div.px-container #px-hamlet-main').css('background-position','0px ' + (-((scrolled-3199)*.65)) + 'px');

					//$('div.px-container #px-hamlet-main').css('background-size', (708+((scrolled-3199)*.7)) + 'px ' + (708+((scrolled-3199)*.7)) + 'px');

					$('div.px-container #px-hamlet-main-bottom').css('transform', 'rotate(' + (-155+((scrolled-3299)*.0125)) + 'deg)');
					//$('div.px-container #px-hamlet-main-top').css('transform', 'rotate(' + ((scrolled-3299)*.0125) + 'deg)');
				}



		})); // Ending Functions relative to scroll position

	});


	/* optional triggers

	$(window).load(function() {

	});

	$(window).resize(function() {

	});

	*/





})(window.jQuery);



/* onMediaQuery | http://springload.co.nz/love-the-web/ | Released under the MIT license. | Fri 21 June, 2013 */
(function(b,a){"function"===typeof define&&define.amd?define(function(){return b.MQ=a(b,b.MQ||{})}):b.MQ=a(b,b.MQ||{})})(this,function(b){b.init=function(a){this.callbacks=[];this.new_context=this.context="";if("undefined"!==typeof a)for(i=0;i<a.length;i++)this.addQuery(a[i]);this.addEvent(window,"resize",b.listenForChange,b);this.listenForChange()};b.listenForChange=function(){var a;document.documentElement.currentStyle&&(a=document.documentElement.currentStyle.fontFamily);window.getComputedStyle&&
(a=window.getComputedStyle(document.documentElement,null).getPropertyValue("font-family"));null!==a&&(a=a.replace(/['",]/g,""),a!==this.context&&(this.new_context=a,this.triggerCallbacks(this.context,"unmatch"),this.triggerCallbacks(this.new_context,"match")),this.context=this.new_context)};b.addQuery=function(a){if(null!==a&&void 0!==a)return this.callbacks.push(a),"string"==typeof a.context&&(a.context=[a.context]),"boolean"!==typeof a.call_for_each_context&&(a.call_for_each_context=!0),""!==this.context&&
this._inArray(this.context,a.context)&&a.match(),this.callbacks[this.callbacks.length-1]};b.removeQuery=function(a){if(null!==a&&void 0!==a)for(var e=-1;-1<(e=b._indexOf(a,this.callbacks));)this.callbacks.splice(e,1)};b.triggerCallbacks=function(a,b){var c,d;for(c=0;c<this.callbacks.length;c++)!1===this.callbacks[c].call_for_each_context&&("match"===b&&this._inArray(this.context,this.callbacks[c].context)||"unmatch"===b&&this._inArray(this.new_context,this.callbacks[c].context))||(d=this.callbacks[c][b],
this._inArray(a,this.callbacks[c].context)&&void 0!==d&&d())};b.addEvent=function(a,b,c,d){null!==a&&void 0!==a&&(a.addEventListener?a.addEventListener(b,function(){c.call(d)},!1):a.attachEvent?a.attachEvent("on"+b,function(){c.call(d)}):a["on"+b]=function(){c.call(d)})};b.getPreviousContext=function(){return this.context};b.getContext=function(){return this.new_context};b._inArray=function(a,b){for(var c=b.length,d=0;d<c;d++)if(b[d]==a)return!0;return!1};b._indexOf=function(a,b,c){var d;if(b){if(b.indexOf)return b.indexOf(a,
c);d=b.length;for(c=c?0>c?Math.max(0,d+c):c:0;c<d;c++)if(c in b&&b[c]===a)return c}return-1};return b});
var queries = [
    {
        context: 'mobile',
        match: function() {
        	jQuery('body').addClass('small');
            //console.log('Mobile callback. Maybe hook up some tel: numbers?');
            // Your mobile specific logic can go here.
        },
        unmatch: function() {
        	jQuery('body').removeClass('small');

            // We're leaving mobile.
        }
    },
    {
        context: 'skinnyone',
        match: function() {
        	jQuery('body').addClass('mediumone');
            //console.log('skinny callback! Swap the class on the body element.');
            // Your tablet specific logic can go here.
        },
        unmatch: function() {
        	jQuery('body').removeClass('mediumone');
            //console.log('leaving skinny context!');
        }

    },
    {
        context: 'skinnytwo',
        match: function() {
        	jQuery('body').addClass('mediumtwo');
            //console.log('skinny callback! Swap the class on the body element.');
            // Your tablet specific logic can go here.
        },
        unmatch: function() {
        	jQuery('body').removeClass('mediumtwo');
            //console.log('leaving skinny context!');
        }

    },
     {
        context: 'skinnythree',
        match: function() {
        	jQuery('body').addClass('mediumthree');
            //console.log('skinny callback! Swap the class on the body element.');
            // Your tablet specific logic can go here.
        },
        unmatch: function() {
        	jQuery('body').removeClass('mediumthree');
            //console.log('leaving skinny context!');
        }

    },

    {
        context: 'desktop',
        match: function() {
        	jQuery('body').addClass('large');
            //console.log('wide-screen callback woohoo! Load some heavy desktop JS badddness.');
            // your desktop specific logic can go here.
        },
        unmatch: function() {
        	jQuery('body').removeClass('large');
        }
    }
];
// Go!
MQ.init(queries);


/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);