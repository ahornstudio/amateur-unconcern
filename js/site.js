$(document).ready(function() { 
	sizeContent();
	centerVertical();
	
	function isTouchDevice(){
	    //return typeof window.ontouchstart !== 'undefined';
	}
	
	//$("#warning").backstretch("/photos/act2-driving.jpg");
	$("#act4-full").backstretch("/photos/act4-part1.jpg");	

	// We bind a new event to our link
	$("a[href*=twitter]").click(function(e){
		var current_width = $(window).width();	
	  if(current_width > 480) {	
		e.preventDefault();
		var loc = $(this).attr('href');
		var title  = encodeURIComponent($(this).attr('title'));
		window.open(loc + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
		}	 
	});

	/*
	if ($('.characters').hasClass('active_section')) {
		console.log('yes');
	} else {
		console.log('No');	
	}*/
	
	// We bind a new event to our link
	$("a[href*=facebook]").click(function(e){				 
	  e.preventDefault();		 
	  var loc = $(this).attr('href');		 
	  var title  = encodeURIComponent($(this).attr('title'));
	  window.open(loc + '&text=' + title + '&', 'twitterwindow', 'height=450, width=550, top='+($(window).height()/2 - 225) +', left='+$(window).width()/2 +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
	 
	});
				
	$(window).keydown(function(e) {
		    
	    var $targetElement;
	    //down
	    if (e.keyCode == 40) {
	    	e.preventDefault(); //prevent default arrow key behavior
	    	
	        $targetElement = $('.active_section').next('section');
	    }
	    //up
	    else if (e.keyCode == 38) {
	    	e.preventDefault(); //prevent default arrow key behavior
	    	
	        $targetElement = $('.active_section').prev('section');
	    } else {
	    
	    return;
	    
	    }
	    
	    $('.active_section').removeClass('active_section');
	    $targetElement.addClass('active_section');
	
	  	 $('html, body').clearQueue().animate({scrollTop: $targetElement.offset().top }, 1200);
	});
		
		
	$("section").each(function() {
		$(this).mouseenter(function() {
			$(".active_section").removeClass("active_section");
			$(this).addClass("active_section");																				
		});
		
		$(this).on("touchstart click", function() {
			moveToNextSlide();
		});
	});	
			
});

//Every resize of window
$(window).resize(function() {
	sizeContent;
	centerVertical();
});

//Dynamically assign height
function sizeContent() {

	var current_width = $(window).width();

    //var newHeight = $("html").height() + "px";	
	var newHeight = $(window).height();
	
	if(current_width > 480) {	
		$("section.full-height").css("height", newHeight);
	}
}

function centerVertical() {
	
	var halfitem = $('.vertical-center').height() / 2;
	
	var newmargin = $("html").height() / 2 - halfitem + "px";
	//var topmargin = fullheight - $('.vertical-center').height() + 'px';	
	var current_width = $(window).width();	
	
	if(current_width > 480) {	
    	$(".vertical-center").css("margin-top",newmargin);
    }
}

var moveToNextSlide = function() {	
    var $targetElement;
   
    $targetElement = $('.active_section').next('section');
    
    if (!$targetElement.length) {return;}
    $('.active_section').removeClass('active_section');
    $('html, body').clearQueue().animate({scrollTop: $targetElement.offset().top }, 1200);
}

var moveToPrevSlide = function() {
    var $targetElement;
    $targetElement = $('.active_section').prev('section');
    
    if (!$targetElement.length) {return;}
    $('.active_section').removeClass('active_section');
    $('html, body').clearQueue().animate({scrollTop: $targetElement.offset().top }, 1200);	
}