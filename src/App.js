import React, { useState } from 'react'

const App = () => {

  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChangeFname = (e) => setFname(e.target.value)

  const handleChangeLname = (e) => setLname(e.target.value)



  return (
    <>
      <div className="text-center p-5">

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Type your firstname 😃 !!'
            className='m-1'
            onChange={handleChangeFname} />
            <br />

          <input
            type="text"
            placeholder='Type your lastname 😃 !!'
            className='m-1'
            onChange={handleChangeLname} />
            <br />


          <button
            type='submit'
            className="btn btn-success">SAVE</button>
        </form>

      </div>
    </>
  )
}

export default App