$(document).ready(function() {

	//var progressBulletsActive = true; // Set to true on pages that use left side progress bullets // Set on individual pages
	//var accordianNavActive = true; // Set to true to activate accordian menu // Set on individual pages
	var autoCloseSections = false; // Set to true to auto close accordian sections
	var openFirstSection = true; // Show First section
	var initFadeIn = true; // Fade in First section
	var toggleCloseSpeed = 300; // Accordian Section close speed
	var toggleOpenSpeed = 300; // Accordian Section open speed
	var initFadeSpeed = 150; // Accordian Section open speed for each consecutive section
	var openFirstDelay = 800; // Amount of delay before first section opens
	var openFirstSpeed = 800; // First section open speed
	var scrollToSpeed = 800 // Amount of time for selected content to slide to top of page
	var scrollToOffest = 230; // amount of distance from top of page sections slide to when opened
	var truncateLabels = true; // Set to true to shorten sub descriptions while sections are closed
	var allSectionsOpen = false; // Set to true to show all sections
	var toggleAll = 0;
	var sectionListItem = 0;
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
			$(this).parent().find('.section-label .element-label').removeClass('truncate-label');
			$(this).parent().find('.form-element').slideDown(toggleOpenSpeed);
			scrollToPosition = $(this).parent();
			scrollToContent();
		} else {
			allSectionsOpen = false;
			$(this).removeClass('form-element-open');
			$(this).parent().find('.section-label .element-label').addClass('truncate-label');
			$(this).parent().find('.form-element').slideUp(toggleCloseSpeed);
		}
	});
	// Titles // Click on titles to open sections 
	$('.section-description-link').click(function(e){
		if($(this).parent().parent().find('.form-element').css('display') == 'none'){
			if (autoCloseSections == true){
				closeAllSections();
			}
			$(this).parent().parent().find('.form-element-toggle').addClass('form-element-open');
			$(this).parent().parent().find('.section-label .element-label').removeClass('truncate-label');
			$(this).parent().parent().find('.form-element').slideDown(toggleOpenSpeed);
			scrollToPosition = $(this).parent();
			scrollToContent();
		} else {
			allSectionsOpen = false;
			$(this).parent().parent().find('.form-element-toggle').removeClass('form-element-open');
			$(this).parent().parent().find('.section-label .element-label').addClass('truncate-label');
			$(this).parent().parent().find('.form-element').slideUp(toggleCloseSpeed);
		}
		e.preventDefault();
	});
	// Click on checkboxes to open sections 
	$('.section-checkbox').click(function(){
		if (allSectionsOpen == false){
			if($(this).parent().parent().find('.form-element').css('display') == 'none'){
				if (autoCloseSections == true){
					closeAllSections();
				}
				$(this).parent().parent().find('.form-element').slideDown(toggleOpenSpeed);
				$(this).parent().parent().find('.form-element-toggle').addClass('form-element-open');
				scrollToPosition = $(this).parent().parent();
				scrollToContent();
			}
		} else {
			scrollToPosition = $(this).parent().parent();
			scrollToContent();
		}
	});

	//////// Open / Close All Sections ////////
	$('.form-element-open-all').click(function(e){
		allSectionsOpen = true;
		autoCloseSections = false;
		$('.form-element-auto-toggle').removeClass('button-generic-active');
		$('.section-label .element-label').removeClass('truncate-label');
		$('div.form-element').slideDown(toggleOpenSpeed);
		$('.form-element-toggle').addClass('form-element-open');
		e.preventDefault();
	});	
	$('.form-element-close-all').click(function(e){
		allSectionsOpen = false;
		$('.section-label .element-label').addClass('truncate-label');
		$('div.form-element').slideUp(toggleCloseSpeed);
		$('.form-element-toggle').removeClass('form-element-open');
		e.preventDefault();
	});
	function closeAllSections(){
		$('.section-label .element-label').addClass('truncate-label');
		$('div.form-element').slideUp(toggleCloseSpeed);
		$('.form-element-toggle').removeClass('form-element-open');
	}


	//////// Auto Close Sections Toggle ////////
	// Auto Close Accordian Functionality //
	$('.form-element-auto-toggle').parent().css('display', 'none');
	$('.form-element-auto-toggle').click(function(e){
		if (autoCloseSections == true){
			autoCloseSections = false;
			$('.toggle-buttons-all-top .form-element-auto-toggle, .toggle-buttons-all .form-element-auto-toggle').removeClass('button-generic-active');
		} else {
			autoCloseSections = true;
			$('.toggle-buttons-all-top .form-element-auto-toggle, .toggle-buttons-all .form-element-auto-toggle').addClass('button-generic-active');
		}
		e.preventDefault();
	});



	//////// Scroll Page to Top Of Selected Section ////////
	function scrollToContent(){
		if (autoCloseSections == false){
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
		if ($(window).scrollTop() > 225){
			//$('.toggle-buttons-all').fadeOut(150);
			//$('.toggle-buttons-all-top').fadeIn(300);
			$('.toggle-buttons-all').addClass('toggle-buttons-all-fixed');
		} else {
			//$('.toggle-buttons-all-top').fadeOut(150);
			//$('.toggle-buttons-all').fadeIn(300);
			$('.toggle-buttons-all').removeClass('toggle-buttons-all-fixed');
		}
	});


	//////// Accordian Navigation On/Off ////////
	function showAccordianNav(){
		if (accordianNavActive == true){
			$('div.form-element').css('display', 'none');
			$('toggle-buttons-all').css('display', 'block');
			$('form-element-toggle').css('display', 'block');
		} else {
			$('.form-element').css('display', 'block');
			$('.toggle-buttons-all').css('display', 'none');
			$('.form-element-toggle').css('display', 'none');
		}
		$('.section-label .element-label').addClass('truncate-label');
	};
	showAccordianNav();


	//////// Open First Section ////////
	function openFirst(){
		$('.form-container .form-section:first').addClass('firstLoadSection');
		$('.form-container .form-section:first .section-label .element-label').removeClass('truncate-label');
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


	//////// Form Elements ////////
	/* Select Boxes */
	var $csNormal = $('.styled-select').customSelect();
	var $csShort = $('.styled-select-small').customSelect({customClass:'customSelectSmall'});
	var $csWide = $('.styled-select-wide').customSelect({customClass:'customSelectWide'});
	var $csWide = $('.styled-select-x-wide').customSelect({customClass:'customSelectXWide'});
	/* Check Boxes */
	$('input.styled-checkbox').prettyCheckable({color: 'green'});
	$('.mandatory-checkbox').parent().children('a').addClass('mandatory-check');
	/* Radio Buttons */
	$('input.styled-radio').prettyCheckable({color: 'green'});
	$('.mandatory-radiobox').parent().children('a').addClass('mandatory-radio');
	/* Date Picker */
	// minDate = days before current date // maxDate = days after current date
	// example shows 2 days before, 1 month and 10 days after
	$('.datepicker').datepicker({ 
		minDate: -2, 
		maxDate: "+1M +10D", 
		showButtonPanel: true
	});
	//$('.datepicker').datepicker(); // No date range
	$('.datepickertrigger').click(function() {
		$('.datepicker').datepicker("show");
	});

	/* Toggle Slider Buttons */
	$('.toggle-radio-switch').click(function() {
		if ($(this).find('.radio-switch-slider').css('margin-left')=="0px"){
			$(this).find('.radio-switch-slider').animate({'margin-left': '34px'},'100');
		} else {
			$(this).find('.radio-switch-slider').animate({'margin-left': '0px'},'100');
		}
	});


	//////// Disabled and Mandatory Section ////////
	$('.thisSectionMandatory .section-label, .thisSectionMandatory .form-element-toggle').click(function() {
		$(this).parent().find('.form-element').eq(0).prepend($('.activity-mandatory'));
		if ($('.activity-mandatory').is(':hidden')) {
			$('.activity-mandatory').delay(250).fadeIn(200);
			$('.activity-mandatory').delay(2500).fadeOut(200);
		}
	});
	$('.thisSectionDisabled .section-label, .thisSectionDisabled .form-element-toggle').click(function() {
		$(this).parent().find('.form-element').eq(0).prepend($('.activity-full'));
		if ($('.activity-full').is(':hidden')) {
			$('.activity-full').delay(250).fadeIn(200);
			$('.activity-full').delay(2500).fadeOut(200);
		}
	});


	//////// Edit / Disable Tooltips ////////
	$('.button-edit').hover(function() {
		$(this).prepend($('.tooltip-edit'));
		$(this).find('.tooltip-edit').fadeIn(150);
		}, function() {
			$(this).find('.tooltip-edit').fadeOut(150);
		}
	);
	$('.button-remove').hover(function() {
		$(this).prepend($('.tooltip-remove'));
		$(this).find('.tooltip-remove').fadeIn(150);
		}, function() {
			$(this).find('.tooltip-remove').fadeOut(150);
		}
	);





	//////// Tables ////////
	$('tbody tr:odd').css('background-position', '0 -50px');
	// Sort arrows
	var sortArrow = 1;
	$('thead tr th').click(function(event){
		$('thead tr th').removeClass('boldThis');
		$(this).addClass('boldThis');
		$('thead tr th span').removeClass('sort-arrow-active sort-arrow-active-up');
		if (sortArrow == 1) {
			$(this).find('span').addClass('sort-arrow-active');
		} else if (sortArrow == 2) {
			$(this).find('span').addClass('sort-arrow-active-up');
			sortArrow = 0;
		}
		sortArrow ++;
		event.preventDefault();
	});
	// Swap remove button image
	var allTableBoxesChecked = 0;
	$('input[name=answer1],input[name=answer2],input[name=answer3],input[name=answer4],input[name=answer5]').on('change', function(){
		if ($(this).val() == 'yes') {
			allTableBoxesChecked ++;
			$(this).val('no');
			$('a.button-fancy-remove').addClass('button-fancy-remove-active');
		} else {
			allTableBoxesChecked --;
			$(this).val('yes');
			if (allTableBoxesChecked == 0) {
				$('a.button-fancy-remove').removeClass('button-fancy-remove-active');
			}
		}
	});
	// Alternate rows //
	$('.table-container tbody tr:odd').addClass('table-alt-bg');


	//////// Popup Boxes ////////
	$('.modal-button').colorbox({
		iframe:true,
		transition:"none",
		innerWidth:420,
		innerHeight:440
	});
	$('.modal-button2').colorbox({
		iframe:true,
		transition:"none",
		innerWidth:950,
		innerHeight:"90%"
	});


	//////// Error Fields ////////
	$('.testSubmitButton').click(function(event){
		$('.styled-input').addClass('error-input');
		$('.styled-textarea').addClass('error-textarea');
		$('.styled-select-small').addClass('customSelectSmallAlert');
		$('.styled-select').addClass('customSelectAlert');
		$('.form-section').addClass('form-section-alert');
		$('.error-required-notice').css('display', 'block');
		event.preventDefault();
	});


	//////// Sample Grey Boxes ////////
	$('.loadGreyBox').click(function(event){
		$(this).parent().fadeOut(200);
		$(this).parent().parent().find('.element-grey-box').delay(200).fadeIn(300);
		event.preventDefault();
	});
	$('.closeGreyBox').click(function(event){
		$(this).parent().parent().parent().fadeOut(200);
		$(this).parent().parent().parent().parent().find('.attendee-button-icons').delay(200).fadeIn(300);
		event.preventDefault();
	});

});