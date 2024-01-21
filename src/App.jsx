import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const increment=()=>{
    if(count<10){
      setCount(count+1)
    //  setCount(prevCounter =>prevCounter+1)
    //  setCount(prevCounter =>prevCounter+1)
 }}

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter vallue</h2>

      <button onClick={increment}>Add Value</button>
      <br />
      <p>{count}</p>
      <br />
      {/* <button onClick={()=>setCount(count-1)}>Remove Value</button> */}
      <button onClick={() => count > 0 ? setCount(count - 1) : null}>Remove Value</button>

    </>
  )
}

export default App
