import React, { useState } from 'react'

export const builderContext = React.createContext()

export const BuilderProvider = ({ children }) => {
  const [builder, setBuilder] = useState({
    banner: {
      mobile: {
        position: 'top'
      },
      desktop: {
        position: 'center'
      }
    },
    currentDevice: 'desktop'
  })

  return (
    <builderContext.Provider value={{ builder, setBuilder }}>
      {children}
    </builderContext.Provider>
  )
}
