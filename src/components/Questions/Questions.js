import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import { cleanData  } from '../../helpers'
import Results from '../Results/Results'
import { Link, useNavigate } from 'react-router-dom'

const Questions = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')
  const [selectedAnswers, setSelectedAnswers] = useState([])
  const [isGameOver, setIsGameOver] = useState(false)

  useEffect(() => {
    console.log('fetch called')
    return fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setQuestions(cleanData(data.results)))
      .catch(err => setError(err))

  }, [selectedAnswers, isGameOver])

  
  // working but has a but that doesn't toggle checked dynamically.
  // const handleChoices = (e, id, answerId) => {
  //   const { value, checked } = e.target
  //   setQuestions(prevQuestions => {
  //     return prevQuestions.map(question => {
  //       return question.questionId === id ? 
  //       {...question, 
  //         selectedAnswer: value, 
  //         allAnswers: question.allAnswers.map(answer => {
  //           console.log('checked', checked)
  //           return answer.id === answerId ? 
  //           {...answer, isSelected: !answer.isSelected} :
  //           answer
  //         })} :
  //         question
  //       })
  //     }) 
  //   }
    
  //   console.log('questions', questions[0])

  //attempt/ not in use//
  const handleChoices = (e, id, answerId) => {
    const { value, checked } = e.target
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

  function getCorrectAnswers(questions) {
    const result = questions.map(question => question.correctAnswer)
    return result
  }

  const checkAnswers = (e) => {
    // e.preventDefault()

    const answers = getSelectedAnswers(questions)
    console.log('answers in CheckAnswers', answers)
    setSelectedAnswers(answers)
    navigate('/results', {
      state: questions
    })
    // setIsGameOver(prevState => !prevState)
  } 

// const stateToTransfer = [questions]


  const allQuestions = questions.map(question => {
    return <Question 
      question={question} 
      key={question.question}
      handleChoices={handleChoices}
    />
  })

  // const allResults = questions.map(question => {
  //   return <Results 
  //     question={question}
  //     key={question.question}
  //     selectedAnswers={selectedAnswers}
  //   />
  // })

// render a button html tag with a onClick handler that will reference a function called checkAnswers

// will need to create an array with all of the correct answers

// will need to create an array of all the choices
// will need to compare the 2 arrays and determine how many answers were correct and keep a tally

  return (
    <>
      <form id='my-form'>
        {error && <h1>An error occurred</h1>}
        {allQuestions}
      </form>
      <div>
        {/* <Link to='/results' state={stateToTransfer}>  */}
          <button form='my-form' onClick={checkAnswers}>Check answers</button>
        {/* </Link> */}
      </div>
    </>
  )
}

export default Questions