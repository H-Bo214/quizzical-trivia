// render a Button component
// pass a function to call the API for the questions to the onClick property of the button.
// Once we receive the response from the API, store these values in state by using useState()
import Button from '../Button/Button'
import { Link } from 'react-router-dom'
const HomePage = () => {

  function handleFetch() {
    console.log('Button click successful')
  }

  return (
    <main>
      <h1>Quizzical trivia</h1>
      <p>Test your knowledge of video games!</p>
    <Link to="/questions">
      <Button 
        btnText={'Start quiz'}
        bckgrdColor={'#4D5B9E'}
        textColor={'#F5F7FB'}
        onClick={handleFetch}
      />
    </Link>
    </main>
  )
}

export default HomePage