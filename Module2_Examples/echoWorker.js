self.onmessage = messageHandler;

var counter = 1;

function messageHandler(e){
    postMessage("Worker Echos "+e.data+"too #" + counter);
    counter++;
}