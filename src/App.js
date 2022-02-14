import React, { useRef } from 'react'

const App = () => {

  const nameRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault()

    //target the input and get the value 
    alert(nameRef.current.value)
  }


  return (
    <>
      <div className="text-center p-5">
        <form onSubmit={handleSubmit}>
          <input 
            ref={nameRef}
            type="text"
            placeholder='Type your name 😃 !!'
            className='m-1' />
          <button
            type='submit'
            className="btn btn-success">SAVE</button>
        </form>

      </div>
    </>
  )
}

export default App