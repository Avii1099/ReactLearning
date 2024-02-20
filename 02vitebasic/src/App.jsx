import './App.css'
import Card from './components/card.jsx'


function App(){
  let userDetails ={
    name: "Arvind Singh",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
  }
  let newUserDetails ={
    name: "Priyanka",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, debitis?"
  }
  return(
    <>
      <Card userDetails={userDetails}/>
      <Card userDetails={newUserDetails}/>
    </>
  )
}
export default App