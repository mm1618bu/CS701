function PlaylistController($scope,$http){
    $http.get('cgi-bin/getData.py',{
        params: {
            url: "http://kalathur.com/cs701/html5/playList.xml"
        }
    }).success(function(data, status, headers, config){
        var json = x2js.xml_str2json(data);
        console.log(json.Playlist.song);
        $scope.items = json.playlist.song;
    }).error(function(data,status,handlers,config){
        alert('Http Error');
    });
}