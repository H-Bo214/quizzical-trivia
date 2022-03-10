import PropTypes from 'prop-types'


const Button = ({ btnText, btnClassName, onClick, name, value, btnId, selected }) => {


  const styles ={background: selected ? 'red' : 'white' }

  return (
    <button
      style={styles}
      className={btnClassName}
      onClick={onClick}
      name={name}
      value={value}
      id={btnId}
    >
      {btnText}
    </button>
  )
}

Button.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  textColor: PropTypes.string,
  btnId: PropTypes.string,
  btnText: PropTypes.string,
  btnClassName: PropTypes.string,
  onClick: PropTypes.func,
  selected: PropTypes.bool
}

export default Button