$(document).ready(function($) {

	$("#wtpTile").hover(function() {
		tileInfoState($(this), "We The PAC - take your vote beyond the ballot box.");
	}, function() {
		resetTile($(this));
	});

	function tileInfoState(tile, displayText) {
		tile.html('<span class="display-text">'+displayText+'</span>');
	};

	function resetTile(tile) {
		tile.html("");
	};

});