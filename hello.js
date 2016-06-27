let http = require('http'); // How require works

// call the function passing in a "callback" function
http.createServer(function(request, response) {
	response.writeHead(200); // Status code in header
	response.write('Hello, this is dog.'); // Response body
	response.end(); // Close connection
}).listen(8080); // Listen for connections on this port

console.log('Listening on port 8080 ...');