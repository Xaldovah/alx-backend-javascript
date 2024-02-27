const fs = require('fs');

function countStudents(path) {
	try {
		const data = fs.readFileSync(path, 'utf-8').split('\n');
		if (data.length === 0) {
			throw new Error('Cannot load the database');
		}

		const students = data.slice(1).map(line => line.split(', '));
		const fields = {};

		for (const student of students) {
			const [firstname, lastname, age, field] = student;
			if (field in fields) {
				fields[field].push(firstname);
			} else {
				fields[field] = [firstname];
			}
		}

		console.log(`Number of students: ${students.length}`);
		for (const field in fields) {
			console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
		}
	} catch (error) {
		console.error(error.message);
		process.exit(1);
	}
}

module.exports = countStudents;
