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
  
  const allQuestions = questions.map(question => {
    return <Question question={question} key={question.question}/>
  })

  return (
    <div>
      {error && <h1>An error occurred</h1>}
      {allQuestions}
    </div>
  )
}

export default Questions