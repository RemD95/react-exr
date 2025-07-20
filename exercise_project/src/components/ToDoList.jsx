import { useState } from "react";
import useFetch from "../hooks/useFetch";
import useFilteredTodos from "../hooks/useFilteredTodos.js";
import { useCallback } from "react";
import { useMemo } from "react";
import { useRef, useEffect } from "react";
import { useEffect } from "react";
import { useTodos } from "../ToDoContext.js";


const ToDoList = () => {
    const [text, setText] = useState("");
    const [searchTerm, setSearchTerm] = usestate("");
    const {data, loading, error} = useTodos();
    const inputRef = useRef(null);
    const filteredTodos = useMemo((data, searchTerm) => {
        if (!data) {
            return [];
        }
        return data.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [data, searchTerm]);
    
    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value)
    }, []);
    if (loading) {
        return <div>Loading...</div>
    };
    if (error) {
        return <div>Errore di caricamento:{error}</div>
    };
    
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, []);

    return (
        <>
            <h2>To Do List</h2>
            <input ref={inputRef} type="text" onChange={handleSearchChange} />
            <ul>
                {filteredTodos.map(todo => (
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