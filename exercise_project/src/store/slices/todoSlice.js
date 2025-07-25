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
            state.items.push({
                id:state.next
            })
        },
        removeTodo:(state, action)=>{

        },
        toggleTodo:(state, action)=>{

        },
        extrareducers: (builder)=>{
            builder
            .addCase(fetchTodosThunk.pending, state=> {
                state.status='Loading';
            })
            .addCase(fetchTodosThunk.fulfilled, (state,action)=> {
                state.items='succeeded';
                state.items=action.payload;
            })
            .addCase(fetchTodosThunk.rejected, (state, action)=>{
                state.status='failed'
                state.error=action.error.message??'Errore'
            })
        }
    }
})

export default todoSlice.reducer;
export const {addTodo, removeTodo }= todoSlice.actions