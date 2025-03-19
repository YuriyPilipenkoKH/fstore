import express from 'express';
import { programmingWords } from '../data/words.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "F route is working!" ,
    words: programmingWords
    });
});

export default router;