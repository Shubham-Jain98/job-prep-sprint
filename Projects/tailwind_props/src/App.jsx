import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "Shubham Jain",
    age: 21
  }

  let newArr = [1,3,2]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>
        Tailwind Test
      </h1>
      <Card channel="shubham" someOBj = {myObj}  myArray = {newArr}/>
      <Card someOBj = {myObj}  myArray = {newArr}/>
    </>
  )
}

export default App
