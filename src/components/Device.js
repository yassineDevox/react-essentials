import React from 'react'
import { useContext } from 'react'
import { builderContext } from '../context'

const Device = () => {
  const {builder:{currentDevice},builder,setBuilder} = useContext(builderContext)
  const onDeviceChanged = (e)=>{
    setBuilder({...builder,currentDevice:e.target.value})
  }
  return <div style={{border:"1px solid green",padding:10,marginBottom:10}}>
    <select value={currentDevice} onChange={onDeviceChanged}>
      <option value="mobile">Run into mobile ... 😎</option>
      <option value="desktop">Run into desktop ... 🙂</option>
    </select>  
  </div>
}

export default Device
