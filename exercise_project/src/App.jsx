import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import UncontrolledInput from './components/UncontrolledInput'


function App() {
  const [count, setCount] = useState(0)


  const myItems = ['pane', 'latte', 'uova', 'verdure']

  return(
    <div>
      <ToDoList/>
    </div>
  )

  return(
    <>
    <UncontrolledInput/>
    </>
  )
}



  




export default App
