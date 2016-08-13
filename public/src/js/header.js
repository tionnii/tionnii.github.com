$('#search').on('mouseenter', function() {
	var box_search = $('#search div');
	TweenMax.to(box_search, 0.5, {right:0, ease:Power2.easeOut, onComplete:function() {
		box_search.html('<span><input type="text" name="search" /></span>');
		$('#search').find('input').focus();
	}});
});

$('#search').on('mouseleave', function() {
	var box_search = $('#search div');
	box_search.html('');
	TweenMax.to(box_search, 0.5, {right:-240, ease:Power2.easeOut});
});