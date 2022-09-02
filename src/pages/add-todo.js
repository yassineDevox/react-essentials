import React, { useRef } from "react"
import { useDispatch,useSelector } from "react-redux/"
import { isLoading, saveTodo, selectErrorMsg, selectSuccesMsg } from "../features/slices/todo"
import { Loader, Message } from "./list-todo"
import {TodoModel} from './../models/todo'

export const AddPage = () => {

  const call = useDispatch()
  const loading = useSelector(isLoading)
  const error   = useSelector(selectErrorMsg)
  const success   = useSelector(selectSuccesMsg)
  const inputRef = useRef()
  const  handleSubmit = (e)=>{
    let val = inputRef.current.value
    e.preventDefault()  
    call(saveTodo(new TodoModel(null,val)))
    inputRef.current.value=""
  }
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Add new Task" ref={inputRef} />
      <button type="submit">Save</button>
    </form>
    { loading ? <Loader /> : error ? <Message content={error} />:<Message content={success} color="green" />}
    </>
    
  )
}
