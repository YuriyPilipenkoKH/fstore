import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { corsOptions } from './lib/cors.js';
import fRoutes from './routes/f.route.js'

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors(corsOptions))

app.use('/api', fRoutes);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)

} );