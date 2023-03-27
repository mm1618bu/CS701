self.onmessage = messageHandler;

function messageHandler(e) {
  let data = e.data;
  console.log("Received", data);

  let result = 0;
  for (let i = data.start; i <= data.end; i++) {
    result += i * i;
  }

  data.result = result;

  // Timeout delay 
  setTimeout(function () {
    self.postMessage(data);
    self.close();
  }, Math.floor(Math.random() * 10000));
}
