function bindInfoState(target, message) {
	$(target).hover(function() {
		tileInfoState($(target), message);
	}, function() {
		resetTile($(target));
	});
};

function tileInfoState(tile, displayText) {
	tile.html('<span class="display-text">'+displayText+'</span>');
};

function resetTile(tile) {
	tile.html("");
};

$(document).ready(function($) {

	bindInfoState("#wtpTile", "We The PAC - take your vote beyond the ballot box.");
	bindInfoState("#rockshoeTile", "Rockshoe.me - shop for rock climbing shoes with fitment reviews.");
	bindInfoState("#wtpAppTile", "We The PAC Android App - browse wethepac.net content from your phone in realtime.");
	bindInfoState("#eyecatchersTile", "Eyecatchers.me - responsively designed photography portfolio built on Bootstrap.");


});