import React from 'react'
import { useContext } from 'react'
import { builderContext } from '../context'

const Device = () => {
  const {device:currentDevice,setDevice} = useContext(builderContext)
  return <div style={{border:"1px solid green",padding:10,marginBottom:10}}>
    <select value={currentDevice} onChange={(e)=>setDevice(e.target.value)}>
      <option value="MOBILE">Run into mobile ... 😎</option>
      <option value="DESKTOP">Run into desktop ... 🙂</option>
    </select>  
  </div>
}

export default Device
