import { useState } from 'react'
import './App.css'
import ToDoList from './ToDoList'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)


  const myItems = ['pane', 'latte', 'uova', 'verdure']

  return(
    <div>
      <ToDoList/>
    </div>
  )

}

function Card(props) {
  return (
    <div>
      <Card>
        <h2>Titolo della Card</h2>
        <p>Paragrafo di esempio della Card </p>
      </Card>
    </div>
  )

}


  




export default App
