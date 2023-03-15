var mySingleton = (function(){
    var instance;

    function init(){
        return{
            number: Math.random()
        };
    };

    return{
        getInstance : function(){
            if(!instance){
                instance = init();
            }
            return instance;
        }
    };
})();

var singleA = mySingleton.getInstance( );
var singleB = mySingleton.getInstance( );
console.log(singleA == singleB);