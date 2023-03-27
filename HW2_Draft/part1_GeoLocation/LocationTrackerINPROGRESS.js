(function() {

    window.onload = init;
  
    var startButton;
    var position;
    var latitude, longitude;
    var counter = 0;
    var latModify, lonModify;
    var lam, lon;
    var map;
    var title, content;
    var secondMarker;
    var pathCoordinates = [];
  
    // register the event handlers
  
    function init() {
      startButton = document.getElementById("startButton");
      startButton.onclick = function() {
        navigator.geolocation.getCurrentPosition(startTrackingLocation);
      }
    }
  
    function startTrackingLocation(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      document.getElementById("latitude").innerHTML = "latitude: " + latitude;
      document.getElementById("longitude").innerHTML = "longitude: " + longitude;
  
      showonMap(position.coords);
  
      setInterval(updateMyLocation, 500);
    }
  
    function updateMyLocation() {
      latModify = Math.random() / 100;
      lonModify = Math.random() / 100;
      lam = latitude - latModify;
      lon = longitude - lonModify;
      counter += 1;
      console.log(lam, lon);
      document.getElementById("currentLatitude").innerHTML = "Current Latitude: " + lam;
      document.getElementById("currentLongitude").innerHTML = "Current Longitude: " + lon;
      document.getElementById("counter").innerHTML = "Update #:" + counter;
  
      // Move second marker in northwest direction
      lam -= latModify;
      lon -= lonModify;
  
      var secondPosition = new google.maps.LatLng(lam, lon);
      pathCoordinates.push(secondPosition);
  
      if (secondMarker) {
        // If the marker already exists, move it to the new position
        secondMarker.setPosition(secondPosition);
      } else {
        // If the marker doesn't exist, create a new marker at the position
        var markerOptions = {
          position: secondPosition,
          map: map,
          title: "Second Marker"
        };
        secondMarker = new google.maps.Marker(markerOptions);
      }
  
      // create and add polyline to map
      var polyline = new google.maps.Polyline({
        path: pathCoordinates,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });
      polyline.setMap(map);
    }
  
  
    function addMarker(map, latlongPosition, title, content) {
  
      var options = {
        position: latlongPosition,
        map: map,
        title: true,
        clickable: true
      };
      var marker = new google.maps.Marker(options);
  
      var popupWindowOptions = {
        content: content,
        position: latlongPosition
      };
  
      var popupWindow = new google.maps.InfoWindow(popupWindowOptions);
  
      google.maps.event.addListener(marker, 'click', function() {
        popupWindow.open(map);
      });
    }
  
    function showonMap(pos) {
      var googlePosition = new google.maps.LatLng(pos.latitude, pos.longitude);
      var mapOptions = {
        zoom: 15,
        center: googlePosition,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };
      var mapElement = document.getElementById("map");
      map = new google.maps.Map(mapElement, mapOptions);
      title = "Location Details";
      content = "Lat: " + pos.latitude + ", Long: " + pos.longitude;
      addMarker(map, googlePosition, title, content);
    }
  
    function handleError(error) {
      switch (error.code) {
        case 1:
          document.getElementById("status").innerHTML = "<strong>Error</strong>: The user denied permission";
          break;
        case 2:
          document.getElementById("status").innerHTML = "<strong>Error</strong>: position unavailable";
          break;
        case 3:
          document.getElementById("status").innerHTML = "<strong>Error</strong>: timed out";
          break;
      }
    }
  
  })();
  