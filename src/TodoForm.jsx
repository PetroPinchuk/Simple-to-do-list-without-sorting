import React, { useState } from 'react'

const TodoForm = ({addTask}) => {
  const [userInput, setUserInput] = useState('')

  const handleChange = (e) => {
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(userInput)
    setUserInput('')
    console.log(userInput);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
        handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
          value={userInput}
          type='text'
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder='Введіть значення...' />
          <button>Зберегти</button>
    </form>
  )
}

export default TodoForm