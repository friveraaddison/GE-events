$(document).ready(function() {

	var progressBulletsActive = false;
	var autoCloseSections = false;
	var openFirstSection = true;
	var initFadeIn = true;
	var toggleCloseSpeed = 300;
	var toggleOpenSpeed = 300;
	var initFadeSpeed = 150;
	var openFirstDelay = 800;
	var openFirstSpeed = 800;
	var toggleAll = 0;
	var sectionListItem = 0;
	var scrollToSpeed = 800
	var scrollToOffest = 180;
	var allSectionsOpen = false;
	var scrollToPosition = undefined;
	var body = $('body, html');


	//////// Toggle Sections ////////
	// Buttons //
	$('.form-element-toggle').click(function(){
		if($(this).parent().find('.form-element').css('display') == 'none'){
			if (autoCloseSections == true){
				closeAllSections();
			}
			$(this).addClass('form-element-open');
			$(this).parent().find('.form-element').slideDown(toggleOpenSpeed);
			scrollToPosition = $(this).parent();
			scrollToContent();
		} else {
			allSectionsOpen = false;
			$(this).removeClass('form-element-open');
			$(this).parent().find('.form-element').slideUp(toggleCloseSpeed);
		}
	});
	// Titles //
	/*$('.section-label').click(function(){
		if (allSectionsOpen == false){
			if($(this).parent().find('.form-element').css('display') == 'none'){
				if (autoCloseSections == true){
					closeAllSections();
				}
				$(this).parent().find('.form-element').slideDown(toggleOpenSpeed);
				$(this).parent().find('.form-element-toggle').addClass('form-element-open');
				scrollToPosition = $(this).parent();
				scrollToContent();
			} else {
				allSectionsOpen = false;
				$(this).parent().find('.form-element-toggle').removeClass('form-element-open');
				$(this).parent().find('.form-element').slideUp(toggleCloseSpeed);
			}
		} else {
			scrollToPosition = $(this).parent();
			scrollToContent();
		}
	});*/

	//////// Open / Close All Sections ////////
	$('.form-element-open-all').click(function(e){
		allSectionsOpen = true;
		autoCloseSections = false;
		$('.form-element-auto-toggle').removeClass('button-generic-active');
		$('div.form-element').slideDown(toggleOpenSpeed);
		$('.form-element-toggle').addClass('form-element-open');
		e.preventDefault();
	});	
	$('.form-element-close-all').click(function(e){
		allSectionsOpen = false;
		$('div.form-element').slideUp(toggleCloseSpeed);
		$('.form-element-toggle').removeClass('form-element-open');
		e.preventDefault();
	});
	function closeAllSections(){
		$('div.form-element').slideUp(toggleCloseSpeed);
		$('.form-element-toggle').removeClass('form-element-open');
	}


	//////// Auto Close Sections Toggle ////////
	$('.form-element-auto-toggle').click(function(e){
		if (autoCloseSections == true){
			autoCloseSections = false;
			$(this).removeClass('button-generic-active');
		} else {
			autoCloseSections = true;
			$(this).addClass('button-generic-active');
		}
		e.preventDefault();
	});	
	// Toggle All //
	/*$('.form-element-toggle-all').click(function(){
		if (toggleAll == 0){
			toggleAll = 1;
			$('div.form-element').slideDown(toggleOpenSpeed);
		} else {
			toggleAll = 0;
			$('div.form-element').slideUp(toggleCloseSpeed);
		}
	});*/



	//////// Scroll Page to Top Of Section ////////
	function scrollToContent(){
		if (autoCloseSections == false){
			console.log("scrollToPosition = " + scrollToPosition);
			$('html, body').animate({
				scrollTop: $(scrollToPosition).offset().top - scrollToOffest
			}, scrollToSpeed);
		};
	};



	//////// Progress Bullets ////////
	function showProgressBullets(){
		if (progressBulletsActive == true){
			$('.form-container').addClass('progress-bar-active');
			$('.form-section').addClass('form-section-blank');
		}
	};
	showProgressBullets();
	// Add class to change progress bullet or alert                                                     //
	// $('.form-container').addClass('progress-bar-active'); // Add progress bar bg                     //
	// $('.form-section').addClass('form-section-blank'); // Blank (Default) - Needs to be filled out   //
	// $('.form-section').addClass('form-section-done'); // Finished - Already filled out               //
	// $('.form-section').addClass('form-section-alert'); // Alert                                      //


	//////// Stop Right Nav Buttons from Scrolling ////////
	$(window).scroll(function(){
		if ($(window).scrollTop() > 200){
			$('.toggle-buttons-all').addClass('toggle-buttons-all-fixed');
		} else {
			$('.toggle-buttons-all').removeClass('toggle-buttons-all-fixed');
		}
	});


	//////// Open First Section ////////
	function openFirst(){
		$('.form-container .form-section:first').addClass('firstLoadSection');
		if (openFirstSection == true){
			$('.firstLoadSection .form-element').delay(openFirstDelay).slideDown(openFirstSpeed);
			$('.firstLoadSection .form-element-toggle').addClass('form-element-open');
		};
	};
	openFirst();


	//////// Fade In All Sections ////////
	function fadeInEachSection(){
		if (initFadeIn == true){
			$('.form-section').hide().each(function() {
				$(this).delay(sectionListItem).fadeIn(initFadeSpeed);
				sectionListItem += initFadeSpeed;
			});
		};
	};
	fadeInEachSection();



	//////// Buttons ////////
	$('a.button-generic').hover(function() {
			$(this).addClass('generic-hover');
			$(this).children().eq(0).addClass('generic-hover');
		}, function() {
			$(this).removeClass('generic-hover');
			$(this).children().eq(0).removeClass('generic-hover');
		}
	);


	/*$('a.button-generic').mouseup(function () {
		//$(this).parent().removeClass('generic-active');
		$(this).find('span').removeClass('generic-active');
	}).mousedown(function () {
		//$(this).parent().addClass('generic-active');
		$(this).find('span').addClass('generic-active');
	});*/



	//////// Style Form Elements ////////
	$('input.styled-checkbox').prettyCheckable({color: 'green'});


});