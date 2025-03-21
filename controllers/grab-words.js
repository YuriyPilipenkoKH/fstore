import dotenv from 'dotenv';
dotenv.config()

export const programmingWords = process.env.PROG_WORDS ? process.env.PROG_WORDS.split(',') : [];



export const grabWords = async (req, res) => {
  try {
    res.status(200).json({
      message: "Splendid",
      words: programmingWords ,
   
    });
    
  } catch (error) {
    console.log('Error in  grabWords controller', error);
    res.status(500).json({ message: 'Server error' })
  }
}