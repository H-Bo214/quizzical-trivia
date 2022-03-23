import { nanoid } from 'nanoid'

//Shuffles all of the available answers to questions
export function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Cleans the data by returning only what is necessary for app functionality.
export function cleanData(data) {
    return data.map(question => {
      return {
        questionId: nanoid(),
        question: question.question,
        correctAnswer: question.correct_answer,
        allAnswers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        selectedAnswer: '',
      }
    })
}
