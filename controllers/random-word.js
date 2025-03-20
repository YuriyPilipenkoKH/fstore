import { programmingWords } from "../data/words";


export const randomWord = async (req, res) => {
  const randomWord = programmingWords[Math.floor(Math.random() * programmingWords.length)]
  try {
    res.status(200).json({
      message: "Random word",
      random: randomWord ,
   
    });
    
  } catch (error) {
    console.log('Error in  randomWord controller', error);
    res.status(500).json({ message: 'Server error' })
  }
}
// const randomWord = response.words[Math.floor(Math.random() * response.words.length)]
// setSolution(randomWord)