angular.module("myApp",[])
 .controller('FlickrController', function($scope, $http) {

	$scope.searchTerm = 'magnolia';

	$scope.getData = function() {
	  $http.jsonp(
	   'https://api.flickr.com/services/feeds/photos_public.gne', 
		 {
		   params : {
			 tags : $scope.searchTerm,
			 format : 'json',
			 jsoncallback : 'JSON_CALLBACK'
		   }
	     }).success(function(data, status, headers, config) {
			  console.log(data.items);
			  $scope.items = data.items;
		});
	}
})

