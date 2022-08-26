import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { client } from "../../tools/axios"

//------apis 
export const loadTodos = createAsyncThunk("todo/getAll", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const r = await client.get("/todos")
        return fulfillWithValue(r.data)
    } catch (error) {
        return rejectWithValue(error.data)
    }
})

export const saveTodo = createAsyncThunk("todo/save", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const r = await client.post("/todos", payload)
        return fulfillWithValue(r.data)
    } catch (error) {
        return rejectWithValue(error.data)
    }
})

export const deleteTodo = createAsyncThunk("todo/del", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const r = await client.delete("/todos/" + payload)
        return fulfillWithValue(payload)
    } catch (error) {
        return rejectWithValue(error.data)
    }
})

export const editTodo = createAsyncThunk("todo/edit", async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
        const r = await client.put("/todos/" + payload.id, payload)
        return fulfillWithValue(payload)
    } catch (error) {
        return rejectWithValue(error.data)
    }
})


//--------
const initialState = {
    list: [],
    loading: false,
    errorMsg: null,
    successMsg: null
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {

    },
    extraReducers: {
        [loadTodos.pending]: state => {
            state.loading = true
        },
        [loadTodos.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMsg = payload || "something went wrong 😎 "
        },
        [loadTodos.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.list = payload
        },
        [saveTodo.pending]: state => {
            state.loading = true
        },
        [saveTodo.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMsg = payload || "something went wrong 😎 "
        },
        [saveTodo.fulfilled]: (state, { payload }) => {
            console.log(payload)
            state.loading = false
            state.list.push(payload)
            state.successMsg = `Task [${payload.id}] Added Successfully 😇!`
        },
        [deleteTodo.pending]: state => {
            state.loading = true
        },
        [deleteTodo.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMsg = payload || "something went wrong 😎 "
        },
        [deleteTodo.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.list = state.list.filter(t => t.id !== payload)
            state.successMsg = `Task [${payload}] deleted Successfully 😇!`
        },
        [editTodo.pending]: state => {
            state.loading = true
        },
        [editTodo.rejected]: (state, { payload }) => {
            state.loading = false
            state.errorMsg = payload || "something went wrong 😎 "
        },
        [editTodo.fulfilled]: (state, { payload }) => {
            state.loading = false
            state.list = state.list.map(t => t.id === payload.id ? { ...payload } : t)
            state.successMsg = `Task [${payload.id}] updated Successfully 😇!`
        },


    }
})

//selectors 
export const selectTodos = s => s.todo.list
export const isLoading = s => s.todo.loading
export const selectErrorMsg = s => s.todo.errorMsg
export const selectSuccesMsg = s => s.todo.successMsg



//export red,action
export const todoReducer = todoSlice.reducer
export const {

} = todoSlice.actions
