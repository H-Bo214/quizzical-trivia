import './Question.css'
import { nanoid } from 'nanoid'
import { decode } from 'html-entities'

const Question = (props) => {
  const { handleChoices, setSelectionError } = props
  const { allAnswers, question, questionId, selectedAnswer } = props.question 


  const answers = allAnswers.map(answer => {
    const sharedId = nanoid()
    const isSelected = selectedAnswer === answer
    return <div className='single-answer-container' key={answer}>
      <input 
        className={'radio-input'}
        type='radio'
        onChange={(e) => handleChoices(e, questionId)}
        name={'selectedAnswer'}
        value={answer}
        id={sharedId}
        checked={isSelected}
      />
      <label
        className={`radio-label ${isSelected ? 'clicked-radio-label' : ''}`}
        htmlFor={sharedId}
        onClick={() => setSelectionError('')}
      >
        {decode(answer)}
      </label>
    </div>
  })

  return (
    <section className='question-answer-container'>
      <h2 className='question'>{decode(question)}</h2>
      <section className='answers-container'>
        {answers}
      </section>
    </section>
  )
}

export default Question
