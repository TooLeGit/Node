let fs = require ('fs'); // require filesystem module
let http = require('http');

/*
let file = fs.createReadStream ("readme.md");
let newFile = fs.createWriteStream ("readme_copy.md");

file.pipe(newFile);
*/

http.createServer(function (request, response) {
	let newFile = fs.createWriteSteam("readme_copy.md");
	request.pipe(newFile);

	request.on('end', function () {
		response.end('uploaded!');
	});
}).listen(8080);

// curl --upload-file readme.md http://localhost:8080