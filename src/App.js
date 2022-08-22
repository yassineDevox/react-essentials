import React from 'react'
import { Provider } from 'react-redux'
import { RdxStore } from './app/store'
import { AppRoutes } from './routes'

const App = () => {
  return (
    <Provider store={RdxStore}>
      <AppRoutes/>
    </Provider>
    
  )
}

export default App