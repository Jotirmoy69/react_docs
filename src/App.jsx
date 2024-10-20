import { useState } from 'react' 
import './App.css'
import Background from './components/Background'
import Foreground from './components/Foreground'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div className=' relativew-full  h-screen bg-zinc-800'>
        <Background />
        <Foreground/>
       </div>
    </>
  )
}

export default App
