import { useState } from "react"

const todoActions = {
  ADD:"todo/add",
  UPDATE:"todo/update",
  DELETE:"todo/delete",
  DETAILS:"todo/details",
}


 //action with just one func
 const todoCrud = (action,setAction) => {

  switch (action) {
    case todoActions.ADD:
      setAction("save todo")
      break;
    case todoActions.UPDATE:
      setAction("update todo")
      break;
    case todoActions.DELETE:
      setAction("delete todo")
      break;
    case todoActions.DETAILS:
      setAction("details on todo")
      break;
  }
}

function App1() {

  const [action, setAction] = useState("")
  //action 
  // const onTodoSaved = _ => setAction("save todo")
  // const onTodoUpdated = _ => setAction("update todo")
  // const onTodoDeleted = _ => setAction("delete todo")
  // const onTodoDetailed = _ => setAction("details on todo")

 

  return (
    <>
      <h1>Action : {action} 😃 !!</h1>
      <button onClick={()=>todoCrud(todoActions.ADD,setAction)}>save </button>
      <button onClick={()=>todoCrud(todoActions.UPDATE,setAction)}>update</button>
      <button onClick={()=>todoCrud(todoActions.DELETE,setAction)}>delete</button>
      <button onClick={()=>todoCrud(todoActions.DETAILS,setAction)}>more details</button>
    </>
  );
}

export default App1;
