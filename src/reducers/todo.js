export const initialState = {
    newTodo: "dazdazd",
    updatedTodo: "",
    deleteTodo: "",
    details: ""
  }

export const todoActions = {
    ADD: "todo/add",
    UPDATE: "todo/update",
    DELETE: "todo/delete",
    DETAILS: "todo/details",
}
  
  
  
  //pure function reducer !!
  export const todoReducer = (prevState=initialState,action) => {
    
    const { type, payload } = action
  
    switch (type) {
      case todoActions.ADD:
        return { 
          ...prevState,
          newTodo:payload.data
        }
  
      case todoActions.UPDATE:
        return { 
          ...prevState,
          updatedTodo:payload.updatedVal + " id:" + payload.id
        } 
        
      case todoActions.DELETE:
        return { 
          ...prevState,
          deleteTodo:
          payload.deletedId
    
        } 
        
      case todoActions.DETAILS:
        return {
          ...prevState,
          details:payload.id
        }
    }
  }
  