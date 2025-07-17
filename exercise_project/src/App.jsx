import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList'
import Card from './components/Card'
import ToDoList from './components/ToDoList'

function App() {
  const [count, setCount] = useState(0)


  const myItems = ['pane', 'latte', 'uova', 'verdure']

  return(
    <div>
      <ItemList items={myItems} />
      <Card>
        <h2>Titolo della Card</h2>
        <p>Paragrafo della card</p>
      </Card>

      <Card>
        <h2>Titolo 2</h2>
        <p>Paragrafo della card</p>
      </Card>

      <ToDoList/>
    </div>
  )
  
}

 





  




export default App
