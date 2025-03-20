import { programmingWords } from "../data/words.js";

export const matchWord = async (req, res) => {
  const {word} = req.body
  if (!word) {
    console.log('word is required');
   }
  try {
    if(programmingWords.includes(word)){ 
      res.status(200).json({
        message: "Good guess",
        isMatched: true ,
      });
    }
    else {
      res.status(400).json({
        message: "Wrong",
        isMatched: false ,
      });
    }
  } catch (error) {
    console.log('Error in  matchWord controller', error);
    res.status(500).json({ message: 'Server error' })
  }
}