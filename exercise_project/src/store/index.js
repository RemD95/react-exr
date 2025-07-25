import {configureStore} from '@reduxjs/toolkit'
import {todosReducer} from './store/slices/todoSlice.js'


export default configureStore({
    reducer:{
        todo: todosReducer,
    },
});