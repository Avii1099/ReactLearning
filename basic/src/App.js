// import logo from './logo.svg';
import './App.css';
import Video from './videoRender'
function App() {
  let name="Arvind"
  if (name==="Hey") {
    return (     
      <>
    <Video/>
    <h1> Hey i am {name}</h1>
  </>    
  );
  } 
  else{
    return <h1> Hey i am {name}</h1>
  }      
    
}

export default App;
