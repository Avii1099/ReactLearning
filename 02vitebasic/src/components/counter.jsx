import { useState } from 'react'
import "../App.css"


function updateLocalStorage(key, value){
  localStorage.setItem(key, value)
}

function Counter(){
  const [counter, setCounter] = useState(parseInt(localStorage.getItem("counter")) || 0)
  const addValue = () => {
    let value = counter < 5 ? counter + 1 : counter
    updateLocalStorage('counter', value)
    setCounter(value)
  }
  const removeValue = () => {
    let value = counter ?  counter - 1: 0
    updateLocalStorage('counter', value)
    setCounter(counter - 1)
  }
  const isDisable = counter == 0  
  const isAddDisable = counter == 5
  const paragraphValue = counter < 5 ? <p>Click Add/Remove to update count until
    count is 5 and less then  </p> :
  <p>Now, You can not add more count</p>
  return (
  <>
    <h1>Counter React App</h1>
    <div className='card'>
      <h2> Counter Value: {counter}</h2>
      {paragraphValue}
    </div>    
    <button disabled={isAddDisable} style={{marginRight: "10px"}} onClick={addValue}>Add</button>
    <button disabled={isDisable} onClick={removeValue}>Remove</button>    
    
  </>
  )
}


export default Counter