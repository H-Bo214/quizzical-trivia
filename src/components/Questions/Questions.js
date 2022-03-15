import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import { cleanData  } from '../../helpers'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    return fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setQuestions(cleanData(data.results)))
      .catch(err => setError(err))

  }, [])

  const handleChoices = (e, id) => {
    const { value } = e.target

    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        return question.questionId === id ? 
        {...question, selectedAnswer: value} :
        question
      })
    }) 
  }


  const allQuestions = questions.map(question => {
    return <Question 
      question={question} 
      key={question.question}
      handleChoices={handleChoices}
    />
  })


  return (
    <form>
      {error && <h1>An error occurred</h1>}
      {allQuestions}
    </form>
  )
}

export default Questions