import { decode } from 'html-entities'

export function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

export function cleanData(data) {
    return data.map(question => {
      return {
        question: decode(question.question),
        correctAnswer: question.correct_answer,
        allAnswers: shuffleArray([...question.incorrect_answers, question.correct_answer])
      }
    })
}