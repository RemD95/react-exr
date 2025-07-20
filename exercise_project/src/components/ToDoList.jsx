import { useState } from "react";
import useFetch from "../hooks/useFetch";
import useFilteredTodos from "../hooks/useFilteredTodos.js";
import { useCallback } from "react";

const ToDoList = () => {
    const [text, setText] = useState("");
    const [searchTerm, setSearchTerm]=usestate("");  
    
        const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');
        const filteredTodos = useFilteredTodos(data, searchTerm);
        const handleSearchChange = useCallback((event) => {
            setSearchTerm(event.target.value)
        },[]);
        if (loading) 
            { return <div>Loading...</div> };
        if (error) 
            { return <div>Errore di caricamento:{error}</div> };
    
    
    return (
        <>
            <h2>To Do List</h2>
                <input type="text" onChange={handleSearchChange} />
                <ul>
                    {filteredTodos.map(todo=>(
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