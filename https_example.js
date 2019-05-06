var https = require("https");

console.log("I did it!");

var options = {
  host: "www.example.org",
  path: "/"
};

// called by https when the request is made.
var callback = function(response) {
  console.log("In response handler callback!");

  console.log("Response: ", response);
};

https.request(options, callback).end();

console.log("I've made the request!");
