import './App.css'
import ItemList from './components/ItemList.jsx'
import Card from './components/Card.jsx'
import ToDoProvider from './ToDoContext.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from './Home.jsx'
import About from './About.jsx'
import Layout from './components/Layout.jsx'


function App() {

  const myItems = ['pane', 'latte', 'uova', 'verdure']

  return (
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

      <ToDoProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </ToDoProvider>
    </div>
  )

}

export default App
