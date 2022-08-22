import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { TodosCmp } from "../components/ListCmp"
import { isLoading, loadTodos, selectErrorMsg, selectTodos } from "../features/slices/todo"

export class TodoModel {

  constructor(id, title, completed = false) {
    this.id = id
    this.title = title
    this.completed = completed
  }
}

export const Loader = () => <p>loading...</p>
export const Message = ({content,color="red"}) => <p style={{color,textTransform:"capitalize"}}>{content}</p>
export const ListPage = () => {

  const call = useDispatch()
  const todos = useSelector(selectTodos)
  const loading = useSelector(isLoading)
  const error   = useSelector(selectErrorMsg)
  useEffect(() => {
    call(loadTodos())
  }, [])

  return (
    <div style={{textAlign:"center"}}>
      <h3>My Todos </h3>
      { loading ? <Loader /> : !error ? <TodosCmp list={todos} />:<Message content={error} />}
    </div>
  )
}
