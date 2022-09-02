import React, { useEffect, useRef } from "react"
import { useDispatch,useSelector } from "react-redux/"
import { useParams } from "react-router-dom"
import { editTodo, isLoading, selectErrorMsg, selectSuccesMsg } from "../features/slices/todo"
import { Loader, Message} from "./list-todo"
import {TodoModel} from './../models/todo'

export const EditPage = () => {

  //route
  const {id} = useParams()

  //redux
  const call = useDispatch()
  const loading = useSelector(isLoading)
  const error   = useSelector(selectErrorMsg)
  const success = useSelector(selectSuccesMsg)
  const store = useSelector(s=>s)
  
  //refs
  const inputRef = useRef()
  const checkRef = useRef()

  //actions
  const  handleSubmit = (e)=>{
    let title = inputRef.current.value
    let completed = checkRef.current.value
    e.preventDefault()     
    inputRef.current.value = ""
    call(editTodo(new TodoModel(id,title,completed)))
  } 

  useEffect(()=>{
    const updatedTodo = store.todo.list.find(t=>t.id==Number(id)) || undefined
    if(updatedTodo){
      inputRef.current.value = updatedTodo.title
      checkRef.current.checked = updatedTodo.completed
    }
  },[])
    


  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="checkbox" ref={checkRef} />
      <input type="text" ref={inputRef} />
      <button type="submit">Update</button>
    </form>
    { loading ? <Loader /> : error ? <Message content={error} />:<Message content={success} color="green" />}
    </>
    
  )
}
