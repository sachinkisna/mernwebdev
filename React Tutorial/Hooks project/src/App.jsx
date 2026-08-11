
import { useEffect, useRef, useState } from 'react'
import './App.css'



function App() {
  let count = useRef(0);

  let[num,setNum]=useState(0);





  useEffect(() => {
    count.current=count.current+1;
  
  })

  return (
    <>
      <h1>{count.current}</h1>
      <h1>{num}</h1>
      <button onClick={
        ()=>{
          setNum(++num);
        }
      }>buttom</button>

    </>
  )
}

export default App
