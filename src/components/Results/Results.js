import './Results.css'
import { useLocation } from "react-router-dom"

const Results = (props) => {
  const location = useLocation()
  const { state } = location
  console.log('state', state)


  const finalQuestions = state.map(singleQuestion => {
    const {question, selectedAnswer, correctAnswer } = singleQuestion
      const correctSelected = selectedAnswer === correctAnswer
      const incorrectSelected = selectedAnswer !== correctAnswer

    const answers = singleQuestion.allAnswers.map(answer => {
      const bothCorrect = `radio-label-final ${correctSelected && answer.isSelected ? 'correct-answer' : ''}`
      const notSelected = `radio-label-final ${incorrectSelected && answer.isSelected ? 'incorrect-answer' : ''}`
      return <p 
      className={correctSelected ? bothCorrect : notSelected} 
      key={answer.answer}>{answer.answer}
      </p>
    })
    
    return <div key={question}>
      <h2>{question}</h2>
      <section>{answers}</section>
    </div>
  })
  
  return (
    <div>
      {finalQuestions}
    </div>
  )
}

export default Results