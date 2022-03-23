import './HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <main>
      <section className='title-container'>
        <h1 className='title'>Quizzical trivia</h1>
        <p className='description'>Test your knowledge of video games!</p>
      <Link to="/questions">
        <button className='start-btn'>Start Quiz</button>
      </Link>
      </section>
    </main>
  )
}

export default HomePage