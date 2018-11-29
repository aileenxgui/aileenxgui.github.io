$(document).ready(function()  {

	$("a").click(function() {
		$(".buttons").animate({height: "300px"});
	})

	IM TRYIHNG TO MAKE THE BUTTONS BIGGER WHEN YOU CLICK THEM

	$(".paragraphs").html("p").slideUp('slow');
	TRYING TO MAKE TEXT SLIDE UP 

	$(".social").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=10%', width: '+=10%'});
}
function returnToOriginalSize() {
    $(this).css({height: "", width: ""});
}


});


