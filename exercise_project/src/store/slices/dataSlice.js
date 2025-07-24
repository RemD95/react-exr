import {createSlice} from '@reduxjs/toolkit'

const dataSlice = createSlice({
    name: "data",
    initialState:{
        title:"My custom title",
        text:"My custom text"
    },
    reducers:{
        updateTitle:(state,  {payload}) =>{
            state.title = payload;
        },
        updateText: (state, {payload})=>{
            state.text =payload;
        }
    }
});

export const {updateText, updateTitle} = dataSlice.actions;

export default dataSlice   .reducer;
