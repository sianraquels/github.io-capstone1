$('.btn-view-menu').click(function() {

	$('.pager').addClass("pager2");

	setTimeout (function() {
		
	$('.page-left').addClass("page-left2");

}, 300)
})

$('.btn-exit').click(function() {

	$('.page-left').removeClass("page-left2");
	setTimeout (function() {
		
	$('.pager').removeClass("pager2");
	

}, 300)
})

