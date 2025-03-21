import express from 'express';
import { grabWords } from '../controllers/grab-words.js';
import { matchWord } from '../controllers/match-word.js';
import { randomWord } from '../controllers/random-word.js';


const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "F route is working!" ,
    });
});

router.get("/grab",  grabWords );

router.get("/random",  randomWord );

router.patch("/match",  matchWord );

export default router;
