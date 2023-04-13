import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products />
    </div>
  )
}

export default Home
