import Button from '../Button/Button'

const Question = (props) => {
  const { allAnswers, correctAnswer, question } = props.question 

  console.log('allAnswers', allAnswers)
  console.log('correctAnswer', correctAnswer)
  console.log('question', question)
  return (
    <div>
      <h2>{question}</h2>
    </div>
  )
}

export default Question