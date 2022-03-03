import PropTypes from 'prop-types'

const Button = ({ bckgrdColor, textColor, btnText, btnClassName, onClick}) => {
  return (
    <button 
    style={{backgroundColor: bckgrdColor, color: textColor}}
    className={btnClassName}
    onClick={onClick}
    >
      {btnText}
    </button>
  )
}

Button.propTypes = {
  bckgrdColor: PropTypes.string,
  textColor: PropTypes.string,
  btnText: PropTypes.string,
  btnClassName: PropTypes.string,
  onClick: PropTypes.func
}

export default Button