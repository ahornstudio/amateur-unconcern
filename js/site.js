$(document).ready(function() { 
	sizeContent();
	centerVertical();
	
	$("#warning").backstretch("/photos/act2-part6-a.jpg");
	$("#act4-full").backstretch("/photos/act4-part1.jpg");	
	
	
	
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
			} );	
	
});

//Every resize of window
$(window).resize(function() {
	sizeContent;
	centerVertical();
});

//Dynamically assign height
function sizeContent() {
    //var newHeight = $("html").height() + "px";
	
	var newHeight = $(window).height();
	$("section.full-height").css("height", newHeight);

}

function centerVertical() {
	
	var halfitem = $('.vertical-center').height() / 2;
	
	var newmargin = $("html").height() / 2 - halfitem + "px";
	//var topmargin = fullheight - $('.vertical-center').height() + 'px';	
	
	console.log(halfitem);
	console.log(newmargin);
	
    $(".vertical-center").css("margin-top",newmargin);
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