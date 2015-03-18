$(document).ready(function($) {

	$("#wtpTile").hover(function() {
		infoState("wtp");
	}, function() {
		/* Stuff to do when the mouse leaves the element */
	});

	function infoState(string) {
		console.log(string);
	}

});