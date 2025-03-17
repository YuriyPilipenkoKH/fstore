import express from 'express';
import { fiveLetterWords } from '../data/words.js';

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "F route is working!" ,
    words: fiveLetterWords
    });
});

export default router;