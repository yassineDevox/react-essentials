import React, { useEffect, useReducer } from 'react'
import { builderReducer, initialState } from '../reducers/builder'

export const builderContext = React.createContext()

export const BuilderProvider = ({ children }) => {
const [builder, dispatch] = useReducer(builderReducer,initialState)
  
  useEffect(() => {
    console.log("builder changed",builder)
  }, [builder])
  
  useEffect(() => {
    console.log("current device changed",builder)
  }, [builder.currentDevice])
  
  return (
    <builderContext.Provider
      value={{ builder,dispatch }}
    >
      {children}
    </builderContext.Provider>
  )
}
