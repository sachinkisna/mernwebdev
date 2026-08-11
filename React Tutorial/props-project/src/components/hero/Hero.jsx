import React from 'react'
import './hero.css'
import Card from '../cards/Card'
import image1 from '../../assets/images (1).jpg'
import image2 from '../../assets/images (2).jpg'
import image3 from '../../assets/images.jpg'


function Hero() {
  return (
    <div className='hero'>
      <Card imageurl={image1} name="Shree radha" price="krishna"/>
      <Card imageurl={image2} name="Shree radha2" price="krishna2"/>
      <Card imageurl={image3} name="Shree radha3" price="krishna3"/>

        
      
    </div>
  )
}

export default Hero
