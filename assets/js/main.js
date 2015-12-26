$(document).ready(function() {
    $("#backtotop").click(function() {
	$("body,html").animate({scrollTop: 0}, 800);
	return false;
    });
    $("#menu").click(function() {
	$("#toggable-nav").slideToggle(500);
    });
});
