const fs = require('fs');

function countStudents(path) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            const lines = data.trim().split('\n').filter(line => line.trim() !== '');

            const counts = {};

            lines.forEach(line => {
                const [firstName, lastName, age, field, location] = line.split(',');
                counts[field] = counts[field] ? counts[field] + 1 : 1;
            });

            console.log(`Number of students: ${lines.length}`);

            for (const field in counts) {
                const firstNameList = lines
                    .filter(line => line.split(',')[3] === field)
                    .map(line => line.split(',')[0])
                    .join(', ');
                console.log(`Number of students in ${field}: ${counts[field]}. List: ${firstNameList}`);
            }

            resolve();
        });
    });
}

module.exports = countStudents;
