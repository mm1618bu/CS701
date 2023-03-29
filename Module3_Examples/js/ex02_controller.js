var myModule = angular.module('myApp',[]);
myModule.controller('HelloController', function($scope){
    $scope.greeting = "Hello";
})