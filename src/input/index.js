import React from 'react'

export const Input = ({ placeholder, label }) => {
  return (
    <div style={{ margin: 10, color: '#303f9f', fontFamily: 'monospace' }}>
      <label style={{ fontWeight: 'bold' }}>{label}</label>
      <br />
      <textarea
        placeholder={placeholder}
        type='text'
        style={{
          padding: 5,
          border: '2px solid #303f9f',
          width: '100%',
          backgroundColor: '#80808017',
          height: '60px'
        }}
      />
    </div>
  )
}
