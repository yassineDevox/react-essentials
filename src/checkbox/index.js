import React from 'react'
import checkboxStyle from './checkbox.module.css'

export const Checkbox = ({ label }) => {
  return (
    <div className={checkboxStyle.container}>
      <input type='checkbox' />
      <label style={{color:"#303f9f6e"}}>{label} </label>
    </div>
  )
}
