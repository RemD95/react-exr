import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HelloWorld from './HelloWorld'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

function App() {
  return (
    <div>
      <HelloWorld />
    </div>
  )
}


const AppSubmit = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const clearForm = () => {
    setForm({
      email: "",
      password: ""
    })
  }

  return (
    <>
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" onInput={handleInput} value={form.email} id="email" name="email" placeholder="inserisci email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" onInput={handleInput} value={form.password} id="password" name="password" placeholder="inserisci password" />
      </div>
      <div>
        <button type="submit">Registrati</button>
      </div>
    </form>
    <div>
      
    </div>
    </>
  )
}

export default AppSubmit
