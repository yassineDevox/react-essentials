import React, { useState, useRef } from 'react'

const App = () => {

  const [counter, setCounter] = useState(0)
  const counterWrapperRef = useRef()

  const handleClick = () => {
    setCounter(counter + 1)
    console.log(counterWrapperRef);
  }


  return (
    <>
      <div className="text-center p-5">
        <div
          ref={counterWrapperRef}
          className='text-center m-2'>{counter} 😃 !!</div>
        <button
          onClick={handleClick}
          className="btn btn-success">+</button>
      </div>
    </>
  )
}

export default App