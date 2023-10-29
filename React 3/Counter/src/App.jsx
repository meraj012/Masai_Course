import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = ()=>{
    setCount(count+1)
    }

  return (
    <>
      <h1>Count is {count}</h1>
      <button onClick={handleClick}>Click</button>
        
    </>
  )

}

export default App
