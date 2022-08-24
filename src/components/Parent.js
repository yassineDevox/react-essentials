import React from 'react'
import Child from './Child'
import  "./styles.css"

const Parent = () => {
  return (
    <div className='red'>
        parent 
        <Child/>
    </div>
  )
}

export default Parent