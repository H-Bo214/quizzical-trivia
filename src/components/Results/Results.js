import './Results.css'
import { useLocation, Link } from "react-router-dom"
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

const Results = () => {
  const location = useLocation()
  const { state } = location

  let count = 0
  const allQuestions = state.map(singleQuestion => {
    const { allAnswers, question, selectedAnswer, correctAnswer } = singleQuestion
    const correctSelected = selectedAnswer === correctAnswer
    
    const answers = allAnswers.map(answer => {
      const sharedId = nanoid()
      const selectedCorrect = selectedAnswer === answer && answer === correctAnswer
      const selectedIncorrect = selectedAnswer !== correctAnswer && answer === selectedAnswer

      return <div className='single-answer-container' key={answer}>
          <input 
            className={'radio-input'}
            type='radio'
            name={'selectedAnswer'}
            value={answer}
            id={sharedId}
            checked={selectedCorrect}
            disabled
            />
          <label
            className={`results-radio-label 
              ${selectedCorrect && 'correct-answer'} 
              ${selectedIncorrect && 'incorrect-answer'}`
            }
            htmlFor={sharedId}
            >
            {decode(answer)}
          </label>
        </div>
      })
      
    correctSelected && count++
    return <section className='results-question-answer-container' key={nanoid()} >
      <h2 className='results-question'>{decode(question)}</h2>
      <section className='answers-container'>
        {answers}
      </section>
    </section>

  })
  return (
    <main className='results-container'>
      {allQuestions}
      <section className="final-results-container">
       <p className='final-score'><strong>{`You scored ${count}/5 correct answers`}</strong></p>
       <Link to="/questions">
        <button  className='play-again-btn' type="button">Play again</button>
       </Link>
     </section>
    </main>
  )
}

export default Results