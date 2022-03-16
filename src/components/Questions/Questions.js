import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import { cleanData  } from '../../helpers'
import { useNavigate } from 'react-router-dom'

const Questions = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')
  const [selectedAnswers, setSelectedAnswers] = useState([])

  useEffect(() => {
    console.log('fetch called')
    return fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setQuestions(cleanData(data.results)))
      .catch(err => setError(err))

  }, [selectedAnswers])

  const handleChoices = (e, id, answerId) => {
    const { value } = e.target
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {

        const newAnswers = question.allAnswers.map(answer => {
          return answer.id === answerId ? 
          {...answer, isSelected: !answer.isSelected} :
           answer
          })

        return question.questionId === id ? 
        {...question, 
          selectedAnswer: value, 
          allAnswers: newAnswers
        } :
        question
      })
    }) 
  }

  function getSelectedAnswers(questions) {
    const result = questions.map(question => question.selectedAnswer)
    return result
  }

  const checkAnswers = (e) => {
    const answers = getSelectedAnswers(questions)
    setSelectedAnswers(answers)
    navigate('/results', {
      state: questions
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
    <>
      <form id='my-form'>
        {error && <h1>An error occurred</h1>}
        {allQuestions}
      </form>
      <div>
          <button form='my-form' onClick={checkAnswers}>Check answers</button>
      </div>
    </>
  )
}

export default Questions