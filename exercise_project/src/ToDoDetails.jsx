import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const ToDoDetails = () => {
    const { id } = useParams();
    const [todo, setTodo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        if (id) {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/todos/${id}')
                .then(response => {
                    if (!response.ok) {
                        throw new Error("Todo non trovato");
                    }
                    return response.json();
                })
                .then(data => {
                    setTodo(data);
                    setLoading(false);
                })
                .catch(error =>{
                    setError(error.message);
                    setLoading(false);
                });
        }
    }, [id]);
    if (loading) {   
        return <div>Caricamento...</div>
    }

    if (error) {   
        return <div>Errore : {error}</div>
    }
    
    
    return (
        <>
            <h1>Dettagli del Todo:{id}</h1>
            <p>Titolo:{todo.title}</p>
        </>
    )

}

export default ToDoDetails