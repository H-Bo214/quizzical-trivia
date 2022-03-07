import PropTypes from 'prop-types'

const Button = ({ btnText, btnClassName, onClick, name, value, id }) => {

  const styles = {backgroundColor: '#fff'}

  return (
    <button
      style={styles}
      className={btnClassName}
      onClick={onClick}
      name={name}
      value={value}
      id={id}
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