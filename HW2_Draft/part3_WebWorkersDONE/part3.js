(function() {

    window.onload = init;
  
    var startButton;
    var workers = [];
  
    function init() {
      startButton = document.getElementById("startButton");
      startButton.onclick = sendDataToWorkers;
    
      // Retrieve the stored results from local storage
      var storedResults = JSON.parse(localStorage.getItem("results")) || [];
    
      // Get a reference to the StorageItems div
      var storageItemsDiv = document.getElementById("storageItems");
    
      // Clear the previous contents of the div
      storageItemsDiv.innerHTML = "";
    
      // Iterate over the stored results and add them to the div
      storedResults.forEach(result => {
        var resultItem = document.createElement("div");
        resultItem.innerHTML = `Time: ${result.time}, Result: ${result.result}`;
        storageItemsDiv.appendChild(resultItem);
      });
    }
  
// Define the results array
var results = [];

// Handle messages received from the Web Worker
function handleReceipt(event) {
  var itemsList = document.getElementById("items");
  var item = document.createElement("li");
  item.innerHTML = `Start: ${event.data.start}, End: ${event.data.end}, Result: ${event.data.result}`;
  itemsList.appendChild(item);
  
  // Add the result to the results array
  results.push(event.data);

  if (results.length === 5) {
    // All results have been received, calculate the accumulated result
    var accumulatedResult = results.reduce((acc, curr) => acc + curr.result, 0);
    console.log(accumulatedResult);
    console.log(results);

    // Store the accumulated result in local storage
    var storedResults = JSON.parse(localStorage.getItem("results")) || [];
    storedResults.push({ time: new Date(), result: accumulatedResult });
    localStorage.setItem("results", JSON.stringify(storedResults));

    // Update the UI with the accumulated result
    var resultDisplay = document.getElementById("sum");
    resultDisplay.innerHTML = accumulatedResult;
    // Reset the results array
    results = [];
  }
}


    // Create and start Web Workers
    function sendDataToWorkers() {
      startButton.disabled = true;
      var intervals = [[1, 100], [101, 200], [201, 300], [301, 400], [401, 500]];
      for(let i=0; i<5; i++) {
        const worker = new Worker('computeWorker.js');
        worker.onmessage = handleReceipt;
        workers.push(worker);
      }
      for(let i=0; i<5; i++) {
        const interval = intervals[i];
        workers[i].postMessage({start: interval[0], end: interval[1]});
      }
    }
  
    // Stop all Web Workers
    function stopWorkers() {
      startButton.disabled = false;
      for(let i=0; i<5; i++) {
        workers[i].terminate();
      }
      workers = [];
    }
  
    // Helper method to clear the UI
    function clearUI() {
      var itemsList = document.getElementById("items");
      itemsList.innerHTML = "";
    }
  
  })();
  