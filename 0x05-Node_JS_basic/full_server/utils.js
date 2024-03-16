const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');
    const students = { CS: [], SWE: [] };

    lines.forEach((line) => {
      const [firstname, lastname, age, field] = line.split(', ');
      if (firstname && lastname && age && field) {
        students[field].push(firstname);
      }
    });

    return students;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = { readDatabase };
