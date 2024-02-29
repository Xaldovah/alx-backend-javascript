const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  if (!process.argv[1]) {
    console.error('Error: Please provide a database filename as an argument.');
    res.status(400).send('Missing database filename');
    return;
  }

  const databaseFile = process.argv[1];

  try {
    const data = await countStudents(databaseFile);
    res.send(`This is the list of our students\n${data}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
