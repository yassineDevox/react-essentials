import React from 'react'
import { useContext } from 'react'
import { builderContext } from '../context'
import { switchDevice } from '../reducers/builder'

const Device = () => {
  const {builder,dispatch} = useContext(builderContext)
  const onDeviceChanged = (e)=>{
    dispatch(switchDevice(e.target.value))
  }
  return <div style={{border:"1px solid green",padding:10,marginBottom:10}}>
    <select value={builder.currentDevice} onChange={onDeviceChanged}>
      <option value="mobile">Run into mobile ... 😎</option>
      <option value="desktop">Run into desktop ... 🙂</option>
    </select>  
  </div>
}

export default Device
