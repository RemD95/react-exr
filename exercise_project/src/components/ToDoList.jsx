import { useState } from "react";
import useFetch from "../hooks/useFetch";

const ToDoList = () => {
    const [text, setText] = useState("");
    
    
        const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');
       
        if (loading) 
            { return <div>Loading...</div> };
        if (error) 
            { return <div>Errore di caricamento:{error}</div> };
    
    
    return (
        <>
            <h2>To Do List</h2>
             

                <ul>
                    {data.map(todo=>(
                        <li key={todo.id}>
                        <h3>{todo.title}</h3>
                     </li>
                    ))}                    
                </ul>
            <p>{text}</p>
        </>
    )
};

export default ToDoList;