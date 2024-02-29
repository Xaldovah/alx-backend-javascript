const http = require('http');
const fs = require('fs');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    try {
      countStudents(process.argv[2])
        .then(data => {
          res.writeHead(200, { 'Content-Type': 'text/plain' });
          res.end(`This is the list of our students\n${data}`);
        })
        .catch(error => {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end(error.message);
        });
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Cannot load the database');
    }
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

const port = 1245;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

module.exports = app;
