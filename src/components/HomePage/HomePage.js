import { Link } from 'react-router-dom'
import Button from '../Button/Button'

const HomePage = () => {
  return (
    <main>
      <h1>Quizzical trivia</h1>
      <p>Test your knowledge of video games!</p>
    <Link to="/questions">
      <Button 
        btnText={'Start quiz'}
        />
    </Link>
    </main>
  )
}

export default HomePage