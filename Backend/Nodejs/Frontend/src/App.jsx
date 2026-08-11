import React from 'react'
import axios from 'axios'
import { useState } from 'react';

function App() {

  let[username,setUsername]=useState(null)
  let[age,setAge]=useState(null)
  let[city,setCity]=useState(null)

  async function getRes() {
    axios.post("http://localhost:8000/", {
      username:username,
      age:age,
      city:city

    })
      .then((e) => {
        console.log(e.data);

      })
      .catch((e) => {
        console.log(e)
      })





  }


  return (
    <div>
      <input type="text" placeholder='username' value= {username} onChange={(e)=>setUsername(e.target.value)} />
      <input type="text" placeholder='age' value= {age} onChange={(e)=>setAge(e.target.value)}/>
      <input type="text" placeholder='city' value= {city} onChange={(e)=>setCity(e.target.value)} />

      <button onClick={()=>getRes()}>Send</button>

    </div>
  )
}

export default App
