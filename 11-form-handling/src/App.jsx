import React from 'react'

const App = () => {

  const Onsubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
    console.log(e.target[0].value)
  }
  return (
    <div>
      <h1>Form Handling</h1>
      <form onSubmit={Onsubmit}>
        <input type="text" placeholder="Enter your name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App