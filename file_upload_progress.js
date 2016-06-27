let fs = require('fs');
let http = require('http');

http.createServer (function (request, response) {
	let newFile = fs.createWriteStream("readme_copy.md");
	let fileBytes = request.headers['content-length'];
	let uploadedBytes = 0;

	request.on ('readable', function () {
		let chunk = null;

		while (null !== (chunk = request.read())) {
			uploadedBytes += chunk.length;

			let progress = (uploadedBytes / fileBytes) * 100;
			response.write("progress: " + parseInt (progress, 10) + "%\n");
			console.log("progress: " + parseInt (progress, 10) + "%\n");
		}
	});

	request.pipe(newFile);

	request.on ('end', function () {
		response.end('uploaded!');
	});

}).listen(8080);

// curl --upload-file file.jpg http://localhost:8080