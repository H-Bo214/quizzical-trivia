import { useState, useEffect } from 'react'

const Questions = () => {

  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')

  const questionsAPI ='https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple'

  useEffect(()=> {
    return fetch(questionsAPI)
    .then(response => response.json())
    .then(data => setQuestions(cleanData(data.results)))
    .catch(err => setError(err))
    
  }, [])

  const shuffleArray = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  }

  const cleanData = (data) => {
    const result = data.map(question => {
      return {
        question: question.question,
        correctAnswer: question.correct_answer,
        allAnswers: shuffleArray([...question.incorrect_answers, question.correct_answer])
      }
    })
    return result
  }

  return (
    <div>
      {error && <h1>An error occurred</h1>}
    </div>
  )
}

export default Questions