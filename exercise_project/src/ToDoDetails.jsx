import { useParams } from "react-router-dom"


const ToDoDetails = ()=>{
 const params =useParams()
    return(
        <>
        <h1>ToDo Details</h1>
        <div>
            Todo ID:{params.id}
        </div>
        </>
    )

}

export default ToDoDetails