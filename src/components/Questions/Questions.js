import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import { cleanData  } from '../../helpers'
import { useNavigate } from 'react-router-dom'
import './Questions.css'

const Questions = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')
  const [selectionError, setSelectionError] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    return fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => {
        if (data) {
          setIsLoading(false)
          setQuestions(cleanData(data.results))
        }
      })
      .catch(err => setError(err))
  }, [])

  const handleChoices = (e, qId) => {
    const { name, value } = e.target
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        return  question.questionId === qId ? {
          ...question,
          [name]: value,
        } : question
      })
    })
  }

  const checkAnswers = (e) => {
    e.preventDefault()
    const answers = findSelectedAnswers()
    if (answers.length < 5) {
      setSelectionError('Please answer all questions.')
    } else  {
      navigate('/results', { state: questions })
    }
  } 

  const findSelectedAnswers = () => {
   return questions.filter(question =>  question.selectedAnswer !== '')
  }

  const allQuestions = questions.map(question => {
    return <Question 
      question={question} 
      key={question.question}
      handleChoices={handleChoices}
      setSelectionError={setSelectionError}
    />
  })

  return (
    <main>
      <form id='my-form'>
        {error && <h1>An error occurred getting questions.</h1>}
        {selectionError && <h2 className='selection-error'>{selectionError}</h2>}
        {isLoading ? <h1>Loading...</h1> : allQuestions}
      <div>
        {!isLoading && <button className='check-answers-btn' onClick={checkAnswers}>Check answers</button>}
      </div>
      </form>
    </main>
  )

}

export default Questions