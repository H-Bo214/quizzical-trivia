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
  
  const handleChoices = (e) => {
    console.log('value', e.target.value)
  }

  const allQuestions = questions.map(question => {
    return <Question 
      question={question} 
      key={question.question}
      handleChoices={handleChoices}
    />
  })


// When I click the button this should set the state for that  button as a selected answer

  // will need to think about setting state in Questions, When the user selects an answer X in state is updated.
  // will need to think about a function that validates if the correct answer was selected. Pass this function down to Question as a prop
  // this function check will be triggered when clicking the Check Answers button via a function  
  return (
    <div>
      {error && <h1>An error occurred</h1>}
      {allQuestions}
    </div>
  )
}

export default Questions