import React from 'react'
import { useState } from 'react'
const App = () => {

  const [Title, setTitle] = useState('')

  const Onsubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    console.log(Title)
    setTitle('')
  }
  return (
    <div>
      <h1>Form Handling</h1>
      <form onSubmit={Onsubmit}>
        <input type="text" placeholder="Enter your name" 
        value={Title}
        onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App