import { useState } from 'react'
import './App.css'
import ItemList from './components/ItemList'
import Card from './components/Card'
import ToDoList from './components/ToDoList'
import { ToDoProvider } from './ToDoContext'
import { Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)


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

      <Home>
        <ToDoProvider>
          <ToDoList />
        </ToDoProvider>
      </Home>
     
      <About>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, amet.</p>
      </About>

      <Routes>
        <Route path="/" elemnt={<Home />} />
        <Route path="/" elemnt={<About />} />
      </Routes>
    </div>
  )

}

export default App
