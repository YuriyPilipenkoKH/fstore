import dotenv from 'dotenv';
dotenv.config()

const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN

const allowedOrigins = [
  CLIENT_ORIGIN,
  'http://localhost:5173', 
  'http://localhost:3000', 
];


export const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);  // Allow requests with no origin (like mobile apps or curl requests)
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.error(`Blocked by CORS: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "Cookie"]
};
