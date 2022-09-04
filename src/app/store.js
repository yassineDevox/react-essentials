import { configureStore } from "@reduxjs/toolkit";
import { sleep } from "../helper";
import { clearMsg, todoReducer } from "./../features/slices/todo"

export const RdxStore = configureStore({
    reducer: {
        todo: todoReducer
    }
})

//subscribe to the store 
if (RdxStore)
    var unsubscribe = RdxStore.subscribe(async () => {
        let currentState = RdxStore.getState()
        if (currentState.todo.errorMsg.length > 0
            || currentState.todo.successMsg.length > 0) {
           
             await sleep(2000)
             RdxStore.dispatch(clearMsg())
            
        }
    })