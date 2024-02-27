const http = require('http');
const { countStudents } = require('node 3-read_file_async');

const server = http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});

	const url = new URL(req.url, `http://${req.headers.host}`);
	
	if (url.pathname === '/') {
		res.end('Hello Holberton School!\n');
	} else if (url.pathname === '/students') {
		const dbName = process.argv[2];
		if (!dbName) {
			res.end('Error: Database filename not provided');
			return;
		}

		countStudents(dbName)
		.then(() => {
		})
		.catch(error => {
			res.end(error.message);
		});
	} else {
		res.end('Error: Unknown path');
	}
});

const PORT = 1245;

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`);
});

module.exports = server;
