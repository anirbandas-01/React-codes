import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5;

  let [counter, setCounter] = useState(15)

  const addValue = () =>{
    if (counter >=20) {
      alert('cannot go beyond 20');
    } else {
      setCounter(counter + 1);   
    }
    
    
  }

  const removeValue = () =>{
    if (counter > 0) {
       setCounter(counter - 1);  
    } else
    {
      alert('cannot go below 0');
    }    
  }

  return (
    <>
      <h1>Anirban is a Coder</h1>
      <h2>counter value:-{counter}</h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
