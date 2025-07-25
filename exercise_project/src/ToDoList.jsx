import { useState } from "react";
import { useCallback } from "react";
import { useMemo } from "react";
import { useRef, useEffect } from "react";
import { useTodos } from "./ToDoContext.jsx";
import { Link } from "react-router-dom";
import { } from '@reduxjs/toolkit'

const ToDoList = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const { data, loading, error } = useTodos();
    const inputRef = useRef(null);
    const filteredTodos = useMemo(() => {
        if (!data) {
            return [];
        }
        return data.filter(todo =>
            todo.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
    }, [data, searchTerm]);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value);
    }, []);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>Errore di caricamento:{error}</div>
    };



    return (
        <>
            <h2>To Do List</h2>
            <input
                ref={inputRef}
                type="text"
                onChange={handleSearchChange}
                placeholder="Cerca toDo"
            />
            <ul>
                {filteredTodos.map(todo => (
                    <li key={todo.id}>
                        <Link to={'/todo/${todo.id}'}>
                            <h3>{todo.title}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
};

export default ToDoList