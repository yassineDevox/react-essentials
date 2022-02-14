import React, { useState } from 'react'

const App = () => {

  const [name, setName] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name)
  }


  return (
    <>
      <div className="text-center p-5">

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Type your name 😃 !!'
            className='m-1'
            onChange={(e) => setName(e.target.value)} />
          <button
            type='submit'
            className="btn btn-success">SAVE</button>
        </form>

      </div>
    </>
  )
}

export default App