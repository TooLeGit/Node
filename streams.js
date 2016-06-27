let http = require('http');

/*
http.createServer (function (request, response) {
	response.writeHead(200);

	request.on('readable', function () {
		let chunk = null;
		while (null !== (chunk = request.read())) {
			console.log(chunk.toString());
			// response.write(chunk);
		}
	});

	request.on('end', function () {
		response.end();
	});
}).listen(8080);

*/

http.createServer (function (request, response) {
	response.writeHead(200);
	request.pipe(response);
}).listen(8080);

// curl -d 'hello' streams.js