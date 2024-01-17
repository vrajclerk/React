import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj={
    username:"Ellyse",
    age:32
  }
  let newArr=[1,2,3,4]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded xl' >Taiwind</h1>
    <Card username="Ellyse Perry" someObje={newArr} btnText="click me"/>
    <Card  username="vraj" btnText="visit me"/>
    </>
   

  )
}

export default App
