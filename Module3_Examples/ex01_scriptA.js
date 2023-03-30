var app = angular.module('myApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'pages/home.html',
            controller: 'homeController'
        })
        .when('/about',{
            templateUrl:'pages/about.html',
            controller: 'aboutController'
        })
        .when('/contact/',{
            templateUrl:'pages/contact.html',
            controller: 'contactController'
        })
        .otherwise({
            templateUrl: 'pages/error.html',
            controller: 'errorController'
        });

        app.controller('homeController',function($scope){$scope.message = 'Welcome to the homepage!';});
        app.controller('aboutController',function($scope){$scope.message = 'More Details about me!';});
        app.controller('contactController',function($scope){$scope.message = 'Call US!';});
        app.controller('errorController',function($scope, $location){$scope.message = 'Bad';$scope.attemptedPath = $location.path()});
});