function FlickrController($scope, $http){
    $http.jsonp('https://api.flickr.com/services/feeds/photos_public.gne',{
        params: {
            tags: 'magnolia',
            format: 'json',
            jsoncallback: 'JSON_CALLBACK'
        }
    }).success(function(data,status,headers,config){
        console.log(data.items);
        $scope.items = data.items;
    });
}