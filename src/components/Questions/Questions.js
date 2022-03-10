import { useState, useEffect } from 'react'
import Question from '../Question/Question'
import { cleanData  } from '../../helpers'

const Questions = () => {
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    return fetch('https://opentdb.com/api.php?amount=5&category=15&difficulty=easy&type=multiple')
      .then(response => response.json())
      .then(data => setQuestions(cleanData(data.results)))
      .catch(err => setError(err))

  }, [])
  
  const findQuestion = (id) => {
    return questions.find(question => question.questionId === id)
  }

  const findAnswer = (singleQuestion, id) => {
    return singleQuestion.allAnswers.find(answer => answer.id === id)
  }

  const handleChoices = (e, id, answerId) => {
    console.log('event target', e.target)
    const { value } = e.target
    let foundQuestion= findQuestion(id)
    let foundAnswer = findAnswer(foundQuestion, answerId)
    let index = foundQuestion.allAnswers.indexOf(foundAnswer)
    let updatedAnswer = {...foundAnswer, isSelected: !foundAnswer.isSelected}
    foundQuestion.allAnswers.splice(index, 1, updatedAnswer)

    // console.log('foundAnswer.answer', foundAnswer.answer)
    setQuestions(prevQuestions => {
      return prevQuestions.map(question => {
        return question.questionId === id ? 
        {
          ...question, 
          selectedAnswer: updatedAnswer.isSelected ? value : '', 
          allAnswers: foundQuestion.allAnswers
        } 
        : question
      })
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
    <div>
      {error && <h1>An error occurred</h1>}
      {allQuestions}
    </div>
  )
}

export default Questions