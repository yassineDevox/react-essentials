import React from 'react'
import selectStyle from "./select.module.css"

export const Select = ({ list = [], label }) => {
  return list.map((s, index) => (
    <div className={selectStyle.container}>
      <label style={{ fontWeight: 'bold' }}>{label} <span style={{color:"#303f9f6e"}}>(Optional)</span> </label> 
      <br/>
      <select>
        <option key={index} value={s.val}>
          {s.name}
        </option>
      </select>
    </div>
  ))
}
