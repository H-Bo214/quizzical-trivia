
// pass a function to call the API for the questions to the onClick property of the button.
// Once we receive the response from the API, store these values in state by using useState()
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import { useState, useEffect } from 'react'

const HomePage = () => {
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')
  const questionsAPI ='https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple'

  useEffect(()=> {
    return fetch(questionsAPI)
    .then(response => response.json())
    .then(data => setQuestions(data.results))
    .catch(err => setError(err))
    
  }, [])
  console.log('questions', questions)

  return (
    <main>
      <h1>Quizzical trivia</h1>
      <p>Test your knowledge of video games!</p>
    <Link to="/questions">
      <Button 
        btnText={'Start quiz'}
        bckgrdColor={'#4D5B9E'}
        textColor={'#F5F7FB'}
      />
    </Link>
    </main>
  )
}

export default HomePage