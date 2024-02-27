const { readDatabase } = require('../utils');


class StudentsController {
	static async getAllStudents(req, res) {
		try {
			const students = await readDatabase(req.app.locals.dbName);

			let response = 'This is the list of our students\n';
			Object.keys(students).sort().forEach(field => {
				response += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
			});

			res.status(200).send(response);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}

	static async getAllStudentsByMajor(req, res) {
		const { major } = req.params;
		if (major !== 'CS' && major !== 'SWE') {
			res.status(500).send('Major parameter must be CS or SWE');
			return;
		}

		try {
			const students = await readDatabase(req.app.locals.dbName);
			const studentsInMajor = students[major] || [];

			const response = `List: ${studentsInMajor.join(', ')}`;
			res.status(200).send(response);
		} catch (error) {
			res.status(500).send(error.message);
		}
	}
}

module.exports = StudentsController;
