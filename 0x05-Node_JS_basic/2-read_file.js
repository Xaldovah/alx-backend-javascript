const fs = require('fs');

function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');

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
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
