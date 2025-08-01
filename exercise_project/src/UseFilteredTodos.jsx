import React, { useState, useEffect } from 'react';

function useFilteredTodos(todos, searchTerm) {
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();

        const filteredT = todos.filter(todo =>
            todo.title.toLowerCase().includes(lowercasedSearchTerm)
        );

        setFilteredTodos(filteredT);
    }, [todos, searchTerm]);

    return filteredTodos;
}

export default useFilteredTodos