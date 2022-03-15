import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main>
      <h1>Quizzical trivia</h1>
      <p>Test your knowledge of video games!</p>
    <Link to="/questions">
      <button>Start Quiz</button>
    </Link>
    </main>
  )
}

export default HomePage