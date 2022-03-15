import './Input.css'

const Input = ({ choiceText, onChange, id, value, name }) => {
  return (
    <section className='answer-section'>
      <input 
        className="radio-input"
        type="radio"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label className="radio-label" htmlFor={id}>{choiceText}</label>
    </section>
  )
}

export default Input

