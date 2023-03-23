 (function() {

    window.onload = init;

    var startButton;
    var position;
    var latitude, longitude;
    var counter = 0;
    var latModify, lonModify;
    var lam, lon;
    

    // register the event handlers

    function init() {
    	startButton = document.getElementById("startButton");
    	//startButton.onclick = startTrackingLocation(position);
        startButton.onclick = function(){navigator.geolocation.getCurrentPosition(startTrackingLocation);}
    }

    function getLocation(){
        navigator.geolocation.getCurrentPosition(position => {var { latitude, longitude} = position.coords});
        startTrackingLocation(position);
    }

    function startTrackingLocation(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

        document.getElementById("latitude").innerHTML = "latitude: " + latitude;
        document.getElementById("longitude").innerHTML = "longitude: " + longitude;
        console.log(latitude,longitude);
        showonMap(position.coords);

    }

    function updateMyLocation(){
        latModify = Math.random() / 100;
        lonModify = Math.random() / 100;
        lam = latitude-latModify;
        lon = longitude-lonModify;
        counter += 1;
        console.log(lam, lon);
        document.getElementById("currentLatitude").innerHTML = "Current Latitude: " + lam;
        document.getElementById("currentLongitude").innerHTML = "Current Longitude: " + lon;
        document.getElementById("counter").innerHTML = "Update #:" + counter;
    }

    setInterval(updateMyLocation, 5000);

    function handleError(error){
        switch(error.code){
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









