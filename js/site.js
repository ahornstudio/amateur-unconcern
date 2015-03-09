$(document).ready(function() { 
	sizeContent();
	centerVertical();
	
	$("#warning").backstretch("/photos/act2-part6-a.jpg");
	$("#act4-full").backstretch("/photos/act4-part1.jpg");	
	
	
//	$('picture.hascaption').captionjs({
//	       'class_name'      : 'captionjs', // Class name for each <figure>
//	       'schema'          : true,        // Use schema.org markup (i.e., itemtype, itemprop)
//	       'mode'            : 'default',   // default | stacked | animated | hide
//	       'debug_mode'      : false,       // Output debug info to the JS console
//	       'force_dimensions': true,        // Force the dimensions in case they cannot be detected (e.g., image is not yet painted to viewport)
//	       'is_responsive'   : true,       // Ensure the figure and image change size when in responsive layout. Requires a container to control responsiveness!
//	       'inherit_styles'  : false        // Have the caption.js container inherit box-model properties from the original image
//	   });	
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