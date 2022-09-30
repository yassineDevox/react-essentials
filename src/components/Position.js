import React from 'react'
import { useContext } from 'react'
import { builderContext } from '../context'
import { setPosition } from '../reducers/builder'
const log = m=>console.log(m)
const Position = () => {
  const {
    builder:{currentDevice},
    builder,
    dispatch
  } = useContext(builderContext)

  const onPositionChanged = (e)=>{
    dispatch(setPosition(e.target.value))
  }

  return (
    <div style={{ border: '1px solid red', padding: 10 }}>
      {/* for mobile  */}
      {currentDevice === 'mobile' && (
        <select
          value={builder.banner[currentDevice].position}
          onChange={onPositionChanged}
        >
          <option value='top'>TOP</option>
          <option value='center'>CENTER</option>
          <option value='bottom'>BOTTOM</option>
        </select>
      )}
      {/* for desktop  */}
      {currentDevice === 'desktop' && (
        <select
          value={builder.banner[currentDevice].position}
          onChange={onPositionChanged}
        >
          <option value='top_l'>TOP_LEFT</option>
          <option value='top'>TOP</option>
          <option value='top_r'>TOP_RIGHT</option>
          <option value='center_l'>CENTER_LEFT</option>
          <option value='center'>CENTER</option>
          <option value='center_r'>CENTER_RIGHT</option>
          <option value='bottom_l'>BOTTOM_LEFT</option>
          <option value='bottom'>BOTTOM</option>
          <option value='bottom_r'>BOTTOM_RIGHT</option>
        </select>
      )}
    </div>
  )
}

export default Position
