// src/server.js

import 'dotenv/config';
import app from './app.js';
import prisma from './config/db.js';

const PORT = process.env.PORT || 3000;

(async () => {
  await prisma.$connect();
  console.log('PostgreSQL connected');
})();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});