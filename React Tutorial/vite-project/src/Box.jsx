import React from 'react'
import  './App.css'

function Box({name="defultname"}) {
    
  return (
    <div className='div-box'>
        <h1>{name}</h1>
        <h2>Hare Krishna</h2>
      
    </div>
  )
}

export default Box
