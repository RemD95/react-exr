import { useState } from "react";
import useFetch from "./useFetch";

const ToDoList = () => {
    const [text, setText] = useState("");
    const handleButton = (e) => {
        e.preventDefault()
        setText(e.target.testo.value)
        const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');
        if (loading) 
            { return <div>Loading...</div> };
        if (error) 
            { return <div>Errore di caricamento:{error}</div> };
    }
    return (
        <>
            <h2>To Do List</h2>
            <form onSubmit={handleButton}>

                <ul>
                    {data.map(todo=>(
                        <li key={ToDoList.id}>
                        <h3>todo.title</h3>
                     </li>
                    ))}                    
                </ul>
                <button>Add</button>

            </form>

            <p>{text}</p>
        </>
    )
};

export default ToDoList;