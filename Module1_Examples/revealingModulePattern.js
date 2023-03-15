var myRevealingModule = (function( ) {
	var privateCounter = 0;
	function publicFunction( ) {
		privateCounter = 0;
	}
	function privateFunction( ){
		privateCounter++;
	}
	function publicIncrement( ) {
		privateFunction( );
	}
	function publicGetCount( ){
		return privateCounter;
	}

// Reveal public pointers to 
// private functions and/or properties
	
	return {
		start: publicFunction,
		increment: publicIncrement,
		count: publicGetCount
	};
})( );



// Usage	
myRevealingModule.start( );	
myRevealingModule.increment( );	
myRevealingModule.increment( );	
console.log(myRevealingModule.count( ));