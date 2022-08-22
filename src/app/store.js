import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "./../features/slices/todo"

export const RdxStore = configureStore({
    reducer: {
        todo: todoReducer
    }
})