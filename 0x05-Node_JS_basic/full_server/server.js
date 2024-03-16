import express from 'express';
import routes from './routes';
import { readDatabase } from './utils';

const app = express();

const PORT = 1245;

app.use('/', routes);

const server = app.listen(PORT, async () => {
  try {
    const dbName = process.argv[2];
    if (!dbName) {
      throw new Error('Database filename not provided');
    }
    await readDatabase(dbName);
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error(error.message);
    server.close();
  }
});

export default app;
