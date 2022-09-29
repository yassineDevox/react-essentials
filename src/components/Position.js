import React from 'react'
import { useContext } from 'react'
import { builderContext } from '../context'

const Position = () => {
  const { position: currentPosition, setPosition, device } = useContext(
    builderContext
  )
  return (
    <div style={{ border: '1px solid red', padding: 10 }}>
      
      {/* for mobile  */}
      {device === 'MOBILE' && (
        <select value={currentPosition} onChange={e => setPosition(e.target.value)}>
          <option value='top'>TOP</option>
          <option value='center'>CENTER</option>
          <option value='bottom'>BOTTOM</option>
        </select>
      )}
      {/* for desktop  */}
      {device === 'DESKTOP' && (
        <select value={currentPosition} onChange={e => setPosition(e.target.value)}>
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
