import { useState } from "react";

const ToDoList = ()=>{
const [text, setText]= useState("");
const handleButton = (e)=> {
    e.preventDefault()
    setText(e.target.testo.value)

}
    return(
        <>
        <h2>To Do List</h2>
       <form onSubmit={handleButton}>
        
        <input type="text" name="testo" />
        <button>Add</button>
        
        </form>
        
        <p>{text}</p>
        </>
    )
};

export default ToDoList;