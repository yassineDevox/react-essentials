import React, { useEffect, useRef } from "react"
import { useDispatch,useSelector } from "react-redux/"
import { useParams } from "react-router-dom"
import { isLoading, saveTodo, selectErrorMsg, selectSuccesMsg, selectTodoById } from "../features/slices/todo"
import { Loader, Message, TodoModel } from "./list-todo"


export const EditPage = () => {

  //route
  const {id} = useParams()
  //redux
  const call = useDispatch()
  const loading = useSelector(isLoading)
  const error   = useSelector(selectErrorMsg)
  const success   = useSelector(selectSuccesMsg)
  const currentTodo = useSelector(s=>selectTodoById(s,Number(id)))
  //refs
  const inputRef = useRef()
  //actions
  const  handleSubmit = (e)=>{
    let val = inputRef.current.value
    e.preventDefault()  
    
    inputRef.current.value=""
  } 

useEffect(()=>{
  console.log(currentTodo?.title)
  // inputRef.current.value = 
},[])
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" ref={inputRef} />
      <button type="submit">Update</button>
    </form>
    { loading ? <Loader /> : error ? <Message content={error} />:<Message content={success} color="green" />}
    </>
    
  )
}
