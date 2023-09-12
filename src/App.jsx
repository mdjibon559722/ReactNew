import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import user from './Users'
import Users from './Users'
import Friends from './friends'
function App() {

  function handleclick(){
    alert('button Clicked')
  }
  const addToFive = (num) =>{
    alert(num+3);
  }
  return (
    <>
      
      <h3>React Core Concepts 2</h3>

      <Friends></Friends>
      <Users></Users>
      <Team></Team>

      <Counter></Counter>

      <button onClick={handleclick}>Click Me</button>
      <button onClick={() =>{alert('second Clicked')}}>Third</button>
      <button onClick={() => addToFive(3)}>Third</button>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
