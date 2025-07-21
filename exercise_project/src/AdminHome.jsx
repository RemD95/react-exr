// "/" -> http://localhost:PORT/admin

import ToDoList from "./ToDoList"

const AdminHome = () => {
    return (
        <div>
            <h1>AdminHomepage</h1>
            <p>Lista Delle Cose Da Fare</p>
            <ToDoList />
        </div>
    )
};

export default AdminHome