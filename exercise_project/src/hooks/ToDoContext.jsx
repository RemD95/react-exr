import { createContext, useContext } from 'react'
import {useFetch} from './hooks/useFetch'

const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
    const [data, loading, error] = useFetch('https://jsonplaceholder.typicode.com/todos');
    const value = {data, loading, error};

    return (
        <>
        <ToDoContext.Provider value={value}>
            {children}
        </ToDoContext.Provider>
        </>
    );
}

export const useTodos = ( ) => {
    const context = useContext(ToDoContext)
    if (context === undefined){
        throw new Error("Provider Error");
    }
    return context
};
 
export default ToDoContext