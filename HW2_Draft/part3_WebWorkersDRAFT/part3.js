(function() {

    window.onload = init;

    var startButton;
    

    function init() {
    	startButton = document.getElementById("startButton");
    	startButton.onclick = sendDataToWorkers;
    }

    // Complete the following code

    // Handle messages received from the Web Worker
    function handleReceipt(event) {

    
    }

    // Complete the following code

    // send messages to the Web Workers
    function sendDataToWorkers(e) {
        startButton.disabled = true;

        

    }

    // Feel free to add any helper methods


    

    

})();

























