angular.module('Twitter',['ngResource', 'myFilters']);

function TwitterController($scope, $resource){
    $scope.twitter = $resource('http://search.twitter.com/:action',{action:'search.json', q: 'angularjs', callback:'JSON_CALLBACK'},
    {get:{method:'JSONP'}});

    $scope.doSearch = function(){
        $scope.twitterResult = $scope.twitter.get({q:$scope.searchTerm});
        console.log($scope.twitterResult);
    };

    $scope.searchTerm = "moocs";
    $scope.doSearch();
}