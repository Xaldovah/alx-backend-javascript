const fs = require('fs');

function countStudents(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (error, data) => {
			if (err) {
				reject(new Error('Cannot load the database'));
				return;
			}

			const lines = data.trim().split('\n');
			const students = {};
			let totalStudents = 0;

			lines.forEach(line => {
				const [firstname, lastname, age, field] = line.split(', ');
				if (firstname && lastname && age && field) {
					totalStudents++;
					if (!students[field]) students[field] = [];
					students[field].push(firstname);
				}
			});

			console.log(`Number of students: ${totalStudents}`);
			Object.keys(students).forEach(field => {
				console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
			});

			resolve();
		});
	});
}

module.exports = countStudents;
