import { useState } from 'react'

function App() {
  const [color,setcolor]= useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl py-2 px-3'>
            <button onClick={()=>setcolor("red")}
            className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor: "red" }}>Red</button>
            <button onClick={()=>setcolor("green")}
            className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor: "green" }}>Green</button>
            <button onClick={()=>setcolor("blue")}
            className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor: "blue" }}>Blue</button>
            <button onClick={()=>setcolor("purple")}
            className='outline-none px-4 rounded-full py-1 text-white shadow-lg' style={{backgroundColor: "purple" }}>Purple</button>
            <button onClick={()=>setcolor("grey")}
            className='outline-none px-4 rounded-full py-1 text-white shadow-lg' 
            style={{backgroundColor: "Grey" }}>Grey</button>
            <button onClick={()=>setcolor("yellow")}
            className='outline-none px-4 rounded-full py-1 text-black shadow-lg' 
            style={{backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={()=>setcolor("olive")}
            className='outline-none px-4 rounded-full py-1 text-white shadow-lg' 
            style={{backgroundColor: "olive" }}>olive</button>
            <button onClick={()=>setcolor("Lavender")}
            className='outline-none px-4 rounded-full py-1 text-black shadow-lg' 
            style={{backgroundColor: "Lavender" }}>Lavender</button>
            <button onClick={()=>setcolor("black")}
            className='outline-none px-4 rounded-full py-1 text-white shadow-lg' 
            style={{backgroundColor: "black" }}>black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
