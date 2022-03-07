import Button from '../Button/Button'
// import { useState } from 'react'


const Question = (props) => {


  const { allAnswers, question} = props.question 
  const { handleChoices, on} = props

  const allButtons = allAnswers.map(choice => <Button 
    btnText={choice} 
    name={choice}
    key={choice}
    onClick={(e) => handleChoices(e)}
    value={choice}
    id={choice}
  />)

  return (
    <div>
      <h2>{question}</h2>
      {allButtons}
    </div>
  )
}

export default Question

// when I click the answer of my choice,
// if the event.target.value matches the id of the button I clicked
// make this this selected value