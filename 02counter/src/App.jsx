import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter,setCounter]=useState(10)//
  //let counter=15

  const addvalue=()=>{
    console.log("clicked",counter);
    //counter=counter+1;
    setCounter(counter+1)
  }
  const removeValue=()=>{
    console.log("clicked",counter);
    //counter=counter+1;
    setCounter(counter-1)
  }
  return (
   
    <>
      <h1>Vraj Clerk</h1>
      <h2>counter value:{counter}</h2>

      <button
      onClick={addvalue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}

export default App
