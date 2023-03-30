angular.module('myFilters',[]).filter(
    'extractLink', function(){
        return function(input){
            var result = "http://twitter.com";
            var startIndex = input.indexOf("http:");
            if(startIndex >= 0){
                var endIndex = input.indexOf('', startIndex);
                if(endIndex == -1)
                    endIndex = input.length;
                result = input.slice(startIndex,endIndex);
            }
            return result;
        };
    }
);