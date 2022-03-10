import { decode } from 'html-entities'
import { nanoid } from 'nanoid'

//Shuffles all of the available answers to questions
export function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

// Cleans the data by returning only what is necessary for app functionality.
export function cleanData(data) {
  // console.log('data in helper', data)
    return data.map(question => {
      
      return {
        questionId: nanoid(),
        question: decode(question.question),
        correctAnswer: question.correct_answer,
        allAnswers: createArrayOfObj(shuffleArray([...question.incorrect_answers, question.correct_answer])),
        selectedAnswer: '',
      }
    })
}

  export function createArrayOfObj(arr) {
  const result = []
  arr.forEach(answer => {
    let obj = {}
    obj.id = nanoid()
    obj.answer = answer
    obj.isSelected = false
    result.push(obj)
  })
  return result
}

// export function cleanAnswers(data) {
//   return data.map(question => {
//     return {
//       allAnswers: createArrayOfObj(shuffleArray([...question.incorrect_answers, question.correct_answer]))
//     }
//   })
// }

