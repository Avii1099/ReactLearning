import { useState } from 'react'

function App() {
  const colors = ['red', 'green', 'purple', 'black', 'blue', 'grey', 'tan', 'teal', 'pink', 'orange', 'maroon',]
  const [color, setColor] = useState("green");
  

  return (
    
    <div className='w-full h-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-3xl'>
          {
            colors.map((color) => (
              <button key={color} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: color}}
              onClick={()=> setColor(color)}
              >{color}</button>
            ))
          }
        </div>
      </div>
    </div>
    
  )
}

export default App
