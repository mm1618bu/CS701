angular.module('myApp')
    .filter('underscore', function(){
        return function(value, coalesce){
            if(angular.isString(value)){
                if(coalesce){
                    return value.replace(/\s+/g,"_");
                }
                else{
                    return value.replace(/\s/g,"_");
                }
            } else{
                return value;
            }
        };
    });