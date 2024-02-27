const express = require('express');
const { countStudents } = require('node 3-read_file_async');

const app = express();

app.get('/', (req, res) => {
	res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
	const dbName = process.argv[2];
	if (!dbName) {
		res.status(500).send('Error: Database filename not provided');
		return;
	}

	countStudents(dbName)
		.then(() => {
			// do nothing
		})
		.catch(error => {
			res.status(500).send(error.message);
		});
});

const PORT = 1245;

app.listen(PORT, () =>  {
	console.log(`Server running on port ${PORT}`);
});

module.exports = app;
