import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className="read-the-docs">Clique em sobre nós para ver imagens e em informações para dados</p>
      <Link to="/about">Sobre nós</Link>
      <br />
      <Link to="/data">Informações</Link>
    </>
  )
}

export default App