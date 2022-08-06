import { useState } from "react"

const todoActions = {
  ADD: "todo/add",
  UPDATE: "todo/update",
  DELETE: "todo/delete",
  DETAILS: "todo/details",
}

//action with just one func
const todoCrud = (action) => {
  const { type, payload } = action
  switch (type) {
    case todoActions.ADD:
      return "new todo added :  " + payload.data

    case todoActions.UPDATE:
      return "update todo : " + payload.updatedVal + " id:" + payload.id

    case todoActions.DELETE:
      return "delete todo" + payload.deletedId

    case todoActions.DETAILS:
      return "details on todo for id " + payload.id

  }
}



function App2() {

  const [action, setAction] = useState("")

  return (
    <>
      <h1>Action : {action} 😃 !!</h1>
      <button onClick={() => {
        const newTodo = prompt("new Todo : ")
       setAction (todoCrud({ type: todoActions.ADD, payload: { data: newTodo } }))
      }}>save </button>
      <button onClick={() => {
        const updatedVal = prompt("updated todo : ")
        setAction(todoCrud({ type: todoActions.UPDATE, payload: { updatedVal, id: 1 } }))
      }}>update</button>
      <button onClick={() => {
        setAction(todoCrud({ type: todoActions.DELETE, payload: { deletedId: 1 } }))
      }}>delete</button>
      <button onClick={() => {
        setAction(todoCrud({ type: todoActions.DETAILS, payload: { id: 1 } }))
      }}>more details</button>
    </>
  );
}

export default App2;
