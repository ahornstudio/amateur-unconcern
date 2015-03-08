$(document).ready(function() { 
	sizeContent();
	centerVertical();
	
	$("#warning").backstretch("/photos/act2-part6-a.jpg");
	$("#act4-full").backstretch("/photos/act4-part1.jpg");	
	
	
});

//Every resize of window
$(window).resize(function() {
	sizeContent;
	centerVertical();
});

//Dynamically assign height
function sizeContent() {
    var newHeight = $("html").height() + "px";
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