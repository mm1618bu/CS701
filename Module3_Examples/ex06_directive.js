angular.module('button-directive',[])
    .directive('button', function(){
        return{
            restrict: 'E',
            compile: function(element, attributes){
                element.addClass('btn');
                if(attributes.type === 'submit'){
                    element.addClass('btn-primary');
                }
                if(attributes.style){
                    element.addClass('btn-'+attributes.style);
                }
            }
        };
    });