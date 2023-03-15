// Define an anonymous function
(function( ){
	// code
})( ); // invoke the function

$(document).ready(function( ) {
	// code
});

(function($) {
	$(document).ready(function( ){
		// code
	});
})(jQuery);


(function(doc, window, $) {
	$(doc).ready(function( ) {
		// code
		console.log(window.location.href);
	});
})(document, window, jQuery);