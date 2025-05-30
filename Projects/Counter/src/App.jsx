import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5) 
  
  
  // let counter = 5

  const addValue = ()=>{
    // console.log("Clicked",counter);
    if (counter>=20) {
      console.log("Can't go more than 20!!");
      
      return;
    }
    counter = counter+1
    setCounter(counter)
  }


  const removeValue = ()=>{
    // console.log("Clicked",counter);
    if (counter<=0) {
      console.log("Can't go negative!!");
      
      return;
    }
    counter = counter-1
    setCounter(counter)
  }

  return (
    <>
      <h1>Coding in react</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick={addValue}> Add Value </button>
      <br />
      <button
      onClick={removeValue}> Remove Value </button>
    </>
  )
}

export default App
