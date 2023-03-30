angular.module("myDirectives",[])
    .directive('alert',function(){
        return{
            restrict:'EA',
            replace: true,
            template:
            '<div class="alert alert-{{type}}">' + '<button class="close" ng-click="remove()">x</button>' + '<div ng-transclude></div>' + '</div>',transclude:true,scope:{type:'=',remove:'&'}
        };
    });