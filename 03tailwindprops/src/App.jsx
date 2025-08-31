import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0)
let myObj = {
  name:"anirban",
  title:"das"
} 
  return (
    <>
       <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>  
       <Card addObj={myObj}/>
       <Card add="add extra using props"/>
       <Card username="ani"/>
       <Card username="bani"/>
    </>
  )
}

export default App
