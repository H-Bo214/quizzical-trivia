import Input from '../Input/Input'
import './Question.css'

const Question = (props) => {
  const { handleChoices } = props
  const { allAnswers, question, questionId, selectedAnswer } = props.question 

  const answers = allAnswers.map(answer => {
    return <Input 
    choiceText={answer.answer}
    key={answer.answer}
    onChange={(e) => handleChoices (e, questionId, answer.id)}
    name={selectedAnswer}
    value={answer.answer}
    id={answer.id}
    />
  })

  return (
    <div>
      <h2>{question}</h2>
      <section className='answers-container'>
        {answers}
      </section>
    </div>
  )
}

export default Question
