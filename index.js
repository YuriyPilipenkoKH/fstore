import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { corsOptions } from './lib/cors.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors(corsOptions))

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)

} );