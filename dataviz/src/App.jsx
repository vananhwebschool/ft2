import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Component1 from './resumeAnnee/component1'
import Map from "./Map"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Component1></Component1>
      <Map/>
    </>
  )
}

export default App
