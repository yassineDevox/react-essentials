import React from 'react'
import { TodoCmp } from './todo'

export const TodosCmp = ({ list = [] }) => {

  
  return (
    <ul>
      {
        list.map( t => <TodoCmp key={t.id} id={t.id} title={t.title} isCompleted={t.completed}/> )
      }
    </ul>
  )
}
