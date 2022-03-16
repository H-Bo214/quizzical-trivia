import './Results.css'
import { useLocation, Link } from "react-router-dom"

const Results = () => {
  const location = useLocation()
  const { state } = location

  let count = 0
  const finalQuestions = state.map(singleQuestion => {
    const {question, selectedAnswer, correctAnswer } = singleQuestion
    const correctSelected = selectedAnswer === correctAnswer
    const incorrectSelected = selectedAnswer !== correctAnswer

    const answers = singleQuestion.allAnswers.map(answer => {
      const bothCorrect = `radio-label-final ${correctSelected && answer.isSelected && 'correct-answer' }`
      const notSelected = `radio-label-final ${incorrectSelected && answer.isSelected && 'incorrect-answer'}`
    return <p 
      className={correctSelected ? bothCorrect : notSelected} 
      key={answer.answer}
    >
      {answer.answer}
    </p>
  })
  correctSelected && count++
    return <div key={question}>
      <h2>{question}</h2>
      <section>{answers}</section>
    </div>
  })
  return (
    <main>
      <div>
        {finalQuestions}
      </div>
      <section className="final-results-container">
        <p>{`You scored ${count}/5 correct answers`}</p>
        <Link to="/questions">
          <button type="button">Play again</button>
        </Link>
      </section>
    </main>
  )
}

export default Results