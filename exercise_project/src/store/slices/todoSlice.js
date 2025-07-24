import {createSlice} from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';

const fetchTodos= createAsyncThunk(
    'todos/fetchTodo',
    async()=>{
        const response =await fetch('https://jsonplaceholder.typicode.com/todos')
        return response.json()
    }
)

const todoSlice = createSlice({
    name:"todo",
    initialState:{
        items:[],
        status: 'idle',
        error:null
    },
    reducers:{
        addTodo:(state, action)=>{

        },
        removeTodo:(state, action)=>{

        },
        extrareducers: (builder)=>{
            builder.addCase(fetchTodos.pending, state=> {
                state.status='Loading'
            })
            builder.addCase(fetchTodos.fulfilled state=> {
                state.items=
            })
            builder.addCase(fetchTodos.rejected)
        }
    }
})

export default todoSlice.reducer;
export const {addTodo, removeTodo }= todoSlice.actions