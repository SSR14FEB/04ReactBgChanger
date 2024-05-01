import { useState } from 'react'
import BackGrounds from './Bg'

function App() {
  let [color, setcolor] = useState("yellow")

  return (
    <>
    <BackGrounds colors={color} />
    <div className=' relative flex flex-wrap justify-center bottom-48  border-black '>
      
      <div className='flex text-xl text-white bg-white justify-between py-1 px-2 rounded-xl gap-5 '>
     
      <button onClick={()=>setcolor("red")} className=' py-1 px-2 rounded-xl' style={{backgroundColor:'red'}}>red</button>

      <button onClick={()=>setcolor("green")} className='  py-1 px-2 rounded-xl' style={{backgroundColor:'green'}}>green</button>

      
      <button onClick={()=>setcolor("blue")} className=' py-1 px-2 rounded-xl' style={{backgroundColor:'blue'}}>blue</button>

      <button onClick={()=>setcolor("yellow")} className=' py-1 px-2 rounded-xl' style={{backgroundColor:'yellow'}}>yellow</button>
    </div>
    </div>
    </>
  )
}

export default App
