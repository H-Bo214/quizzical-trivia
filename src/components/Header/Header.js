import { Link } from 'react-router-dom'

import icon from '../../assets/favicon.png'
import './Header.css'

const Header = () => {
  return (
    <header>
      <Link to='/'>
        <img className='logo' alt='Quizzical logo'src={icon}/>
      </Link>
    </header>
  )
}

export default Header