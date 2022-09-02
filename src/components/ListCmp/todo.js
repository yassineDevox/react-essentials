import React from 'react'
import { useDispatch } from 'react-redux/'
import { deleteTodo } from '../../features/slices/todo'
import { useNavigate } from "react-router-dom";

const styles = {
  btn: { marginLeft: 10, zoom: .7 },
  todoCheck: { cursor: "pointer" },
  todoItem: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  },
  todoTitle: { marginTop: "-3px", marginLeft: 7, textTransform: "capitalize", fontFamily: "monospace" },
}

export const TodoCmp = ({ title, isCompleted, id }) => {
  let navigate = useNavigate();
  const call = useDispatch()
  const onTodoDeleted = () => {
    if (!window.confirm("Are you sure ?")) return
    call(deleteTodo(id))
  }
  const onTaskCompleted = () => { }

  return (
    <li style={styles.todoItem}>
      <input
        onChange={onTaskCompleted}
        type="checkbox" style={styles.todoCheck} checked={isCompleted} />
      <span style={styles.todoTitle}>{title}</span>
      <button style={styles.btn}
        onClick={onTodoDeleted}>DEL </button>
      <button style={styles.btn}
        onClick={() => navigate('edit/' + id)}>Edit </button>
      <button style={styles.btn}
        onClick={() => navigate('details/' + id)}>More </button>
    </li>
  )
}
