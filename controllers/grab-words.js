import { programmingWords } from "../data/words.js";


export const grabWords = async (req, res) => {
  try {
    res.status(200).json({
      message: "Splendid",
      words: programmingWords ,
   
    });
    
  } catch (error) {
    console.log('Error in  grabWords', error);
    res.status(500).json({ message: 'Server error' })
  }
}