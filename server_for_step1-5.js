// import Express
var express = require('express');
// Initialise the server
// This will create an Express application for us to work with.
var app = express();

// own handler function
app.get("/", function (req, res) {
    // Send a message to a server page request -- see in Preview on c9 or browser 
    // http://localhost:<port-number>
    res.send("Hello World!");
});

// Create your own endpoints and send different responses
//  `/chocolate` is the "chocolate" endpoint. It's the URL to which you send a request.
app.get("/chocolate", function (req, res) {
    res.send("Mm chocolate :O");
});

app.get("/node", function (req, res) {
    res.send("This is the node endpoint :O");
});

app.get("/girls", function (req, res) {
    res.send("This is the girls endpoint :O");
});


// Start 'listening' for potential requests
// run our server on port `3000` (`8080` if you are using cloud9),
app.listen(8080, function () {
  // run a simple `console.log` as our callback function
  console.log('Server is listening on port 8080. Ready to accept requests! - by ENemeth79');
});
