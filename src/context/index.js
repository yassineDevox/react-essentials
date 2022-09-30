import React, { useReducer, useState } from 'react'
import { builderReducer, initialState } from '../reducers/builder'

export const builderContext = React.createContext()

export const BuilderProvider = ({ children }) => {
const [builder, dispatch] = useReducer(builderReducer,initialState)
  return (
    <builderContext.Provider
      value={{ builder,dispatch }}
    >
      {children}
    </builderContext.Provider>
  )
}
