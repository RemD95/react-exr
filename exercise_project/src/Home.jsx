// "/" -> http://localhost:PORT

import ToDoList from "./ToDoList"

const Home = () => {
    return (
        <div>
            <h1>Homepage</h1>
            <p>Lista Delle Cose Da Fare</p>
            <ToDoList />
        </div>
    )
};

export default Home