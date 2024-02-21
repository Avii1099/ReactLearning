import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [passwordLength, setPasswordLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) letters += "0123456789"
    if (charAllowed) letters += "!@#$%^&*()_{}"

    for (let i = 0; i < passwordLength; i++) {
      pass += letters[Math.floor(Math.random() * letters.length)];
    }
    setPassword(pass)
  }, [passwordLength, charAllowed, numberAllowed, setPassword])
  
  useEffect(()=> {
    passwordGenerator(passwordLength, charAllowed, numberAllowed)
  }, [passwordLength, charAllowed, numberAllowed, passwordGenerator])


  //useRef hook
  const passwordRef = useRef(null)

  const copyPasswordClipBoard = useCallback(() => {
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 100)
    window.navigator.clipboard.writeText(password)
  }, [password])

  return (    
    <>
      <div className="flex w-full mx-auto my-8 items-center space-x-2 md:w-1/3">
        <h2 className="flex text-3xl items-center font-bold leading-tight text-black sm:text-4xl">Password Generator
        </h2>
      </div>
      <div className="flex w-full mx-auto my-8 items-center space-x-2 md:w-1/3">

        <input
          className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
          type="text" placeholder="Password" value={password} readOnly ref={passwordRef}></input>
        <button type="button"
          className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          onClick={copyPasswordClipBoard}>
          Copy
        </button>
      </div>
      <div className="flex w-full mx-auto my-8 items-center space-x-2 md:w-1/3">
        <input type="range" min={6} max={100} value={passwordLength} className='cursor-pointer' 
        onChange={(e) => setPasswordLength(e.target.value)}/>
        <label> Length: {passwordLength}</label>

        <div className='flex items-center gap-x-1'>          
          <label> <input name='Number' type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={() => setNumberAllowed((prev)=> !prev)} />  Number</label>          
          <label> <input name='Char' type="checkbox" defaultChecked={charAllowed} id='numberInput' onChange={() => setCharAllowed((prev)=> !prev)} /> Special Char</label>
        </div>
      </div>
    </>
  )
}

export default App
