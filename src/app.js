import 'dotenv/config';
import expressLoader from './loaders/express.js';
import express from 'express';

async function startServer() {
  const app = express();
  
  await expressLoader(app);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  }).on('error', (err) => {
    console.error('Server failed to start:', err);
    process.exit(1);
  });
}

startServer();
