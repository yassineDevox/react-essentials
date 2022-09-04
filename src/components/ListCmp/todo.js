import React, { useState } from 'react'
import { useDispatch } from 'react-redux/'
import { deleteTodo, toggleTodo } from '../../features/slices/todo'
import { useNavigate } from "react-router-dom";
import { TodoModel } from '../../models/todo';

const styles = {
  btn: { marginLeft: 10, zoom: .7 },
  todoCheck:{ cursor: "pointer"},
  todoItem: {
    zoom: "1.7",
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  },
  todoTitle:(d)=>({ marginTop: "-3px",
    marginLeft: 7,
    textTransform: "capitalize",
    fontFamily: "monospace",
    textDecoration : d ? "line-through":"" }),
}

export const TodoCmp = ({ title, isCompleted, id }) => {
  const [done, setDone] = useState(isCompleted)
  let navigate = useNavigate();
  const call = useDispatch()
  const onTodoDeleted = () => {
    if (!window.confirm("Are you sure ?")) return
    call(deleteTodo(id))
  }

  const onTaskToggle = (e) => { 
    call(toggleTodo(new TodoModel(id,title,!done)))
    setDone(!done)
  }

  return (
    <li style={styles.todoItem}>
      <input
        onChange={onTaskToggle}
        type="checkbox" style={styles.todoCheck}
        checked={done}
      />
      <span style={styles.todoTitle(done)}>{title}</span>
      <button style={styles.btn}
        onClick={onTodoDeleted}>DEL </button>
      <button style={styles.btn}
        onClick={() => navigate('edit/' + id)}>Edit </button>
      <button style={styles.btn}
        onClick={() => navigate('details/' + id)}>More </button>
    </li>
  )
}
