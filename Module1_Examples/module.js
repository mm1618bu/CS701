var testModule = (function( ){
	var counter = 0;
	return {
		incrementCounter: function( ){
			return counter++;
		},
		resetCounter: function( ){
			console.log("current counter value:" + counter);
		}
	}
})( );

// Increment the counter
console.log(testModule.incrementCounter( ));
console.log(testModule.incrementCounter( ));

// Check the counter value and reset
// Outputs: 2

var myNamespace = (function( ){
    var myPrivateVar, myPrivateMethod;
    
    // A private variable
    myPrivateVar = 0;
    // A private function which logs any arguments
    myPrivateMethod = function(foo) {
        console.log(foo);
   };
   
   return {
       // A public variable
     myPublicVar: "foo",
   
       // A public function utilizing private data
     myPublicFunction: function(bar) {
         // Increment the private counter
         myPrivateVar++;
         // Call the private method using bar
         myPrivateMethod(bar);
     }
    };
 })( ); 