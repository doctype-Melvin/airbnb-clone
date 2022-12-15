import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from '../data'


function App() {
const Cards = data.map(item => {
  return (
  <Card
      key={item.id}
      {...item}
  />
  )
})
return (
  <div>
    <Navbar logo="./public/assets/pngwing.com.png" />
    <Hero img='./public/assets/Group77.png' />
    <section className='cardsList'>
    {Cards}  
    </section>
    
  </div>
  )
}

export default App
