import React from 'react'
import Device from './components/Device'
import Position from './components/Position'
import { BuilderProvider } from './context'

const App = () => {
  return (
    <BuilderProvider>
      <Device />
      <Position />
    </BuilderProvider>
  )
}

export default App
