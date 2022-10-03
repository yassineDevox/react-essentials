import React from 'react'
import inputStyle from "./input.module.css"
export const Input = ({ placeholder, label }) => {
  return (
    <div className={inputStyle.container}>
      <label style={{ fontWeight: 'bold' }}>{label}</label>
      <br />
      <textarea
        placeholder={placeholder}
        type='text'
        className={inputStyle.inpt}
      />
    </div>
  )
}
