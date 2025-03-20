import express from 'express';
import { grabWords } from '../controllers/grab-words.js';


const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "F route is working!" ,
    });
});

router.get("/grab",  grabWords );

// router.get("/match",  matchWord );

export default router;