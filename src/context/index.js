import React, { useState } from 'react'

export const builderContext = React.createContext()

export const BuilderProvider = ({ children }) => {
  const [device, setDevice] = useState('DESKTOP')
  const [position, setPosition] = useState('top')

  return (
    <builderContext.Provider
      value={{ device, setDevice, position, setPosition }}
    >
      {children}
    </builderContext.Provider>
  )
}
