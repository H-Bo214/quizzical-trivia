import Button from '../Button/Button'

const Question = (props) => {
  const { handleChoices } = props
  const { allAnswers, question, questionId } = props.question 

  const answers = allAnswers.map(answer => {
    return <Button 
    btnText={answer.answer}
    key={answer.answer}
    onClick={(e) => handleChoices (e, questionId, answer.id)}
    name={answer.answer}
    value={answer.answer}
    btnId={answer.id}
    selected={answer.isSelected}
    />
  })
  
  return (
    <div>
      <h2>{question}</h2>
      {answers}
    </div>
  )
}

export default Question
