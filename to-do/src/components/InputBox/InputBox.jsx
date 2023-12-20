import React from 'react'
import './InputBox.css'

function InputBox() {
  return (
    <div className='container'>
        <form className='input-form'>

            <label for="task">Task:</label>
            <input type="text" id="task" name="task" placeholder="Enter your task"/>
        
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default InputBox