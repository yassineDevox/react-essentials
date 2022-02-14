import React, { useState } from 'react'
import { UserModel } from './models/user'

const App = () => {

  const [user, setUser] = useState(new UserModel())

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChangeInput = (e) => {
    let name = e.target.name
    let value = e.target.value
    //spread operator
    setUser({ ...user, [name]: value })
  }

  return (
    <>
      <div className="text-center p-5">
        {
          JSON.stringify(user)
        }
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Type your firstname 😃 !!'
            className='m-1'
            onChange={handleChangeInput}
            name="fname"
          />
          <br />

          <input
            type="text"
            placeholder='Type your lastname 😃 !!'
            className='m-1'
            onChange={handleChangeInput}
            name="lname"
          />
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