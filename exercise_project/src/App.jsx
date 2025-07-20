import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList.jsx'
import Card from './components/Card.jsx'
import ToDoList from './ToDoList.jsx'
import ToDoProvider from './ToDoContext.jsx'
import { Routes, Route } from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Navbar from './components/NavBar.jsx'

function App() {
  const [count, setCount] = useState("")


  const myItems = ['pane', 'latte', 'uova', 'verdure']

  return (
    <div>
      <Navbar />
      
      <ItemList items={myItems} />
      
      <Card>
        <h2>Titolo della Card</h2>
        <p>Paragrafo della card</p>
      </Card>

      <Card>
        <h2>Titolo 2</h2>
        <p>Paragrafo della card</p>
      </Card>

    <ToDoProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      </ToDoProvider>
    </div>
  )

}

export default App
