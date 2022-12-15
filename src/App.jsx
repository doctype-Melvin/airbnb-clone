import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import data from '../data'


function App() {
const mapper = data.map(item => {
  return <Card
  key={item.id}
  img={item.coverImg}
  open={(item.openSpots > 0) ? item.openSpots : 'SOLD OUT'}
  star='./public/assets/star.png'
  rating={item.stats.rating}
  reviewCount={item.stats.reviewCount}
  price={item.price}
  title={item.title}
  location={item.location}
  />
})
return (
  <div>
    <Navbar logo="./public/assets/pngwing.com.png" />
    <Hero img='./public/assets/Group77.png' />
    {mapper}
    {/* <Card
    img='./public/assets/zaferes.png'
    label='SOLD OUT'
    star='./public/assets/star.png'
    rating={5.0}
    ratingAmount=' &#40;6&#41; &#x2022; USA'
    phrase='Life lessons with Katie Zaferes'
    price='From $136'
    person=' / person'
    /> */}
  </div>
  )
}

export default App
