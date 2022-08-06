import { useState } from "react"
import { initialState, todoActions, todoReducer } from "./reducers/todo";


function App() {

  const [action, setAction] = useState(initialState)

  return (
    <>
      <h1>Action : 😃 !!</h1>
      <button onClick={() => {
        const newTodo = prompt("new Todo : ")
        setAction(
          todoReducer(action,{ type: todoActions.ADD, payload: { data: newTodo } })
        )
      }}>save </button>
      <button onClick={() => {
        const updatedVal = prompt("updated todo : ")
        setAction(todoReducer(action,{ type: todoActions.UPDATE, payload: { updatedVal, id: 1 } }))
      }}>update</button>
      <button onClick={() => {
        setAction(todoReducer(action,{ type: todoActions.DELETE, payload: { deletedId: 1 } }))
      }}>delete</button>
      <button onClick={() => {
        setAction(todoReducer(action,{ type: todoActions.DETAILS, payload: { id: 1 } }))
      }}>more details</button>
    </>
  );
}

export default App;
